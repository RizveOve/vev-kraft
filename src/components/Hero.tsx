import { useLanguage } from "../i18n/LanguageContext";

const CLIENTS = ["Altivon", "Celestial Invention", "Måm Asian Diner"];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #3E6FE0, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #3E6FE0, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-paper/80">
          <span className="h-1.5 w-1.5 rounded-full bg-blue" />
          {t.hero.badge}
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
          {t.hero.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70 md:text-xl">
          {t.hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:scale-[1.03] hover:bg-blue-dark"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper/90 transition-colors hover:border-white/40 hover:bg-white/5"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest text-paper/40">
            {t.hero.trustedBy}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-10 gap-y-3 font-display text-lg font-medium text-paper/70 md:text-xl">
            {CLIENTS.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
