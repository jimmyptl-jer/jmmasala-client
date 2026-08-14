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
  "/spice-exporter-gujarat",
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
  alternateName: COMPANY.name,
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

const TITLE_BY_SLUG: Record<string, string> = {
  "cumin-seeds-exporter-india":
    "Cumin Seeds Exporter India | Unjha Gujarat | HACCP APEDA | JM Masala",
  "coriander-seeds-exporter-india":
    "Coriander Seeds Exporter India | Export Grade | JM Masala",
  "fennel-seeds-exporter-india":
    "Fennel Seeds Exporter India | Export Grade | JM Masala",
  "fenugreek-seeds-exporter-india":
    "Fenugreek Seeds Exporter India | Export Grade | JM Masala",
  "sesame-seeds-exporter-india":
    "Sesame Seeds Exporter India | Natural and Hulled | JM Masala",
  "turmeric-exporter-india":
    "Turmeric Exporter India | High Curcumin | HACCP Certified | JM Masala",
  "psyllium-husk-exporter-india":
    "Psyllium Husk Exporter India | HACCP ISO 22000 | Unjha Gujarat | JM Masala",
  "psyllium-seeds-exporter-india":
    "Psyllium Seeds Exporter India | Export Grade | JM Masala",
  "red-chilli-exporter-india":
    "Red Chilli Exporter India | ASTA and SHU Based Supply | JM Masala",
  "black-pepper-exporter-india":
    "Black Pepper Exporter India | MG1 FAQ Grade | HACCP Certified | JM Masala",
  "cardamom-exporter-india":
    "Cardamom Exporter India | Premium Size-Graded Lots | JM Masala",
  "curry-leaf-exporter-india":
    "Curry Leaf Exporter India | Fresh and Dehydrated Supply | JM Masala",
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
    title: "Cold Pressed Oils from India | JM Masala",
    description:
      "Cold pressed edible oil supply from JM Masala with buyer-specific packing and export documentation support.",
    path: "/cold-pressed-oils",
    imageUrl: "/JMMasala.png",
    imageAlt: "Cold pressed oils supplied by JM Masala",
  },
  "/about-jm-masala": {
    title: "About JM Masala | Spice Exporter from Unjha Gujarat",
    description:
      "Learn about JM Masala Exports, a two-generation spice business based in Unjha, Gujarat serving global spice importers.",
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
          seller: { "@id": `${SITE_URL}/#organization` },
        },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Best Cumin Exporter India", path: "/best-cumin-exporter-india" },
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
          streetAddress: "Near APMC Market Yard",
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
    title: "Sourcing Network | Unjha Spice Export Supply Chain",
    description:
      "JM Masala sources spices from Unjha, Gujarat and selected South India channels with cleaning, grading, packing, and export dispatch support.",
    path: "/sourcing-network",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala sourcing network for Indian spices",
  },
  "/domestic-supply-india": {
    title: "Domestic Spice Supply India | JM Masala",
    description:
      "Domestic wholesale spice supply for Indian distributors, processors, retailers, and institutional buyers.",
    path: "/domestic-supply-india",
    imageUrl: "/JMMasala.png",
    imageAlt: "JM Masala domestic spice supply India",
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
};

const buildProductSeo = (path: string): StaticSeo | null => {
  const product = PRODUCTS.find((item) => path === `/${item.slug}`);

  if (!product) {
    return null;
  }

  return {
    title:
      TITLE_BY_SLUG[product.slug] ??
      `${product.name} Exporter India | Export Grade | JM Masala`,
    description: product.description,
    path,
    type: "product",
    imageUrl: product.imageUrl,
    imageAlt: `${product.name} export-grade spice supplied by JM Masala`,
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
        manufacturer: {
          "@id": `${SITE_URL}/#organization`,
        },
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
          seller: {
            "@id": `${SITE_URL}/#organization`,
          },
        },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: product.name, path: `/${product.slug}` },
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
