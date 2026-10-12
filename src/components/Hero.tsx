import { useLanguage } from "../i18n/LanguageContext";
import { CLIENTS } from "../siteInfo";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden bg-paper-dim text-ink">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, #3E6FE0, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(circle, #3E6FE0, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-12 sm:pb-20 sm:pt-16 md:pb-28 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h1 className="max-w-3xl font-display text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08] xl:text-[3.5rem]">
              {t.hero.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft/75 sm:mt-6 sm:text-lg md:text-xl">
              {t.hero.sub}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="/contact"
                className="rounded-full bg-blue px-7 py-3.5 text-center text-sm font-semibold text-paper transition-transform hover:scale-[1.03] hover:bg-blue-dark"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="/services"
                className="rounded-full border border-ink/15 bg-white px-7 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-ink/40"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none">
            <HeroSlideshow />
          </div>
        </div>

        <div className="mt-12 border-t border-ink/10 pt-8 sm:mt-16">
          <p className="text-xs font-medium uppercase tracking-widest text-ink-soft/55">
            {t.hero.trustedBy}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-display text-base font-medium text-ink-soft/75 sm:gap-x-10 sm:gap-y-3 sm:text-lg md:text-xl">
            {CLIENTS.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
