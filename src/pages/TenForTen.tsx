import type { LucideIcon } from "lucide-react";
import { ChevronDown, Clock, FileCheck, Percent, Receipt } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useNoIndex } from "@/hooks/useNoIndex";
import { CONTACT_EMAIL, HK_COMPANY_NAME, CY_COMPANY_NAME } from "@/lib/constants";

type Mechanic = { icon: LucideIcon; title: string; description: React.ReactNode };
type Faq = { question: string; answer: React.ReactNode };

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-foreground font-semibold">{children}</strong>
);

const mechanics: Mechanic[] = [
  {
    icon: Percent,
    title: "The fee",
    description: (
      <>
        <B>10%</B> of the agreed monthly retainer (or equivalent if day/hourly rate is used),
        excluding bonuses and reimbursed expenses, per month, for up to <B>10 months</B> from the
        client contract start date.
      </>
    ),
  },
  {
    icon: FileCheck,
    title: "Opt-in / opt-out",
    description: (
      <>
        Sign the formal agreement at any point during the <B>10-month</B> window. Opt out any time.
        No retroactive payments: the period always closes at <B>month 10</B> from the original start
        date.
      </>
    ),
  },
  {
    icon: Receipt,
    title: "Invoicing",
    description: (
      <>
        B2B gross invoice from your entity to mine, sent after I receive payment from the client.
        No VAT, any other taxes on your side. No invoice is accepted without a signed agreement
        already in place.
      </>
    ),
  },
  {
    icon: Clock,
    title: "Payment timing",
    description: (
      <>
        <B>NET 15</B> from when I receive client payment. Client invoices are <B>NET 30</B>, so the
        first payment reaches you roughly <B>75 days</B> after the contract start date.
      </>
    ),
  },
];

const faqs: Faq[] = [
  {
    question: "What if I opt in on month 6: do I get paid for months 1–5?",
    answer:
      "No. No retroactive payments. You receive the fee for each month from your opt-in date through month 10 of the original period only.",
  },
  {
    question: "Does opting in late extend the period past month 10?",
    answer: (
      <>
        No. The <B>10-month</B> window always closes at <B>month 10</B> counted from the original
        contract start date. Late opt-in means fewer payments, not a longer tail.
      </>
    ),
  },
  {
    question: "What if the contract is extended, renewed, or restructured during the 10-month window?",
    answer: (
      <>
        As long as I continue working with the same client you introduced, the <B>10%</B> applies
        to whatever I invoice during the 10-month period. Renewals, extensions, scope changes,
        additional SOWs: all count. After <B>month 10</B> from the original start date, the program
        ends, regardless of whether the engagement continues.
      </>
    ),
  },
  {
    question: "What if the engagement ends before 10 months?",
    answer:
      "Payments stop when the client contract ends, for any reason. The fee applies to any fraction of the engagement: trial, onboarding, full delivery. No penalty on either side, no catch-up for remaining months. You keep whatever was paid up to that point.",
  },
  {
    question: "What if Cosmin's rate changes mid-engagement?",
    answer: (
      <>
        The fee recalculates on the new rate from the first invoice reflecting that change. The{" "}
        <B>10%</B> tracks the contract in both directions: up and down.
      </>
    ),
  },
  {
    question: "What if the engagement is paused or suspended?",
    answer: (
      <>
        The <B>10-month</B> clock does not pause: it ticks from the original contract start date
        regardless. If we lose months mid-window, that's risk we share. The window is a hard limit.
      </>
    ),
  },
  {
    question: "What if the client pays late or withholds payment?",
    answer: (
      <>
        Your <B>NET 15</B> window starts from when the funds are actually received. If the client
        doesn't pay, no payment flows downstream, no exceptions. If I'm late on my side after
        receiving funds (operational error, bank delay), I'll make it right on goodwill. No
        interest charged in either direction.
      </>
    ),
  },
  {
    question: "What if the client tries to bypass you and hire me directly?",
    answer: (
      <>
        The <B>10%</B> is still owed during the active 10-month window. If a client makes any such
        attempt, I'll tell you. The agreement protects your attribution, not just the introduction.
      </>
    ),
  },
  {
    question: "How exactly does opt-in / opt-out work?",
    answer: (
      <>
        One round-trip per engagement. The moment you opt in, the fee accrues from that date
        forward (prorated for that month). The moment you opt out, it stops (also prorated). You
        can't opt back in to a window you've already exited.
      </>
    ),
  },
  {
    question: "How do I verify the 10% is calculated correctly?",
    answer: (
      <>
        Ask, and I'll share the relevant client invoices (redacted where needed) that the fee was
        based on. The <B>10%</B> is mechanical: it tracks one number on each invoice.
      </>
    ),
  },
  {
    question: "Can two recruiters claim the same engagement?",
    answer: (
      <>
        No. First signed agreement wins. Placement also requires no prior commercial relationship
        between me and the client in the last <B>36 months</B>: if I've recently worked with the
        client, attribution doesn't apply.
      </>
    ),
  },
  {
    question: "Which entity do I invoice, and which law applies?",
    answer: (
      <>
        You invoice the entity that signed the contract with the client: <B>{HK_COMPANY_NAME}</B>{" "}
        for global engagements, <B>{CY_COMPANY_NAME}</B> for EU/Cyprus-based ones. The same
        entity's jurisdiction governs our agreement (Hong Kong or Cyprus law accordingly).
        Confirmed in the written agreement.
      </>
    ),
  },
  {
    question: "What if the client changes and a new engagement starts?",
    answer: (
      <>
        Each successful placement is a separate program run. If a current engagement ends and you
        introduce a new one with a different client, the <B>10-month</B> fee period resets and
        applies in full to the new contract. The same applies if you place me again after a gap.
        Every time you lead to a hire, the bonus applies from that contract's start date.
      </>
    ),
  },
  {
    question: "Is there a formal agreement, and is it mandatory?",
    answer:
      "Yes, and it is mandatory. No payment happens and no invoice is accepted without a written agreement sent by Cosmin and signed by both parties. Reaching out by email starts that process.",
  },
];

const TenForTen = () => {
  useDocumentTitle("10for10 Recruiter Program");
  useNoIndex();

  return (
    <Layout>
      {/* Hero */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Recruiter Program
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            10for10
          </h1>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              If you fought to place me in a good role and you have a genuine stake in this engagement
              lasting, this is for you. Most recruiter fees are a one-time transaction that ends the
              moment the contract is signed. <strong className="text-foreground">10for10</strong> is
              the opposite: your reward is tied to the same timeline as the engagement itself.
            </p>
            <p>
              The structure is simple: <strong className="text-foreground">10%</strong> of my agreed
              gross monthly rate, paid monthly, for up to{" "}
              <strong className="text-foreground">10 months</strong> from the contract start date. Ten
              times 10% equals one full month's pay: your introduction fee, spread across the period
              where it actually matters.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {mechanics.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-card border border-border rounded-lg p-6 space-y-3">
                <Icon className="h-6 w-6 text-muted-foreground" />
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanics Detail */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold">The fine print</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-semibold text-foreground">Agreement first</h3>
                <p className="text-sm">
                  No payments happen and no invoices are accepted without a written agreement signed
                  by both parties. The clock starts at the client contract start date, not at
                  signature. I'll have the agreement ready before that date so you don't lose any
                  of the period you're entitled to.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Program eligibility</h3>
                <p className="text-sm">
                  10for10 applies to engagements whose client contract start date is{" "}
                  <strong className="text-foreground">4 May 2026</strong> or later, regardless of
                  when negotiations began or when the agreement was signed. Contracts starting
                  before that date are not eligible.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Rate changes</h3>
                <p className="text-sm">
                  If my agreed rate with the client changes during the engagement (up or down), the{" "}
                  <strong className="text-foreground">10%</strong> recalculates from the first invoice
                  that reflects the new rate. The fee tracks the contract.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">How the math works</h3>
                <p className="text-sm">
                  The <strong className="text-foreground">10%</strong> applies to each monthly
                  invoice during the 10-month window. The first and last calendar months may be
                  partial depending on when the contract starts: the clock ticks from the exact
                  start date, not from the first of a month. Across the full window, your fees
                  sum to exactly one full monthly rate.
                </p>
                <p className="text-sm mt-2">
                  Example: contract starts <strong className="text-foreground">10 January</strong>,
                  window ends <strong className="text-foreground">10 November</strong>. You collect{" "}
                  <strong className="text-foreground">10%</strong> on the partial first invoice
                  (Jan 10–31), 9 full monthly invoices (Feb–Oct), and the partial last invoice (Nov
                  1–10). 20 + 9 × 30 + 10 days = 300 days = 10 × 30 days of fee.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">What "invoiced amount" means</h3>
                <p className="text-sm">
                  The <strong className="text-foreground">10%</strong> applies to the raw invoiced
                  amount on the invoice I send the client, minus bonuses, reimbursed expenses, and
                  anything outside the agreed monthly retainer. Same currency as the client
                  contract.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">VAT and taxes</h3>
                <p className="text-sm">
                  The <strong className="text-foreground">10%</strong> is VAT-nil: either B2B
                  reverse-charge applies (EU recruiter invoicing the Cyprus entity), or VAT is out
                  of scope (recruiter or paying entity outside the EU). You bear any local
                  withholding or other taxes applicable on your side. No gross-up from mine.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Payment method</h3>
                <p className="text-sm">
                  I pay via SEPA or domestic transfer, fee-free, directly to your local bank
                  account in your local currency. Supported by default:{" "}
                  <strong className="text-foreground">RON</strong>,{" "}
                  <strong className="text-foreground">EUR</strong>,{" "}
                  <strong className="text-foreground">USD</strong>,{" "}
                  <strong className="text-foreground">GBP</strong>. Other currencies can be agreed
                  before signing. If the client contract is in a different currency, you apply the{" "}
                  <a
                    href="https://wise.com/us/currency-converter/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground transition-colors"
                  >
                    Wise mid-market rate
                  </a>{" "}
                  on the day of invoicing to convert the amount on your invoice.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Engagement in effect</h3>
                <p className="text-sm">
                  The agreement is active only while my contract with the client is active. If the
                  engagement ends for any reason before{" "}
                  <strong className="text-foreground">month 10</strong>, payments stop at the last
                  fully or partially worked month. Pauses and suspensions do not stop the{" "}
                  <strong className="text-foreground">10-month</strong> clock: that risk is shared,
                  and the window always ticks from the original contract start date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Q&amp;A</h2>
            <div className="border border-border rounded-lg overflow-hidden divide-y divide-border">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-medium hover:bg-accent/50 transition-colors [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta text-cta-foreground">
        <div className="container py-16 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to refer?</h2>
          <p className="text-cta-foreground/70 mb-8 max-w-xl mx-auto">
            Send an email and I'll get the agreement to you.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href={`mailto:${CONTACT_EMAIL}?subject=10for10 opt-in`}>Get in touch</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default TenForTen;
