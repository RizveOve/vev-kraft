import { useLanguage } from "../i18n/LanguageContext";
import { serviceHref } from "../router";
import { ArrowIcon, ServiceIcon } from "./icons";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-10 sm:pt-12 md:pb-24 md:pt-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue">
          {t.services.eyebrow}
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {t.services.heading}
        </h1>
        <p className="mt-4 text-lg text-ink-soft/70">{t.services.sub}</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6 md:mt-14 lg:grid-cols-3">
        {t.services.items.map((service) => (
          <a
            key={service.slug}
            href={serviceHref(service.slug)}
            className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition-[border-color,box-shadow] hover:border-blue hover:shadow-[0_8px_30px_rgba(26,30,38,0.08)]"
          >
            <div
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-light text-blue"
            >
              <ServiceIcon slug={service.slug} className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-lg font-semibold text-ink">{service.title}</h2>
            <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-soft/70">{service.short}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
              {t.services.cta}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
