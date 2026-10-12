import { useEffect, useState } from "react";

export type Page = "home" | "services" | "service" | "about" | "contact";
export type Route = { page: Page; slug?: string };

// Path-based routing ("/services", "/services/cloud-migration", "/about", "/contact").
// Every route is also prerendered to its own index.html at build time, so it works on
// any static host. Plain section anchors ("#faq") belong to the home page.
export function routeFromPath(path: string): Route {
  const clean = path.replace(/\/+$/, "") || "/";
  const service = clean.match(/^\/services\/([a-z0-9-]+)$/);
  if (service) return { page: "service", slug: service[1] };
  if (clean === "/services") return { page: "services" };
  if (clean === "/about") return { page: "about" };
  if (clean === "/contact") return { page: "contact" };
  return { page: "home" };
}

export const serviceHref = (slug: string) => `/services/${slug}`;

// Set by the build-time prerender, where there is no window.location.
let serverPath = "/";
export function setServerPath(path: string) {
  serverPath = path;
}

type Location = { path: string; hash: string };

const currentLocation = (): Location => ({ path: window.location.pathname, hash: window.location.hash });

export function useRoute() {
  const [location, setLocation] = useState<Location>(() =>
    typeof window === "undefined" ? { path: serverPath, hash: "" } : currentLocation(),
  );

  useEffect(() => {
    const onPopState = () => setLocation(currentLocation());

    // Handle same-site links in the app instead of reloading the page.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as Element).closest("a");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;
      e.preventDefault();
      const url = new URL(href, window.location.origin);
      if (url.pathname + url.hash !== window.location.pathname + window.location.hash) {
        window.history.pushState(null, "", url.pathname + url.hash);
      }
      setLocation(currentLocation());
    };

    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    // Wait for the new page to render, then scroll to the section anchor (if any) or the top.
    requestAnimationFrame(() => {
      const target = location.hash.length > 1 ? document.getElementById(location.hash.slice(1)) : null;
      if (target) target.scrollIntoView();
      else window.scrollTo({ top: 0, behavior: "instant" });
    });
  }, [location]);

  return routeFromPath(location.path);
}
