import { useLanguage } from "../i18n/LanguageContext";
import { serviceHref } from "../router";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-10 sm:pt-12 md:pb-24 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue">
            {t.about.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {t.about.heading}
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-soft/75">{t.about.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/services"
              className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-blue"
            >
              {t.about.servicesCta}
            </a>
            <a
              href="/contact"
              className="inline-flex rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              {t.about.cta}
            </a>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-sm lg:col-span-2 lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl bg-blue-light"
            />
            <img
              src="/rizve-hasan.jpg"
              alt={t.about.photoAlt}
              width={800}
              height={800}
              className="relative aspect-square w-full rounded-3xl object-cover"
            />
          </div>
          <figcaption className="mt-6">
            <p className="font-display text-lg font-semibold text-ink">Rizve Hasan</p>
            <p className="text-sm text-ink-soft/60">{t.about.founderRole}</p>
          </figcaption>
        </figure>
      </div>

      <div className="mt-16 md:mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue">
            {t.about.servicesHeading}
          </p>
          <a href="/services" className="text-sm font-semibold text-ink transition-colors hover:text-blue">
            {t.about.servicesCta} →
          </a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service) => (
            <a
              key={service.slug}
              href={serviceHref(service.slug)}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-blue"
            >
              <span className="font-display text-base font-semibold text-ink">{service.title}</span>
              <span aria-hidden="true" className="text-ink-soft/40 transition-colors group-hover:text-blue">
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue">
          {t.about.ambitionHeading}
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {t.about.ambition.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white p-7">
              <h2 className="font-display text-base font-semibold text-ink">{item.title}</h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
