'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'en' | 'hi'; // 'en' for English, 'hi' for Hinglish
type VoiceGender = 'female' | 'male';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  voiceGender: VoiceGender;
  setVoiceGender: (gender: VoiceGender) => void;
  t: <T>(translations: { [key in Language]: T }) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('hi'); // Default to Hinglish
  const [voiceGender, setVoiceGenderState] = useState<VoiceGender>('female'); // Default to Female

  useEffect(() => {
    const storedLang = localStorage.getItem('dairy-hub-language') as Language | null;
    if (storedLang && ['en', 'hi'].includes(storedLang)) {
      setLanguageState(storedLang);
    }
    const storedVoice = localStorage.getItem('dairy-hub-voice') as VoiceGender | null;
    if (storedVoice && ['female', 'male'].includes(storedVoice)) {
      setVoiceGenderState(storedVoice);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    if (['en', 'hi'].includes(lang)) {
        setLanguageState(lang);
        localStorage.setItem('dairy-hub-language', lang);
    }
  };

  const setVoiceGender = (gender: VoiceGender) => {
    if (['female', 'male'].includes(gender)) {
        setVoiceGenderState(gender);
        localStorage.setItem('dairy-hub-voice', gender);
    }
  };

  const t = <T,> (translations: { [key in Language]: T }) => {
    return translations[language];
  };

  const value = { language, setLanguage, voiceGender, setVoiceGender, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
