'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Language } from '@/types/learning';
import { LANGUAGES } from '@/data/languages';
import { getGrammarLessons } from '@/data';
import { LearningLayoutClient } from '@/components/layout/LearningLayoutClient';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import { BookOpen, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import {
  checkLessonLock,
  getLanguageLevelsSummary,
} from '@/lib/curriculumProgression';
import { LevelProgressionTracker } from '@/components/grammar/LevelProgressionTracker';

interface GrammarListClientProps {
  language: Language;
}

export function GrammarListClient({ language }: GrammarListClientProps) {
  const langKey = language;
  const langMeta = LANGUAGES[langKey];
  const { progress } = useAuth();
  const { t } = useLocale();
  const lessons = getGrammarLessons(langKey);

  const [activeLevelFilter, setActiveLevelFilter] = useState<string | null>(null);

  const levelsSummary = getLanguageLevelsSummary(langKey, progress.completedLessons);

  const filteredLessons = activeLevelFilter
    ? lessons.filter((l) => l.level === activeLevelFilter)
    : lessons;

  const localizedLangName = t('lang_' + langKey, {}, langMeta.name);

  return (
    <LearningLayoutClient currentLanguage={langKey}>
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            <BookOpen size={14} />
            <span>{t('grammar_collection_badge')}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('grammar_list_title', { lang: localizedLangName })}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {t('grammar_list_desc')}
          </p>
        </div>

        {/* Level Progression Stepper / Filter */}
        <LevelProgressionTracker
          levels={levelsSummary}
          activeLevelFilter={activeLevelFilter}
          onSelectLevel={setActiveLevelFilter}
        />

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredLessons.map((lesson) => {
            const isCompleted = progress.completedLessons.includes(lesson.id);
            const lockStatus = checkLessonLock(lesson, progress.completedLessons);
            const isLocked = !lockStatus.isUnlocked;

            return (
              <div
                key={lesson.id}
                className={`bg-white rounded-2xl border p-6 flex flex-col justify-between space-y-4 transition-all ${
                  isLocked
                    ? 'border-slate-200/90 bg-slate-50/50 opacity-90'
                    : isCompleted
                    ? 'border-emerald-200/90 hover:shadow-md'
                    : 'border-slate-200/90 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        isLocked
                          ? 'bg-slate-200 text-slate-600'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      Unit {lesson.unit} • {lesson.level}
                    </span>

                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 size={13} />
                        <span>{t('status_mastered')}</span>
                      </span>
                    ) : isLocked ? (
                      <span className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        <Lock size={12} />
                        <span>{t('status_locked')}</span>
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                        {t('status_ready')}
                      </span>
                    )}
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 leading-snug">
                    {lesson.title}
                  </h2>

                  <div className="p-3 rounded-xl bg-slate-900 text-amber-300 font-mono text-xs">
                    {lesson.patternFormula}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lesson.summary}
                  </p>

                  {isLocked && lockStatus.reason && (
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-relaxed flex items-center gap-1.5">
                      <Lock size={13} className="shrink-0 text-amber-700" />
                      <span>{lockStatus.reason}</span>
                    </div>
                  )}
                </div>

                {isLocked ? (
                  <div className="flex items-center gap-2">
                    {lockStatus.prerequisiteLessonId ? (
                      <Link
                        href={`/learn/${langKey}/grammar/${lockStatus.prerequisiteLessonId}`}
                        className="w-full py-2.5 px-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
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
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-200 text-slate-500 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-not-allowed"
                      >
                        <Lock size={13} />
                        <span>{t('status_locked')}</span>
                      </button>
                    )}
                  </div>
                ) : (
                  <Link
                    href={`/learn/${langKey}/grammar/${lesson.id}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{isCompleted ? t('read_again') : t('study_this_lesson')}</span>
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </LearningLayoutClient>
  );
}
