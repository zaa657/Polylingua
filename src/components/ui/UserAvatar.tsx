'use client';

import React, { useState } from 'react';

interface UserAvatarProps {
  name?: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const GRADIENTS = [
  'bg-gradient-to-tr from-blue-600 to-indigo-600',
  'bg-gradient-to-tr from-emerald-600 to-teal-600',
  'bg-gradient-to-tr from-violet-600 to-purple-600',
  'bg-gradient-to-tr from-amber-500 to-orange-600',
  'bg-gradient-to-tr from-rose-500 to-pink-600',
  'bg-gradient-to-tr from-cyan-600 to-blue-600',
];

const SIZE_CLASSES = {
  xs: 'w-6 h-6 text-[10px]',
  sm: 'w-7 h-7 text-xs',
  md: 'w-8 h-8 text-xs',
  lg: 'w-9 h-9 text-sm',
  xl: 'w-10 h-10 text-base',
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  displayName,
  photoURL,
  size = 'md',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [prevPhotoURL, setPrevPhotoURL] = useState(photoURL);

  // React-recommended pattern for resetting state on prop change during render
  if (prevPhotoURL !== photoURL) {
    setPrevPhotoURL(photoURL);
    setHasError(false);
  }

  const cleanName = (name || displayName || 'Pelajar').trim();
  const initial = cleanName.charAt(0).toUpperCase() || 'P';

  // Deterministic gradient based on initial letter
  const charCode = initial.charCodeAt(0) || 0;
  const gradient = GRADIENTS[charCode % GRADIENTS.length];
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  const showImage = Boolean(photoURL && !hasError);

  return (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 flex items-center justify-center font-bold text-white shadow-xs select-none border border-slate-200/80 ${sizeClass} ${
        showImage ? 'bg-slate-100' : gradient
      } ${className}`}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={photoURL || 'avatar'}
          src={photoURL || undefined}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="leading-none drop-shadow-xs">{initial}</span>
      )}
    </div>
  );
};
