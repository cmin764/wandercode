import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://wandercode.ltd";

export function useCanonical() {
  const { pathname } = useLocation();
  useEffect(() => {
    let tag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!tag) {
      tag = document.createElement("link");
      tag.rel = "canonical";
      document.head.appendChild(tag);
    }
    tag.href = `${BASE_URL}${pathname}`;
  }, [pathname]);
}
