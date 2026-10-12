import { useEffect, useState } from "react";

export type Page = "home" | "services" | "service" | "about" | "contact";
export type Route = { page: Page; slug?: string };

// Hash-based routing ("#/services", "#/services/cloud-migration", "#/about", "#/contact")
// so the site works on any static host and in the single-file artifact build without
// server rewrites. Plain section anchors ("#process") belong to the home page.
function routeFromHash(hash: string): Route {
  const service = hash.match(/^#\/services\/([a-z0-9-]+)$/);
  if (service) return { page: "service", slug: service[1] };
  if (hash === "#/services") return { page: "services" };
  if (hash === "#/about") return { page: "about" };
  if (hash === "#/contact") return { page: "contact" };
  return { page: "home" };
}

export const serviceHref = (slug: string) => `#/services/${slug}`;

export function useRoute() {
  const [hash, setHash] = useState(() => (typeof window === "undefined" ? "" : window.location.hash));

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    // Wait for the new page to render, then scroll to the section anchor (if any).
    requestAnimationFrame(() => {
      const isSection = hash.length > 1 && !hash.startsWith("#/");
      const target = isSection ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView();
      else window.scrollTo({ top: 0 });
    });
  }, [hash]);

  return routeFromHash(hash);
}
