import { useSharedCountdown } from "@/hooks/use-countdown";

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export function StickyTimerBar({
  checkoutUrl = "https://simpexmedia.co",
}: {
  checkoutUrl?: string;
  initialSeconds?: number;
}) {
  const { h, m, s } = useSharedCountdown();

  return (
    <aside
      aria-label="Sticky countdown offer bar"
      className="fixed inset-x-0 bottom-0 z-50 bg-black px-3 py-2 sm:px-6 sm:py-3 shadow-[0_-4px_25px_rgba(0,0,0,0.9)]"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 sm:gap-6">
        {/* Left Timer with Top Badge */}
        <div className="flex flex-col items-center">
          {/* Top Orange Tab */}
          <div className="rounded-t-[8px] bg-[#FFA000] px-3.5 py-0.5 text-[11px] font-bold text-black sm:px-5 sm:text-xs">
            Limited Time Offer
          </div>
          {/* Black Timer Box with Orange Border */}
          <div className="flex items-center gap-3 rounded-[18px] border-2 border-[#FFA000] bg-black px-3.5 py-1 sm:gap-6 sm:px-6 sm:py-1.5">
            <div className="flex min-w-[28px] flex-col items-center sm:min-w-[42px]">
              <span className="text-base font-extrabold tabular-nums leading-tight text-white sm:text-2xl">
                {pad(h)}
              </span>
              <span className="text-[10px] font-bold text-white sm:text-xs">
                Hours
              </span>
            </div>
            <div className="flex min-w-[28px] flex-col items-center sm:min-w-[42px]">
              <span className="text-base font-extrabold tabular-nums leading-tight text-white sm:text-2xl">
                {pad(m)}
              </span>
              <span className="text-[10px] font-bold text-white sm:text-xs">
                Minutes
              </span>
            </div>
            <div className="flex min-w-[28px] flex-col items-center sm:min-w-[42px]">
              <span className="text-base font-extrabold tabular-nums leading-tight text-white sm:text-2xl">
                {pad(s)}
              </span>
              <span className="text-[10px] font-bold text-white sm:text-xs">
                Seconds
              </span>
            </div>
          </div>
        </div>

        {/* Right BUY NOW Button */}
        <a
          href={checkoutUrl}
          className="group inline-flex shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-r from-[#FFE500] via-[#B8EE00] to-[#76E000] px-6 py-2.5 text-center text-base font-black tracking-wide text-black shadow-[0_4px_20px_rgba(132,204,22,0.45)] transition-all duration-200 animate-cta-pulse hover:scale-105 active:scale-95 sm:rounded-2xl sm:px-9 sm:py-3.5 sm:text-xl"
        >
          BUY NOW
        </a>
      </div>
    </aside>
  );
}
