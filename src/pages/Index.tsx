import { Link } from "react-router-dom";
import { ArrowRight, Brain, Lightbulb, Users, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Lightbulb,
    title: "Consultancy & Strategy",
    description:
      "Cut through the noise. AI readiness assessment, tech stack recommendations, and prioritized action plans.",
    href: "/services#consulting",
  },
  {
    icon: Brain,
    title: "AI Product Development",
    description:
      "From database to deployment. LLM integration, RAG pipelines, backend systems, and DevOps.",
    href: "/services#development",
  },
  {
    icon: Users,
    title: "Workshops & Training",
    description:
      "Ship faster with AI. Claude Code mastery, MCP integration, and context engineering workshops.",
    href: "/services#workshops",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-widest text-muted-foreground animate-fade-in">
            Fractional AI Product Engineer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Results as a Service
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I help B2B startups build intelligent products — from strategy to production.
            No hours billed, only outcomes delivered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild>
              <Link to="/contact">
                Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Cosmin Poieana
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                17+ years in software engineering. Former tech lead at Sema4.ai, Robocorp,
                Gorgias, and Comfy. Published RPA libraries used by thousands. International
                speaker at EuroPython.
              </p>
              <p>
                Digital nomad, remote-first operator. Operating WANDERCODE LIMITED from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container py-20 md:py-32">
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">What I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Three service areas, flexible engagement models. From one-off consultations
            to embedded fractional work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group p-6 md:p-8 border border-border rounded-lg bg-card hover:bg-accent/50 transition-colors"
            >
              <service.icon className="h-8 w-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-foreground transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium">
                Learn more{" "}
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Trusted By
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-xl font-semibold">A5 Labs</p>
                <p className="text-sm text-muted-foreground">Past client</p>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold">VONQ</p>
                <p className="text-sm text-muted-foreground">Current client</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Technologies: Python · FastAPI · React · LLMs · Kubernetes · PostgreSQL · Docker · GCP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fractional */}
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Why Fractional?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <CheckCircle2 className="h-8 w-8 mx-auto text-muted-foreground" />
              <h3 className="font-semibold">Flexible</h3>
              <p className="text-sm text-muted-foreground">
                Scale up or down based on your needs
              </p>
            </div>
            <div className="text-center space-y-2">
              <CheckCircle2 className="h-8 w-8 mx-auto text-muted-foreground" />
              <h3 className="font-semibold">Senior</h3>
              <p className="text-sm text-muted-foreground">
                No junior learning curve, immediate impact
              </p>
            </div>
            <div className="text-center space-y-2">
              <CheckCircle2 className="h-8 w-8 mx-auto text-muted-foreground" />
              <h3 className="font-semibold">Remote</h3>
              <p className="text-sm text-muted-foreground">
                Async-first, timezone-flexible communication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="container py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let's start a conversation</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call. No pressure, just a friendly chat about
            what's possible for your product.
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

export default Index;
