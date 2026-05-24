"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./components/language-switcher";
import { getStoredLanguage } from "../lib/consent-storage";
import { getTranslations, permissionDefinitions, type Language } from "../lib/i18n";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguage(getStoredLanguage());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.lang = language;
  }, [language, mounted]);

  if (!mounted) {
    return null;
  }

  const t = getTranslations(language);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef2f7_100%)] px-4 py-8 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-[28px] border border-slate-200/70 bg-white/90 p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-[clamp(2.1rem,1.3rem+2vw,2.8rem)] font-semibold leading-tight text-slate-900">
                {t.hero.title}
              </h1>
              <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
                {t.hero.intro}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {t.hero.note}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/permission/location"
                  className="inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  {t.home.beginButton}
                </Link>
              </div>
            </div>

            <div className="sm:self-start">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t.home.currentUnderstanding}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              {t.home.currentUnderstandingBody}
            </p>
          </div>
        </motion.section>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {permissionDefinitions.map((permission, index) => {
            const card = t.permissionCards[permission.key];

            return (
              <motion.article
                key={permission.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-[24px] border border-slate-200/70 bg-white/90 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-xl">
                    {permission.emoji}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{card.title}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-700">{card.summary}</p>

                <div className="mt-5">
                  <Link
                    href={`/permission/${permission.slug}`}
                    className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800"
                  >
                    {t.home.exploreButton}
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
