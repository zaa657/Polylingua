'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import { Sparkles, AlertCircle, Globe } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { user, isFirebaseReady, loginWithGoogle, continueAsGuest } = useAuth();
  const { locale, toggleLocale, t } = useLocale();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Jika sudah login, langsung arahkan ke dashboard
  useEffect(() => {
    if (user && user.uid !== 'guest_user') {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleGoogleLogin = async () => {
    setErrorMsg(null);

    if (!isFirebaseReady) {
      setErrorMsg(
        locale === 'en'
          ? 'Firebase credentials not found in .env.local. Please configure your Firebase settings.'
          : 'Kredensial Firebase belum terpasang di file .env.local. Harap masukkan konfigurasi Firebase Anda.'
      );
      return;
    }

    setIsLoading(true);

    try {
      await loginWithGoogle();
      router.push('/dashboard');
    } catch (err: unknown) {
      console.error('Google login error:', err);
      const errCode = (err as { code?: string })?.code || '';
      const errMsg = (err as { message?: string })?.message || '';

      if (errCode === 'auth/popup-closed-by-user' || errMsg.includes('auth/popup-closed-by-user')) {
        setErrorMsg(
          locale === 'en'
            ? 'Google sign-in popup was closed before completion. Please click the button to try again.'
            : 'Jendela login Google ditutup sebelum proses selesai. Silakan klik tombol Masuk kembali.'
        );
      } else if (errCode === 'auth/unauthorized-domain' || errMsg.includes('auth/unauthorized-domain')) {
        const curHost = typeof window !== 'undefined' ? window.location.hostname : 'domain Anda';
        setErrorMsg(
          locale === 'en'
            ? `Domain "${curHost}" is not authorized in Firebase Console. Add "${curHost}" to Firebase Console > Authentication > Settings > Authorized Domains.`
            : `Domain "${curHost}" belum diotorisasi di Firebase Console. Harap buka Firebase Console > Authentication > Settings > Authorized Domains dan tambahkan "${curHost}".`
        );
      } else if (errCode === 'auth/popup-blocked' || errMsg.includes('auth/popup-blocked')) {
        setErrorMsg(
          locale === 'en'
            ? 'The sign-in popup was blocked by your browser. Please allow popups for this site or try logging in again.'
            : 'Jendela popup Google diblokir oleh browser Anda. Harap izinkan popup pada browser ini atau coba lagi.'
        );
      } else if (errCode === 'auth/operation-not-allowed' || errMsg.includes('auth/operation-not-allowed')) {
        setErrorMsg(
          locale === 'en'
            ? 'Google sign-in provider is disabled. Please enable Google in Firebase Console > Authentication > Sign-in method.'
            : 'Penyedia login Google belum diaktifkan. Harap aktifkan Google di Firebase Console > Authentication > Sign-in method.'
        );
      } else if (errCode === 'auth/network-request-failed' || errMsg.includes('network-request-failed')) {
        setErrorMsg(
          locale === 'en'
            ? 'Network request failed. Please check your internet connection or disable ad-blocker extensions.'
            : 'Koneksi ke server Google gagal. Harap periksa jaringan internet Anda atau nonaktifkan ekstensi ad-blocker/privacy.'
        );
      } else {
        setErrorMsg(
          errMsg ||
            (locale === 'en'
              ? 'Failed to sign in with Google. Please try again.'
              : 'Gagal masuk dengan Google. Silakan coba kembali.')
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinueAsGuest = () => {
    continueAsGuest();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100 flex flex-col justify-center items-center p-4 py-12 relative">
      {/* Top right language toggle */}
      <div className="absolute top-4 right-4">
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
      </div>

      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 group mb-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-2xl shadow-lg shadow-slate-900/10 group-hover:scale-105 transition-transform">
              语
            </div>
            <div className="text-left">
              <span className="font-black text-2xl text-slate-900 tracking-tight block leading-tight">
                {t('brand_title')}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {t('brand_subtitle')}
              </span>
            </div>
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {locale === 'en' ? 'Sign In to Your Account' : 'Masuk ke Akun Anda'}
          </h1>
          <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
            {locale === 'en'
              ? 'Sign in with your Google Account to synchronize your learning progress to the Cloud.'
              : 'Masuk dengan Akun Google untuk menyinkronkan progres belajar mandiri Anda ke Cloud.'}
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-6 sm:p-8 backdrop-blur-md">
          {/* Error Alert */}
          {errorMsg && (
            <div className="mb-5 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-800 animate-in fade-in duration-150">
              <AlertCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed font-medium">{errorMsg}</div>
            </div>
          )}

          {/* Primary Action: Masuk dengan Google */}
          <div className="space-y-4">
            <button
              type="button"
              disabled={isLoading}
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md text-slate-800 font-bold text-sm transition-all duration-150 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group active:scale-[0.99]"
            >
              {/* Google 4-Color Logo */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
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
              <span>{isLoading ? (locale === 'en' ? 'Connecting to Google...' : 'Menghubungkan ke Google...') : t('sign_in_google')}</span>
            </button>
          </div>

          {/* Guest Mode */}
          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <button
              type="button"
              onClick={handleContinueAsGuest}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <Sparkles size={14} className="text-amber-500" />
              <span>
                {locale === 'en'
                  ? 'Study without account (Guest Self-Study Mode)'
                  : 'Belajar tanpa akun (Mode Tamu Mandiri)'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
