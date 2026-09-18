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
import cuminSeedsImage from "@/assets/cumin.png";

const CUMIN_SPEC_ROWS = [
  { label: "Botanical Name", value: "Cuminum cyminum L." },
  { label: "ITC-HS Code", value: "0909 31 29 (Whole Seeds) / 0909 32 00 (Ground Powder)" },
  { label: "Primary Origin", value: "Unjha, Gujarat and Western Rajasthan, India" },
  { label: "Physical Purity", value: "98% / 99% / 99.5% up to 99.9% Sortex Optical Cleaned" },
  { label: "Moisture Content", value: "Max 8.0% to 10.0% (calibrated to buyer destination)" },
  { label: "Volatile Essential Oil", value: "2.5% to 4.5% v/w (rich in natural cuminaldehyde)" },
  { label: "Admixture / Foreign Matter", value: "Max 0.5% (Europe Quality) to Max 1.5%–2.0% (FAQ Quality)" },
  { label: "Total Ash", value: "Max 8.0% to 9.5%" },
  { label: "Acid Insoluble Ash", value: "Max 1.0% to 1.5%" },
  { label: "Seed Appearance & Color", value: "Brown to greenish-brown with characteristic longitudinal ridges" },
  { label: "Crop Harvest Season", value: "February to April (fresh crop arrival window at APMC Unjha)" },
  { label: "Cleaning Standard", value: "Multi-deck Machine Cleaned + High-Resolution Sortex Optical Color Sorted" },
  { label: "Microbiological Standards", value: "Salmonella: Absent in 25g x 10; E. Coli: <10 CFU/g" },
  { label: "Pesticide & Aflatoxin Limits", value: "Aligned to EU MRLs, US FDA, or destination country requirements" },
  { label: "Shelf Life", value: "12 to 24 months in cool, dry storage (<20°C, <60% RH)" },
];

const CUMIN_MARKET_GRADES = [
  {
    market: "Europe Quality",
    gradeBadge: "99.5% Sortex Clean",
    purity: "99.5% Minimum Purity",
    moisture: "Max 8.0% Moisture",
    admixture: "Max 0.5% Admixture (Foreign matter <0.2%)",
    description:
      "Engineered for European Union food processors, spice blenders, and supermarket packers. Sourced from selected high-altitude lots with rigorous testing for pesticide residues (EU MRLs), Aflatoxins (B1 <5 ppb, Total <10 ppb), and complete absence of Salmonella.",
  },
  {
    market: "USA Quality (ASTA)",
    gradeBadge: "99.0%–99.5% ASTA",
    purity: "99.0% to 99.5% Clean",
    moisture: "Max 8.0% to 9.0% Moisture",
    admixture: "Max 0.8% Admixture",
    description:
      "Prepared in accordance with American Spice Trade Association (ASTA) cleanliness standards. Uniform elongated seed size, high natural cuminaldehyde essential oil retention (3.0%+), and optional steam sterilization for microbiological control.",
  },
  {
    market: "Gulf / Middle East Quality",
    gradeBadge: "98.0% – 99.0% Clean",
    purity: "98.0% to 99.0% Purity",
    moisture: "Max 9.0% to 10.0% Moisture",
    admixture: "Max 1.5% to 2.0% Admixture",
    description:
      "High-volume commercial grade widely preferred for traditional Middle Eastern cuisine, mandi rice seasoning, wholesale re-bagging, and regional food service distributors across UAE, Saudi Arabia, and GCC markets.",
  },
  {
    market: "Singapore / Asian Quality",
    gradeBadge: "99.0% Sortex Clean",
    purity: "99.0% Minimum Purity",
    moisture: "Max 8.5% to 9.0% Moisture",
    admixture: "Max 1.0% Admixture",
    description:
      "Calibrated optical-sorted seeds with clean greenish-brown coloration, free from dead insects, foreign seeds, and field gravel, optimal for Southeast Asian culinary packing and industrial curry formulations.",
  },
];

const CUMIN_SUPPLY_CHAIN_STEPS = [
  {
    step: "01",
    title: "Unjha APMC Mandi Sourcing",
    description:
      "JM Masala is headquartered in Unjha, Gujarat. During the annual harvest window (February–April), our procurement team inspects daily spot arrivals across the APMC market yard, selecting crop lots with high natural oil content and intact seed husks.",
  },
  {
    step: "02",
    title: "Mandi Lot Testing & Acceptance",
    description:
      "Representative samples from candidate lots are verified immediately for moisture (<8.5%), foreign matter, volatile oil, and natural coloration before transport to our processing lines.",
  },
  {
    step: "03",
    title: "Mechanical Vibro-Screening & Destoning",
    description:
      "Raw seeds pass through multi-deck vibratory screeners, high-speed air aspirators, and density-gradient gravity destoners to remove field stones, mud lumps, stems, and empty seed husks.",
  },
  {
    step: "04",
    title: "Sortex Optical Color Sorting",
    description:
      "High-resolution digital optical sorters inspect every seed individually, using high-velocity air nozzles to pneumatically eject discolored, black, or defective grains to achieve 99.5% or 99.9% purity.",
  },
  {
    step: "05",
    title: "Rare-Earth Magnetic & Metal Separation",
    description:
      "Gravity chute inline rare-earth magnets and industrial metal detectors eliminate all ferrous and non-ferrous metallic fragments prior to bagging.",
  },
  {
    step: "06",
    title: "NABL Laboratory Quality Verification",
    description:
      "Finished export batches are sampled and tested at NABL-accredited laboratories for volatile essential oil (ISO 6571), moisture (ASTA 2.0), total ash, microbiological limits, and contract-specified pesticide MRLs.",
  },
  {
    step: "07",
    title: "Moisture-Barrier Export Packaging",
    description:
      "Cumin seeds are packed into 25kg/50kg food-grade woven PP bags with heat-sealed PE inner liners or 3-ply Kraft paper bags, complete with container-level desiccants for ocean voyages.",
  },
  {
    step: "08",
    title: "Ocean Dispatch via Mundra Port",
    description:
      "Container stuffing is supervised in Gujarat. Sealed 20ft or 40ft FCL containers travel ~320 km via highway directly to Mundra Port or Pipavav Port for international vessel loading.",
  },
];

const CUMIN_FAQS = [
  {
    question: "What is the purity of JM Masala cumin seeds?",
    answer:
      "JM Masala supplies cumin seeds in calibrated purity grades of 98%, 99%, 99.5%, and up to 99.9% Super Sortex purity. The exact purity specification is confirmed according to the buyer's requirement and agreed contract terms.",
  },
  {
    question: "Where does JM Masala source cumin seeds?",
    answer:
      "JM Masala is based in Unjha, Gujarat, India, and sources cumin seeds directly through established APMC Unjha mandi networks and regional farm partnerships across Northern Gujarat and Western Rajasthan.",
  },
  {
    question: "What is the moisture specification for export cumin seeds?",
    answer:
      "Current product specifications list maximum moisture between 8.0% and 10.0%, with premium European and North American grades typically calibrated at maximum 8.0% to 8.5% to ensure shelf stability during marine transit.",
  },
  {
    question: "What is the volatile essential oil content of JM Masala cumin?",
    answer:
      "Fresh Unjha cumin arrivals test between 2.5% and 4.5% v/w volatile essential oil (predominantly natural cuminaldehyde), verified via ISO 6571 hydro-distillation testing.",
  },
  {
    question: "What cumin grades are available for international buyers?",
    answer:
      "We supply Europe Quality (99.5% Sortex, EU MRL compliant), USA Quality (99.0%–99.5% ASTA), Singapore Quality (99.0% Sortex), and Gulf Commercial Quality (98%–99%), as well as machine-cleaned whole and split varieties.",
  },
  {
    question: "Does JM Masala supply cumin seeds in bulk container loads?",
    answer:
      "Yes. We specialize in 20ft FCL (~13.0 to 14.0 Metric Tons loose stuffed) and 40ft FCL (~26.0 to 28.0 Metric Tons loose stuffed) export container shipments, as well as consolidated multi-spice containers.",
  },
  {
    question: "Can international buyers request physical samples before ordering?",
    answer:
      "Yes. Importers and procurement managers can contact JM Masala to request representative physical samples (250g to 500g) dispatched via international courier (DHL/FedEx) along with batch specification sheets.",
  },
  {
    question: "Can JM Masala provide Certificate of Analysis (COA) and pesticide testing?",
    answer:
      "Yes. Every export shipment is accompanied by a Certificate of Analysis (COA) from accredited NABL laboratories verifying purity, moisture, volatile oil, microbiological parameters, and destination-specific pesticide residue limits (EU/US FDA).",
  },
  {
    question: "Which global export markets does JM Masala supply?",
    answer:
      "JM Masala exports cumin seeds to commercial importers, spice millers, and distributors across Europe (UK, Germany, Netherlands), North America (USA, Canada), the Middle East (UAE, Saudi Arabia), and Asia-Pacific (Singapore, Australia).",
  },
];

const CuminSeedsPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Cumin Seeds (Unjha Jeera 99.5% Sortex Export Procurement)",
      "1x 20ft FCL (~13-14 MT)",
    ),
  );

  const canonicalUrl = `${SITE_URL}/cumin-seeds-exporter-india`;
  const productImageUrl = `${SITE_URL}${cuminSeedsImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: "Cumin Seeds (Jeera)",
    description:
      "Export-grade Indian cumin seeds (jeera) from Unjha, Gujarat. 99.5% Sortex purity, high volatile oil (2.5%-4.5%), lab tested, FOB Mundra and CIF global supply.",
    image: [productImageUrl],
    sku: "JMM-CUMIN-SEEDS",
    mpn: "JMM-CUMIN-SEEDS",
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
    additionalProperty: CUMIN_SPEC_ROWS.map((spec) => ({
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
        name: "Cumin Seeds Exporter India",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CUMIN_FAQS.map((faq) => ({
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
        title="Cumin Seeds Exporter from India | Unjha Jeera | JM Masala"
        description="JM Masala supplies export-grade cumin seeds from Unjha, Gujarat, India. 98%, 99% & 99.5% Sortex purity, high volatile oil (2.5%-4.5%), lab tested, FOB Mundra and CIF global export."
        path="/cumin-seeds-exporter-india"
        imageUrl={productImageUrl}
        imageAlt="Export-grade cumin seeds supplied by JM Masala from Unjha Gujarat India"
        type="product"
        keywords={[
          "cumin seeds exporter India",
          "cumin seeds supplier India",
          "Indian cumin supplier",
          "Unjha cumin exporter",
          "cumin seeds from Gujarat",
          "bulk cumin seeds India",
          "cumin seed specifications",
          "99.5 purity cumin",
          "cumin exporter Gujarat",
          "jeera exporter India",
          "Sortex cumin seeds",
          "JM Masala cumin",
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
              Cumin Seeds Exporter from India
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative overflow-hidden bg-[var(--brand-deep-green)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#24422b] via-[#0d2214] to-[#07150c] opacity-95" />
        <div className="jm-container relative py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold-light)]">
                <MapPin className="h-3.5 w-3.5" /> Unjha, Gujarat, India — Cumin Trade Hub
              </p>
              <h1 className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-white md:text-5xl">
                Cumin Seeds Exporter from India
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--brand-gold-light)] md:text-xl">
                Indian Jeera | Unjha, Gujarat | Export-Grade Bulk Supply
              </p>

              {/* Factual Opening Paragraph (100–150 words) */}
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[rgba(255,255,255,0.9)]">
                <p>
                  JM Masala supplies export-grade cumin seeds from Unjha, Gujarat, India, to international
                  importers, spice distributors, food manufacturers and bulk buyers. Our cumin is sourced
                  through established Gujarat trade networks and supplied according to agreed requirements
                  for purity, moisture, admixture, oil content, appearance, cleaning and packing.
                </p>
                <p>
                  Buyers can request product specifications, samples, laboratory documentation and export
                  quotations based on their destination and contract requirements.
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
                  View Technical Specifications
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
                  src={cuminSeedsImage}
                  alt="Export-grade cumin seeds supplied by JM Masala from Unjha Gujarat India"
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
                  <span className="text-[var(--brand-gold-light)]">Primary Mandi</span>
                  <p className="mt-1 font-semibold text-white">APMC Unjha, Gujarat</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">ITC-HS Code</span>
                  <p className="mt-1 font-semibold text-white">0909 31 29 (Whole)</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Purity Calibration</span>
                  <p className="mt-1 font-semibold text-white">98% – 99.9% Sortex</p>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-[rgba(255,255,255,0.65)]">
                Export-grade Indian Cumin Seeds (Jeera) processed and supplied from Unjha, Gujarat.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Cumin Seeds at a Glance */}
      <section className="border-b border-[var(--brand-gold-pale)] bg-white py-10">
        <div className="jm-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/50 p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-forest)]">Purity Grades</span>
              <p className="mt-1 font-[var(--font-display)] text-2xl font-bold text-[var(--brand-charcoal)]">98% to 99.5%+</p>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">Machine cleaned and Sortex optical graded</p>
            </div>
            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/50 p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-forest)]">Volatile Oil</span>
              <p className="mt-1 font-[var(--font-display)] text-2xl font-bold text-[var(--brand-charcoal)]">2.5% to 4.5%</p>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">High cuminaldehyde essential oil retention</p>
            </div>
            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/50 p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-forest)]">Container Loading</span>
              <p className="mt-1 font-[var(--font-display)] text-2xl font-bold text-[var(--brand-charcoal)]">13–14 MT / 20ft</p>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">Loose stuffed in 25kg / 50kg PP bags</p>
            </div>
            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/50 p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-forest)]">Export Port</span>
              <p className="mt-1 font-[var(--font-display)] text-2xl font-bold text-[var(--brand-charcoal)]">Mundra Port</p>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">Direct highway transit from Unjha processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Specifications Table */}
      <section id="specifications" className="jm-section jm-section--white scroll-mt-12">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Technical Parameters</p>
            <h2 className="jm-section-heading">Cumin Seeds Specifications</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala lists cumin seed grades of 98%, 99%, and 99.5% purity, subject to agreed contract
              specifications. Moisture specifications range from a maximum of 8% to 10% depending on the
              agreed grade and destination requirement.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--brand-gold-pale)] bg-white shadow-sm">
            <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-6 py-4">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
                Standard Commercial Specifications: Indian Cumin Seeds (Jeera)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--brand-gold-pale)] bg-stone-50 text-xs font-semibold uppercase tracking-wider text-[var(--brand-charcoal)]">
                    <th className="px-6 py-3.5">Parameter</th>
                    <th className="px-6 py-3.5">JM Masala Commercial Specification</th>
                    <th className="px-6 py-3.5">Testing Method / Benchmark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--brand-gold-pale)]">
                  {CUMIN_SPEC_ROWS.map((row) => (
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
                          ? "Gravimetric / Visual Separation"
                          : row.label.includes("Ash")
                          ? "ISO 928 / ISO 930"
                          : "Contract / NABL Laboratory Standard"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/60 px-6 py-4 text-xs leading-relaxed text-[var(--brand-forest)]">
              <strong className="text-[var(--brand-charcoal)]">Buyer-Specific Specification: </strong>
              Specifications can be adjusted according to agreed buyer requirements, destination-market
              standards, and contract specifications. Pre-shipment laboratory test reports (COAs) are
              conducted by accredited NABL facilities.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Market-Specific Specifications */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Destination Calibration</p>
            <h2 className="jm-section-heading">Cumin Seed Specifications by Buyer Market</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Cumin import requirements vary significantly across global regulatory and industrial
              zones. We configure processing, cleaning thresholds, and laboratory testing parameters
              specifically for each buyer's commercial market:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {CUMIN_MARKET_GRADES.map((grade) => (
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
            These represent JM Masala's standard commercial grades developed through recurring trade
            experience with importers in each region. Formal contractual specifications are aligned
            directly between buyer and seller before order confirmation.
          </div>
        </div>
      </section>

      {/* Section 4: Cumin Seeds from Unjha, Gujarat */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="jm-section-label">Geographic Origin</p>
              <h2 className="jm-section-heading">Cumin Seeds from Unjha, Gujarat</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Unjha, located in the Mehsana district of Northern Gujarat, is the undisputed focal
                  point of India's seed spice trade. The APMC Unjha market yard is India's largest
                  commercial arrival and price-discovery center for cumin seeds.
                </p>
                <p>
                  The fertile agricultural tracts of Northern Gujarat, Saurashtra, and neighboring Western
                  Rajasthan channel their harvest directly into Unjha. The arid climate, alluvial soils,
                  and low winter humidity produce cumin seeds with high volatile essential oil
                  (2.5% to 4.5% cuminaldehyde) and sharp aromatic pungency.
                </p>
                <p>
                  Operating directly from Unjha enables JM Masala to maintain continuous, daily physical
                  presence in the market yard, securing early fresh-crop arrivals, supervising mechanical
                  cleaning, and overseeing export container loading.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/unjha-cumin-seeds" className="jm-btn jm-btn--secondary">
                  Read Unjha Mandi Sourcing Guide
                </Link>
                <Link to="/cumin-seeds-specifications" className="jm-btn jm-btn--outline">
                  Technical Specifications &amp; COA
                </Link>
              </div>
            </div>

            <aside className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6">
              <h3 className="text-xl font-bold text-[var(--brand-charcoal)]">
                Why Unjha Matters to Cumin Importers
              </h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">Key advantages of sourcing from Unjha, Gujarat:</p>
              <div className="mt-5 space-y-3.5">
                {[
                  {
                    title: "Primary Market Liquidity",
                    desc: "Direct access to thousands of daily farm arrivals during peak harvest (Feb–April).",
                  },
                  {
                    title: "Fresh-Crop Lot Selection",
                    desc: "Immediate on-site evaluation of moisture, color, and volatile oil retention.",
                  },
                  {
                    title: "Specialized Processing Belt",
                    desc: "Concentration of high-resolution Sortex optical color sorting and cleaning infrastructure.",
                  },
                  {
                    title: "Direct Port Highway Access",
                    desc: "~320 km transit to Mundra Port, ensuring minimal overland transit risk.",
                  },
                ].map((point) => (
                  <div key={point.title} className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <div>
                      <strong className="text-[var(--brand-charcoal)]">{point.title}: </strong>
                      <span className="text-[var(--brand-forest)]">{point.desc}</span>
                    </div>
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
            <p className="jm-section-label">Manufacturing &amp; Quality</p>
            <h2 className="jm-section-heading">Cumin Seed Cleaning &amp; Sortex Processing</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Raw mandi arrivals contain dust, dirt balls, field gravel, and discolored grains.
              JM Masala applies a complete mechanical and optical cleaning sequence to achieve purity
              from 98% up to 99.9%:
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CUMIN_SUPPLY_CHAIN_STEPS.map((step) => (
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
              Inspect Our Cleaning &amp; Processing Lines <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Quality Parameters Breakdown */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Quality Metrics</p>
            <h2 className="jm-section-heading">Cumin Seed Quality Parameters Explained</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Every shipment is verified against critical physical, chemical, and organoleptic metrics:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Purity Calibration</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Calibrated across 98% (FAQ), 99% (Machine Cleaned), 99.5% (Sortex Cleaned), and 99.9%
                (Super Sortex). Physical separation confirms exact freedom from weeds and inert matter.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Moisture Control</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Maintained at maximum 8.0% to 10.0%. Low moisture prevents fungal development and mold
                spoilage during maritime transport while maintaining natural husk flexibility.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Admixture &amp; Foreign Matter</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Admixture includes seeds other than cumin, stalks, and dirt. Sortex optical cleaning
                reduces foreign admixture below 0.5% for European and North American buyers.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Volatile Oil Content</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Cumin's distinctive pungency stems from cuminaldehyde. Unjha crop arrivals test between
                2.5% and 4.5% v/w essential oil, verified via hydro-distillation (ISO 6571).
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Appearance &amp; Sizing</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Elongated, oval seeds with characteristic parallel longitudinal ridges. Sized uniformly
                over multi-deck screens to ensure consistent density and visual appeal.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Crop Year &amp; Freshness</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Supplied from the latest harvest crop arrivals. Proper warehousing under temperature and
                humidity-monitored conditions preserves aromatic volatile oils throughout the year.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 7: Export Packaging & Container Logistics */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
            <div>
              <p className="jm-section-label">Logistics &amp; Stowage</p>
              <h2 className="jm-section-heading">Cumin Seed Packaging &amp; Container Stuffing</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Cumin seeds have a bulk density of approximately <strong>480 to 520 g/L</strong>, allowing
                  heavy container loading compared to lighter volumetric seed spices:
                </p>
                <ul className="space-y-2 text-sm text-[var(--brand-charcoal)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span><strong>20ft FCL Container:</strong> 13.0 to 14.0 Metric Tons loose stuffed (~520 to 560 bags of 25kg) or ~11.0 MT palletized.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span><strong>40ft FCL Container:</strong> 26.0 to 28.0 Metric Tons loose stuffed (~22.0 MT palletized).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span><strong>Consolidated Shipments:</strong> Mixed container programs combining Cumin with Coriander, Fennel, and Sesame under one Bill of Lading.</span>
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
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">Packaging Specifications</h3>
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
                  <strong className="text-[var(--brand-charcoal)]">FIBC Jumbo Bulk Bags:</strong>
                  <p className="mt-1 text-xs text-[var(--brand-forest)]">
                    500 kg to 1000 kg big bags with corner lifting loops and discharge spouts for industrial extractors.
                  </p>
                </div>
                <div className="rounded-md border border-[var(--brand-gold-pale)] p-3">
                  <strong className="text-[var(--brand-charcoal)]">Private Label Retail Packaging:</strong>
                  <p className="mt-1 text-xs text-[var(--brand-forest)]">
                    Stand-up zipper pouches (100g, 200g, 500g, 1kg), PET jars, and branded cartons with barcode printing.
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
            <h2 className="jm-section-heading">Cumin Seed Applications</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Indian cumin seeds serve diverse global commercial and culinary functions:
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Spice Wholesale &amp; Retail Repacking</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Sorted bold whole seeds packed into retail pouches and spice jars for consumer grocery shelves worldwide.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Pure Cumin Powder Milling</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Cold-milled ground cumin (40 to 80 mesh) retaining natural aroma and essential oils without heat discoloration.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Curry Powders &amp; Seasoning Blends</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Cornerstone ingredient in garam masala, taco seasoning, chili powders, and commercial barbecue rubs.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Oleoresin &amp; Oil Extraction</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Steam-distilled for cuminaldehyde essential oil and solvent-extracted for high-potency food flavor oleoresins.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Meat Processing &amp; Sausages</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Standard flavoring agent in European sausage formulations, Middle Eastern kebab marinades, and cured meats.
              </p>
            </article>

            <article className="jm-surface-card p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Bakery &amp; Savory Snacks</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Topping and seasoning for savory crackers, artisan breads, cheese flavorings, and snack coatings.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 9: Quality Testing & Export Documentation */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="jm-section-label">Quality Assurance</p>
              <h2 className="jm-section-heading">Quality Testing &amp; Export Documentation</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Every export consignment of cumin seeds is verified against strict physical, chemical,
                  and regulatory standards prior to vessel loading:
                </p>
                <div className="space-y-3 text-sm text-[var(--brand-forest)]">
                  <p>
                    <strong className="text-[var(--brand-charcoal)]">1. NABL Certificate of Analysis (COA): </strong>
                    Pre-shipment batch testing verifying purity, moisture, volatile oil, total ash, and absence of Salmonella.
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
            <h2 className="jm-section-heading">Cumin Seeds FAQ</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Direct, factual answers to frequently asked questions by international spice importers and procurement managers:
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {CUMIN_FAQS.map((faq) => (
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

            <Link
              to="/cumin-powder-exporter-india"
              className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-4 transition-colors hover:border-[var(--brand-deep-green)]"
            >
              <h3 className="font-bold text-[var(--brand-charcoal)]">Cumin Powder (Ground Jeera)</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                100% pure cold-milled cumin powder with custom mesh sizing (40–80 mesh).
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-[var(--brand-deep-green)] py-14 text-white">
        <div className="jm-container text-center">
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl">
            Source Export-Grade Indian Cumin Seeds
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[rgba(255,255,255,0.85)]">
            Connect directly with JM Masala in Unjha, Gujarat, to discuss purity grades, request physical samples,
            confirm container loading, and receive FOB Mundra or CIF global price quotations.
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

export default CuminSeedsPage;
