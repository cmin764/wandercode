import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowUpRight, Github } from "lucide-react";

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
                href="https://github.com/cmin764"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/cmin764"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://cmin764.medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Medium"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a
                href="mailto:cmin764@gmail.com"
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

        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted-foreground">
            <div className="space-y-2">
              <p className="font-semibold text-foreground">WANDERCODE LIMITED</p>
              <p className="text-xs">Hong Kong IBC · Reg. no: 77675006</p>
            </div>
            <div className="text-xs space-y-1 md:text-right">
              <p>Unit 2A, 17/F, Glenealy Tower, No.1 Glenealy</p>
              <p>Central, Hong Kong S.A.R.</p>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            © {currentYear} WANDERCODE LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}