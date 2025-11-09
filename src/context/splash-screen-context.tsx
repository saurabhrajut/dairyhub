"use client";

import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

interface SplashScreenContextType {
  isFinished: boolean;
  setIsFinished: (isFinished: boolean) => void;
}

const SplashScreenContext = createContext<SplashScreenContextType | undefined>(undefined);

export function SplashScreenProvider({ children }: { children: ReactNode }) {
  const [isFinished, setIsFinished] = useState(false);

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
