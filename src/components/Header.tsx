import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/translations";
import { serviceHref, type Page } from "../router";
import { ServiceIcon } from "./icons";

const LANGS: { code: Lang; label: string }[] = [
  { code: "no", label: "NO" },
  { code: "en", label: "EN" },
  { code: "bn", label: "বাং" },
];

function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-ink/10 bg-paper-dim p-1 ${className ?? ""}`}
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            lang === l.code ? "bg-ink text-paper" : "text-ink-soft/75 hover:text-ink"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-4 w-4 fill-none stroke-current transition-transform ${open ? "rotate-180" : ""}`}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ServicesDropdown({ active }: { active: boolean }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="services-menu"
        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-ink ${
          active ? "text-ink" : "text-ink-soft/80"
        }`}
      >
        {t.nav.services}
        <Chevron open={open} />
      </button>

      {open && (
        // pt-3 bridges the gap so the menu stays open while the pointer moves onto it.
        <div id="services-menu" className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
          <div className="rounded-2xl border border-line bg-white p-2 shadow-[0_12px_40px_rgba(26,30,38,0.12)]">
            {t.services.items.map((s) => (
              <a
                key={s.slug}
                href={serviceHref(s.slug)}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper-dim"
              >
                <ServiceIcon slug={s.slug} className="h-4 w-4 flex-none text-blue" />
                {s.title}
              </a>
            ))}
            <a
              href="/services"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl border-t border-line px-3 py-2.5 text-sm font-semibold text-blue transition-colors hover:bg-paper-dim"
            >
              {t.servicePage.allServices} →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header({ page }: { page: Page }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesActive = page === "services" || page === "service";
  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors hover:text-ink ${active ? "text-ink" : "text-ink-soft/80"}`;
  const mobileLinkClass = (active: boolean) =>
    `block py-2 text-base font-medium ${active ? "text-ink" : "text-ink-soft/80"}`;

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-stone">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 md:py-4">
        <a href="/" onClick={closeMenu} className="flex flex-none items-center gap-2" aria-label="VevKraft home">
          <img src="/logo.svg" alt="VevKraft" className="h-6 w-auto sm:h-7" />
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          <a href="/" aria-current={page === "home" ? "page" : undefined} className={linkClass(page === "home")}>
            {t.nav.home}
          </a>
          <ServicesDropdown active={servicesActive} />
          <a href="/about" aria-current={page === "about" ? "page" : undefined} className={linkClass(page === "about")}>
            {t.nav.about}
          </a>
          <a
            href="/contact"
            aria-current={page === "contact" ? "page" : undefined}
            className={linkClass(page === "contact")}
          >
            {t.nav.contact}
          </a>
        </nav>

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => (open ? closeMenu() : setOpen(true))}
          className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-line md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-4 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-4 bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink/10 bg-stone px-4 pb-6 pt-3 sm:px-6 md:hidden"
        >
          <nav className="flex flex-col">
            <a href="/" onClick={closeMenu} aria-current={page === "home" ? "page" : undefined} className={mobileLinkClass(page === "home")}>
              {t.nav.home}
            </a>

            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-controls="mobile-services"
              className={`flex items-center justify-between py-2 text-left text-base font-medium ${
                servicesActive ? "text-ink" : "text-ink-soft/80"
              }`}
            >
              {t.nav.services}
              <Chevron open={servicesOpen} />
            </button>
            {servicesOpen && (
              <div id="mobile-services" className="mb-2 ml-1 flex flex-col border-l border-line pl-4">
                {t.services.items.map((s) => (
                  <a key={s.slug} href={serviceHref(s.slug)} onClick={closeMenu} className="py-2 text-[15px] text-ink-soft/80">
                    {s.title}
                  </a>
                ))}
                <a href="/services" onClick={closeMenu} className="py-2 text-[15px] font-semibold text-blue">
                  {t.servicePage.allServices} →
                </a>
              </div>
            )}

            <a href="/about" onClick={closeMenu} aria-current={page === "about" ? "page" : undefined} className={mobileLinkClass(page === "about")}>
              {t.nav.about}
            </a>
            <a href="/contact" onClick={closeMenu} aria-current={page === "contact" ? "page" : undefined} className={mobileLinkClass(page === "contact")}>
              {t.nav.contact}
            </a>
            <LanguageSwitcher className="mt-4 w-fit" />
          </nav>
        </div>
      )}
    </header>
  );
}
