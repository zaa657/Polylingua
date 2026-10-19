'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LANGUAGES, LANGUAGE_LIST } from '@/data/languages';
import { Language } from '@/types/learning';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import { UserAvatar } from '@/components/ui/UserAvatar';
import {
  BookOpen,
  MessageSquare,
  BarChart3,
  GraduationCap,
  Award,
  Languages,
  LogOut,
} from 'lucide-react';

interface AppSidebarProps {
  currentLanguage?: Language;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  currentLanguage = 'chinese',
  isOpenMobile = false,
  onCloseMobile,
}) => {
  const pathname = usePathname();
  const activeLangMeta = LANGUAGES[currentLanguage] || LANGUAGES.chinese;
  const { user, isGuest, logout } = useAuth();
  const { locale, t } = useLocale();

  const handleLogout = async () => {
    if (confirm(t('confirm_logout'))) {
      await logout();
    }
  };

  const navItems = [
    {
      label: locale === 'id' ? 'Ikhtisar & Roadmap' : 'Overview & Roadmap',
      href: `/learn/${currentLanguage}`,
      icon: GraduationCap,
      exact: true,
    },
    {
      label: locale === 'id' ? 'Tata Bahasa (Grammar)' : 'Grammar Lessons',
      href: `/learn/${currentLanguage}/grammar`,
      icon: BookOpen,
      exact: false,
    },
    {
      label: locale === 'id' ? 'Kamus Kosakata' : 'Vocabulary Dictionary',
      href: `/learn/${currentLanguage}/vocabulary`,
      icon: Languages,
      exact: false,
    },
    {
      label: locale === 'id' ? 'Dialog Situasi Realistis' : 'Conversational Dialogues',
      href: `/learn/${currentLanguage}/dialogue`,
      icon: MessageSquare,
      exact: false,
    },
    {
      label: locale === 'id' ? 'Target Kuliah Luar Negeri' : 'Study Abroad Targets',
      href: '/study-abroad',
      icon: Award,
      exact: false,
    },
    {
      label: locale === 'id' ? 'Statistik Belajar' : 'Learning Dashboard',
      href: '/dashboard',
      icon: BarChart3,
      exact: true,
    },
  ];

  const content = (
    <div className="flex flex-col h-full bg-white border-r border-slate-200 w-64 md:w-72 select-none">
      {/* Brand & Logo */}
      <div className="p-5 border-b border-slate-100 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
            语
          </div>
          <div>
            <span className="font-extrabold text-slate-900 text-base tracking-tight block leading-tight">
              Polylingua
            </span>
          </div>
        </Link>
      </div>

      {/* Language Switcher Section */}
      <div className="p-3.5 border-b border-slate-100 bg-slate-50/50">
        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2 px-1">
          {locale === 'id' ? 'Pilih Bahasa Aktif' : 'Active Language'}
        </label>
        <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
          {LANGUAGE_LIST.map((lang) => {
            const isSelected = lang.id === currentLanguage;
            return (
              <Link
                key={lang.id}
                href={`/learn/${lang.id}`}
                onClick={onCloseMobile}
                className={`flex items-center gap-2 p-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  isSelected
                    ? 'bg-white shadow-xs border border-slate-300 text-slate-900 ring-2 ring-slate-900/10'
                    : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 border border-transparent'
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="truncate">{lang.name.replace('Bahasa ', '')}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Navigation Links */}
      <div className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          {locale === 'id' ? `Menu Modul (${activeLangMeta.name})` : `Modules (${activeLangMeta.name})`}
        </div>
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onCloseMobile}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon size={17} className={isActive ? 'text-white' : 'text-slate-400'} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Auth & Profile Footer */}
      <div className="p-3.5 border-t border-slate-100 bg-slate-50/60">
        {user && !isGuest ? (
          <div className="p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <UserAvatar
                  name={user.displayName}
                  photoURL={user.photoURL}
                  size="md"
                />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-slate-900 block truncate">
                    {user.displayName}
                  </span>
                  {user.email && (
                    <span className="text-[10px] text-slate-400 block truncate">
                      {user.email}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer shrink-0"
                title={t('sign_out')}
              >
                <LogOut size={15} />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <Link
              href="/auth/login"
              onClick={onCloseMobile}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer"
            >
              {/* Google 4-Color Icon */}
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
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
            <div className="text-[10px] text-slate-400 text-center font-medium">
              {t('guest_mode_badge')}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block shrink-0 h-screen sticky top-0">
        {content}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={onCloseMobile}
          />
          <div className="relative z-10 animate-in slide-in-from-left duration-200">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
