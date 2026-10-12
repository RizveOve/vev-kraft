import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");

const html = readFileSync(join(dist, "index.html"), "utf8");

const scriptMatch = html.match(/<script[^>]*src="\/assets\/(index-[^"]+\.js)"[^>]*><\/script>/);
const cssMatch = html.match(/<link[^>]*href="\/assets\/(index-[^"]+\.css)"[^>]*>/);
if (!scriptMatch || !cssMatch) throw new Error("Could not find built asset references in dist/index.html");

const js = readFileSync(join(dist, "assets", scriptMatch[1]), "utf8");
const css = readFileSync(join(dist, "assets", cssMatch[1]), "utf8");

const logoSvg = readFileSync(join(dist, "logo.svg"), "utf8");
const logoIconSvg = readFileSync(join(dist, "logo-icon.svg"), "utf8");
const logoReversedSvg = readFileSync(join(dist, "logo-reversed.svg"), "utf8");

const toDataUri = (svg) => `data:image/svg+xml,${encodeURIComponent(svg)}`;
const photoDataUri = `data:image/jpeg;base64,${readFileSync(join(dist, "rizve-hasan.jpg")).toString("base64")}`;

const bundledJs = js
  .replaceAll("/logo-icon.svg", toDataUri(logoIconSvg))
  .replaceAll("/logo-reversed.svg", toDataUri(logoReversedSvg))
  .replaceAll("/logo.svg", toDataUri(logoSvg))
  .replaceAll("/rizve-hasan.jpg", photoDataUri);

let bundledWithHero = bundledJs;
for (const file of readdirSync(join(dist, "hero"))) {
  bundledWithHero = bundledWithHero.replaceAll(`/hero/${file}`, toDataUri(readFileSync(join(dist, "hero", file), "utf8")));
}

const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
const themeMatch = html.match(/<meta name="theme-color" content="([^"]*)"/);
const fontsMatch = html.match(/<link href="(https:\/\/fonts\.googleapis\.com[^"]*)" rel="stylesheet" \/>/);

const page = `<title>${titleMatch[1]}</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="${descMatch[1]}" />
<meta name="theme-color" content="${themeMatch[1]}" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="${fontsMatch[1]}" rel="stylesheet" />

<style>
${css}
</style>

<div id="root"></div>

<script type="module">
${bundledWithHero}
</script>
`;

const outDir = join(root, "artifact");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "index.html"), page);
console.log("Wrote", join(outDir, "index.html"), `(${(page.length / 1024).toFixed(0)} KB)`);
