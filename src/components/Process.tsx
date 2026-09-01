import { useLanguage } from "../i18n/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const steps = t.process.steps;

  return (
    <section id="process" className="bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue">
            {t.process.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {t.process.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <span className="font-display text-5xl font-semibold text-blue/20">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft/70">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute -right-4 top-6 hidden h-px w-8 bg-line lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
