import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Scale,
  Sparkles,
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
import fennelSeedsImage from "@/assets/FennelSeeds.png";

const FENNEL_SPEC_ROWS = [
  { label: "Product Name", value: "Fennel Seeds" },
  { label: "Common Indian Name", value: "Saunf / Variyali (વરિયાળી / सौंफ)" },
  { label: "Botanical Name", value: "Foeniculum vulgare Mill." },
  { label: "ITC-HS Code", value: "0909 61 29 (Whole Seeds) / 0909 62 29 (Ground Powder)" },
  { label: "Origin", value: "Unjha, Gujarat and Rajasthan, India" },
  { label: "Physical Purity", value: "Minimum 99.0% / 99.5% Sortex Optical Cleaned" },
  { label: "Moisture Content", value: "Maximum 8.0% (standard target 7.0% to 8.0%)" },
  { label: "Broken Seeds", value: "Maximum 1.0%" },
  { label: "Color Profile", value: "Natural greenish-brown to light olive green" },
  { label: "Available Grades", value: "Bold Grade / Small Grade / Singapore Grade" },
  { label: "Foreign Matter (Admixture)", value: "Max 0.5% (Sortex) / Max 1.0% (Machine Cleaned)" },
  { label: "Volatile Essential Oil", value: "1.5% to 3.0%+ v/w (rich in trans-anethole and fenchone)" },
  { label: "Total Ash", value: "Maximum 8.0%" },
  { label: "Acid Insoluble Ash", value: "Maximum 1.2%" },
  { label: "Seed Morphology", value: "Oblong, curved cremocarps with 5 prominent longitudinal ridges" },
  { label: "Cleaning Standard", value: "Air Aspiration + Destoning + Sortex Optical Color Sorted" },
  { label: "Metal Control", value: "Inline rare-earth magnetic separation & digital metal detection" },
  { label: "Microbiological Limits", value: "Salmonella: Absent in 25g; E. Coli: <10 CFU/g" },
  { label: "Pesticide & Residue Limits", value: "Controlled to destination MRLs (EU, US FDA, GCC, Codex)" },
  { label: "Shelf Life", value: "18 to 24 months under cool, dry warehouse conditions" },
];

const FENNEL_MARKET_GRADES = [
  {
    gradeName: "Bold Fennel Seeds",
    badge: "99.5% Sortex Clean",
    purity: "Min. 99.5% Purity",
    moisture: "Max 8.0% Moisture",
    broken: "Max 1.0% Broken",
    description:
      "Large, plump, oblong seeds with prominent greenish ribs and high visual luster. Selected for premium retail consumer packs, whole spice displays, European and American culinary blenders, and commercial bakery toppings.",
  },
  {
    gradeName: "Small Fennel Seeds",
    badge: "High Volatile Oil",
    purity: "Min. 99.0% Purity",
    moisture: "Max 8.0% Moisture",
    broken: "Max 1.0% Broken",
    description:
      "Concentrated smaller seed size with intense sweet anethole aroma and high volatile essential oil (2.0%–3.5%). Widely procured for sugar-coated confectionery mukhwas, savory spice seasonings, herbal teas, and ground powder processing.",
  },
  {
    gradeName: "Singapore Fennel Seeds",
    badge: "Singapore Quality",
    purity: "Min. 99.0% Purity",
    moisture: "Max 8.5% Moisture",
    broken: "Max 1.2% Broken",
    description:
      "The definitive international trading standard for Southeast Asian and Middle Eastern spice packers. Calibrated for uniform olive-green color, strict destoning with zero sand or clay lumps, and balanced bulk density.",
  },
  {
    gradeName: "Lucknow & Abu Road Style",
    badge: "Delicate Sweet Chewing",
    purity: "99.5% Super Sortex",
    moisture: "Max 7.5% Moisture",
    broken: "Max 0.8% Broken",
    description:
      "Thin, slender, vivid green seeds celebrated for their tender texture, low bitterness, and naturally cooling sweet flavor. The premier choice for fine dining post-meal digestive mukhwas and premium confectionery gifting.",
  },
];

const FENNEL_SUPPLY_CHAIN_STEPS = [
  {
    step: "01",
    title: "Unjha & North Gujarat Mandi Procurement",
    description:
      "JM Masala procures fresh-crop fennel directly through APMC market yards across North Gujarat (Unjha, Mehsana, Visnagar, Patan) and Saurashtra during the peak February–April harvest.",
  },
  {
    step: "02",
    title: "Incoming Lot Sampling & Moisture Testing",
    description:
      "Arrival bags are sampled at our Unjha facility to test moisture (<8%), green tint retention, seed firmness, anethole fragrance, and admixture percentage before warehousing.",
  },
  {
    step: "03",
    title: "Air Aspiration & Multi-Deck Screening",
    description:
      "Raw seeds pass through high-volume air aspirators to remove dust, chaff, and light hollow grains, followed by multi-deck vibratory screens to separate straw, stems, and seed pods.",
  },
  {
    step: "04",
    title: "High-Density Gravity Destoning",
    description:
      "Vibratory gravity destoners separate mud lumps, gravel, and field stones of matching size and density, followed by inline rare-earth magnets to catch any metallic debris.",
  },
  {
    step: "05",
    title: "Sortex Optical Color Sorting",
    description:
      "High-resolution digital optical sorters inspect each seed individually, using high-speed compressed air jets to eject dark, black, discolored, or defective grains for uniform export appearance.",
  },
  {
    step: "06",
    title: "Digital Metal Detection Check",
    description:
      "Cleaned lots pass through high-sensitivity industrial metal detectors to ensure zero ferrous, non-ferrous, and stainless steel particles in the export packaging line.",
  },
  {
    step: "07",
    title: "NABL Laboratory Quality Inspection & COA",
    description:
      "Every production lot is analyzed by accredited testing laboratories for physical purity, moisture, volatile oil content, microbiological safety, and destination-specific pesticide MRLs.",
  },
  {
    step: "08",
    title: "Moisture-Barrier Export Packing & Port Dispatch",
    description:
      "Seeds are packed into food-grade woven PP bags with heat-sealed PE inner liners, multi-wall Kraft sacks, or carton boxes, and dispatched via express highway to Mundra Port or Pipavav Port.",
  },
];

const FENNEL_FAQS = [
  {
    question: "What are fennel seeds called in India?",
    answer:
      "In India, fennel seeds are commonly known as 'Saunf' in Hindi and Marathi, 'Variyali' or 'Suva' in Gujarati, 'Sombu' in Tamil, 'Perumjeerakam' in Malayalam, and 'Sompu' in Telugu.",
  },
  {
    question: "Are fennel seeds and saunf the same?",
    answer:
      "Yes. Saunf is the authentic Indian regional name for fennel seeds. Fennel seeds are the dried aromatic fruits (cremocarps) of the botanical plant Foeniculum vulgare Mill.",
  },
  {
    question: "What is the botanical name of fennel?",
    answer:
      "The botanical name of fennel is Foeniculum vulgare Mill. (syn. Foeniculum officinale), an aromatic annual or biennial herb belonging to the family Apiaceae (Umbelliferae).",
  },
  {
    question: "Where does JM Masala source fennel seeds?",
    answer:
      "JM Masala operates directly from Unjha, Gujarat, and sources fennel seeds from prime growing tracts in Northern Gujarat (Unjha, Mehsana, Visnagar, Patan) and contiguous regional mandis during the fresh spring harvest.",
  },
  {
    question: "Does JM Masala supply fennel seeds from Gujarat?",
    answer:
      "Yes. Gujarat is India's preeminent commercial hub for seed spices, and JM Masala's headquarters in Unjha allows direct daily spot procurement and processing of Gujarat-grown fennel seeds.",
  },
  {
    question: "What purity of fennel seeds does JM Masala supply?",
    answer:
      "JM Masala's standard export specification provides a minimum purity of 99.0% for machine-cleaned and Sortex-cleaned lots, with premium grades reaching 99.5% optical purity.",
  },
  {
    question: "What is the moisture specification for fennel seeds?",
    answer:
      "Our standard export specification is calibrated at maximum 8.0% moisture (typically 7.0% to 8.0%), ensuring seed freshness, mold prevention, and volatile essential oil preservation during ocean transit.",
  },
  {
    question: "What is the broken seeds limit in JM Masala fennel?",
    answer:
      "Broken seeds are strictly controlled to maximum 1.0%, preserving intact seed morphology and minimizing essential oil loss during handling and transport.",
  },
  {
    question: "What fennel seed grades are available?",
    answer:
      "JM Masala supplies Bold Grade, Small Grade, Singapore Quality Grade, and specialty Lucknow / Abu Road sweet chewing grades according to buyer specifications.",
  },
  {
    question: "Does JM Masala supply Bold fennel seeds?",
    answer:
      "Yes. Our Bold fennel seeds are selected for large seed size, uniform greenish-brown appearance, and high essential oil content, ideal for whole culinary spices and retail brand packaging.",
  },
  {
    question: "Does JM Masala supply Small fennel seeds?",
    answer:
      "Yes. Small fennel seeds possess a concentrated sweet anethole profile and high oil content, making them ideal for confectionery sugar-coating, savory seasoning blends, and powder milling.",
  },
  {
    question: "What are Singapore quality fennel seeds?",
    answer:
      "Singapore quality fennel seeds represent an established commercial export grade calibrated for optical Sortex cleanliness (min. 99% purity), green color uniformity, and low admixture, widely imported across Southeast Asia and the Middle East.",
  },
  {
    question: "How are JM Masala fennel seeds cleaned?",
    answer:
      "Seeds pass through air aspirators for dust and chaff separation, multi-deck vibratory sieves for pod and stem removal, and high-density gravity destoners for field stone extraction.",
  },
  {
    question: "Are the seeds Sortex cleaned?",
    answer:
      "Yes. All premium export grades are processed through high-resolution digital optical Sortex color sorters that eject dark, black, discolored, or damaged seeds.",
  },
  {
    question: "Are the seeds metal checked?",
    answer:
      "Yes. Cleaned lots pass through high-intensity inline rare-earth magnets and digital metal detectors before packing to guarantee complete absence of metallic contaminants.",
  },
  {
    question: "What packaging is available for fennel seed exports?",
    answer:
      "We supply fennel in 25kg and 50kg food-grade woven polypropylene (PP) bags with heat-sealed PE inner liners, multi-wall Kraft paper sacks, carton boxes for green varieties, and custom private-label retail pouches.",
  },
  {
    question: "Does JM Masala supply bulk quantities?",
    answer:
      "Yes. JM Masala supplies fennel seeds in 20ft FCL (~11.0 to 12.5 Metric Tons) and 40ft FCL (~23.0 to 24.5 Metric Tons) container loads, as well as mixed container consignments with cumin, coriander, fenugreek, and sesame.",
  },
  {
    question: "Can buyers request representative samples?",
    answer:
      "Yes. International importers and commercial buyers can contact JM Masala to request representative physical samples (250g to 500g) along with laboratory specification sheets prior to confirming contracts.",
  },
  {
    question: "Can laboratory documentation (COA) be provided?",
    answer:
      "Yes. Every export shipment includes an accredited NABL laboratory Certificate of Analysis (COA) confirming purity, moisture, broken seeds, volatile oil, microbiological parameters, and destination-specific pesticide residue MRLs.",
  },
  {
    question: "How can I request a quotation for fennel seeds?",
    answer:
      "Buyers can submit an export quotation request via our website contact form or directly via WhatsApp (+91 91067 66041) stating required grade (Bold, Small, or Singapore), packaging format, destination port, and delivery terms (FOB Mundra or CIF).",
  },
];

const FennelSeedsPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Fennel Seeds / Saunf (99% Sortex Export Procurement)",
      "1x 20ft FCL (~11-12.5 MT)",
    ),
  );

  const canonicalUrl = `${SITE_URL}/fennel-seeds-exporter-india`;
  const productImageUrl = `${SITE_URL}${fennelSeedsImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: "Fennel Seeds (Saunf)",
    description:
      "Export-grade Indian fennel seeds (saunf) from Unjha, Gujarat: Bold, Small & Singapore grades. Min. 99% Sortex purity, max. 8% moisture, lab tested, FOB Mundra and CIF global export.",
    image: [productImageUrl],
    sku: "JMM-FENNEL-SEEDS",
    mpn: "JMM-FENNEL-SEEDS",
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
    additionalProperty: FENNEL_SPEC_ROWS.map((spec) => ({
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
        name: "Fennel Seeds Exporter India",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FENNEL_FAQS.map((faq) => ({
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
        title="Fennel Seeds Exporter from India | Saunf Supplier | JM Masala"
        description="JM Masala supplies Indian fennel seeds (saunf) in Bold, Small and Singapore grades for bulk buyers and international importers. Request specifications, samples and export quotations."
        path="/fennel-seeds-exporter-india"
        imageUrl={productImageUrl}
        imageAlt="Export-grade Indian fennel seeds (saunf) supplied by JM Masala from Gujarat"
        type="product"
        keywords={[
          "fennel seeds exporter india",
          "fennel seeds supplier india",
          "saunf exporter india",
          "saunf supplier india",
          "indian fennel seeds",
          "fennel seeds wholesale supplier",
          "bulk fennel seeds",
          "fennel seeds gujarat",
          "fennel seeds unjha",
          "bold fennel seeds supplier",
          "singapore fennel seeds exporter",
          "sortex green fennel seeds",
          "fennel seed specifications",
          "variyali exporter gujarat",
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
              Fennel Seeds Exporter from India
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
                <MapPin className="h-3.5 w-3.5" /> Unjha, Gujarat Sourcing &amp; Export
              </p>
              <h1 className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-white md:text-5xl">
                Fennel Seeds Exporter from India
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--brand-gold-light)] md:text-xl">
                Indian Saunf | Bulk Export Supply | Gujarat, India
              </p>

              {/* Factual Opening Direct Answer Paragraph (verbatim prompt answer) */}
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[rgba(255,255,255,0.9)]">
                <p>
                  JM Masala supplies export-grade fennel seeds (saunf) from India for international
                  importers, spice distributors, food manufacturers and bulk buyers. Our fennel seeds are
                  sourced through established Indian trade networks and supplied according to agreed
                  requirements for purity, moisture, broken seeds, colour, grade, cleaning and packaging.
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

            {/* Product Card / Quick Specs */}
            <div className="rounded-xl border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.06)] p-6 backdrop-blur-sm">
              <div className="overflow-hidden rounded-lg bg-black/20">
                <img
                  src={fennelSeedsImage}
                  alt="Export-grade Indian fennel seeds (saunf) supplied by JM Masala from Gujarat"
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  width={500}
                  height={350}
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
                  <p className="mt-1 font-semibold text-white">0909 61 29 (Whole)</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Purity Range</span>
                  <p className="mt-1 font-semibold text-white">Min. 99% – 99.5% Sortex</p>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-[rgba(255,255,255,0.65)]">
                Fennel seeds (saunf) supplied by JM Masala from Gujarat, India.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* AI Grounding Box: Fennel Seeds at a Glance */}
      <section className="border-b border-[var(--brand-gold-pale)] bg-white py-10">
        <div className="jm-container">
          <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                  Quick Commercial Summary
                </p>
                <h2 className="text-xl font-bold text-[var(--brand-charcoal)] md:text-2xl">
                  Fennel Seeds at a Glance
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-semibold text-[var(--brand-deep-green)]">
                <Sparkles className="h-3.5 w-3.5" /> Direct Entity Grounding
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Product &amp; Indian Name</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Fennel Seeds · Saunf / Variyali (વરિયાળી / सौंफ)
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Botanical Classification</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Foeniculum vulgare Mill.
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Origin &amp; Trade Hub</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Unjha, Gujarat, India
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Physical Purity</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Minimum 99.0% / 99.5% Sortex
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Moisture Limit</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Maximum 8.0% (target 7.0%–8.0%)
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Broken Seeds Limit</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Maximum 1.0%
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Color Profile</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Greenish-brown to light olive green
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Available Commercial Grades</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Bold · Small · Singapore Grade
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Processing &amp; Quality</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Sortex cleaned and metal checked
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Are Fennel Seeds and Saunf the Same? & Botanical Identity */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="jm-section-label">Botanical &amp; Commercial Identity</p>
              <h2 className="jm-section-heading">Are Fennel Seeds and Saunf the Same?</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  <strong>Yes. Saunf is the common Indian name for fennel seeds.</strong> Fennel seeds are
                  the dried aromatic fruits (cremocarps) of <em>Foeniculum vulgare</em> Mill., an aromatic
                  plant belonging to the Apiaceae family (which also encompasses cumin, coriander, and
                  ajwain).
                </p>
                <p>
                  In Gujarat, where India's largest trading hub is situated, the spice is colloquially known
                  as <strong>Variyali</strong> (વરિયાળી). Across North India, it is referred to as{" "}
                  <strong>Saunf</strong> (सौंफ). In English commerce, it is uniformly traded as{" "}
                  <strong>Fennel Seeds</strong>.
                </p>
                <p>
                  Fennel seeds are oblong and curved, featuring five prominent longitudinal ridges. They
                  possess a sweet, refreshing, anise-like flavor profile dominated by the natural volatile
                  essential oil component <strong>trans-anethole</strong>, complemented by the camphoraceous
                  bite of <strong>fenchone</strong>.
                </p>
              </div>
            </div>

            <aside className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">
                The JM Masala Fennel Entity Map
              </h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                How commercial, botanical, and regional relationships connect:
              </p>
              <div className="mt-4 space-y-2.5 text-xs text-[var(--brand-charcoal)]">
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>JM Masala Trading LLP</strong> → Indian Spice Exporter &amp; Processor
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Product:</strong> Fennel Seeds / Saunf / Variyali (Foeniculum vulgare Mill.)
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Trade Hub:</strong> APMC Market Yard, Unjha, Mehsana District, Gujarat
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Aroma Compounds:</strong> Natural trans-anethole (sweetness) &amp; fenchone
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Available Grades:</strong> Bold · Small · Singapore Quality · Lucknow/Abu Road
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Processing Standard:</strong> Sortex optical color sorted + metal checked
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 2: Fennel Seed Grades */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Commercial Classification</p>
            <h2 className="jm-section-heading">Fennel Seed Grades: Bold, Small &amp; Singapore</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala supplies fennel seeds calibrated according to seed sizing, essential oil content,
              visual coloration, and specific buyer applications:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {FENNEL_MARKET_GRADES.map((grade) => (
              <article key={grade.gradeName} className="jm-surface-card p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-bold text-[var(--brand-deep-green)]">
                    {grade.badge}
                  </span>
                  <span className="text-xs text-stone-500">{grade.gradeName}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--brand-charcoal)]">{grade.gradeName}</h3>
                <div className="mt-3 space-y-1.5 text-xs font-medium text-[var(--brand-forest)]">
                  <p>• {grade.purity}</p>
                  <p>• {grade.moisture}</p>
                  <p>• {grade.broken}</p>
                </div>
                <p className="mt-3 text-xs leading-5 text-[var(--brand-forest)]">{grade.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5 text-xs text-[var(--brand-forest)]">
            <strong className="text-[var(--brand-charcoal)]">Commercial Note: </strong>
            These grades represent JM Masala's active commercial supply standards developed through ongoing
            export contracts with international spice blenders and distributors. Contractual specifications
            are confirmed against buyer-approved lot samples.
          </div>
        </div>
      </section>

      {/* Section 3: Specifications Table */}
      <section id="specifications" className="jm-section jm-section--white scroll-mt-12">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Technical Parameters</p>
            <h2 className="jm-section-heading">Fennel Seeds Export Specifications</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala provides verifiable laboratory specifications for whole Indian fennel seeds. All
              parameters are verified using standard ISO and ASTA analytical procedures:
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--brand-gold-pale)] bg-white shadow-sm">
            <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-6 py-4">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
                JM Masala Commercial Export Specifications: Indian Fennel Seeds
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--brand-gold-pale)] bg-stone-50 text-xs font-semibold uppercase tracking-wider text-[var(--brand-charcoal)]">
                    <th className="px-6 py-3.5">Parameter</th>
                    <th className="px-6 py-3.5">JM Masala Commercial Specification</th>
                    <th className="px-6 py-3.5">Testing Method / Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--brand-gold-pale)]">
                  {FENNEL_SPEC_ROWS.map((row) => (
                    <tr key={row.label} className="hover:bg-[var(--brand-cream)]/40">
                      <td className="whitespace-nowrap px-6 py-3.5 font-semibold text-[var(--brand-charcoal)]">
                        {row.label}
                      </td>
                      <td className="px-6 py-3.5 text-[var(--brand-forest)]">{row.value}</td>
                      <td className="px-6 py-3.5 text-xs text-stone-500">
                        {row.label.includes("Moisture")
                          ? "ASTA 2.0 / ISO 939"
                          : row.label.includes("Purity")
                          ? "Visual & Gravimetric Separation"
                          : row.label.includes("Broken")
                          ? "Physical Separation / ISO Standard"
                          : row.label.includes("Oil")
                          ? "ISO 6571 (Hydro-distillation)"
                          : row.label.includes("Ash")
                          ? "ISO 928 / ISO 930"
                          : row.label.includes("Metal")
                          ? "Electronic In-line Metal Detector"
                          : row.label.includes("Microbiological")
                          ? "ISO / FDA BAM Standard"
                          : "Contract / NABL Laboratory Standard"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/60 px-6 py-4 text-xs leading-relaxed text-[var(--brand-forest)]">
              <strong className="text-[var(--brand-charcoal)]">Buyer-Specific Specification Note: </strong>
              Commercial specifications can be calibrated according to agreed buyer requirements, destination
              market regulations (EU, US FDA, GCC, East Asia), and individual contract parameters. Verified
              pre-shipment COA is issued by accredited NABL testing laboratories.
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Sourcing from Unjha & Gujarat Mandis */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div>
              <p className="jm-section-label">Geographic Origin</p>
              <h2 className="jm-section-heading">Fennel Seeds from Gujarat &amp; Unjha Mandi Hub</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Gujarat is India's preeminent commercial hub for seed spices, and Unjha hosts Asia's largest
                  specialized regulated agricultural market for cumin and fennel seeds. The semi-arid climate,
                  abundant sunshine, and well-drained alluvial soils of Northern Gujarat provide optimal growing
                  conditions for dense, aroma-rich fennel crops during the spring harvest.
                </p>
                <p>
                  Operating directly from the APMC Market Yard in Unjha gives JM Masala unparalleled access to
                  daily fresh-crop arrivals from Northern Gujarat (Mehsana, Visnagar, Patan, Kheralu) and
                  contiguous producing districts. Our procurement specialists conduct in-person physical lot
                  evaluations on arrival, inspecting seed color uniformity, moisture stability (&lt;8%), and
                  sweetness before purchase.
                </p>
                <p>
                  Direct mandi sourcing eliminates speculative intermediaries, ensuring consistent lot-to-lot
                  quality, competitive price structures, and complete traceability back to origin.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/unjha-fennel-seeds" className="jm-btn jm-btn--secondary">
                  Explore Unjha Fennel Seeds
                </Link>
                <Link to="/sourcing-network" className="jm-btn jm-btn--outline">
                  View Sourcing Network
                </Link>
              </div>
            </div>

            <aside className="rounded-xl border border-[var(--brand-gold-pale)] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--brand-charcoal)]">
                The Verified JM Masala Fennel Supply Chain
              </h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                From Unjha Mandi Procurement to Global Ocean Freight Dispatch:
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    1
                  </span>
                  <span>Unjha Mandi Spot Procurement (Direct Farmer &amp; Trader Lots)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    2
                  </span>
                  <span>Incoming Lot Sampling &amp; Moisture Testing (&lt;8%)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    3
                  </span>
                  <span>Air Aspiration (Chaff &amp; Hollow Grains Elimination)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    4
                  </span>
                  <span>High-Density Gravity Destoning (Stone &amp; Mud Lump Extraction)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    5
                  </span>
                  <span>Sortex Optical Color Sorting (Discolored &amp; Dark Grain Ejection)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    6
                  </span>
                  <span>Inline Rare-Earth Magnetic Separation &amp; Metal Detection</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    7
                  </span>
                  <span>Batch NABL Laboratory Inspection &amp; Pre-Shipment COA</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    8
                  </span>
                  <span>Moisture-Barrier Export Packing &amp; Mundra Port Dispatch</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 5: Processing & Sortex Cleaning Infrastructure */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Processing Operations</p>
            <h2 className="jm-section-heading">Fennel Seeds Cleaning, Sortex Sorting &amp; Metal Checking</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Raw fennel seeds arrive with delicate seed stalks, chaff, field dust, and stones. Reaching
              minimum 99%–99.5% export cleanliness requires calibrated mechanical and optical processing:
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FENNEL_SUPPLY_CHAIN_STEPS.map((step) => (
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
            <Link
              to="/spice-processing-manufacturing"
              className="jm-btn jm-btn--outline inline-flex items-center gap-2"
            >
              Explore Our Processing Infrastructure <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Quality Parameters Explained */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Quality Assurance</p>
            <h2 className="jm-section-heading">Fennel Seed Quality Parameters Explained</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Export compliance for international food processors, tea blenders, and spice distributors hinges
              on six essential quality parameters:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <Sparkles className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Purity Calibration (Min. 99%)</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Tested across 99.0% (Machine/Sortex Cleaned) and 99.5% (Super Sortex). Gravimetric separation
                confirms strict freedom from weed seeds, stones, and foreign matter.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <Scale className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Moisture Control (Max. 8%)</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Strictly controlled at or below 8.0%. Maintaining low moisture prevents mold growth, preserves
                crisp seed texture, and prevents volatile anethole loss during maritime shipment.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <ShieldCheck className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Broken Seeds (Max. 1%)</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Controlled to maximum 1.0% on export grades. Gentle pneumatic handling and smooth screeners
                prevent crushing of delicate seed ribs, locking in natural essential oils.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <PackageCheck className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Metal Checking &amp; Safety</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Every batch passes through high-intensity inline rare-earth magnets and digital metal detectors
                to ensure total absence of ferrous and non-ferrous metal fragments.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <FileCheck2 className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Volatile Oil &amp; Anethole</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Tests between 1.5% and 3.0%+ v/w essential oil via ISO 6571 hydro-distillation, delivering the
                hallmark sweet aroma required for confectionery and beverage applications.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <CheckCircle2 className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Microbiological Compliance</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Certified Salmonella-negative in 25g, E. Coli &lt; 10 CFU/g, and compliant with international
                pathogen and aflatoxin regulations for food and herbal ingredients.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 7: Packaging & Container Stuffing Logistics */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
            <div>
              <p className="jm-section-label">Logistics &amp; Stowage</p>
              <h2 className="jm-section-heading">Fennel Seeds Packaging &amp; Container Stuffing</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Fennel seeds are volumetric seed spices with a bulk density of approximately{" "}
                  <strong>400 to 450 g/L</strong>. Container stowage is calibrated to maximize payload
                  while preventing bag compaction:
                </p>
                <ul className="space-y-2 text-sm text-[var(--brand-charcoal)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span>
                      <strong>20ft FCL Container:</strong> 11.0 to 12.5 Metric Tons loose stuffed (approx.
                      440 to 500 bags of 25kg) or ~9.5–10.5 MT palletized.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span>
                      <strong>40ft FCL Container:</strong> 23.0 to 24.5 Metric Tons loose stuffed (approx.
                      920 to 980 bags of 25kg) or ~20.0–21.0 MT palletized.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span>
                      <strong>Mixed Container Consolidation:</strong> Fennel can be combined with Cumin,
                      Coriander, Fenugreek, and Sesame under a single Bill of Lading.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">
                Available Export Packaging Options
              </h3>
              <div className="mt-4 space-y-3 text-xs text-[var(--brand-forest)]">
                <div className="rounded border border-stone-200 bg-white p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    1. Food-Grade Woven PP Bags (25 kg / 50 kg)
                  </p>
                  <p className="mt-1">
                    Heavy-duty polypropylene woven bags with heat-sealed polyethylene inner liners, protecting
                    seeds from ambient moisture and maritime humidity.
                  </p>
                </div>
                <div className="rounded border border-stone-200 bg-white p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    2. Multi-Wall Kraft Paper Sacks (25 kg / 50 kg)
                  </p>
                  <p className="mt-1">
                    3-ply food-grade Kraft paper with inner barrier lining, the preferred option for automated
                    handling in European and American food factories.
                  </p>
                </div>
                <div className="rounded border border-stone-200 bg-white p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    3. Carton Boxes for Green Fennel Varieties
                  </p>
                  <p className="mt-1">
                    Corrugated carton boxes with inner moisture-barrier liners for premium green fennel
                    grades, preventing color fading and physical crush during long journeys.
                  </p>
                </div>
                <div className="rounded border border-stone-200 bg-white p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    4. Custom Branded Private Label Pouches (100g to 1kg)
                  </p>
                  <p className="mt-1">
                    Pre-printed stand-up barrier pouches with zip locks, barcodes, and multi-language nutrition
                    labeling for supermarket retail distribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Commercial Applications */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Industrial Uses</p>
            <h2 className="jm-section-heading">Commercial Applications of Indian Fennel Seeds</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Supplied across key global culinary, confectionery, herbal beverage, and pharmaceutical sectors:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Mouth Fresheners &amp; Mukhwas</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                The premier seed for traditional Indian sugar-coated and roasted digestive mouth fresheners
                (mukhwas), renowned for its naturally sweet taste and breath-freshening properties.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Herbal Teas &amp; Infusions</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                High natural anethole makes fennel seeds a vital botanical ingredient in calming herbal tea
                blends, digestive wellness infusions, and organic detox tisanes.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Bakery &amp; Confectionery</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                Used as whole seeds and ground powder in Italian breads, biscotti, rye crackers, European sweet
                pastries, and traditional savory meat seasonings like Italian sausage.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Spice Blends &amp; Seasonings</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                A key component in Chinese five-spice powder, Bengali panch phoron, pickling spice formulations,
                and premium curry masalas throughout international food manufacturing.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 9: Export Documentation Package */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Trade Compliance</p>
            <h2 className="jm-section-heading">Export Documentation Package</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Every fennel consignment shipped by JM Masala includes a verified regulatory and commercial
              documentation package:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOCUMENTATION_PACKAGE.map((doc) => (
              <div key={doc} className="flex items-start gap-3 rounded-lg border border-stone-200 bg-[var(--brand-cream)]/40 p-4">
                <FileCheck2 className="h-5 w-5 shrink-0 text-[var(--brand-gold)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--brand-charcoal)]">{doc}</p>
                  <p className="mt-0.5 text-xs text-stone-500">Official verified documentation</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: How to Buy Bulk Fennel Seeds */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Buyer Guide</p>
            <h2 className="jm-section-heading">How to Buy Bulk Fennel Seeds from India</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala provides a streamlined, transparent procurement procedure for international B2B buyers:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                1
              </span>
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Inquiry &amp; Specs</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Submit your required grade (Bold, Small, or Singapore), target purity, packaging format, and port of destination.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                2
              </span>
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Sample &amp; Quote</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                We provide a formal proforma quotation (FOB Mundra or CIF) and dispatch representative 250g–500g physical samples.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                3
              </span>
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Sortex &amp; Testing</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Upon order confirmation, seeds undergo mechanical cleaning, destoning, Sortex optical grading, metal checking, and NABL COA testing.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                4
              </span>
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Stuffing &amp; Dispatch</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Containers are inspected, stuffed, sealed, and dispatched to Mundra Port with full export clearance documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Frequently Asked Questions */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Buyer Inquiries</p>
            <h2 className="jm-section-heading">Frequently Asked Questions</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Direct, factual answers to common questions about Indian fennel seed export, commercial grades,
              specifications, and procurement:
            </p>
          </div>

          <div className="mt-8 divide-y divide-[var(--brand-gold-pale)] rounded-xl border border-[var(--brand-gold-pale)] bg-white">
            {FENNEL_FAQS.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between text-base font-bold text-[var(--brand-charcoal)]">
                  {faq.question}
                  <span className="ml-4 text-[var(--brand-gold)] transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--brand-forest)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="border-t border-[var(--brand-gold-pale)] bg-white py-12">
        <div className="jm-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="flex items-center gap-2 rounded-lg border border-stone-200 bg-[var(--brand-cream)]/50 p-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                <p className="text-xs font-bold text-[var(--brand-charcoal)]">{badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="bg-[var(--brand-deep-green)] py-12 text-white">
        <div className="jm-container text-center">
          <h2 className="font-[var(--font-display)] text-2xl font-bold md:text-3xl">
            Request Fennel Seed Export Specifications &amp; Quotation
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[rgba(255,255,255,0.85)]">
            Contact JM Masala's trade desk in Unjha, Gujarat for representative samples, technical
            specification sheets, laboratory test reports, and competitive FOB Mundra or CIF ocean freight
            quotations.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={quoteUrl}
              target="_blank"
              rel="noreferrer"
              className="jm-btn jm-btn--primary inline-flex items-center gap-2"
            >
              Chat on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact?intent=quote"
              className="jm-btn jm-btn--outline border-white text-white hover:bg-white hover:text-[var(--brand-deep-green)]"
            >
              Submit Trade Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FennelSeedsPage;
