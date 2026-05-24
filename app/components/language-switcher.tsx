"use client";

import { saveStoredLanguage } from "../../lib/consent-storage";
import type { Language } from "../../lib/i18n";

interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
  const nextLanguage = language === "en" ? "zh" : "en";

  return (
    <button
      type="button"
      onClick={() => {
        setLanguage(nextLanguage);
        saveStoredLanguage(nextLanguage);
      }}
      className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur"
    >
      {language === "en" ? "中文" : "EN"}
    </button>
  );
}
