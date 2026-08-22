import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Simpexmedia Kids" },
      {
        name: "description",
        content: "Privacy Policy for Simpexmedia Kids - 14,000+ Printable Worksheets for Kids.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
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
        <h1 className="text-3xl font-extrabold text-accent sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section className="rounded-xl border border-border/40 bg-card p-6">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">1. Information We Collect</h2>
            <p className="mt-2">
              When you purchase the 14,000+ Printable Kids Worksheets Bundle on Simpexmedia Kids, we
              collect necessary details to deliver your digital access and invoice:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-foreground/90">
              <li>Contact details: Name, Email Address, and Phone Number.</li>
              <li>Billing details: State / City and country for tax compliance.</li>
              <li>Payment details: Processed securely via encrypted payment gateways (Razorpay, PhonePe, Cards). We do NOT store your credit card or UPI PINs.</li>
            </ul>
          </section>

          <section className="rounded-xl border border-border/40 bg-card p-6">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">2. How We Use Your Information</h2>
            <p className="mt-2">
              Your information is used solely to:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-foreground/90">
              <li>Instantly deliver your PDF worksheet download links to your email address.</li>
              <li>Provide customer support and respond to product queries.</li>
              <li>Send critical product updates, additional bonus worksheets, and invoices.</li>
            </ul>
          </section>

          <section className="rounded-xl border border-border/40 bg-card p-6">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">3. Data Security &amp; Sharing</h2>
            <p className="mt-2">
              We respect your privacy. We never sell, rent, or trade your personal data with third-party marketers. Data is only transmitted securely via 256-bit SSL encryption to trusted payment gateways and email delivery providers.
            </p>
          </section>

          <section className="rounded-xl border border-border/40 bg-card p-6">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">4. Contact Us</h2>
            <p className="mt-2">
              If you have any questions regarding our Privacy Policy or wish to request data removal, contact us at:{" "}
              <a href="mailto:support@simpexmedia.com" className="font-bold text-accent underline">
                support@simpexmedia.com
              </a>.
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
