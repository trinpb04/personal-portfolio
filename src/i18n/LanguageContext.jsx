import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

// Storage key is versioned: the previous version persisted "vi" on every
// visit, so returning visitors would keep getting Vietnamese even after the
// default changed. Bumping the key retires those stale values once.
const STORAGE_KEY = 'lang.v2';

// Default to English; remembers the user's last choice.
const getInitialLang = () => {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === 'en' || saved === 'vi' ? saved : 'en';
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'vi' : 'en'));

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook used by every component to read translated text.
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
