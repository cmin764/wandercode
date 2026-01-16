import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Zap, Code, Brain, Users, TrendingUp } from "lucide-react";
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
              I'm Cosmin Poieana — a senior software engineer with an entrepreneurial mindset.
              I believe human beings are not meant to sink in tedious repetitive tasks.
              That's why I focus on leveraging AI to automate what can be automated,
              while preserving ethical practices and human oversight.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Do. Or do not. There is no try."
            </p>
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
            <h2 className="text-2xl md:text-3xl font-semibold">Why fractional?</h2>
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
                Scale up or down based on your needs. No junior learning curve, immediate impact.
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
                Async communication, timezone flexibility. Operating as a digital nomad since 2018.
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
                <p className="font-semibold text-foreground">17+ years</p>
                <p className="text-sm">Hands-on software development, Python as primary language</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Users className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Led engineering teams</p>
                <p className="text-sm">At Sema4.ai (AI-powered automation agents)</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Code className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Published RPA libraries</p>
                <p className="text-sm">At Robocorp, used by thousands of developers</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Brain className="h-5 w-5 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Designed OAuth2 App Store architecture</p>
                <p className="text-sm">At Gorgias, enabling seamless third-party integrations</p>
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

      {/* Technical Expertise */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">Technical Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-card">
              <h4 className="font-semibold mb-3">AI & Automation</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                LLM integration, RAG pipelines, prompt engineering, intelligent document processing, RPA
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h4 className="font-semibold mb-3">Backend</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Python (FastAPI, Django, Flask), Go, TypeScript/Node.js, gRPC, PostgreSQL, Redis
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h4 className="font-semibold mb-3">Frontend</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                React, Next.js, Tailwind CSS, TypeScript
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h4 className="font-semibold mb-3">DevOps</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Docker, Kubernetes, GCP, AWS, Terraform, CI/CD
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card md:col-span-2">
              <h4 className="font-semibold mb-3">Product</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                System design, API architecture, team leadership, technical documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="container py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Beyond code</h2>
          <p className="text-lg text-muted-foreground">
            Photography, videography, travel, reading. Operating as a digital nomad since 2018,
            currently working remotely from anywhere.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="container py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let's talk about your product</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
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
