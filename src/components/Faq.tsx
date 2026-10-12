import { useState } from "react";
import { PlusIcon } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";

export default function Faq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper-dim">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue">
          {t.faq.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
          {t.faq.heading}
        </h2>
      </div>

      <div className="mt-12 divide-y divide-line border-t border-b border-line">
        {t.faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-base font-semibold text-ink">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-7 w-7 flex-none items-center justify-center rounded-full bg-blue-light text-blue transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  <PlusIcon className="h-4 w-4" />
                </span>
              </button>
              {isOpen && (
                <p className="pb-5 text-[15px] leading-relaxed text-ink-soft/70">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
