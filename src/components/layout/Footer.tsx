import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCalPopup } from "@/hooks/useCalPopup";
import {
  CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, MEDIUM_URL,
  HK_COMPANY_NAME, HK_REG, HK_ADDRESS,
  CY_COMPANY_NAME, CY_REG, CY_VAT, CY_ADDRESS,
} from "@/lib/constants";

const CURRENT_YEAR = new Date().getFullYear();

const ENTITY_OPTIONS = {
  global: { label: "Global", name: HK_COMPANY_NAME, meta: `Hong Kong IBC · BR No.: ${HK_REG}`, address: HK_ADDRESS },
  eu: { label: "EU", name: CY_COMPANY_NAME, meta: `Cyprus Ltd · Reg. No.: ${CY_REG} · VAT: ${CY_VAT}`, address: CY_ADDRESS },
} as const;

type EntityKey = keyof typeof ENTITY_OPTIONS;

export function Footer() {
  const openCalPopup = useCalPopup();
  const [entity, setEntity] = useState<EntityKey>("global");
  const entityData = ENTITY_OPTIONS[entity];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-lg font-semibold tracking-wide">Wandercode</span>
            <p className="text-sm text-muted-foreground max-w-xs">
              Fractional AI Product Strategist helping outlier companies build intelligent products.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-sm hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-sm hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="text-sm hover:text-foreground transition-colors">
                Privacy
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Medium"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <button
              onClick={openCalPopup}
              className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all cursor-pointer"
            >
              Book a call <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div role="group" aria-label="Legal entity" className="inline-flex rounded-full border border-border p-0.5 gap-0.5 mb-4">
            {(Object.entries(ENTITY_OPTIONS) as [EntityKey, typeof ENTITY_OPTIONS[EntityKey]][]).map(([key, { label }]) => (
              <button
                key={key}
                onClick={() => setEntity(key)}
                aria-pressed={entity === key}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                  entity === key
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">{entityData.name}</p>
              <p className="text-xs text-muted-foreground">{entityData.meta}</p>
            </div>
            <div className="text-xs text-muted-foreground md:text-right">
              <p>{entityData.address}</p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            © {CURRENT_YEAR} Wandercode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}