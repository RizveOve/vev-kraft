import { useEffect, useRef } from "react";
import type { ServiceItem } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";
import { CrossIcon } from "./icons";

const CONTACT_EMAIL = "thisisrizve@gmail.com";
const CONTACT_PHONE = "+47 947 29 244";
const CONTACT_PHONE_HREF = "+4794729244";

export default function ServiceModal({
  service,
  onClose,
}: {
  service: ServiceItem | null;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!service) return;
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [service, onClose]);

  if (!service) return null;

  const subject = encodeURIComponent(`Enquiry: ${service.title}`);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-8 sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="service-modal-title" className="font-display text-2xl font-semibold leading-tight text-ink">
            {service.title}
          </h3>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.serviceModal.closeLabel}
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line text-ink-soft/60 transition-colors hover:border-ink hover:text-ink"
          >
            <CrossIcon className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft/75">{service.long}</p>

        <div className="mt-6 rounded-2xl bg-blue-light p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-dark">
            {t.serviceModal.priceLabel}
          </p>
          <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink">{service.price}</p>
          <p className="mt-1.5 text-xs text-ink-soft/60">{t.serviceModal.priceNote}</p>
        </div>

        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}
          className="mt-6 flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-blue"
        >
          {t.serviceModal.contactCta}
        </a>

        <div className="mt-4 text-center text-sm text-ink-soft/60">
          <p>{t.serviceModal.orContact}</p>
          <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-ink hover:text-blue">
              {CONTACT_EMAIL}
            </a>
            <span aria-hidden="true" className="text-ink-soft/30">·</span>
            <a href={`tel:${CONTACT_PHONE_HREF}`} className="font-medium text-ink hover:text-blue">
              {CONTACT_PHONE}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
