import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./AppRoutes";
import {
  BLOG_POSTS,
  COMPANY,
  ENTITY_ASSOCIATIONS,
  OFFICIAL_PROFILES,
  PROCESSING_CAPABILITIES,
  PRODUCTS,
  SITE_URL,
  SOURCING_REGIONS,
  TRUST_BADGES,
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
  "/domestic-supply-india",
  "/contact",
  "/blog",
  "/teja-chilli-exporter-india",
  "/bird-eye-chilli-exporter-india",
  "/king-chilli-exporter-india",
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

const baseOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY.legalName,
  alternateName: [COMPANY.name, "JM Masala Exports", "JM Masala Unjha"],
  url: SITE_URL,
  email: COMPANY.email,
  logo: `${SITE_URL}/JMMasala.png`,
  description:
    "JM Masala Trading LLP is an Indian spice manufacturer, processor, bulk supplier, private label partner and exporter based in Unjha, Gujarat. We source directly from APMC Unjha mandi networks, offering machine cleaning, Sortex optical grading, cold milling, custom retail and bulk packaging, and full export documentation for global B2B buyers.",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Indian Spices & Value-Added Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Whole Spices",
        description: "Sortex and machine cleaned whole Indian spices",
      },
      {
        "@type": "OfferCatalog",
        name: "Spice Powders",
        description: "Pure cold-milled and micro-ground spice powders",
      },
      {
        "@type": "OfferCatalog",
        name: "Private Label Spice Manufacturing",
        description:
          "Custom branded retail packaging, zipper pouches, jars, and institutional packs",
      },
      {
        "@type": "OfferCatalog",
        name: "Spice Processing & Sortex Cleaning",
        description: "Cleaning, destoning, gravity separation, and Sortex grading",
      },
    ],
  },
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
  sameAs: OFFICIAL_PROFILES,
};

const baseWebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  url: SITE_URL,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/products?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const pageSeo: Record<string, StaticSeo> = {
  "/": {
    title:
      "JM Masala | Indian Spices Manufacturer, Processor & Exporter",
    description:
      "JM Masala Trading LLP is an Indian spices manufacturer, processor and exporter supplying premium cumin, coriander, fennel, fenugreek, ajwain, mustard, turmeric, dry ginger, red chilli and psyllium worldwide.",
    path: "/",
    imageUrl: "/JMMasala.png",
    keywords: [
      "Indian spice exporter",
      "spices exporter from India",
      "HACCP certified spice exporter Gujarat",
      "Unjha spice exporter",
      "bulk spice supplier India",
    ],
    imageAlt: "JM Masala Indian spice exporter logo",
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
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
          "Export-grade Indian spice portfolio from JM Masala Exports.",
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
    title: "Cold Pressed Oils Manufacturer & Exporter India | JM Masala",
    description:
      "Manufacturer and bulk exporter of 100% pure cold-pressed oils from Unjha, Gujarat. Sesame, mustard, groundnut, black seed, cumin, and fennel oils in retail bottles and bulk FCL.",
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
    title: "About JM Masala | Spice Exporter from Unjha Gujarat",
    description:
      "Learn about JM Masala Exports, a three-generation spice business based in Unjha, Gujarat serving global spice importers.",
    path: "/about-jm-masala",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala Exports from Unjha Gujarat",
  },
  "/best-spice-exporter-india": {
    title: "Best Spice Exporter in India | Bulk Indian Spices | JM Masala",
    description:
      "JM Masala is an Indian spice exporter supplying cumin, coriander, fennel, fenugreek, sesame, psyllium, turmeric, chilli, pepper, cardamom and more with packing, testing, and export documentation.",
    path: "/best-spice-exporter-india",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala best spice exporter in India",
    keywords: [
      "best spice exporter in India",
      "spice exporter India",
      "Indian spices exporter",
      "bulk spice supplier India",
      "HACCP spice exporter India",
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
    title: "Best Cumin Exporter in India | Unjha Cumin Seeds | JM Masala",
    description:
      "JM Masala exports cumin seeds from Unjha, Gujarat with 98%, 99%, and 99.5% purity options, Sortex cleaning, lab testing, packing, and export documentation for global buyers.",
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
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/best-cumin-exporter-india`,
        },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Best Cumin Exporter India", path: "/best-cumin-exporter-india" },
      ]),
    ],
  },
  "/unjha-cumin-seeds": {
    title: "Unjha Cumin Seeds | APMC Mandi Sourcing & Export Supply | JM Masala",
    description:
      "Learn about Unjha cumin seeds sourcing, APMC market yard arrival dynamics, Sortex optical grading, harvest calendar, and export container logistics from Unjha, Gujarat.",
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
    title: "Unjha Fennel Seeds Exporter India | Indian Saunf | JM Masala",
    description:
      "Comprehensive guide to Unjha fennel seeds (Saunf / Variyali) export supply from Gujarat. Bold Green, Lakhnavi, Sortex 99.5%, EU MRL testing, FOB Mundra.",
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
          {
            "@type": "Question",
            name: "What container loading capacity and packaging options are available for fennel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A standard 20ft container carries 12.0 to 13.5 MT in loose bags (~10.5-11.0 MT palletized). A 40ft container carries 24.0 to 26.0 MT. Packed in 25kg/50kg PP bags with inner liner, paper bags, or retail pouches.",
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
    title: "Cumin Seeds Technical Specifications | Export Grades & COA Standards | JM Masala",
    description:
      "Comprehensive technical datasheet for Indian cumin seeds (jeera): purity levels, volatile oil, moisture limits, microbiological standards, container stuffing, and commercial export grades.",
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
          "Commercial and laboratory specifications datasheet for procurement of export-grade Indian cumin seeds from JM Masala.",
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
    title: "Teja Chilli Exporter from India | S17 Red Chilli | JM Masala",
    description:
      "JM Masala supplies Indian Teja red chilli (S17) for bulk export. High heat 50,000–85,000 SHU, 50–70 ASTA color, whole & stemless. Request lab specs & quote.",
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
          "Export-grade Indian Teja Red Chilli (S17) from Guntur, Andhra Pradesh. High pungency 50,000–85,000 SHU, 50–70 ASTA color, whole and stemless, supplied in bulk FCL by JM Masala.",
        image: toAbsoluteUrl(
          PRODUCTS.find((product) => product.slug === "red-chilli-exporter-india")
            ?.imageUrl ?? "/JMMasala.png",
        ),
        brand: { "@type": "Brand", name: COMPANY.name },
        category: "Spices",
        countryOfOrigin: "India",
        manufacturer: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/teja-chilli-exporter-india`,
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/teja-chilli-exporter-india`,
        },
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
    title: "Bird's Eye Chilli Exporter from India | Kanthari Chilli | JM Masala",
    description:
      "JM Masala supplies authentic Indian Bird's Eye chilli (Kanthari) for bulk international buyers. Intense heat 100,000–225,000 SHU, small conical dried pods.",
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
          "Export-grade Indian Bird's Eye Chilli (Capsicum frutescens) supplied by JM Masala. Intense heat 100,000–225,000 SHU, small conical dried pods, tested for aflatoxin and Sudan dye compliance.",
        image: toAbsoluteUrl(
          PRODUCTS.find((product) => product.slug === "red-chilli-exporter-india")
            ?.imageUrl ?? "/JMMasala.png",
        ),
        brand: { "@type": "Brand", name: COMPANY.name },
        category: "Spices",
        countryOfOrigin: "India",
        manufacturer: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/bird-eye-chilli-exporter-india`,
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/bird-eye-chilli-exporter-india`,
        },
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
    title: "King Chilli Exporter from India | Bhut Jolokia Ghost Pepper | JM Masala",
    description:
      "JM Masala supplies genuine Indian King Chilli (Bhut Jolokia / Naga Chilli) for bulk export. Super-hot 800,000–1,041,000+ SHU, solar dried whole pods & flakes.",
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
          "Export-grade Indian King Chilli (Capsicum chinense) supplied by JM Masala. Super-hot 800,000–1,041,000+ SHU, solar-dried whole pods and flakes with full laboratory test reports.",
        image: toAbsoluteUrl(
          PRODUCTS.find((product) => product.slug === "red-chilli-exporter-india")
            ?.imageUrl ?? "/JMMasala.png",
        ),
        brand: { "@type": "Brand", name: COMPANY.name },
        category: "Spices",
        countryOfOrigin: "India",
        manufacturer: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/king-chilli-exporter-india`,
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/king-chilli-exporter-india`,
        },
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
    title: "Best Spice Exporter in Gujarat | Unjha Cumin Supplier | JM Masala",
    description:
      "JM Masala is a Gujarat-based spice exporter from Unjha supplying cumin, coriander, fennel, fenugreek, sesame, psyllium and more with HACCP, packing, lab testing, and export documentation.",
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
      "HACCP spice exporter Gujarat",
      "bulk spice supplier Gujarat",
    ],
    schema: [
      baseOrganizationSchema,
      baseWebSiteSchema,
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: COMPANY.legalName,
        alternateName: COMPANY.name,
        url: `${SITE_URL}/spice-exporter-gujarat`,
        image: `${SITE_URL}/JMMasala.png`,
        email: COMPANY.email,
        telephone: COMPANY.phones,
        address: {
          "@type": "PostalAddress",
          streetAddress: "A/18, Main Line, APMC Market Yard",
          addressLocality: "Unjha",
          addressRegion: "Gujarat",
          postalCode: "384170",
          addressCountry: "IN",
        },
        areaServed: ["Gujarat", "India", "Worldwide"],
        priceRange: "$$",
      },
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
    title: "Quality and Certifications | HACCP Spice Exporter India",
    description:
      "JM Masala supports spice buyers with HACCP-aligned quality systems, ISO 22000, APEDA, Spice Board, FSSAI, testing, and documentation.",
    path: "/quality-certifications",
    imageUrl: "/JMMasala.png",
    keywords: TRUST_BADGES,
    imageAlt: "JM Masala quality certifications and export documentation",
  },
  "/sourcing-network": {
    title: "Indian Spice Sourcing Network | Gujarat, North-East & South India | JM Masala",
    description:
      "JM Masala maintains a multi-region Indian sourcing network spanning Gujarat (Unjha Mandi), North-East India (Lakadong turmeric & ginger), and South India with unified HACCP processing and Mundra port export.",
    path: "/sourcing-network",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala sourcing network for Indian spices",
  },
  "/spice-processing-manufacturing": {
    title:
      "Spice Processing & Manufacturing India | Sortex Cleaning, Grading & Packing | JM Masala",
    description:
      "JM Masala Trading LLP is an Indian spice processor and manufacturer offering machine cleaning, Sortex cleaning, destoning, grading, grinding, private-label packing, and export-ready documentation.",
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
        areaServed: "Worldwide",
        url: `${SITE_URL}/spice-processing-manufacturing`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "JM Masala Spice Processing Capabilities",
          itemListElement: PROCESSING_CAPABILITIES.map((capability) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: capability.name,
              description: capability.description,
            },
          })),
        },
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
    title: "Domestic Spice Supply India | JM Masala",
    description:
      "Domestic wholesale spice supply for Indian distributors, processors, retailers, and institutional buyers.",
    path: "/domestic-supply-india",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala domestic spice supply India",
  },
  "/export-destinations": {
    title: "Indian Spices Export Operations & Global Supply | JM Masala Trading LLP",
    description:
      "Official export operations and global supply chain of JM Masala Trading LLP. Supplying whole and processed Indian spices via Mundra Port to 20+ countries with complete export documentation, container loading, and CIF shipping.",
    path: "/export-destinations",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala Indian spices export operations and container logistics",
    keywords: [
      "Indian spices export",
      "spice exporter Mundra port",
      "spice export documentation India",
      "bulk spice container loading",
      "Cumin seeds exporter CIF Dubai",
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
          "End-to-end export handling for Indian agricultural spices from APMC Unjha mandi processing to container loading at Mundra Port, full documentation sets, and CIF delivery across 20+ countries.",
        areaServed: "Worldwide",
        url: `${SITE_URL}/export-destinations`,
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Export Operations", path: "/export-destinations" },
      ]),
    ],
  },
  "/export": {
    title: "Indian Spices Export Operations & Global Supply | JM Masala Trading LLP",
    description:
      "Official export operations and global supply chain of JM Masala Trading LLP. Supplying whole and processed Indian spices via Mundra Port to 20+ countries with complete export documentation, container loading, and CIF shipping.",
    path: "/export",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala Indian spices export operations and container logistics",
  },
  "/contact": {
    title: "Contact JM Masala Exports | Request Spice Quote",
    description:
      "Contact JM Masala Exports for spice specifications, export packing, MOQ, samples, pricing, and shipment documentation.",
    path: "/contact",
    imageUrl: "/JMMasala.png",
    imageAlt: "Contact JM Masala Exports for spice export inquiries",
  },
  "/blog": {
    title: "Spice Export Buyer Guides | JM Masala Blog",
    description:
      "Buyer-focused guides on importing spices from India, Unjha cumin sourcing, HACCP, psyllium, and export-grade specifications.",
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
    title: "Private Label Spice Manufacturer India | Custom Spice Packaging & Branding | JM Masala",
    description:
      "JM Masala Trading LLP is an Indian private label spice manufacturer offering custom processing, packaging, branding and export of cumin, coriander, fennel, turmeric and other Indian spices for global B2B buyers.",
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
        areaServed: "Worldwide",
        url: `${SITE_URL}/private-label-spices`,
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Private Label Spices", path: "/private-label-spices" },
      ]),
    ],
  },
  "/spice-packaging": {
    title: "Spice Packaging Company India | Custom Spice Packaging & Export Packing | JM Masala",
    description:
      "JM Masala Trading LLP provides custom spice packaging solutions for export — bulk bags, retail pouches, private-label branding, and food-service packs for Indian spices.",
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
        areaServed: "Worldwide",
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
  const title =
    masterSeo?.seo.title ??
    `${product.name} Exporter India | Export Grade | JM Masala`;
  const description = masterSeo?.seo.description ?? product.description;
  const keywords = masterSeo?.seo.secondaryKeywords ?? [
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

  const faqItems =
    masterSeo?.content.faqs && masterSeo.content.faqs.length > 0
      ? masterSeo.content.faqs
      : [
          {
            question: `What export specifications and quality grades are available for ${product.name}?`,
            answer: `${product.name} from JM Masala Trading LLP is supplied according to strict buyer-approved export specifications (${product.keySpec}) covering purity, moisture, volatile oil, and destination-specific compliance (EU, US FDA, Gulf).`,
          },
          {
            question: `Can JM Masala supply ${product.name} in bulk container loads and private label packaging?`,
            answer: `Yes. We supply ${product.name} in 20ft and 40ft FCL bulk container loads (25kg/50kg PP bags with inner liner, paper bags, or 1 MT jumbo bags) as well as custom private label retail packaging (stand-up zipper pouches, PET jars, and cartons).`,
          },
          {
            question: `What export documents and lab reports are provided with ${product.name} shipments?`,
            answer: `Every export consignment includes a Phytosanitary Certificate, Fumigation Certificate, NABL accredited Laboratory Certificate of Analysis (COA), Certificate of Origin (COO), Commercial Invoice, Packing List, and Bill of Lading.`,
          },
        ];

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
        sku: `JMM-${product.slug.toUpperCase().replace("-EXPORTER-INDIA", "")}`,
        mpn: `JMM-${product.slug.replace("-exporter-india", "")}`,
        brand: {
          "@type": "Brand",
          name: COMPANY.name,
          slogan: COMPANY.tagline,
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
        additionalProperty: product.specs.map((spec) => ({
          "@type": "PropertyValue",
          name: spec.label,
          value: spec.value,
        })),
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          url: productUrl,
          seller: {
            "@id": `${SITE_URL}/#organization`,
          },
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingDestination: {
              "@type": "DefinedRegion",
              addressCountry: [
                "US",
                "CA",
                "GB",
                "AE",
                "SA",
                "SG",
                "AU",
                "DE",
                "NL",
              ],
            },
            shippingRate: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "USD",
            },
            deliveryTime: {
              "@type": "ShippingDeliveryTime",
              handlingTime: {
                "@type": "QuantitativeValue",
                minValue: 7,
                maxValue: 15,
                unitCode: "d",
              },
            },
          },
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: ["IN", "US", "AE", "GB", "CA", "SG", "SA", "AU", "DE", "NL"],
            returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 14,
            returnMethod: "https://schema.org/ReturnByMail",
            returnFees: "https://schema.org/FreeReturn",
          },
        },
      },
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
    title: `${region.title} | Indian Spice Sourcing Company | JM Masala`,
    description: region.description,
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${region.name} Sourcing Products`,
          itemListElement: region.products.map((productName) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: productName,
              category: "Spices and agro products",
            },
          })),
        },
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
    title: `${post.title} | JM Masala`,
    description: post.excerpt,
    path,
    type: "article",
    imageUrl,
    imageAlt: `${post.title} - JM Masala buyer guide`,
    keywords: post.keywords,
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
        keywords: post.keywords.join(", "),
        author: {
          "@type": "Organization",
          name: COMPANY.legalName,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
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
  return (
    pageSeo[path] ??
    buildSourcingRegionSeo(path) ??
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
