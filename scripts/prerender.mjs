import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const SITE_URL = "https://jmmasalaexports.com";
const rootDir = process.cwd();
const distDir = resolve(rootDir, "dist");
const templatePath = join(distDir, "index.html");
const serverEntryPath = join(distDir, "server", "entry-server.js");

const originalConsoleError = console.error;

console.error = (...args) => {
  const message = args.join(" ");

  if (message.includes("useLayoutEffect does nothing on the server")) {
    return;
  }

  originalConsoleError(...args);
};

const { getRouteSeo, prerenderRoutes, render } = await import(
  pathToFileURL(serverEntryPath).href
);

const template = await readFile(templatePath, "utf8");

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const DEFAULT_IMAGE = "/og-default.jpg";
const DEFAULT_ROBOTS = "index, follow, max-image-preview:large";

const normalizeUrl = (value) => {
  if (!value) {
    return `${SITE_URL}${DEFAULT_IMAGE}`;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
};

const routeToFilePath = (route) => {
  if (route === "/") {
    return join(distDir, "index.html");
  }

  // Served by nginx as the real 404 page (error_page 404 /404.html).
  if (route === "/404") {
    return join(distDir, "404.html");
  }

  return join(distDir, route.replace(/^\//, ""), "index.html");
};

const stripRouteHeadTags = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(
      /<meta\s+name=["'](?:description|keywords|robots|twitter:card|twitter:title|twitter:description|twitter:image|twitter:image:alt|twitter:site|google-site-verification)["'][^>]*>\s*/gi,
      "",
    )
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+property=["']article:[^"']+["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']alternate["'][^>]*>\s*/gi, "")
    .replace(
      /<script\s+type=["']application\/ld\+json["']\s+id=["']page-schema["'][\s\S]*?<\/script>\s*/gi,
      "",
    );

const renderHead = (seo) => {
  // duplicate pages (for example /export) point their canonical at the page they duplicate
  const canonicalUrl = `${SITE_URL}${seo.canonicalPath ?? seo.path}`;
  const imageUrl = normalizeUrl(seo.imageUrl);
  const type = seo.type ?? "website";
  // The 1200x630 dimensions only describe the default image; a route-specific
  // image has unknown dimensions, so they are omitted for it.
  const hasOwnImage = Boolean(seo.imageUrl);
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="${escapeHtml(seo.robots ?? DEFAULT_ROBOTS)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:type" content="${escapeHtml(type)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(seo.imageAlt ?? "JM Masala export-grade Indian spices")}" />`,
    ...(hasOwnImage
      ? []
      : [
          `<meta property="og:image:width" content="1200" />`,
          `<meta property="og:image:height" content="630" />`,
        ]),
    `<meta property="og:site_name" content="JM Masala" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(seo.imageAlt ?? "JM Masala export-grade Indian spices")}" />`,
    `<meta name="twitter:site" content="@jmmasalaexports" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<link rel="alternate" hreflang="en" href="${escapeHtml(canonicalUrl)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${escapeHtml(canonicalUrl)}" />`,
  ];

  if (seo.keywords?.length) {
    tags.splice(
      2,
      0,
      `<meta name="keywords" content="${escapeHtml(seo.keywords.join(", "))}" />`,
    );
  }

  if (type === "article") {
    if (seo.publishedTime) {
      tags.push(
        `<meta property="article:published_time" content="${escapeHtml(
          seo.publishedTime,
        )}" />`,
      );
    }

    if (seo.modifiedTime) {
      tags.push(
        `<meta property="article:modified_time" content="${escapeHtml(
          seo.modifiedTime,
        )}" />`,
      );
    }
  }

  if (process.env.VITE_GSC_VERIFICATION_TOKEN) {
    tags.push(
      `<meta name="google-site-verification" content="${escapeHtml(
        process.env.VITE_GSC_VERIFICATION_TOKEN,
      )}" />`,
    );
  }

  if (seo.schema) {
    tags.push(
      `<script type="application/ld+json" id="page-schema">${JSON.stringify(
        seo.schema,
      )}</script>`,
    );
  }

  return tags.map((tag) => `    ${tag}`).join("\n");
};

const baseTemplate = stripRouteHeadTags(template);

for (const route of prerenderRoutes) {
  const appHtml = render(route);
  const seo = getRouteSeo(route);
  const html = baseTemplate
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace("</head>", `${renderHead(seo)}\n  </head>`);
  const filePath = routeToFilePath(route);

  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, html, "utf8");
}

const buildDate = new Date().toISOString().slice(0, 10);
const getLastmod = (seo) => {
  const date = seo.modifiedTime ?? seo.publishedTime;

  return date && /^\d{4}-\d{2}-\d{2}/.test(date) ? date.slice(0, 10) : buildDate;
};
const sitemapRoutes = prerenderRoutes.filter(
  (route) => {
    const seo = getRouteSeo(route);
    return !/noindex/i.test(seo.robots ?? "") && !seo.canonicalPath;
  },
);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapRoutes
  .map((route) => {
    const seo = getRouteSeo(route);
    const imageUrl = normalizeUrl(seo.imageUrl);

    return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${getLastmod(seo)}</lastmod>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${escapeHtml(seo.imageAlt ?? seo.title)}</image:title>
    </image:image>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

await writeFile(join(distDir, "sitemap.xml"), sitemap, "utf8");

// Netlify: serve each prerendered page at its slash-less canonical address with HTTP 200
// (without these rules /products is redirected to /products/, which disagrees with the canonical URLs).
{
  const redirectsPath = join(distDir, "_redirects");
  let existing = "";
  try {
    existing = await readFile(redirectsPath, "utf8");
  } catch {
    existing = "";
  }
  const rewrites = prerenderRoutes
    .filter((route) => route !== "/" && route !== "/404")
    .map((route) => `${route}  ${route}/index.html  200`);
  const body = [existing.trimEnd(), "", "# Rewrites generated by scripts/prerender.mjs", ...rewrites, ""].join("\n");
  await writeFile(redirectsPath, body, "utf8");
}

await rm(join(distDir, "server"), { recursive: true, force: true });

console.log(`Prerendered ${prerenderRoutes.length} routes (${sitemapRoutes.length} in sitemap).`);
