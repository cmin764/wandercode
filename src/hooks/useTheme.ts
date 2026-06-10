import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "system";
    }
    return "system";
  });

  // Stored in state so the Header icon updates when the OS theme changes while in system mode
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
    return getSystemTheme();
  });

  // Sync resolvedTheme across all hook instances by observing the DOM directly.
  // toggleTheme only updates the calling instance's state; this observer ensures
  // every other mounted useTheme instance follows when data-theme on <html> changes.
  useEffect(() => {
    const root = window.document.documentElement;
    const observer = new MutationObserver(() => {
      setResolvedTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
    });
    observer.observe(root, { attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (resolved: "light" | "dark") => {
      root.setAttribute("data-theme", resolved);
      // MutationObserver picks this up and calls setResolvedTheme
    };

    if (theme === "system") {
      applyTheme(getSystemTheme());
      localStorage.removeItem("theme");

      // Only subscribe to OS changes when in system mode
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) =>
        applyTheme(e.matches ? "dark" : "light");
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      applyTheme(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "system";
      return "light";
    });
  };

  return { theme, setTheme, toggleTheme, resolvedTheme };
}
