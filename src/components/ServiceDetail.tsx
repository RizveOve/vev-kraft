import type { ServiceItem } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";
import { serviceHref } from "../router";
import { CONTACT_PHONE, CONTACT_PHONE_HREF } from "../siteInfo";
import { ArrowIcon, CheckIcon, ServiceIcon } from "./icons";

export default function ServiceDetail({ service }: { service: ServiceItem }) {
  const { t } = useLanguage();
  const others = t.services.items.filter((s) => s.slug !== service.slug);

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-10 sm:pt-12 md:pb-24 md:pt-20">
      <a
        href="#/services"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft/70 transition-colors hover:text-ink"
      >
        <ArrowIcon className="h-4 w-4 rotate-180" />
        {t.servicePage.allServices}
      </a>

      <div className="mt-8 max-w-3xl">
        <div
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-light text-blue"
        >
          <ServiceIcon slug={service.slug} className="h-6 w-6" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft/70">{service.short}</p>
      </div>

      <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-3 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="text-[15px] leading-relaxed text-ink-soft/80">{service.long}</p>

          <h2 className="mt-12 text-sm font-semibold uppercase tracking-widest text-blue">
            {t.servicePage.includesHeading}
          </h2>
          <ul className="mt-6 space-y-4">
            {service.includes.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-blue" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-3xl border border-line bg-white p-7 lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-dark">
            {t.servicePage.priceLabel}
          </p>
          <p className="mt-3 text-[15px] font-medium leading-relaxed text-ink">{service.price}</p>
          <p className="mt-2 text-xs text-ink-soft/60">{t.servicePage.priceNote}</p>
          <a
            href="#/contact"
            className="mt-6 flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-blue"
          >
            {t.servicePage.contactCta}
          </a>
          <p className="mt-4 text-center text-sm text-ink-soft/60">
            {t.servicePage.orCall}{" "}
            <a href={`tel:${CONTACT_PHONE_HREF}`} className="font-medium text-ink hover:text-blue">
              {CONTACT_PHONE}
            </a>
          </p>
        </aside>
      </div>

      <div className="mt-16 border-t md:mt-20 border-line pt-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue">
          {t.servicePage.otherServices}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <a
              key={s.slug}
              href={serviceHref(s.slug)}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-blue"
            >
              <span className="font-display text-[15px] font-semibold text-ink">{s.title}</span>
              <ArrowIcon className="h-4 w-4 flex-none text-ink-soft/40 transition-colors group-hover:text-blue" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
