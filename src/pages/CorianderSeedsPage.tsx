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
import corianderSeedsImage from "@/assets/CorianderSeeds.png";

const CORIANDER_SPEC_ROWS = [
  { label: "Botanical Name", value: "Coriandrum sativum L." },
  { label: "ITC-HS Code", value: "0909 21 90 (Whole Seeds) / 0909 22 00 (Ground Powder)" },
  { label: "Origin", value: "Gujarat and Rajasthan, India" },
  { label: "Physical Purity", value: "Min 98.0% up to 99.9% Sortex Optical Cleaned" },
  { label: "Moisture Content", value: "Max 10.0% (calibrated 8.0% – 10.0%)" },
  { label: "Split Seeds (Dhania Dal)", value: "Max 2.0% (Premium) to Max 5.0% (Standard)" },
  { label: "Color Profile", value: "Natural greenish to golden-yellow / light brown" },
  { label: "Commercial Grades", value: "Eagle / Parrot / Badami / Scooter" },
  { label: "Cleaning Standard", value: "Machine Cleaned + Sortex Optical Color Sorted" },
  { label: "Volatile Essential Oil", value: "0.2% to 1.5% v/w (rich in natural linalool)" },
  { label: "Foreign Matter (Admixture)", value: "Max 1.0% (Machine Cleaned) / <0.2% (Sortex)" },
  { label: "Total Ash", value: "Max 6.0%" },
  { label: "Acid Insoluble Ash", value: "Max 1.25%" },
  { label: "Microbiological Standards", value: "Salmonella: Absent in 25g; E. Coli: <10 CFU/g" },
  { label: "Pesticide & Mycotoxin Standards", value: "Controlled to destination MRLs (EU / US FDA / Gulf / Codex)" },
  { label: "Shelf Life", value: "12 to 18 months under cool, dry storage conditions" },
];

const CORIANDER_SUPPLY_CHAIN_STEPS = [
  {
    step: "01",
    title: "Gujarat & Mandi Sourcing",
    description:
      "JM Masala operates from Unjha, Gujarat, and procures coriander directly through agricultural trade networks in Northern Gujarat (Unjha, Gondal) and Southeast Rajasthan (Kota, Ramganj Mandi) during peak winter-spring harvest arrivals.",
  },
  {
    step: "02",
    title: "Lot Selection & Quality Screening",
    description:
      "Every candidate mandi lot undergoes initial moisture testing (<10%), aroma profiling, seed size calibration, and preliminary split count analysis before transfer to the processing facility.",
  },
  {
    step: "03",
    title: "Mechanical Cleaning & Aspiration",
    description:
      "Raw seeds pass through multi-deck vibratory screens and high-velocity air aspirators to separate light hollow husks, straw, dust, immature seeds, and field chaff.",
  },
  {
    step: "04",
    title: "Gravity Destoning & Metal Detection",
    description:
      "Gravity separators eliminate field stones, mud lumps, and gravel matching the seed diameter. Industrial inline rare-earth magnets and metal detectors ensure zero ferrous contamination.",
  },
  {
    step: "05",
    title: "Sortex Optical Color Sorting",
    description:
      "High-resolution digital optical sorters inspect each seed individually, using high-speed compressed air jets to eject grey, black, shrivelled, or discolored grains for uniform appearance.",
  },
  {
    step: "06",
    title: "Quality Inspection & NABL Lab Testing",
    description:
      "Finished lots are sampled and tested at NABL-accredited laboratories for volatile essential oil, physical purity, moisture, Salmonella, E. coli, and destination-specific pesticide residue limits.",
  },
  {
    step: "07",
    title: "Export Packing & Humidity Protection",
    description:
      "Seeds are packaged in food-grade 20kg/25kg woven PP bags with inner polyethylene liners or multi-wall Kraft paper sacks with container-level desiccants to prevent moisture transit condensation.",
  },
  {
    step: "08",
    title: "Export Documentation & Port Dispatch",
    description:
      "Consignments are stuffed into sealed 20ft or 40ft ocean containers and dispatched via highway to Mundra Port or Pipavav Port, accompanied by complete Phytosanitary, Origin, and shipping documentation.",
  },
];

const CORIANDER_FAQS = [
  {
    question: "What is the purity of JM Masala coriander seeds?",
    answer:
      "JM Masala supplies coriander seeds with a minimum purity specification of 98% for standard machine-cleaned lots, up to 99.5% and 99.9% for high-purity Sortex optical-cleaned lots. Final specifications are confirmed against the buyer's agreed contract requirements.",
  },
  {
    question: "Where are JM Masala coriander seeds sourced from?",
    answer:
      "JM Masala sources coriander seeds through established agricultural trade networks in Northern Gujarat (Unjha, Gondal) and Southeast Rajasthan (Kota, Ramganj Mandi) in India, operating from Unjha, Gujarat.",
  },
  {
    question: "Which coriander seed varieties and grades are available?",
    answer:
      "JM Masala currently supplies Eagle, Parrot, and Badami commercial grades, as well as Scooter variety and split coriander seeds (Dhania Dal) according to buyer specifications.",
  },
  {
    question: "Does JM Masala export coriander seeds in bulk container loads?",
    answer:
      "Yes. JM Masala supplies coriander seeds for international bulk buyers and commercial export enquiries, offering both Full Container Loads (FCL) and consolidated mixed-spice containers.",
  },
  {
    question: "Can international buyers request a sample before ordering?",
    answer:
      "Yes. Buyers can contact JM Masala to request representative physical samples, specification sheets, and laboratory documentation before confirming commercial orders.",
  },
  {
    question: "Can coriander seeds be Sortex cleaned?",
    answer:
      "Yes. JM Masala processes coriander seeds through high-resolution Sortex optical color sorters that detect and reject discolored, black, or grey grains to produce uniform export lots.",
  },
  {
    question: "What is the container loading capacity for coriander seeds?",
    answer:
      "Due to the volumetric, hollow seed structure and lower bulk density (~320–380 g/L), a standard 20ft container accommodates approximately 6.5 to 7.5 Metric Tons loose stuffed in 20kg/25kg bags, while a 40ft container holds 14.0 to 16.0 Metric Tons.",
  },
  {
    question: "Can JM Masala supply mixed containers with cumin and other seed spices?",
    answer:
      "Yes. We regularly consolidate mixed container shipments combining Coriander Seeds with Cumin Seeds, Fennel Seeds, Fenugreek, and Sesame Seeds under a single bill of lading with lot-wise phytosanitary clearance.",
  },
];

const CorianderSeedsPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Coriander Seeds (Eagle / Parrot / Badami Export Procurement)",
      "1x 20ft FCL (~6.5-7.5 MT)",
    ),
  );

  const canonicalUrl = `${SITE_URL}/coriander-seeds-exporter-india`;
  const productImageUrl = `${SITE_URL}${corianderSeedsImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: "Coriander Seeds (Dhania)",
    description:
      "Export-grade Indian coriander seeds (Dhania) from Gujarat and Rajasthan. Available in Eagle, Parrot, and Badami grades with machine and Sortex cleaning, high volatile oil, and complete export documentation.",
    image: [productImageUrl],
    sku: "JMM-CORIANDER-SEEDS",
    mpn: "JMM-CORIANDER-SEEDS",
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
    additionalProperty: CORIANDER_SPEC_ROWS.map((spec) => ({
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
        name: "Coriander Seeds Exporter India",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CORIANDER_FAQS.map((faq) => ({
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
        title="Coriander Seeds Exporter from India | Gujarat Dhania | JM Masala"
        description="JM Masala supplies coriander seeds from Gujarat, India. Eagle, Parrot & Badami grades, Sortex cleaned (98%-99.9% purity), lab tested, FOB Mundra and CIF global export."
        path="/coriander-seeds-exporter-india"
        imageUrl={productImageUrl}
        imageAlt="Export-grade coriander seeds from Gujarat India supplied by JM Masala"
        type="product"
        keywords={[
          "coriander seeds exporter India",
          "coriander seeds supplier India",
          "coriander seeds exporter Gujarat",
          "Indian coriander seeds",
          "dhania seeds exporter",
          "coriander seed wholesale supplier",
          "bulk coriander seeds",
          "Eagle coriander seeds",
          "Parrot coriander seeds",
          "Badami coriander seeds",
          "coriander seeds specifications",
          "coriander seeds purity",
          "coriander seeds moisture",
          "coriander seeds export packing",
          "coriander seeds from Gujarat",
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
              Coriander Seeds Exporter from India
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-[var(--brand-deep-green)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1d4d2d] via-[#0d2214] to-[#08170e] opacity-90" />
        <div className="jm-container relative py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold-light)]">
                <MapPin className="h-3.5 w-3.5" /> Gujarat, India Sourcing &amp; Export
              </p>
              <h1 className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-white md:text-5xl">
                Coriander Seeds Exporter from India
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--brand-gold-light)] md:text-xl">
                Gujarat-Origin Coriander Seeds | Eagle, Parrot &amp; Badami Grades | Bulk Export Supply
              </p>

              {/* Factual Introduction Paragraph (100–150 words) */}
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[rgba(255,255,255,0.88)]">
                <p>
                  JM Masala supplies coriander seeds from Gujarat, India, for international importers,
                  spice manufacturers, food processors and distributors. Our coriander seed range includes
                  Eagle, Parrot and Badami types, with specifications covering purity, moisture, splits,
                  color and cleaning requirements. Lots can be machine and Sortex cleaned and prepared
                  according to agreed buyer specifications.
                </p>
                <p>
                  Buyers can request coriander seed samples, specifications, laboratory documentation,
                  packing options and export quotations based on destination and contract requirements.
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
                  src={corianderSeedsImage}
                  alt="Export-grade coriander seeds from Gujarat India"
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  width="500"
                  height="350"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Entity</span>
                  <p className="mt-1 font-semibold text-white">JM Masala Trading LLP</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Processing Origin</span>
                  <p className="mt-1 font-semibold text-white">Unjha, Gujarat, India</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">HS Code</span>
                  <p className="mt-1 font-semibold text-white">0909 21 90 (Whole)</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Purity Range</span>
                  <p className="mt-1 font-semibold text-white">98% – 99.9% Sortex</p>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-[rgba(255,255,255,0.65)]">
                Coriander seeds supplied by JM Masala from Gujarat, India.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Specifications */}
      <section id="specifications" className="jm-section jm-section--white scroll-mt-12">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Technical Data Sheet</p>
            <h2 className="jm-section-heading">Coriander Seeds Specifications</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala provides laboratory-verified commercial specifications for whole and split
              Indian coriander seeds (Dhania). All parameters are verified using standard ISO and ASTA
              testing procedures prior to container stuffing.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--brand-gold-pale)] bg-white shadow-sm">
            <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-6 py-4">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
                Standard Export Specifications: Indian Whole Coriander Seeds (Dhania)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--brand-gold-pale)] bg-stone-50 text-xs font-semibold uppercase tracking-wider text-[var(--brand-charcoal)]">
                    <th className="px-6 py-3.5">Parameter</th>
                    <th className="px-6 py-3.5">Commercial Specification</th>
                    <th className="px-6 py-3.5">Testing Method / Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--brand-gold-pale)]">
                  {CORIANDER_SPEC_ROWS.map((row) => (
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
                          ? "Visual & Gravimetric Analysis"
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
              standards and contract specifications. Parameters are verified via pre-shipment COA from
              accredited laboratories.
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Grades & Varieties */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Commercial Varieties</p>
            <h2 className="jm-section-heading">Coriander Seed Grades &amp; Varieties</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Commercial coriander is segmented into distinct market grades based on appearance, seed
              color, husk fullness, and volatile essential oil content. We supply three primary export
              grades: Eagle, Parrot, and Badami.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Eagle Coriander Seeds */}
            <article className="jm-surface-card flex flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="rounded bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-bold text-[var(--brand-deep-green)]">
                  Primary Grinding Grade
                </span>
                <span className="text-xs text-stone-500">High Linalool</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-[var(--brand-charcoal)]">
                Eagle Coriander Seeds
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-6 text-[var(--brand-forest)]">
                <p>
                  <strong>Commercial Definition:</strong> Standard export grade characterized by
                  yellowish-brown whole seeds with robust volatile oil retention and warm, sweet citrus
                  aroma.
                </p>
                <p>
                  <strong>Appearance &amp; Size:</strong> Golden-tan to light brown globular husks,
                  ranging from 2.5 mm to 4.0 mm in diameter.
                </p>
                <p>
                  <strong>Intended Buyers:</strong> Industrial spice millers, curry powder manufacturers,
                  garam masala blenders, oleoresin extractors, and commercial seasonings producers.
                </p>
                <p>
                  <strong>Available Packing:</strong> 20kg / 25kg PP bags with inner polyethylene liners,
                  or 3-ply multi-wall Kraft paper sacks.
                </p>
                <p>
                  <strong>Minimum Order:</strong> 1x 20ft FCL (~6.5 to 7.5 Metric Tons) or consolidated
                  mixed seed container.
                </p>
              </div>
            </article>

            {/* Parrot Coriander Seeds */}
            <article className="jm-surface-card flex flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="rounded bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-bold text-[var(--brand-deep-green)]">
                  Premium Retail Grade
                </span>
                <span className="text-xs text-stone-500">Bright Green</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-[var(--brand-charcoal)]">
                Parrot Coriander Seeds
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-6 text-[var(--brand-forest)]">
                <p>
                  <strong>Commercial Definition:</strong> Hand-selected and Sortex optical-graded whole
                  coriander seeds distinguished by their vibrant greenish coloration and whole spherical
                  form.
                </p>
                <p>
                  <strong>Appearance &amp; Size:</strong> Distinct green to olive-green uniform whole
                  seeds, 3.0 mm to 4.5 mm diameter, with split count strictly controlled below 2.0%.
                </p>
                <p>
                  <strong>Intended Buyers:</strong> Supermarket retail packing brands, gourmet spice
                  importers, and culinary distributors across Europe, the Americas, and the Gulf.
                </p>
                <p>
                  <strong>Available Packing:</strong> 20kg / 25kg export bags, carton outer cases, or
                  custom private-label consumer pouches (100g to 1kg).
                </p>
                <p>
                  <strong>Minimum Order:</strong> 1x 20ft FCL (~6.5 to 7.5 Metric Tons).
                </p>
              </div>
            </article>

            {/* Badami Coriander Seeds */}
            <article className="jm-surface-card flex flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="rounded bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-bold text-[var(--brand-deep-green)]">
                  Value &amp; Catering Grade
                </span>
                <span className="text-xs text-stone-500">Almond-Brown</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-[var(--brand-charcoal)]">
                Badami Coriander Seeds
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-6 text-[var(--brand-forest)]">
                <p>
                  <strong>Commercial Definition:</strong> Traditional almond-colored (Badami) sun-cured
                  seeds with balanced earthy flavor and cost efficiency for high-volume commercial users.
                </p>
                <p>
                  <strong>Appearance &amp; Size:</strong> Warm almond-brown whole seeds, calibrated 2.0 mm
                  to 3.5 mm diameter with consistent moisture drying.
                </p>
                <p>
                  <strong>Intended Buyers:</strong> Bulk food service distributors, institutional catering
                  suppliers, meat curing operations, and value-oriented food processing facilities.
                </p>
                <p>
                  <strong>Available Packing:</strong> 25kg / 50kg food-grade woven PP bags.
                </p>
                <p>
                  <strong>Minimum Order:</strong> 1x 20ft FCL (~6.5 to 7.5 Metric Tons).
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 3: Gujarat Entity & Sourcing */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div>
              <p className="jm-section-label">Geographic Sourcing</p>
              <h2 className="jm-section-heading">Coriander Seeds from Gujarat, India</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  JM Masala operates from Unjha, Gujarat, and sources coriander through established
                  Gujarat trade networks. Unjha is globally recognized as one of India's foremost trading
                  and processing hubs for seed spices.
                </p>
                <p>
                  Our sourcing radius covers prime agricultural belts across Northern Gujarat (including
                  Unjha and Saurashtra / Gondal mandis) and the adjacent coriander tracts of Southeast
                  Rajasthan (including Kota and Ramganj Mandi, India's largest physical market for
                  coriander). Procurement during peak arrival months (March to May) ensures fresh-crop
                  lots with optimal aroma and natural color retention.
                </p>
                <p>
                  Operating in proximity to agricultural mandis allows daily lot-by-lot inspection of raw
                  crop arrivals, enabling our team to select batches matching buyer requirements before
                  processing.
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
                The Verified JM Masala Supply Chain
              </h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                From Gujarat Mandi Sourcing to International Port Dispatch:
              </p>
              <div className="mt-5 space-y-3">
                {[
                  "Gujarat & Rajasthan Mandi Sourcing",
                  "Direct Lot Selection & Moisture Testing",
                  "Mechanical Vibro-Screening & Destoning",
                  "Air Aspiration (Hollow Chaff Removal)",
                  "Sortex Optical Color Sorting",
                  "Batch NABL Laboratory Quality Inspection",
                  "Food-Grade Export Packaging with Desiccants",
                  "Export Documentation & FOB/CIF Shipment",
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

      {/* Section 4: Cleaning & Sorting Process */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Processing Infrastructure</p>
            <h2 className="jm-section-heading">How JM Masala Sources, Cleans &amp; Sorts Coriander Seeds</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Raw coriander from mandi yards contains field gravel, dust, stems, and immature grains.
              JM Masala applies a rigorous mechanical and optical cleaning sequence to achieve export
              specifications.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORIANDER_SUPPLY_CHAIN_STEPS.map((step) => (
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

      {/* Section 5: Quality Parameters */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Quality Attributes</p>
            <h2 className="jm-section-heading">Coriander Seeds Quality Parameters</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Quality compliance for international trade requires disciplined control across five
              fundamental physical and chemical parameters:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Purity</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Calibrated from 98.0% (standard machine-cleaned) up to 99.5% and 99.9% (Sortex optical).
                We measure purity by gravimetric separation to verify freedom from foreign matter.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Moisture</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Controlled between 8.0% and 10.0%. Maintaining moisture below 10% prevents mold formation
                and mycotoxins during ocean voyage, while avoiding overly dry brittle husks.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Splits (Dhania Dal)</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Whole coriander consists of two cremocarps. We control split count to &lt;2.0% for premium
                grades and &lt;5.0% for standard lots, ensuring uniform seed appearance.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Color Integrity</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Naturally green, golden-yellow, or light brown according to variety. Lots are sorted
                strictly by optical color cameras without synthetic colorants or chemical polishing.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Foreign Matter</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Restricted to maximum 1.0% in machine cleaned, and &lt;0.2% in Sortex grades. Stones,
                mud balls, and metallic particles are fully removed through gravity and magnetic stages.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 6: Export Packing & Container Logistics */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
            <div>
              <p className="jm-section-label">Logistics &amp; Packaging</p>
              <h2 className="jm-section-heading">Coriander Seeds Export Packing &amp; Container Loading</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Whole coriander seeds have a hollow globular structure with an average bulk density of
                  <strong> ~320 to 380 g/L</strong>, which is considerably lighter than cumin seeds
                  (~480 to 520 g/L). Consequently, container stuffing weights reflect volumetric capacity:
                </p>
                <ul className="space-y-2 text-sm text-[var(--brand-charcoal)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span><strong>20ft FCL Container:</strong> 6.5 to 7.5 Metric Tons loose stuffed (~325 to 375 bags of 20kg).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span><strong>40ft FCL Container:</strong> 14.0 to 16.0 Metric Tons loose stuffed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span><strong>Palletized Shipments:</strong> ~6.0 MT in 20ft / ~12.0–13.0 MT in 40ft (shrink-wrapped on fumigated wooden or plastic pallets).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span><strong>Mixed Containers:</strong> Option to consolidate Coriander with Cumin, Fennel, Fenugreek, and Mustard seeds under a single bill of lading.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/spice-packaging" className="jm-btn jm-btn--secondary">
                  View Packaging Capabilities
                </Link>
                <Link to="/private-label-spices" className="jm-btn jm-btn--outline">
                  Private Label Options
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--brand-gold-pale)] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">Standard Packaging Formats</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-md border border-[var(--brand-gold-pale)] p-3">
                  <strong className="text-[var(--brand-charcoal)]">Woven Polypropylene (PP) Bags:</strong>
                  <p className="mt-1 text-xs text-[var(--brand-forest)]">
                    20kg / 25kg / 50kg food-grade woven PP bags with heat-sealed polyethylene inner liner for moisture resistance.
                  </p>
                </div>
                <div className="rounded-md border border-[var(--brand-gold-pale)] p-3">
                  <strong className="text-[var(--brand-charcoal)]">Multi-Wall Kraft Paper Sacks:</strong>
                  <p className="mt-1 text-xs text-[var(--brand-forest)]">
                    3-ply paper sacks with PE barrier layer for European and North American mechanized food production plants.
                  </p>
                </div>
                <div className="rounded-md border border-[var(--brand-gold-pale)] p-3">
                  <strong className="text-[var(--brand-charcoal)]">Bulk FIBC Jumbo Bags:</strong>
                  <p className="mt-1 text-xs text-[var(--brand-forest)]">
                    500 kg to 800 kg big bags with corner lifting loops and discharge spouts for industrial spice millers.
                  </p>
                </div>
                <div className="rounded-md border border-[var(--brand-gold-pale)] p-3">
                  <strong className="text-[var(--brand-charcoal)]">Private Label Retail Pouches:</strong>
                  <p className="mt-1 text-xs text-[var(--brand-forest)]">
                    Stand-up zipper pouches (100g, 200g, 500g, 1kg) with custom brand printing, barcoding, and nutrition facts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Commercial Applications */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">End-Use Markets</p>
            <h2 className="jm-section-heading">Coriander Seeds Commercial Applications</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Indian coriander seeds are utilized globally across multiple food processing and culinary sectors:
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Spice Milling &amp; Ground Dhania</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Cold-milled into pure coriander powder (30 to 60 mesh) for home cooking and industrial culinary seasonings.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Curry Powders &amp; Garam Masala</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Forms 30% to 50% of the volume in traditional curry powder recipes and global spice blend formulations.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Meat Curing, Sausages &amp; Rubs</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Essential flavoring agent in European sausage manufacturing, biltong, pastrami curing, and BBQ rubs.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Pickling &amp; Canning Brines</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Whole seeds provide sweet-peppery flavor in commercial pickle brines, relishes, and vegetable canning.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Brewing &amp; Distilled Spirits</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Key botanical in Belgian-style wheat beers (Witbier), botanical gins, and artisanal herbal liqueurs.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Essential Oil &amp; Oleoresin Extraction</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Steam-distilled for natural linalool oil and supercritically extracted for high-potency food flavor oleoresins.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 8: Why Buy From JM Masala */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Buyer Partnership</p>
            <h2 className="jm-section-heading">Why International Buyers Work With JM Masala</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              We focus on verifiable operational capabilities, consistent grading, and transparent export documentation:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Gujarat Trade Sourcing",
                desc: "Located in Unjha, Gujarat, with direct APMC mandi access across Gujarat and Rajasthan growing tracts.",
              },
              {
                title: "Grade Selection (Eagle, Parrot, Badami)",
                desc: "Supplying genuine commercial grades matching agreed color, aroma, and seed-size specifications.",
              },
              {
                title: "Mechanical & Sortex Cleaning",
                desc: "Multi-deck vibro-cleaning, de-stoning, aspiration, and high-resolution optical color sorting.",
              },
              {
                title: "Buyer-Specific Specifications",
                desc: "Specifications tailored to contract agreements and destination country regulatory requirements.",
              },
              {
                title: "Moisture-Barrier Packaging",
                desc: "20kg/25kg woven PP bags with inner liners, multi-wall Kraft paper sacks, or bulk FIBC packaging.",
              },
              {
                title: "Pre-Shipment Sample Dispatch",
                desc: "Representative physical samples dispatched for buyer evaluation and approval prior to order booking.",
              },
              {
                title: "NABL Laboratory Documentation",
                desc: "Lot-wise Certificates of Analysis (COAs) covering volatile oil, moisture, purity, and microbiology.",
              },
              {
                title: "Complete Export Documentation",
                desc: "Phytosanitary Certificates, Certificate of Origin, Fumigation, Bill of Lading, and commercial papers.",
              },
              {
                title: "FOB & CIF Quotation Capability",
                desc: "Competitive quotations offered FOB Mundra/Pipavav or CIF/CFR to major global seaports.",
              },
            ].map((item) => (
              <article key={item.title} className="jm-surface-card p-5">
                <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--brand-gold)]" />
                  <h3 className="font-bold text-[var(--brand-charcoal)]">{item.title}</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Sample, COA & Documentation */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="jm-section-label">Compliance &amp; Verification</p>
              <h2 className="jm-section-heading">Sample, COA &amp; Export Documentation</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  To ensure quality transparency, JM Masala facilitates pre-shipment sampling and comprehensive
                  compliance documentation for every coriander export shipment:
                </p>
                <div className="space-y-3 text-sm text-[var(--brand-forest)]">
                  <p>
                    <strong className="text-[var(--brand-charcoal)]">1. Pre-Shipment Sample Program: </strong>
                    Prospective importers can request 250g to 500g physical samples via international courier
                    (DHL/FedEx) along with batch specification data sheets.
                  </p>
                  <p>
                    <strong className="text-[var(--brand-charcoal)]">2. Certificate of Analysis (COA): </strong>
                    Independent testing from NABL-accredited laboratories verifying purity, moisture, volatile oil
                    content, total ash, acid-insoluble ash, and absence of Salmonella.
                  </p>
                  <p>
                    <strong className="text-[var(--brand-charcoal)]">3. Regulatory &amp; Pesticide Testing: </strong>
                    Pesticide residue screenings (EU MRL / US FDA limits), aflatoxin B1/total testing, and heavy metals
                    screening conducted upon buyer agreement.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/quality-certifications" className="jm-btn jm-btn--secondary">
                  View Quality Certifications
                </Link>
                <Link to="/contact?intent=sample" className="jm-btn jm-btn--outline">
                  Request Coriander Sample
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">Shipment Documentation Package</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">Standard documents provided for customs clearance:</p>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {[...TRUST_BADGES, ...DOCUMENTATION_PACKAGE].map((doc) => (
                  <div key={doc} className="flex items-center gap-2 rounded bg-white px-3 py-2 text-xs font-medium text-[var(--brand-charcoal)] shadow-xs">
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
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Buyer Inquiries</p>
            <h2 className="jm-section-heading">Coriander Seeds FAQ</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Direct, factual answers to frequently asked questions by international spice importers and wholesale buyers:
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {CORIANDER_FAQS.map((faq) => (
              <article key={faq.question} className="jm-surface-card p-6">
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">{faq.question}</h3>
                <p className="mt-2.5 text-sm leading-7 text-[var(--brand-forest)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Authoritative Entity Internal Linking */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Related Spice Portfolio</p>
            <h2 className="jm-section-heading">Explore Related Indian Seed Spices</h2>
            <p className="mt-2 text-sm text-[var(--brand-forest)]">
              Discover companion seed spices sourced, processed, and exported from our Unjha, Gujarat hub:
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/cumin-seeds-exporter-india"
              className="rounded-lg border border-[var(--brand-gold-pale)] p-4 transition-colors hover:border-[var(--brand-deep-green)] hover:bg-[var(--brand-cream)]/40"
            >
              <h3 className="font-bold text-[var(--brand-charcoal)]">Cumin Seeds (Jeera)</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Unjha Sortex 99.5% purity, high essential oil (2.5%–4.5%), bulk export supply.
              </p>
            </Link>

            <Link
              to="/coriander-powder-exporter-india"
              className="rounded-lg border border-[var(--brand-gold-pale)] p-4 transition-colors hover:border-[var(--brand-deep-green)] hover:bg-[var(--brand-cream)]/40"
            >
              <h3 className="font-bold text-[var(--brand-charcoal)]">Coriander Powder (Dhania)</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Cold-milled fragrant coriander powder with natural aroma retention and zero additives.
              </p>
            </Link>

            <Link
              to="/fennel-seeds-exporter-india"
              className="rounded-lg border border-[var(--brand-gold-pale)] p-4 transition-colors hover:border-[var(--brand-deep-green)] hover:bg-[var(--brand-cream)]/40"
            >
              <h3 className="font-bold text-[var(--brand-charcoal)]">Fennel Seeds (Saunf)</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Gujarat bold green and Lucknowi varieties with calibrated essential anethole oil.
              </p>
            </Link>

            <Link
              to="/unjha-cumin-seeds"
              className="rounded-lg border border-[var(--brand-gold-pale)] p-4 transition-colors hover:border-[var(--brand-deep-green)] hover:bg-[var(--brand-cream)]/40"
            >
              <h3 className="font-bold text-[var(--brand-charcoal)]">Unjha Cumin Seeds Hub</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                APMC mandi sourcing, arrival calendar, and export supply from Unjha, Gujarat.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-[var(--brand-deep-green)] py-14 text-white">
        <div className="jm-container text-center">
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl">
            Source Export-Grade Indian Coriander Seeds
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[rgba(255,255,255,0.85)]">
            Connect with JM Masala to discuss Eagle, Parrot, and Badami coriander seed grades,
            request physical samples, confirm container loading, and receive FOB Mundra or CIF price quotations.
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

export default CorianderSeedsPage;
