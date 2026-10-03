import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // Only a route change resets scroll; clearing a hash must not jump to top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      // JS-driven smooth scroll bypasses the CSS reduced-motion block.
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
