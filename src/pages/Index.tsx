import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Clock, Code, Globe, Lightbulb, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCalPopup } from "@/hooks/useCalPopup";
import { usePageMeta } from "@/hooks/useDocumentTitle";
import { cn } from "@/lib/utils";
import { A5_LABS_URL, BONSAI_LABS_URL, CHANGE_AGENTS_URL, CONTACT_EMAIL, NOMADS_URL, VONQ_URL, YFS_URL } from "@/lib/constants";

const services = [
  {
    icon: Lightbulb,
    title: "Consultancy & Strategy",
    description:
      "Find which AI problems are worth solving. Readiness assessment, stack recommendations, prioritized action plan.",
    href: "/services#consulting",
  },
  {
    icon: Code,
    title: "AI Product Development",
    description:
      "Strategy to deployment. Full ownership of AI features, lean product cycles, and production-ready delivery.",
    href: "/services#development",
  },
  {
    icon: Users,
    title: "Workshops & Training",
    description:
      "Ship faster with AI. Claude Code and Cursor harness setup, MCP integration, and context engineering workshops.",
    href: "/services#workshops",
  },
];

interface ClientLogo {
  src: string;
  width: number;
  height: number;
  className: string;
}

interface Client {
  name: string;
  url: string;
  label: string;
  logo: ClientLogo;
  darkLogo?: ClientLogo;
}

const GRAY = "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 transition-all";
const PLAIN = "group-hover:opacity-80 transition-opacity";

// Alphabetical by name.
const clients: Client[] = [
  { name: "A5 Labs", url: A5_LABS_URL, label: "Past client", logo: { src: "/logos/a5labs.svg", width: 31, height: 37, className: GRAY } },
  { name: "Bonsai Labs", url: BONSAI_LABS_URL, label: "Past client", logo: { src: "/logos/bonsai-labs.svg", width: 2000, height: 800, className: `${GRAY} dark:invert` } },
  {
    name: "Change Agents",
    url: CHANGE_AGENTS_URL,
    label: "Current client",
    logo: { src: "/logos/change-agents.png", width: 193, height: 80, className: `${PLAIN} dark:hidden` },
    darkLogo: { src: "/logos/change-agents-dark.png", width: 193, height: 80, className: `hidden ${PLAIN} dark:block` },
  },
  { name: "VONQ", url: VONQ_URL, label: "Past client", logo: { src: "/logos/vonq.png", width: 300, height: 115, className: GRAY } },
  { name: "Young Founders School", url: YFS_URL, label: "Active mentor", logo: { src: "/logos/young-founders-school.png", width: 171, height: 59, className: PLAIN } },
];

const Index = () => {
  usePageMeta("/");
  const openCalPopup = useCalPopup();
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-widest text-muted-foreground animate-fade-in">
            Fractional AI Product Strategist
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            I help outlier companies{" "}
            <span className="text-muted-foreground">build intelligent products</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Fully remote, one-person practice. From strategy to deployment, I work directly
            with your team to deliver real business results: outcomes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" onClick={openCalPopup}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
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
                Python since 2007, 14+ years shipping professionally, startups since 2014. Led
                engineering teams at Sema4.ai, Robocorp, Gorgias and Comfy. Two companies I worked
                at got acquired: Fashwell by Apple, Comfy by Siemens.
                Published open-source libraries used by thousands.
              </p>
              <p>
                Digital nomad, remote-first operator. Managing Wandercode from{" "}
                <a
                  href={NOMADS_URL}
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
              <Link to="#worked-with" className="hover:underline decoration-muted-foreground/30 underline-offset-4 transition-colors">
                Worked With
              </Link>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {clients.map((client) => (
                <a
                  key={client.name}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-y-2 flex flex-col items-center group"
                >
                  {client.darkLogo ? (
                    <div>
                      <img
                        src={client.logo.src}
                        alt={client.name}
                        width={client.logo.width}
                        height={client.logo.height}
                        className={cn("h-10 w-auto", client.logo.className)}
                      />
                      <img
                        src={client.darkLogo.src}
                        alt={client.name}
                        width={client.darkLogo.width}
                        height={client.darkLogo.height}
                        className={cn("h-10 w-auto", client.darkLogo.className)}
                      />
                    </div>
                  ) : (
                    <img
                      src={client.logo.src}
                      alt={client.name}
                      width={client.logo.width}
                      height={client.logo.height}
                      className={cn("h-10 w-auto", client.logo.className)}
                    />
                  )}
                  <p className="text-xs italic text-muted-foreground">{client.label}</p>
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              If you represent one of these organisations and would prefer your logo not
              to appear here, please{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-foreground transition-colors">
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
                Technologies: AI Agents · Claude Code · Automation · Python · FastAPI · React · PostgreSQL · Redis · Docker
              </p>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Industries: Fintech · HRtech · iGaming · eCommerce · IoT · Biotech · Healthtech · Cybersecurity
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
              <Clock className="h-8 w-8 mx-auto text-muted-foreground" />
              <h3 className="font-semibold">Flexible</h3>
              <p className="text-sm text-muted-foreground">
                Scale up or down based on your needs
              </p>
            </div>
            <div className="text-center space-y-2">
              <BadgeCheck className="h-8 w-8 mx-auto text-muted-foreground" />
              <h3 className="font-semibold">Senior</h3>
              <p className="text-sm text-muted-foreground">
                No onboarding period, impact from day one
              </p>
            </div>
            <div className="text-center space-y-2">
              <Globe className="h-8 w-8 mx-auto text-muted-foreground" />
              <h3 className="font-semibold">Remote</h3>
              <p className="text-sm text-muted-foreground">
                Async-first, timezone-flexible communication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-cta text-cta-foreground">
        <div className="container py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let's start a conversation</h2>
          <p className="text-cta-foreground/80 mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call. Bring the problem. If I'm not the right
            fit, I'll say so.
          </p>
          <Button size="lg" variant="secondary" className="bg-cta-foreground text-cta hover:bg-cta-foreground/90" onClick={openCalPopup}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
