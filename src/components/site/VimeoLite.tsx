import { useEffect, useRef, useState } from "react";

/** High-performance click-to-play Vimeo player with local poster, preconnection, and instant feedback */
export function VimeoLite({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Preconnect Vimeo stream on viewport entry
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          // Add preconnect hint if not already present
          if (!document.querySelector(`link[href="https://player.vimeo.com"]`)) {
            const link = document.createElement("link");
            link.rel = "preconnect";
            link.href = "https://player.vimeo.com";
            document.head.appendChild(link);
          }
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden bg-black">
      {/* Video iframe */}
      {playing && (
        <iframe
          src={`https://player.vimeo.com/video/${id}?autoplay=1&color=00d084&autopause=0&dnt=true&loop=0&title=0&portrait=0&byline=0&playsinline=1`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
          className="relative z-10 h-full w-full border-0"
        />
      )}

      {/* Local Poster & Instant Play trigger */}
      {(!playing || !isLoaded) && (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 z-20 h-full w-full overflow-hidden text-left focus:outline-none cursor-pointer"
        >
          <img
            src={`/images/vimeo-${id}.jpg`}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute inset-0 grid place-items-center bg-black/35 backdrop-blur-[1px] transition-colors group-hover:bg-black/20">
            {playing && !isLoaded ? (
              <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-black shadow-lg animate-spin">
                <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </span>
            ) : (
              <span className="btn-cta grid h-16 w-16 place-items-center rounded-full text-2xl font-black shadow-xl transition-transform duration-200 group-hover:scale-110">
                ▶
              </span>
            )}
          </span>
        </button>
      )}
    </div>
  );
}
