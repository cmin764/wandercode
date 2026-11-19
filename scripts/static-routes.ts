// Post-build: emit one HTML file per route with static canonical, title, description and social tags.
// Why: the SPA only sets these in JS, so crawlers' first pass saw no canonical and Google
// picked its own ("Duplicate, Google chose different canonical than user").
// Route meta comes from src/lib/routes.ts, shared with the pages, so nothing is hand-copied.
// A route missing from that table 404s in production (no SPA rewrite), so add new ones there.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { SITE_URL } from "../src/lib/constants";
import { ROUTES, type RouteMeta } from "../src/lib/routes";

const DIST = "dist";
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const shell = readFileSync(join(DIST, "index.html"), "utf8");

// Every pattern must match the shell, or a template edit would silently skip a tag.
function swap(html: string, re: RegExp, to: string): string {
  if (!re.test(html)) throw new Error(`static-routes: pattern ${re} not found in dist/index.html`);
  return html.replace(re, to);
}

function render(path: string, { title, description, noindex }: RouteMeta): string {
  const full = `${title} | Wandercode`;
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const head = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:url" content="${url}" />`,
    noindex ? '<meta name="robots" content="noindex" />' : "",
  ].filter(Boolean).join("\n    ");
  let html = shell;
  html = swap(html, /<title>[^<]*<\/title>/, `<title>${esc(full)}</title>`);
  html = swap(html, /(<meta name="description" content=")[^"]*(")/, `$1${esc(description)}$2`);
  html = swap(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${esc(full)}$2`);
  html = swap(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${esc(description)}$2`);
  html = swap(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(full)}$2`);
  html = swap(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(description)}$2`);
  return swap(html, /<\/head>/, `    ${head}\n  </head>`);
}

// Unknown URLs get a real 404 (Vercel serves 404.html) with noindex and no canonical.
writeFileSync(join(DIST, "404.html"), swap(shell, /<\/head>/, '    <meta name="robots" content="noindex" />\n  </head>'));

const entries = Object.entries(ROUTES) as [string, RouteMeta][];
for (const [path, meta] of entries) {
  const file = join(DIST, path === "/" ? "index.html" : `${path}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, render(path, meta));
}
// Sitemap lists indexable routes only; URLs match each page's canonical exactly (home keeps its trailing slash).
const urls = entries
  .filter(([, m]) => !m.noindex)
  .map(([path]) => `  <url><loc>${SITE_URL}${path}</loc></url>`);
writeFileSync(
  join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);
console.log(`static-routes: wrote ${entries.length + 1} pages`);
