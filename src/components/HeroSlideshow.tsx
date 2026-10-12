import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const SLIDES = [
  "/hero/01-web-development.svg",
  "/hero/02-accessibility.svg",
  "/hero/03-cloud-migration.svg",
  "/hero/04-ai-integration.svg",
  "/hero/05-image-processing.svg",
];
const INTERVAL_MS = 4500;

export default function HeroSlideshow() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  // Respect reduced-motion: no automatic changes (the viewer can still pick a slide with the dots).
  const [autoplay] = useState(
    () => typeof window === "undefined" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoplay || paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [autoplay, paused]);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={t.hero.carouselLabel}
      // Pause while the pointer or keyboard focus is on the slideshow.
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
      className="w-full"
    >
      <div className="relative aspect-[6/5]">
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={t.hero.slides[i]}
            aria-hidden={i !== index}
            width={960}
            height={800}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-out motion-reduce:transition-none ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-1">
        {SLIDES.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${t.hero.showSlide} ${i + 1}: ${t.hero.slides[i]}`}
            aria-current={i === index ? "true" : undefined}
            className="group flex h-8 items-center px-1"
          >
            <span
              className={`block h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-blue" : "w-1.5 bg-ink/20 group-hover:bg-ink/45"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
