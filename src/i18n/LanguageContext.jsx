/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import vi from './vi';
import en from './en';
import ja from './ja';
import zh from './zh';

const TRANSLATIONS = { vi, en, ja, zh };

const LanguageContext = createContext(null);

/**
 * LanguageProvider — wraps the app and provides language state.
 * lang: 'vi' | 'en' | 'ja' | 'zh'
 * t: translation object for the current language
 * setLang: switches between languages
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('vi');

  // Keep toggleLang for compatibility if used elsewhere, but ideally we use setLang
  const toggleLang = () => {
    setLang(prev => (prev === 'vi' ? 'en' : 'vi'));
  };

  const value = {
    lang,
    setLang,
    toggleLang,
    t: TRANSLATIONS[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * useLanguage — consume language context anywhere in the tree.
 * Usage:  const { t, lang, setLang } = useLanguage();
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
