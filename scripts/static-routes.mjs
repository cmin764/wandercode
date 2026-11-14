// Post-build: emit one HTML file per route with a static canonical, title and description.
// Why: the SPA only sets these in JS, so crawlers' first pass saw no canonical and Google
// picked its own ("Duplicate, Google chose different canonical than user").
// Keep titles and descriptions in sync with each page's useDocumentTitle call.
// shortcut: hand-kept route table, fine for ~11 routes, move to a shared module if routes grow.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const SITE_URL = "https://www.wandercode.ltd";
const DIST = "dist";

const routes = [
  { path: "/services", title: "Services", description: "AI consulting, development and workshops for B2B startups, delivered by one practitioner." },
  { path: "/services/consulting", title: "AI Consulting", description: "AI product strategy consulting for B2B teams: find where AI pays off and plan how to ship it." },
  { path: "/services/development", title: "AI Development", description: "Hands-on AI product development for B2B startups, from prototype to production." },
  { path: "/services/workshops", title: "AI Workshops", description: "Hands-on workshops on building an agent harness with Claude Code and Cursor, taught from running one in production." },
  { path: "/about", title: "About", description: "About Cosmin Poieana, a fractional AI product strategist working with B2B startups." },
  { path: "/contact", title: "Contact", description: "Book a free 30-minute discovery call, or reach Wandercode by email." },
  { path: "/privacy", title: "Privacy Policy", description: "What data this site collects, which third parties are involved, and how it is handled." },
  { path: "/ip", title: "Who Owns What", description: "Register of the background IP behind Wandercode work and who owns each part." },
  { path: "/10for10", title: "10for10 Recruiter Program", description: "The 10for10 program: how recruiters can introduce Wandercode to clients.", noindex: true },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const shell = readFileSync(join(DIST, "index.html"), "utf8");

function render({ path, title, description, noindex }) {
  const head = [
    `<link rel="canonical" href="${SITE_URL}${path}" />`,
    noindex ? '<meta name="robots" content="noindex" />' : "",
  ].filter(Boolean).join("\n    ");
  let html = shell
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)} | Wandercode</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace("</head>", `    ${head}\n  </head>`);
  if (!html.includes('rel="canonical"')) throw new Error(`canonical not injected for ${path}`);
  return html;
}

// Home keeps the shell title and description, only gains its canonical.
writeFileSync(join(DIST, "index.html"), shell.replace("</head>", `    <link rel="canonical" href="${SITE_URL}/" />\n  </head>`));
for (const r of routes) {
  const file = join(DIST, `${r.path}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, render(r));
}
console.log(`static-routes: wrote ${routes.length + 1} pages`);
