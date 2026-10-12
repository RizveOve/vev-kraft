import { useLanguage } from "../i18n/LanguageContext";
import { CLIENTS } from "../siteInfo";

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

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-12 sm:pb-20 sm:pt-16 md:pb-28 md:pt-20">
        <h1 className="max-w-3xl font-display text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          {t.hero.headline}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/70 sm:mt-6 sm:text-lg md:text-xl">
          {t.hero.sub}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="#/contact"
            className="rounded-full bg-blue px-7 py-3.5 text-center text-sm font-semibold text-paper transition-transform hover:scale-[1.03] hover:bg-blue-dark"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#/services"
            className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold text-paper/90 transition-colors hover:border-white/40 hover:bg-white/5"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-16">
          <p className="text-xs font-medium uppercase tracking-widest text-paper/40">
            {t.hero.trustedBy}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-display text-base font-medium text-paper/70 sm:gap-x-10 sm:gap-y-3 sm:text-lg md:text-xl">
            {CLIENTS.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
