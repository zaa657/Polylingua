'use client';

import React, { useState } from 'react';
import { WordBreakdown } from '@/types/learning';
import { Volume2 } from 'lucide-react';
import { speechService } from '@/lib/speechService';

interface ActiveRecallWordProps {
  wordInfo: WordBreakdown;
  langCode: string;
  forceShowPhonetic?: boolean;
}

export const ActiveRecallWord: React.FC<ActiveRecallWordProps> = ({
  wordInfo,
  langCode,
  forceShowPhonetic = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSpeakWord = (e: React.MouseEvent) => {
    e.stopPropagation();
    speechService.speak(wordInfo.word, {
      lang: langCode,
      rate: 0.85,
    });
  };

  return (
    <span
      className="relative inline-block group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Transliteration above if forceShowPhonetic is true */}
      {forceShowPhonetic && (
        <span className="block text-xs font-medium text-slate-500 tracking-tight text-center select-none">
          {wordInfo.phonetic}
        </span>
      )}

      {/* Main Native Word */}
      <span
        className={`px-1 py-0.5 rounded cursor-pointer transition-colors duration-150 inline-block font-medium ${
          isOpen
            ? 'bg-blue-100 text-blue-900 border-b-2 border-blue-500'
            : 'hover:bg-slate-100 border-b border-dashed border-slate-300'
        }`}
      >
        {wordInfo.word}
      </span>

      {/* Popover Tooltip for Active Recall */}
      {isOpen && (
        <div
          role="tooltip"
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs bg-slate-900 text-white text-xs rounded-xl shadow-xl px-3 py-2 border border-slate-700 pointer-events-auto animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1 mb-1">
            <span className="font-semibold text-amber-300 tracking-wide text-[13px]">
              {wordInfo.phonetic}
            </span>
            <button
              type="button"
              onClick={handleSpeakWord}
              className="text-slate-400 hover:text-white p-0.5 rounded hover:bg-slate-800"
              title="Dengarkan kata"
            >
              <Volume2 size={13} />
            </button>
          </div>
          <div className="text-slate-200 text-xs">
            {wordInfo.meaning}
          </div>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
        </div>
      )}
    </span>
  );
};
