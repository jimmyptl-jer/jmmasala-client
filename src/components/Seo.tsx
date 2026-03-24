import { useEffect } from "react";
import { SITE_URL } from "@/data/siteData";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
  type?: "website" | "article" | "product";
  keywords?: string[];
  robots?: string;
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

const Seo = ({
  title,
  description,
  path,
  imageUrl,
  type = "website",
  keywords,
  robots = "index, follow",
  schema,
}: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    const ogImage = imageUrl
      ? imageUrl.startsWith("http")
        ? imageUrl
        : `${SITE_URL}${imageUrl}`
      : `${SITE_URL}/JMMasala.png`;

    document.title = title;

    upsertNamedMeta("description", description);
    if (keywords?.length) {
      upsertNamedMeta("keywords", keywords.join(", "));
    }
    upsertNamedMeta("robots", robots);
    upsertPropertyMeta("og:title", title);
    upsertPropertyMeta("og:description", description);
    upsertPropertyMeta("og:type", type);
    upsertPropertyMeta("og:url", canonicalUrl);
    upsertPropertyMeta("og:image", ogImage);
    upsertPropertyMeta("og:locale", "en_IN");
    upsertPropertyMeta("og:site_name", "JM Masala");
    upsertNamedMeta("twitter:card", "summary_large_image");
    upsertNamedMeta("twitter:title", title);
    upsertNamedMeta("twitter:description", description);
    upsertNamedMeta("twitter:image", ogImage);
    upsertNamedMeta("twitter:site", "@jmmasalaexports");
    upsertCanonical(canonicalUrl);
    upsertSchema(schema);

    const gscToken = import.meta.env.VITE_GSC_VERIFICATION_TOKEN;
    if (gscToken) {
      upsertNamedMeta("google-site-verification", gscToken);
    }

    return () => {
      const activeSchema = document.getElementById("page-schema");
      if (activeSchema) {
        activeSchema.remove();
      }
    };
  }, [title, description, path, imageUrl, type, keywords, robots, schema]);

  return null;
};

export default Seo;
