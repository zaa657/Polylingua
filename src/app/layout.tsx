import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { LocaleProvider } from '@/context/LocaleContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Polylingua | Platform Belajar 11 Bahasa Dunia & Persiapan Kuliah Luar Negeri',
  description:
    'Platform edukasi modern untuk menguasai tata bahasa, kosakata, dialog situasional, audio native, dan persiapan ujian kuliah luar negeri di 11 bahasa (Mandarin, Jepang, Korea, Inggris, Thailand, Rusia, Arab, Prancis, Belanda, Jerman, dan Spanyol).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        <LocaleProvider>
          <AuthProvider>{children}</AuthProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
