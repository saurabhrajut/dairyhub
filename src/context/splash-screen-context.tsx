"use client";

import { createContext, useState, useContext, ReactNode, useMemo } from 'react';

interface SplashScreenContextType {
  isFinished: boolean;
  setIsFinished: (finished: boolean) => void;
}

const SplashScreenContext = createContext<SplashScreenContextType | undefined>(undefined);

export function SplashScreenProvider({ children }: { children: ReactNode }) {
  const [isFinished, setIsFinished] = useState(false);

  const value = useMemo(() => ({
    isFinished,
    setIsFinished,
  }), [isFinished]);

  return (
    <SplashScreenContext.Provider value={value}>
      {children}
    </SplashScreenContext.Provider>
  );
}

export function useSplashScreen() {
  const context = useContext(SplashScreenContext);
  if (context === undefined) {
    throw new Error('useSplashScreen must be used within a SplashScreenProvider');
  }
  return context;
}
