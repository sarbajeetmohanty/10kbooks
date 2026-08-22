import { useEffect, useRef, useState } from "react";

export function ProgressBars({ items }: { items: Array<{ label: string; value: number }> }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mx-auto w-full max-w-3xl space-y-6">
      {items.map((item) => (
        <div key={item.label}>
          <div className="mb-2 flex items-center justify-between gap-4 text-sm font-semibold text-foreground sm:text-base">
            <span>{item.label}</span>
            <span className="text-accent">{item.value}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-foreground/15">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-[1500ms] ease-out"
              style={{ width: shown ? `${item.value}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
