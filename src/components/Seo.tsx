import { useEffect } from "react";
import { SITE_URL } from "@/data/siteData";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: "website" | "article" | "product";
  noindex?: boolean;
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

/**
 * Ensures the imageUrl is an absolute URL.
 * Vite asset imports produce data URIs or hashed paths — use a static fallback
 * when sharing on social media.
 */
const resolveAbsoluteImageUrl = (imageUrl?: string): string => {
  if (!imageUrl) return `${SITE_URL}/logo.png`;
  // If it's already an absolute URL, use it
  if (imageUrl.startsWith("http")) return imageUrl;
  // Vite asset imports that start with "data:" won't work for OG
  if (imageUrl.startsWith("data:")) return `${SITE_URL}/logo.png`;
  // Relative or hashed paths — prepend site URL
  return `${SITE_URL}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
};

const Seo = ({
  title,
  description,
  path,
  imageUrl,
  imageWidth,
  imageHeight,
  type = "website",
  noindex = false,
  schema,
}: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    const ogImage = resolveAbsoluteImageUrl(imageUrl);

    document.title = title;

    upsertNamedMeta("description", description);
    upsertNamedMeta("robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertPropertyMeta("og:title", title);
    upsertPropertyMeta("og:description", description);
    upsertPropertyMeta("og:type", type);
    upsertPropertyMeta("og:url", canonicalUrl);
    upsertPropertyMeta("og:image", ogImage);
    upsertPropertyMeta("og:site_name", "JM Masala Exports");
    upsertPropertyMeta("og:locale", "en_US");
    if (imageWidth) upsertPropertyMeta("og:image:width", String(imageWidth));
    if (imageHeight) upsertPropertyMeta("og:image:height", String(imageHeight));
    upsertPropertyMeta("og:image:alt", `${title} — JM Masala Exports`);
    upsertNamedMeta("twitter:card", "summary_large_image");
    upsertNamedMeta("twitter:title", title);
    upsertNamedMeta("twitter:description", description);
    upsertNamedMeta("twitter:image", ogImage);
    upsertCanonical(canonicalUrl);
    upsertSchema(schema);

    // GSC verification — skip if env var is unresolved (contains %VITE_)
    const gscToken = import.meta.env.VITE_GSC_VERIFICATION_TOKEN;
    if (gscToken && !gscToken.includes("%VITE_")) {
      upsertNamedMeta("google-site-verification", gscToken);
    }

    return () => {
      const activeSchema = document.getElementById("page-schema");
      if (activeSchema) {
        activeSchema.remove();
      }
    };
  }, [title, description, path, imageUrl, imageWidth, imageHeight, type, noindex, schema]);

  return null;
};

export default Seo;
