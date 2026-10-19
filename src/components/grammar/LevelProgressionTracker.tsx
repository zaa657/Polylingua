'use client';

import React from 'react';
import { LevelSummary } from '@/lib/curriculumProgression';
import { CheckCircle2, Lock, Sparkles, BookOpen } from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';

interface LevelProgressionTrackerProps {
  levels: LevelSummary[];
  activeLevelFilter?: string | null;
  onSelectLevel?: (levelName: string | null) => void;
}

export function LevelProgressionTracker({
  levels,
  activeLevelFilter,
  onSelectLevel,
}: LevelProgressionTrackerProps) {
  const { t } = useLocale();

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 md:p-6 shadow-xs space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <Sparkles size={16} />
          </div>
          <div>
            <h3 className="font-extrabold text-sm md:text-base text-slate-900">
              {t('level_gating_title')}
            </h3>
            <p className="text-[11px] text-slate-500">
              {t('level_gating_desc')}
            </p>
          </div>
        </div>

        {activeLevelFilter && (
          <button
            type="button"
            onClick={() => onSelectLevel?.(null)}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
          >
            {t('show_all_levels')}
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-1">
        {levels.map((lvl) => {
          const isSelected = activeLevelFilter === lvl.levelName;
          return (
            <button
              key={lvl.levelName}
              type="button"
              onClick={() => onSelectLevel?.(isSelected ? null : lvl.levelName)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 relative overflow-hidden ${
                isSelected
                  ? 'border-blue-600 ring-2 ring-blue-100 bg-blue-50/50'
                  : lvl.isMastered
                  ? 'border-emerald-200 bg-emerald-50/40 hover:border-emerald-300'
                  : lvl.isUnlocked
                  ? 'border-blue-200 bg-white hover:border-blue-300 hover:shadow-xs'
                  : 'border-slate-200 bg-slate-50/70 opacity-75'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500">
                  Lv. {lvl.levelOrder}
                </span>
                {lvl.isMastered ? (
                  <span className="text-emerald-600 flex items-center gap-0.5 text-[10px] font-bold">
                    <CheckCircle2 size={13} />
                  </span>
                ) : lvl.isUnlocked ? (
                  <span className="text-blue-600 flex items-center gap-0.5 text-[10px] font-bold">
                    <BookOpen size={12} />
                  </span>
                ) : (
                  <span className="text-slate-400 flex items-center gap-0.5 text-[10px] font-bold">
                    <Lock size={12} />
                  </span>
                )}
              </div>

              <div>
                <p className="font-extrabold text-xs text-slate-900 truncate">
                  {lvl.levelName}
                </p>
                <p className="text-[10px] text-slate-500">
                  {lvl.completedLessons}/{lvl.totalLessons} {t('lessons_completed')}
                </p>
              </div>

              {/* Progress mini bar */}
              <div className="w-full h-1 bg-slate-200/70 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    lvl.isMastered
                      ? 'bg-emerald-500'
                      : lvl.isUnlocked
                      ? 'bg-blue-600'
                      : 'bg-slate-300'
                  }`}
                  style={{
                    width: `${
                      lvl.totalLessons > 0
                        ? (lvl.completedLessons / lvl.totalLessons) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
