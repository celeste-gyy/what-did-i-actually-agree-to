"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "../components/language-switcher";
import { getStoredChoices, getStoredLanguage, resetJourney } from "../../lib/consent-storage";
import { getTranslations, type Language } from "../../lib/i18n";

export default function ReflectionPage() {
  const router = useRouter();
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
  const choices = getStoredChoices();
  const allowCount = Object.values(choices).filter((choice) => choice === "allow").length;
  const denyCount = Object.values(choices).filter((choice) => choice === "deny").length;

  const profile =
    allowCount === 0 && denyCount === 0
      ? {
          title: t.reflection.profileEmptyTitle,
          body: t.reflection.profileEmptyBody
        }
      : allowCount > denyCount
        ? {
            title: t.reflection.profileAdaptiveTitle,
            body: t.reflection.profileAdaptiveBody
          }
        : denyCount > allowCount
          ? {
              title: t.reflection.profileIntentionalTitle,
              body: t.reflection.profileIntentionalBody
            }
          : {
              title: t.reflection.profileBalancedTitle,
              body: t.reflection.profileBalancedBody
            };

  const handleRestart = () => {
    resetJourney();
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef2f7_100%)] px-4 py-8 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-[28px] border border-slate-200/70 bg-white/90 p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.reflection.eyebrow}
              </p>
              <h1 className="mt-4 text-[clamp(2rem,1.3rem+1.6vw,2.5rem)] font-semibold leading-tight text-slate-900">
                {t.reflection.title}
              </h1>
              <p className="mt-4 text-base leading-8 text-slate-700">
                {t.reflection.body}
              </p>
            </div>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>

          <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t.reflection.profileTitle}
            </p>
            <h2 className="mt-3 text-lg font-semibold text-slate-900">{profile.title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">{profile.body}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{t.reflection.profileNote}</p>
          </div>

          <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <p className="text-sm font-semibold text-slate-700">{t.reflection.insightTitle}</p>
            <div className="mt-3 space-y-2">
              {t.reflection.insights.map((insight) => (
                <div
                  key={insight}
                  className="rounded-[18px] border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-700"
                >
                  {insight}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleRestart}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            >
              {t.reflection.restartButton}
            </button>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800"
            >
              {t.reflection.homeButton}
            </button>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
