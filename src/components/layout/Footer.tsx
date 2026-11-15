import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/BrandIcons";
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
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h2>
            <nav aria-label="Footer" className="flex flex-col gap-2">
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
              <Link to="/ip" className="text-sm hover:text-foreground transition-colors">
                IP
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h2>
            <div className="flex gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub (opens in new tab)"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn (opens in new tab)"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Medium (opens in new tab)"
              >
                <MediumIcon className="h-5 w-5" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-14">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">{entityData.name}</p>
              <p className="text-xs text-muted-foreground">{entityData.meta}</p>
            </div>
            <div className="text-xs text-muted-foreground md:text-right">
              {entityData.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
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