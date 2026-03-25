import { Mail, Linkedin, ArrowUpRight, Github } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import CalEmbed from "@/components/CalEmbed";
import { CAL_LINK_DISCOVERY } from "@/lib/constants";

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
                  href="mailto:cmin764@gmail.com"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  cmin764@gmail.com
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
                    <Linkedin className="h-5 w-5" />
                    LinkedIn <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/cmin764"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
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