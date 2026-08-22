import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
  autoplay?: boolean;
  interval?: number;
  perView?: { base: number; md?: number; lg?: number };
  rounded?: boolean;
  arrows?: boolean;
  dots?: boolean;
};

/** Lightweight swipeable, autoplaying image carousel (Swiper-like behaviour). */
export function Carousel({
  images,
  autoplay = true,
  interval = 3000,
  perView = { base: 1 },
  rounded = true,
  arrows = true,
  dots = true,
}: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(perView.base);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const hovering = useRef(false);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024 && perView.lg) setVisible(perView.lg);
      else if (w >= 768 && perView.md) setVisible(perView.md);
      else setVisible(perView.base);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [perView.base, perView.md, perView.lg]);

  const maxIndex = Math.max(0, images.length - visible);

  const next = useCallback(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? maxIndex : i - 1)), [maxIndex]);

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(() => {
      if (!hovering.current) next();
    }, interval);
    return () => window.clearInterval(id);
  }, [autoplay, interval, next]);

  useEffect(() => {
    setIndex(0);
  }, [visible]);

  useEffect(() => {
    if (index > maxIndex) setIndex(0);
  }, [index, maxIndex]);

  return (
    <div
      className="relative w-full"
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
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${(index * 100) / visible}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={src + i}
              className="shrink-0 px-1.5"
              style={{ width: `${100 / visible}%` }}
            >
              <img
                src={src}
                alt={`Worksheet preview ${i + 1}`}
                loading="lazy"
                className={`w-full h-auto object-contain ${rounded ? "rounded-xl" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>

      {arrows && images.length > visible && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-foreground/70 text-background transition hover:bg-accent hover:text-accent-foreground"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-foreground/70 text-background transition hover:bg-accent hover:text-accent-foreground"
          >
            ›
          </button>
        </>
      )}

      {dots && maxIndex > 0 && (
        <div className="mt-3 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-accent" : "bg-foreground/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
