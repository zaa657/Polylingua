import { notFound } from 'next/navigation';
import { Language } from '@/types/learning';
import { LANGUAGES } from '@/data/languages';
import { ALL_DIALOGUES, getDialogueById } from '@/data';
import { DialogueDetailClient } from './DialogueDetailClient';

export function generateStaticParams() {
  const params: Array<{ language: string; dialogueId: string }> = [];
  for (const lang of Object.keys(ALL_DIALOGUES) as Language[]) {
    for (const d of ALL_DIALOGUES[lang] || []) {
      params.push({ language: lang, dialogueId: d.id });
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{
    language: string;
    dialogueId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { language, dialogueId } = await params;
  const langMeta = LANGUAGES[language as Language];
  const dialogue = getDialogueById(dialogueId);

  if (!langMeta || !dialogue) {
    notFound();
  }

  return (
    <DialogueDetailClient
      language={language as Language}
      dialogue={dialogue}
    />
  );
}
