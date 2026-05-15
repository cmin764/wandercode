import { Link } from "react-router-dom";
import { ArrowRight, Brain, Lightbulb, Users, Check, ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCalPopup } from "@/hooks/useCalPopup";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const services = [
  {
    id: "consulting",
    icon: Lightbulb,
    title: "Consultancy & Strategy",
    subtitle: "Define your AI vision",
    description:
      "Not sure where to start with AI? I help founders and product leaders cut through the noise, identify which problems are worth solving, and build a clear path forward.",
    pricing: {
      startingFrom: "$3,000",
      timeframe: "1–2 weeks",
      cadence: "Kickoff call + assessment report + final walkthrough",
    },
    features: [
      "AI and automation readiness assessment",
      "Technology stack recommendations",
      "Build vs. buy analysis",
      "Product-market fit validation from a technical lens",
      "Prioritized action plan with roadmap",
    ],
  },
  {
    id: "development",
    icon: Brain,
    title: "AI Product Development",
    subtitle: "Ship What Matters",
    description:
      "I own the full arc from strategy to deployment, working directly alongside your team. Each engagement focuses on the smallest unit of work that delivers real impact. No scope creep, no filler. Just the essential pieces that move your product forward.",
    pricing: {
      startingFrom: "$6,000",
      timeframe: "3–4 week sprints",
      cadence: "Weekly iterations + daily async updates + handoff session",
    },
    features: [
      "Full ownership from design to deployment",
      "Lean product cycles: MVP, iterate, retain",
      "AI agents and intelligent automation",
      "RAG systems for knowledge-driven products",
      "Full-stack delivery: APIs, UIs, CI/CD, observability",
    ],
  },
  {
    id: "workshops",
    icon: Users,
    title: "Workshops & Training",
    subtitle: "Ship faster with AI",
    description:
      "AI tools are only as good as the people using them. I transition your team from trial-and-error prompting to a spec-first, context-driven workflow that delivers quality results from the first pass.",
    pricing: {
      startingFrom: "$600",
      timeframe: "Half-day session",
      cadence: "Intro session + hands-on workshop + starter kit",
    },
    features: [
      "Claude Code & Cursor mastery",
      "MCP (Model Context Protocol) integration",
      "Context engineering & prompt optimization",
      "Blugen: blueprint-first AI development",
      "Hands-on with your codebase and real backlog tickets",
    ],
  },
];

const faqs = [
  {
    question: "Why are your rates what they are?",
    answer:
      "13 years of shipping in cybersecurity, fintech, IoT, biotech, and AI. Two companies I worked at got acquired: Fashwell by Apple, Comfy by Siemens. You're paying to skip the expensive mistakes I've already made, not for hours logged.",
  },
  {
    question: "Why scope-based instead of full-time or hourly?",
    answer:
      "Full-time ties compensation to presence. Hourly ties it to clock time. Neither measures what matters. Scope-based means clear deliverables, fixed price, agreed deadline. You know what you're getting and what it costs before we start. If I solve it in three days instead of ten, the value to you is higher, not lower. Less output, more outcome.",
  },
  {
    question: "Do I need to provide equipment, tools, or benefits?",
    answer:
      "No. I work with my own setup: hardware, subscriptions, software licenses, and development tools are all on me. No equipment budget to approve, no software seats to procure, no benefits package, no PTO accrual, no notice period. You pay for the scope, nothing else.",
  },
  {
    question: "Why does discovery come before code?",
    answer:
      "Front-loading the blueprint prevents rebuilding later. Most teams move fast in the wrong direction, then spend months unwinding week-one decisions. The research phase feels slow because it prevents the detour nobody budgets for.",
  },
  {
    question: "Do you build or just advise?",
    answer:
      "Both. I'm not a slide deck consultant. I embed into your Slack, your GitHub, your standups. I ship code alongside your team. Strategy without execution is just opinions.",
  },
  {
    question: "What's your role on the team?",
    answer:
      "Just me: no subcontractors, no account managers, no junior handoffs. Give me the \"why\" and the goals; figuring out the \"how\" is what you're paying for. I work with people, not companies. If you see me as a vendor, we're already misaligned.",
  },
  {
    question: "What if it doesn't work out?",
    answer:
      "We'll know fast. I don't take projects where I can't move the needle, and I'll tell you upfront if your problem is hiring rather than execution. If we start and something's off, we course-correct or part ways cleanly.",
  },
  {
    question: "What happens after you leave?",
    answer:
      "You keep everything. The code, the documentation, the conventions, the practices. I'm not building dependency. If I've done my job, your team ships faster without me than they did before I arrived.",
  },
];

const Services = () => {
  useDocumentTitle("Services");
  const openCalPopup = useCalPopup();
  return (
    <Layout>
      {/* Header */}
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Services
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            RaaS:{" "}
            <em className="not-italic text-muted-foreground">Results as a Service</em>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I don't bill hours. I deliver outcomes. Whether you're exploring AI possibilities,
            building your first intelligent feature, or scaling your team's capabilities, I offer
            flexible engagement models to match your needs.
          </p>
          <p className="text-sm text-muted-foreground/80 mt-4">
            Solo practice: you work directly with me, not a team or subcontractors.
            I take on at most two part-time engagements simultaneously, or one full-time.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            All prices listed are indicative starting points. Final scope and pricing
            are discussed during the discovery call. Engagements are governed by a
            separate service agreement.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="border-t border-border">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`border-b border-border ${
              index % 2 === 1 ? "bg-secondary/30" : ""
            }`}
          >
            <div className="container py-16 md:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent rounded-full text-sm">
                    <service.icon className="h-4 w-4" />
                    {service.subtitle}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      Starting from{" "}
                      <span className="font-semibold text-foreground">
                        {service.pricing.startingFrom}
                      </span>
                      <span className="mx-2 text-muted-foreground/50">·</span>
                      <span>{service.pricing.timeframe}</span>
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      {service.pricing.cadence}
                    </p>
                  </div>
                  <Button asChild>
                    <Link to={`/services/${service.id}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                  <h3 className="text-lg font-semibold mb-4">What's included</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Referral notice */}
      <section className="border-t border-border">
        <div className="container py-8">
          <p className="text-xs text-muted-foreground/60 max-w-3xl mx-auto text-center">
            <span className="font-medium text-muted-foreground/80">Representing a client?</span>{" "}
            Recruiters and agencies who introduce engagements earn a 10% referral fee on top of the
            standard engagement price. My rates stay the same. You get a transparent margin for the
            introduction, I get access to clients I wouldn't reach otherwise.{" "}
            <Link to="/contact" className="underline hover:text-foreground transition-colors">
              Reach out
            </Link>{" "}
            to discuss terms.
          </p>
        </div>
      </section>

      {/* Q&A */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Q&A</h2>
            <div className="space-y-0 border border-border rounded-lg overflow-hidden">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className={`group ${index !== faqs.length - 1 ? "border-b border-border" : ""}`}
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-medium hover:bg-accent/50 transition-colors [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-cta text-cta-foreground">
        <div className="container py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Not sure which service fits?</h2>
          <p className="text-cta-foreground/80 mb-8 max-w-xl mx-auto">
            Let's talk about your goals. A quick discovery call will help us 
            identify the best approach for your situation.
          </p>
          <Button size="lg" variant="secondary" onClick={openCalPopup}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;