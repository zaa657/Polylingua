'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';

interface QuizSessionContextType {
  isQuizActive: boolean;
  setQuizActive: (active: boolean) => void;
}

const QuizSessionContext = createContext<QuizSessionContextType | undefined>(undefined);

export function QuizSessionProvider({ children }: { children: React.ReactNode }) {
  const [isQuizActive, setQuizActive] = useState(false);

  const value = useMemo(
    () => ({ isQuizActive, setQuizActive }),
    [isQuizActive]
  );

  return (
    <QuizSessionContext.Provider value={value}>
      {children}
    </QuizSessionContext.Provider>
  );
}

export function useQuizSession(): QuizSessionContextType {
  const context = useContext(QuizSessionContext);
  if (!context) {
    return {
      isQuizActive: false,
      setQuizActive: () => {},
    };
  }
  return context;
}
