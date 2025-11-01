
'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react';

export type Theme = 'default' | 'sepia' | 'slate' | 'mint' | 'paper' | 'night';

interface ReadingModeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isEnabled: boolean;
  setIsEnabled: (enabled: boolean) => void;
}

const ReadingModeContext = createContext<ReadingModeContextType | undefined>(undefined);

export function ReadingModeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('default');
  const [isEnabled, setIsEnabledState] = useState<boolean>(false);

  useEffect(() => {
    // This effect runs only on the client
    const storedTheme = localStorage.getItem('reading-theme') as Theme | null;
    const storedEnabled = localStorage.getItem('reading-mode-enabled') === 'true';
    
    setIsEnabledState(storedEnabled);

    if (storedEnabled && storedTheme) {
      setThemeState(storedTheme);
      document.body.classList.add(`theme-${storedTheme}`);
    } else if (storedEnabled) {
      // If it's enabled but no theme is stored, default to sepia
      setThemeState('sepia');
      document.body.classList.add(`theme-sepia`);
    }

  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    if (!isEnabled) return;

    // Remove all theme classes from body
    for (const t of ['sepia', 'slate', 'mint', 'paper', 'night']) {
        document.body.classList.remove(`theme-${t}`);
    }
    
    if (newTheme !== 'default') {
        document.body.classList.add(`theme-${newTheme}`);
    }
    
    setThemeState(newTheme);
    localStorage.setItem('reading-theme', newTheme);
  }, [isEnabled]);


  const setIsEnabled = useCallback((enabled: boolean) => {
    setIsEnabledState(enabled);
    localStorage.setItem('reading-mode-enabled', String(enabled));

    if (!enabled) {
      // If disabled, remove all theme classes and reset to default
      for (const t of ['sepia', 'slate', 'mint', 'paper', 'night']) {
        document.body.classList.remove(`theme-${t}`);
      }
      setThemeState('default');
      localStorage.removeItem('reading-theme');
    } else {
        // If enabled, apply the currently selected theme (or default to sepia if none)
        const currentTheme = (localStorage.getItem('reading-theme') as Theme | null) || 'sepia';
        setTheme(currentTheme);
    }
  }, [setTheme]);


  return (
    <ReadingModeContext.Provider value={{ theme, setTheme, isEnabled, setIsEnabled }}>
      {children}
    </ReadingModeContext.Provider>
  );
}

export function useReadingMode() {
  const context = useContext(ReadingModeContext);
  if (context === undefined) {
    throw new Error('useReadingMode must be used within a ReadingModeProvider');
  }
  return context;
}
