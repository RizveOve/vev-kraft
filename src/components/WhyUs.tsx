import { CheckIcon, CrossIcon } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue">
            {t.whyus.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {t.whyus.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-paper/70">{t.whyus.sub}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue">
              {t.whyus.getLabel}
            </p>
            <ul className="mt-5 space-y-4">
              {t.whyus.get.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue/20 text-blue"
                  >
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-paper/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-paper/40">
              {t.whyus.skipLabel}
            </p>
            <ul className="mt-5 space-y-4">
              {t.whyus.skip.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/10 text-paper/40"
                  >
                    <CrossIcon className="h-3 w-3" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-paper/65">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
