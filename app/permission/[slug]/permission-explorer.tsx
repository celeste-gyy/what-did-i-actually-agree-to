"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "../../components/language-switcher";
import {
  getStoredChoices,
  getStoredLanguage,
  markPermissionExplored,
  saveStoredChoice,
  setCurrentPermission,
  type Choice
} from "../../../lib/consent-storage";
import { getTranslations, type Language, type PermissionDefinition, type PermissionKey } from "../../../lib/i18n";

interface PermissionExplorerProps {
  permission: PermissionDefinition;
}

export function PermissionExplorer({ permission }: PermissionExplorerProps) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [step, setStep] = useState(0);
  const [refreshToken, setRefreshToken] = useState(0);

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

  useEffect(() => {
    markPermissionExplored(permission.key as PermissionKey);
    setCurrentPermission(permission.key as PermissionKey);
  }, [permission.key]);

  if (!mounted) {
    return null;
  }

  const t = getTranslations(language);
  const permissionText = t.permissions[permission.key];
  const currentChoice = getStoredChoices()[permission.key] ?? null;

  const saveChoice = (nextChoice: Choice) => {
    saveStoredChoice(permission.key as PermissionKey, nextChoice);
    setRefreshToken((value) => value + 1);
  };

  return (
    <main
      className="min-h-screen px-4 py-8 text-slate-900 sm:px-8"
      style={{
        background: `radial-gradient(circle at top left, ${permission.accent}14, transparent 26%), linear-gradient(180deg, #f8fbff 0%, #eef2f7 100%)`
      }}
    >
      <div className="mx-auto max-w-3xl">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-[28px] border border-slate-200/70 bg-white/90 p-5 sm:p-7"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-[clamp(1.8rem,1.2rem+1.2vw,2.4rem)] font-semibold leading-tight text-slate-900">
                {permissionText.title}
              </h1>
            </div>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>

          <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.page.pauseNote}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {t.page.pauseBody}
                </p>
              </div>
              <Link href="/" className="text-sm font-semibold text-slate-700">
                {t.page.backHome}
              </Link>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${permission.key}-${step}-${refreshToken}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="min-h-[240px]"
              >
                {step === 0 ? (
                  <div className="space-y-5">
                    <p className="text-lg leading-8 text-slate-700">{permissionText.screen1}</p>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                    >
                      {permissionText.whyCTA}
                    </button>
                  </div>
                ) : null}

                {step === 1 ? (
                  <div className="space-y-5">
                    <p className="text-lg leading-8 text-slate-700">{permissionText.screen2}</p>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                    >
                      {permissionText.impactCTA}
                    </button>
                  </div>
                ) : null}

                {step === 2 ? (
                  <div className="space-y-5">
                    <p className="text-lg leading-8 text-slate-700">{permissionText.screen3}</p>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                    >
                      {permissionText.continueCTA}
                    </button>
                  </div>
                ) : null}

                {step === 3 ? (
                  <div className="space-y-5">
                    <p className="text-lg leading-8 text-slate-700">{permissionText.screen4}</p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[22px] border border-slate-200 bg-white px-4 py-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {t.page.tradeoffLabel}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-700">
                          {currentChoice === "allow" ? permissionText.tradeoffAllow : permissionText.tradeoffDeny}
                        </p>
                      </div>
                      <div className="rounded-[22px] border border-slate-200 bg-white px-4 py-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {permissionText.impactCTA}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-700">
                          {permissionText.inference}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                      {currentChoice === null
                        ? t.page.choiceHint
                        : currentChoice === "allow"
                          ? t.page.choiceSavedAllow
                          : t.page.choiceSavedDeny}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => saveChoice("allow")}
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                          currentChoice === "allow" ? "bg-emerald-600 text-white" : "bg-emerald-100 text-emerald-900"
                        }`}
                      >
                        {permissionText.allow}
                      </button>
                      <button
                        type="button"
                        onClick={() => saveChoice("deny")}
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                          currentChoice === "deny" ? "bg-rose-600 text-white" : "bg-rose-100 text-rose-900"
                        }`}
                      >
                        {permissionText.deny}
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link href="/" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800">
                        {t.page.exploreMore}
                      </Link>
                      <Link href="/reflection" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                        {t.page.finishJourney}
                      </Link>
                    </div>
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
