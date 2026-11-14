import type { ReactNode } from "react";

interface EmphasisProps {
  children: ReactNode;
}

export function B({ children }: EmphasisProps) {
  return <strong className="text-foreground font-semibold">{children}</strong>;
}
