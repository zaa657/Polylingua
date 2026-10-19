'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, firestore, googleProvider, isFirebaseConfigured } from '@/lib/firebase';
import { progressService, DEFAULT_PROGRESS } from '@/lib/progressService';
import { UserProgress } from '@/types/learning';

export interface UserProfile {
  uid: string;
  displayName: string;
  email?: string | null;
  photoURL?: string | null;
}

interface AuthContextType {
  user: UserProfile | null;
  isGuest: boolean;
  progress: UserProgress;
  isLoading: boolean;
  isFirebaseReady: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  registerWithEmail: (email: string, pass: string, displayName?: string) => Promise<void>;
  logout: () => Promise<void>;
  continueAsGuest: () => void;
  reloadProgress: () => Promise<void>;
}

const GUEST_USER: UserProfile = {
  uid: 'guest_user',
  displayName: 'Tamu (Belajar Mandiri)',
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isGuest: true,
  progress: DEFAULT_PROGRESS,
  isLoading: true,
  isFirebaseReady: isFirebaseConfigured,
  loginWithGoogle: async () => {},
  loginWithEmail: async () => {},
  registerWithEmail: async () => {},
  logout: async () => {},
  continueAsGuest: () => {},
  reloadProgress: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isGuest, setIsGuest] = useState<boolean>(true);
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const activeUserId = user ? user.uid : GUEST_USER.uid;

  const reloadProgress = async () => {
    const loaded = await progressService.getProgress(activeUserId);
    setProgress(loaded);
  };

  useEffect(() => {
    let isMounted = true;

    // Jika Firebase belum dikonfigurasi di .env.local
    if (!isFirebaseConfigured || !auth) {
      const initGuest = async () => {
        const guestProgress = await progressService.getProgress(GUEST_USER.uid);
        if (isMounted) {
          setProgress(guestProgress);
          setUser(null);
          setIsGuest(true);
          setIsLoading(false);
        }
      };
      initGuest();
      return () => {
        isMounted = false;
      };
    }

    // Listener Realtime Firebase Auth
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setIsLoading(true);
      if (firebaseUser) {
        const profile: UserProfile = {
          uid: firebaseUser.uid,
          displayName:
            firebaseUser.displayName ||
            firebaseUser.email?.split('@')[0] ||
            'Pelajar Polylingua',
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
        };
        setUser(profile);
        setIsGuest(false);

        // Catat/sinkronkan data user ke Cloud Firestore koleksi 'users' untuk pemantauan admin
        if (firestore) {
          try {
            const userDocRef = doc(firestore, 'users', firebaseUser.uid);
            await setDoc(
              userDocRef,
              {
                uid: firebaseUser.uid,
                displayName: profile.displayName,
                email: profile.email || '',
                photoURL: profile.photoURL || '',
                lastLoginAt: new Date().toISOString(),
                provider: firebaseUser.providerData[0]?.providerId || 'google.com',
              },
              { merge: true }
            );
          } catch (syncErr) {
            console.warn('Gagal mencatat user ke Firestore:', syncErr);
          }
        }

        // Muat progress belajar yang terikat dengan UID akun Google pengguna
        const loadedProgress = await progressService.getProgress(firebaseUser.uid);
        setProgress(loadedProgress);
      } else {
        setUser(null);
        setIsGuest(true);
        const guestProgress = await progressService.getProgress(GUEST_USER.uid);
        setProgress(guestProgress);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    if (!isFirebaseConfigured || !auth || !googleProvider) {
      throw new Error(
        'Konfigurasi Firebase belum terpasang di file .env.local. Harap buat file .env.local dan masukkan kredensial Firebase Anda.'
      );
    }

    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const fbUser = result.user;
      const profile: UserProfile = {
        uid: fbUser.uid,
        displayName:
          fbUser.displayName || fbUser.email?.split('@')[0] || 'Pelajar Google',
        email: fbUser.email,
        photoURL: fbUser.photoURL,
      };
      setUser(profile);
      setIsGuest(false);

      const userProg = await progressService.getProgress(fbUser.uid);
      setProgress(userProg);
    } catch (err: unknown) {
      setIsLoading(false);
      throw err;
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    if (!isFirebaseConfigured || !auth) {
      throw new Error('Firebase belum dikonfigurasi di file .env.local.');
    }
    setIsLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, pass);
      const fbUser = cred.user;
      const profile: UserProfile = {
        uid: fbUser.uid,
        displayName: fbUser.displayName || fbUser.email?.split('@')[0] || 'Pelajar',
        email: fbUser.email,
        photoURL: fbUser.photoURL,
      };
      setUser(profile);
      setIsGuest(false);
      const userProg = await progressService.getProgress(fbUser.uid);
      setProgress(userProg);
    } finally {
      setIsLoading(false);
    }
  };

  const registerWithEmail = async (email: string, pass: string, displayName?: string) => {
    if (!isFirebaseConfigured || !auth) {
      throw new Error('Firebase belum dikonfigurasi di file .env.local.');
    }
    setIsLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, pass);
      if (displayName && cred.user) {
        await updateProfile(cred.user, { displayName });
      }
      const fbUser = cred.user;
      const profile: UserProfile = {
        uid: fbUser.uid,
        displayName: displayName || fbUser.email?.split('@')[0] || 'Pelajar',
        email: fbUser.email,
        photoURL: fbUser.photoURL,
      };
      setUser(profile);
      setIsGuest(false);
      const userProg = await progressService.getProgress(fbUser.uid);
      setProgress(userProg);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    if (isFirebaseConfigured && auth) {
      try {
        await signOut(auth);
      } catch (err) {
        console.warn('SignOut error:', err);
      }
    }
    setUser(null);
    setIsGuest(true);
    const guestProg = await progressService.getProgress(GUEST_USER.uid);
    setProgress(guestProg);
    setIsLoading(false);
  };

  const continueAsGuest = () => {
    setUser(null);
    setIsGuest(true);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isGuest,
        progress,
        isLoading,
        isFirebaseReady: isFirebaseConfigured,
        loginWithGoogle,
        loginWithEmail,
        registerWithEmail,
        logout,
        continueAsGuest,
        reloadProgress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
