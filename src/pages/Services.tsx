import { Link } from "react-router-dom";
import { ArrowRight, Brain, Lightbulb, Users, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "consulting",
    icon: Lightbulb,
    title: "AI Consulting & Strategy",
    subtitle: "Define your AI vision",
    description:
      "Not sure where to start with AI? I help you identify the highest-impact opportunities and create a clear, actionable roadmap tailored to your business goals.",
    features: [
      "AI opportunity assessment",
      "Technology stack recommendations",
      "Build vs. buy analysis",
      "Implementation roadmap",
      "Risk and feasibility evaluation",
    ],
  },
  {
    id: "development",
    icon: Brain,
    title: "AI Product Development",
    subtitle: "Build intelligent products",
    description:
      "From proof-of-concept to production, I help you design, build, and deploy AI-powered features that solve real problems for your users.",
    features: [
      "LLM integration & prompt engineering",
      "Custom ML model development",
      "AI feature prototyping",
      "Production deployment & scaling",
      "Performance optimization",
    ],
  },
  {
    id: "workshops",
    icon: Users,
    title: "AI Workshops & Training",
    subtitle: "Empower your team",
    description:
      "Accelerate your team's AI capabilities with hands-on workshops covering the latest tools, techniques, and best practices.",
    features: [
      "AI tools & workflows training",
      "Prompt engineering workshops",
      "Team upskilling programs",
      "Best practices documentation",
      "Ongoing mentorship",
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
          <h1 className="text-4xl md:text-5xl leading-tight">
            Fractional AI expertise for{" "}
            <span className="italic">every stage</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Whether you're exploring possibilities, building your first AI feature, 
            or scaling your team's capabilities—I offer flexible engagement models 
            to match your needs.
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
                  <h2 className="text-3xl md:text-4xl">{service.title}</h2>
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
          <h2 className="text-3xl md:text-4xl mb-4">Not sure which service fits?</h2>
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