'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  GraduationCap,
  BookOpen,
  Languages,
  MessageSquare,
  Award,
  BarChart3,
} from 'lucide-react';
import { Language } from '@/types/learning';
import { useLocale } from '@/context/LocaleContext';

interface AppBottomNavProps {
  currentLanguage?: Language;
}

export function AppBottomNav({ currentLanguage = 'chinese' }: AppBottomNavProps) {
  const [isStandalone, setIsStandalone] = useState(false);
  const pathname = usePathname();
  const { locale } = useLocale();

  useEffect(() => {
    // Detect if running as installed PWA app (standalone window) or on mobile screen
    const checkStandalone = () => {
      const isApp =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as unknown as { standalone?: boolean }).standalone === true;
      setIsStandalone(isApp);
    };

    checkStandalone();
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    mediaQuery.addEventListener('change', checkStandalone);
    return () => mediaQuery.removeEventListener('change', checkStandalone);
  }, []);

  const navItems = [
    {
      label: locale === 'id' ? 'Roadmap' : 'Roadmap',
      href: `/learn/${currentLanguage}`,
      icon: GraduationCap,
      isActive: pathname === `/learn/${currentLanguage}`,
    },
    {
      label: locale === 'id' ? 'Tata Bahasa' : 'Grammar',
      href: `/learn/${currentLanguage}/grammar`,
      icon: BookOpen,
      isActive: pathname.startsWith(`/learn/${currentLanguage}/grammar`),
    },
    {
      label: locale === 'id' ? 'Kosakata' : 'Vocab',
      href: `/learn/${currentLanguage}/vocabulary`,
      icon: Languages,
      isActive: pathname.startsWith(`/learn/${currentLanguage}/vocabulary`),
    },
    {
      label: locale === 'id' ? 'Dialog' : 'Dialogue',
      href: `/learn/${currentLanguage}/dialogue`,
      icon: MessageSquare,
      isActive: pathname.startsWith(`/learn/${currentLanguage}/dialogue`),
    },
    {
      label: locale === 'id' ? 'Kuliah' : 'Abroad',
      href: `/study-abroad?lang=${currentLanguage}`,
      icon: Award,
      isActive: pathname.startsWith('/study-abroad'),
    },
    {
      label: locale === 'id' ? 'Statistik' : 'Stats',
      href: '/dashboard',
      icon: BarChart3,
      isActive: pathname === '/dashboard',
    },
  ];

  // Render bottom app bar if in standalone app mode OR mobile viewport
  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 text-slate-300 shadow-2xl transition-all ${
        isStandalone ? 'flex pb-safe pt-2 px-2' : 'flex md:hidden pb-safe pt-2 px-2'
      }`}
      aria-label="App Navigation"
    >
      <div className="flex items-center justify-around w-full max-w-lg mx-auto pb-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 py-1 px-2 rounded-xl transition-all cursor-pointer min-w-[50px] ${
                active
                  ? 'text-white font-bold bg-white/10'
                  : 'text-slate-400 hover:text-slate-200 active:scale-95'
              }`}
            >
              <Icon size={18} className={active ? 'text-blue-400' : ''} />
              <span className="text-[10px] leading-tight tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
