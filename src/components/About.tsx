import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue">
          {t.about.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {t.about.heading}
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-ink-soft/75">{t.about.intro}</p>
        <a
          href="#contact"
          className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-blue"
        >
          {t.about.cta}
        </a>
      </div>

      <div className="mt-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue">
          {t.about.ambitionHeading}
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {t.about.ambition.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white p-7">
              <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
