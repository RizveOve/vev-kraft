import { useLanguage } from "../i18n/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="bg-paper-dim">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
          {t.how.heading}
        </h2>

        <ol className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
          {t.how.steps.map((step) => (
            <li key={step.label} className="border-t-2 border-ink pt-5">
              <p className="text-sm font-semibold text-blue">{step.label}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
