import { Language } from '@/types/learning';

/**
 * Web Speech API wrapper for multi-language pronunciation
 * Supports: zh-CN (Mandarin), ja-JP (Japanese), ko-KR (Korean), en-US (English),
 * th-TH (Thai), ru-RU (Russian), ar-SA (Arabic), fr-FR (French),
 * nl-NL (Dutch), de-DE (German), es-ES (Spanish)
 */

export const VOICE_LANG_CODES: Record<Language, string> = {
  chinese: 'zh-CN',
  japanese: 'ja-JP',
  korean: 'ko-KR',
  english: 'en-US',
  thai: 'th-TH',
  russian: 'ru-RU',
  arabic: 'ar-SA',
  french: 'fr-FR',
  dutch: 'nl-NL',
  german: 'de-DE',
  spanish: 'es-ES',
};

export function getVoiceLangCode(lang: Language): string {
  return VOICE_LANG_CODES[lang] || 'en-US';
}

export interface SpeechOptions {
  lang: string;
  rate?: number; // e.g. 0.75 or 1.0
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: unknown) => void;
}

class SpeechService {
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public getVoices(): SpeechSynthesisVoice[] {
    if (!this.isSupported()) return [];
    return window.speechSynthesis.getVoices();
  }

  public speak(text: string, options: SpeechOptions): void {
    if (!this.isSupported()) {
      console.warn('Speech synthesis is not supported on this browser.');
      options.onEnd?.();
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = options.lang;
    utterance.rate = options.rate ?? 1.0;
    utterance.pitch = options.pitch ?? 1.0;

    // Try finding matching voice
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(
      (v) => v.lang.toLowerCase() === options.lang.toLowerCase() || v.lang.startsWith(options.lang.slice(0, 2))
    );
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => {
      this.currentUtterance = utterance;
      options.onStart?.();
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      options.onEnd?.();
    };

    utterance.onerror = (e) => {
      this.currentUtterance = null;
      console.warn('Speech error or interrupted:', e);
      options.onError?.(e);
      options.onEnd?.();
    };

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  public stop(): void {
    if (this.isSupported()) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
  }

  public isSpeaking(): boolean {
    return this.isSupported() ? window.speechSynthesis.speaking : false;
  }
}

export const speechService = new SpeechService();
