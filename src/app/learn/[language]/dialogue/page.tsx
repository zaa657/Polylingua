import { notFound } from 'next/navigation';
import { Language } from '@/types/learning';
import { LANGUAGES } from '@/data/languages';
import { DialogueListClient } from './DialogueListClient';

export function generateStaticParams() {
  return [
    { language: 'chinese' },
    { language: 'japanese' },
    { language: 'korean' },
    { language: 'english' },
  ];
}

interface PageProps {
  params: Promise<{
    language: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { language } = await params;
  if (!LANGUAGES[language as Language]) {
    notFound();
  }
  return <DialogueListClient language={language as Language} />;
}
