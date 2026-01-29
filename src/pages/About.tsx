import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Zap, Code, Brain, Users, TrendingUp, ArrowUpRight, Home, FileText } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const About = () => {
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
                href="https://github.com/cmin764/cmin764/blob/main/codex.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-muted-foreground transition-colors"
              >
                Cosmin Poieana
              </a>{" "}
              — a senior software engineer with an entrepreneurial mindset.
              I believe human beings are not meant to sink in tedious repetitive tasks.
              That's why I focus on leveraging AI to automate what can be automated,
              while preserving ethical practices and human oversight.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Do. Or do not. There is no try." — Yoda
            </p>
            <a
              href="https://cmin764.github.io/cmin764/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileText className="h-4 w-4" />
              View CV
            </a>
          </div>
          <div className="relative">
            <img
              src="/cosmin.jpg"
              alt="Cosmin Poieana"
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
              Senior expertise without full-time overhead.
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
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Cost-Effective</h3>
              <p className="text-muted-foreground text-sm">
                Enterprise-level talent without full-time overhead. Get exactly what you need.
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
                  href="https://nomads.com/@cmin764"
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
              <TrendingUp className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">18+ years</p>
                <p className="text-sm">Python expertise, from hobby to enterprise</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Users className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Led engineering teams</p>
                <p className="text-sm">AI-powered automation agents at Sema4.ai</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Code className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Published open-source libraries</p>
                <p className="text-sm">PyPI packages at Robocorp, enhancing RPA for thousands</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Brain className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Designed system architecture</p>
                <p className="text-sm">Developer-focused App Store with OAuth2 at Gorgias</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground">
              International speaker at <strong>EuroPython (Bilbao, 2015)</strong> ·
              Co-founded <strong>RoPython</strong> (Romanian Python community) ·
              Currently working with <strong>VONQ</strong> and previously with <strong>A5 Labs</strong>
            </p>
          </div>
        </div>
      </section>

      {/* For Engineers */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                For Engineers
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Building more than products
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Great engineers don't just write code. They build networks, share knowledge,
                and lift each other up. I've spent years creating spaces for exactly that.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NoMoreApply Card */}
              <a
                href="https://nomoreapply.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-border rounded-lg bg-card hover:bg-accent/50 transition-colors"
              >
                <Users className="h-8 w-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <h3 className="text-xl font-semibold mb-2">NoMoreApply</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  A private community I co-founded for engineers who'd rather get referred
                  by peers than spray resumes into the void. Curated, trusted, effective.
                </p>
                <div className="flex items-center text-sm font-medium">
                  Join the community <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* Nomad's Nest Perk Card */}
              <div className="p-6 border border-border rounded-lg bg-card">
                <Home className="h-8 w-8 mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Nomad's Nest</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Need a base in Cyprus? Engineers get 15% off stays at Nomad's Nest,
                  curated accommodations built for remote workers.
                </p>
                <a
                  href="https://www.nomadsnest.live/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium hover:underline"
                >
                  Book with code "WANDERCODE" <ArrowUpRight className="ml-1 h-4 w-4" />
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
              <h4 className="font-semibold mb-3">AI & Automation</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                LLM/GPT integration, RAG pipelines, prompt engineering, Robot Framework, RPA, OCR, intelligent document processing
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h4 className="font-semibold mb-3">Backend</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Python (FastAPI, Flask, Django), Go, JS/Node.js (Express, NestJS), gRPC, REST, WebSocket, GraphQL
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h4 className="font-semibold mb-3">Frontend</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                React, Next.js, Tailwind CSS, Bootstrap, jQuery, Jinja2
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h4 className="font-semibold mb-3">DevOps & Cloud</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Docker, Kubernetes (Helm), Terraform, GCP, AWS, Heroku, Vercel, CI/CD
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h4 className="font-semibold mb-3">Data</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                PostgreSQL, MySQL, Redis, MongoDB, ElasticSearch
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h4 className="font-semibold mb-3">Product</h4>
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
            <a href="https://www.instagram.com/asitisphotos" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors">Photography</a>,{" "}
            <a href="https://www.youtube.com/@cmin764" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors">videography</a>,{" "}
            <a href="https://www.instagram.com/cmin764" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors">travel</a>,{" "}
            <a href="https://goodreads.com/user/show/84378981-cosmin-poiean" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors">reading</a>,{" "}
            <a href="https://cmin764.medium.com" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors">writing</a>.{" "}
            Operating as a digital nomad since 2021,
            with 50+ countries explored.
          </p>
          <a
            href="https://nomads.com/@cmin764"
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
      <section className="border-t border-border bg-slate-900 text-white">
        <div className="container py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let's talk about your product</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Interested in working together? Book a discovery call to explore how I can help.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
