import { useLanguage } from "../i18n/LanguageContext";
import { AccessIcon, ChartIcon, LayersIcon, PhoneIcon } from "./icons";

const ICONS = [PhoneIcon, LayersIcon, AccessIcon, ChartIcon];

export default function WhyVevKraft() {
  const { t } = useLanguage();

  return (
    <section id="why" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="max-w-xl font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
          {t.why.heading}
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-10">
          {t.why.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={item.title}>
                <Icon className="h-6 w-6 text-blue" />
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft/70">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
