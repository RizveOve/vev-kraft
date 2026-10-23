import { useLanguage } from "../i18n/LanguageContext";
import {
  ADDRESS_MAP_URL,
  CLIENTS,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  LINKEDIN_URL,
  ORG_NUMBER,
  PUBLIC_EMAIL,
} from "../siteInfo";
import { serviceHref } from "../router";

const headingClass = "text-xs font-semibold uppercase tracking-widest text-blue-dark";
const linkClass = "transition-colors hover:text-ink";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-stone text-sm text-ink-soft/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <img src="/logo.svg" alt="VevKraft" className="h-8 w-auto" />

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className={headingClass}>{t.footer.clientsHeading}</h2>
            <ul className="mt-4 space-y-2.5">
              {CLIENTS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>{t.footer.contactHeading}</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <span className="sr-only">{t.contact.labels.phone}: </span>
                <a href={`tel:${CONTACT_PHONE_HREF}`} className={linkClass}>
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <span className="sr-only">{t.contact.labels.email}: </span>
                <a href={`mailto:${PUBLIC_EMAIL}`} className={linkClass}>
                  {PUBLIC_EMAIL}
                </a>
              </li>
              <li>
                <span className="sr-only">{t.contact.labels.address}: </span>
                <a href={ADDRESS_MAP_URL} target="_blank" rel="noreferrer" className={linkClass}>
                  {t.footer.address}
                </a>
              </li>
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={linkClass}>
                  LinkedIn
                </a>
              </li>
              <li>
                {t.footer.orgNumber} {ORG_NUMBER}
              </li>
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>{t.footer.servicesHeading}</h2>
            <ul className="mt-4 space-y-2.5">
              {t.services.items.map((s) => (
                <li key={s.slug}>
                  <a href={serviceHref(s.slug)} className={linkClass}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-ink/10 pt-8 text-ink-soft/75 text-center sm:flex-row sm:justify-between sm:text-left">
          <span>{t.footer.rights.replace("{year}", String(year))}</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0 })} className={linkClass}>
            {t.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
