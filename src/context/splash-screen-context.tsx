"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SplashScreenContextType {
  isFinished: boolean;
  setIsFinished: (isFinished: boolean) => void;
}

const SplashScreenContext = createContext<SplashScreenContextType | undefined>(undefined);

export function SplashScreenProvider({ children }: { children: ReactNode }) {
  // Check sessionStorage so splash doesn't show again after login redirect
  const [isFinished, setIsFinishedState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('splash-shown') === 'true';
    }
    return false;
  });

  const setIsFinished = (val: boolean) => {
    setIsFinishedState(val);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('splash-shown', val ? 'true' : 'false');
    }
  };

  return (
    <SplashScreenContext.Provider value={{ isFinished, setIsFinished }}>
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
