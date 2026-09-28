import { Layout } from "@/components/layout/Layout";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useCanonical } from "@/hooks/useCanonical";
import {
  AI_TOOLS_REPO_URL,
  CONFIGS_REPO_URL,
  CMIN764_REPO_URL,
  DEEP_ICE_REPO_URL,
  PULSR_REPO_URL,
  WANDERCODE_REPO_URL,
  LIBMORSE_REPO_URL,
  MORSEUS_REPO_URL,
  TRACED_AI_URL,
  NOMOREAPPLY_URL,
  IP_REGISTER_TAG_URL,
} from "@/lib/constants";

type RegisterItem = { name: string; description: string; evidence: string };
type ChangelogRow = { version: string; date: string; note: string; tag: string };

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-foreground font-semibold">{children}</strong>
);

const licensedMethods: RegisterItem[] = [
  {
    name: "Blugen: blueprint-first AI development",
    description:
      "Wrapping non-deterministic AI generation in a deterministic blueprint: research, blueprint review, wireframe, implementation, confidence-driven tests, final review.",
    evidence: "Workshop proposal, 4 Feb 2026",
  },
  {
    name: "Agentic Development Workshop",
    description:
      "A two-module workshop: foundations (mindset, tooling, model comparison, context engineering, MCP, Blugen) and an applied module run against the team's own backlog.",
    evidence: "Workshop proposals, Feb 2026",
  },
  {
    name: "AI adoption starter kit",
    description:
      "Agent-briefing file templates, MCP and credentials-management templates, a CLI primer, a stack-aware PR-review skill pattern, and a post-workshop reference guide.",
    evidence: "Workshop proposal, 4 Feb 2026; governance-pattern commits from Mar and Apr 2026",
  },
  {
    name: "Multi-agent review and convergence workflow",
    description:
      "Verified findings only (never applied on say-so), a capped review battery, blind independent reviews, a cross-model second opinion for high-stakes changes, and the rule that agreement from one method is not independent evidence.",
    evidence: "Workshop proposal, 4 Feb 2026; frozen register tag",
  },
  {
    name: "Model comparison and selection guidance",
    description: "Which model tier for which task: top-tier planning, mid-tier execution, small/fast mechanical work.",
    evidence: "Workshop proposal, 4 Feb 2026",
  },
  {
    name: "Prompt and context engineering approach",
    description: "How a task brief is shaped so a model gets exactly the context it needs: compaction, delegation, mid-task correction.",
    evidence: "Workshop proposal, 4 Feb 2026",
  },
  {
    name: "AI and Automation Strategy Package",
    description:
      "A technical audit template, stack analysis with trade-off matrix, risk register, framework blueprint, build-vs-buy template, phased roadmap.",
    evidence: "Strategy proposal, 29 Jan 2026",
  },
  {
    name: "How We Work",
    description:
      "Shaping and shipping software with an AI-assisted build process: scope before build, derived priority, throughput-based capacity, breadth before depth, and exec alignment reporting that renders a plan rather than mirroring a tracker.",
    evidence: "Frozen register tag",
  },
  {
    name: "Engagement and proposal templates",
    description: "A proposal structure (challenge, opportunity, options, timeline, investment) and package-based pricing with explicit dependency order.",
    evidence: "Proposals, Jan-Jun 2026",
  },
  {
    name: "dev-workflow: role-agent team package",
    description:
      "A ten-charter role-agent team across three team shapes, driving a ticket from scoping through a converged PR with a human gate at every irreversible step.",
    evidence: "Frozen register tag",
  },
  {
    name: "Agentic harness recipe",
    description:
      "A curated Claude Code plugin stack and the operating rules around it: session and context hygiene, disabling one piece at a time, compression that never hides a complex discussion.",
    evidence: "Configuration commits, Mar-Apr 2026; frozen register tag",
  },
];

const changelog: ChangelogRow[] = [
  {
    version: "v1.0",
    date: "28 Sep 2026",
    note: "First publication of the register.",
    tag: "bip-v1.0",
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
            Register <B>{changelog[0].version}</B>, published {changelog[0].date}. Evidence frozen at{" "}
            <a
              href={IP_REGISTER_TAG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              {changelog[0].tag}
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
              Pre-existing methodology, licensed to every engagement rather than transferred away.
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
                , and{" "}
                <a href={AI_TOOLS_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  ai-tools
                </a>
                : a code-review skill, a diagramming skill, config-sync, disk hygiene, job-fit
                assessment, travel planning, and Markdown-to-PDF document pipelines. If any of it is
                ever delivered to a client, it's licensed on the same terms as the methods above.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Open source</h3>
              <p className="text-sm">
                Owned outright, released under their own licence:{" "}
                <a href={DEEP_ICE_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">deep-ice</a>,{" "}
                <a href={PULSR_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">pulsr</a>,{" "}
                <a href={WANDERCODE_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">wandercode</a>,{" "}
                <a href={LIBMORSE_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">libmorse</a>, and{" "}
                <a href={MORSEUS_REPO_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">morseus</a>{" "}
                (all MIT).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Separate products</h3>
              <p className="text-sm">
                Outside any engagement, never reachable by a client contract:{" "}
                <a href={TRACED_AI_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Traced AI</a>{" "}
                and{" "}
                <a href={NOMOREAPPLY_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">NoMoreApply</a>.
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
                  <p className="text-xs text-muted-foreground/70 mt-1">Tag: {row.tag}</p>
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
            Blugen and all Wandercode methodology, training content and templates &copy; 2026
            Wandercode Limited. All rights reserved.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default BackgroundIp;
