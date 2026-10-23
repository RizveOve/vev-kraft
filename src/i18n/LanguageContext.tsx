import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Dictionary, type Lang } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "vevkraft-lang";
const LANGS: Lang[] = ["no", "en", "bn"];
// Norwegian is the default for new visitors; a saved choice of English or Bangla wins.
const DEFAULT_LANG: Lang = "no";

function isLang(value: string | null): value is Lang {
  return !!value && (LANGS as string[]).includes(value);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    // Runs during the build-time prerender too, where there is no window.
    if (typeof window === "undefined") return DEFAULT_LANG;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return isLang(stored) ? stored : DEFAULT_LANG;
    } catch {
      return DEFAULT_LANG;
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage unavailable (private mode, blocked site data) — the choice just won't persist.
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
