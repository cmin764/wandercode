import { Layout } from "@/components/layout/Layout";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useCanonical } from "@/hooks/useCanonical";
import {
  CONFIGS_REPO_URL,
  CMIN764_REPO_URL,
  DEEP_ICE_REPO_URL,
  WANDERCODE_REPO_URL,
  NOMADS_NEST_REPO_URL,
  AI_PRACTICE_REPO_URL,
  PORTFOLIO_REPO_URL,
  CMIN_REPO_URL,
  TRACED_AI_ORG_URL,
  NOMOREAPPLY_ORG_URL,
  TRACED_AI_URL,
  NOMOREAPPLY_URL,
} from "@/lib/constants";

type RegisterItem = { name: string; description: string; evidence: string };
type ChangelogRow = {
  version: string;
  date: string;
  note: string;
  // Last-reviewed commit per source repo: the baseline the /ip-sync skill diffs from.
  sources: Record<string, string>;
};

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-foreground font-semibold">{children}</strong>
);

// Ordered by importance and severity: the flagship methodology first, then
// the operating system it runs on, then supporting playbooks and templates.
// Closely related items are combined into one card rather than listed
// separately, so the overlap between them doesn't read as three claims.
const licensedMethods: RegisterItem[] = [
  {
    name: "Blugen™: blueprint-first AI development",
    description:
      "Wrapping non-deterministic AI generation in a deterministic blueprint: research, blueprint review, wireframe, implementation, confidence-driven tests, final review. Unregistered mark, used in commerce.",
    evidence: "Public notes, 18 Jan 2026; workshop copy on this site, 12 Mar 2026",
  },
  {
    name: "Agentic development operating system",
    description:
      "How We Work: scope before build, derived priority, throughput-based capacity, breadth before depth, and exec alignment reporting that renders a plan rather than mirroring a tracker. Implemented as a ten-charter role-agent team driving a ticket from scoping through a converged PR, with a living-doc governance pattern (blueprint snapshot, append-only audit trail, provenance ledger, preserved original brief), and a capped, verified multi-agent review loop: findings checked against real code before acting, blind independent reviews, a cross-model second opinion for high-stakes changes, and the rule that agreement from one method is not independent evidence.",
    evidence: "Workshop proposal, 4 Feb 2026; governance-pattern commits, 6 and 9 Apr 2026",
  },
  {
    name: "Model, prompt and harness playbook",
    description:
      "Which model tier for which task (top-tier planning, mid-tier execution, small/fast mechanical work), how a task brief is shaped so a model gets exactly the context it needs, and the curated agentic-harness plugin stack with the operating rules around it: session and context hygiene, disabling one piece at a time, compression that never hides a complex discussion.",
    evidence: "Workshop proposal, 4 Feb 2026; configuration commits, Mar-Jun 2026",
  },
  {
    name: "Workshop and enablement package",
    description:
      "A two-module workshop (foundations, then an applied module run against the team's own backlog) paired with the starter kit it leaves behind: agent-briefing templates, MCP and credentials-management templates, a CLI primer, a stack-aware PR-review skill pattern, and a post-workshop reference guide.",
    evidence: "Workshop proposals, Feb 2026; governance-pattern commits, Mar-Apr 2026",
  },
  {
    name: "AI and Automation Strategy Package",
    description:
      "A technical audit template, stack analysis with trade-off matrix, risk register, framework blueprint, build-vs-buy template, phased roadmap.",
    evidence: "Strategy proposal, 29 Jan 2026",
  },
  {
    name: "Engagement and proposal templates",
    description:
      "A proposal structure (challenge, opportunity, options, timeline, investment) and package-based pricing with explicit dependency order.",
    evidence: "Proposals, Jan-Jun 2026; results-as-a-service model on this site, Mar 2026",
  },
  {
    name: "Source distillation",
    description:
      "Turning raw resources into canonical profiles through a one-way sync, with a cap and a ranking rubric (named brand, hard number, recency, fit, distinctiveness) deciding what stays. Generic method only.",
    evidence: "Commit dated 4 Sep 2026",
  },
  {
    name: "Architecture diagramming method",
    description:
      "C4 levels as the zoom model, fixed arrow semantics, colour roles, a mandatory legend and Mermaid conventions. Earlier MIT-licensed copies stay MIT; later versions are reserved.",
    evidence: "Diagram skill, 15 Apr 2026",
  },
];

const changelog: ChangelogRow[] = [
  {
    version: "v1.1",
    date: "1 Oct 2026",
    note: "Adds review, How We Work, dev-workflow and harness items, source distillation and diagramming; hash-and-timestamp evidence replaces the repo link.",
    sources: {
      "ai-tools": "233c71f",
      configs: "0770754",
      cmin764: "ad0b73a",
      wandercode: "1026192",
      portfolio: "963ab08",
      "NoMoreApply/services": "2c30293",
    },
  },
];

const BackgroundIp = () => {
  useDocumentTitle("Who Owns What");
  useCanonical();

  return (
    <Layout>
      {/* Header */}
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Background IP</p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">Who owns what</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Wandercode keeps what Wandercode came with. You keep what is yours.
          </p>
          <p className="text-sm text-muted-foreground">
            Register <B>{changelog[0].version}</B>, published {changelog[0].date}. Evidence: commit hashes in a{" "}
            <a href="/ip/v1.1-manifest.txt" className="underline hover:text-foreground">
              manifest
            </a>
            , timestamped with{" "}
            <a href="/ip/v1.1-manifest.txt.ots" className="underline hover:text-foreground">
              OpenTimestamps
            </a>
            .
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">What you get</h2>
            <p className="text-muted-foreground leading-relaxed">
              Everything built specifically for your engagement is assigned to you: the code, the
              documentation, the conventions. Where something of Wandercode's is embedded in that
              work, either from this list or independently developed on the same terms, you get a
              perpetual, irrevocable, worldwide, royalty-free, non-exclusive licence to it, as part
              of your deliverables. That licence is sublicensable and transferable to your
              successors and acquirers.
            </p>
          </div>
        </div>
      </section>

      {/* A. Licensed methods */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl space-y-2 mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold">Methods licensed, never assigned</h2>
            <p className="text-muted-foreground">
              Pre-existing methodology, licensed to every engagement rather than transferred away,
              ordered by how central each one is.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {licensedMethods.map((item) => (
              <div key={item.name} className="bg-card border border-border rounded-lg p-6 space-y-2">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                <p className="text-xs text-muted-foreground/70">First dated: {item.evidence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B-F */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Personal tooling</h3>
              <p className="text-sm">
                Working tools that stay Cosmin's, not delivered to clients:{" "}
                <a href={CONFIGS_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  configs
                </a>
                ,{" "}
                <a href={CMIN764_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  cmin764
                </a>
                , and a private tooling repo: a code-review skill, a diagramming skill, config-sync,
                disk-janitor, frontend-review, job-fit-assessor, travel-planner, a source-sync command, hook guards, CI
                check suites, and Markdown-to-PDF document pipelines (Pandoc and Typst). If any of it is
                ever delivered to a client, it's licensed on the same terms as the methods above.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Open source</h3>
              <p className="text-sm">
                Owned outright, released under their own licence:{" "}
                <a href={DEEP_ICE_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">deep-ice</a>,{" "}
                <a href={WANDERCODE_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">wandercode</a>,{" "}
                <a href={NOMADS_NEST_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">nomads-nest</a>,{" "}
                <a href={AI_PRACTICE_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">ai-practice</a>,{" "}
                <a href={PORTFOLIO_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">portfolio</a>, and{" "}
                <a href={CMIN_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">cmiN</a>{" "}
                (all MIT), alongside the{" "}
                <a href={TRACED_AI_ORG_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Traced AI</a>{" "}
                and{" "}
                <a href={NOMOREAPPLY_ORG_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">NoMoreApply</a>{" "}
                organizations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Separate products</h3>
              <p className="text-sm">
                Outside any engagement, never reachable by a client contract:{" "}
                <a href={TRACED_AI_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Traced AI</a>{" "}
                and{" "}
                <a href={NOMOREAPPLY_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">NoMoreApply</a>{" "}
                as products, including their brands, templates and product-specific designs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Used, never claimed</h3>
              <p className="text-sm">
                Third-party methods and tools this work draws on without claiming ownership of:
                spec-driven development, Spec Kit, EARS, Given-When-Then, C4, arc42, SPIDR, MoSCoW,
                KERNEL, and the open-source tools in the agentic harness.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">General know-how</h3>
              <p className="text-sm">
                Practices carried by the person, not exclusive and not assignable: research, then
                plan, then execute. Blueprint-first. Small batches, one concern per change. Breadth
                before depth. Humans own merges and public text.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">Changelog</h2>
            <div className="border border-border rounded-lg overflow-hidden divide-y divide-border">
              {changelog.map((row) => (
                <div key={row.version} className="px-6 py-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold">{row.version}</span>
                    <span className="text-sm text-muted-foreground">{row.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{row.note}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Sources: {Object.entries(row.sources).map(([r, h]) => `${r} ${h}`).join(", ")}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Each contract cites the register version current at signing.
            </p>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-10">
          <p className="text-xs text-muted-foreground text-center">
            Blugen™ and all Wandercode methodology, training content and templates &copy; 2026
            Wandercode Limited. All rights reserved.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default BackgroundIp;
