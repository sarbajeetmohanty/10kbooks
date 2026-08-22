import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Simpexmedia Kids" },
      {
        name: "description",
        content: "Terms and Conditions for purchasing and using Simpexmedia Kids Worksheets.",
      },
    ],
  }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
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
        <h1 className="text-3xl font-extrabold text-accent sm:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section className="rounded-xl border border-border/40 bg-card p-6">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing our website or purchasing the 14,000+ Printable Kids Worksheets Bundle from Simpexmedia Kids, you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="rounded-xl border border-border/40 bg-card p-6">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">2. License &amp; Usage Rights</h2>
            <p className="mt-2">
              Upon purchasing the bundle for ₹199:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-foreground/90">
              <li><strong>Personal &amp; Classroom Use:</strong> You receive a lifetime, non-exclusive license to print and use the worksheets for your children, homeschool, or classroom.</li>
              <li><strong>No Reselling / Redistribution:</strong> You may NOT resell, distribute, share, or upload the raw digital files publicly on file-sharing or commercial platforms.</li>
            </ul>
          </section>

          <section className="rounded-xl border border-border/40 bg-card p-6">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">3. Pricing &amp; Instant Access</h2>
            <p className="mt-2">
              All prices are listed in Indian Rupees (INR). Payments are processed securely. Digital download links are dispatched immediately to your email address upon successful transaction confirmation.
            </p>
          </section>

          <section className="rounded-xl border border-border/40 bg-card p-6">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">4. Disclaimer</h2>
            <p className="mt-2">
              This site is not affiliated with Facebook, Instagram, or Meta Inc. All educational materials are designed for supplementary early learning and cognitive development.
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
