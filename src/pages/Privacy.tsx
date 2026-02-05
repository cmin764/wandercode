import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Legal
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Effective 31 January 2026 &middot; WANDERCODE LIMITED
            </p>
          </div>

          {/* What We Collect */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">What We Collect</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <p className="font-semibold text-foreground">Theme preference</p>
                <p className="text-sm">
                  Your light/dark mode choice is stored in your browser's localStorage.
                  It never leaves your device and is not transmitted to any server.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Vercel Analytics</p>
                <p className="text-sm">
                  This site uses Vercel Analytics, a privacy-friendly, cookie-free analytics service.
                  It collects aggregated page view data including pages visited, referrer URL,
                  browser and operating system type, and approximate geography derived from your
                  IP address. No personal identifiers are stored.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Calendly</p>
                <p className="text-sm">
                  When you book a discovery call through the embedded Calendly widget, Calendly
                  collects your name, email address, and timezone. This data is collected and
                  processed by Calendly, not by this site directly.
                </p>
              </div>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Third-Party Services</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Vercel</span> provides hosting
                and analytics for this site.{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground transition-colors"
                >
                  Vercel Privacy Policy
                </a>
              </p>
              <p>
                <span className="font-semibold text-foreground">Calendly</span> powers the
                scheduling widget on the Contact page.{" "}
                <a
                  href="https://calendly.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground transition-colors"
                >
                  Calendly Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Cookies</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This site does not set any cookies. The embedded Calendly widget may set its own
              cookies when loaded. For details, refer to{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Calendly's cookie policy
              </a>.
            </p>
          </div>

          {/* Your Rights */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Your Rights</h2>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                If you have questions about your data or wish to request its deletion, contact{" "}
                <a
                  href="mailto:cmin764@gmail.com"
                  className="underline hover:text-foreground transition-colors"
                >
                  cmin764@gmail.com
                </a>.
              </p>
              <p>
                WANDERCODE LIMITED is incorporated in Hong Kong and operates under the
                Personal Data (Privacy) Ordinance (PDPO). Where applicable, we also
                respect rights granted under the EU General Data Protection Regulation (GDPR).
              </p>
            </div>
          </div>

          {/* Trademark Notice */}
          <div id="trademark-notice" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-semibold">Trademark Notice</h2>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                Logos and names of clients and partner organisations displayed on this
                site are trademarks of their respective owners. They appear here solely
                to reference genuine professional relationships and do not imply
                endorsement of WANDERCODE LIMITED by those organisations.
              </p>
              <p>
                If you represent one of these organisations and would prefer your logo
                or name not to appear on this site, contact{" "}
                <a
                  href="mailto:cmin764@gmail.com"
                  className="underline hover:text-foreground transition-colors"
                >
                  cmin764@gmail.com
                </a>{" "}
                and it will be removed promptly.
              </p>
            </div>
          </div>

          {/* Changes */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Changes</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This policy may be updated from time to time. The effective date at the top
              of the page always reflects the latest version.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
