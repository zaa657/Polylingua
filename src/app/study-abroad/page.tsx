import { Suspense } from 'react';
import { StudyAbroadClient } from './StudyAbroadClient';

export const metadata = {
  title: 'Target Kuliah Luar Negeri (11 Bahasa) | Polylingua',
  description:
    'Panduan lengkap syarat sertifikasi HSK, JLPT/EJU, TOPIK, IELTS, CU-TFL, TORFL, ALPT, DELF/DALF, NT2, TestDaF, DELE, roadmap tahapan belajar, dan ujian kesiapan 50 soal.',
};

export default function StudyAbroadPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <StudyAbroadClient />
    </Suspense>
  );
}
