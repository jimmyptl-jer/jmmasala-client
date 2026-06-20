import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./AppRoutes";
import {
  BLOG_POSTS,
  COMPANY,
  PRODUCTS,
  SITE_URL,
  TRUST_BADGES,
} from "@/data/siteData";
import "./index.css";

type StaticSeo = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "product";
  imageUrl?: string;
  keywords?: string[];
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const basePages = [
  "/",
  "/products",
  "/cold-pressed-oils",
  "/about-jm-masala",
  "/quality-certifications",
  "/sourcing-network",
  "/domestic-supply-india",
  "/contact",
  "/blog",
];

export const prerenderRoutes = [
  ...basePages,
  ...PRODUCTS.map((product) => `/${product.slug}`),
  ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
];

const toAbsoluteUrl = (value: string) => {
  if (value.startsWith("http")) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
};

const baseOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  url: SITE_URL,
  email: COMPANY.email,
  logo: `${SITE_URL}/JMMasala.png`,
  description:
    "HACCP certified Indian spice exporter from Unjha, Gujarat supplying export-grade spices with custom packing and documentation.",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.addressLine,
    addressLocality: "Unjha",
    addressRegion: "Gujarat",
    postalCode: "384170",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: COMPANY.phones[0],
    email: COMPANY.email,
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Hindi", "Gujarati"],
  },
  sameAs: [`https://${COMPANY.website}`],
};

const pageSeo: Record<string, StaticSeo> = {
  "/": {
    title:
      "Indian Spice Exporter from Unjha Gujarat | Cumin, Coriander, Turmeric | JM Masala",
    description:
      "HACCP-certified spice exporter from Unjha, Gujarat. Cumin, coriander, turmeric and 10+ spices with custom packing, FOB/CIF, and global shipping.",
    path: "/",
    imageUrl: "/JMMasala.png",
    keywords: [
      "Indian spice exporter",
      "spices exporter from India",
      "HACCP certified spice exporter Gujarat",
      "Unjha spice exporter",
      "bulk spice supplier India",
    ],
    schema: [
      baseOrganizationSchema,
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: COMPANY.legalName,
        url: SITE_URL,
      },
      {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "JM Masala Export Spice Portfolio",
        itemListElement: PRODUCTS.map((product) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: product.name,
            url: `${SITE_URL}/${product.slug}`,
          },
        })),
      },
    ],
  },
  "/products": {
    title: "Indian Spice Products for Export | JM Masala",
    description:
      "Browse export-grade Indian spices from JM Masala including cumin, coriander, fennel, turmeric, chilli, sesame, psyllium, black pepper, and cardamom.",
    path: "/products",
    imageUrl: "/JMMasala.png",
    keywords: [
      "Indian spice products",
      "bulk spices exporter India",
      "spice product catalogue India",
    ],
  },
  "/cold-pressed-oils": {
    title: "Cold Pressed Oils from India | JM Masala",
    description:
      "Cold pressed edible oil supply from JM Masala with buyer-specific packing and export documentation support.",
    path: "/cold-pressed-oils",
    imageUrl: "/JMMasala.png",
  },
  "/about-jm-masala": {
    title: "About JM Masala | Spice Exporter from Unjha Gujarat",
    description:
      "Learn about JM Masala Exports, a two-generation spice business based in Unjha, Gujarat serving global spice importers.",
    path: "/about-jm-masala",
    imageUrl: "/JMMasala.png",
  },
  "/quality-certifications": {
    title: "Quality and Certifications | HACCP Spice Exporter India",
    description:
      "JM Masala supports spice buyers with HACCP-aligned quality systems, ISO 22000, APEDA, Spice Board, FSSAI, testing, and documentation.",
    path: "/quality-certifications",
    imageUrl: "/JMMasala.png",
    keywords: TRUST_BADGES,
  },
  "/sourcing-network": {
    title: "Sourcing Network | Unjha Spice Export Supply Chain",
    description:
      "JM Masala sources spices from Unjha, Gujarat and selected South India channels with cleaning, grading, packing, and export dispatch support.",
    path: "/sourcing-network",
    imageUrl: "/JMMasala.png",
  },
  "/domestic-supply-india": {
    title: "Domestic Spice Supply India | JM Masala",
    description:
      "Domestic wholesale spice supply for Indian distributors, processors, retailers, and institutional buyers.",
    path: "/domestic-supply-india",
    imageUrl: "/JMMasala.png",
  },
  "/contact": {
    title: "Contact JM Masala Exports | Request Spice Quote",
    description:
      "Contact JM Masala Exports for spice specifications, export packing, MOQ, samples, pricing, and shipment documentation.",
    path: "/contact",
    imageUrl: "/JMMasala.png",
  },
  "/blog": {
    title: "Spice Export Buyer Guides | JM Masala Blog",
    description:
      "Buyer-focused guides on importing spices from India, Unjha cumin sourcing, HACCP, psyllium, and export-grade specifications.",
    path: "/blog",
    type: "article",
    imageUrl: "/JMMasala.png",
  },
};

const buildProductSeo = (path: string): StaticSeo | null => {
  const product = PRODUCTS.find((item) => path === `/${item.slug}`);

  if (!product) {
    return null;
  }

  return {
    title: `${product.name} Exporter India | Export Grade | JM Masala`,
    description: product.description,
    path,
    type: "product",
    imageUrl: product.imageUrl,
    keywords: [
      `${product.name} exporter India`,
      `${product.name} supplier India`,
      `${product.name} bulk supplier`,
      `${product.name} export grade`,
      "Indian spice exporter",
      "JM Masala exports",
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: toAbsoluteUrl(product.imageUrl),
        brand: { "@type": "Brand", name: COMPANY.name },
        category: "Spices",
        countryOfOrigin: "India",
        manufacturer: baseOrganizationSchema,
        url: `${SITE_URL}/${product.slug}`,
        additionalProperty: product.specs.map((spec) => ({
          "@type": "PropertyValue",
          name: spec.label,
          value: spec.value,
        })),
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/${product.slug}`,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: `${SITE_URL}/products`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: `${SITE_URL}/${product.slug}`,
          },
        ],
      },
    ],
  };
};

const buildBlogSeo = (path: string): StaticSeo | null => {
  const slug = path.replace("/blog/", "");
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return null;
  }

  const imageUrl =
    PRODUCTS.find((product) => post.relatedProductSlugs.includes(product.slug))
      ?.imageUrl ?? "/JMMasala.png";

  return {
    title: `${post.title} | JM Masala`,
    description: post.excerpt,
    path,
    type: "article",
    imageUrl,
    keywords: post.keywords,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        image: toAbsoluteUrl(imageUrl),
        keywords: post.keywords.join(", "),
        author: {
          "@type": "Organization",
          name: COMPANY.legalName,
        },
        publisher: {
          "@type": "Organization",
          name: COMPANY.legalName,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/JMMasala.png`,
          },
        },
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };
};

export const getRouteSeo = (path: string): StaticSeo => {
  return (
    pageSeo[path] ??
    buildProductSeo(path) ??
    buildBlogSeo(path) ?? {
      title: "JM Masala Exports",
      description:
        "Indian spice exporter from Unjha, Gujarat supplying export-grade spices with custom packing and documentation.",
      path,
      imageUrl: "/JMMasala.png",
    }
  );
};

export const render = (path: string) =>
  renderToString(
    <StrictMode>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </StrictMode>,
  );
