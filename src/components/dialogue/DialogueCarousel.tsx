'use client';

import React, { useState, useEffect } from 'react';
import { DialogueScenario, DialogueSentence } from '@/types/learning';
import { ActiveRecallWord } from './ActiveRecallWord';
import { AudioSpeaker } from '../ui/AudioSpeaker';
import { useLocale } from '@/context/LocaleContext';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Sparkles,
  RotateCcw,
  BookOpen,
  CheckCircle2,
  UserCheck,
} from 'lucide-react';
import { speechService } from '@/lib/speechService';
import { progressService } from '@/lib/progressService';
import { useAuth } from '@/context/AuthContext';

interface DialogueCarouselProps {
  scenario: DialogueScenario;
  onStartQuiz?: () => void;
}

export const DialogueCarousel: React.FC<DialogueCarouselProps> = ({
  scenario,
  onStartQuiz,
}) => {
  const { user, reloadProgress } = useAuth();
  const { locale, t } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllPhonetic, setShowAllPhonetic] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [isSlowMode, setIsSlowMode] = useState(false);
  const [selectedRoleplayCharacter, setSelectedRoleplayCharacter] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const totalSentences = scenario.sentences.length;
  const currentSentence: DialogueSentence = scenario.sentences[currentIndex];
  const isMyTurnInRoleplay = selectedRoleplayCharacter === currentSentence.speakerId;

  // Auto speech on sentence change unless it's user's turn in roleplay
  useEffect(() => {
    if (!isMyTurnInRoleplay && currentSentence) {
      speechService.speak(currentSentence.nativeText, {
        lang: currentSentence.audioVoiceLang,
        rate: isSlowMode ? 0.75 : 1.0,
      });
    }
  }, [currentIndex, isSlowMode, isMyTurnInRoleplay, currentSentence]);

  const handleNext = async () => {
    speechService.stop();
    setShowTranslation(false);
    if (currentIndex < totalSentences - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      await progressService.markDialogueComplete(scenario.id, user?.uid);
      await reloadProgress();
    }
  };

  const handlePrev = () => {
    speechService.stop();
    setShowTranslation(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsCompleted(false);
    }
  };

  const handleRestart = () => {
    speechService.stop();
    setShowTranslation(false);
    setCurrentIndex(0);
    setIsCompleted(false);
  };

  const progressPercentage = ((currentIndex + 1) / totalSentences) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Top Header & Scenario Metadata */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
              {scenario.category}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              {scenario.level}
            </span>
          </div>

          {/* Settings: Audio Speed & Transliteration Toggles */}
          <div className="flex items-center gap-2 text-xs">
            <button
              type="button"
              onClick={() => setIsSlowMode(!isSlowMode)}
              className={`px-2.5 py-1.5 rounded-lg border font-medium transition-all cursor-pointer ${
                isSlowMode
                  ? 'bg-amber-50 text-amber-800 border-amber-300 font-semibold'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {isSlowMode ? t('speed_slow') : t('speed_normal')}
            </button>
            <button
              type="button"
              onClick={() => setShowAllPhonetic(!showAllPhonetic)}
              className={`px-2.5 py-1.5 rounded-lg border font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                showAllPhonetic
                  ? 'bg-blue-50 text-blue-800 border-blue-300'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {showAllPhonetic ? <EyeOff size={13} /> : <Eye size={13} />}
              <span>{showAllPhonetic ? t('hide_reading_aid') : t('show_reading_aid')}</span>
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          {scenario.title}
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          {scenario.titleNative} — {scenario.description}
        </p>

        {/* Roleplay Mode Picker */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <UserCheck size={15} className="text-indigo-600" />
            <span className="font-medium">{t('roleplay_mode_label')}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedRoleplayCharacter(null)}
              className={`px-2 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                selectedRoleplayCharacter === null
                  ? 'bg-indigo-600 text-white font-medium'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t('listen_both_roles')}
            </button>
            {scenario.characters.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedRoleplayCharacter(c.id)}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                  selectedRoleplayCharacter === c.id
                    ? 'bg-indigo-600 text-white font-medium'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{c.avatar}</span>
                <span>{t('role_label', { name: c.name })}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Dialogue Card Carousel */}
      {!isCompleted ? (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg shadow-slate-100 overflow-hidden transition-all duration-300">
          {/* Progress bar line */}
          <div className="h-1.5 w-full bg-slate-100">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {/* Sentence Counter & Roleplay Turn Indicator */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                {t('sentence_counter', { current: currentIndex + 1, total: totalSentences })}
              </span>
              {selectedRoleplayCharacter && (
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                    isMyTurnInRoleplay
                      ? 'bg-emerald-100 text-emerald-800 animate-pulse'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {isMyTurnInRoleplay ? t('roleplay_your_turn') : t('roleplay_listening')}
                </span>
              )}
            </div>

            {/* Speaker Info Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl shadow-inner">
                {currentSentence.avatar}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  {currentSentence.speakerName}
                  {isMyTurnInRoleplay && (
                    <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md font-medium">
                      {locale === 'en' ? 'Your Role' : 'Peran Anda'}
                    </span>
                  )}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {currentSentence.speakerRole}
                </p>
              </div>
            </div>

            {/* Focused Sentence Box (Active Recall Mode) */}
            <div className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-6 md:p-8 text-center space-y-4">
              <p className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1">
                <Sparkles size={13} className="text-amber-500" />
                <span>
                  {locale === 'en'
                    ? 'Hover or tap words to view pronunciation & meaning'
                    : 'Arahkan kursor atau sentuh kata untuk melihat cara baca & artinya'}
                </span>
              </p>

              {/* Native Words with Interactive Popover */}
              <div className="text-2xl md:text-3xl font-medium text-slate-900 leading-relaxed flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
                {currentSentence.words && currentSentence.words.length > 0 ? (
                  currentSentence.words.map((w, idx) => (
                    <ActiveRecallWord
                      key={idx}
                      wordInfo={w}
                      langCode={currentSentence.audioVoiceLang}
                      forceShowPhonetic={showAllPhonetic}
                    />
                  ))
                ) : (
                  <span>{currentSentence.nativeText}</span>
                )}
              </div>

              {/* Full sentence audio playback */}
              <div className="pt-2 flex justify-center">
                <AudioSpeaker
                  text={currentSentence.nativeText}
                  lang={currentSentence.audioVoiceLang}
                  rate={isSlowMode ? 0.75 : 1.0}
                  size="md"
                  label={locale === 'en' ? 'Listen to Full Sentence' : 'Dengarkan Seluruh Kalimat'}
                />
              </div>

              {/* Collapsible Translation */}
              <div className="pt-2">
                {showTranslation ? (
                  <div className="bg-white rounded-xl p-3 border border-slate-200 inline-block max-w-lg text-sm text-slate-700 animate-in fade-in">
                    <p className="font-medium">
                      {locale === 'en' && currentSentence.translationEn
                        ? currentSentence.translationEn
                        : currentSentence.translationId}
                    </p>
                    {locale !== 'en' && currentSentence.translationEn && (
                      <p className="text-xs text-slate-400 mt-1 italic">
                        &quot;{currentSentence.translationEn}&quot;
                      </p>
                    )}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowTranslation(true)}
                    className="text-xs text-blue-600 hover:text-blue-700 font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Eye size={12} />
                    <span>
                      {locale === 'en' ? 'Show English Translation' : 'Lihat Terjemahan Bahasa Indonesia'}
                    </span>
                  </button>
                )}
              </div>

              {/* Cultural Context Note if any */}
              {currentSentence.culturalNote && (
                <div className="text-left bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-amber-900">
                  <span className="font-semibold text-amber-950">
                    {locale === 'en' ? '💡 Cultural Note: ' : '💡 Catatan Budaya: '}
                  </span>
                  {currentSentence.culturalNote}
                </div>
              )}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft size={16} />
                <span>{t('btn_prev')}</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-95 flex items-center gap-1.5 cursor-pointer"
              >
                <span>
                  {currentIndex === totalSentences - 1
                    ? locale === 'en'
                      ? 'Complete Dialogue'
                      : 'Selesaikan Dialog'
                    : locale === 'en'
                    ? 'Next'
                    : 'Berikutnya'}
                </span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Completion Screen */
        <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
            <CheckCircle2 size={36} />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              {locale === 'en'
                ? 'Great! You Have Completed This Scenario!'
                : 'Hebat! Anda Telah Menyelesaikan Skenario Ini!'}
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              {locale === 'en'
                ? `All ${totalSentences} sentences in "${scenario.title}" have been studied.`
                : `Semua ${totalSentences} kalimat dalam situasi "${scenario.title}" telah Anda pelajari.`}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw size={15} />
              <span>{t('restart_dialogue')}</span>
            </button>

            {onStartQuiz && (
              <button
                type="button"
                onClick={onStartQuiz}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-md shadow-blue-200 flex items-center gap-2 cursor-pointer"
              >
                <BookOpen size={16} />
                <span>{t('take_dialogue_quiz')}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
