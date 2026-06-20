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

const normalizeUrl = (value) => {
  if (!value) {
    return `${SITE_URL}/JMMasala.png`;
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

  return join(distDir, route.replace(/^\//, ""), "index.html");
};

const stripRouteHeadTags = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(
      /<meta\s+name=["'](?:description|keywords|robots|twitter:card|twitter:title|twitter:description|twitter:image|twitter:site|google-site-verification)["'][^>]*>\s*/gi,
      "",
    )
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']alternate["'][^>]*>\s*/gi, "")
    .replace(
      /<script\s+type=["']application\/ld\+json["']\s+id=["']page-schema["'][\s\S]*?<\/script>\s*/gi,
      "",
    );

const renderHead = (seo) => {
  const canonicalUrl = `${SITE_URL}${seo.path}`;
  const imageUrl = normalizeUrl(seo.imageUrl);
  const type = seo.type ?? "website";
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:type" content="${escapeHtml(type)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
    `<meta property="og:site_name" content="JM Masala" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
    `<meta name="twitter:site" content="@jmmasalaexports" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<link rel="alternate" hreflang="en-IN" href="${escapeHtml(canonicalUrl)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${escapeHtml(canonicalUrl)}" />`,
  ];

  if (seo.keywords?.length) {
    tags.splice(
      2,
      0,
      `<meta name="keywords" content="${escapeHtml(seo.keywords.join(", "))}" />`,
    );
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

const sitemapLastmod = new Date().toISOString().slice(0, 10);
const getPriority = (route) => {
  if (route === "/") {
    return "1.0";
  }

  if (route === "/products") {
    return "0.9";
  }

  if (route.startsWith("/blog/")) {
    return "0.7";
  }

  return "0.8";
};
const getChangefreq = (route) => (route.startsWith("/blog/") ? "yearly" : "monthly");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderRoutes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${sitemapLastmod}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

await writeFile(join(distDir, "sitemap.xml"), sitemap, "utf8");

await rm(join(distDir, "server"), { recursive: true, force: true });

console.log(`Prerendered ${prerenderRoutes.length} routes.`);
