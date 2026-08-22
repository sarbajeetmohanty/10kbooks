import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Simpexmedia Kids" },
      {
        name: "description",
        content: "Contact Simpexmedia Kids support team for help with your worksheet bundle purchase.",
      },
    ],
  }),
  component: ContactUs,
});

function ContactUs() {
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
            Simpexmedia Kids Support
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-extrabold text-accent sm:text-4xl">Contact Support</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We’re here to help! Our support desk operates 24×7, 365 days a year.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Card 1: Email Support */}
          <div className="rounded-2xl border-2 border-accent/40 bg-card p-6 shadow-lg">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-2xl text-accent-foreground font-black">
              ✉
            </div>
            <h2 className="mt-4 text-xl font-bold">Email Support</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For order inquiries, download link resends, or payment receipts, reach out to us at:
            </p>
            <a
              href="mailto:support@simpexmedia.com"
              className="mt-4 inline-block text-base font-extrabold text-accent underline hover:opacity-90"
            >
              support@simpexmedia.com
            </a>
            <p className="mt-2 text-xs text-muted-foreground">
              Average response time: Within 2 to 4 hours.
            </p>
          </div>

          {/* Card 2: Instant Help & FAQs */}
          <div className="rounded-2xl border border-border/40 bg-card p-6 shadow-lg">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-2xl text-accent-foreground font-black">
              ⚡
            </div>
            <h2 className="mt-4 text-xl font-bold">Instant Delivery Guarantee</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Download links are emailed immediately upon purchase. If you don't see the email:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-xs text-foreground/90 sm:text-sm">
              <li>Check your <strong>Spam / Promotions</strong> folders.</li>
              <li>Ensure your entered email ID during checkout was spelled correctly.</li>
              <li>Mail us with your registered phone number or transaction ID for quick lookup.</li>
            </ul>
          </div>
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
