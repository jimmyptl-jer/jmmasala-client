import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import {
  BLOG_POSTS,
  PRODUCTS_BY_SLUG,
  PRODUCT_TECHNICAL_DETAILS,
  SITE_URL,
  buildProductInquiryMessage,
  buildWhatsAppUrl,
  type ExportDetail,
  type TechnicalSpec,
} from "@/data/siteData";
import "@/styles/product-palette.css";

const TITLE_BY_SLUG: Record<string, string> = {
  "cumin-seeds-exporter-india":
    "Cumin Seeds Exporter India | Indian Jeera Supplier | JM Masala",
  "coriander-seeds-exporter-india":
    "Coriander Seeds Exporter India | Dhania Supplier | JM Masala",
  "fennel-seeds-exporter-india":
    "Fennel Seeds Exporter India | Saunf Supplier | JM Masala",
  "fenugreek-seeds-exporter-india":
    "Fenugreek Seeds Exporter India | Methi Seeds Supplier | JM Masala",
  "ajwain-seeds-exporter-india":
    "Ajwain Seeds Exporter India | Carom Seeds Supplier | JM Masala",
  "mustard-seeds-exporter-india":
    "Mustard Seeds Exporter India | Indian Mustard Supplier | JM Masala",
  "turmeric-exporter-india":
    "Turmeric Exporter India | Turmeric Fingers & Powder Supplier | JM Masala",
  "dry-ginger-exporter-india":
    "Dry Ginger Exporter India | Dried Ginger Supplier | JM Masala",
  "red-chilli-exporter-india":
    "Indian Red Chilli Exporter | Red Chilli Supplier India | JM Masala",
  "psyllium-husk-exporter-india":
    "Psyllium Husk Exporter India | Isabgol Supplier | JM Masala",
  "psyllium-seeds-exporter-india":
    "Psyllium Seeds Exporter India | Export Grade | JM Masala",
  "sesame-seeds-exporter-india":
    "Sesame Seeds Exporter India | Natural and Hulled | JM Masala",
  "black-pepper-exporter-india":
    "Black Pepper Exporter India | MG1 FAQ Grade | HACCP Certified | JM Masala",
  "cardamom-exporter-india":
    "Cardamom Exporter India | Premium Size-Graded Lots | JM Masala",
  "curry-leaf-exporter-india":
    "Curry Leaf Exporter India | Fresh and Dehydrated Supply | JM Masala",
  "nigella-seeds-exporter-india":
    "Nigella Seeds Exporter India | Kalonji Supplier | JM Masala",
  "cumin-powder-exporter-india":
    "Cumin Powder Exporter India | Ground Jeera Supplier | JM Masala",
  "coriander-powder-exporter-india":
    "Coriander Powder Exporter India | Dhania Powder Supplier | JM Masala",
  "turmeric-powder-exporter-india":
    "Turmeric Powder Exporter India | High Curcumin Supplier | JM Masala",
  "red-chilli-powder-exporter-india":
    "Red Chilli Powder Exporter India | ASTA SHU Supplier | JM Masala",
  "ginger-powder-exporter-india":
    "Ginger Powder Exporter India | Sonth Powder Supplier | JM Masala",
  "fenugreek-powder-exporter-india":
    "Fenugreek Powder Exporter India | Ground Methi Supplier | JM Masala",
  "dehydrated-onion-exporter-india":
    "Dehydrated Onion Exporter India | Flakes & Powder | JM Masala",
  "dehydrated-garlic-exporter-india":
    "Dehydrated Garlic Exporter India | Flakes & Powder | JM Masala",
  "agro-commodities-exporter-india":
    "Indian Agro Commodities Exporter | Peanuts Chickpeas Grains | JM Masala",
};

const PRODUCT_APPLICATIONS: Record<string, string[]> = {
  "cumin-seeds-exporter-india": [
    "Whole spice packs for importers and wholesalers",
    "Seasoning blends, masala manufacturing, and food service supply",
    "Market-specific export grades for Europe, USA, Gulf, and Singapore buyers",
  ],
  "coriander-seeds-exporter-india": [
    "Whole seed supply for spice processors and import distributors",
    "Food manufacturing and seasoning applications",
    "Grade-specific coriander lots for export packing",
  ],
  "fennel-seeds-exporter-india": [
    "Retail, wholesale, and mouth-freshener applications",
    "Buyer-specific bold and small fennel requirements",
    "Export supply for aroma-led and visual-uniformity-focused markets",
  ],
  "fenugreek-seeds-exporter-india": [
    "Spice blends, food processing, and nutraceutical use",
    "Commercial and premium export grades",
    "Bulk shipments for importers and ingredient buyers",
  ],
  "ajwain-seeds-exporter-india": [
    "Traditional food, bakery products, spice blends, and digestive herbal formulations",
    "Machine cleaned and Sortex cleaned export lots",
    "Bulk supply for importers and seasoning manufacturers",
  ],
  "mustard-seeds-exporter-india": [
    "Pickling, seasoning blends, condiments, and oil extraction",
    "Small yellow, bold yellow, and black brown varieties",
    "Food processing and international commodity trade",
  ],
  "turmeric-exporter-india": [
    "Finger, bulb, and powder turmeric export supply",
    "Curcumin-focused buyer requirements",
    "Ingredient, retail, and processing applications",
  ],
  "dry-ginger-exporter-india": [
    "Spice blends, tea formulations, bakery, and food processing",
    "Whole bleached and unbleached (splits/nuggets) supply",
    "Bulk exports for international ingredient buyers",
  ],
  "red-chilli-exporter-india": [
    "Whole, stemless, and processing-oriented supply",
    "ASTA and SHU aligned export discussions",
    "Food manufacturing and trading-buyer shipments",
  ],
  "psyllium-husk-exporter-india": [
    "Nutraceutical and wellness ingredient supply",
    "Fiber-focused food and pharma-related applications",
    "Mesh and swell-volume aligned export lots",
  ],
  "psyllium-seeds-exporter-india": [
    "Whole seed supply for further processing",
    "Ingredient trade and fiber-category sourcing",
    "Bulk export packing for industrial buyers",
  ],
  "sesame-seeds-exporter-india": [
    "Bakery, tahini, and ingredient manufacturing",
    "Natural and hulled sesame export requirements",
    "Bulk sesame supply with buyer-specific quality control",
  ],
  "black-pepper-exporter-india": [
    "MG1 FAQ and trade-grade export lots",
    "Food service, seasoning, and wholesale requirements",
    "Bulk pepper sourcing for importers and distributors",
  ],
  "cardamom-exporter-india": [
    "Premium size-graded green cardamom lots",
    "Retail and food-service aligned buying",
    "Aroma-focused export supply for premium buyers",
  ],
  "curry-leaf-exporter-india": [
    "Fresh, dehydrated, and powder format discussions",
    "Food manufacturing and seasoning buyers",
    "Application-led sourcing for export markets",
  ],
  "nigella-seeds-exporter-india": [
    "Bakery, naan, spice blends, and nutraceutical formulations",
    "Sortex cleaned jet-black Kalonji export supply",
    "Bulk packing for global importers",
  ],
  "cumin-powder-exporter-india": [
    "Curry powders, seasoning mixes, and ready-to-eat meal processing",
    "Custom mesh sizes with optional steam sterilization",
    "Private-label retail and bulk food service supply",
  ],
  "coriander-powder-exporter-india": [
    "Curry bases, seasoning blends, and sauce manufacturing",
    "Cold-milled fine ground powder with strong aroma",
    "Bulk supply for spice processors",
  ],
  "turmeric-powder-exporter-india": [
    "Food colorant, curry powder manufacturing, and wellness formulations",
    "Guaranteed 2%-5%+ curcumin levels with zero lead chromate",
    "Retail pouches and bulk multiwall paper bag supply",
  ],
  "red-chilli-powder-exporter-india": [
    "Sauces, snacks, instant noodles, and seasoning blends",
    "Custom heat levels (Reshampatti, Sanam, Teja, Kashmiri)",
    "Aflatoxin and Sudan dye free certified supply",
  ],
  "ginger-powder-exporter-india": [
    "Beverages, chai spices, bakery, and meat seasoning",
    "Fine micro-milled dry ginger (Sonth) powder",
    "Export packing for food manufacturers",
  ],
  "fenugreek-powder-exporter-india": [
    "Curry powders, pickles, nutraceuticals, and functional foods",
    "High protein and dietary fiber ground Methi",
    "Bulk food-grade packaging",
  ],
  "dehydrated-onion-exporter-india": [
    "Instant soups, canned foods, seasonings, snacks, and meat processing",
    "Flakes, kibbled, minced, granules, and powder formats",
    "Bulk paper bags and carton packaging",
  ],
  "dehydrated-garlic-exporter-india": [
    "Sauces, seasonings, dry rubs, frozen foods, and instant noodles",
    "Dehydrated garlic cloves, flakes, granules, and fine powder",
    "Moisture-proof export packaging",
  ],
  "agro-commodities-exporter-india": [
    "Container-load export of Peanuts, Chickpeas, Oilseeds, and Grains",
    "Machine cleaned and Sortex cleaned commodity lots",
    "FOB Mundra / Nhava Sheva port logistics support",
  ],
};

const PRODUCT_RELATED_BLOGS: Record<string, string[]> = {
  "cumin-seeds-exporter-india": [
    "cumin-seeds-quality-grades-europe-usa-gulf-singapore",
    "why-unjha-gujarat-is-worlds-cumin-capital",
    "complete-guide-importing-spices-from-india",
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
      "High-curcumin (2%–5%+) lab-tested turmeric powder with zero lead chromate and micro-fine mesh.",
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
      "Custom-blended by ASTA color (60–140) and heat bands (15,000–90,000 SHU) with Aflatoxin certification.",
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
      "Sortex cleaned golden-brown whole fenugreek seeds in bold and semi-bold grades.",
    slug: "fenugreek-seeds-exporter-india",
    buttonText: "View Whole Fenugreek Specs",
  },
  "psyllium-seeds-exporter-india": {
    title: "Looking for Psyllium Husk (Isabgol)?",
    subtitle:
      "High-swelling (25–40 ml/g) 98%–99% purity psyllium husk for food and nutraceutical applications.",
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
  "dehydrated-onion-exporter-india": {
    title: "Looking for Dehydrated Garlic as well?",
    subtitle:
      "Flakes, minced, granules, and pure powder garlic from fresh Indian crops with high pungency.",
    slug: "dehydrated-garlic-exporter-india",
    buttonText: "View Dehydrated Garlic Specs",
  },
  "dehydrated-garlic-exporter-india": {
    title: "Looking for Dehydrated Onion as well?",
    subtitle:
      "White, red, and pink dehydrated onion flakes, kibbled, minced, and powder from Mahuva, Gujarat.",
    slug: "dehydrated-onion-exporter-india",
    buttonText: "View Dehydrated Onion Specs",
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

  const relatedProducts = product.relatedSlugs
    .map((relatedSlug) => PRODUCTS_BY_SLUG[relatedSlug])
    .filter((related): related is NonNullable<typeof related> =>
      Boolean(related),
    )
    .slice(0, 3);
  const applicationHighlights =
    PRODUCT_APPLICATIONS[product.slug] ?? [
      "Bulk supply for importers and wholesale buyers",
      "Buyer-specific export packing and documentation support",
      "Product grades aligned to destination-market requirements",
    ];
  const relatedInsights = (PRODUCT_RELATED_BLOGS[product.slug] ?? [])
    .map((blogSlug) => BLOG_POSTS.find((post) => post.slug === blogSlug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  const productPair = PRODUCT_PAIRS[product.slug];

  const title =
    TITLE_BY_SLUG[product.slug] ??
    `${product.name} Exporter India | HACCP Certified | JM Masala`;
  const canonicalUrl = `${SITE_URL}/${product.slug}`;
  const productImageUrl = product.imageUrl.startsWith("http")
    ? product.imageUrl
    : `${SITE_URL}${product.imageUrl}`;
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
  const faqItems = [
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
    name: product.name,
    description: product.description,
    image: productImageUrl,
    brand: { "@type": "Brand", name: "JM Masala" },
    category: "Spices",
    countryOfOrigin: "India",
    manufacturer: {
      "@type": "Organization",
      name: "JM Masala Exports",
      url: SITE_URL,
    },
    url: canonicalUrl,
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: canonicalUrl,
    },
  };
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: canonicalUrl,
    description: product.description,
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
        description={product.description}
        path={`/${product.slug}`}
        imageUrl={product.imageUrl}
        type="product"
        keywords={[
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
        ]}
        schema={[
          productSchema,
          pageSchema,
          breadcrumbSchema,
          faqSchema,
        ]}
      />

      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
            <article>
              <nav
                aria-label="Breadcrumb"
                className="mb-4 text-sm text-[var(--brand-forest)]"
              >
                <Link to="/" className="hover:text-[var(--brand-gold)]">
                  Home
                </Link>
                {" / "}
                <Link to="/products" className="hover:text-[var(--brand-gold)]">
                  Products
                </Link>
                {" / "}
                <span>{product.name}</span>
              </nav>
              <h1 className="jm-heading-1 text-[32px] lg:text-[40px]">
                {product.name} Exporter &amp; Supplier from India
              </h1>
              <p className="mt-1 text-tagline text-[var(--brand-forest)]">
                {product.botanicalName} &bull; Origin: {product.origin}
              </p>
              <p className="mt-4 text-body text-[var(--brand-forest)]">
                {product.description}
              </p>
              {product.slug === "cumin-seeds-exporter-india" && (
                <div className="mt-5 rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-4 text-sm leading-7 text-[var(--brand-forest)]">
                  Buyers comparing the{" "}
                  <Link
                    to="/best-cumin-exporter-india"
                    className="font-semibold text-[var(--brand-gold)] hover:text-[var(--brand-deep-green)]"
                  >
                    best cumin exporter in India
                  </Link>
                  {" "}can review this page for full cumin seed specifications,
                  market-grade notes, packing options, and export documentation
                  support from JM Masala.
                </div>
              )}

              {productPair && (
                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-[var(--brand-gold)]/40 bg-[var(--brand-cream)] p-4 text-sm text-[var(--brand-forest)] shadow-sm">
                  <div>
                    <span className="font-bold text-[var(--brand-charcoal)] block text-base">
                      {productPair.title}
                    </span>
                    <span className="text-xs text-[var(--brand-forest)] block mt-1 leading-relaxed">
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

              <div className="mt-8 jm-spec-table">
                <div className="jm-spec-table__header">Full Specifications</div>
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

              {technicalDetails?.physical &&
                renderSpecTable(
                  "Physical Specifications",
                  technicalDetails.physical,
                )}

              {technicalDetails?.chemical &&
                renderSpecTable(
                  "Chemical Specifications",
                  technicalDetails.chemical,
                )}

              {technicalDetails?.microbiological &&
                renderSpecTable(
                  "Microbiological Parameters",
                  technicalDetails.microbiological,
                )}

              {technicalDetails?.contaminants && (
                <section className="mt-8 jm-surface-card p-5">
                  <h2 className="text-tagline not-italic text-[24px] text-[var(--brand-charcoal)]">
                    Contaminants &amp; Safety
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--brand-forest)]">
                    {technicalDetails.contaminants.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {product.qualityGrades && (
                <div className="mt-8 overflow-x-auto jm-grade-table">
                  <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-4 py-3 text-sm font-semibold text-[var(--brand-charcoal)]">
                    Market-specific Quality Grades
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

              {technicalDetails?.exportDetails &&
                renderExportDetails(
                  "Export Details",
                  technicalDetails.exportDetails,
                )}

              {/* Processing Ecosystem */}
              <section className="mt-8 jm-surface-card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-[var(--brand-gold-pale)] pb-3">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                      End-to-End Processing
                    </span>
                    <h2 className="text-tagline not-italic text-[24px] text-[var(--brand-charcoal)]">
                      From Raw Indian {product.name} to Export-Ready Standard
                    </h2>
                  </div>
                  <Link
                    to="/sourcing-network"
                    className="text-xs font-semibold text-[var(--brand-gold)] hover:underline shrink-0"
                  >
                    View Sourcing Network &rarr;
                  </Link>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {SPICE_SUPPLY_CHAIN_STEPS.map((s) => (
                    <div
                      key={s.step}
                      className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-warm-white)] p-4 flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-mono font-bold text-[var(--brand-gold)] mb-1">
                          STAGE {s.step}
                        </div>
                        <h3 className="text-sm font-bold text-[var(--brand-charcoal)]">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-xs text-[var(--brand-forest)] leading-5">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Private Label & Retail Packaging Solutions Callout */}
              <section className="mt-8 rounded-xl border border-[var(--brand-gold)]/40 bg-[var(--brand-cream)] p-6 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                  <div className="max-w-2xl">
                    <span className="inline-block rounded-full bg-[var(--brand-gold)]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-charcoal)]">
                      Private Label &amp; Retail Supply
                    </span>
                    <h2 className="mt-2 text-[22px] font-bold text-[var(--brand-charcoal)]">
                      Need Custom Branded or Retail-Ready {product.name}?
                    </h2>
                    <p className="mt-2 text-sm text-[var(--brand-forest)] leading-6">
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
              </section>

              <section className="mt-8 jm-surface-card p-5">
                <h2 className="text-tagline not-italic text-[24px] text-[var(--brand-charcoal)]">
                  Why International Buyers Choose JM Masala
                </h2>
                <div className="mt-3 space-y-4 text-sm leading-7 text-[var(--brand-forest)]">
                  <p>
                    {product.name} is sourced with export-focused attention to
                    origin, specification alignment, and shipment readiness. For
                    importers comparing Indian suppliers, the product decision is
                    rarely only about price. It also depends on how clearly the
                    exporter handles quality parameters, packing, and destination-market
                    expectations.
                  </p>
                  <p>
                    With sourcing rooted in {product.origin}, JM Masala Trading LLP supports
                    buyers who need {product.keySpec.toLowerCase()} together with
                    responsive communication and product-specific export support.
                  </p>
                  <ul className="space-y-2 pl-5">
                    {applicationHighlights.map((item) => (
                      <li key={item} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mt-8 jm-surface-card p-5">
                <h2 className="text-tagline not-italic text-[24px] text-[var(--brand-charcoal)]">
                  What Buyers Usually Confirm Before Shipment
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-[var(--brand-forest)]">
                  <li>Final purity, moisture, and grade commitment in the contract</li>
                  <li>Lot-wise test support, packing format, and shipment markings</li>
                  <li>Destination-market documents required for customs and buyer approval</li>
                  <li>Lead time, loading plan, and communication during dispatch</li>
                </ul>
              </section>

              <section className="mt-8 jm-surface-card p-5">
                <h2 className="text-tagline not-italic text-[24px] text-[var(--brand-charcoal)]">
                  Frequently Asked Questions
                </h2>
                <div className="mt-4 space-y-4 text-[var(--brand-forest)]">
                  {faqItems.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-base font-semibold text-[var(--brand-charcoal)]">
                        {item.question}
                      </h3>
                        <p className="mt-1 text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* B2B Intent CTA */}
              <section className="mt-8 rounded-xl bg-[var(--brand-deep-green)] p-6 text-white">
                <h2 className="text-[22px] font-bold text-[var(--brand-gold-light)]">
                  Looking for a Reliable Indian {product.name} Supplier?
                </h2>
                <p className="mt-2 text-sm text-gray-200 leading-6">
                  Share your required quantity, specification, packing and destination port with JM Masala Trading LLP. Our export team will provide a comprehensive commercial quotation and specification sheet.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={quoteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="jm-btn jm-btn--primary text-[13px] font-bold"
                  >
                    Request a Quote
                  </a>
                  <a
                    href={specSheetUrl}
                    className="jm-btn jm-btn--outline text-[13px] text-white border-white hover:bg-white/10"
                  >
                    Download Spec Sheet
                  </a>
                </div>
              </section>

              {relatedInsights.length > 0 && (
                <section className="mt-8 jm-surface-card p-5">
                  <h2 className="text-tagline not-italic text-[24px] text-[var(--brand-charcoal)]">
                    Related Insights
                  </h2>
                  <div className="mt-4 space-y-3">
                    {relatedInsights.map((post) => (
                      <div
                        key={post.slug}
                        className="rounded-lg border border-[var(--brand-gold-pale)] px-4 py-3"
                      >
                        <h3 className="text-base font-semibold text-[var(--brand-charcoal)]">
                          {post.title}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--brand-forest)]">
                          {post.excerpt}
                        </p>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="mt-3 inline-flex jm-btn jm-btn--outline text-[13px]"
                        >
                          Read Buyer Guide
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </article>

            <aside className="space-y-6">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-72 w-full rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] object-contain p-5"
                loading="lazy"
                decoding="async"
              />

              {technicalDetails?.processing && (
                <section className="jm-surface-card p-5">
                  <h2 className="text-tagline not-italic text-[24px] text-[var(--brand-charcoal)]">
                    Our Spice Processing
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--brand-forest)]">
                    {technicalDetails.processing.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {technicalDetails?.packaging && (
                <section className="jm-surface-card p-5">
                  <h2 className="text-tagline not-italic text-[24px] text-[var(--brand-charcoal)]">
                    Flexible Packaging for Global Buyers
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--brand-forest)]">
                    {technicalDetails.packaging.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {technicalDetails?.certifications && (
                <section className="jm-surface-card p-5">
                  <h2 className="text-tagline not-italic text-[24px] text-[var(--brand-charcoal)]">
                    Quality &amp; Testing
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--brand-forest)]">
                    {technicalDetails.certifications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {technicalDetails?.optionalBuyerRequirements && (
                <section className="jm-surface-card p-5">
                  <h2 className="text-tagline not-italic text-[24px] text-[var(--brand-charcoal)]">
                    Optional Buyer Requirements
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--brand-forest)]">
                    {technicalDetails.optionalBuyerRequirements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              <div className="flex flex-wrap gap-3">
                <a
                  href={specSheetUrl}
                  className="jm-btn jm-btn--secondary text-[13px]"
                >
                  Download Product Specification Sheet
                </a>
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="jm-btn jm-btn--outline text-[13px]"
                >
                  Request Quote for This Product
                </a>
              </div>
            </aside>
          </div>

          <section className="mt-12">
            <h2 className="jm-heading-2 text-[24px] text-[var(--brand-charcoal)]">
              Related Products
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {relatedProducts.map((related) => (
                <article key={related.slug} className="jm-product-card">
                  <div className="jm-product-card__body">
                    <h3 className="jm-product-card__name">{related.name}</h3>
                    <p className="jm-product-card__description">
                      {related.keySpec}
                    </p>
                    <Link
                      to={`/${related.slug}`}
                      className="mt-3 inline-flex jm-btn jm-btn--outline text-[13px]"
                    >
                      View Specifications
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
