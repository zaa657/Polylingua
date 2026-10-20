'use client';

import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const { locale } = useLocale();

  useEffect(() => {
    // Check if already running in standalone mode (installed)
    if (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true
    ) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  // Don't show if already installed or browser hasn't fired beforeinstallprompt
  if (isInstalled || !isInstallable || !deferredPrompt) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleInstallClick}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer animate-in fade-in duration-200"
      title={locale === 'en' ? 'Install Polylingua App on this device' : 'Pasang Aplikasi Polylingua di perangkat ini'}
      aria-label="Install App"
    >
      <Download size={13} className="shrink-0" />
      <span className="tracking-tight hidden xs:inline">{locale === 'en' ? 'Install App' : 'Install App'}</span>
      <span className="tracking-tight xs:hidden">Install</span>
    </button>
  );
}
