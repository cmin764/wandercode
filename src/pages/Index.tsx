import { Link } from "react-router-dom";
import { ArrowRight, Brain, Lightbulb, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Lightbulb,
    title: "AI Consulting & Strategy",
    description:
      "Define your AI roadmap, identify high-impact opportunities, and create a clear path to implementation.",
    href: "/services#consulting",
  },
  {
    icon: Brain,
    title: "AI Product Development",
    description:
      "Build AI-powered features and products from concept to production-ready solutions.",
    href: "/services#development",
  },
  {
    icon: Users,
    title: "AI Workshops & Training",
    description:
      "Upskill your team on AI tools, workflows, and best practices to accelerate adoption.",
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
            I help B2B companies{" "}
            <em className="font-semibold not-italic text-muted-foreground">build intelligent products</em>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Part-time, fully remote AI expertise. From strategy to implementation, 
            I integrate seamlessly with your team to deliver AI solutions that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild>
              <Link to="/contact">
                Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-semibold">Flexible</p>
              <p className="text-muted-foreground">
                Part-time engagement that scales with your needs
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-semibold">Remote</p>
              <p className="text-muted-foreground">
                Async-first collaboration across time zones
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-semibold">Expert</p>
              <p className="text-muted-foreground">
                Deep AI/ML expertise without full-time overhead
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container py-20 md:py-32">
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">How I Can Help</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Whether you're exploring AI possibilities or ready to build, 
            I offer services tailored to your stage and goals.
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
              <h3 className="text-xl mb-2 group-hover:text-foreground transition-colors">
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

      {/* CTA Section */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="container py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to add AI to your product?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let's discuss how fractional AI expertise can accelerate your roadmap 
            without the commitment of a full-time hire.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;