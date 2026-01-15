import { Link } from "react-router-dom";
import { ArrowRight, Brain, Lightbulb, Users, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "consulting",
    icon: Lightbulb,
    title: "Consultancy & Strategy Assessment",
    subtitle: "Define your AI vision",
    description:
      "Not sure where to start with AI? Drowning in technical debt? I help founders and product leaders cut through the noise and build a clear path forward.",
    features: [
      "AI readiness assessment",
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
    subtitle: "Confidence Driven Development",
    description:
      "I build products end-to-end — from database to deployment. Shipping fast while maintaining confidence that what you're shipping actually works.",
    features: [
      "LLM integration (OpenAI, Anthropic, open-source models)",
      "RAG pipelines with vector databases",
      "Backend systems (APIs, microservices, async processing)",
      "Frontend interfaces (React/Next.js)",
      "DevOps (Kubernetes, Docker, CI/CD, monitoring)",
    ],
  },
  {
    id: "workshops",
    icon: Users,
    title: "Workshops & Training",
    subtitle: "Ship faster with AI",
    description:
      "AI tools are only as good as the people using them. I run hands-on workshops that help your team actually ship faster — not just talk about AI.",
    features: [
      "Claude Code & Cursor mastery",
      "MCP (Model Context Protocol) integration",
      "Context engineering & prompt optimization",
      "AI integration patterns (when to use LLMs, embeddings, fine-tuning)",
      "Team office hours with ongoing advisory",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Services
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            RaaS —{" "}
            <em className="not-italic text-muted-foreground">Results as a Service</em>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I don't bill hours. I deliver outcomes. Whether you're exploring AI possibilities,
            building your first intelligent feature, or scaling your team's capabilities—I offer
            flexible engagement models to match your needs.
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
                  <Button asChild>
                    <Link to="/contact">
                      Discuss This Service <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Not sure which service fits?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let's talk about your goals. A quick discovery call will help us 
            identify the best approach for your situation.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Book a Free Call <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;