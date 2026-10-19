'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Language, DialogueScenario } from '@/types/learning';
import { LearningLayoutClient } from '@/components/layout/LearningLayoutClient';
import { DialogueCarousel } from '@/components/dialogue/DialogueCarousel';
import { QuizEngine } from '@/components/quiz/QuizEngine';
import { ChevronLeft, Lock, ArrowRight, Unlock } from 'lucide-react';
import { progressService } from '@/lib/progressService';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import { checkDialogueLock } from '@/lib/curriculumProgression';

interface DialogueDetailClientProps {
  language: Language;
  dialogue: DialogueScenario;
}

export function DialogueDetailClient({
  language,
  dialogue,
}: DialogueDetailClientProps) {
  const { user, progress, reloadProgress } = useAuth();
  const { t } = useLocale();
  const langKey = language;

  const [mode, setMode] = useState<'carousel' | 'quiz'>('carousel');
  const [bypassLock, setBypassLock] = useState(false);

  const lockStatus = checkDialogueLock(dialogue, progress.completedDialogues);
  const isLocked = !lockStatus.isUnlocked && !bypassLock;

  const handleQuizComplete = async () => {
    await progressService.markDialogueComplete(dialogue.id, user?.uid);
    await reloadProgress();
  };

  return (
    <LearningLayoutClient currentLanguage={langKey}>
      <div className="space-y-6">
        {/* Back Link & Mode Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/learn/${langKey}/dialogue`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft size={16} />
            <span>{t('back_to_dialogue_list')}</span>
          </Link>

          <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-xl text-xs font-semibold">
            <button
              type="button"
              onClick={() => setMode('carousel')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                mode === 'carousel'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('tab_carousel')}
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
              {t('tab_dialogue_quiz', { count: dialogue.comprehensionQuiz.length })}
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
                  {t('dialogue_locked_warning')}
                </h3>
                <p className="text-xs text-amber-900 leading-relaxed">
                  {lockStatus.reason}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-amber-200/60">
              {lockStatus.prerequisiteDialogueId && (
                <Link
                  href={`/learn/${langKey}/dialogue/${lockStatus.prerequisiteDialogueId}`}
                  className="px-4 py-2 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>{t('open_prev_dialogue')}</span>
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

        {/* Dynamic Mode Display */}
        {mode === 'carousel' ? (
          <DialogueCarousel
            scenario={dialogue}
            onStartQuiz={() => setMode('quiz')}
          />
        ) : (
          <QuizEngine
            quizId={`quiz-${dialogue.id}`}
            title={`${t('quiz_header_title')}: ${dialogue.title}`}
            questions={dialogue.comprehensionQuiz}
            onComplete={handleQuizComplete}
            onBack={() => setMode('carousel')}
          />
        )}
      </div>
    </LearningLayoutClient>
  );
}
