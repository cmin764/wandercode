import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Zap } from "lucide-react";
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
              About Me
            </p>
            <h1 className="text-4xl md:text-5xl leading-tight">
              Building AI products{" "}
              <span className="italic">that matter</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a product engineer specializing in AI/ML integration for B2B companies. 
              With years of experience at the intersection of product development and 
              artificial intelligence, I help teams turn complex AI capabilities into 
              elegant, user-friendly solutions.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-accent rounded-lg flex items-center justify-center">
              <span className="text-6xl heading-serif italic text-muted-foreground">
                Photo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fractional */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl">Why work with a fractional engineer?</h2>
            <p className="text-lg text-muted-foreground">
              Get senior AI expertise without the overhead of a full-time hire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-xl">Flexible Commitment</h3>
              <p className="text-muted-foreground text-sm">
                Scale hours up or down based on your project needs. 
                No long-term contracts required.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-xl">Immediate Impact</h3>
              <p className="text-muted-foreground text-sm">
                Hit the ground running with someone who's done this before. 
                No ramp-up time wasted.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-xl">Fully Remote</h3>
              <p className="text-muted-foreground text-sm">
                Async-first communication that respects your team's workflow 
                across any time zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="container py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl">Background</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I've spent my career at the intersection of product and engineering, 
                with a deep focus on AI/ML technologies. My experience spans startups 
                and established companies, always with a focus on building products 
                that users love.
              </p>
              <p>
                My approach combines technical expertise with product thinking. 
                I don't just build AI features—I ensure they solve real problems 
                and integrate seamlessly into your existing product experience.
              </p>
              <p>
                When I'm not helping companies build AI products, you'll find me 
                staying current with the latest developments in the AI space, 
                contributing to open-source projects, and sharing knowledge 
                with the community.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl">Expertise</h2>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-1">AI/ML Integration</h4>
                <p className="text-sm text-muted-foreground">
                  LLMs, embeddings, RAG systems, prompt engineering, fine-tuning
                </p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-1">Product Development</h4>
                <p className="text-sm text-muted-foreground">
                  Full-stack development, system design, API architecture
                </p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-1">Strategy & Leadership</h4>
                <p className="text-sm text-muted-foreground">
                  AI roadmapping, team mentorship, technical decision-making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="container py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Let's build something great</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Interested in working together? I'd love to hear about your project 
            and explore how I can help.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;