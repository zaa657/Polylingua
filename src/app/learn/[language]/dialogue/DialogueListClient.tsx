'use client';

import React from 'react';
import Link from 'next/link';
import { Language } from '@/types/learning';
import { LANGUAGES } from '@/data/languages';
import { getDialogues } from '@/data';
import { LearningLayoutClient } from '@/components/layout/LearningLayoutClient';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import { MessageSquare, Play, CheckCircle2, Lock } from 'lucide-react';
import { checkDialogueLock } from '@/lib/curriculumProgression';

interface DialogueListClientProps {
  language: Language;
}

export function DialogueListClient({ language }: DialogueListClientProps) {
  const langKey = language;
  const langMeta = LANGUAGES[langKey];
  const { progress } = useAuth();
  const { t } = useLocale();
  const dialogues = getDialogues(langKey);

  const localizedLangName = t('lang_' + langKey, {}, langMeta.name);

  return (
    <LearningLayoutClient currentLanguage={langKey}>
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
            <MessageSquare size={14} />
            <span>{t('dialogue_hub_title')}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('dialogue_page_title', { lang: localizedLangName })}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {t('dialogue_hub_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dialogues.map((dialogue) => {
            const isCompleted = progress.completedDialogues.includes(dialogue.id);
            const lockStatus = checkDialogueLock(dialogue, progress.completedDialogues);
            const isLocked = !lockStatus.isUnlocked;

            return (
              <div
                key={dialogue.id}
                className={`bg-white rounded-2xl border p-6 flex flex-col justify-between space-y-4 transition-all ${
                  isLocked
                    ? 'border-slate-200/90 bg-slate-50/50 opacity-90'
                    : isCompleted
                    ? 'border-emerald-200/90 hover:shadow-md'
                    : 'border-slate-200/90 hover:border-indigo-400 hover:shadow-md'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        isLocked
                          ? 'bg-slate-200 text-slate-600'
                          : 'bg-indigo-50 text-indigo-700'
                      }`}
                    >
                      {dialogue.category} • {dialogue.level}
                    </span>

                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 size={13} />
                        <span>{t('dialogue_finished')}</span>
                      </span>
                    ) : isLocked ? (
                      <span className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        <Lock size={12} />
                        <span>{t('status_locked')}</span>
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                        {t('status_ready')}
                      </span>
                    )}
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900 leading-snug">
                      {dialogue.title}
                    </h2>
                    <p className="text-xs font-medium text-slate-400">
                      {dialogue.titleNative}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dialogue.description}
                  </p>

                  <div className="flex items-center gap-2 pt-1 text-xs text-slate-600">
                    <span className="text-slate-400 text-[11px]">{t('speakers_label')}</span>
                    {dialogue.characters.map((c) => (
                      <span
                        key={c.id}
                        className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100"
                      >
                        <span>{c.avatar}</span>
                        <span>{c.name}</span>
                      </span>
                    ))}
                  </div>

                  {isLocked && lockStatus.reason && (
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-relaxed flex items-center gap-1.5">
                      <Lock size={13} className="shrink-0 text-amber-700" />
                      <span>{lockStatus.reason}</span>
                    </div>
                  )}
                </div>

                {isLocked ? (
                  <div className="pt-1">
                    {lockStatus.prerequisiteDialogueId ? (
                      <Link
                        href={`/learn/${langKey}/dialogue/${lockStatus.prerequisiteDialogueId}`}
                        className="w-full py-2.5 px-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Lock size={13} />
                        <span>{t('complete_prev_dialogue')}</span>
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
                    href={`/learn/${langKey}/dialogue/${dialogue.id}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Play size={13} />
                    <span>{t('start_carousel', { count: dialogue.sentences.length })}</span>
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
