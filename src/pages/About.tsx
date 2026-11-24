import { ArrowRight, MapPin, Clock, Wallet, Users, Terminal, Rocket, Bot, Package, Network, ArrowUpRight, Home, FileUser, Briefcase, ScrollText, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import {
  PORTFOLIO_URL, CV_URL, BROCHURE_URL, TRAVEL_MD_URL,
  GRAVATAR_URL, NOMADS_URL, YOUTUBE_URL, INSTAGRAM_URL, PHOTOGRAPHY_URL, GOODREADS_URL, MEDIUM_URL,
  NOMOREAPPLY_URL, NOMADS_NEST_URL, TRACED_AI_URL,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useCalPopup } from "@/hooks/useCalPopup";
import { usePageMeta } from "@/hooks/useDocumentTitle";

const About = () => {
  usePageMeta("/about");
  const openCalPopup = useCalPopup();
  return (
    <Layout>
      {/* Header */}
      <section className="container py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              About
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Engineer at core.{" "}
              <em className="not-italic text-muted-foreground">Entrepreneur at heart.</em>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm{" "}
              <a
                href={GRAVATAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-muted-foreground transition-colors"
              >
                Cosmin Poieana
              </a>
              , a senior software engineer with an entrepreneurial mindset.
              I believe human beings are not meant to sink in tedious repetitive tasks.
              That's why AI handles the repetition and humans keep the judgment and the final
              call, with ethical practices and human oversight intact.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Do. Or do not. There is no try." (Yoda)
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BROCHURE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <FileUser className="h-4 w-4" />
                Brochure
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ScrollText className="h-4 w-4" />
                CV
              </a>
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Briefcase className="h-4 w-4" />
                Portfolio
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/cosmin.jpg"
              alt="Cosmin Poieana"
              width={640}
              height={640}
              fetchPriority="high"
              className="aspect-square rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Why Fractional */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold">Why Fractional?</h2>
            <p className="text-lg text-muted-foreground">
              Senior expertise without permanent employment overhead. Direct access, no middlemen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Flexible Commitment</h3>
              <p className="text-muted-foreground text-sm">
                Scale up or down based on your needs. No onboarding period, impact from day one.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Wallet className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Cost-Effective</h3>
              <p className="text-muted-foreground text-sm">
                No benefits package, no equipment budget, no PTO, no notice period. You pay for the outcome, not the employment relationship.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Remote-Native</h3>
              <p className="text-muted-foreground text-sm">
                Async communication, timezone flexibility.{" "}
                <a
                  href={TRAVEL_MD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground transition-colors"
                >
                  Digital nomad since 2021
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Highlights */}
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Background</h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div className="flex gap-4">
              <Terminal className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Python since 2007</p>
                <p className="text-sm">14+ years professional, startups since 2014, from hobby to products serving the enterprise</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Rocket className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Took an AI platform from first commit to paid production</p>
                <p className="text-sm">Co-led delivery at Change Agents in about three and a half months, embedded in a two-engineer team</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Bot className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Harness-only since summer 2025</p>
                <p className="text-sm">Every change goes through Claude Code and Cursor. I built the agent harness that lets two engineers ship like a team, and teach it to others</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Users className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Led a team of five Python engineers</p>
                <p className="text-sm">AI Actions and the Action Server at Sema4.ai</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Package className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Published open-source libraries</p>
                <p className="text-sm">Python RPA libraries on PyPI at Robocorp, used by a 10k-user automation community</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Network className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Designed system architecture</p>
                <p className="text-sm">Developer-focused App Store with OAuth2 at Gorgias</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground">
              Spoke at <strong>EuroPython (Bilbao, 2015)</strong> ·
              Co-founded <strong>RoPython</strong> (Romanian Python community) ·
              Previously with <strong>VONQ</strong> and <strong>Bonsai Labs</strong> (AI SDLC engagements for PE-backed companies)
            </p>
            <p className="text-muted-foreground mt-2">
              Currently with <strong>Change Agents</strong> (primary client, AI Product Engineer, embedded)
            </p>
          </div>
        </div>
      </section>

      {/* For Engineers */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <div className="space-y-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                For Engineers
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Building more than products
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Engineers grow faster around other good engineers. I've spent years building those rooms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* NoMoreApply Card */}
              <div className="flex flex-col p-6 border border-border rounded-lg bg-card">
                <div className="flex items-start justify-between mb-4">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">NoMoreApply</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  A private community I co-founded for engineers who'd rather get referred
                  by peers than spray resumes into the void. Curated, trusted, effective.
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <code className="text-sm font-mono bg-secondary px-3 py-1.5 rounded border border-border select-all">
                    Cosmin - Wandercode
                  </code>
                  <span className="text-xs text-muted-foreground">in "Referred by"</span>
                </div>
                <a
                  href={NOMOREAPPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium hover:underline"
                >
                  Join the community <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              {/* Nomad's Nest Perk Card */}
              <div className="flex flex-col p-6 border border-border rounded-lg bg-card">
                <div className="flex items-start justify-between mb-4">
                  <Home className="h-8 w-8 text-muted-foreground" />
                  <span className="text-xs font-semibold uppercase tracking-wider bg-foreground text-background px-2 py-1 rounded">
                    20% off
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Nomad's Nest</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  Need a base in Cyprus? A fully equipped apartment in Ayia Napa, set up for remote
                  work. 20% off for engineers, and everyone else.
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <code className="text-sm font-mono bg-secondary px-3 py-1.5 rounded border border-border select-all">
                    WANDERCODE
                  </code>
                  <span className="text-xs text-muted-foreground">at checkout</span>
                </div>
                <a
                  href={NOMADS_NEST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium hover:underline"
                >
                  Book your stay <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              {/* Traced AI Card */}
              <div className="flex flex-col p-6 border border-border rounded-lg bg-card">
                <div className="flex items-start justify-between mb-4">
                  <ShieldCheck className="h-8 w-8 text-muted-foreground" />
                  <span className="text-xs font-semibold uppercase tracking-wider bg-foreground text-background px-2 py-1 rounded">
                    Pre-revenue
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Traced AI</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  Tamper-evident audit infrastructure for high-risk AI decisions: logs the why,
                  names the human accountable, and produces proof that holds up under EU AI Act scrutiny.
                  Built in the open before it's obvious.
                </p>
                <a
                  href={TRACED_AI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium hover:underline mt-auto"
                >
                  Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">Technical Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="font-semibold mb-3">AI & Automation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Agent harnesses (Claude Code, Cursor, MCP), multi-agent workflows, RAG pipelines, LLM APIs (OpenAI, Anthropic, Gemini), prompt engineering, Robot Framework, RPA, OCR, intelligent document processing
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="font-semibold mb-3">Backend</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Python (FastAPI, Flask, Django), Go, JS/Node.js (Express, NestJS), gRPC, REST, WebSocket
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="font-semibold mb-3">Frontend</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                React, Next.js, Tailwind CSS, Bootstrap, jQuery, Jinja2
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="font-semibold mb-3">DevOps & Cloud</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Docker, Kubernetes (Helm), Terraform, GCP, AWS, Heroku, Vercel, CI/CD
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="font-semibold mb-3">Data</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                PostgreSQL, MySQL, Redis, MongoDB, Elasticsearch
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="font-semibold mb-3">Product</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                System design, API architecture, team leadership, build vs. buy analysis, roadmap planning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="container py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Beyond code</h2>
          <p className="text-lg text-muted-foreground">
            <a href={PHOTOGRAPHY_URL} target="_blank" rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors">Photography</a>,{" "}
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors">videography</a>,{" "}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors">travel</a>,{" "}
            <a href={GOODREADS_URL} target="_blank" rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors">reading</a>,{" "}
            <a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors">writing</a>.{" "}
            Operating as a digital nomad since 2021,
            with 50+ countries explored.
          </p>
          <a
            href={NOMADS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            <MapPin className="h-4 w-4" />
            Find out where I'm next
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-cta text-cta-foreground">
        <div className="container py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let's talk about your product</h2>
          <p className="text-cta-foreground/80 mb-8 max-w-xl mx-auto">
            Interested in working together? Book a discovery call to explore how I can help.
          </p>
          <Button size="lg" variant="secondary" className="bg-cta-foreground text-cta hover:bg-cta-foreground/90" onClick={openCalPopup}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
