/**
 * Writes a static HTML file for every route in PRERENDER_ROUTES so crawlers
 * (and social/AI bots that don't run JavaScript) receive the full page content,
 * title, meta tags, canonical and JSON-LD. Also regenerates sitemap.xml from the
 * same route list so the two can't drift apart.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const serverEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, buildHeadTags, PRERENDER_ROUTES } = await import(
  pathToFileURL(serverEntry).href
);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
if (!SEO_BLOCK.test(template)) {
  throw new Error("index.html is missing the <!--seo:start--> / <!--seo:end--> markers");
}

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// JSON-LD must not contain a literal "</script"
const safeJson = (value) => JSON.stringify(value).replace(/</g, "\u003c");

const headFor = (seo) => {
  const tags = buildHeadTags(seo);
  const lines = [
    `<title>${escapeAttr(tags.title)}</title>`,
    `<link rel="canonical" href="${escapeAttr(tags.canonicalUrl)}" />`,
    ...tags.named.map(
      ([name, content]) => `<meta name="${name}" content="${escapeAttr(content)}" />`,
    ),
    ...tags.property.map(
      ([property, content]) =>
        `<meta property="${property}" content="${escapeAttr(content)}" />`,
    ),
  ];
  if (seo.schema) {
    lines.push(
      `<script type="application/ld+json" id="page-schema">${safeJson(seo.schema)}</script>`,
    );
  }
  return lines.join("\n    ");
};

const outputFileFor = (route) => {
  if (route === "/") return "index.html";
  // /products -> products.html (served by nginx `try_files $uri $uri.html`)
  return `${route.replace(/^\//, "")}.html`;
};

const sitemapEntries = [];
const today = new Date().toISOString().slice(0, 10);

for (const route of PRERENDER_ROUTES) {
  const { html, seo } = render(route);
  if (!seo) {
    throw new Error(`Route ${route} rendered without a <Seo> component`);
  }
  if (seo.path !== route) {
    throw new Error(`Route ${route} has <Seo path="${seo.path}"> — they must match`);
  }

  const page = template
    .replace(SEO_BLOCK, headFor(seo))
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outFile = path.join(distDir, outputFileFor(route));
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);

  if (!seo.noindex) {
    sitemapEntries.push(route);
  }
  console.log(`prerendered ${route}${seo.noindex ? " (noindex)" : ""}`);
}

const priorityFor = (route) => {
  if (route === "/") return "1.0";
  if (route === "/products") return "0.9";
  if (route.endsWith("-exporter-india") || route === "/cold-pressed-oils") return "0.8";
  return "0.7";
};

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (route) => `  <url>
    <loc>https://jmmasalaexports.com${route === "/" ? "/" : route}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priorityFor(route)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log(`sitemap.xml written with ${sitemapEntries.length} URLs`);
