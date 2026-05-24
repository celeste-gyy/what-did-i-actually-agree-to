import type { Language, PermissionKey } from "./i18n";

const languageKey = "what-did-i-agree-to-language";
const choicesKey = "what-did-i-agree-to-choices";
const exploredKey = "what-did-i-agree-to-explored";
const currentPermissionKey = "what-did-i-agree-to-current";

export type Choice = "allow" | "deny";
export type JourneyStatus = "current" | "explored" | "new";

function readStoredArray(key: string): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = window.localStorage.getItem(key);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(languageKey);
  return stored === "zh" ? "zh" : "en";
}

export function saveStoredLanguage(language: Language) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(languageKey, language);
}

export function getStoredChoices(): Partial<Record<PermissionKey, Choice>> {
  if (typeof window === "undefined") {
    return {};
  }

  const raw = window.localStorage.getItem(choicesKey);
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as Partial<Record<PermissionKey, Choice>>;
  } catch {
    return {};
  }
}

export function saveStoredChoice(permissionKey: PermissionKey, choice: Choice) {
  if (typeof window === "undefined") {
    return;
  }

  const current = getStoredChoices();
  const next = { ...current, [permissionKey]: choice };
  window.localStorage.setItem(choicesKey, JSON.stringify(next));
}

export function getExploredPermissions(): PermissionKey[] {
  return readStoredArray(exploredKey).filter((item): item is PermissionKey =>
    [
      "location",
      "aiTraining",
      "recommendationPersonalization",
      "crossBorder",
      "voiceInput",
      "camera",
      "purchaseHistory",
      "searchHistory"
    ].includes(item as PermissionKey)
  );
}

export function markPermissionExplored(permissionKey: PermissionKey) {
  if (typeof window === "undefined") {
    return;
  }

  const current = getExploredPermissions();
  if (current.includes(permissionKey)) {
    return;
  }

  window.localStorage.setItem(exploredKey, JSON.stringify([...current, permissionKey]));
}

export function getCurrentPermission(): PermissionKey | null {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(currentPermissionKey);
  if (!stored) {
    return null;
  }

  return stored as PermissionKey;
}

export function setCurrentPermission(permissionKey: PermissionKey) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(currentPermissionKey, permissionKey);
}

export function getJourneyProgress() {
  const explored = getExploredPermissions();
  return {
    exploredCount: explored.length,
    total: 8,
    completion: explored.length / 8
  };
}

export function getPermissionStatus(permissionKey: PermissionKey): JourneyStatus {
  const current = getCurrentPermission();
  const explored = getExploredPermissions();

  if (current === permissionKey) {
    return "current";
  }

  if (explored.includes(permissionKey)) {
    return "explored";
  }

  return "new";
}

export function resetJourney() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(choicesKey);
  window.localStorage.removeItem(exploredKey);
  window.localStorage.removeItem(currentPermissionKey);
}
