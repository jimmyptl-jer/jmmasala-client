import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./AppRoutes";
import {
  BLOG_POSTS,
  COMPANY,
  BLOG_SEO,
  ENTITY_ASSOCIATIONS,
  PAGE_SEO,
  PRODUCT_SEO,
  PRODUCTS,
  SITE_URL,
  SOURCING_REGIONS,
} from "@/data/siteData";
import { PRODUCT_MASTER_SEO } from "@/data/productMasterSeo";
import "./index.css";

type StaticSeo = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "product";
  imageUrl?: string;
  imageAlt?: string;
  keywords?: string[];
  /** Robots meta for prerender.mjs; omitted means "index, follow". */
  robots?: string;
  /** Canonical path when it differs from `path` (exact-duplicate pages). */
  canonicalPath?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const basePages = [
  "/",
  "/products",
  "/cold-pressed-oils",
  "/about-jm-masala",
  "/best-spice-exporter-india",
  "/best-cumin-exporter-india",
  "/unjha-cumin-seeds",
  "/unjha-fennel-seeds",
  "/cumin-seeds-specifications",
  "/spice-exporter-gujarat",
  "/quality-certifications",
  "/sourcing-network",
  "/spice-processing-manufacturing",
  "/private-label-spices",
  "/spice-packaging",
  "/export-destinations",
  "/export",
  "/export-markets",
  "/domestic-supply-india",
  "/contact",
  "/blog",
  "/teja-chilli-exporter-india",
  "/bird-eye-chilli-exporter-india",
  "/king-chilli-exporter-india",
  "/404",
];

export const prerenderRoutes = [
  ...basePages,
  ...SOURCING_REGIONS.map((region) => `/sourcing/${region.slug}`),
  ...PRODUCTS.map((product) => `/${product.slug}`),
  ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
];

const toAbsoluteUrl = (value: string) => {
  if (value.startsWith("http")) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
};

const buildBreadcrumbSchema = (items: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const baseOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: COMPANY.legalName,
  alternateName: [COMPANY.name, "JM Masala Unjha"],
  url: SITE_URL,
  email: COMPANY.email,
  telephone: COMPANY.phones,
  logo: `${SITE_URL}/JMMasala.png`,
  description:
    "JM Masala Trading LLP is an Indian spice manufacturer, processor, bulk supplier, private label partner and exporter based in Unjha, Gujarat. We source from APMC Unjha mandi networks and offer machine cleaning, Sortex optical grading, custom packaging and export documentation for B2B buyers.",
  foundingLocation: {
    "@type": "Place",
    name: "Unjha, Mehsana District, Gujarat, India",
  },
  knowsAbout: [
    ...ENTITY_ASSOCIATIONS,
    "Cumin Seeds (Jeera)",
    "Coriander Seeds (Dhania)",
    "Fennel Seeds (Saunf)",
    "Fenugreek Seeds (Methi)",
    "Ajwain Seeds (Carom)",
    "Mustard Seeds (Rai)",
    "Turmeric Fingers & Powder (Haldi)",
    "Dry Ginger (Sonth)",
    "Red Chilli Whole & Powder",
    "Psyllium Husk & Seeds (Isabgol)",
    "Sortex Optical Cleaning",
    "Spice Processing & Machine Cleaning",
    "Private Label Spice Manufacturing",
    "Retail Spice Packaging",
    "Bulk Spice Export from India",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "A/18, Main Line, APMC Market Yard",
    addressLocality: "Unjha",
    addressRegion: "Gujarat",
    postalCode: "384170",
    addressCountry: "IN",
  },
  contactPoint: COMPANY.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone,
    email: COMPANY.email,
    contactType: "sales",
    availableLanguage: ["English", "Hindi", "Gujarati"],
  })),
  // sameAs intentionally omitted until real third-party profiles are confirmed
  // by the owner (see OFFICIAL_PROFILES in siteData.ts).
};

const baseWebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  url: SITE_URL,
  publisher: {
    "@id": ORGANIZATION_ID,
  },
};

// Pages without bespoke schema: WebPage (AboutPage/ContactPage where it fits)
// that points at the single Organization @id, plus a BreadcrumbList.
const SIMPLE_PAGE_TYPES: Record<string, { type: string; name: string }> = {
  "/about-jm-masala": { type: "AboutPage", name: "About JM Masala" },
  "/contact": { type: "ContactPage", name: "Contact" },
  "/quality-certifications": { type: "WebPage", name: "Quality Control & Export Documents" },
  "/domestic-supply-india": { type: "WebPage", name: "Domestic Supply India" },
  "/sourcing-network": { type: "WebPage", name: "Sourcing Network" },
  "/export": { type: "WebPage", name: "Export Operations" },
  "/export-markets": { type: "WebPage", name: "Export Markets" },
};

const buildSimplePageSchema = (seo: StaticSeo) => {
  const meta = SIMPLE_PAGE_TYPES[seo.path];
  if (!meta) {
    return undefined;
  }
  const url = `${SITE_URL}${seo.canonicalPath ?? seo.path}`;
  return [
    baseOrganizationSchema,
    baseWebSiteSchema,
    {
      "@context": "https://schema.org",
      "@type": meta.type,
      "@id": `${url}#webpage`,
      name: seo.title,
      description: seo.description,
      url,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORGANIZATION_ID },
      publisher: { "@id": ORGANIZATION_ID },
    },
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: meta.name, path: seo.canonicalPath ?? seo.path },
    ]),
  ];
};

// Claims the owner has not confirmed must never reach meta tags or JSON-LD.
const UNVERIFIED_CLAIM =
  /haccp|iso[\s-]?22000|apeda|spices?\s+board|rcmc|fssai|\biec\b|nabl|certified|accredited|lab[\s-]?tested|\b\d+(\.\d+)?\s?MT\b|\b(20|40)\s?ft\b|\bFCL\b/i;

const sanitizeKeywords = (keywords?: string[]) =>
  keywords?.filter((keyword) => !UNVERIFIED_CLAIM.test(keyword));

const pageSeo: Record<string, StaticSeo> = {
  "/": {
    ...PAGE_SEO["/"],
    path: "/",
    imageUrl: "/JMMasala.png",
    keywords: [
      "Indian spice exporter",
      "spices exporter from India",
      "Unjha spice exporter",
      "bulk spice supplier India",
    ],
    imageAlt: "JM Masala Indian spice exporter logo",
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
    ],
  },
  "/products": {
    ...PAGE_SEO["/products"],
    path: "/products",
    imageUrl: "/JMMasala.png",
    keywords: [
      "Indian spice products",
      "bulk spices exporter India",
      "spice product catalogue India",
    ],
    imageAlt: "Export-grade Indian spices product catalogue from JM Masala",
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "JM Masala Product Portfolio",
        url: `${SITE_URL}/products`,
        description:
          "Indian spice portfolio from JM Masala Trading LLP.",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: PRODUCTS.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE_URL}/${product.slug}`,
            name: product.name,
          })),
        },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
      ]),
    ],
  },
  "/cold-pressed-oils": {
    ...PAGE_SEO["/cold-pressed-oils"],
    path: "/cold-pressed-oils",
    imageUrl: "/JMMasala.png",
    imageAlt: "Pure single-origin cold pressed oils from Unjha Gujarat by JM Masala",
    keywords: [
      "cold pressed oils manufacturer india",
      "cold pressed oils exporter",
      "sesame oil exporter india",
      "mustard oil supplier gujarat",
      "groundnut oil export india",
      "black seed oil manufacturer unjha",
      "cumin oil bulk supplier",
      "wood pressed oils india",
      "edible oils exporter gujarat",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "JM Masala Pure Cold Pressed Oils",
        url: `${SITE_URL}/cold-pressed-oils`,
        description:
          "Pure, cold-pressed single-origin oils from Unjha, Gujarat. Traditional wood/cold pressing below 49°C without chemical refining.",
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Cold Pressed Oils", path: "/cold-pressed-oils" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What cold-pressed oils does JM Masala manufacture in Unjha?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "JM Masala processes Sesame Oil, Mustard Oil, Groundnut Oil, Black Seed (Kalonji) Oil, Cumin Seed Oil, Fennel Seed Oil, and Flaxseed Oil from fresh local seed spice arrivals in Unjha, Gujarat.",
            },
          },
          {
            "@type": "Question",
            name: "Are JM Masala cold-pressed oils chemically refined or heated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. All oils are extracted mechanically below 49°C without chemical solvents, hexane, bleaching agents, or synthetic preservatives to preserve natural fatty acids and micronutrients.",
            },
          },
          {
            "@type": "Question",
            name: "What packaging formats are available for bulk oil export?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We provide retail dark amber glass bottles (100ml, 250ml, 500ml, 1 Litre) with custom private label branding, as well as 5L food-grade HDPE cans, 200L steel drums, and 1000L IBC totes for international industrial buyers.",
            },
          },
        ],
      },
    ],
  },
  "/about-jm-masala": {
    ...PAGE_SEO["/about-jm-masala"],
    path: "/about-jm-masala",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala Trading LLP from Unjha Gujarat",
  },
  "/best-spice-exporter-india": {
    ...PAGE_SEO["/best-spice-exporter-india"],
    path: "/best-spice-exporter-india",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala best spice exporter in India",
    keywords: [
      "best spice exporter in India",
      "spice exporter India",
      "Indian spices exporter",
      "bulk spice supplier India",
      "private label spice exporter India",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Best Spice Exporter in India",
        url: `${SITE_URL}/best-spice-exporter-india`,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: PRODUCTS.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.name,
            url: `${SITE_URL}/${product.slug}`,
          })),
        },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Best Spice Exporter India", path: "/best-spice-exporter-india" },
      ]),
    ],
  },
  "/best-cumin-exporter-india": {
    ...PAGE_SEO["/best-cumin-exporter-india"],
    path: "/best-cumin-exporter-india",
    type: "product",
    imageUrl:
      PRODUCTS.find((product) => product.slug === "cumin-seeds-exporter-india")
        ?.imageUrl ?? "/JMMasala.png",
    imageAlt: "Best cumin exporter in India from Unjha Gujarat",
    keywords: [
      "best cumin exporter in India",
      "cumin exporter India",
      "cumin seeds exporter India",
      "Unjha cumin exporter",
      "jeera exporter India",
      "bulk cumin supplier India",
      "Sortex cumin seeds exporter",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Cumin Seeds",
        description:
          PRODUCTS.find((product) => product.slug === "cumin-seeds-exporter-india")
            ?.description ?? "Export-grade cumin seeds from India.",
        image: toAbsoluteUrl(
          PRODUCTS.find((product) => product.slug === "cumin-seeds-exporter-india")
            ?.imageUrl ?? "/JMMasala.png",
        ),
        brand: { "@type": "Brand", name: COMPANY.name },
        category: "Spices",
        countryOfOrigin: "India",
        manufacturer: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/best-cumin-exporter-india`,
        additionalProperty:
          PRODUCTS.find((product) => product.slug === "cumin-seeds-exporter-india")
            ?.specs.map((spec) => ({
              "@type": "PropertyValue",
              name: spec.label,
              value: spec.value,
            })) ?? [],
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Best Cumin Exporter India", path: "/best-cumin-exporter-india" },
      ]),
    ],
  },
  "/unjha-cumin-seeds": {
    ...PAGE_SEO["/unjha-cumin-seeds"],
    path: "/unjha-cumin-seeds",
    imageUrl:
      PRODUCTS.find((product) => product.slug === "cumin-seeds-exporter-india")
        ?.imageUrl ?? "/JMMasala.png",
    imageAlt: "Unjha cumin seeds processing and export supply from Gujarat India",
    keywords: [
      "Unjha cumin seeds",
      "Unjha jeera market",
      "APMC Unjha cumin supplier",
      "cumin seeds origin Gujarat",
      "Unjha spice exporter",
      "Sortex cumin seeds Unjha",
      "Indian cumin seeds supplier",
      "cumin harvest calendar India",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "ItemPage",
        name: "Unjha Cumin Seeds Origin & Export Supply",
        url: `${SITE_URL}/unjha-cumin-seeds`,
        description:
          "Commercial and technical guide to sourcing Indian cumin seeds directly from the Unjha trading hub in Gujarat.",
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Cumin Seeds", path: "/cumin-seeds-exporter-india" },
        { name: "Unjha Cumin Seeds", path: "/unjha-cumin-seeds" },
      ]),
    ],
  },
  "/unjha-fennel-seeds": {
    ...PAGE_SEO["/unjha-fennel-seeds"],
    path: "/unjha-fennel-seeds",
    imageUrl:
      PRODUCTS.find((product) => product.slug === "fennel-seeds-exporter-india")
        ?.imageUrl ?? "/JMMasala.png",
    imageAlt: "Unjha fennel seeds processing and export supply from Gujarat India",
    keywords: [
      "Unjha fennel seeds",
      "fennel seeds exporter india",
      "Unjha saunf market",
      "APMC Unjha fennel supplier",
      "fennel seeds origin Gujarat",
      "bold green fennel seeds",
      "lakhnavi fennel seeds supplier",
      "variyali exporter gujarat",
      "Sortex fennel seeds Unjha",
      "Indian saunf wholesale",
      "fennel seeds hs code 09096129",
      "fennel seeds harvest calendar India",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "ItemPage",
        name: "Unjha Fennel Seeds Origin Sourcing & Export Supply",
        url: `${SITE_URL}/unjha-fennel-seeds`,
        description:
          "Commercial and technical guide to sourcing Indian fennel seeds (Saunf / Variyali) directly from the Unjha agricultural trade hub in Gujarat.",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why is Unjha, Gujarat considered the premier trading hub for Indian fennel seeds?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Unjha hosts one of Asia's largest Agricultural Produce Market Committees (APMC) dedicated to seed spices. Adjacent agricultural belts in northern Gujarat produce the world's most aromatic Foeniculum vulgare crops. Unjha acts as the central arrival, quality grading, and price-discovery mandi.",
            },
          },
          {
            "@type": "Question",
            name: "What are the primary varieties of Indian fennel seeds exported from Unjha?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "JM Masala exports three primary commercial varieties: (1) Abu Road / Gujarat Bold Green Fennel for tea blends and seasonings; (2) Lakhnavi Fennel (Choti Saunf) for luxury tabletop mouth fresheners and confectionery; and (3) Machine Cleaned FAQ Grade for industrial grinding and extraction.",
            },
          },
          {
            "@type": "Question",
            name: "When is the peak fresh fennel harvest arrival window in Gujarat?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fresh fennel harvest arrivals at the Unjha APMC mandi commence in late February and peak between March and April with optimal natural green hue and maximum trans-anethole essential oil.",
            },
          },
        ],
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Fennel Seeds", path: "/fennel-seeds-exporter-india" },
        { name: "Unjha Fennel Seeds", path: "/unjha-fennel-seeds" },
      ]),
    ],
  },
  "/cumin-seeds-specifications": {
    ...PAGE_SEO["/cumin-seeds-specifications"],
    path: "/cumin-seeds-specifications",
    imageUrl:
      PRODUCTS.find((product) => product.slug === "cumin-seeds-exporter-india")
        ?.imageUrl ?? "/JMMasala.png",
    imageAlt: "Indian cumin seeds technical specifications and export grade comparison",
    keywords: [
      "cumin seeds specifications",
      "jeera technical datasheet",
      "cumin seeds export grades",
      "Sortex 99.5 cumin specs",
      "cumin seeds volatile oil content",
      "cumin seeds moisture limit",
      "cumin seeds HS code 09093129",
      "cumin container loading capacity",
      "Indian cumin seeds COA",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "ItemPage",
        name: "Indian Cumin Seeds Technical Specifications",
        url: `${SITE_URL}/cumin-seeds-specifications`,
        description:
          "Commercial specifications datasheet for procurement of export-grade Indian cumin seeds from JM Masala.",
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Cumin Seeds", path: "/cumin-seeds-exporter-india" },
        { name: "Technical Specifications", path: "/cumin-seeds-specifications" },
      ]),
    ],
  },
  "/teja-chilli-exporter-india": {
    ...PAGE_SEO["/teja-chilli-exporter-india"],
    path: "/teja-chilli-exporter-india",
    imageUrl:
      PRODUCTS.find((product) => product.slug === "red-chilli-exporter-india")
        ?.imageUrl ?? "/JMMasala.png",
    imageAlt: "Export-grade Indian Teja red chilli S17 supplied by JM Masala",
    keywords: [
      "teja chilli exporter india",
      "teja chilli supplier",
      "teja dry red chilli",
      "teja chilli wholesale",
      "indian teja chilli",
      "teja chilli bulk supplier",
      "guntur teja chilli exporter",
      "s17 chilli supplier india",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Teja Chilli (S17)",
        description:
          "Indian Teja Red Chilli (S17) supplied in bulk by JM Masala Trading LLP for importers and food manufacturers. SHU and ASTA specifications on request.",
        image: toAbsoluteUrl(
          PRODUCTS.find((product) => product.slug === "red-chilli-exporter-india")
            ?.imageUrl ?? "/JMMasala.png",
        ),
        brand: { "@type": "Brand", name: COMPANY.name },
        category: "Spices",
        countryOfOrigin: "India",
        manufacturer: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/teja-chilli-exporter-india`,
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Red Chilli", path: "/red-chilli-exporter-india" },
        { name: "Teja Chilli", path: "/teja-chilli-exporter-india" },
      ]),
    ],
  },
  "/bird-eye-chilli-exporter-india": {
    ...PAGE_SEO["/bird-eye-chilli-exporter-india"],
    path: "/bird-eye-chilli-exporter-india",
    imageUrl:
      PRODUCTS.find((product) => product.slug === "red-chilli-exporter-india")
        ?.imageUrl ?? "/JMMasala.png",
    imageAlt: "Export-grade Indian Bird's Eye chilli Kanthari supplied by JM Masala",
    keywords: [
      "bird eye chilli exporter india",
      "bird's eye chilli supplier",
      "kanthari chilli export",
      "indian bird eye chilli",
      "capsicum frutescens supplier",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Bird's Eye Chilli (Kanthari)",
        description:
          "Indian Bird's Eye Chilli (Capsicum frutescens), small conical dried pods, supplied in bulk by JM Masala Trading LLP. SHU specifications on request.",
        image: toAbsoluteUrl(
          PRODUCTS.find((product) => product.slug === "red-chilli-exporter-india")
            ?.imageUrl ?? "/JMMasala.png",
        ),
        brand: { "@type": "Brand", name: COMPANY.name },
        category: "Spices",
        countryOfOrigin: "India",
        manufacturer: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/bird-eye-chilli-exporter-india`,
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Red Chilli", path: "/red-chilli-exporter-india" },
        { name: "Bird's Eye Chilli", path: "/bird-eye-chilli-exporter-india" },
      ]),
    ],
  },
  "/king-chilli-exporter-india": {
    ...PAGE_SEO["/king-chilli-exporter-india"],
    path: "/king-chilli-exporter-india",
    imageUrl:
      PRODUCTS.find((product) => product.slug === "red-chilli-exporter-india")
        ?.imageUrl ?? "/JMMasala.png",
    imageAlt: "Export-grade Indian King chilli Bhut Jolokia supplied by JM Masala",
    keywords: [
      "king chilli exporter india",
      "bhut jolokia supplier india",
      "ghost pepper bulk export",
      "naga chilli exporter",
      "indian king chilli wholesale",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "King Chilli (Bhut Jolokia)",
        description:
          "Indian King Chilli (Capsicum chinense, Bhut Jolokia) as whole dried pods and flakes, supplied in bulk by JM Masala Trading LLP. SHU specifications on request.",
        image: toAbsoluteUrl(
          PRODUCTS.find((product) => product.slug === "red-chilli-exporter-india")
            ?.imageUrl ?? "/JMMasala.png",
        ),
        brand: { "@type": "Brand", name: COMPANY.name },
        category: "Spices",
        countryOfOrigin: "India",
        manufacturer: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/king-chilli-exporter-india`,
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Red Chilli", path: "/red-chilli-exporter-india" },
        { name: "King Chilli", path: "/king-chilli-exporter-india" },
      ]),
    ],
  },
  "/spice-exporter-gujarat": {
    ...PAGE_SEO["/spice-exporter-gujarat"],
    path: "/spice-exporter-gujarat",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala spice exporter in Gujarat from Unjha",
    keywords: [
      "best spice exporter in Gujarat",
      "spice exporter Gujarat",
      "Unjha spice exporter",
      "cumin exporter Gujarat",
      "Gujarat spices supplier",
      "Indian spice exporter from Gujarat",
      "bulk spice supplier Gujarat",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Best Spice Exporter in Gujarat",
        url: `${SITE_URL}/spice-exporter-gujarat`,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: PRODUCTS.filter((product) =>
            ["Gujarat", "Unjha, Gujarat"].includes(product.origin),
          ).map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.name,
            url: `${SITE_URL}/${product.slug}`,
          })),
        },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Spice Exporter Gujarat", path: "/spice-exporter-gujarat" },
      ]),
    ],
  },
  "/quality-certifications": {
    ...PAGE_SEO["/quality-certifications"],
    path: "/quality-certifications",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala quality control and export documentation",
  },
  "/sourcing-network": {
    ...PAGE_SEO["/sourcing-network"],
    path: "/sourcing-network",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala sourcing network for Indian spices",
  },
  "/spice-processing-manufacturing": {
    ...PAGE_SEO["/spice-processing-manufacturing"],
    path: "/spice-processing-manufacturing",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala spice processing and manufacturing India",
    keywords: [
      "spice processing India",
      "spice manufacturer India",
      "Sortex cleaned cumin India",
      "machine cleaned spices India",
      "private label spice processing",
      "bulk spice processor Gujarat",
      "Indian spice processor exporter",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/spice-processing-manufacturing#service`,
        name: "Spice Processing and Manufacturing",
        provider: { "@id": `${SITE_URL}/#organization` },
        serviceType:
          "Machine cleaning, Sortex cleaning, destoning, grading, grinding, packaging, private label spice manufacturing, and export support",
        description:
          "Indian spice processing service for global B2B buyers covering raw material sourcing, machine cleaning, Sortex optical sorting, grading, grinding, quality checks, packing, and export documentation.",
        url: `${SITE_URL}/spice-processing-manufacturing`,
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        {
          name: "Spice Processing and Manufacturing",
          path: "/spice-processing-manufacturing",
        },
      ]),
    ],
  },
  "/domestic-supply-india": {
    ...PAGE_SEO["/domestic-supply-india"],
    path: "/domestic-supply-india",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala domestic spice supply India",
  },
  "/export-destinations": {
    ...PAGE_SEO["/export-destinations"],
    path: "/export-destinations",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala Indian spices export operations and container logistics",
    keywords: [
      "Indian spices export",
      "spice exporter Mundra port",
      "spice export documentation India",
      "bulk spice container loading",
      "Sortex spices export GCC Europe",
      "JM Masala export markets",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}/export-destinations#service`,
        name: "Indian Spices Export Operations & Logistics",
        provider: { "@id": `${SITE_URL}/#organization` },
        serviceType: "Commercial Agricultural Export & Sea-Freight Logistics",
        description:
          "Export handling for Indian agricultural spices from APMC Unjha mandi processing to container loading at Mundra Port, with export documentation.",
        url: `${SITE_URL}/export-destinations`,
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Export Operations", path: "/export-destinations" },
      ]),
    ],
  },
  "/export": {
    ...PAGE_SEO["/export"],
    path: "/export",
    canonicalPath: "/export-destinations",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala Indian spices export operations and container logistics",
  },
  "/export-markets": {
    ...PAGE_SEO["/export-markets"],
    path: "/export-markets",
    canonicalPath: "/export-destinations",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala Indian spices export markets",
  },
  "/404": {
    ...PAGE_SEO["/404"],
    path: "/404",
    robots: "noindex, follow",
    imageUrl: "/JMMasala.png",
  },
  "/contact": {
    ...PAGE_SEO["/contact"],
    path: "/contact",
    imageUrl: "/JMMasala.png",
    imageAlt: "Contact JM Masala Trading LLP for spice export inquiries",
  },
  "/blog": {
    ...PAGE_SEO["/blog"],
    path: "/blog",
    type: "article",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala spice export buyer guides",
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "JM Masala Blog",
        url: `${SITE_URL}/blog`,
        description:
          "Insights on Indian spice exports, sourcing, compliance, and buyer requirements.",
        blogPost: BLOG_POSTS.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.date,
        })),
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    ],
  },
  "/private-label-spices": {
    ...PAGE_SEO["/private-label-spices"],
    path: "/private-label-spices",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala private label spice manufacturing India",
    keywords: [
      "private label spices India",
      "private label spice manufacturer India",
      "custom spice packaging India",
      "retail spice manufacturer India",
      "private label cumin manufacturer",
      "private label Indian spices exporter",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Private Label Spice Manufacturing",
        provider: { "@id": `${SITE_URL}/#organization` },
        serviceType: "Private Label Manufacturing",
        description:
          "Custom private-label spice manufacturing including product selection, processing, branded packaging, and export for international B2B buyers.",
        url: `${SITE_URL}/private-label-spices`,
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Private Label Spices", path: "/private-label-spices" },
      ]),
    ],
  },
  "/spice-packaging": {
    ...PAGE_SEO["/spice-packaging"],
    path: "/spice-packaging",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala spice packaging solutions India",
    keywords: [
      "spice packaging India",
      "custom spice packaging",
      "spice packaging company India",
      "export spice packing",
      "retail spice packaging India",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Spice Packaging Solutions",
        provider: { "@id": `${SITE_URL}/#organization` },
        serviceType: "Custom Packaging",
        description:
          "Custom spice packaging for bulk export, retail consumer, private-label, and food-service channels including pouches, bags, jars, and branded packs.",
        url: `${SITE_URL}/spice-packaging`,
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Spice Packaging", path: "/spice-packaging" },
      ]),
    ],
  },
};

const buildProductSeo = (path: string): StaticSeo | null => {
  const product = PRODUCTS.find((item) => path === `/${item.slug}`);

  if (!product) {
    return null;
  }

  const masterSeo = PRODUCT_MASTER_SEO[product.slug];
  const productUrl = `${SITE_URL}/${product.slug}`;
  const absoluteImageUrl = toAbsoluteUrl(product.imageUrl);
  const override = PRODUCT_SEO[product.slug];
  const title =
    override?.title ?? masterSeo?.seo.title ?? `${product.name} Exporter India | JM Masala`;
  const description =
    override?.description ?? masterSeo?.seo.description ?? product.description;
  const keywords = sanitizeKeywords(masterSeo?.seo.secondaryKeywords) ?? [
    `${product.name} exporter India`,
    `${product.name} supplier India`,
    `${product.name} bulk supplier`,
    `${product.name} export grade`,
    `${product.name} manufacturer Gujarat`,
    `${product.name} wholesale Unjha`,
    "Indian spice exporter",
    "JM Masala exports",
    "JM Masala Trading LLP",
  ];

  // FAQ entries that assert unconfirmed certifications, accreditations,
  // container tonnages or shipping terms are kept out of the JSON-LD.
  const faqItems = (masterSeo?.content.faqs ?? []).filter(
    (item) => !UNVERIFIED_CLAIM.test(`${item.question} ${item.answer}`),
  );

  return {
    title,
    description,
    path,
    type: "product",
    imageUrl: product.imageUrl,
    imageAlt: `${product.name} export-grade spice supplied by JM Masala`,
    keywords,
    schema: [
      baseOrganizationSchema,
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${productUrl}#product`,
        name: product.name,
        description,
        image: [absoluteImageUrl],
        brand: {
          "@type": "Brand",
          name: COMPANY.name,
        },
        category: "Food, Beverages & Tobacco > Food Items > Seasonings & Spices",
        countryOfOrigin: {
          "@type": "Country",
          name: "India",
        },
        manufacturer: {
          "@id": `${SITE_URL}/#organization`,
        },
        url: productUrl,
      },
      ...(faqItems.length > 0
        ? [
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]
        : []),
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: product.name, path: `/${product.slug}` },
      ]),
    ],
  };
};

const buildSourcingRegionSeo = (path: string): StaticSeo | null => {
  const slug = path.replace("/sourcing/", "");
  const region = SOURCING_REGIONS.find((item) => item.slug === slug);

  if (!region) {
    return null;
  }

  return {
    title: region.seoTitle,
    description: region.seoDescription,
    path,
    imageUrl: "/JMMasala.png",
    imageAlt: `${region.name} spice sourcing by JM Masala`,
    keywords: [
      `${region.name} spice supplier`,
      `${region.name} spice sourcing`,
      `${region.name} agricultural products`,
      "Indian spice sourcing company",
      "spice sourcing from India",
      "bulk spice sourcing India",
      "private label spice sourcing India",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: region.title,
        url: `${SITE_URL}${path}`,
        description: region.description,
        about: [
          {
            "@type": "Place",
            name: region.name,
          },
          {
            "@type": "Thing",
            name: "Indian spice sourcing",
          },
        ],
        provider: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${region.name} Spice and Agro Product Sourcing`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: region.name,
        serviceType:
          "Indian spice sourcing, agro product sourcing, processing, packing, private label, and export support",
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Sourcing Network", path: "/sourcing-network" },
        { name: region.name, path },
      ]),
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
    title: BLOG_SEO[post.slug]?.title ?? `${post.title} | JM Masala`,
    description: BLOG_SEO[post.slug]?.description ?? post.excerpt,
    path,
    type: "article",
    imageUrl,
    imageAlt: `${post.title} - JM Masala buyer guide`,
    keywords: sanitizeKeywords(post.keywords),
    publishedTime: post.date,
    modifiedTime: post.date,
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        image: toAbsoluteUrl(imageUrl),
        keywords: (sanitizeKeywords(post.keywords) ?? []).join(", "),
        author: {
          "@type": "Organization",
          "@id": ORGANIZATION_ID,
          name: COMPANY.legalName,
        },
        publisher: {
          "@id": ORGANIZATION_ID,
        },
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
    ],
  };
};

export const getRouteSeo = (path: string): StaticSeo => {
  const seo: StaticSeo = pageSeo[path] ??
    buildSourcingRegionSeo(path) ??
    buildProductSeo(path) ??
    buildBlogSeo(path) ?? {
      title: COMPANY.legalName,
      description:
        "Indian spice exporter from Unjha, Gujarat supplying spices with custom packing and export documentation.",
      path,
      imageUrl: "/JMMasala.png",
    };

  return {
    ...seo,
    keywords: sanitizeKeywords(seo.keywords),
    schema: seo.schema ?? buildSimplePageSchema(seo),
  };
};

export const render = (path: string) =>
  renderToString(
    <StrictMode>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </StrictMode>,
  );
