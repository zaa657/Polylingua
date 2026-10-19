'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { STUDY_ABROAD_DATA } from '@/data/studyAbroad';
import { LearningLayoutClient } from '@/components/layout/LearningLayoutClient';
import { AudioSpeaker } from '@/components/ui/AudioSpeaker';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import { progressService } from '@/lib/progressService';
import { StudyChecklistItem } from '@/types/learning';
import { StudyTargetTestModal } from '@/components/studyAbroad/StudyTargetTestModal';
import confetti from 'canvas-confetti';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Circle,
  Sparkles,
  BookOpen,
  Building2,
  Calendar,
  Layers,
  ArrowRight,
  FileCheck,
  Trophy,
  RotateCcw,
} from 'lucide-react';

export function StudyAbroadClient() {
  const { user, progress, reloadProgress } = useAuth();
  const { locale, t } = useLocale();
  const [selectedCountry, setSelectedCountry] = useState<'china' | 'japan' | 'korea' | 'english'>('china');
  const [activeTestTarget, setActiveTestTarget] = useState<StudyChecklistItem | null>(null);
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);

  const countryData = STUDY_ABROAD_DATA[selectedCountry];
  const userChecklist = progress.studyAbroadChecklist || [];

  const handleOpenTest = (task: StudyChecklistItem) => {
    setActiveTestTarget(task);
    setIsTestModalOpen(true);
  };

  const handlePassTest = async (targetId: string, score: number) => {
    const userId = user?.uid;
    if (targetId.endsWith('-full')) {
      const currentCountryItems = countryData.studyChecklist.map((c) => c.id);
      for (const id of currentCountryItems) {
        await progressService.completeStudyTargetTest(id, score, userId);
      }
    } else {
      await progressService.completeStudyTargetTest(targetId, score, userId);
    }
    await reloadProgress();

    const currentCountryItems = countryData.studyChecklist.map((c) => c.id);
    const updatedChecklist = progress.studyAbroadChecklist
      ? Array.from(new Set([...progress.studyAbroadChecklist, targetId, ...currentCountryItems]))
      : currentCountryItems;
    const completedForCountry = currentCountryItems.filter((id) => updatedChecklist.includes(id));

    if (completedForCountry.length === currentCountryItems.length) {
      try {
        confetti({
          particleCount: 140,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    }
  };

  const completedCount = countryData.studyChecklist.filter((c) =>
    userChecklist.includes(c.id)
  ).length;
  const totalCount = countryData.studyChecklist.length;
  const checklistPercent = Math.round((completedCount / totalCount) * 100);

  const countryLangMap = {
    china: 'chinese',
    japan: 'japanese',
    korea: 'korean',
    english: 'english',
  } as const;

  const countryShortName = countryData.name.split('/')[0].trim();

  return (
    <LearningLayoutClient currentLanguage={countryLangMap[selectedCountry]}>
      <div className="space-y-8">
        {/* Main Header Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            <GraduationCap size={16} />
            <span>{t('study_abroad_banner_badge')}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t('study_abroad_country_title', { country: countryData.name })}
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              {t('study_abroad_country_desc')}
            </p>
          </div>

          {/* Country Selector Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {(['china', 'japan', 'korea', 'english'] as const).map((cKey) => {
              const c = STUDY_ABROAD_DATA[cKey];
              const isSelected = selectedCountry === cKey;
              return (
                <button
                  key={cKey}
                  type="button"
                  onClick={() => setSelectedCountry(cKey)}
                  className={`px-4 py-2.5 rounded-2xl text-xs md:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md shadow-slate-200 ring-2 ring-slate-900/10'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-transparent'
                  }`}
                >
                  <span className="text-lg">{c.flag}</span>
                  <span>{t('study_in_country', { country: c.name.split('/')[0].trim() })}</span>
                  <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 hidden md:inline">
                    {c.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Requirements Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* S1 Undergrad */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <Award size={14} className="text-blue-600" />
              <span>{t('s1_target_title')}</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {countryData.s1Requirement}
            </p>
          </div>

          {/* S2/S3 Graduate */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <GraduationCap size={14} className="text-indigo-600" />
              <span>{t('s2_target_title')}</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {countryData.s2Requirement}
            </p>
          </div>

          {/* English Track Note */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <Sparkles size={14} className="text-amber-500" />
              <span>{t('english_track_title')}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {countryData.englishTrackNote}
            </p>
          </div>
        </div>

        {/* Top Universities Spotlight */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Building2 size={15} className="text-slate-900" />
            <span>{t('top_univ_title')}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {countryData.topUniversities.map((univ, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs"
              >
                🎓 {univ}
              </span>
            ))}
          </div>
        </div>

        {/* Roadmap Tahapan Belajar */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-blue-600" />
            <h2 className="text-lg md:text-xl font-bold text-slate-900">
              {t('roadmap_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {countryData.curriculumRoadmap.map((stage, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 space-y-2.5 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {t('step_label', { idx: idx + 1 })}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 font-mono">
                      {stage.level}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {stage.stage}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>{t('core_focus_label')}</strong> {stage.focus}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <span className="font-semibold text-slate-900">{t('milestone_label')}</span>
                  {stage.milestone}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Language Pillars */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers size={18} className="text-indigo-600" />
            <h2 className="text-lg md:text-xl font-bold text-slate-900">
              {t('academic_pillars_title')}
            </h2>
          </div>

          <div className="space-y-3">
            {countryData.academicLanguagePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 space-y-2 shadow-xs"
              >
                <h3 className="font-bold text-slate-900 text-base">
                  {pillar.pillarTitle}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {pillar.detail}
                </p>
                {pillar.examples && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pillar.examples.map((ex, eIdx) => (
                      <span
                        key={eIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-mono"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Campus Essential Phrases with Audio */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-emerald-600" />
            <h2 className="text-lg md:text-xl font-bold text-slate-900">
              {t('campus_phrases_title')}
            </h2>
          </div>

          <div className="space-y-3">
            {countryData.campusEssentialPhrases.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 uppercase">
                      {item.context}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-slate-900">
                    {item.phrase}
                  </p>
                  <p className="text-xs text-slate-500 font-mono">
                    {item.phonetic}
                  </p>
                  <p className="text-xs md:text-sm text-slate-700 font-medium pt-0.5">
                    {item.meaning}
                  </p>
                </div>

                <div className="self-end md:self-center shrink-0">
                  <AudioSpeaker
                    text={item.phrase}
                    lang={item.audioVoiceLang}
                    size="sm"
                    label={t('listen_pronunciation')}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Preparation Checklist with Automated Tests */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>{t('checklist_title')}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t('checklist_country_title', { country: countryShortName })}
              </h2>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-2xl">
              <div className="text-right">
                <span className="text-xs font-bold text-slate-900 block">
                  {t('passed_targets_count', { completed: completedCount, total: totalCount })}
                </span>
                <span className="text-[10px] text-slate-500">
                  {t('readiness_percent', { percent: checklistPercent })}
                </span>
              </div>
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-xs ${
                  checklistPercent === 100
                    ? 'border-emerald-600 bg-emerald-100 text-emerald-800'
                    : 'border-blue-500 bg-blue-50 text-blue-700'
                }`}
              >
                {checklistPercent}%
              </div>
            </div>
          </div>

          {/* Explanation Info Banner */}
          <div className="bg-blue-50/60 border border-blue-200/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-blue-900">
            <div className="flex items-center gap-2.5">
              <Sparkles className="text-blue-600 shrink-0" size={17} />
              <span>
                <strong>{locale === 'en' ? 'Automated Verification: ' : 'Sistem Pengisian Otomatis: '}</strong>
                {t('automated_system_info')}
              </span>
            </div>
          </div>

          {/* 50-Question Full Simulation Exam Banner */}
          {countryData.fullTest && (
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 md:p-7 shadow-lg border border-indigo-800/40 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/40 text-[10px] font-bold uppercase tracking-wider">
                    {t('full_exam_badge')}
                  </span>
                  <span className="text-xs text-amber-300 font-bold flex items-center gap-1">
                    <Sparkles size={13} />
                    {t('full_exam_structure')}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-white leading-snug">
                  {t('full_exam_title', { country: countryShortName })}
                </h3>
                <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                  {t('full_exam_desc')}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleOpenTest({
                  id: `${countryData.countryId === 'china' ? 'cn' : countryData.countryId === 'japan' ? 'jp' : countryData.countryId === 'korea' ? 'kr' : 'en'}-full`,
                  label: `${t('full_exam_title', { country: countryShortName })}`,
                  priority: 'Wajib',
                  targetLevel: '50 Soal Lengkap',
                  test: countryData.fullTest!,
                })}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs md:text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <Trophy size={18} />
                <span>{t('start_50_exam_btn')}</span>
              </button>
            </div>
          )}

          {/* Full Completion Banner */}
          {completedCount === totalCount && (
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl p-5 shadow-sm flex items-center gap-3.5">
              <Trophy size={28} className="shrink-0 text-amber-300" />
              <div>
                <h4 className="font-bold text-sm">
                  {t('full_completion_congrats')}
                </h4>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  {locale === 'en'
                    ? `You have proven the language competency and academic understanding required to study in ${countryShortName}.`
                    : `Anda telah membuktikan kompetensi bahasa dan pemahaman akademik yang diperlukan untuk kuliah di ${countryShortName}.`}
                </p>
              </div>
            </div>
          )}

          <div className="space-y-3">
            {countryData.studyChecklist.map((task) => {
              const isChecked = userChecklist.includes(task.id);
              const testScore = progress.quizScores?.[`study-target-${task.id}`];
              const priorityColor = {
                Wajib: 'bg-rose-50 text-rose-700 border-rose-200',
                Penting: 'bg-amber-50 text-amber-700 border-amber-200',
                'Nilai Tambah': 'bg-blue-50 text-blue-700 border-blue-200',
              }[task.priority];

              const priorityLabel =
                locale === 'en'
                  ? task.priority === 'Wajib'
                    ? 'Required'
                    : task.priority === 'Penting'
                    ? 'Important'
                    : 'Bonus'
                  : task.priority;

              return (
                <div
                  key={task.id}
                  className={`p-4 md:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isChecked
                      ? 'bg-emerald-50/50 border-emerald-200 text-emerald-950 shadow-2xs'
                      : 'bg-slate-50/50 border-slate-200/90 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {isChecked ? (
                      <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Circle size={22} className="text-slate-300 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${priorityColor}`}
                        >
                          {priorityLabel}
                        </span>
                        {task.targetLevel && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                            {task.targetLevel}
                          </span>
                        )}
                        {isChecked ? (
                          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                            {locale === 'en'
                              ? `Passed Test ${testScore !== undefined ? `(${testScore}%)` : ''}`
                              : `Lulus Tes ${testScore !== undefined ? `(${testScore}%)` : ''}`}
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium text-slate-500">
                            {locale === 'en' ? 'Not Passed • Min 75%' : 'Belum Lulus • Minimal 75%'}
                          </span>
                        )}
                      </div>
                      <h4
                        className={`text-xs md:text-sm font-semibold leading-snug ${
                          isChecked ? 'line-through text-slate-600' : 'text-slate-900'
                        }`}
                      >
                        {task.label}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center sm:justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    {isChecked ? (
                      <button
                        type="button"
                        onClick={() => handleOpenTest(task)}
                        className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                      >
                        <RotateCcw size={13} />
                        <span>{locale === 'en' ? 'Review / Retake' : 'Tinjau / Uji Ulang'}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleOpenTest(task)}
                        className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs hover:shadow-md"
                      >
                        <FileCheck size={14} />
                        <span>{locale === 'en' ? 'Take Readiness Test' : 'Ambil Tes Capaian'}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-slate-500">
            <span>
              {locale === 'en'
                ? '💡 Readiness test results and checklists are saved automatically in your browser.'
                : '💡 Hasil tes capaian dan checklist tersimpan otomatis di browser Anda.'}
            </span>
            <Link
              href={`/learn/${countryLangMap[selectedCountry]}`}
              className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
            >
              <span>
                {locale === 'en'
                  ? `Open ${countryShortName} Language Module`
                  : `Buka Modul Bahasa ${countryShortName}`}
              </span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Test Modal */}
        <StudyTargetTestModal
          key={activeTestTarget?.id || 'none'}
          target={activeTestTarget}
          countryName={countryShortName}
          isOpen={isTestModalOpen}
          onClose={() => setIsTestModalOpen(false)}
          onPassTest={handlePassTest}
          alreadyPassed={userChecklist.includes(activeTestTarget?.id || '')}
          previousScore={
            activeTestTarget
              ? progress.quizScores?.[`study-target-${activeTestTarget.id}`]
              : undefined
          }
        />
      </div>
    </LearningLayoutClient>
  );
}
