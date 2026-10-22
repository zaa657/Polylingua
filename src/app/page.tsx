'use client';

import React from 'react';
import Link from 'next/link';
import { LANGUAGE_LIST } from '@/data/languages';
import {
  ArrowRight,
  BookOpen,
  MessageSquare,
  Volume2,
  GraduationCap,
  Globe,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { PWAInstallButton } from '@/components/pwa/PWAInstallButton';

export default function HomePage() {
  const { user, isGuest } = useAuth();
  const { locale, toggleLocale, t } = useLocale();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navbar */}
      <nav className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
              语
            </div>
            <div>
              <span className="font-extrabold text-slate-900 text-base tracking-tight block leading-tight">
                {t('brand_title')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* PWA Install Button */}
            <PWAInstallButton />

            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors shadow-2xs cursor-pointer"
              title={t('switch_lang_title')}
            >
              <Globe size={13} className="text-blue-600" />
              <span className="uppercase">{locale}</span>
              <span className="text-[10px] text-slate-400 font-normal">
                ({locale === 'id' ? 'EN' : 'ID'})
              </span>
            </button>

            {user && !isGuest ? (
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800"
              >
                <UserAvatar photoURL={user.photoURL} displayName={user.displayName} size="xs" />
                <span className="hidden sm:inline">{user.displayName}</span>
              </Link>
            ) : (
              <Link
                href="/auth/login"
                className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>{t('sign_in_google')}</span>
              </Link>
            )}

            <Link
              href="/dashboard"
              className="hidden sm:flex px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-xs items-center gap-1.5"
            >
              <span>{t('nav_dashboard')}</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-4 pt-14 pb-10 text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
          <span>
            {locale === 'en'
              ? 'Structured Self-Study Multi-Language Platform'
              : 'Platform Belajar 11 Bahasa Terstruktur'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          {locale === 'en' ? (
            <>
              Master <span className="underline decoration-rose-500 decoration-wavy decoration-2">11 World</span>{' '}
              <span className="underline decoration-indigo-500 decoration-wavy decoration-2">Languages</span>{' '}
              Structurally
            </>
          ) : (
            <>
              Kuasai <span className="underline decoration-rose-500 decoration-wavy decoration-2">11 Bahasa</span>{' '}
              <span className="underline decoration-indigo-500 decoration-wavy decoration-2">Dunia</span>{' '}
              Terstruktur
            </>
          )}
        </h1>

        <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          {locale === 'en'
            ? 'Master grammar, real-life dialogues, and vocabulary across 11 languages with native audio.'
            : 'Kuasai tata bahasa, dialog percakapan nyata, dan kosakata dengan pelafalan audio asli.'}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/learn/chinese"
            className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>{locale === 'en' ? 'Start Learning Now' : 'Mulai Belajar Sekarang'}</span>
            <ArrowRight size={17} />
          </Link>
          <Link
            href="/study-abroad"
            className="px-5 py-3.5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-900 font-semibold text-sm transition-all flex items-center gap-2"
          >
            <GraduationCap size={18} className="text-indigo-600" />
            <span>{t('study_abroad_target')}</span>
          </Link>
        </div>
      </header>

      {/* Language Selector Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16 w-full">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {locale === 'en' ? 'CHOOSE YOUR TARGET LANGUAGE' : 'PILIH BAHASA TUJUAN ANDA'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {LANGUAGE_LIST.map((lang) => {
            const localizedName = t('lang_' + lang.id, {}, lang.name);
            const localizedScript = t('script_' + lang.id, {}, lang.scriptType);
            const localizedDesc = t('desc_' + lang.id, {}, lang.description);
            const shortName = localizedName.replace('Bahasa ', '');

            return (
              <div
                key={lang.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Flag & Native Title */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl p-2 rounded-2xl bg-slate-50 border border-slate-100 shadow-inner">
                      {lang.flag}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {localizedScript.split('&')[0]}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {localizedName}
                    </h3>
                    <p className="text-sm font-medium text-slate-500">
                      {lang.nativeName}
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                      {t('greeting_label')}
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      {lang.greeting}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {localizedDesc}
                  </p>

                  {/* Level Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {lang.levels.map((lvl, lIdx) => (
                      <span
                        key={lIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                      >
                        {lvl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6">
                  <Link
                    href={`/learn/${lang.id}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>
                      {locale === 'en'
                        ? `Open ${shortName} Module`
                        : `Buka Modul ${shortName}`}
                    </span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              {locale === 'en' ? 'Effective Structured Learning Method' : 'Metode Belajar Terstruktur yang Efektif'}
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              {locale === 'en'
                ? 'Designed to build a solid foundational grammar structure while mastering real-world conversational fluency.'
                : 'Dirancang untuk membangun pemahaman fondasi tata bahasa yang kokoh sekaligus melatih kelancaran percakapan di dunia nyata.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <BookOpen size={20} />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                {locale === 'en' ? '1. Crystal-Clear Grammar Rules' : '1. Teori Tata Bahasa Jelas'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {locale === 'en'
                  ? 'Systematic pattern formulas, step-by-step breakdowns, and common pitfall guidance.'
                  : 'Formula pola kalimat yang teratur, penjelasan langkah demi langkah, dan panduan kesalahan umum (common mistakes) agar Anda terhindar dari salah kaprah.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                {locale === 'en' ? '2. Step-by-Step Dialogue Carousel' : '2. Step-by-Step Dialogue Carousel'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {locale === 'en'
                  ? 'Study conversational exchanges sentence by sentence with active recall flashcard popovers.'
                  : 'Pelajari percakapan kalimat per kalimat dalam kartu terfokus. Sentuh aksara asli untuk memunculkan Pinyin/Furigana/Romaja dan artinya secara aktif.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Volume2 size={20} />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                {locale === 'en' ? '3. Native Web Speech Audio' : '3. Audio Native Web Speech'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {locale === 'en'
                  ? 'Listen to native pronunciations in your browser across all 11 languages with adjustable audio speed.'
                  : 'Dengarkan pengucapan asli langsung dari browser untuk 11 bahasa dengan kontrol kecepatan lambat (0.75x) untuk pemula dan normal (1.0x).'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Polylingua Learning Hub.</p>
          <div className="flex items-center gap-4 text-slate-600 font-medium">
            <Link href="/dashboard" className="hover:underline">{t('nav_dashboard')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
