'use client';

import React, { useState, useEffect, useRef } from 'react';
import { StudyChecklistItem, QuizQuestion } from '@/types/learning';
import { AudioSpeaker } from '@/components/ui/AudioSpeaker';
import { useLocale } from '@/context/LocaleContext';
import confetti from 'canvas-confetti';
import {
  X,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  BookOpen,
  PenTool,
  Puzzle,
  Globe,
  SlidersHorizontal,
  Clock,
} from 'lucide-react';

interface StudyTargetTestModalProps {
  target: StudyChecklistItem | null;
  countryName: string;
  isOpen: boolean;
  onClose: () => void;
  onPassTest: (targetId: string, score: number) => Promise<void>;
  alreadyPassed: boolean;
  previousScore?: number;
}

interface StudyTargetTestModalContentProps {
  target: StudyChecklistItem;
  countryName: string;
  onClose: () => void;
  onPassTest: (targetId: string, score: number) => Promise<void>;
  alreadyPassed: boolean;
  previousScore?: number;
}

const StudyTargetTestModalContent: React.FC<StudyTargetTestModalContentProps> = ({
  target,
  countryName,
  onClose,
  onPassTest,
}) => {
  const { locale, t } = useLocale();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [essayAnswers, setEssayAnswers] = useState<Record<string, string>>({});
  const [reorderedIndices, setReorderedIndices] = useState<Record<string, number[]>>({});
  const [activeTab, setActiveTab] = useState<'all' | 'pg' | 'essai' | 'sambung_kata' | 'artikan' | 'bebas'>('all');
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [passed, setPassed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const test = target.test;
  const questions: QuizQuestion[] = test?.questions || [];
  const passingScorePercent = test?.passingScorePercent || 75;
  const totalQuestions = questions.length;

  // 50 Soal = 90 Menit (5400 detik). Ujian bagian lebih kecil disesuaikan proporsional.
  const initialDurationMinutes = totalQuestions >= 40 ? 90 : Math.max(10, Math.round((totalQuestions / 50) * 90));
  const [timeLeft, setTimeLeft] = useState<number>(() => initialDurationMinutes * 60);
  const timeUp = timeLeft <= 0;

  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const remainingSecs = secs % 60;
    if (hours > 0) {
      return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(remainingSecs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(remainingSecs).padStart(2, '0')}`;
  };

  const submitRef = useRef<(isForced?: boolean) => Promise<void>>(async () => {});

  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(() => {
            submitRef.current(true);
          }, 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted]);

  const isQuestionAnswered = (q: QuizQuestion): boolean => {
    if (q.type === 'essay') {
      return (essayAnswers[q.id] || '').trim().length >= 10;
    }
    if (q.type === 'sentence_reorder') {
      return (reorderedIndices[q.id] || []).length > 0;
    }
    return selectedAnswers[q.id] !== undefined;
  };

  const isQuestionCorrect = (q: QuizQuestion): boolean => {
    if (q.type === 'multiple_choice' || q.type === 'translation' || q.type === 'listen_comprehension') {
      return selectedAnswers[q.id] === q.correctAnswerIndex;
    }
    if (q.type === 'sentence_reorder') {
      const idxs = reorderedIndices[q.id] || [];
      const userOrder = idxs.map((i) => q.scrambledWords?.[i] || '');
      if (!q.correctOrder || userOrder.length === 0) return false;
      return JSON.stringify(userOrder) === JSON.stringify(q.correctOrder);
    }
    if (q.type === 'essay') {
      const text = (essayAnswers[q.id] || '').trim().toLowerCase();
      if (text.length < 10) return false;
      if (q.keywords && q.keywords.length > 0) {
        const matches = q.keywords.filter((k) => text.includes(k.toLowerCase())).length;
        return matches >= Math.ceil(q.keywords.length / 2);
      }
      return true;
    }
    return false;
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleEssayChange = (questionId: string, text: string) => {
    if (submitted) return;
    setEssayAnswers((prev) => ({
      ...prev,
      [questionId]: text,
    }));
  };

  const handleAddWordFromPool = (questionId: string, poolIndex: number) => {
    if (submitted) return;
    const currentIdxs = reorderedIndices[questionId] || [];
    if (currentIdxs.includes(poolIndex)) return;
    setReorderedIndices((prev) => ({
      ...prev,
      [questionId]: [...currentIdxs, poolIndex],
    }));
  };

  const handleRemoveWordFromReordered = (questionId: string, reorderedPosition: number) => {
    if (submitted) return;
    const currentIdxs = reorderedIndices[questionId] || [];
    const updated = [...currentIdxs];
    updated.splice(reorderedPosition, 1);
    setReorderedIndices((prev) => ({
      ...prev,
      [questionId]: updated,
    }));
  };

  const handleResetReorder = (questionId: string) => {
    if (submitted) return;
    setReorderedIndices((prev) => ({
      ...prev,
      [questionId]: [],
    }));
  };

  const answeredCount = questions.filter(isQuestionAnswered).length;
  const allAnswered = answeredCount === totalQuestions;

  const handleSubmit = async (isForced = false) => {
    if ((!allAnswered && !isForced) || submitting) return;
    setSubmitting(true);

    let correctCount = 0;
    questions.forEach((q) => {
      if (isQuestionCorrect(q)) {
        correctCount++;
      }
    });

    const calculatedScore = Math.round((correctCount / totalQuestions) * 100);
    const isPass = calculatedScore >= passingScorePercent;

    setScore(calculatedScore);
    setPassed(isPass);
    setSubmitted(true);

    if (isPass) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
      await onPassTest(target.id, calculatedScore);
    }
    setSubmitting(false);
  };

  useEffect(() => {
    submitRef.current = handleSubmit;
  });

  const handleRetry = () => {
    setSelectedAnswers({});
    setEssayAnswers({});
    setReorderedIndices({});
    setSubmitted(false);
    setScore(null);
    setPassed(false);
    setTimeLeft(initialDurationMinutes * 60);
  };

  const handleClose = () => {
    handleRetry();
    onClose();
  };

  const priorityColor = {
    Wajib: 'bg-rose-50 text-rose-700 border-rose-200',
    Penting: 'bg-amber-50 text-amber-700 border-amber-200',
    'Nilai Tambah': 'bg-blue-50 text-blue-700 border-blue-200',
  }[target.priority];

  const priorityLabel =
    locale === 'en'
      ? target.priority === 'Wajib'
        ? 'Required'
        : target.priority === 'Penting'
        ? 'Important'
        : 'Bonus'
      : target.priority;

  // Section categories counts
  const sectionCounts = {
    all: questions.length,
    pg: questions.filter((q) => q.sectionType === 'pg').length,
    essai: questions.filter((q) => q.sectionType === 'essai').length,
    sambung_kata: questions.filter((q) => q.sectionType === 'sambung_kata').length,
    artikan: questions.filter((q) => q.sectionType === 'artikan').length,
    bebas: questions.filter((q) => q.sectionType === 'bebas').length,
  };

  const filteredQuestions = questions.filter((q) => {
    if (activeTab === 'all') return true;
    return q.sectionType === activeTab;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl max-h-[92vh] rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 md:p-6 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/70">
          <div className="space-y-1.5 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${priorityColor}`}>
                {priorityLabel}
              </span>
              {target.targetLevel && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                  {target.targetLevel}
                </span>
              )}
              <span className="text-xs text-slate-500 font-medium">
                {locale === 'en' ? `Readiness Target for ${countryName}` : `Target Capaian Kuliah ${countryName}`}
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                {locale === 'en' ? `${totalQuestions} Questions` : `${totalQuestions} Soal`}
              </span>
              <div
                className={`flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold border transition-colors ${
                  timeLeft <= 300
                    ? 'bg-rose-100 text-rose-800 border-rose-300 animate-pulse'
                    : timeLeft <= 900
                    ? 'bg-amber-100 text-amber-800 border-amber-300'
                    : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}
                title={locale === 'en' ? 'Time limit' : 'Batas waktu pengerjaan'}
              >
                <Clock size={13} className={timeLeft <= 300 ? 'text-rose-600' : 'text-slate-500'} />
                <span>{t('time_remaining', { time: formatTime(timeLeft) })}</span>
              </div>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
              {test?.title || target.label}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {test?.description}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-2 -mr-1 -mt-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Section Tabs (if full 50 questions or multi-section) */}
        {sectionCounts.pg > 0 && sectionCounts.essai > 0 && (
          <div className="px-5 pt-3 border-b border-slate-100 bg-white flex items-center gap-1.5 overflow-x-auto text-xs font-semibold scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {locale === 'en' ? `All (${sectionCounts.all})` : `Semua (${sectionCounts.all})`}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pg')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === 'pg'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <BookOpen size={13} />
              <span>{locale === 'en' ? `1. MC (${sectionCounts.pg})` : `1. PG (${sectionCounts.pg})`}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('essai')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === 'essai'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <PenTool size={13} />
              <span>{locale === 'en' ? `2. Essay (${sectionCounts.essai})` : `2. Essai (${sectionCounts.essai})`}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('sambung_kata')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === 'sambung_kata'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Puzzle size={13} />
              <span>{locale === 'en' ? `3. Reorder (${sectionCounts.sambung_kata})` : `3. Sambung Kata (${sectionCounts.sambung_kata})`}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('artikan')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === 'artikan'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Globe size={13} />
              <span>{locale === 'en' ? `4. Translate (${sectionCounts.artikan})` : `4. Artikan (${sectionCounts.artikan})`}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('bebas')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === 'bebas'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <SlidersHorizontal size={13} />
              <span>{locale === 'en' ? `5. Practice (${sectionCounts.bebas})` : `5. Bebas (${sectionCounts.bebas})`}</span>
            </button>
          </div>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6">
          {timeUp && (
            <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl flex items-center gap-3 text-xs text-amber-950 font-semibold animate-in fade-in duration-200">
              <Clock size={18} className="text-amber-600 shrink-0" />
              <span>
                {locale === 'en'
                  ? `Time limit (${initialDurationMinutes} minutes) has expired! Exam has been submitted and evaluated.`
                  : `Waktu pengerjaan (${initialDurationMinutes} menit) telah berakhir! Ujian otomatis dikumpulkan dan dievaluasi.`}
              </span>
            </div>
          )}

          {submitted && (
            <div
              className={`p-6 rounded-2xl border text-center space-y-3 animate-in zoom-in-95 duration-200 ${
                passed
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50 border-amber-200 text-amber-950'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center text-2xl ${
                  passed ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                }`}
              >
                {passed ? <CheckCircle2 size={32} /> : <RotateCcw size={32} />}
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-xl">
                  {passed
                    ? locale === 'en'
                      ? 'READINESS EXAM PASSED!'
                      : 'LULUS UJIAN KESIAPAN KULIAH'
                    : locale === 'en'
                    ? `BELOW PASSING BENCHMARK (Min ${passingScorePercent}%)`
                    : `BELOW PASSING BENCHMARK (Minimal ${passingScorePercent}%)`}
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  {passed
                    ? locale === 'en'
                      ? 'Congratulations! This target has been automatically verified and added to your readiness checklist.'
                      : 'Selamat! Target kesiapan ini telah terverifikasi dan otomatis ditandai selesai pada checklist kuliah Anda.'
                    : locale === 'en'
                      ? 'Review the study guide, retake the test, or explore earlier lessons.'
                      : 'Silakan pelajari kembali materi panduan, ulangi tes ini, atau eksplorasi materi di modul bahasa.'}
                </p>
              </div>
              <div className="inline-block px-5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs font-extrabold text-2xl text-slate-900">
                {score}%
              </div>
            </div>
          )}

          {/* Question List */}
          <div className="space-y-6">
            {filteredQuestions.map((q) => {
              const globalIndex = questions.findIndex((item) => item.id === q.id);
              const isAnswered = isQuestionAnswered(q);
              const isCorrect = submitted ? isQuestionCorrect(q) : null;
              const selectedPoolIndices = reorderedIndices[q.id] || [];
              const reordered = selectedPoolIndices.map((i) => q.scrambledWords?.[i] || '');

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border space-y-4 transition-all ${
                    submitted
                      ? isCorrect
                        ? 'border-emerald-200 bg-emerald-50/30'
                        : 'border-rose-200 bg-rose-50/30'
                      : isAnswered
                      ? 'border-blue-200 bg-blue-50/20'
                      : 'border-slate-200/90 bg-white'
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {globalIndex + 1}
                      </span>
                      {q.sectionType && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider bg-slate-100 text-slate-700">
                          {q.sectionType === 'pg'
                            ? locale === 'en' ? 'Multiple Choice' : 'Pilihan Ganda'
                            : q.sectionType === 'essai'
                            ? locale === 'en' ? 'Essay' : 'Essai'
                            : q.sectionType === 'sambung_kata'
                            ? locale === 'en' ? 'Reorder' : 'Sambung Kata'
                            : q.sectionType === 'artikan'
                            ? locale === 'en' ? 'Translate' : 'Terjemahan'
                            : locale === 'en' ? 'Practice' : 'Soal Bebas'}
                        </span>
                      )}
                    </div>

                    {submitted && (
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                          isCorrect
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {isCorrect ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                        <span>{isCorrect ? (locale === 'en' ? 'Correct' : 'Benar') : (locale === 'en' ? 'Incorrect' : 'Salah')}</span>
                      </span>
                    )}
                  </div>

                  {/* Prompt */}
                  <h4 className="text-sm md:text-base font-bold text-slate-900 leading-snug">
                    {q.prompt}
                  </h4>

                  {/* Target Sentence & Audio */}
                  {q.targetSentence && (
                    <div className="p-3 bg-slate-50 border border-slate-200/90 rounded-xl flex items-center justify-between gap-3">
                      <span className="text-sm md:text-base font-medium text-slate-800">
                        {q.targetSentence}
                      </span>
                      {q.audioVoiceLang && (
                        <AudioSpeaker
                          text={q.targetSentence}
                          lang={q.audioVoiceLang}
                          size="sm"
                          label={locale === 'en' ? 'Audio' : 'Dengar'}
                        />
                      )}
                    </div>
                  )}

                  {/* 1. ESSAY TYPE RENDERER */}
                  {q.type === 'essay' && (
                    <div className="space-y-2">
                      <textarea
                        rows={3}
                        disabled={submitted}
                        value={essayAnswers[q.id] || ''}
                        onChange={(e) => handleEssayChange(q.id, e.target.value)}
                        placeholder={
                          locale === 'en'
                            ? 'Type your analysis / academic essay answer here (min. 10 chars)...'
                            : 'Ketik analisis / jawaban esai akademik Anda di sini (minimal 10 karakter)...'
                        }
                        className="w-full p-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs md:text-sm text-slate-800 placeholder:text-slate-400 transition-all resize-y"
                      />
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>{t('char_length_label', { count: (essayAnswers[q.id] || '').length })}</span>
                        {q.keywords && (
                          <span>{t('recommended_keywords', { keywords: q.keywords.join(', ') })}</span>
                        )}
                      </div>

                      {submitted && q.sampleAnswer && (
                        <div className="p-3 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1 text-xs text-indigo-950">
                          <strong className="block font-bold text-indigo-900">
                            {t('sample_answer_title')}
                          </strong>
                          <p className="leading-relaxed whitespace-pre-line text-slate-700 font-sans">
                            {q.sampleAnswer}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 2. SENTENCE REORDER TYPE RENDERER */}
                  {q.type === 'sentence_reorder' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl min-h-[46px] flex flex-wrap items-center gap-2">
                        {reordered.length === 0 ? (
                          <span className="text-xs text-slate-400 italic">
                            {t('reorder_placeholder')}
                          </span>
                        ) : (
                          reordered.map((w, wIdx) => (
                            <button
                              key={wIdx}
                              type="button"
                              disabled={submitted}
                              onClick={() => handleRemoveWordFromReordered(q.id, wIdx)}
                              className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-medium text-xs shadow-xs hover:bg-emerald-700 active:scale-95 transition-all cursor-pointer"
                              title={locale === 'en' ? 'Click to remove word' : 'Klik untuk membatalkan kata'}
                            >
                              {w} ✕
                            </button>
                          ))
                        )}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-2">
                          {q.scrambledWords?.map((w, wIdx) => {
                            const isUsed = selectedPoolIndices.includes(wIdx);
                            return (
                              <button
                                key={wIdx}
                                type="button"
                                disabled={submitted || isUsed}
                                onClick={() => handleAddWordFromPool(q.id, wIdx)}
                                className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                                  isUsed
                                    ? 'bg-slate-100 text-slate-300 border-slate-200 opacity-40 cursor-not-allowed'
                                    : 'bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 shadow-xs active:scale-95 cursor-pointer'
                                }`}
                              >
                                {w}
                              </button>
                            );
                          })}
                        </div>

                        {!submitted && reordered.length > 0 && (
                          <button
                            type="button"
                            onClick={() => handleResetReorder(q.id)}
                            className="text-xs text-slate-400 hover:text-slate-700 flex items-center gap-1 cursor-pointer font-medium"
                          >
                            <RotateCcw size={12} />
                            <span>{t('btn_clear')}</span>
                          </button>
                        )}
                      </div>

                      {submitted && !isCorrect && q.correctOrder && (
                        <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                          <strong>{t('correct_order_label')} </strong>
                          {q.correctOrder.join(' ')}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 3. MULTIPLE CHOICE / TRANSLATION / BEBAS OPTIONS */}
                  {q.options && q.options.length > 0 && (
                    <div className="space-y-2">
                      {q.options.map((opt, optIndex) => {
                        const isSelected = selectedAnswers[q.id] === optIndex;
                        const isOptionCorrect = optIndex === q.correctAnswerIndex;

                        let btnStyle = 'border-slate-200 hover:border-blue-300 hover:bg-slate-50 text-slate-800';
                        if (submitted) {
                          if (isOptionCorrect) {
                            btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                          } else if (isSelected && !isOptionCorrect) {
                            btnStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-semibold';
                          } else {
                            btnStyle = 'border-slate-200 opacity-60 text-slate-600';
                          }
                        } else if (isSelected) {
                          btnStyle = 'border-blue-600 bg-blue-50/70 text-blue-950 font-semibold shadow-xs ring-1 ring-blue-500';
                        }

                        const optionLabel = ['A', 'B', 'C', 'D'][optIndex] || `${optIndex + 1}`;

                        return (
                          <button
                            key={optIndex}
                            type="button"
                            disabled={submitted}
                            onClick={() => handleSelectOption(q.id, optIndex)}
                            className={`w-full text-left p-3 rounded-xl border text-xs md:text-sm transition-all flex items-center gap-3 cursor-pointer ${btnStyle}`}
                          >
                            <span
                              className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                                submitted
                                  ? isOptionCorrect
                                    ? 'bg-emerald-600 text-white'
                                    : isSelected
                                    ? 'bg-rose-600 text-white'
                                    : 'bg-slate-200 text-slate-600'
                                  : isSelected
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {optionLabel}
                            </span>
                            <span className="flex-1 leading-snug">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Explanation on Submission */}
                  {submitted && q.explanation && (
                    <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 flex items-start gap-2 bg-slate-50/50 p-3 rounded-xl">
                      <HelpCircle size={15} className="text-blue-600 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <strong className="text-slate-900 block">
                          {locale === 'en' ? 'Conceptual Walkthrough:' : 'Penjelasan Konseptual:'}
                        </strong>
                        <p className="leading-relaxed">{q.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 md:p-5 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
            {!submitted ? (
              <span>
                {locale === 'en' ? 'Answered: ' : 'Terjawab: '}
                <strong>{answeredCount}</strong> {locale === 'en' ? 'of ' : 'dari '}
                <strong>{totalQuestions}</strong> {locale === 'en' ? 'questions' : 'soal'}
                {answeredCount < totalQuestions && (
                  <span className="text-amber-600 ml-1.5 font-semibold">
                    {locale === 'en'
                      ? `(${totalQuestions - answeredCount} questions remaining)`
                      : `(Masih ada ${totalQuestions - answeredCount} soal yang belum selesai)`}
                  </span>
                )}
              </span>
            ) : passed ? (
              <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                <Sparkles size={14} />
                <span>
                  {locale === 'en'
                    ? 'Your readiness target was completed automatically!'
                    : 'Target capaian Anda berhasil terisi otomatis!'}
                </span>
              </span>
            ) : (
              <span className="text-rose-600 font-medium">
                {locale === 'en'
                  ? `Score ${score}% has not reached the ${passingScorePercent}% passing requirement.`
                  : `Skor ${score}% belum mencapai syarat kelulusan ${passingScorePercent}%.`}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {!submitted ? (
              <>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  {locale === 'en' ? 'Cancel' : 'Batal'}
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmit()}
                  disabled={!allAnswered || submitting}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm flex items-center justify-center gap-1.5 ${
                    allAnswered && !submitting
                      ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer active:scale-95'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Award size={14} />
                  <span>
                    {submitting
                      ? locale === 'en'
                        ? 'Evaluating...'
                        : 'Memeriksa...'
                      : locale === 'en'
                      ? 'Submit & Grade Exam'
                      : 'Kumpulkan & Nilai Ujian'}
                  </span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleRetry}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw size={13} />
                  <span>{locale === 'en' ? 'Retake Exam' : 'Uji Ulang'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  {locale === 'en' ? 'Done & Close' : 'Selesai & Tutup'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const StudyTargetTestModal: React.FC<StudyTargetTestModalProps> = (props) => {
  if (!props.isOpen || !props.target) return null;
  return (
    <StudyTargetTestModalContent
      key={props.target.id}
      target={props.target}
      countryName={props.countryName}
      onClose={props.onClose}
      onPassTest={props.onPassTest}
      alreadyPassed={props.alreadyPassed}
      previousScore={props.previousScore}
    />
  );
};
