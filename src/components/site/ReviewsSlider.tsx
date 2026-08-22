import { useCallback, useEffect, useRef, useState } from "react";

export type Review = { name: string; role: string; text: string };

export function ReviewsSlider({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);
  const hovering = useRef(false);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setVisible(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visible);
  const next = useCallback(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? maxIndex : i - 1)), [maxIndex]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!hovering.current) next();
    }, 5000);
    return () => window.clearInterval(id);
  }, [next]);

  useEffect(() => {
    setIndex(0);
  }, [visible]);

  useEffect(() => {
    if (index > maxIndex) setIndex(0);
  }, [index, maxIndex]);

  return (
    <div
      className="relative"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
      onTouchStart={(e) => (startX.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (startX.current === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? startX.current) - startX.current;
        if (dx > 40) prev();
        if (dx < -40) next();
        startX.current = null;
      }}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${(index * 100) / visible}%)` }}
        >
          {reviews.map((r) => (
            <div key={r.name} className="shrink-0 px-2" style={{ width: `${100 / visible}%` }}>
              <figure className="flex h-full flex-col gap-3 rounded-xl bg-card p-5 text-left">
                <div className="text-lg text-accent">★★★★★</div>
                <figcaption>
                  <div className="font-bold text-card-foreground">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </figcaption>
                <div className="h-px w-full bg-foreground/10" />
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  {r.text}
                </blockquote>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to review ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-accent" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
