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
      "Strategy to deployment. Full ownership of AI features, lean product cycles, and production-ready delivery.",
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
            Fractional AI Product Strategist
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            I help B2B companies{" "}
            <span className="text-muted-foreground">build intelligent products</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Fully remote AI expertise. From strategy to deployment, I integrate seamlessly
            with your team to deliver real business results: outcomes, not hours.
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
                18+ years with Python, 13+ professionally. Former tech lead at Sema4.ai, Robocorp,
                Gorgias, and Comfy. Helped two companies through acquisition by Apple and Siemens.
                Published open-source libraries used by thousands.
              </p>
              <p>
                Digital nomad, remote-first operator. Managing WANDERCODE LIMITED from{" "}
                <a
                  href="https://github.com/cmin764/cmin764/blob/main/travel.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  anywhere
                </a>.
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
      <section id="worked-with" className="border-y border-border bg-secondary/30 scroll-mt-24">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              <a href="#worked-with" className="hover:underline decoration-muted-foreground/30 underline-offset-4 transition-colors">
                Worked With
              </a>
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <a
                href="https://a5labs.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-2 flex flex-col items-center group"
              >
                <img
                  src="https://a5labs.co/wp-content/uploads/2020/04/a5-logo-tab-mobile.svg"
                  alt="A5 Labs"
                  className="h-10 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 transition-all"
                />
                <p className="text-xs italic text-muted-foreground/60">Past client</p>
              </a>
              <a
                href="https://www.vonq.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-2 flex flex-col items-center group"
              >
                <img
                  src="https://www.vonq.com/wp-content/uploads/2021/06/VONQ_logo_UI_medium-300x115.png"
                  alt="VONQ"
                  className="h-10 w-auto group-hover:opacity-80 transition-opacity"
                />
                <p className="text-xs italic text-muted-foreground/60">Current client</p>
              </a>
              <a
                href="https://www.youngfoundersschool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-2 flex flex-col items-center group"
              >
                <img
                  src="https://static.wixstatic.com/media/080fd6_126a69c632fe4334b7b891f268a72907~mv2.png/v1/fill/w_171,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image%202%20(4).png"
                  alt="Young Founders School"
                  className="h-10 w-auto group-hover:opacity-80 transition-opacity"
                />
                <p className="text-xs italic text-muted-foreground/60">Active mentor</p>
              </a>
            </div>
            <p className="text-xs text-muted-foreground/50 text-center mt-4">
              If you represent one of these organisations and would prefer your logo not
              to appear here, please{" "}
              <a href="mailto:cmin764@gmail.com" className="underline hover:text-foreground transition-colors">
                let me know
              </a>{" "}
              and I will remove it promptly. See the{" "}
              <Link to="/privacy#trademark-notice" className="underline hover:text-foreground transition-colors">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Technologies: Python · FastAPI · LLMs · Automation · AI Agents · Claude Code · React · PostgreSQL · Redis · Docker
              </p>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Industries: Cybersecurity · Fintech · eCommerce · IoT · Biotech · HRtech · iGaming
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
                No onboarding period, impact from day one
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
      <section className="border-t border-border bg-slate-900 text-white">
        <div className="container py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let's start a conversation</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call. No pressure, just a friendly chat about
            what's possible for your team.
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
