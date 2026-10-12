import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);
const appHtml = render();

const indexPath = join(dist, "index.html");
const html = readFileSync(indexPath, "utf8");
if (!html.includes('<div id="root"></div>')) throw new Error("Could not find empty #root in dist/index.html");
writeFileSync(indexPath, html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
rmSync(ssrDir, { recursive: true, force: true });

console.log(`Prerendered home page into dist/index.html (${(appHtml.length / 1024).toFixed(0)} KB of HTML)`);
