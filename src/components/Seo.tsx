import { createContext, useContext, useEffect } from "react";
import { SITE_URL } from "@/data/siteData";

export type SeoProps = {
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
 * During prerendering (see src/entry-server.tsx) a collector is provided so the
 * page's head tags can be written into the static HTML. On the client this is
 * null and tags are applied to the live document in an effect instead.
 */
export const SeoCollectorContext = createContext<{ props?: SeoProps } | null>(
  null,
);

/**
 * Ensures the imageUrl is an absolute URL.
 * Vite asset imports produce data URIs or hashed paths — use a static fallback
 * when sharing on social media.
 */
export const resolveAbsoluteImageUrl = (imageUrl?: string): string => {
  if (!imageUrl) return `${SITE_URL}/logo.png`;
  // If it's already an absolute URL, use it
  if (imageUrl.startsWith("http")) return imageUrl;
  // Vite asset imports that start with "data:" won't work for OG
  if (imageUrl.startsWith("data:")) return `${SITE_URL}/logo.png`;
  // Relative or hashed paths — prepend site URL
  return `${SITE_URL}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
};

/**
 * The full set of head tags for a page. Shared by the client effect and the
 * prerender script so both produce identical output.
 */
export const buildHeadTags = ({
  title,
  description,
  path,
  imageUrl,
  imageWidth,
  imageHeight,
  type = "website",
  noindex = false,
}: SeoProps) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = resolveAbsoluteImageUrl(imageUrl);

  const named: Array<[string, string]> = [
    ["description", description],
    ["robots", noindex ? "noindex, nofollow" : "index, follow"],
    ["twitter:card", "summary_large_image"],
    ["twitter:title", title],
    ["twitter:description", description],
    ["twitter:image", ogImage],
  ];
  const property: Array<[string, string]> = [
    ["og:title", title],
    ["og:description", description],
    ["og:type", type],
    ["og:url", canonicalUrl],
    ["og:image", ogImage],
    ["og:site_name", "JM Masala Exports"],
    ["og:locale", "en_US"],
  ];
  if (imageWidth) property.push(["og:image:width", String(imageWidth)]);
  if (imageHeight) property.push(["og:image:height", String(imageHeight)]);
  property.push(["og:image:alt", `${title} — JM Masala Exports`]);

  return { title, canonicalUrl, named, property };
};

const Seo = (props: SeoProps) => {
  const { title, description, path, imageUrl, imageWidth, imageHeight, type, noindex, schema } = props;

  const collector = useContext(SeoCollectorContext);
  if (collector) {
    collector.props = props;
  }

  useEffect(() => {
    const tags = buildHeadTags(props);

    document.title = tags.title;
    tags.named.forEach(([name, content]) => upsertNamedMeta(name, content));
    tags.property.forEach(([name, content]) => upsertPropertyMeta(name, content));
    upsertCanonical(tags.canonicalUrl);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, imageUrl, imageWidth, imageHeight, type, noindex, schema]);

  return null;
};

export default Seo;
