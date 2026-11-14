import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "@/lib/constants";

let canonicalTag: HTMLLinkElement | null = null;

export function useCanonical() {
  const { pathname } = useLocation();
  useEffect(() => {
    // isConnected: NotFound removes the tag, so a cached reference can be detached.
    if (!canonicalTag?.isConnected) {
      canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.rel = "canonical";
        document.head.appendChild(canonicalTag);
      }
    }
    canonicalTag.href = `${SITE_URL}${pathname}`;
  }, [pathname]);
}
