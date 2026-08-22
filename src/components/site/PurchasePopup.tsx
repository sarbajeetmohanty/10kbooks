import { useEffect, useState } from "react";
import { indianBuyers, relativeTimeOptions, type Buyer } from "@/data/buyers";

// Helper to get a randomized slice or sequence
function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

export function PurchasePopup() {
  const [currentBuyer, setCurrentBuyer] = useState<Buyer | null>(null);
  const [timeAgo, setTimeAgo] = useState("Just now");
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let hideTimer: ReturnType<typeof setTimeout>;

    const showNext = () => {
      // Pick a random buyer from the 260+ authentic dataset
      const buyer = getRandomItem(indianBuyers);
      const time = getRandomItem(relativeTimeOptions);
      setCurrentBuyer(buyer);
      setTimeAgo(time);
      setVisible(true);

      hideTimer = setTimeout(() => {
        setVisible(false);
      }, 5500); // Display for 5.5s
    };

    // First popup appears after 3.5 seconds, then cycles smoothly every 12 seconds
    const firstTimeout = setTimeout(showNext, 3500);
    const interval = setInterval(showNext, 12000);

    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !visible || !currentBuyer) return null;

  return (
    <aside
      aria-label="Recent purchase notification"
      className="fixed bottom-24 left-3 z-40 max-w-[16rem] sm:max-w-[19rem] transition-all duration-300 ease-out sm:bottom-24 sm:left-6 animate-fade-up"
    >
      <div className="relative flex items-center gap-3 rounded-2xl border-2 border-accent/40 bg-card/95 p-3.5 shadow-2xl shadow-black/80 backdrop-blur-md">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Close notification"
          className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-foreground/80 text-[10px] font-bold text-background transition hover:bg-foreground hover:scale-110 cursor-pointer"
        >
          ✕
        </button>

        {/* Thumbnail preview */}
        <div className="relative shrink-0">
          <img
            src="/images/2024_02_14000-Kids-Worksheets.webp"
            alt="Worksheets bundle"
            width={48}
            height={48}
            className="h-12 w-12 rounded-xl object-cover border border-accent/30 shadow-md"
          />
          {/* Live green pulse dot */}
          <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cta" />
          </span>
        </div>

        {/* Purchase details */}
        <div className="flex-1 text-left">
          <p className="text-xs font-extrabold text-foreground sm:text-sm">
            {currentBuyer.name}{" "}
            <span className="font-medium text-muted-foreground text-[11px] sm:text-xs">
              from {currentBuyer.city}
            </span>
          </p>
          <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground sm:text-xs">
            Bought 14,000+ Worksheets{" "}
            <span className="font-bold text-accent">{currentBuyer.relation}</span>
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-[10px] font-bold text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Verified purchase • {timeAgo}
          </p>
        </div>
      </div>
    </aside>
  );
}
