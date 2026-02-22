'use client';
import React, { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react';

// ✅ Naye themes add kiye — rose, forest, cream
export type Theme = 'default' | 'sepia' | 'slate' | 'mint' | 'paper' | 'night' | 'rose' | 'forest' | 'cream';

// ✅ Sabhi themes ki list — yahan add karo to sab jagah kaam karega
const ALL_THEMES: Theme[] = ['sepia', 'slate', 'mint', 'paper', 'night', 'rose', 'forest', 'cream'];

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
    const storedTheme = localStorage.getItem('reading-theme') as Theme | null;
    const storedEnabled = localStorage.getItem('reading-mode-enabled') === 'true';
    
    setIsEnabledState(storedEnabled);
    if (storedEnabled && storedTheme) {
      setThemeState(storedTheme);
      document.body.classList.add(`theme-${storedTheme}`);
    } else if (storedEnabled) {
      setThemeState('sepia');
      document.body.classList.add(`theme-sepia`);
    }
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    if (!isEnabled) return;

    // ✅ Sabhi themes ki class remove karo (naye bhi)
    for (const t of ALL_THEMES) {
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
      // ✅ Disable hone par sabhi theme classes hato
      for (const t of ALL_THEMES) {
        document.body.classList.remove(`theme-${t}`);
      }
      setThemeState('default');
      localStorage.removeItem('reading-theme');
    } else {
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
