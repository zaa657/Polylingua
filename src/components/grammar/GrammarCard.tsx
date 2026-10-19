'use client';

import React from 'react';
import { GrammarLesson } from '@/types/learning';
import { AudioSpeaker } from '../ui/AudioSpeaker';
import { useLocale } from '@/context/LocaleContext';
import {
  BookOpen,
  Sparkles,
  AlertTriangle,
  Check,
  X,
  Volume2,
} from 'lucide-react';

interface GrammarCardProps {
  lesson: GrammarLesson;
  onStartQuiz?: () => void;
  langCode: string;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
}

export const GrammarCard: React.FC<GrammarCardProps> = ({
  lesson,
  onStartQuiz,
  langCode,
  isCompleted = false,
  onToggleComplete,
}) => {
  const { t } = useLocale();

  return (
    <article className="w-full max-w-3xl mx-auto space-y-8 bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-sm">
      {/* Unit & Level Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-white">
            Unit {lesson.unit}
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {lesson.level}
          </span>
          {isCompleted && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Check size={13} />
              <span>{t('mastered_badge')}</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {onToggleComplete && (
            <button
              type="button"
              onClick={onToggleComplete}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                isCompleted
                  ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
              }`}
            >
              <Check size={13} />
              <span>{isCompleted ? t('unmark_mastered') : t('mark_mastered')}</span>
            </button>
          )}
        </div>
      </div>

      {/* Title & Native Heading */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {lesson.title}
        </h1>
        {lesson.titleNative && (
          <p className="text-lg font-medium text-slate-500">
            {lesson.titleNative}
          </p>
        )}
      </div>

      {/* Formula Pattern Box */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md shadow-slate-200/50 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
          <Sparkles size={14} />
          <span>{t('formula_pattern')}</span>
        </div>
        <p className="text-lg md:text-xl font-mono font-medium tracking-wide text-slate-100">
          {lesson.patternFormula}
        </p>
      </div>

      {/* Summary */}
      <div className="text-base text-slate-700 leading-relaxed font-normal bg-slate-50/60 p-4 rounded-2xl border border-slate-200/60">
        {lesson.summary}
      </div>

      {/* Explanation Sections */}
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <BookOpen size={18} className="text-blue-600" />
          <span>{t('detailed_explanation')}</span>
        </h2>

        {lesson.explanationSections.map((sec, idx) => (
          <div key={idx} className="space-y-3 bg-white rounded-2xl border border-slate-100 p-5 shadow-xs">
            <h3 className="font-semibold text-slate-900 text-base">
              {sec.heading}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {sec.content}
            </p>
            {sec.ruleList && sec.ruleList.length > 0 && (
              <ul className="space-y-2 pt-2 border-t border-slate-50">
                {sec.ruleList.map((r, rIdx) => (
                  <li key={rIdx} className="text-sm text-slate-700 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Interactive Example Sentences */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <Volume2 size={18} className="text-emerald-600" />
          <span>{t('interactive_examples_audio')}</span>
        </h2>

        <div className="space-y-3">
          {lesson.examples.map((ex) => (
            <div
              key={ex.id}
              className="group p-4 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-sm bg-slate-50/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <p className="text-lg font-medium text-slate-900">
                  {ex.native}
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  {ex.phonetic}
                </p>
                <p className="text-sm text-slate-700 font-normal">
                  {ex.translationId}
                </p>
                {ex.note && (
                  <p className="text-xs text-blue-600 font-medium pt-1">
                    💡 {ex.note}
                  </p>
                )}
              </div>

              <div className="self-end md:self-center">
                <AudioSpeaker
                  text={ex.native}
                  lang={langCode}
                  size="sm"
                  label={t('listen_sentence')}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Mistakes */}
      {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2 text-rose-700">
            <AlertTriangle size={18} className="text-rose-500" />
            <span>{t('common_pitfalls')}</span>
          </h2>

          <div className="space-y-3">
            {lesson.commonMistakes.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-rose-100 bg-rose-50/40 p-4 space-y-2 text-sm"
              >
                <div className="flex items-center gap-2 text-rose-700 font-medium">
                  <X size={16} className="text-rose-600 shrink-0" />
                  <span className="line-through">{m.incorrect}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span>{m.correct}</span>
                </div>
                <p className="text-xs text-slate-600 pt-1 border-t border-rose-100">
                  {m.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cultural Nuance Tip */}
      {lesson.culturalContext && (
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-5 text-sm text-amber-900 space-y-1">
          <h3 className="font-bold flex items-center gap-2 text-amber-950">
            <span>{t('cultural_context_title')}</span>
          </h3>
          <p className="text-xs leading-relaxed text-amber-900">
            {lesson.culturalContext}
          </p>
        </div>
      )}

      {/* Action Footer */}
      {onStartQuiz && (
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onStartQuiz}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen size={16} />
            <span>{t('take_quiz_btn')}</span>
          </button>
        </div>
      )}
    </article>
  );
};
