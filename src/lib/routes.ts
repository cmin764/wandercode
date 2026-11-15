// Single source for per-route SEO meta. Pages read it via usePageMeta, and
// scripts/static-routes.ts bakes it into dist/*.html so crawlers see it without JS.
export interface RouteMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

export const ROUTES = {
  "/": { title: "Fractional AI Product Strategist", description: "Fractional AI Product Strategist for B2B startups. Results as a Service." },
  "/services": { title: "Services", description: "AI consulting, development and workshops for B2B startups, delivered by one practitioner." },
  "/services/consulting": { title: "AI Consulting", description: "AI product strategy consulting for B2B teams: find where AI pays off and plan how to ship it." },
  "/services/development": { title: "AI Development", description: "Hands-on AI product development for B2B startups, from prototype to production." },
  "/services/workshops": { title: "AI Workshops", description: "Hands-on workshops on building an agent harness with Claude Code and Cursor, taught from running one in production." },
  "/about": { title: "About", description: "About Cosmin Poieana, a fractional AI product strategist working with B2B startups." },
  "/contact": { title: "Contact", description: "Book a free 30-minute discovery call, or reach Wandercode by email." },
  "/privacy": { title: "Privacy Policy", description: "What data this site collects, which third parties are involved, and how it is handled." },
  "/ip": { title: "Who Owns What", description: "Register of the background IP behind Wandercode work and who owns each part." },
  "/10for10": { title: "10for10 Recruiter Program", description: "The 10for10 program: how recruiters can introduce Wandercode to clients.", noindex: true },
} satisfies Record<string, RouteMeta>;

export type RoutePath = keyof typeof ROUTES;
