import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  MapPin,
} from "lucide-react";
import Seo from "@/components/Seo";
import {
  COMPANY,
  DOCUMENTATION_PACKAGE,
  SITE_URL,
  TRUST_BADGES,
  buildProductInquiryMessage,
  buildWhatsAppUrl,
} from "@/data/siteData";
import ajwainSeedsImage from "@/assets/AjwainSeeds.jpg";

const AJWAIN_SPEC_ROWS = [
  { label: "Product Name", value: "Ajwain Seeds" },
  { label: "Alternate Names", value: "Carom Seeds / Bishop's Weed" },
  { label: "Botanical Name", value: "Trachyspermum ammi (syn. Carum copticum)" },
  { label: "ITC-HS Code", value: "0910 99 14 (Whole Seeds) / 0910 99 29 (Ground Powder)" },
  { label: "Origin", value: "Gujarat and Rajasthan, India" },
  { label: "Physical Purity", value: "98.0% / 99.0% / 99.5% Sortex Optical Cleaned" },
  { label: "Moisture Content", value: "Max 8.0% to 10.0% (calibrated to buyer requirement)" },
  { label: "Volatile Essential Oil", value: "2.5% to 5.0% v/w (rich in natural thymol)" },
  { label: "Foreign Matter (Admixture)", value: "Max 0.5% to 1.0% (<0.2% on premium Sortex)" },
  { label: "Total Ash", value: "Max 9.0%" },
  { label: "Acid Insoluble Ash", value: "Max 1.5%" },
  { label: "Color Profile", value: "Natural greyish-green to light olive brown" },
  { label: "Seed Size & Structure", value: "1.5 mm to 2.5 mm small ovoid cremocarps with longitudinal ridges" },
  { label: "Cleaning Standard", value: "Fine Screen Cleaning + Destoning + Sortex Optical Color Sorted" },
  { label: "Microbiological Limits", value: "Salmonella: Absent in 25g; E. Coli: <10 CFU/g" },
  { label: "Pesticide & Residue Standards", value: "Controlled to destination MRLs (EU / US FDA / Gulf / Codex)" },
  { label: "Shelf Life", value: "12 to 18 months under cool, dry storage conditions" },
];

const AJWAIN_MARKET_GRADES = [
  {
    market: "Europe Quality",
    gradeBadge: "99.5% Sortex Clean",
    purity: "99.5% Minimum Purity",
    moisture: "Max 8.0% Moisture",
    admixture: "Max 0.5% (Foreign Matter <0.2%)",
    description:
      "High natural thymol content (3.5%+), low volatile loss, strict microbiological limits, and verified compliance with European Union pesticide MRLs and Aflatoxin regulations.",
  },
  {
    market: "USA Quality (ASTA)",
    gradeBadge: "99.0% ASTA Clean",
    purity: "99.0% ASTA Clean",
    moisture: "Max 9.0% Moisture",
    admixture: "Max 0.8% Admixture",
    description:
      "Prepared to American Spice Trade Association cleanliness standards. Uniform seed sizing, steam-treatment compatible, with aromatic thymol retention for bakery and seasoning formulations.",
  },
  {
    market: "Singapore / Asia",
    gradeBadge: "99.0% Sortex Clean",
    purity: "99.0% Minimum Purity",
    moisture: "Max 9.0% Moisture",
    admixture: "Max 1.0% Admixture",
    description:
      "Calibrated greyish-green appearance, free from foreign seeds, dust, and field stones, optimal for culinary packaging and commercial seasoning manufacture across Southeast Asia.",
  },
  {
    market: "Gulf / Middle East",
    gradeBadge: "98.0% – 99.0% Clean",
    purity: "98.0% to 99.0% Purity",
    moisture: "Max 9.5% Moisture",
    admixture: "Max 1.2% Admixture",
    description:
      "Robust herbal thymol aroma widely used in commercial bakery lines, traditional flatbreads, digestive confectionery, and regional savory snack seasonings.",
  },
];

const AJWAIN_SUPPLY_CHAIN_STEPS = [
  {
    step: "01",
    title: "Gujarat & Mandi Sourcing",
    description:
      "JM Masala operates from Unjha, Gujarat, and procures fresh-crop ajwain seeds directly through agricultural trade networks across Northern Gujarat and Western Rajasthan during the February–April harvest window.",
  },
  {
    step: "02",
    title: "Lot Selection & Quality Screening",
    description:
      "Mandi arrivals are sampled on arrival to test moisture stability (<9%), thymol aroma potency, natural color retention, and physical admixture before acceptance.",
  },
  {
    step: "03",
    title: "Fine Multi-Deck Screening",
    description:
      "Raw seeds pass through vibratory fine-mesh screeners to separate dust, straw, stems, immature grains, and oversized organic debris.",
  },
  {
    step: "04",
    title: "Gravity Destoning & Metal Detection",
    description:
      "Gravity separators eliminate small stones and sand particles matching seed diameter, followed by inline rare-earth magnets and metal detectors for zero ferrous contamination.",
  },
  {
    step: "05",
    title: "Sortex Optical Color Sorting",
    description:
      "High-resolution digital optical sorters inspect each seed individually, using high-speed compressed air jets to eject black, discolored, or defective grains for uniform export appearance.",
  },
  {
    step: "06",
    title: "NABL Laboratory Inspection",
    description:
      "Finished lots are sampled and tested at NABL-accredited laboratories for volatile essential oil (2.5%–5.0% thymol), physical purity, moisture, and destination-specific pesticide residue limits.",
  },
  {
    step: "07",
    title: "Moisture-Barrier Export Packaging",
    description:
      "Seeds are packed in 25kg/50kg food-grade woven PP bags with heat-sealed polyethylene inner liners or 3-ply Kraft paper sacks with container-level desiccants.",
  },
  {
    step: "08",
    title: "Container Stuffing & Port Dispatch",
    description:
      "Containers are stuffed and sealed in Gujarat and dispatched via direct highway to Mundra Port or Pipavav Port, accompanied by complete Phytosanitary, Origin, and shipping documentation.",
  },
];

const AJWAIN_FAQS = [
  {
    question: "Who is an Ajwain seeds exporter from India?",
    answer:
      "JM Masala is an Indian spice exporter supplying Ajwain seeds (carom seeds) for bulk and international buyer enquiries from Unjha, Gujarat, India. Product specifications, packing, and documentation are agreed according to the buyer's destination and contract requirements.",
  },
  {
    question: "What is another name for Ajwain seeds?",
    answer:
      "Ajwain is commonly known in English as carom seeds. It is also historically referred to as Bishop's weed and known botanically as Trachyspermum ammi.",
  },
  {
    question: "What is the purity of JM Masala Ajwain seeds?",
    answer:
      "JM Masala supplies Ajwain seeds in 98% Machine Cleaned, 99% Sortex Cleaned, and 99.5% Super Cleaned purity grades. The exact specification is confirmed against the buyer's agreed contract requirements.",
  },
  {
    question: "Where does JM Masala source Ajwain seeds?",
    answer:
      "JM Masala sources Ajwain seeds through established agricultural trade networks in Northern Gujarat and Western Rajasthan, operating directly from Unjha, Gujarat.",
  },
  {
    question: "What is the moisture specification for Ajwain seeds?",
    answer:
      "Current product specifications list maximum moisture between 8.0% and 10.0%, with premium export grades typically calibrated at maximum 8.0% to 9.0% to ensure long-term shelf stability.",
  },
  {
    question: "What is the essential oil content of JM Masala Ajwain?",
    answer:
      "JM Masala Ajwain seeds test between 2.5% and 5.0% v/w volatile essential oil, rich in natural thymol, which gives it its strong medicinal aroma and digestive properties.",
  },
  {
    question: "Does JM Masala supply bulk Ajwain seeds internationally?",
    answer:
      "Yes. JM Masala supplies Ajwain seeds in 20ft FCL (~12.0 to 13.0 Metric Tons) and 40ft FCL (~24.0 to 26.0 Metric Tons) container loads, as well as consolidated mixed-spice containers.",
  },
  {
    question: "Can buyers request physical samples of Ajwain seeds?",
    answer:
      "Yes. International buyers can contact JM Masala to request representative physical samples (250g to 500g) along with laboratory specification sheets before confirming commercial orders.",
  },
  {
    question: "Can JM Masala provide a Certificate of Analysis (COA)?",
    answer:
      "Yes. Every commercial export shipment includes an accredited NABL laboratory Certificate of Analysis (COA) verifying purity, moisture, volatile oil, microbiological limits, and destination-specific pesticide residues.",
  },
];

const AjwainSeedsPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Ajwain Seeds / Carom Seeds (99% Sortex Export Procurement)",
      "1x 20ft FCL (~12-13 MT)",
    ),
  );

  const canonicalUrl = `${SITE_URL}/ajwain-seeds-exporter-india`;
  const productImageUrl = `${SITE_URL}${ajwainSeedsImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: "Ajwain Seeds (Carom Seeds)",
    description:
      "Export-grade Indian ajwain seeds (carom seeds) from Gujarat. High thymol volatile oil (2.5%-5%), Sortex optical cleaned, 98%-99.5% purity, FOB Mundra and CIF global supply.",
    image: [productImageUrl],
    sku: "JMM-AJWAIN-SEEDS",
    mpn: "JMM-AJWAIN-SEEDS",
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
    url: canonicalUrl,
    additionalProperty: AJWAIN_SPEC_ROWS.map((spec) => ({
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
        "@id": `${SITE_URL}/#organization`,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: ["US", "CA", "GB", "AE", "SA", "SG", "AU", "DE", "NL"],
        },
      },
    },
  };

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
        name: "Ajwain Seeds Exporter India",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AJWAIN_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Seo
        title="Ajwain Seeds Exporter from India | Carom Seeds | JM Masala"
        description="JM Masala supplies Ajwain seeds (carom seeds) from Gujarat, India. 98%, 99% & 99.5% Sortex purity, high thymol oil (2.5%-5%), lab tested, FOB Mundra and CIF global export."
        path="/ajwain-seeds-exporter-india"
        imageUrl={productImageUrl}
        imageAlt="Export-grade Ajwain carom seeds supplied by JM Masala from India"
        type="product"
        keywords={[
          "ajwain seeds exporter India",
          "ajwain seeds supplier India",
          "carom seeds exporter India",
          "carom seeds supplier India",
          "ajwain exporter Gujarat",
          "Indian ajwain seeds",
          "carom seeds wholesale",
          "bulk ajwain seeds",
          "Sortex carom seeds",
          "ajwain seeds specifications",
          "ajwain seed purity",
          "ajwain seed moisture",
          "bishops weed exporter india",
        ]}
        schema={[productSchema, breadcrumbSchema, faqSchema]}
      />

      {/* Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="border-b border-[var(--brand-gold-pale)] bg-white py-3">
        <div className="jm-container">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-[var(--brand-forest)]">
            <li>
              <Link to="/" className="hover:text-[var(--brand-deep-green)]">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/products" className="hover:text-[var(--brand-deep-green)]">Products</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[var(--brand-charcoal)]" aria-current="page">
              Ajwain Seeds Exporter from India
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-[var(--brand-deep-green)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2a3821] via-[#0d2214] to-[#08150c] opacity-95" />
        <div className="jm-container relative py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold-light)]">
                <MapPin className="h-3.5 w-3.5" /> Gujarat, India Sourcing &amp; Export
              </p>
              <h1 className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-white md:text-5xl">
                Ajwain Seeds Exporter from India
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--brand-gold-light)] md:text-xl">
                Indian Carom Seeds | Bulk Export Supply | Buyer-Specific Specifications
              </p>

              {/* Factual Opening Paragraph (100–150 words) */}
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[rgba(255,255,255,0.9)]">
                <p>
                  JM Masala supplies Ajwain seeds (carom seeds) from India for international importers,
                  spice distributors, food manufacturers and bulk buyers. Ajwain is supplied according
                  to agreed specifications for purity, moisture, foreign matter, appearance, packing and
                  destination requirements. Buyers can contact JM Masala for product specifications,
                  samples, laboratory documentation, packing options and export quotations.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="jm-btn jm-btn--primary inline-flex items-center gap-2"
                >
                  Request Export Quotation <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#specifications"
                  className="jm-btn jm-btn--outline border-white text-white hover:bg-white hover:text-[var(--brand-deep-green)]"
                >
                  View Specification Table
                </a>
                <Link
                  to="/contact?intent=sample"
                  className="jm-btn jm-btn--outline border-[var(--brand-gold-light)] text-[var(--brand-gold-light)] hover:bg-[var(--brand-gold-light)] hover:text-[var(--brand-deep-green)]"
                >
                  Request Buyer Sample
                </Link>
              </div>
            </div>

            {/* Product Image & Quick Entity Specs Box */}
            <div className="rounded-xl border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.06)] p-6 backdrop-blur-sm">
              <div className="overflow-hidden rounded-lg bg-black/20">
                <img
                  src={ajwainSeedsImage}
                  alt="Ajwain carom seeds supplied by JM Masala from India"
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  width="500"
                  height="350"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Supplier Entity</span>
                  <p className="mt-1 font-semibold text-white">JM Masala Trading LLP</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Processing Origin</span>
                  <p className="mt-1 font-semibold text-white">Unjha, Gujarat, India</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">ITC-HS Code</span>
                  <p className="mt-1 font-semibold text-white">0910 99 14 (Whole)</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Purity Range</span>
                  <p className="mt-1 font-semibold text-white">98% – 99.5% Sortex</p>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-[rgba(255,255,255,0.65)]">
                Ajwain seeds (carom seeds) supplied by JM Masala from Gujarat, India.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: What Are Ajwain Seeds? & Ajwain vs Carom Seeds */}
      <section className="border-b border-[var(--brand-gold-pale)] bg-white py-12">
        <div className="jm-container">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="jm-section-label">Botanical &amp; Commercial Identity</p>
              <h2 className="jm-section-heading">Are Ajwain Seeds and Carom Seeds the Same?</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  <strong>Yes. Ajwain is commonly known in English as carom seeds.</strong> The product is
                  also referred to historically as Bishop's weed and known botanically as
                  <em> Trachyspermum ammi</em> (syn. <em>Carum copticum</em>). In Indian regional languages
                  and commercial spice mandis, it is uniformly known as <strong>Ajwain</strong> (or Ajmo in Gujarat).
                </p>
                <p>
                  Ajwain seeds are the dried small ovoid fruits (cremocarps) of an annual herbaceous plant
                  belonging to the Apiaceae family (which also includes cumin, fennel, and coriander).
                  They possess distinctive ridged striations, a greyish-green to light olive-brown color,
                  and a pungent, aromatic flavor dominated by high natural <strong>thymol</strong>.
                </p>
              </div>
            </div>

            <aside className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">
                Entity Equivalency Summary
              </h3>
              <div className="mt-4 space-y-2 text-sm text-[var(--brand-charcoal)]">
                <p>• <strong>Hindi / Indian Mandi:</strong> Ajwain (अजवाइन)</p>
                <p>• <strong>Gujarati Trade Name:</strong> Ajmo (અજમો)</p>
                <p>• <strong>English Trade Name:</strong> Carom Seeds</p>
                <p>• <strong>Alternative Name:</strong> Bishop's Weed</p>
                <p>• <strong>Botanical Classification:</strong> Trachyspermum ammi L.</p>
                <p>• <strong>Primary Aroma Constituent:</strong> Natural Thymol (35%–60% of volatile oil)</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 2: Specifications Table */}
      <section id="specifications" className="jm-section jm-section--white scroll-mt-12">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Technical Parameters</p>
            <h2 className="jm-section-heading">Ajwain Seeds / Carom Seeds Specifications</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala provides laboratory-verified commercial specifications for whole Indian Ajwain
              seeds. All parameters are verified using standard ISO and ASTA testing procedures:
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--brand-gold-pale)] bg-white shadow-sm">
            <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-6 py-4">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
                Standard Export Specifications: Indian Ajwain Seeds (Carom)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--brand-gold-pale)] bg-stone-50 text-xs font-semibold uppercase tracking-wider text-[var(--brand-charcoal)]">
                    <th className="px-6 py-3.5">Parameter</th>
                    <th className="px-6 py-3.5">JM Masala Specification</th>
                    <th className="px-6 py-3.5">Testing Method / Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--brand-gold-pale)]">
                  {AJWAIN_SPEC_ROWS.map((row) => (
                    <tr key={row.label} className="hover:bg-[var(--brand-cream)]/40">
                      <td className="whitespace-nowrap px-6 py-3.5 font-semibold text-[var(--brand-charcoal)]">
                        {row.label}
                      </td>
                      <td className="px-6 py-3.5 text-[var(--brand-forest)]">{row.value}</td>
                      <td className="px-6 py-3.5 text-xs text-stone-500">
                        {row.label.includes("Oil")
                          ? "ISO 6571 (Hydro-distillation)"
                          : row.label.includes("Moisture")
                          ? "ASTA 2.0 / ISO 939"
                          : row.label.includes("Purity")
                          ? "Visual & Gravimetric Separation"
                          : row.label.includes("Ash")
                          ? "ISO 928 / ISO 930"
                          : "Contract / NABL Standard"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/60 px-6 py-4 text-xs leading-relaxed text-[var(--brand-forest)]">
              <strong className="text-[var(--brand-charcoal)]">Buyer-Specific Specification: </strong>
              Specifications can be adjusted according to agreed buyer requirements, destination-market
              standards, and contract specifications. Parameters are verified via pre-shipment COA from
              accredited laboratories.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Grades by Buyer Market */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Market Calibration</p>
            <h2 className="jm-section-heading">Ajwain Seeds Grades &amp; Quality by Buyer Market</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Export quality grades are tailored to the regulatory and functional requirements of each destination region:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {AJWAIN_MARKET_GRADES.map((grade) => (
              <article key={grade.market} className="jm-surface-card p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-bold text-[var(--brand-deep-green)]">
                    {grade.gradeBadge}
                  </span>
                  <span className="text-xs text-stone-500">{grade.market}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--brand-charcoal)]">{grade.market}</h3>
                <div className="mt-3 space-y-1.5 text-xs font-medium text-[var(--brand-forest)]">
                  <p>• {grade.purity}</p>
                  <p>• {grade.moisture}</p>
                  <p>• {grade.admixture}</p>
                </div>
                <p className="mt-3 text-xs leading-5 text-[var(--brand-forest)]">{grade.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5 text-xs text-[var(--brand-forest)]">
            <strong className="text-[var(--brand-charcoal)]">Commercial Note: </strong>
            These represent JM Masala's standard commercial grades developed through recurring trade experience
            with importers in each region. Contractual specifications are confirmed against buyer-approved lot samples.
          </div>
        </div>
      </section>

      {/* Section 4: Ajwain Seeds from Gujarat, India */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div>
              <p className="jm-section-label">Geographic Sourcing</p>
              <h2 className="jm-section-heading">Ajwain Seeds from Gujarat, India</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  JM Masala operates from Unjha, Gujarat, and sources Ajwain through established agricultural
                  trade networks across Northern Gujarat and Western Rajasthan.
                </p>
                <p>
                  Gujarat and Rajasthan are India's primary production zones for seed spices. The semi-arid
                  winter climate and well-drained loamy soils allow ajwain crops to mature with concentrated
                  essential oil and sharp aroma. Procurement during peak arrival months (February to April)
                  ensures fresh-crop supply with high natural thymol retention.
                </p>
                <p>
                  Being situated near regional mandis allows daily physical spot selection, enabling our
                  quality team to verify lot purity, seed size, and moisture before processing.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/sourcing-network" className="jm-btn jm-btn--secondary">
                  View Sourcing Network
                </Link>
                <Link to="/spice-exporter-gujarat" className="jm-btn jm-btn--outline">
                  Gujarat Spice Exporter Profile
                </Link>
              </div>
            </div>

            <aside className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6">
              <h3 className="text-xl font-bold text-[var(--brand-charcoal)]">
                The Verified JM Masala Ajwain Supply Chain
              </h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                From Gujarat Mandi Sourcing to International Port Dispatch:
              </p>
              <div className="mt-5 space-y-3">
                {[
                  "Gujarat & Rajasthan Mandi Sourcing",
                  "Direct Lot Selection & Thymol Aroma Testing",
                  "Mechanical Fine-Screening & Destoning",
                  "Air Aspiration (Immature Seed & Dust Removal)",
                  "Sortex Optical Color Sorting",
                  "Batch NABL Laboratory Quality Inspection",
                  "Food-Grade Moisture-Barrier Export Packaging",
                  "Export Documentation & FOB/CIF Ocean Dispatch",
                ].map((item, idx) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 5: Cleaning & Sortex Optical Processing */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Processing Infrastructure</p>
            <h2 className="jm-section-heading">Ajwain Seeds Cleaning &amp; Sortex Optical Sorting</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Because ajwain seeds are small (1.5 mm to 2.5 mm), removing field dust, sand, and stems
              requires calibrated multi-deck vibratory screens, gravity separators, and high-resolution
              optical color sorting:
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AJWAIN_SUPPLY_CHAIN_STEPS.map((step) => (
              <article key={step.step} className="jm-surface-card flex flex-col p-5">
                <span className="font-[var(--font-display)] text-2xl font-bold text-[var(--brand-gold)]">
                  {step.step}
                </span>
                <h3 className="mt-2 text-base font-bold text-[var(--brand-charcoal)]">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link to="/spice-processing-manufacturing" className="jm-btn jm-btn--outline">
              Learn More About Our Processing Infrastructure <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Quality Parameters Breakdown */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Quality Metrics</p>
            <h2 className="jm-section-heading">Ajwain Seeds Quality Parameters Explained</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Quality compliance for international buyers requires control across six core parameters:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Purity Calibration</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Calibrated across 98% (Machine Cleaned), 99% (Sortex Cleaned), and 99.5% (Super Sortex).
                Gravimetric analysis confirms exact freedom from foreign seeds and inert matter.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Moisture Control</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Controlled between 8.0% and 10.0%. Maintaining moisture below 10% prevents fungal
                formation and mycotoxins during ocean voyages while preventing brittle seed breakage.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Foreign Matter (Admixture)</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Strictly controlled below 0.5% in premium Sortex lots and 1.0% in standard machine-cleaned
                grades. Gravity destoners eliminate field gravel and mud lumps.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Volatile Oil (Thymol)</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Ajwain contains 2.5% to 5.0% volatile essential oil, rich in thymol (responsible for its
                sharp medicinal pungency), verified via ISO 6571 hydro-distillation.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Appearance &amp; Color</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Natural greyish-green to light olive-brown with visible longitudinal ridges, sorted
                mechanically and optically without synthetic polishing or chemical colorants.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Seed Size &amp; Uniformity</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Calibrated 1.5 mm to 2.5 mm small ovoid seeds, screened over precise vibratory sieves to
                guarantee uniform bulk density and appearance.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 7: Export Packaging & Container Loading */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
            <div>
              <p className="jm-section-label">Logistics &amp; Stowage</p>
              <h2 className="jm-section-heading">Ajwain Seeds Export Packaging &amp; Container Stuffing</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Ajwain seeds have a heavy bulk density of approximately <strong>450 to 500 g/L</strong>,
                  which allows high-density container loading similar to cumin seeds:
                </p>
                <ul className="space-y-2 text-sm text-[var(--brand-charcoal)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span><strong>20ft FCL Container:</strong> 12.0 to 13.0 Metric Tons loose stuffed (~480 to 520 bags of 25kg) or ~10.5–11.0 MT palletized.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span><strong>40ft FCL Container:</strong> 24.0 to 26.0 Metric Tons loose stuffed (~22.0 MT palletized).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span><strong>Mixed Containers:</strong> Option to consolidate Ajwain with Cumin, Coriander, Fennel, and Mustard seeds under a single bill of lading.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/spice-packaging" className="jm-btn jm-btn--secondary">
                  Explore Packaging Formats
                </Link>
                <Link to="/export-destinations" className="jm-btn jm-btn--outline">
                  View Export Ports
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--brand-gold-pale)] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">Standard Packaging Formats</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-md border border-[var(--brand-gold-pale)] p-3">
                  <strong className="text-[var(--brand-charcoal)]">Woven Polypropylene (PP) Bags:</strong>
                  <p className="mt-1 text-xs text-[var(--brand-forest)]">
                    25kg / 50kg food-grade woven PP bags with heat-sealed PE inner liners protecting against ambient humidity.
                  </p>
                </div>
                <div className="rounded-md border border-[var(--brand-gold-pale)] p-3">
                  <strong className="text-[var(--brand-charcoal)]">Multi-Wall Kraft Paper Sacks:</strong>
                  <p className="mt-1 text-xs text-[var(--brand-forest)]">
                    3-ply paper bags with PE moisture barrier for mechanized food manufacturing facilities in Europe &amp; USA.
                  </p>
                </div>
                <div className="rounded-md border border-[var(--brand-gold-pale)] p-3">
                  <strong className="text-[var(--brand-charcoal)]">Private Label Retail Pouches:</strong>
                  <p className="mt-1 text-xs text-[var(--brand-forest)]">
                    Stand-up zipper pouches (100g, 200g, 500g, 1kg) with custom brand printing, barcoding, and nutrition labeling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Commercial Applications */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Industrial Use</p>
            <h2 className="jm-section-heading">Ajwain Seeds Commercial Applications</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Indian ajwain seeds serve diverse culinary, industrial, and herbal sectors:
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Bakery, Biscuits &amp; Crackers</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Distinctive flavoring agent in savory crackers, spiced biscuits, breadsticks, and artisan bakery snacks.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Digestive Herbal Formulations</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Key ingredient in traditional digestive seasonings, herbal teas, churnas, and antacid wellness products.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Industrial Thymol Extraction</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Steam-distilled for pharmaceutical and cosmetic thymol, valued for natural antiseptic and flavoring properties.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Spice Blends &amp; Seasonings</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Essential component in regional Indian spice blends, chaat masala, fish seasonings, and lentil tadkas.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Pickles &amp; Oil Preservatives</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Used in commercial oil and vinegar pickling brines to enhance aroma and contribute natural preservation.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Retail &amp; Grocery Repacking</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Sortex optical-graded whole seeds packed into retail pouches and spice jars for international consumer markets.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 9: Quality Testing, COA & Export Documentation */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="jm-section-label">Quality Assurance</p>
              <h2 className="jm-section-heading">Quality Testing &amp; Export Documentation</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Every export consignment of Ajwain seeds is backed by rigorous testing and full customs documentation:
                </p>
                <div className="space-y-3 text-sm text-[var(--brand-forest)]">
                  <p>
                    <strong className="text-[var(--brand-charcoal)]">1. NABL Certificate of Analysis (COA): </strong>
                    Pre-shipment batch testing verifying purity, moisture, volatile oil content, total ash, and absence of Salmonella.
                  </p>
                  <p>
                    <strong className="text-[var(--brand-charcoal)]">2. Destination Compliance Screening: </strong>
                    Pre-shipment laboratory analysis for pesticide residues (EU MRLs / US FDA parameters), Aflatoxins, and heavy metals.
                  </p>
                  <p>
                    <strong className="text-[var(--brand-charcoal)]">3. Pre-Shipment Sample Program: </strong>
                    Representative 250g–500g physical samples dispatched via DHL/FedEx for buyer approval prior to commercial dispatch.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/quality-certifications" className="jm-btn jm-btn--secondary">
                  View Certifications &amp; Lab Standards
                </Link>
                <Link to="/contact?intent=sample" className="jm-btn jm-btn--outline">
                  Request Physical Sample
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--brand-gold-pale)] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">Shipment Documentation Package</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">Standard documents provided for international customs clearance:</p>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {[...TRUST_BADGES, ...DOCUMENTATION_PACKAGE].map((doc) => (
                  <div key={doc} className="flex items-center gap-2 rounded bg-[var(--brand-cream)] px-3 py-2 text-xs font-medium text-[var(--brand-charcoal)]">
                    <FileCheck2 className="h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Frequently Asked Questions */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Buyer Inquiries</p>
            <h2 className="jm-section-heading">Ajwain Seeds FAQ</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Direct, factual answers to frequently asked questions by international spice importers and procurement managers:
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {AJWAIN_FAQS.map((faq) => (
              <article key={faq.question} className="jm-surface-card p-6">
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">{faq.question}</h3>
                <p className="mt-2.5 text-sm leading-7 text-[var(--brand-forest)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Authoritative Entity Internal Link Cluster */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Related Spice Portfolio</p>
            <h2 className="jm-section-heading">Explore Companion Indian Seed Spices</h2>
            <p className="mt-2 text-sm text-[var(--brand-forest)]">
              Discover companion seed spices sourced, processed, and exported from our Unjha, Gujarat hub:
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/cumin-seeds-exporter-india"
              className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-4 transition-colors hover:border-[var(--brand-deep-green)]"
            >
              <h3 className="font-bold text-[var(--brand-charcoal)]">Cumin Seeds (Jeera)</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Unjha Sortex 99.5% purity, high essential oil (2.5%–4.5%), bulk export supply.
              </p>
            </Link>

            <Link
              to="/coriander-seeds-exporter-india"
              className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-4 transition-colors hover:border-[var(--brand-deep-green)]"
            >
              <h3 className="font-bold text-[var(--brand-charcoal)]">Coriander Seeds (Dhania)</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Eagle, Scooter &amp; Parrot grades from Gujarat &amp; Rajasthan. Sortex optical cleaned.
              </p>
            </Link>

            <Link
              to="/fennel-seeds-exporter-india"
              className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-4 transition-colors hover:border-[var(--brand-deep-green)]"
            >
              <h3 className="font-bold text-[var(--brand-charcoal)]">Fennel Seeds (Saunf)</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Gujarat bold green and Lucknowi varieties with calibrated essential anethole oil.
              </p>
            </Link>

            <Link
              to="/fenugreek-seeds-exporter-india"
              className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-4 transition-colors hover:border-[var(--brand-deep-green)]"
            >
              <h3 className="font-bold text-[var(--brand-charcoal)]">Fenugreek Seeds (Methi)</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Machine cleaned and Sortex cleaned golden-yellow whole fenugreek seeds.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-[var(--brand-deep-green)] py-14 text-white">
        <div className="jm-container text-center">
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl">
            Source Export-Grade Indian Ajwain Seeds
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[rgba(255,255,255,0.85)]">
            Connect directly with JM Masala in Unjha, Gujarat, to discuss Ajwain seed specifications,
            request physical samples, confirm container stuffing, and receive FOB Mundra or CIF global price quotations.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={quoteUrl} target="_blank" rel="noreferrer" className="jm-btn jm-btn--primary">
              WhatsApp Export Inquiry
            </a>
            <Link to="/contact" className="jm-btn jm-btn--outline border-white text-white hover:bg-white hover:text-[var(--brand-deep-green)]">
              Submit Formal Quotation Request
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AjwainSeedsPage;
