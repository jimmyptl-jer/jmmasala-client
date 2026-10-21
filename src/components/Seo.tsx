import { useEffect } from "react";
import { COMPANY, SITE_URL } from "@/data/siteData";

const DEFAULT_ROBOTS = "index, follow, max-image-preview:large";
const NOINDEX_ROBOTS = "noindex, follow";
const DEFAULT_OG_IMAGE = "/og-default.jpg";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
  imageAlt?: string;
  type?: "website" | "article" | "product";
  keywords?: string[];
  robots?: string;
  noindex?: boolean;
  /** Canonical path when it differs from `path` (exact-duplicate pages). */
  canonicalPath?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const upsertNamedMeta = (name: string, content: string) => {
  let tag = document.head.querySelector(
    `meta[name="${name}"]`,
  ) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const upsertPropertyMeta = (property: string, content: string) => {
  let tag = document.head.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const removePropertyMeta = (property: string) => {
  const tag = document.head.querySelector(`meta[property="${property}"]`);
  if (tag) {
    tag.remove();
  }
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const upsertAlternate = (hrefLang: string, href: string) => {
  let link = document.head.querySelector(
    `link[rel="alternate"][hreflang="${hrefLang}"]`,
  ) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", hrefLang);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const upsertSchema = (schema?: Record<string, unknown> | Array<Record<string, unknown>>) => {
  const existing = document.getElementById("page-schema");
  if (!schema) {
    if (existing) {
      existing.remove();
    }
    return;
  }

  let script = existing as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "page-schema";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

// The prerender step writes a sanitised #page-schema (unverified claims are
// filtered in entry-server.tsx). On first hydration that script is the single
// source of truth for the page, so the runtime schema must not replace it.
let schemaChecked = false;
let prerenderedSchemaPath: string | null = null;

const Seo = ({
  title,
  description,
  path,
  imageUrl,
  imageAlt = "JM Masala export-grade Indian spices",
  type = "website",
  keywords,
  robots,
  noindex = false,
  canonicalPath,
  publishedTime,
  modifiedTime,
  schema,
}: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${canonicalPath ?? path}`;
    const ogImage = imageUrl
      ? imageUrl.startsWith("http")
        ? imageUrl
        : `${SITE_URL}${imageUrl}`
      : `${SITE_URL}${DEFAULT_OG_IMAGE}`;

    document.title = title;

    upsertNamedMeta("description", description);
    upsertNamedMeta("author", COMPANY.legalName);
    if (keywords?.length) {
      upsertNamedMeta("keywords", keywords.join(", "));
    }
    upsertNamedMeta(
      "robots",
      robots ?? (noindex ? NOINDEX_ROBOTS : DEFAULT_ROBOTS),
    );
    upsertPropertyMeta("og:title", title);
    upsertPropertyMeta("og:description", description);
    upsertPropertyMeta("og:type", type);
    upsertPropertyMeta("og:url", canonicalUrl);
    upsertPropertyMeta("og:image", ogImage);
    upsertPropertyMeta("og:image:alt", imageAlt);
    upsertPropertyMeta("og:image:width", "1200");
    upsertPropertyMeta("og:image:height", "630");
    upsertPropertyMeta("og:locale", "en_IN");
    upsertPropertyMeta("og:site_name", "JM Masala");
    if (type === "article") {
      if (publishedTime) {
        upsertPropertyMeta("article:published_time", publishedTime);
      } else {
        removePropertyMeta("article:published_time");
      }
      if (modifiedTime) {
        upsertPropertyMeta("article:modified_time", modifiedTime);
      } else {
        removePropertyMeta("article:modified_time");
      }
    } else {
      removePropertyMeta("article:published_time");
      removePropertyMeta("article:modified_time");
    }
    upsertNamedMeta("twitter:card", "summary_large_image");
    upsertNamedMeta("twitter:title", title);
    upsertNamedMeta("twitter:description", description);
    upsertNamedMeta("twitter:image", ogImage);
    upsertNamedMeta("twitter:image:alt", imageAlt);
    upsertNamedMeta("twitter:site", "@jmmasalaexports");
    upsertCanonical(canonicalUrl);
    document.head
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((link) => {
        const lang = link.getAttribute("hreflang");
        if (lang !== "en" && lang !== "x-default") {
          link.remove();
        }
      });
    upsertAlternate("en", canonicalUrl);
    upsertAlternate("x-default", canonicalUrl);
    if (!schemaChecked) {
      schemaChecked = true;
      if (document.getElementById("page-schema")) {
        prerenderedSchemaPath = path;
      }
    }
    if (prerenderedSchemaPath !== null && prerenderedSchemaPath !== path) {
      prerenderedSchemaPath = null;
    }
    if (prerenderedSchemaPath !== path) {
      upsertSchema(schema);
    }

    const gscToken = import.meta.env.VITE_GSC_VERIFICATION_TOKEN;
    if (gscToken) {
      upsertNamedMeta("google-site-verification", gscToken);
    }

    return () => {
      if (prerenderedSchemaPath === path) {
        return;
      }
      const activeSchema = document.getElementById("page-schema");
      if (activeSchema) {
        activeSchema.remove();
      }
    };
  }, [
    title,
    description,
    path,
    imageUrl,
    imageAlt,
    type,
    keywords,
    robots,
    noindex,
    canonicalPath,
    publishedTime,
    modifiedTime,
    schema,
  ]);

  return null;
};

export default Seo;
