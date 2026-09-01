import { useLanguage } from "../i18n/LanguageContext";

const CONTACT_EMAIL = "thisisrizve@gmail.com";
const CONTACT_PHONE = "+47 947 29 244";
const CONTACT_PHONE_HREF = "+4794729244";
const ADDRESS = "Nedre Ullevål 7, 0850 Oslo, Norway";

export default function Contact() {
  const { t } = useLanguage();

  const details = [
    { label: t.contact.labels.email, value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { label: t.contact.labels.phone, value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE_HREF}` },
    {
      label: t.contact.labels.address,
      value: ADDRESS,
      href: "https://www.google.com/maps/search/?api=1&query=Nedre+Ulleval+7%2C+0850+Oslo",
    },
  ];

  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {t.contact.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-paper/70">{t.contact.sub}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {details.map((d) => {
            const isAddress = d.label === t.contact.labels.address;
            return (
              <a
                key={d.label}
                href={d.href}
                target={isAddress ? "_blank" : undefined}
                rel={isAddress ? "noreferrer" : undefined}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-white/25 hover:bg-white/[0.07]"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-paper/45">
                  {d.label}
                </p>
                <p className="mt-3 font-display text-lg font-medium leading-snug text-paper">
                  {d.value}
                </p>
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-8 text-sm text-paper/50">
          <span>VEVKRAFT BY HASAN</span>
          <span aria-hidden="true">·</span>
          <span>Org. no. 838 166 172</span>
          <span aria-hidden="true">·</span>
          <span>vev-kraft.no</span>
        </div>
      </div>
    </section>
  );
}
