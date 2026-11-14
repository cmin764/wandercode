import { useEffect } from "react";

export function useNoIndex() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    // NotFound skips Layout, so a canonical left from the previous page would point a 404 at it.
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.remove();
    return () => { meta.remove(); };
  }, []);
}
