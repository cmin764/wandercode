import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Users, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCalPopup } from "@/hooks/useCalPopup";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const code = (text: string) => (
  <code className="font-mono text-xs bg-muted rounded px-1 py-0.5 not-italic">{text}</code>
);

const module1Topics: ReactNode[] = [
  "The mindset shift: from typing code to directing agents. The transition from normal engineering to cracked, addictive agentic development.",
  "Tooling landscape: Claude Code and Cursor symbiosis. How they complement each other, when to use which. Skills, commands, and memory layers.",
  "Model comparison: when to use which model for what task. Speed vs. quality tradeoffs.",
  <>Context engineering and prompt optimization: why context beats prompting. {code("CLAUDE.md")} as a living ruleset for your AI tools. Memory layers and lazy loading strategies.</>,
  "MCP vs. CLI tradeoffs: when integrations earn their context window cost, when a shell command does the job better.",
  "Blueprint-first development (Blugen): wrapping non-deterministic AI generation in deterministic blueprints.",
];

const module2Phases = [
  {
    name: "Phase 1 — Research & Context",
    description:
      "MCP integrations (Jira, Confluence, Slack, GitHub, databases), multi-source context gathering, structured ticket analysis. MCP vs. CLI: knowing when each approach wins.",
  },
  {
    name: "Phase 2 — Plan & Execute",
    description:
      "Blueprint-first development on a real ticket. Teams of agents and subagents: orchestrating parallel research, planning, and execution. Wireframe generation, function implementation, test generation, PR creation.",
  },
  {
    name: "Phase 3 — Review & Ship",
    description:
      "AI-assisted PR reviews, multi-agent parallel reviews, CI/CD loop automation, review comments collation and batch fixing. Continuous ruleset refinement based on what the team learns.",
  },
];

const deliverables = [
  "The transition path: from tentative AI experimentation to a workflow you can't imagine working without",
  "MCP environments configured and working with your systems",
  "Context engineering and prompt optimization skills",
  "Understanding of memory layers, skills, commands, and agent orchestration",
  "Claude Code and Cursor working together, not competing",
  "Blueprint-first development methodology in practice",
  "AI-assisted PR review workflow with teams of agents",
  "Continuous ruleset improvement practice (it compounds with every session)",
  "Setup guides, configuration templates, starter kit",
  "Post-workshop support (7 days)",
  "Dedicated Slack channel for ongoing team discussion",
];

const principles = [
  {
    label: "Learn, practice, teach",
    detail: "The loop that makes knowledge stick.",
  },
  {
    label: "Show, don't mandate",
    detail: "Prove value through results, not policy. Adoption follows naturally.",
  },
  {
    label: "The ruleset compounds",
    detail: "Every session makes the next one better. The config is a living asset.",
  },
];

const Workshops = () => {
  useDocumentTitle("AI Workshops");
  const openCalPopup = useCalPopup();
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container py-4">
          <Link
            to="/services#workshops"
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
            <Users className="h-4 w-4" />
            Ship faster with AI
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Workshops & Training
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            AI tools are only as good as the people using them. I transition your team from
            trial-and-error prompting to a structured, context-driven workflow that delivers quality
            results from the first pass. Not theory. Hands-on, using your codebase and real backlog
            tickets. By the end, expect a few PRs ready to close.
          </p>
        </div>
      </section>

      {/* Module 1 */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-baseline gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-semibold">Module 1: Foundations</h2>
              <span className="text-sm text-muted-foreground">1 hour · all engineering</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Presentation for all engineering. No laptops required. This is the "why" and "what"
              session: the mindset before the tooling.
            </p>
            <ul className="space-y-3">
              {module1Topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Module 2 */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-baseline gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-semibold">Module 2: Applied Workshop</h2>
              <span className="text-sm text-muted-foreground">3 hours · engineers</span>
            </div>
            <p className="text-muted-foreground mb-10">
              Three 1-hour phases. Each follows: 10 min tutorial, 30 min hands-on, 10 min Q&A, 10
              min break. Prerequisite: Module 1 + setup completed.
            </p>
            <div className="space-y-0">
              {module2Phases.map((phase, index) => (
                <div key={phase.name} className="flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-semibold shrink-0">
                      {index + 1}
                    </div>
                    {index < module2Phases.length - 1 && (
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
      <section className="border-t border-border bg-secondary/30">
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
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Why This Works</h2>
            <blockquote className="border-l-2 border-foreground pl-6">
              <p className="text-muted-foreground leading-relaxed italic">
                "Poor AI output usually means missing context. The AI doesn't know your codebase,
                your conventions, your ticket specs. It's guessing. Feed it structured context and
                the output changes dramatically. Slow generation usually means wrong model, wrong
                pipeline, or both. This workshop teaches the framework to fix both problems."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border bg-secondary/30">
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
      <section className="border-t border-border bg-cta text-cta-foreground">
        <div className="container py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to level up your team?
          </h2>
          <p className="text-cta-foreground/80 mb-8 max-w-xl mx-auto">
            A short discovery call is enough to scope the session and confirm it's the right fit for
            your team size and setup.
          </p>
          <Button size="lg" variant="secondary" onClick={openCalPopup}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Workshops;
