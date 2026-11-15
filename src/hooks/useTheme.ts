import { useSyncExternalStore } from "react";

type Theme = "light" | "dark" | "system";

// One module-level store so every caller (Header, Footer, pages) shares the same state.
// Per-instance state let a stale instance's OS listener override an explicit choice.
let theme: Theme = readStored() ?? "system";
const listeners = new Set<() => void>();
let media: MediaQueryList | null = null;

// Storage throws when site data is blocked; the theme must still work without it.
function readStored(): Theme | null {
  try {
    const v = localStorage.getItem("theme");
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

function writeStored(value: Theme) {
  try {
    if (value === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", value);
  } catch {
    // ignored: the preference just won't persist
  }
}

function systemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolve(): "light" | "dark" {
  return theme === "system" ? systemTheme() : theme;
}

function apply() {
  document.documentElement.setAttribute("data-theme", resolve());
  listeners.forEach((l) => l());
}

function setTheme(next: Theme) {
  theme = next;
  writeStored(next);
  apply();
}

function toggleTheme() {
  setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light");
}

function subscribe(listener: () => void) {
  if (listeners.size === 0) {
    media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", onSystemChange);
    apply();
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) media?.removeEventListener("change", onSystemChange);
  };
}

// Only follows the OS while in system mode, so an explicit choice always wins.
function onSystemChange() {
  if (theme === "system") apply();
}

export function useTheme() {
  const current = useSyncExternalStore(subscribe, () => theme);
  const resolvedTheme = useSyncExternalStore(subscribe, resolve);
  return { theme: current, setTheme, toggleTheme, resolvedTheme };
}
