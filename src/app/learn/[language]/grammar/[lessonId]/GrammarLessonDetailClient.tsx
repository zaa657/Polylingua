'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Language, GrammarLesson } from '@/types/learning';
import { LearningLayoutClient } from '@/components/layout/LearningLayoutClient';
import { GrammarCard } from '@/components/grammar/GrammarCard';
import { QuizEngine } from '@/components/quiz/QuizEngine';
import { ChevronLeft, Lock, ArrowRight, Unlock } from 'lucide-react';
import { progressService } from '@/lib/progressService';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import { checkLessonLock } from '@/lib/curriculumProgression';
import { getVoiceLangCode } from '@/lib/speechService';

interface GrammarLessonDetailClientProps {
  language: Language;
  lesson: GrammarLesson;
}

export function GrammarLessonDetailClient({
  language,
  lesson,
}: GrammarLessonDetailClientProps) {
  const { user, progress, reloadProgress } = useAuth();
  const { t } = useLocale();
  const langKey = language;

  const [mode, setMode] = useState<'study' | 'quiz'>('study');
  const [bypassLock, setBypassLock] = useState(false);

  const lockStatus = checkLessonLock(lesson, progress.completedLessons);
  const isLocked = !lockStatus.isUnlocked && !bypassLock;
  const isCompleted = progress.completedLessons.includes(lesson.id);

  const voiceLangCode = getVoiceLangCode(langKey);

  const handleQuizComplete = async () => {
    await progressService.markLessonComplete(lesson.id, user?.uid);
    await reloadProgress();
  };

  const handleToggleComplete = async () => {
    if (isCompleted) {
      const updated = progress.completedLessons.filter((id) => id !== lesson.id);
      await progressService.saveProgress({ ...progress, completedLessons: updated }, user?.uid);
    } else {
      await progressService.markLessonComplete(lesson.id, user?.uid);
    }
    await reloadProgress();
  };

  const quizTimeLabel =
    lesson.practiceQuiz.length >= 20
      ? '40 Min'
      : `${Math.round((lesson.practiceQuiz.length / 25) * 40)} Min`;

  return (
    <LearningLayoutClient currentLanguage={langKey}>
      <div className="space-y-6">
        {/* Back Link & Mode Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/learn/${langKey}/grammar`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft size={16} />
            <span>{t('back_to_grammar_list')}</span>
          </Link>

          <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-xl text-xs font-semibold">
            <button
              type="button"
              onClick={() => setMode('study')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                mode === 'study'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('tab_explanation')}
            </button>
            <button
              type="button"
              onClick={() => setMode('quiz')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                mode === 'quiz'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('tab_quiz_badge', { count: lesson.practiceQuiz.length, time: quizTimeLabel })}
            </button>
          </div>
        </div>

        {/* Locked Prerequisite Alert Banner */}
        {isLocked && (
          <div className="bg-amber-50 border border-amber-300 rounded-3xl p-5 md:p-6 text-amber-950 space-y-3 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-200/80 text-amber-800 flex items-center justify-center shrink-0">
                <Lock size={20} />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-sm md:text-base text-amber-950">
                  {t('lesson_locked_warning')}
                </h3>
                <p className="text-xs text-amber-900 leading-relaxed">
                  {lockStatus.reason}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-amber-200/60">
              {lockStatus.prerequisiteLessonId && (
                <Link
                  href={`/learn/${langKey}/grammar/${lockStatus.prerequisiteLessonId}`}
                  className="px-4 py-2 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>
                    {t('open_prerequisite_lesson', {
                      level: lockStatus.prerequisiteLevel || 'Sebelumnya',
                    })}
                  </span>
                  <ArrowRight size={14} />
                </Link>
              )}
              <button
                type="button"
                onClick={() => setBypassLock(true)}
                className="px-3.5 py-2 rounded-xl border border-amber-300 text-amber-900 hover:bg-amber-100 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Unlock size={13} />
                <span>{t('bypass_lock_btn')}</span>
              </button>
            </div>
          </div>
        )}

        {/* Content depending on mode */}
        {mode === 'study' ? (
          <GrammarCard
            lesson={lesson}
            langCode={voiceLangCode}
            onStartQuiz={() => setMode('quiz')}
            isCompleted={isCompleted}
            onToggleComplete={handleToggleComplete}
          />
        ) : (
          <QuizEngine
            quizId={lesson.id}
            title={`${t('quiz_header_title')}: ${lesson.title}`}
            questions={lesson.practiceQuiz}
            onComplete={handleQuizComplete}
            onBack={() => setMode('study')}
          />
        )}
      </div>
    </LearningLayoutClient>
  );
}
