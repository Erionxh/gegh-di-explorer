'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { UI } from '../lib/ui';
import { UI2 } from '../lib/ui2';

const T = { sq: { ...UI.sq, ...UI2.sq }, en: { ...UI.en, ...UI2.en } };

const LangContext = createContext({ lang: 'sq', setLang: () => {}, t: T.sq });

export function LangProvider({ children }) {
  const [lang, setLangState] = useState('sq');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('geg-lang');
      if (saved === 'sq' || saved === 'en') setLangState(saved);
    } catch (e) {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l) => {
    setLangState(l);
    try { window.localStorage.setItem('geg-lang', l); } catch (e) {}
  };

  return <LangContext.Provider value={{ lang, setLang, t: T[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
