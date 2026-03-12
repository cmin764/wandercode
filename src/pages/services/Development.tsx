import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Brain, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const phases = [
  {
    name: "Brainstorm",
    description:
      "Sit down with the product manager, designer, and the pair dev. Understand the problem, explore options, achieve consensus on the path forward, then commit to the iteration. No one builds in a silo.",
  },
  {
    name: "Spec",
    description:
      "Document-first approach. A shared spec ensures parallel-developed parts meet in the middle without wasted engineering time on overlapping efforts. Spec-first, context-aware, agentic development.",
  },
  {
    name: "Execute",
    description:
      "Ship in lean iterations. Daily async updates, weekly checkpoints. On-time delivery of imperfect beats exceeding the deadline and disappointing. Confidence-driven development: tests and validation grow alongside the code, not after it.",
  },
  {
    name: "Handoff",
    description:
      "Code, documentation, conventions, and practices stay with your team. If I've done my job, your team ships faster without me than before I arrived.",
  },
];

const deliverables = [
  "Full ownership from design to deployment",
  "AI agents and intelligent automation",
  "RAG systems for knowledge-driven products",
  "Full-stack delivery: APIs, UIs, CI/CD, observability",
  "Blueprint artifacts your AI tools can parse for future development",
  "Document-first specs that keep everyone on the same page",
  "Team practices that outlast the engagement",
];

const principles = [
  {
    label: "Consensus first, then commit",
    detail: "Brainstorm the options, align on the path, then execute without second-guessing.",
  },
  {
    label: "On-time imperfect > late polished",
    detail: "Ship, learn, iterate. Deadlines are a forcing function, not an enemy.",
  },
  {
    label: "Document-first",
    detail: "No silos, no overlapping efforts, no surprises at integration time.",
  },
];

const Development = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container py-4">
          <Link
            to="/services#development"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Services
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent rounded-full text-sm">
            <Brain className="h-4 w-4" />
            Ship What Matters
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            AI Product Development
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I own the full arc from strategy to deployment, embedding into your Slack, GitHub, and
            standups. Not a vendor on the outside, part of the team without the payroll. Each
            engagement targets the smallest unit of work that delivers real impact. No scope creep, no
            filler. Blueprint-first: research the problem, plan the architecture, then ship
            production-grade code with AI tooling that makes the output reproducible and auditable.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10">How It Works</h2>
            <div className="space-y-0">
              {phases.map((phase, index) => (
                <div key={phase.name} className="flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-semibold shrink-0">
                      {index + 1}
                    </div>
                    {index < phases.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-3" />
                    )}
                  </div>
                  <div className="pt-1 pb-2">
                    <h3 className="font-semibold mb-1">{phase.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">What You Get</h2>
            <ul className="space-y-3">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Proof point */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">How I Think</h2>
            <blockquote className="border-l-2 border-foreground pl-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed italic">
                "There has to be a simple solution for this. If the explanation is getting
                complicated, the approach is probably wrong."
              </p>
              <p className="text-muted-foreground leading-relaxed italic">
                "I work backward from the customer, even when the org chart separates me from
                delivery. The scariest parts of a codebase are where the most leverage lives, and
                someone has to go there."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {principles.map((p) => (
                <div key={p.label} className="space-y-2">
                  <p className="font-semibold">{p.label}</p>
                  <p className="text-sm text-muted-foreground">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-slate-900 text-white">
        <div className="container py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to ship what matters?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            A short discovery call is enough to scope the engagement and confirm it's the right fit.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Development;
