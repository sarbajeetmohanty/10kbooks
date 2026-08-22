import { PaymentBadges } from "./PaymentBadges";

export function CtaButton({
  className = "",
  href = "https://simpexmedia.co",
  text = "GET KIDS WORKSHEETS NOW!",
  subtext = "Available at 199 INR ONLY",
  showTrustBadges = true,
}: {
  className?: string;
  href?: string;
  text?: string;
  subtext?: string;
  showTrustBadges?: boolean;
}) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <a
        href={href}
        className="btn-cta group inline-flex w-full max-w-xl flex-col items-center rounded-2xl px-6 py-4 text-center font-extrabold uppercase leading-tight shadow-xl shadow-accent/20 transition-transform duration-200 animate-cta-pulse hover:scale-[1.03] active:scale-[0.98] sm:px-10 cursor-pointer"
      >
        <span className="text-lg tracking-wide sm:text-2xl">{text}</span>
        <span className="mt-1 text-xs font-extrabold normal-case text-primary-foreground/90 sm:text-sm">
          {subtext}
        </span>
      </a>

      {showTrustBadges && <PaymentBadges className="mt-3.5" />}
    </div>
  );
}
