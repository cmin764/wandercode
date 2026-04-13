import { Mail, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import CalEmbed from "@/components/CalEmbed";
import { CAL_LINK_DISCOVERY, CONTACT_EMAIL } from "@/lib/constants";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Contact = () => {
  useDocumentTitle("Contact");

  return (
    <Layout>
      {/* Header */}
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Let's start a{" "}
            <em className="not-italic text-muted-foreground">conversation</em>
          </h1>
          <p className="text-lg text-muted-foreground">
            Book a free discovery call to discuss your AI goals. 
            No pressure, just a friendly chat about what's possible.
          </p>
        </div>
      </section>

      {/* Booking + Contact Info */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cal.com Embed */}
            <div className="lg:col-span-2">
              <div
                className="border border-border rounded-lg overflow-hidden bg-card"
                style={{ minWidth: '320px', height: '700px' }}
              >
                <CalEmbed calLink={CAL_LINK_DISCOVERY} />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Pick a time that works for you. The call typically lasts 30 minutes.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-4">Prefer email?</h3>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div>
                <h3 className="text-xl mb-4">Connect</h3>
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com/in/cmin764"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/cmin764"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://cmin764.medium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    Medium <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-xl mb-4">What to expect</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-foreground">1.</span>
                    We'll discuss your current AI goals and challenges
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground">2.</span>
                    I'll share relevant experience and approaches
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground">3.</span>
                    We'll explore if there's a good fit for collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Based in</h2>
            <p className="text-lg text-muted-foreground mb-2">
              Working remotely from{" "}
              <a
                href="https://nomads.com/@cmin764"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                anywhere
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Available for collaboration across all time zones. 
              I typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;