import { useEffect } from "react";

// Shell description from index.html, restored when a route passes none.
let defaultDescription: string | null = null;

export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} | Wandercode`;
  }, [title]);

  useEffect(() => {
    const tag = document.querySelector('meta[name="description"]');
    if (!tag) return;
    defaultDescription ??= tag.getAttribute("content");
    tag.setAttribute("content", description ?? defaultDescription ?? "");
  }, [description]);
}
