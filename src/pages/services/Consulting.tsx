import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Lightbulb } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCalPopup } from "@/hooks/useCalPopup";

const phases = [
  {
    name: "Discovery",
    description:
      "Context gathering, architecture deep-dive, codebase review, edge case mapping. Ground truth, not assumptions. I ask a lot of questions early so I don't build on wrong ones later.",
  },
  {
    name: "Research",
    description:
      "Stack analysis, build vs. buy verdicts, risk formalization, experiment specifications. Evidence-backed decisions, not recommendations from a slide template.",
  },
  {
    name: "Synthesis",
    description:
      "Framework blueprint, prioritized roadmap, development process recommendations. Actionable output your team can execute, not academic artifacts.",
  },
  {
    name: "Delivery",
    description:
      "Final documents committed to your repo, summary video walkthrough, handover session. Everything structured for AI parsing and future reference.",
  },
];

const deliverables = [
  "Technical audit of current implementation (what's solid, what's fragile, what's missing)",
  "Stack analysis with evidence-backed verdicts and tradeoff matrices",
  "Risk register with impact/likelihood scoring and mitigation strategies",
  "Framework blueprint for scaling without rewriting",
  "Build vs. buy analysis per component",
  "Development process recommendations (CI/CD, testing, monitoring)",
  "Prioritized roadmap with clear phase gates",
  "Summary video walkthrough (shareable with team and investors)",
  "7 days post-delivery support for clarification questions",
];

const principles = [
  { label: "Decisions over opinions", detail: "Every recommendation backed by evidence." },
  { label: "Reversibility matters", detail: "Flag which choices are one-way doors vs. easily changed." },
  { label: "Speed to \"no\"", detail: "If something won't work, surface it fast so you can pivot." },
];

const Consulting = () => {
  const openCalPopup = useCalPopup();
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container py-4">
          <Link
            to="/services#consulting"
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
            <Lightbulb className="h-4 w-4" />
            Define your AI vision
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Consultancy & Strategy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            You have a product direction but not enough signal to commit engineering resources. I spend
            1–2 weeks inside your problem, then hand you a decision-ready package: technical audit,
            stack verdict, risk register, framework blueprint, and a prioritized roadmap your team can
            execute immediately. Markdown docs in your repo that your engineers can reference and your
            AI tools can parse. Not a 50-page report that collects dust.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">How It Works</h2>
            <p className="text-muted-foreground mb-10">
              Every engagement adapts to your scope and depth, but the rhythm stays the same. A recent
              example ran 7 business days. Deeper audits take two weeks. The phases scale, the
              discipline doesn't.
            </p>
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
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">In Practice</h2>
            <blockquote className="border-l-2 border-foreground pl-6 space-y-2">
              <p className="text-muted-foreground leading-relaxed italic">
                "For a dental software startup scaling desktop automation from 2 to 19+ EHR systems
                across Europe, I delivered 17 documents in 7 business days: architecture deep-dive,
                stack analysis with hybrid verdict, risk register scoring 28 risks, framework blueprint
                with three-layer separation, and a prioritized 4-phase roadmap. The team went from stack
                uncertainty to a conditional execution plan with branched decision trees for every open
                blocker."
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to get clarity?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            A short discovery call is enough to scope the engagement and confirm it's the right fit.
          </p>
          <Button size="lg" variant="secondary" onClick={openCalPopup}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Consulting;
