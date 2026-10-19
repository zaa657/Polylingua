'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, LogOut, Languages, User } from 'lucide-react';
import { Language } from '@/types/learning';
import { LANGUAGES } from '@/data/languages';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import { UserAvatar } from '@/components/ui/UserAvatar';

interface HeaderBarProps {
  currentLanguage?: Language;
  onOpenMobileMenu?: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  currentLanguage = 'chinese',
  onOpenMobileMenu,
}) => {
  const langMeta = LANGUAGES[currentLanguage] || LANGUAGES.chinese;
  const { user, isGuest, logout } = useAuth();
  const { locale, toggleLocale, t } = useLocale();

  // Account dropdown state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    setIsMenuOpen(false);
    if (confirm(t('confirm_logout'))) {
      await logout();
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-4 md:px-8 py-3 flex items-center justify-between transition-colors">
      {/* Mobile Menu Trigger & Active Lang Pill */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="p-2 -ml-2 rounded-xl text-slate-600 hover:bg-slate-100 lg:hidden cursor-pointer"
          aria-label="Buka navigasi"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
          <span className="text-base">{langMeta.flag}</span>
          <span>{t(`lang_${currentLanguage}`, langMeta.name)}</span>
          <span className="text-slate-400 font-normal hidden sm:inline">({langMeta.nativeName})</span>
        </div>
      </div>

      {/* Navbar Actions: Language Switch and Account Icon */}
      <div className="flex items-center gap-2.5">
        {/* Switch Bahasa Indonesia & English */}
        <button
          type="button"
          onClick={toggleLocale}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer border border-slate-200/70 shadow-2xs group"
          title={t('switch_lang_title')}
          aria-label="Switch UI Language"
        >
          <Languages size={14} className="text-blue-500 shrink-0 group-hover:rotate-12 transition-transform" />
          <span className="tracking-wide">{locale === 'id' ? 'ID' : 'EN'}</span>
        </button>

        {/* Account Icon Button (Icon Akun Saja) */}
        {user && !isGuest ? (
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 rounded-full transition-all flex items-center justify-center cursor-pointer shadow-2xs hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              title={user.displayName}
              aria-label="Menu Akun"
            >
              <UserAvatar
                name={user.displayName}
                photoURL={user.photoURL}
                size="lg"
              />
            </button>

            {/* Profile Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl p-3.5 space-y-3 z-50 animate-in fade-in duration-150">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <UserAvatar
                    name={user.displayName}
                    photoURL={user.photoURL}
                    size="xl"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-sm text-slate-900 truncate">
                      {user.displayName}
                    </p>
                    {user.email && (
                      <p className="text-xs text-slate-500 truncate">
                        {user.email}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 transition-colors cursor-pointer"
                >
                  <LogOut size={14} />
                  <span>{t('sign_out')}</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200/70 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            title={t('sign_in')}
            aria-label="Masuk ke Akun"
          >
            <User size={17} />
          </Link>
        )}
      </div>
    </header>
  );
};
