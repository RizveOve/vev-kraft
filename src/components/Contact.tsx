import { useState, type FormEvent } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "../siteInfo";

// FormSubmit relays form posts to the inbox below — no backend or account needed.
// The very first submission triggers a one-time activation email to this address.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft/40 focus:border-blue focus:ring-2 focus:ring-blue/20";
const labelClass = "block text-sm font-medium text-ink";

function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot: real visitors never see or fill this field.
    if (data.get("_honey")) return;

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company") || "—",
          message: data.get("message"),
          _replyto: data.get("email"),
          _subject: `VevKraft contact form: ${data.get("name")}`,
          _template: "table",
        }),
      });
      const json = (await res.json().catch(() => null)) as { success?: string | boolean } | null;
      if (!res.ok || String(json?.success) !== "true") throw new Error("Send failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl bg-blue-light p-6 text-[15px] leading-relaxed text-ink">
        {f.success}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            {f.name}
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {f.email}
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-company" className={labelClass}>
          {f.company} <span className="font-normal text-ink-soft/50">({f.optional})</span>
        </label>
        <input id="contact-company" name="company" type="text" autoComplete="organization" className={inputClass} />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          {f.message}
        </label>
        <textarea id="contact-message" name="message" required rows={6} className={`${inputClass} resize-y`} />
      </div>

      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {status === "error" && (
        <p role="alert" className="text-sm leading-relaxed text-red-700">
          {f.error}{" "}
          <a href={`tel:${CONTACT_PHONE_HREF}`} className="font-medium underline">
            {CONTACT_PHONE}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-blue disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? f.sending : f.submit}
      </button>
    </form>
  );
}

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-10 sm:pt-12 md:pb-24 md:pt-20">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue">
            {t.contact.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {t.contact.heading}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft/70">{t.contact.sub}</p>
        </div>

        <div className="rounded-3xl border border-line bg-white p-5 sm:p-9 lg:col-span-3">
          <h2 className="font-display text-xl font-semibold text-ink">{t.contact.form.heading}</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
