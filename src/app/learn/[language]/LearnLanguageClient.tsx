'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Language } from '@/types/learning';
import { LANGUAGES } from '@/data/languages';
import { getGrammarLessons, getDialogues, getVocabulary } from '@/data';
import { LearningLayoutClient } from '@/components/layout/LearningLayoutClient';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import {
  BookOpen,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Play,
  Sparkles,
  Lock,
  Languages,
} from 'lucide-react';
import {
  checkLessonLock,
  checkDialogueLock,
  getLanguageLevelsSummary,
} from '@/lib/curriculumProgression';
import { LevelProgressionTracker } from '@/components/grammar/LevelProgressionTracker';

interface LearnLanguageClientProps {
  language: Language;
}

export function LearnLanguageClient({ language }: LearnLanguageClientProps) {
  const langKey = language;
  const langMeta = LANGUAGES[langKey];
  const { progress } = useAuth();
  const { t } = useLocale();

  const grammarLessons = getGrammarLessons(langKey);
  const dialogues = getDialogues(langKey);
  const vocabularies = getVocabulary(langKey);

  const [activeLevelFilter, setActiveLevelFilter] = useState<string | null>(null);

  const levelsSummary = getLanguageLevelsSummary(langKey, progress.completedLessons);

  const completedLessonsInLang = grammarLessons.filter((g) =>
    progress.completedLessons.includes(g.id)
  ).length;

  const completedDialoguesInLang = dialogues.filter((d) =>
    progress.completedDialogues.includes(d.id)
  ).length;

  const totalActivities = grammarLessons.length + dialogues.length;
  const completedTotal = completedLessonsInLang + completedDialoguesInLang;
  const progressPercent =
    totalActivities > 0 ? Math.round((completedTotal / totalActivities) * 100) : 0;

  const filteredLessons = activeLevelFilter
    ? grammarLessons.filter((l) => l.level === activeLevelFilter)
    : grammarLessons;

  const localizedLangName = t('lang_' + langKey, {}, langMeta.name);
  const localizedScriptType = t('script_' + langKey, {}, langMeta.scriptType);
  const localizedDescription = t('desc_' + langKey, {}, langMeta.description);
  const langShortName = localizedLangName.replace('Bahasa ', '');

  return (
    <LearningLayoutClient currentLanguage={langKey}>
      <div className="space-y-8">
        {/* Language Hero / Stats Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{langMeta.flag}</span>
              <span className="text-xs font-bold tracking-wider uppercase text-slate-500">
                {localizedScriptType}
              </span>
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                {localizedLangName}
              </h1>
              <p className="text-sm font-medium text-slate-500 mt-0.5">
                {langMeta.nativeName} — {t('greeting_label')}
                <span className="font-semibold text-slate-800">{langMeta.greeting}</span>
              </p>
            </div>

            <p className="text-xs md:text-sm text-slate-600 max-w-xl leading-relaxed">
              {localizedDescription}
            </p>
          </div>

          {/* Progress Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 min-w-[240px] space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
              <span>{t('mastery_progress')}</span>
              <span className="text-blue-600 font-bold">{progressPercent}%</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-500 flex justify-between gap-4">
              <span>{completedLessonsInLang} {t('grammar_lessons_completed')}</span>
              <span>{completedDialoguesInLang} {t('dialogues_completed')}</span>
            </div>
          </div>
        </div>

        {/* Quick Access Resource Cards: Kamus Kosakata & Target Studi/Beasiswa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Kamus Kosakata Card */}
          <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 flex flex-col justify-between gap-4 shadow-md">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                  <Languages size={15} />
                  <span>{t('interactive_vocab_dict')}</span>
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/30">
                  {vocabularies.length} {t('vocab_entries_count')}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {t('vocab_card_heading', { lang: langShortName })}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t('vocab_card_desc')}
              </p>
            </div>
            <Link
              href={`/learn/${langKey}/vocabulary`}
              className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm w-fit"
            >
              <span>{t('open_vocab')}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Study Abroad / Career Target Banner */}
          {langKey !== 'english' ? (
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 flex flex-col justify-between gap-4 shadow-md">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>{t('study_abroad_opportunity')}</span>
                </span>
                <h3 className="text-lg font-bold text-white">
                  {t('study_abroad_card_title', { lang: langShortName })}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t('study_abroad_card_desc', {
                    standards:
                      {
                        chinese: 'HSK 4-6 & HSKK',
                        japanese: 'JLPT N2-N1 & EJU',
                        korean: 'TOPIK 3-6',
                        thai: 'CU-TFL Level 3-4',
                        russian: 'ТРКИ-1 / ТРКИ-2 (TORFL)',
                        arabic: 'ALPT & Mustawa 3-4',
                        french: 'DELF B2 & DALF C1',
                        dutch: 'NT2-II & CNaVT EDUP',
                        german: 'TestDaF 4x4 & DSH-2',
                        spanish: 'DELE B2 & C1',
                      }[langKey] || 'CEFR B2-C1',
                  })}
                </p>
              </div>
              <Link
                href={`/study-abroad?lang=${langKey}`}
                className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm w-fit"
              >
                <span>{t('open_study_abroad')}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 flex flex-col justify-between gap-4 shadow-md">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>{t('global_prep_badge')}</span>
                </span>
                <h3 className="text-lg font-bold text-white">
                  {t('global_career_title')}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t('global_career_desc')}
                </p>
              </div>
              <Link
                href="/study-abroad?lang=english"
                className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm w-fit"
              >
                <span>{t('open_global_study')}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>

        {/* Section 1: Structured Grammar Units with Level Progression */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900">
                {t('grammar_section_title')}
              </h2>
            </div>
            <span className="text-xs font-medium text-slate-500">
              {t('lessons_available_count', { count: grammarLessons.length })}
            </span>
          </div>

          {/* Level Progression Stepper */}
          <LevelProgressionTracker
            levels={levelsSummary}
            activeLevelFilter={activeLevelFilter}
            onSelectLevel={setActiveLevelFilter}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLessons.map((lesson) => {
              const isDone = progress.completedLessons.includes(lesson.id);
              const lockStatus = checkLessonLock(lesson, progress.completedLessons);
              const isLocked = !lockStatus.isUnlocked;

              return (
                <div
                  key={lesson.id}
                  className={`bg-white rounded-2xl border p-5 flex flex-col justify-between space-y-4 transition-all ${
                    isLocked
                      ? 'border-slate-200/90 bg-slate-50/50 opacity-90'
                      : isDone
                      ? 'border-emerald-200/90 hover:shadow-md'
                      : 'border-slate-200/80 hover:border-blue-400 hover:shadow-md'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          isLocked
                            ? 'bg-slate-200 text-slate-600'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        Unit {lesson.unit} • {lesson.level}
                      </span>

                      {isDone ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          <CheckCircle2 size={13} />
                          <span>{t('status_mastered')}</span>
                        </span>
                      ) : isLocked ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          <Lock size={12} />
                          <span>{t('status_locked')}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                          {t('status_ready')}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {lesson.title}
                    </h3>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 font-mono text-xs text-slate-700 truncate">
                      💡 {lesson.patternFormula}
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {lesson.summary}
                    </p>

                    {isLocked && lockStatus.reason && (
                      <p className="text-[11px] text-amber-800 bg-amber-50/80 p-2 rounded-lg border border-amber-200/60 leading-relaxed flex items-center gap-1.5">
                        <Lock size={12} className="shrink-0 text-amber-700" />
                        <span>{lockStatus.reason}</span>
                      </p>
                    )}
                  </div>

                  {isLocked ? (
                    <div className="pt-1">
                      {lockStatus.prerequisiteLessonId ? (
                        <Link
                          href={`/learn/${langKey}/grammar/${lockStatus.prerequisiteLessonId}`}
                          className="w-full py-2 px-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Lock size={13} />
                          <span>
                            {t('open_prerequisite_lesson', {
                              level: lockStatus.prerequisiteLevel || 'Sebelumnya',
                            })}
                          </span>
                        </Link>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="w-full py-2 px-4 rounded-xl bg-slate-200 text-slate-400 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-not-allowed"
                        >
                          <Lock size={13} />
                          <span>{t('status_locked')}</span>
                        </button>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={`/learn/${langKey}/grammar/${lesson.id}`}
                      className="w-full py-2 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>{isDone ? t('review_lesson_again') : t('learn_lesson_btn')}</span>
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Situational Dialogues with Gating */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare size={20} className="text-indigo-600" />
              <h2 className="text-xl font-bold text-slate-900">
                {t('dialogue_section_title')}
              </h2>
            </div>
            <span className="text-xs font-medium text-slate-500">
              {t('scenarios_count', { count: dialogues.length })}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dialogues.map((dialogue) => {
              const isDone = progress.completedDialogues.includes(dialogue.id);
              const dialLock = checkDialogueLock(dialogue, progress.completedDialogues);
              const isLocked = !dialLock.isUnlocked;

              return (
                <div
                  key={dialogue.id}
                  className={`bg-white rounded-2xl border p-5 flex flex-col justify-between space-y-4 transition-all ${
                    isLocked
                      ? 'border-slate-200/90 bg-slate-50/50 opacity-90'
                      : isDone
                      ? 'border-emerald-200/90 hover:shadow-md'
                      : 'border-slate-200/80 hover:border-indigo-400 hover:shadow-md'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                        {dialogue.category} • {dialogue.level}
                      </span>
                      {isDone ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          <CheckCircle2 size={13} />
                          <span>{t('dialogue_finished')}</span>
                        </span>
                      ) : isLocked ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          <Lock size={12} />
                          <span>{t('status_locked')}</span>
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                          {t('status_ready')}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 text-base leading-snug">
                        {dialogue.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {dialogue.titleNative}
                      </p>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {dialogue.description}
                    </p>

                    {isLocked && dialLock.reason && (
                      <p className="text-[11px] text-amber-800 bg-amber-50/80 p-2 rounded-lg border border-amber-200/60 leading-relaxed flex items-center gap-1.5">
                        <Lock size={12} className="shrink-0 text-amber-700" />
                        <span>{dialLock.reason}</span>
                      </p>
                    )}
                  </div>

                  {isLocked ? (
                    <div className="pt-1">
                      {dialLock.prerequisiteDialogueId ? (
                        <Link
                          href={`/learn/${langKey}/dialogue/${dialLock.prerequisiteDialogueId}`}
                          className="w-full py-2 px-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Lock size={13} />
                          <span>{t('complete_first_dialogue')}</span>
                        </Link>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="w-full py-2 px-4 rounded-xl bg-slate-200 text-slate-400 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-not-allowed"
                        >
                          <Lock size={13} />
                          <span>{t('status_locked')}</span>
                        </button>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={`/learn/${langKey}/dialogue/${dialogue.id}`}
                      className="w-full py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Play size={13} />
                      <span>{isDone ? t('reopen_dialogue') : t('start_dialogue_practice')}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LearningLayoutClient>
  );
}
