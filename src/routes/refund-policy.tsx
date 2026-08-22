import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Simpexmedia Kids" },
      {
        name: "description",
        content: "Refund and Cancellation Policy for Simpexmedia Kids Worksheet Bundle.",
      },
    ],
  }),
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Header */}
      <header className="border-b border-border/40 bg-card py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent transition hover:opacity-80"
          >
            <span>←</span> Back to Main Offer
          </Link>
          <span className="text-xs font-semibold text-muted-foreground">
            Simpexmedia Kids Legal
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-extrabold text-accent sm:text-4xl">Refund &amp; Cancellation Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section className="rounded-xl border border-border/40 bg-card p-6">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">1. Nature of Digital Goods</h2>
            <p className="mt-2">
              The <strong>14,000+ Printable Kids Worksheets Bundle</strong> is a downloadable digital product delivered immediately upon payment completion via email and instant download links.
            </p>
          </section>

          <section className="rounded-xl border border-border/40 bg-card p-6">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">2. 100% Satisfaction &amp; Delivery Guarantee</h2>
            <p className="mt-2">
              We stand behind the quality of our learning materials. If you experience any technical difficulties accessing or opening the files:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-foreground/90">
              <li>Our support team will immediately re-send direct download mirrors or alternate format files within 24 hours.</li>
              <li>In the event of duplicate accidental charges or billing anomalies, a 100% refund is initiated immediately to your original payment method.</li>
              <li>Please reach out to our dedicated 24×7 customer support team at <a href="mailto:support@simpexmedia.com" className="font-bold text-accent underline">support@simpexmedia.com</a> with your Order ID.</li>
            </ul>
          </section>

          <section className="rounded-xl border border-border/40 bg-card p-6">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">3. Refund Processing Timeline</h2>
            <p className="mt-2">
              Once an eligible refund is approved, it will be processed and credited back to your original payment method (UPI, Bank Account, or Credit/Debit Card) within 5 to 7 business days as per standard banking processing guidelines.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="btn-cta inline-flex rounded-xl px-8 py-3 text-sm font-extrabold uppercase transition hover:scale-105"
          >
            Return to Offer Page
          </Link>
        </div>
      </main>

      <footer className="border-t border-border/40 bg-card py-6 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Simpexmedia Kids. All rights reserved.</p>
      </footer>
    </div>
  );
}
