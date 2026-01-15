import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const Contact = () => {
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

      {/* Calendly + Contact Info */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Calendly Embed */}
            <div className="lg:col-span-2">
              <div className="border border-border rounded-lg overflow-hidden bg-card">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/cmin764/wandercode-discovery-call"
                  style={{ minWidth: '320px', height: '700px' }}
                />
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
                  href="mailto:cmin764@gmail.com"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  cmin764@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xl mb-4">Connect on LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/cmin764"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </a>
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
              Working remotely from anywhere
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