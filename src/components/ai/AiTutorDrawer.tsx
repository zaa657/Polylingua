'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Language } from '@/types/learning';
import { LANGUAGES } from '@/data/languages';
import { speechService, getVoiceLangCode } from '@/lib/speechService';
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  Volume2,
  Copy,
  Check,
  Bot,
  User,
} from 'lucide-react';

interface AiMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
}

let globalMessageSeq = 0;
function createMessageId(prefix: string): string {
  globalMessageSeq += 1;
  return `${prefix}-${globalMessageSeq}`;
}

interface AiTutorDrawerProps {
  currentLanguage?: Language;
}

const QUICK_PROMPTS_BY_LANG: Record<string, string[]> = {
  chinese: [
    'Jelaskan perbedaan partikel 的, 得, dan 地',
    'Bagaimana cara memakai pola struktur kalimat 把 (bǎ)?',
    'Berikan 3 contoh kalimat percakapan HSK 2 sehari-hari',
    'Tolong koreksi kalimat Mandarin saya ini: 我去在学校看书。',
  ],
  japanese: [
    'Jelaskan perbedaan partikel は (wa) dan が (ga)',
    'Bagaimana cara memakai bentuk て (te-form)?',
    'Tips menghafal Kanji dasar JLPT N5',
  ],
  korean: [
    'Jelaskan perbedaan akhiran -아요/어요 dan -습니다',
    'Bagaimana aturan pelafalan Batchim (받침)?',
    'Contoh percakapan santai sehari-hari di Seoul',
  ],
  english: [
    'Explain the difference between Present Perfect and Past Simple',
    'How do I use conditional sentences type 2 and 3?',
    'Give me 5 formal email phrases for international business',
  ],
};

const DEFAULT_PROMPTS = [
  'Jelaskan pola tata bahasa penting bahasa ini',
  'Tolong buatkan contoh percakapan sehari-hari',
  'Periksa dan koreksi tata bahasa kalimat saya',
  'Berikan tips belajar efektif untuk tingkat pemula',
];

export const AiTutorDrawer: React.FC<AiTutorDrawerProps> = ({
  currentLanguage = 'chinese',
}) => {
  const langMeta = LANGUAGES[currentLanguage] || LANGUAGES.chinese;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<AiMessage[]>(() => [
    {
      id: 'welcome-msg',
      role: 'model',
      content: `Halo, saya Polylingua AI, tutor bahasa Anda.\n\nSaya siap membantu Anda belajar ${langMeta.name} (${langMeta.nativeName}):\n- Penjelasan tata bahasa dan kosakata\n- Koreksi kalimat dan struktur kalimat\n- Latihan percakapan dan persiapan ujian\n\nSilakan tuliskan pertanyaan yang ingin Anda bahas.`,
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = QUICK_PROMPTS_BY_LANG[currentLanguage] || DEFAULT_PROMPTS;

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputPrompt).trim();
    if (!text || isLoading) return;

    const userMsg: AiMessage = {
      id: createMessageId('user'),
      role: 'user',
      content: text,
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetLanguage: currentLanguage,
          messages: newHistory.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      const replyContent = data.reply || data.error || 'Maaf, tidak ada balasan dari server.';

      const aiMsg: AiMessage = {
        id: createMessageId('model'),
        role: 'model',
        content: replyContent,
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      const errMsg: AiMessage = {
        id: createMessageId('err'),
        role: 'model',
        content: 'Terjadi kesalahan jaringan saat menghubungi AI Tutor. Silakan coba lagi.',
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleSpeak = (text: string, id: string) => {
    if (speakingId === id) {
      speechService.stop();
      setSpeakingId(null);
      return;
    }
    setSpeakingId(id);
    const voiceLang = getVoiceLangCode(currentLanguage);
    speechService.speak(text, {
      lang: voiceLang,
      rate: 0.95,
      onStart: () => setSpeakingId(id),
      onEnd: () => setSpeakingId(null),
      onError: () => setSpeakingId(null),
    });
  };

  const handleResetChat = () => {
    speechService.stop();
    setSpeakingId(null);
    setMessages([
      {
        id: createMessageId('welcome'),
        role: 'model',
        content: `Percakapan telah diatur ulang. Ada pertanyaan seputar tata bahasa atau kosakata ${langMeta.name} yang ingin Anda diskusikan?`,
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 md:px-5 py-3 shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 font-bold text-xs md:text-sm cursor-pointer group hover:scale-105 active:scale-95"
          title="Tanya AI Tutor Bahasa"
        >
          <div className="relative flex items-center justify-center">
            <Sparkles size={17} className="animate-pulse text-amber-300" />
          </div>
          <span>Tanya AI Tutor</span>
          <span className="text-sm bg-blue-500/40 px-1.5 py-0.5 rounded-full">{langMeta.flag}</span>
        </button>
      )}

      {/* Floating Chat Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-x-2 bottom-18 md:bottom-6 md:inset-x-auto md:right-6 z-50 w-auto md:w-[420px] max-w-full h-[540px] md:h-[600px] max-h-[85vh] bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
                <Bot size={18} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-xs md:text-sm tracking-tight text-white">
                    Polylingua AI Tutor
                  </h3>
                  <span className="text-xs">{langMeta.flag}</span>
                </div>
                <p className="text-[10px] text-slate-300 font-medium">
                  {langMeta.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Atur ulang percakapan"
              >
                <RotateCcw size={15} />
              </button>
              <button
                type="button"
                onClick={() => {
                  speechService.stop();
                  setIsOpen(false);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Tutup AI Tutor"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          {/* Chat Message Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
            {messages.map((m) => {
              const isUser = m.role === 'user';
              return (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      AI
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                      isUser
                        ? 'bg-blue-600 text-white rounded-br-xs shadow-xs font-medium'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-xs shadow-xs'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{m.content}</div>

                    {!isUser && m.id !== 'welcome-msg' && (
                      <div className="flex items-center justify-end gap-2 mt-2 pt-1.5 border-t border-slate-100 text-slate-400">
                        <button
                          type="button"
                          onClick={() => handleSpeak(m.content, m.id)}
                          className="hover:text-blue-600 transition-colors p-1"
                          title="Dengarkan pelafalan"
                        >
                          <Volume2 size={13} className={speakingId === m.id ? 'text-blue-600 animate-pulse' : ''} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleCopy(m.content, m.id)}
                          className="hover:text-slate-600 transition-colors p-1"
                          title="Salin jawaban"
                        >
                          {copiedId === m.id ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                        </button>
                      </div>
                    )}
                  </div>

                  {isUser && (
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      <User size={13} />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 text-xs font-bold">
                  AI
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-500 shadow-xs flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-1 text-[11px] font-medium">Sedang memikirkan jawaban...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          {messages.length <= 3 && (
            <div className="px-4 py-2 bg-slate-100/70 border-t border-slate-200/80 shrink-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Contoh Pertanyaan Cepat:
              </span>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {quickPrompts.slice(0, 3).map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(prompt)}
                    className="text-[11px] bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600 px-2.5 py-1 rounded-lg shrink-0 transition-colors shadow-2xs font-medium cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder={`Tanya apapun tentang bahasa ${langMeta.name}...`}
              disabled={isLoading}
              className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputPrompt.trim() || isLoading}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs shrink-0"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
