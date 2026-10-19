'use client';

import React, { useState } from 'react';
import { AppSidebar } from './AppSidebar';
import { HeaderBar } from './HeaderBar';
import { Language } from '@/types/learning';

interface LearningLayoutClientProps {
  children: React.ReactNode;
  currentLanguage?: Language;
}

export const LearningLayoutClient: React.FC<LearningLayoutClientProps> = ({
  children,
  currentLanguage = 'chinese',
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-row">
      {/* Sidebar */}
      <AppSidebar
        currentLanguage={currentLanguage}
        isOpenMobile={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <HeaderBar
          currentLanguage={currentLanguage}
          onOpenMobileMenu={() => setIsMobileOpen(true)}
        />
        <main className="flex-1 p-4 md:p-8 max-w-6xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
