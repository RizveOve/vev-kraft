import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { renderPages, SITE_URL } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);
const template = readFileSync(join(dist, "index.html"), "utf8");
if (!template.includes('<div id="root"></div>')) throw new Error("Could not find empty #root in dist/index.html");

const escapeHtml = (s) => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function setMeta(html, pattern, value) {
  if (!pattern.test(html)) throw new Error(`Head tag not found: ${pattern}`);
  return html.replace(pattern, (_, before, after) => `${before}${escapeHtml(value)}${after}`);
}

const pages = renderPages();
for (const { path, html, meta } of pages) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  page = setMeta(page, /(<title>)[^<]*(<\/title>)/, meta.title);
  page = setMeta(page, /(<meta name="description" content=")[^"]*(")/, meta.description);
  page = setMeta(page, /(<link rel="canonical" href=")[^"]*(")/, url);
  page = setMeta(page, /(<meta property="og:url" content=")[^"]*(")/, url);
  page = setMeta(page, /(<meta property="og:title" content=")[^"]*(")/, meta.title);
  page = setMeta(page, /(<meta property="og:description" content=")[^"]*(")/, meta.description);
  page = setMeta(page, /(<meta name="twitter:title" content=")[^"]*(")/, meta.title);
  page = setMeta(page, /(<meta name="twitter:description" content=")[^"]*(")/, meta.description);

  const outDir = path === "/" ? dist : join(dist, ...path.split("/").filter(Boolean));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), page);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ path }) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join("\n")}
</urlset>
`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);
rmSync(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${pages.length} pages: ${pages.map((p) => p.path).join(", ")}`);
