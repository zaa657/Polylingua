import { notFound } from 'next/navigation';
import { Language } from '@/types/learning';
import { LANGUAGES, LANGUAGE_LIST } from '@/data/languages';
import { LearnLanguageClient } from './LearnLanguageClient';

export function generateStaticParams() {
  return LANGUAGE_LIST.map((l) => ({ language: l.id }));
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
  return <LearnLanguageClient language={language as Language} />;
}
