import type { Dictionary } from "./i18n/translations";
import { routeFromPath, serviceHref, type Route } from "./router";

export const SITE_URL = "https://vev-kraft.no";

const HOME_TITLE = "VevKraft (Vev-Kraft) — Accessible Web Development & Applied AI in Oslo";
const HOME_DESCRIPTION =
  "VevKraft (Vev-Kraft) is an Oslo-based software consultancy for Norwegian businesses: accessible web development, AI and image processing, cloud migration, IT consultancy & training, and hardware lifecycle engineering.";

export type PageMeta = { title: string; description: string; path: string };

// Keep descriptions within what search results show.
const clip = (text: string, max = 158) => (text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`);

export function pageMeta(route: Route, t: Dictionary): PageMeta {
  switch (route.page) {
    case "service": {
      const service = t.services.items.find((s) => s.slug === route.slug);
      if (service) {
        return { title: `${service.title} — VevKraft`, description: clip(service.short), path: serviceHref(service.slug) };
      }
      return pageMeta({ page: "services" }, t);
    }
    case "services":
      return { title: `${t.nav.services} — VevKraft`, description: clip(t.services.sub), path: "/services" };
    case "about":
      return { title: `${t.nav.about} — VevKraft`, description: clip(t.about.intro), path: "/about" };
    case "contact":
      return { title: `${t.nav.contact} — VevKraft`, description: clip(t.contact.sub), path: "/contact" };
    default:
      return { title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" };
  }
}

/** Every page that gets its own prerendered HTML file and sitemap entry. */
export function allPaths(t: Dictionary): string[] {
  return ["/", "/services", ...t.services.items.map((s) => serviceHref(s.slug)), "/about", "/contact"];
}

export { routeFromPath };
