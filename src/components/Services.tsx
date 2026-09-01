import { useLanguage } from "../i18n/LanguageContext";
import {
  CodeIcon,
  AccessIcon,
  SparkIcon,
  CloudIcon,
  AdviceIcon,
  HardwareIcon,
} from "./icons";

const ICONS = [CodeIcon, AccessIcon, SparkIcon, CloudIcon, AdviceIcon, HardwareIcon];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue">
          {t.services.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {t.services.heading}
        </h2>
        <p className="mt-4 text-lg text-ink-soft/70">{t.services.sub}</p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((service, i) => {
          const Icon = ICONS[i];
          return (
            <div
              key={service.slug}
              className="group rounded-2xl border border-line bg-white p-7 transition-shadow hover:shadow-[0_8px_30px_rgba(26,30,38,0.08)]"
            >
              <div
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-light text-blue"
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft/70">
                {service.short}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
