import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-ink-soft/60 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-icon.svg" alt="" className="h-5 w-5" />
          <span>{t.footer.rights.replace("{year}", String(year))}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:thisisrizve@gmail.com" className="hover:text-ink">
            thisisrizve@gmail.com
          </a>
          <a href="#top" className="hover:text-ink">
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
