import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-lg font-semibold tracking-wide">Wandercode</span>
            <p className="text-sm text-muted-foreground max-w-xs">
              Fractional AI Product Engineer helping B2B companies build intelligent products.
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
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
            >
              Book a call <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {currentYear} Wandercode. All rights reserved.
        </div>
      </div>
    </footer>
  );
}