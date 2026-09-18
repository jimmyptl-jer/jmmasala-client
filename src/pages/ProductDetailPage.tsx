import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import {
  BLOG_POSTS,
  COMPANY,
  PRODUCTS_BY_SLUG,
  PRODUCT_TECHNICAL_DETAILS,
  SITE_URL,
  buildProductInquiryMessage,
  buildWhatsAppUrl,
  type ExportDetail,
  type TechnicalSpec,
} from "@/data/siteData";
import { PRODUCT_MASTER_SEO } from "@/data/productMasterSeo";
import "@/styles/product-palette.css";

const PRODUCT_RELATED_BLOGS: Record<string, string[]> = {
  "cumin-seeds-exporter-india": [
    "cumin-seeds-quality-grades-europe-usa-gulf-singapore",
    "why-unjha-gujarat-is-worlds-cumin-capital",
    "complete-guide-importing-spices-from-india",
  ],
  "cumin-powder-exporter-india": [
    "cumin-seeds-quality-grades-europe-usa-gulf-singapore",
    "haccp-certification-spice-processing-buyers-guide",
    "complete-guide-importing-spices-from-india",
  ],
  "fennel-seeds-exporter-india": [
    "fennel-seeds-quality-grades-varieties-europe-usa-gulf",
    "complete-guide-importing-spices-from-india",
    "haccp-certification-spice-processing-buyers-guide",
  ],
  "fenugreek-seeds-exporter-india": [
    "why-unjha-gujarat-is-worlds-cumin-capital",
    "complete-guide-importing-spices-from-india",
    "haccp-certification-spice-processing-buyers-guide",
  ],
  "psyllium-husk-exporter-india": [
    "psyllium-husk-vs-psyllium-seeds-explained",
    "complete-guide-importing-spices-from-india",
    "haccp-certification-spice-processing-buyers-guide",
  ],
  "psyllium-seeds-exporter-india": [
    "psyllium-husk-vs-psyllium-seeds-explained",
    "complete-guide-importing-spices-from-india",
    "haccp-certification-spice-processing-buyers-guide",
  ],
  "sesame-seeds-exporter-india": [
    "why-unjha-gujarat-is-worlds-cumin-capital",
    "complete-guide-importing-spices-from-india",
    "haccp-certification-spice-processing-buyers-guide",
  ],
  "ajwain-seeds-exporter-india": [
    "why-unjha-gujarat-is-worlds-cumin-capital",
    "complete-guide-importing-spices-from-india",
    "haccp-certification-spice-processing-buyers-guide",
  ],
  "mustard-seeds-exporter-india": [
    "why-unjha-gujarat-is-worlds-cumin-capital",
    "complete-guide-importing-spices-from-india",
    "haccp-certification-spice-processing-buyers-guide",
  ],
  "nigella-seeds-exporter-india": [
    "why-unjha-gujarat-is-worlds-cumin-capital",
    "complete-guide-importing-spices-from-india",
    "haccp-certification-spice-processing-buyers-guide",
  ],
};

const PRODUCT_PAIRS: Record<
  string,
  { title: string; subtitle: string; slug: string; buttonText: string }
> = {
  "cumin-seeds-exporter-india": {
    title: "Looking for Cumin Powder / Ground Jeera?",
    subtitle:
      "JM Masala also processes 100% pure cold-milled cumin powder with custom mesh sizes (40–80 mesh) and steam sterilization.",
    slug: "cumin-powder-exporter-india",
    buttonText: "View Cumin Powder Specs",
  },
  "cumin-powder-exporter-india": {
    title: "Looking for Whole Cumin Seeds / Jeera?",
    subtitle:
      "Source machine-cleaned and Sortex optical-graded Unjha cumin seeds (98% to 99.9% purity).",
    slug: "cumin-seeds-exporter-india",
    buttonText: "View Whole Cumin Seeds Specs",
  },
  "coriander-seeds-exporter-india": {
    title: "Looking for Coriander Powder / Ground Dhania?",
    subtitle:
      "Cold-milled fragrant coriander powder with natural aroma retention and zero additives.",
    slug: "coriander-powder-exporter-india",
    buttonText: "View Coriander Powder Specs",
  },
  "coriander-powder-exporter-india": {
    title: "Looking for Whole Coriander Seeds / Dhania?",
    subtitle:
      "Cleaned and graded Eagle, Scooter, and Parrot variety coriander seeds from Gujarat and Rajasthan.",
    slug: "coriander-seeds-exporter-india",
    buttonText: "View Whole Coriander Specs",
  },
  "turmeric-exporter-india": {
    title: "Looking for Pure Turmeric Powder / Haldi?",
    subtitle:
      "High-curcumin (2.5%–5.0%+) lab-tested turmeric powder with zero lead chromate and micro-fine mesh.",
    slug: "turmeric-powder-exporter-india",
    buttonText: "View Turmeric Powder Specs",
  },
  "turmeric-powder-exporter-india": {
    title: "Looking for Whole Turmeric Fingers / Haldi?",
    subtitle:
      "Polished and unpolished whole turmeric fingers and bulbs sourced from high-curcumin South Indian belts.",
    slug: "turmeric-exporter-india",
    buttonText: "View Turmeric Finger Specs",
  },
  "red-chilli-exporter-india": {
    title: "Looking for Red Chilli Powder?",
    subtitle:
      "Custom-blended by ASTA color (60–140) and heat bands (15,000–80,000 SHU) with Aflatoxin certification.",
    slug: "red-chilli-powder-exporter-india",
    buttonText: "View Red Chilli Powder Specs",
  },
  "red-chilli-powder-exporter-india": {
    title: "Looking for Whole Red Chilli?",
    subtitle:
      "Whole and stemless red chillies (Teja, Sanam, Kashmiri, Byadgi) with standardized heat and moisture.",
    slug: "red-chilli-exporter-india",
    buttonText: "View Whole Red Chilli Specs",
  },
  "dry-ginger-exporter-india": {
    title: "Looking for Pure Dry Ginger Powder (Sonth)?",
    subtitle:
      "Micro-milled dry ginger powder with pungent aroma and essential oil retention for food & bakery.",
    slug: "ginger-powder-exporter-india",
    buttonText: "View Ginger Powder Specs",
  },
  "ginger-powder-exporter-india": {
    title: "Looking for Whole Dry Ginger / Sonth?",
    subtitle:
      "Whole bleached and unbleached dry ginger splits and nuggets from Kerala and Gujarat.",
    slug: "dry-ginger-exporter-india",
    buttonText: "View Whole Dry Ginger Specs",
  },
  "fenugreek-seeds-exporter-india": {
    title: "Looking for Ground Fenugreek Powder (Methi)?",
    subtitle:
      "Finely ground golden fenugreek powder rich in dietary fiber and aroma for seasonings.",
    slug: "fenugreek-powder-exporter-india",
    buttonText: "View Fenugreek Powder Specs",
  },
  "fenugreek-powder-exporter-india": {
    title: "Looking for Whole Fenugreek Seeds / Methi?",
    subtitle:
      "Sortex cleaned golden-yellow whole fenugreek seeds in bold and semi-bold grades.",
    slug: "fenugreek-seeds-exporter-india",
    buttonText: "View Whole Fenugreek Specs",
  },
  "psyllium-seeds-exporter-india": {
    title: "Looking for Psyllium Husk (Isabgol)?",
    subtitle:
      "High-swelling (35–45 ml/g) 95%–99% purity psyllium husk for food and pharma applications.",
    slug: "psyllium-husk-exporter-india",
    buttonText: "View Psyllium Husk Specs",
  },
  "psyllium-husk-exporter-india": {
    title: "Looking for Whole Psyllium Seeds?",
    subtitle:
      "Machine cleaned whole Plantago ovata seeds for industrial processing and downstream extraction.",
    slug: "psyllium-seeds-exporter-india",
    buttonText: "View Psyllium Seeds Specs",
  },
  "black-pepper-exporter-india": {
    title: "Looking for Green Cardamom (Elaichi)?",
    subtitle:
      "Size-graded bold green cardamom pods (7mm, 8mm, 8mm+) vacuum packed from Idukki, Kerala.",
    slug: "cardamom-exporter-india",
    buttonText: "View Green Cardamom Specs",
  },
  "cardamom-exporter-india": {
    title: "Looking for Malabar Black Pepper?",
    subtitle:
      "Malabar Garbled 1 (MG1) and FAQ grade bold black peppercorns with high natural piperine.",
    slug: "black-pepper-exporter-india",
    buttonText: "View Black Pepper Specs",
  },
  "mustard-seeds-exporter-india": {
    title: "Looking for Ajwain Seeds (Carom)?",
    subtitle:
      "Sortex cleaned Indian ajwain seeds with high thymol volatile oil for bakery and seasonings.",
    slug: "ajwain-seeds-exporter-india",
    buttonText: "View Ajwain Seeds Specs",
  },
  "ajwain-seeds-exporter-india": {
    title: "Looking for Mustard Seeds (Rai)?",
    subtitle:
      "Small brown and bold yellow mustard seeds from Gujarat for condiments, oil, and pickling.",
    slug: "mustard-seeds-exporter-india",
    buttonText: "View Mustard Seeds Specs",
  },
  "sesame-seeds-exporter-india": {
    title: "Looking for Nigella Seeds (Kalonji)?",
    subtitle:
      "Jet-black 99.5% Sortex optical cleaned nigella seeds for bakery, seasoning, and black seed oil.",
    slug: "nigella-seeds-exporter-india",
    buttonText: "View Nigella Seeds Specs",
  },
  "nigella-seeds-exporter-india": {
    title: "Looking for Sesame Seeds (Natural & Hulled)?",
    subtitle:
      "Natural white and 99.98% Sortex hulled sesame seeds with high oil content from Gujarat.",
    slug: "sesame-seeds-exporter-india",
    buttonText: "View Sesame Seeds Specs",
  },
  "fennel-seeds-exporter-india": {
    title: "Looking for Unjha Cumin Seeds / Jeera?",
    subtitle:
      "98% to 99.9% Sortex optical cleaned cumin seeds sourced directly from APMC Unjha mandi.",
    slug: "cumin-seeds-exporter-india",
    buttonText: "View Cumin Seeds Specs",
  },
  "agro-commodities-exporter-india": {
    title: "Looking for Sesame Seeds (Natural & Hulled)?",
    subtitle:
      "High oil content Indian sesame seeds in bulk container loads for food and oil processing.",
    slug: "sesame-seeds-exporter-india",
    buttonText: "View Sesame Seeds Specs",
  },
};

const SPICE_SUPPLY_CHAIN_STEPS = [
  {
    step: "01",
    title: "Mandi Sourcing & Origin Selection",
    description:
      "Procurement directly from APMC Unjha and regional farmer networks, selecting fresh-crop lots for high volatile oil and seed integrity.",
  },
  {
    step: "02",
    title: "Pre-Cleaning & Destoning",
    description:
      "Mechanical screening removing heavy stones, sand, dust, mud balls, and crop stalks through vibro-graders and air aspiration.",
  },
  {
    step: "03",
    title: "Sortex Optical Color Sorting",
    description:
      "High-resolution optical sorters inspect each seed individually, rejecting discolored grains to achieve purity from 98% up to 99.9%.",
  },
  {
    step: "04",
    title: "Laboratory QA & Grading",
    description:
      "Batch-wise testing for moisture, volatile oil, total ash, microbiology, and destination-specific pesticide residue / aflatoxin limits.",
  },
  {
    step: "05",
    title: "Bulk & Private Label Packaging",
    description:
      "Packaging in food-safe 25/50kg PP bags with inner poly liners, paper bags, or custom branded retail pouches, PET jars, and cartons.",
  },
  {
    step: "06",
    title: "Container Stuffing & Global Export",
    description:
      "FCL container stuffing with moisture absorption bags, shipped FOB Mundra / Nhava Sheva with full phytosanitary and export documentation.",
  },
];

const renderSpecTable = (title: string, rows: TechnicalSpec[]) => (
  <section className="mt-8 jm-spec-table">
    <div className="jm-spec-table__header">{title}</div>
    <table>
      <tbody>
        {rows.map((row) => (
          <tr key={`${title}-${row.label}`}>
            <th>{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

const renderExportDetails = (title: string, rows: ExportDetail[]) => (
  <section className="mt-8 jm-spec-table">
    <div className="jm-spec-table__header">{title}</div>
    <table>
      <tbody>
        {rows.map((row) => (
          <tr key={`${title}-${row.label}`}>
            <th>{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

const ProductDetailPage = () => {
  const params = useParams();
  const slug = params.slug ?? "";
  const product = PRODUCTS_BY_SLUG[slug];
  const technicalDetails = PRODUCT_TECHNICAL_DETAILS[slug];

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const masterSeo = PRODUCT_MASTER_SEO[product.slug];
  const relatedSlugs = Array.from(
    new Set([
      ...product.relatedSlugs,
      ...(masterSeo?.cluster.topicalSiblings ?? []),
    ]),
  );
  const relatedProducts = relatedSlugs
    .map((relatedSlug) => PRODUCTS_BY_SLUG[relatedSlug])
    .filter((related): related is NonNullable<typeof related> =>
      Boolean(related),
    )
    .slice(0, 4);

  const applicationHighlights =
    masterSeo?.content.buyerApplications ?? [
      "Bulk supply for importers and wholesale buyers",
      "Buyer-specific export packing and documentation support",
      "Product grades aligned to destination-market requirements",
    ];
  const relatedInsights = (PRODUCT_RELATED_BLOGS[product.slug] ?? [
    "complete-guide-importing-spices-from-india",
    "haccp-certification-spice-processing-buyers-guide",
  ])
    .map((blogSlug) => BLOG_POSTS.find((post) => post.slug === blogSlug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  const productPair = PRODUCT_PAIRS[product.slug];

  const title =
    masterSeo?.seo.title ??
    `${product.name} Exporter India | HACCP Certified | JM Masala`;
  const metaDescription = masterSeo?.seo.description ?? product.description;
  const h1Title = masterSeo?.seo.h1 ?? `${product.name} Exporter & Supplier from India`;
  const canonicalUrl = `${SITE_URL}/${product.slug}`;
  const productImageUrl = product.imageUrl.startsWith("http")
    ? product.imageUrl
    : `${SITE_URL}${product.imageUrl}`;

  const keywords = masterSeo?.seo.secondaryKeywords ?? [
    `${product.name} exporter India`,
    `${product.name} supplier India`,
    `${product.name} from India`,
    `${product.name} export grade`,
    `${product.name} wholesaler India`,
    `${product.name} manufacturer India`,
    `${product.name} specifications`,
    `${product.name} bulk supplier`,
    `${product.botanicalName} supplier`,
    `${product.origin} ${product.name} exporter`,
    "Indian spice exporter",
    "JM Masala exports",
  ];

  const breadcrumbSchema = {
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
  };

  const faqItems =
    masterSeo?.content.faqs && masterSeo.content.faqs.length > 0
      ? masterSeo.content.faqs
      : [
          {
            question: `What specifications are available for ${product.name}?`,
            answer: `${product.name} is supplied according to buyer-approved export specifications covering purity, moisture, packing, and lot-wise quality parameters. The exact grade can be aligned to your market and application.`,
          },
          {
            question: `Can JM Masala supply ${product.name} in bulk export packing?`,
            answer: `Yes. We support bulk export packing, buyer-specific labelling, and container-ready documentation for ${product.name} shipments from India.`,
          },
          {
            question: `Do you share lab reports and export documents for ${product.name}?`,
            answer: `Yes. We can share available test reports, specification sheets, and export documentation support for ${product.name} based on buyer requirements and destination market norms.`,
          },
        ];

  const faqSchema = {
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
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: product.name,
    description: metaDescription,
    image: [productImageUrl],
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
      "@type": "Organization",
      name: COMPANY.legalName,
      url: SITE_URL,
    },
    url: canonicalUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "52",
      bestRating: "5",
      worstRating: "1",
    },
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
      url: canonicalUrl,
      seller: {
        "@type": "Organization",
        name: COMPANY.legalName,
        url: SITE_URL,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: [
            "US", "CA", "GB", "AE", "SA", "SG", "AU", "DE", "NL"
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
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: canonicalUrl,
    description: metaDescription,
    about: {
      "@type": "Product",
      name: product.name,
    },
  };

  const specSheetUrl = "/JMMasalaProducts.pdf";
  const quoteUrl = buildWhatsAppUrl(buildProductInquiryMessage(product.name));

  return (
    <>
      <Seo
        title={title}
        description={metaDescription}
        path={`/${product.slug}`}
        imageUrl={product.imageUrl}
        type="product"
        keywords={keywords}
        schema={[
          productSchema,
          pageSchema,
          breadcrumbSchema,
          faqSchema,
        ]}
      />

      <section className="jm-section jm-section--white">
        <div className="jm-container space-y-12">
          {/* Top Product Hero & Quick Overview */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left Column: Product Info & Commercial Intros (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <nav
                aria-label="Breadcrumb"
                className="text-sm text-[var(--brand-forest)]"
              >
                <Link to="/" className="hover:text-[var(--brand-gold)]">
                  Home
                </Link>
                {" / "}
                <Link to="/products" className="hover:text-[var(--brand-gold)]">
                  Products
                </Link>
                {" / "}
                <span className="font-semibold text-[var(--brand-charcoal)]">
                  {product.name}
                </span>
              </nav>

              <h1 className="jm-heading-1 text-[32px] sm:text-[36px] lg:text-[40px] leading-tight">
                {h1Title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--brand-forest)] font-medium">
                <span className="italic">{product.botanicalName}</span>
                <span>&bull;</span>
                <span>
                  Origin:{" "}
                  <strong className="text-[var(--brand-charcoal)]">
                    {product.origin}
                  </strong>
                </span>
                {masterSeo?.hsCode && (
                  <>
                    <span>&bull;</span>
                    <span>
                      HS Code:{" "}
                      <strong className="font-mono text-[var(--brand-deep-green)]">
                        {masterSeo.hsCode}
                      </strong>
                    </span>
                  </>
                )}
              </div>

              <p className="text-body text-[var(--brand-forest)] leading-relaxed text-base pt-1">
                {masterSeo?.content.commercialIntro ?? product.description}
              </p>

              {/* Authority Cluster Pages */}
              {masterSeo?.cluster.supportingPages &&
                masterSeo.cluster.supportingPages.length > 0 && (
                  <div className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-4 text-sm leading-7 text-[var(--brand-forest)] shadow-2xs">
                    <div className="font-bold text-[var(--brand-charcoal)] mb-1 text-xs uppercase tracking-wider text-[var(--brand-gold)]">
                      Authority Guides &amp; Cluster Pages:
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {masterSeo.cluster.supportingPages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--brand-gold)]/40 bg-white px-3 py-1 text-xs font-semibold text-[var(--brand-deep-green)] hover:bg-[var(--brand-gold)] hover:text-white transition-colors shadow-2xs"
                        >
                          <span>{page.title}</span>
                          <span className="text-[10px] text-gray-500 font-normal">
                            ({page.intent})
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              {/* Sibling Pair Callout */}
              {productPair && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-[var(--brand-gold)]/40 bg-[var(--brand-cream)] p-4 text-sm text-[var(--brand-forest)] shadow-2xs">
                  <div>
                    <span className="font-bold text-[var(--brand-charcoal)] block text-base">
                      {productPair.title}
                    </span>
                    <span className="text-xs text-[var(--brand-forest)] block mt-0.5 leading-relaxed">
                      {productPair.subtitle}
                    </span>
                  </div>
                  <Link
                    to={`/${productPair.slug}`}
                    className="jm-btn jm-btn--outline shrink-0 text-xs font-bold hover:bg-[var(--brand-gold)] hover:text-white"
                  >
                    {productPair.buttonText} &rarr;
                  </Link>
                </div>
              )}

              {/* Key Specs Highlight Pills */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                  Key Commercial Checkpoints:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.specs.slice(0, 5).map((spec) => (
                    <div
                      key={spec.label}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--brand-gold-pale)] bg-white px-3 py-1.5 text-xs text-[var(--brand-charcoal)] shadow-2xs"
                    >
                      <span className="font-bold text-[var(--brand-deep-green)]">
                        {spec.label}:
                      </span>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="jm-btn jm-btn--primary text-[13px] font-bold shadow-xs hover:shadow-md transition-all"
                >
                  Request B2B Quote
                </a>
                <a
                  href={specSheetUrl}
                  className="jm-btn jm-btn--outline text-[13px] font-semibold"
                >
                  Download Spec Sheet
                </a>
              </div>
            </div>

            {/* Right Column: Product Image & Quick Trade Specs (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6 flex items-center justify-center shadow-xs">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-h-72 w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute top-4 right-4 rounded-full bg-[var(--brand-deep-green)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-gold-light)] shadow-xs">
                  Export Grade
                </span>
              </div>

              {/* Quick Trade Snapshot Card */}
              <div className="rounded-xl border border-[var(--brand-gold-pale)] bg-white p-5 shadow-xs space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-[var(--brand-gold-pale)]/50 pb-2.5">
                  <span className="font-semibold text-gray-500 uppercase tracking-wider">
                    Origin Mandi
                  </span>
                  <span className="font-bold text-[var(--brand-charcoal)]">
                    {product.origin}, India
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-[var(--brand-gold-pale)]/50 pb-2.5">
                  <span className="font-semibold text-gray-500 uppercase tracking-wider">
                    Loading Seaport
                  </span>
                  <span className="font-bold text-[var(--brand-charcoal)]">
                    Mundra Port (INMUN1) / JNPT
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-[var(--brand-gold-pale)]/50 pb-2.5">
                  <span className="font-semibold text-gray-500 uppercase tracking-wider">
                    Purity Standard
                  </span>
                  <span className="font-bold text-[var(--brand-deep-green)]">
                    {product.keySpec}
                  </span>
                </div>
                {masterSeo?.content.containerLoading && (
                  <div className="flex items-center justify-between border-b border-[var(--brand-gold-pale)]/50 pb-2.5">
                    <span className="font-semibold text-gray-500 uppercase tracking-wider">
                      20ft FCL Capacity
                    </span>
                    <span className="font-bold text-[var(--brand-charcoal)]">
                      {masterSeo.content.containerLoading.fcl20.split(" (~")[0]}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="font-semibold text-gray-500 uppercase tracking-wider">
                    Certifications
                  </span>
                  <span className="font-bold text-[var(--brand-gold)]">
                    FSSAI &bull; APEDA &bull; ISO 22000 &bull; NABL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Technical Specifications Grid (Full Width) */}
          <div className="pt-8 border-t border-[var(--brand-gold-pale)]/60">
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                Technical Data Sheets
              </span>
              <h2 className="text-tagline not-italic text-[26px] lg:text-[30px] text-[var(--brand-charcoal)]">
                Export Specifications &amp; Quality Parameters
              </h2>
              <p className="mt-1 text-sm text-[var(--brand-forest)]">
                Standard commercial, physical, chemical, and microbiological parameters aligned to international contracts and customs regulations.
              </p>
            </div>

            {/* 2-Column Grid for Technical Tables */}
            <div className="grid gap-6 lg:grid-cols-2 items-start">
              {/* Left Column: Full Specifications & General Info */}
              <div className="space-y-6">
                <div className="jm-spec-table">
                  <div className="jm-spec-table__header">Core Specifications</div>
                  <table>
                    <tbody>
                      {product.specs.map((spec) => (
                        <tr key={spec.label}>
                          <th>{spec.label}</th>
                          <td>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {technicalDetails?.general &&
                  renderSpecTable("General Information", technicalDetails.general)}
              </div>

              {/* Right Column: Physical & Chemical Specifications */}
              <div className="space-y-6">
                {technicalDetails?.physical &&
                  renderSpecTable("Physical Specifications", technicalDetails.physical)}

                {technicalDetails?.chemical &&
                  renderSpecTable("Chemical Specifications", technicalDetails.chemical)}
              </div>
            </div>

            {/* Microbiological & Safety Grid */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2 items-start">
              {technicalDetails?.microbiological &&
                renderSpecTable("Microbiological Parameters", technicalDetails.microbiological)}

              {technicalDetails?.contaminants && (
                <section className="jm-surface-card p-5 h-full flex flex-col justify-start">
                  <h2 className="text-tagline not-italic text-[22px] text-[var(--brand-charcoal)]">
                    Contaminants &amp; Safety Compliance
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--brand-forest)]">
                    {technicalDetails.contaminants.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[var(--brand-gold)] font-bold">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[var(--brand-gold-pale)]/50 text-xs text-gray-500">
                    Pre-shipment analysis reports issued by NABL-accredited laboratories against buyer-specified contract tolerances.
                  </div>
                </section>
              )}
            </div>

            {/* Market-Specific Quality Grades (Europe, USA, Gulf, Singapore) */}
            {product.qualityGrades && (
              <div className="mt-6 overflow-x-auto jm-grade-table">
                <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-4 py-3 text-sm font-semibold text-[var(--brand-charcoal)] flex items-center justify-between">
                  <span>Market-Specific Export Quality Bands</span>
                  <span className="text-xs font-normal text-gray-500">Destination-tailored purity, moisture, and admixture</span>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Market</th>
                      <th>Purity</th>
                      <th>Moisture</th>
                      <th>Admixture</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.qualityGrades.map((grade) => {
                      const marketClass =
                        grade.market === "Europe"
                          ? "jm-grade-table__market-europe"
                          : grade.market === "USA"
                            ? "jm-grade-table__market-usa"
                            : grade.market === "Gulf"
                              ? "jm-grade-table__market-gulf"
                              : grade.market === "Singapore"
                                ? "jm-grade-table__market-singapore"
                                : "";

                      return (
                        <tr key={grade.market}>
                          <td className={`font-semibold ${marketClass}`}>
                            {grade.market}
                          </td>
                          <td>{grade.purity}</td>
                          <td>{grade.moisture}</td>
                          <td>{grade.admixture}</td>
                          <td>{grade.notes}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Section: Export Logistics & Container Stuffing (Full Width) */}
          <div className="pt-8 border-t border-[var(--brand-gold-pale)]/60">
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                Logistics &amp; Shipping
              </span>
              <h2 className="text-tagline not-italic text-[26px] lg:text-[30px] text-[var(--brand-charcoal)]">
                Export Packaging &amp; Container Stuffing (FCL)
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 items-start">
              {/* Left: Container Stuffing Cards (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {masterSeo?.content.containerLoading && (
                  <div className="rounded-xl border border-[rgba(201,168,76,0.3)] bg-[var(--brand-cream-light)] p-5 shadow-xs space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                          20ft FCL Capacity
                        </div>
                        <p className="mt-1 text-sm font-semibold text-[var(--brand-charcoal)]">
                          {masterSeo.content.containerLoading.fcl20}
                        </p>
                      </div>
                      <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                          40ft FCL Capacity
                        </div>
                        <p className="mt-1 text-sm font-semibold text-[var(--brand-charcoal)]">
                          {masterSeo.content.containerLoading.fcl40}
                        </p>
                      </div>
                    </div>

                    {masterSeo.content.packagingOptions && (
                      <div className="pt-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)] block mb-1.5">
                          Standard Packaging Configurations:
                        </span>
                        <ul className="text-xs text-gray-700 space-y-1.5 pl-4 list-disc">
                          {masterSeo.content.packagingOptions.map((opt) => (
                            <li key={opt}>{opt}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Additional Packaging Formats from Technical Details */}
                {technicalDetails?.packaging && (
                  <div className="jm-surface-card p-5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--brand-charcoal)] mb-3">
                      Flexible Packaging for Global Buyers
                    </h3>
                    <ul className="space-y-2 text-xs text-[var(--brand-forest)]">
                      {technicalDetails.packaging.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-[var(--brand-gold)] font-bold">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right: Export Terms Table (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                {technicalDetails?.exportDetails ? (
                  renderExportDetails("Export Commercial Terms", technicalDetails.exportDetails)
                ) : (
                  <div className="jm-spec-table">
                    <div className="jm-spec-table__header">Export Commercial Terms</div>
                    <table>
                      <tbody>
                        <tr>
                          <th>MOQ</th>
                          <td>1 MT (LCL) / 1 FCL for optimal freight economics</td>
                        </tr>
                        <tr>
                          <th>Loading Port</th>
                          <td>Mundra Port (Gujarat) / Nhava Sheva (JNPT)</td>
                        </tr>
                        <tr>
                          <th>Delivery Terms</th>
                          <td>FOB Mundra / CIF / CFR / CNF</td>
                        </tr>
                        <tr>
                          <th>Payment Terms</th>
                          <td>LC at sight / Advance TT as agreed</td>
                        </tr>
                        <tr>
                          <th>Lead Time</th>
                          <td>7 to 15 business days from order confirmation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section: End-to-End Processing Flow (Full Width) */}
          <div className="pt-8 border-t border-[var(--brand-gold-pale)]/60">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                  Quality Assurance Flow
                </span>
                <h2 className="text-tagline not-italic text-[26px] lg:text-[30px] text-[var(--brand-charcoal)]">
                  From Raw Indian {product.name} to Export-Ready Standard
                </h2>
              </div>
              <Link
                to="/spice-processing-manufacturing"
                className="text-xs font-semibold text-[var(--brand-gold)] hover:underline shrink-0"
              >
                View Processing Infrastructure &rarr;
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SPICE_SUPPLY_CHAIN_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="rounded-xl border border-[var(--brand-gold-pale)] bg-white p-5 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <div>
                    <div className="text-xs font-mono font-bold text-[var(--brand-gold)] mb-1">
                      STAGE {s.step}
                    </div>
                    <h3 className="text-sm font-bold text-[var(--brand-charcoal)]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs text-[var(--brand-forest)] leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Private Label Banner (Full Width) */}
          <div className="rounded-2xl border border-[var(--brand-gold)]/40 bg-[var(--brand-cream)] p-6 lg:p-8 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-3xl">
                <span className="inline-block rounded-full bg-[var(--brand-gold)]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-charcoal)]">
                  Private Label &amp; Retail Supply
                </span>
                <h2 className="mt-2 text-[22px] sm:text-[24px] font-bold text-[var(--brand-charcoal)]">
                  Need Custom Branded or Retail-Ready {product.name}?
                </h2>
                <p className="mt-2 text-sm text-[var(--brand-forest)] leading-relaxed">
                  JM Masala Trading LLP supplies {product.name} under your private label brand for supermarkets, retail grocery chains, e-commerce, and food service. We provide customized stand-up zipper pouches (50g to 1kg), PET jars, and bulk institutional packs with barcode printing and regulatory compliance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/private-label-spices"
                  className="jm-btn jm-btn--primary text-[13px] font-bold text-center"
                >
                  Private Label Solutions
                </Link>
                <Link
                  to="/spice-packaging"
                  className="jm-btn jm-btn--outline text-[13px] font-bold text-center"
                >
                  Packaging Formats
                </Link>
              </div>
            </div>
          </div>

          {/* Section: Buyer Guidance & Technical FAQs (Full Width 2-Column Grid) */}
          <div className="pt-8 border-t border-[var(--brand-gold-pale)]/60">
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              {/* Left Column: Why Choose & Buyer Confirmations (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="jm-surface-card p-6">
                  <h2 className="text-tagline not-italic text-[22px] text-[var(--brand-charcoal)]">
                    Why Buyers Choose JM Masala
                  </h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--brand-forest)]">
                    <p>
                      {product.name} is sourced with export-focused attention to origin, specification alignment, and shipment readiness. For international buyers, supplier selection depends on dependable quality parameters, packing, and destination-market compliance.
                    </p>
                    <p>
                      With sourcing rooted in {product.origin}, JM Masala supports buyers who require {product.keySpec.toLowerCase()} backed by responsive communication and shipment documentation.
                    </p>
                    <ul className="space-y-2 pl-4 pt-1">
                      {applicationHighlights.map((item) => (
                        <li key={item} className="list-disc text-xs">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="jm-surface-card p-6">
                  <h2 className="text-tagline not-italic text-[22px] text-[var(--brand-charcoal)]">
                    Buyer Pre-Shipment Checklist
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--brand-forest)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--brand-gold)] font-bold">&bull;</span>
                      <span>Final purity, moisture, and grade commitment in contract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--brand-gold)] font-bold">&bull;</span>
                      <span>Lot-wise test COA support, packing format, and shipping marks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--brand-gold)] font-bold">&bull;</span>
                      <span>Destination customs documents (Phyto, COO, Fumigation)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--brand-gold)] font-bold">&bull;</span>
                      <span>Agreed vessel dispatch window and port terminal logistics</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Frequently Asked Questions (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="mb-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                    Commercial FAQ
                  </span>
                  <h2 className="text-tagline not-italic text-[26px] lg:text-[28px] text-[var(--brand-charcoal)]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-xl border border-[var(--brand-gold-pale)] bg-white p-5 shadow-2xs"
                    >
                      <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
                        {item.question}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--brand-forest)] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section: B2B Call to Action Banner (Full Width) */}
          <div className="rounded-2xl bg-[var(--brand-deep-green)] p-8 lg:p-10 text-white shadow-md">
            <div className="max-w-3xl">
              <h2 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-gold-light)]">
                Looking for a Reliable Indian {product.name} Exporter?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-200 leading-relaxed">
                Share your required volume, specification, packing preferences, and destination port with JM Masala Trading LLP. Our export team will provide a formal commercial offer, specification sheet, and logistics schedule.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="jm-btn jm-btn--primary text-[14px] font-bold py-3 px-6 shadow-sm"
                >
                  Request B2B Quotation
                </a>
                <a
                  href={specSheetUrl}
                  className="jm-btn jm-btn--outline text-[14px] text-white border-white hover:bg-white/15 py-3 px-6"
                >
                  Download Product Catalogue
                </a>
              </div>
            </div>
          </div>

          {/* Section: Related Insights (Full Width) */}
          {relatedInsights.length > 0 && (
            <div className="pt-8 border-t border-[var(--brand-gold-pale)]/60">
              <div className="mb-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                  Market Knowledge
                </span>
                <h2 className="text-tagline not-italic text-[26px] lg:text-[28px] text-[var(--brand-charcoal)]">
                  Related Insights &amp; Buyer Guides
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {relatedInsights.map((post) => (
                  <div
                    key={post.slug}
                    className="rounded-xl border border-[var(--brand-gold-pale)] bg-white p-5 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div>
                      <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-xs text-[var(--brand-forest)] leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-4 inline-flex jm-btn jm-btn--outline text-[12px] font-semibold self-start"
                    >
                      Read Buyer Guide &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Related Products (Full Width) */}
          <div className="pt-8 border-t border-[var(--brand-gold-pale)]/60">
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                Catalog Synergy
              </span>
              <h2 className="jm-heading-2 text-[26px] lg:text-[28px] text-[var(--brand-charcoal)]">
                Related Spices &amp; Agro Commodities
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((related) => (
                <article
                  key={related.slug}
                  className="jm-product-card flex flex-col justify-between"
                >
                  <div className="jm-product-card__body">
                    <h3 className="jm-product-card__name text-base font-bold text-[var(--brand-charcoal)]">
                      {related.name}
                    </h3>
                    <p className="jm-product-card__description text-xs text-[var(--brand-forest)] mt-1">
                      {related.keySpec}
                    </p>
                  </div>
                  <div className="p-4 pt-0">
                    <Link
                      to={`/${related.slug}`}
                      className="w-full inline-flex justify-center jm-btn jm-btn--outline text-[12px] font-semibold"
                    >
                      View Specifications
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
