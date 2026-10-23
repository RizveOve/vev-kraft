import { createElement, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { translations } from "./i18n/translations";
import { setServerPath } from "./router";
import { allPaths, pageMeta, routeFromPath, SITE_URL } from "./seo";

// Build-time prerender: one HTML document per route, so crawlers get real content and
// each page works as a plain static file on any host.
export function renderPages() {
  const t = translations.no;
  return allPaths(t).map((path) => {
    setServerPath(path);
    const html = renderToString(createElement(StrictMode, null, createElement(App)));
    return { path, html, meta: pageMeta(routeFromPath(path), t) };
  });
}

export { SITE_URL };
