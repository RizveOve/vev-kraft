import { useLanguage } from "../i18n/LanguageContext";
import { ArrowIcon } from "./icons";

export default function MeetRizve() {
  const { t } = useLanguage();

  return (
    <section id="meet" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-5 md:gap-14 md:py-24">
        <img
          src="/rizve-hasan.jpg"
          alt={t.about.photoAlt}
          width={800}
          height={800}
          loading="lazy"
          className="mx-auto aspect-square w-full max-w-xs rounded-3xl object-cover md:col-span-2 md:max-w-none"
        />

        <div className="md:col-span-3">
          <h2 className="font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
            {t.meet.heading}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft/75 sm:text-base">{t.meet.text}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {t.meet.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-line bg-paper-dim px-3.5 py-1.5 text-xs font-semibold text-ink"
              >
                {chip}
              </li>
            ))}
          </ul>

          <a
            href="https://rizvehasan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-blue-dark"
          >
            {t.meet.more}
            <span className="sr-only"> ({t.meet.newTab})</span>
            <ArrowIcon className="h-4 w-4 -rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}
