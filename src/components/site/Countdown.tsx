import { useSharedCountdown } from "@/hooks/use-countdown";

type Props = {
  showDays?: boolean;
  compact?: boolean;
  label?: string;
  seconds?: number;
};

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export function Countdown({ showDays = false, compact = false, label }: Props) {
  const { d, h, m, s } = useSharedCountdown();

  const items: Array<[string, number]> = showDays
    ? [
        ["Days", d],
        ["Hours", h],
        ["Minutes", m],
        ["Seconds", s],
      ]
    : [
        ["Hours", h],
        ["Minutes", m],
        ["Seconds", s],
      ];

  return (
    <div className="flex flex-col items-center">
      {label && (
        <span
          className={`pill-offer mb-2 rounded-md font-extrabold ${
            compact ? "px-2.5 py-0.5 text-[11px]" : "px-4 py-1 text-sm sm:text-base"
          }`}
        >
          {label}
        </span>
      )}
      <div
        className={`flex items-center rounded-xl border border-timer-border bg-timer-surface ${
          compact ? "gap-1 px-2 py-1" : "gap-2 px-3 py-2 sm:gap-4 sm:px-6 sm:py-3"
        }`}
      >
        {items.map(([itemLabel, value], i) => (
          <div key={itemLabel} className="flex items-center">
            {i > 0 && (
              <span
                aria-hidden
                className={`self-stretch bg-timer-border/40 ${compact ? "mx-1 w-px" : "mx-2 w-px sm:mx-3"}`}
              />
            )}
            <div className="flex min-w-[44px] flex-col items-center sm:min-w-[56px]">
              <span
                className={`font-extrabold tabular-nums text-foreground ${
                  compact ? "text-lg" : "text-2xl sm:text-4xl"
                }`}
              >
                {pad(value)}
              </span>
              <span
                className={`font-medium text-muted-foreground ${compact ? "text-[10px]" : "text-xs sm:text-sm"}`}
              >
                {itemLabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
