'use client';

import React from 'react';
import Link from 'next/link';
import { LANGUAGE_LIST } from '@/data/languages';
import { ALL_GRAMMAR_LESSONS, ALL_DIALOGUES } from '@/data';
import { LearningLayoutClient } from '@/components/layout/LearningLayoutClient';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';
import { progressService } from '@/lib/progressService';
import { getLanguageLevelsSummary } from '@/lib/curriculumProgression';

export default function DashboardPage() {
  const { user, isGuest, progress, reloadProgress } = useAuth();
  const { locale, t } = useLocale();

  // Calculate statistics per language
  const statsPerLang = LANGUAGE_LIST.map((lang) => {
    const totalGrammar = (ALL_GRAMMAR_LESSONS[lang.id] || []).length;
    const totalDialogues = (ALL_DIALOGUES[lang.id] || []).length;
    const totalItems = totalGrammar + totalDialogues;

    const completedGrammar = (ALL_GRAMMAR_LESSONS[lang.id] || []).filter((g) =>
      progress.completedLessons.includes(g.id)
    ).length;

    const completedDialogues = (ALL_DIALOGUES[lang.id] || []).filter((d) =>
      progress.completedDialogues.includes(d.id)
    ).length;

    const completedTotal = completedGrammar + completedDialogues;
    const percentage = totalItems > 0 ? Math.round((completedTotal / totalItems) * 100) : 0;

    const levelsSummary = getLanguageLevelsSummary(lang.id, progress.completedLessons);
    const masteredLevels = levelsSummary.filter((l) => l.isMastered);
    const currentUnlockedLevel = levelsSummary.find((l) => l.isUnlocked && !l.isMastered);

    return {
      lang,
      totalGrammar,
      totalDialogues,
      completedGrammar,
      completedDialogues,
      percentage,
      levelsSummary,
      masteredLevels,
      currentUnlockedLevel,
    };
  });

  const handleResetProgress = async () => {
    if (confirm(t('confirm_reset'))) {
      await progressService.resetProgress(user ? user.uid : null);
      await reloadProgress();
    }
  };

  return (
    <LearningLayoutClient currentLanguage="chinese">
      <div className="space-y-8">
        {/* Welcome Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
                <Sparkles size={13} className="text-amber-500" />
                <span>{t('self_study_room')}</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              {user && !isGuest ? `${t('welcome_back')}, ${user.displayName}!` : t('my_dashboard')}
            </h1>
          </div>
        </div>

        {/* 4 Language Progress Cards */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <TrendingUp size={18} className="text-blue-600" />
            <span>{t('proficiency_by_language')}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {statsPerLang.map((item) => (
              <div
                key={item.lang.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 space-y-4 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{item.lang.flag}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base leading-tight">
                        {t(`lang_${item.lang.id}`, item.lang.name)}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">
                        {item.lang.nativeName}
                      </span>
                    </div>
                  </div>

                  <span className="text-lg font-extrabold text-slate-900">
                    {item.percentage}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-900 transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span>
                    {locale === 'id' ? 'Tata Bahasa' : 'Grammar'}: {item.completedGrammar}/{item.totalGrammar}
                  </span>
                  <span>
                    {locale === 'id' ? 'Dialog' : 'Dialogues'}: {item.completedDialogues}/{item.totalDialogues}
                  </span>
                </div>

                {/* Level mastery & current tier indicator */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  {item.masteredLevels.map((lvl) => (
                    <span
                      key={lvl.levelName}
                      className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200"
                    >
                      <CheckCircle2 size={11} />
                      <span>{lvl.levelName} {locale === 'id' ? 'Dikuasai' : 'Mastered'}</span>
                    </span>
                  ))}
                  {item.currentUnlockedLevel && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                      <span>⚡ {locale === 'id' ? 'Sedang Mempelajari' : 'Learning'} {item.currentUnlockedLevel.levelName}</span>
                    </span>
                  )}
                </div>

                <Link
                  href={`/learn/${item.lang.id}`}
                  className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>
                    {locale === 'id'
                      ? `Lanjutkan Belajar ${item.lang.name.replace('Bahasa ', '')}`
                      : `Continue ${item.lang.id.charAt(0).toUpperCase() + item.lang.id.slice(1)}`}
                  </span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Reset Progress Option */}
        <div className="pt-4 border-t border-slate-200/70 flex justify-end">
          <button
            type="button"
            onClick={handleResetProgress}
            className="text-xs text-slate-400 hover:text-rose-600 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>{locale === 'id' ? 'Reset Seluruh Progres ke Awal' : 'Reset All Learning Progress'}</span>
          </button>
        </div>
      </div>
    </LearningLayoutClient>
  );
}
