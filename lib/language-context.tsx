"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

import en from "@/messages/en.json";
import hi from "@/messages/hi.json";
import es from "@/messages/es.json";
import fr from "@/messages/fr.json";
import de from "@/messages/de.json";
import zh from "@/messages/zh.json";
import ar from "@/messages/ar.json";
import pt from "@/messages/pt.json";
import ru from "@/messages/ru.json";
import ja from "@/messages/ja.json";

const translations: Record<string, Record<string, string>> = {
  en, hi, es, fr, de, zh, ar, pt, ru, ja,
};

type LanguageContextType = {
  lang: string;
  setLang: (code: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState("en");

  const setLang = useCallback((code: string) => {
    setLangState(code);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[lang]?.[key] ?? translations["en"]?.[key] ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
