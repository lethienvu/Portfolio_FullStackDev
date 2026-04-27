import { createContext, useContext, useState, useCallback } from 'react';
import vi from './vi';
import en from './en';

const TRANSLATIONS = { vi, en };

const LanguageContext = createContext(null);

/**
 * LanguageProvider — wraps the app and provides language state.
 * lang: 'vi' | 'en'
 * t: translation object for the current language
 * toggleLang: switches between 'vi' and 'en'
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('vi');

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'vi' ? 'en' : 'vi'));
  }, []);

  const value = {
    lang,
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
 * Usage:  const { t, lang, toggleLang } = useLanguage();
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
