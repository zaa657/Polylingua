'use client';

import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { speechService } from '@/lib/speechService';

interface AudioSpeakerProps {
  text: string;
  lang: string;
  rate?: number;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

export const AudioSpeaker: React.FC<AudioSpeakerProps> = ({
  text,
  lang,
  rate = 1.0,
  size = 'md',
  label,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      speechService.stop();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    speechService.speak(text, {
      lang,
      rate,
      onStart: () => setIsPlaying(true),
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    });
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs gap-1',
    md: 'p-2.5 text-sm gap-1.5',
    lg: 'p-3.5 text-base gap-2',
  }[size];

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22,
  }[size];

  return (
    <button
      type="button"
      onClick={handlePlay}
      className={`inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 cursor-pointer ${
        isPlaying
          ? 'bg-rose-50 text-rose-600 ring-2 ring-rose-400 animate-pulse'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-95'
      } ${sizeClasses} ${className}`}
      title={isPlaying ? 'Hentikan audio' : 'Dengarkan pengucapan'}
      aria-label="Audio pengucapan"
    >
      {isPlaying ? (
        <span className="flex items-center gap-1">
          <Volume2 size={iconSizes} className="animate-bounce" />
          <span className="flex gap-0.5 items-end h-3">
            <span className="w-0.5 h-1.5 bg-rose-500 animate-ping"></span>
            <span className="w-0.5 h-3 bg-rose-500 animate-pulse"></span>
            <span className="w-0.5 h-2 bg-rose-500 animate-ping"></span>
          </span>
        </span>
      ) : (
        <Volume2 size={iconSizes} />
      )}
      {label && <span className="font-sans text-xs">{label}</span>}
    </button>
  );
};
