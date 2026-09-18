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
import mustardSeedsImage from "@/assets/MustardSeeds.jpg";

const MUSTARD_SPEC_ROWS = [
  { label: "Product Name", value: "Mustard Seeds" },
  { label: "Common Indian Names", value: "Rai / Sarson (રાઈ / સરસવ / राई / सरसों)" },
  { label: "Botanical Names", value: "Brassica juncea (Brown/Rai) · Sinapis alba / Brassica alba (Yellow) · Brassica nigra (Black)" },
  { label: "ITC-HS Code", value: "1207 50 90 (Mustard seeds, whether or not broken)" },
  { label: "Origin", value: "Gujarat and Rajasthan, India" },
  { label: "Available Varieties", value: "Small Black/Brown (Rai) · Bold Yellow (Sarson) · Bold Brown" },
  { label: "Physical Purity", value: "98.0% / 99.0% / 99.5% Sortex Optical Cleaned" },
  { label: "Moisture Content", value: "Maximum 8.0% (standard target 7.0% to 8.0%)" },
  { label: "Natural Oil Content", value: "38.0% to 42.0% v/w (rich in natural pungency & lipids)" },
  { label: "Foreign Matter (Admixture)", value: "Max 0.5% (Sortex) / Max 1.0% (Machine Cleaned)" },
  { label: "Seed Morphology", value: "Small spherical grains (1.5 mm to 3.0 mm) with finely reticulated seed coats" },
  { label: "Active Flavor Compound", value: "Allyl Isothiocyanate (Brown/Black) / Sinalbin (Yellow)" },
  { label: "Cleaning Standard", value: "Air Aspiration + Sieve Screening + Gravity Destoning + Sortex Color Sorting" },
  { label: "Metal Control", value: "Inline rare-earth magnetic separation & digital metal detection" },
  { label: "Total Ash", value: "Maximum 6.5%" },
  { label: "Acid Insoluble Ash", value: "Maximum 1.0%" },
  { label: "Microbiological Limits", value: "Salmonella: Absent in 25g; E. Coli: <10 CFU/g" },
  { label: "Pesticide & Erucic Limits", value: "Controlled to destination standards (EU MRLs, US FDA, Codex)" },
  { label: "Shelf Life", value: "12 to 18 months under cool, dry warehouse conditions" },
];

const MUSTARD_VARIETIES = [
  {
    name: "Small Black & Brown Mustard (Rai)",
    botanical: "Brassica juncea / Brassica nigra",
    badge: "High Pungency Rai",
    color: "Reddish-brown to dark blackish-brown",
    purity: "99.0% – 99.5% Sortex",
    oil: "38% to 42% Oil Content",
    description:
      "Small spherical seeds (1.5mm–2.0mm) packed with allyl isothiocyanate. Delivers sharp, nose-tingling heat when popped in hot oil or ground with cold water. The staple spice for Indian tadka tempering, pickles, curry bases, and cold-pressed pungent mustard oil.",
  },
  {
    name: "Bold Yellow Mustard (Yellow Sarson)",
    botanical: "Sinapis alba (Brassica alba)",
    badge: "Peeled Condiment Grade",
    color: "Lustrous golden yellow to bright straw yellow",
    purity: "99.0% – 99.5% Sortex",
    oil: "36% to 40% Oil Content",
    description:
      "Larger spherical seeds (2.0mm–3.0mm) characterized by sinalbin, providing a mellow, warm, balanced pungency without harsh bitterness. The global choice for prepared table mustards (Dijon style, American yellow mustard), mayonnaise, salad dressings, and relish brines.",
  },
  {
    name: "Bold Brown Mustard (Sarson)",
    botanical: "Brassica juncea (Large Seeded)",
    badge: "Export Grade Sarson",
    color: "Uniform warm chocolate-brown to reddish-brown",
    purity: "99.0% Sortex Clean",
    oil: "38% to 41% Oil Content",
    description:
      "Uniform large-grain brown mustard seeds procured across Gujarat and Rajasthan mandis. Blends sharp pungent heat with rich nutty depth, widely exported for European meat seasoning, whole grain mustard condiments, and industrial spice blends.",
  },
];

const MUSTARD_MARKET_GRADES = [
  {
    market: "Europe Quality (Sortex Clean)",
    gradeBadge: "99.5% Sortex Clean",
    purity: "99.5% Minimum Purity",
    moisture: "Max 8.0% Moisture",
    admixture: "Max 0.5% (Foreign Matter <0.2%)",
    description:
      "High natural oil content (40%+), bold uniform spherical grains, strict microbiological limits, and verified compliance with European Union pesticide MRLs and erucic acid regulatory guidelines.",
  },
  {
    market: "USA Quality (ASTA Clean)",
    gradeBadge: "99.0% ASTA Clean",
    purity: "99.0% ASTA Clean",
    moisture: "Max 8.0% Moisture",
    admixture: "Max 0.8% Admixture",
    description:
      "Prepared to American Spice Trade Association cleanliness standards. Uniform sizing, steam-treatment compatible, and optimal volatile pungency for commercial condiment manufacturing, relish formulations, and meat processing.",
  },
  {
    market: "Singapore & East Asia",
    gradeBadge: "99.0% Sortex",
    purity: "99.0% Minimum Purity",
    moisture: "Max 8.0% Moisture",
    admixture: "Max 1.0% Admixture",
    description:
      "Calibrated seed diameter, crisp crackling snap upon tempering, free from field sand and clay pellets, optimal for culinary packaging and South Asian spice distribution.",
  },
  {
    market: "Gulf & Middle East",
    gradeBadge: "98.0% – 99.0% Clean",
    purity: "98.0% to 99.0% Purity",
    moisture: "Max 8.5% Moisture",
    admixture: "Max 1.5% Admixture",
    description:
      "Popular culinary tempering grade for whole retail packing and commercial curry powders, providing robust aroma and natural visual contrast in savory dish presentations.",
  },
];

const MUSTARD_SUPPLY_CHAIN_STEPS = [
  {
    step: "01",
    title: "Gujarat & Rajasthan Mandi Procurement",
    description:
      "Procured from primary agricultural produce market committees (APMC) across North Gujarat and contiguous Rajasthan districts during the February–March winter crop arrivals.",
  },
  {
    step: "02",
    title: "Arrival Sampling & Oil/Moisture Screening",
    description:
      "Every arrival lot is spot-tested for natural oil percentage (target 38%–42%), moisture stability (<8%), spherical grain uniformity, and absence of rain-damaged seeds.",
  },
  {
    step: "03",
    title: "Multi-Deck Mechanical Sieve Cleaning",
    description:
      "Raw seeds pass through vibratory fine-mesh sieves and air-aspiration columns to eliminate dried pods, straw, dust, chaff, and immature hollow grains.",
  },
  {
    step: "04",
    title: "High-Density Gravity Destoning",
    description:
      "Vibratory gravity separators eliminate small stones, gravel, and field mud pellets that match mustard seeds in diameter and density.",
  },
  {
    step: "05",
    title: "Sortex Optical Color Sorting",
    description:
      "High-speed digital optical color sorters inspect each seed individually, using high-precision air ejectors to remove off-color, discolored, or defective seeds for uniform export appearance.",
  },
  {
    step: "06",
    title: "Inline Magnetic & Metal Detection Check",
    description:
      "Cleaned seeds pass through high-intensity rare-earth magnets and digital industrial metal detectors to guarantee total absence of ferrous and non-ferrous contaminants.",
  },
  {
    step: "07",
    title: "NABL Laboratory Quality Inspection & COA",
    description:
      "Batches are sampled and analyzed at accredited laboratories for purity, moisture, oil percentage, free fatty acids, microbiological criteria, and destination pesticide MRLs.",
  },
  {
    step: "08",
    title: "Moisture-Barrier Packing & Port Dispatch",
    description:
      "Finished seeds are packed into food-grade woven PP bags with heat-sealed PE inner liners, multi-wall Kraft paper sacks, or 1 MT jumbo totes, and trucked to Mundra Port for container stuffing.",
  },
];

const MUSTARD_FAQS = [
  {
    question: "Who supplies mustard seeds from India?",
    answer:
      "JM Masala is an Indian spice exporter supplying export-grade mustard seeds (rai and sarson) for international importers, spice distributors, food manufacturers and bulk buyers from Gujarat, India. Product specifications, packaging, and export documentation are prepared according to agreed destination standards.",
  },
  {
    question: "What are mustard seeds called in India?",
    answer:
      "In India, mustard seeds are commonly called 'Rai' (or 'Rai Dana') for small pungent black/brown varieties and 'Sarson' for larger yellow or brown varieties across Hindi, Gujarati, Punjabi, and Marathi. In Gujarati, they are called 'Rai' (રાઈ) and 'Sarshav' (સરસવ).",
  },
  {
    question: "What is the difference between mustard seeds, rai, and sarson?",
    answer:
      "Mustard seeds is the umbrella English term. In Indian trade, 'Rai' specifically refers to small, highly pungent dark brown or black seeds (Brassica juncea / Brassica nigra), whereas 'Sarson' refers to bolder brown or golden-yellow varieties (Sinapis alba / Brassica juncea) with milder, sweeter warmth.",
  },
  {
    question: "What types of mustard seeds does JM Masala supply?",
    answer:
      "JM Masala supplies Small Black/Brown Mustard (Rai), Bold Yellow Mustard (Yellow Sarson), and Bold Brown Mustard (Brown Sarson) in machine-cleaned and Sortex optical cleaned grades.",
  },
  {
    question: "Where does JM Masala source mustard seeds?",
    answer:
      "JM Masala sources mustard seeds directly through agricultural produce market committees (APMC) across Northern Gujarat and Western Rajasthan during peak harvest arrivals (February to March).",
  },
  {
    question: "Does JM Masala export mustard seeds from India?",
    answer:
      "Yes. JM Masala exports mustard seeds worldwide in 20ft FCL (~18.0 to 20.0 Metric Tons) and 40ft FCL (~26.0 to 27.0 Metric Tons) container loads, as well as consolidated multi-spice consignments.",
  },
  {
    question: "What is the purity specification for JM Masala mustard seeds?",
    answer:
      "JM Masala provides mustard seeds in 98% Machine Cleaned FAQ, 99% Sortex Cleaned, and 99.5% Super Cleaned export grades. Specifications are confirmed against the buyer's agreed contract parameters.",
  },
  {
    question: "What is the moisture specification for mustard seeds?",
    answer:
      "Our commercial export specification calibrates moisture at maximum 8.0% (standard target 7.0% to 8.0%), ensuring seed freshness, mold prevention, and natural volatile oil preservation during ocean transit.",
  },
  {
    question: "What is the natural oil content of Indian mustard seeds?",
    answer:
      "Indian mustard seeds typically test with a high natural oil content of 38.0% to 42.0% v/w, providing exceptional extraction yields for cold-pressed mustard oil and rich flavor in condiment formulations.",
  },
  {
    question: "How are mustard seeds cleaned and processed?",
    answer:
      "Raw seeds undergo air aspiration for chaff and dust elimination, multi-deck vibratory screening, gravity destoning to extract stones of matching size, Sortex optical color sorting to remove discolored seeds, and inline metal detection.",
  },
  {
    question: "Are the mustard seeds Sortex cleaned and metal checked?",
    answer:
      "Yes. All export-grade mustard consignments undergo precision digital optical color sorting and inline rare-earth magnetic plus electronic metal detection prior to bagging.",
  },
  {
    question: "What packaging options are available for mustard exports?",
    answer:
      "We supply mustard in 25kg and 50kg food-grade woven polypropylene (PP) bags with heat-sealed PE inner liners, multi-wall Kraft paper sacks, 1,000 kg (1 MT) FIBC jumbo totes, and custom private-label retail pouches (100g to 1kg).",
  },
  {
    question: "Can buyers request physical samples of mustard seeds?",
    answer:
      "Yes. International importers and commercial food processors can contact JM Masala to request representative physical samples (250g to 500g) along with laboratory specification sheets prior to confirming bulk contracts.",
  },
  {
    question: "Can JM Masala provide laboratory documentation (COA)?",
    answer:
      "Yes. Every commercial export shipment includes an accredited NABL laboratory Certificate of Analysis (COA) confirming purity, moisture, oil percentage, microbiological limits, and destination-specific pesticide residue MRLs.",
  },
  {
    question: "How can I request a quotation for mustard seeds?",
    answer:
      "Buyers can submit an export inquiry through our website contact form or directly via WhatsApp (+91 91067 66041) stating required variety (Brown Rai, Bold Yellow, or Bold Brown), purity grade, packaging format, destination port, and delivery terms (FOB Mundra or CIF).",
  },
];

const MustardSeedsPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Mustard Seeds / Rai & Sarson (99% Sortex Export Procurement)",
      "1x 20ft FCL (~18-20 MT)",
    ),
  );

  const canonicalUrl = `${SITE_URL}/mustard-seeds-exporter-india`;
  const productImageUrl = `${SITE_URL}${mustardSeedsImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: "Mustard Seeds (Rai & Sarson)",
    description:
      "Export-grade Indian mustard seeds (small black, brown & bold yellow) from Gujarat. Machine-cleaned & Sortex optical graded, 38%-42% oil content, FOB Mundra and CIF global supply.",
    image: [productImageUrl],
    sku: "JMM-MUSTARD-SEEDS",
    mpn: "JMM-MUSTARD-SEEDS",
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
    additionalProperty: MUSTARD_SPEC_ROWS.map((spec) => ({
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
        name: "Mustard Seeds Exporter India",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MUSTARD_FAQS.map((faq) => ({
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
        title="Mustard Seeds Exporter from India | Rai & Sarson | JM Masala"
        description="JM Masala supplies Indian mustard seeds for bulk buyers, importers, distributors and food manufacturers. Request specifications, samples and export quotations."
        path="/mustard-seeds-exporter-india"
        imageUrl={productImageUrl}
        imageAlt="Export-grade Indian mustard seeds (rai & sarson) supplied by JM Masala"
        type="product"
        keywords={[
          "mustard seeds exporter india",
          "mustard seeds supplier india",
          "indian mustard seeds",
          "bulk mustard seeds supplier",
          "mustard seeds wholesale supplier",
          "rai seeds exporter",
          "sarson seeds supplier india",
          "yellow mustard seeds exporter india",
          "black mustard seeds wholesale",
          "brown mustard seeds bulk",
          "sortex mustard seeds india",
          "mustard seeds gujarat",
          "mustard seed manufacturer india",
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
              Mustard Seeds Exporter from India
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
                <MapPin className="h-3.5 w-3.5" /> Gujarat &amp; Rajasthan Sourcing Hub
              </p>
              <h1 className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-white md:text-5xl">
                Mustard Seeds Exporter from India
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--brand-gold-light)] md:text-xl">
                Indian Rai &amp; Sarson | Bulk Export Supply | India
              </p>

              {/* Factual Opening Direct Answer Paragraph (verbatim prompt answer) */}
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[rgba(255,255,255,0.9)]">
                <p>
                  JM Masala supplies mustard seeds from India for international importers, spice
                  distributors, food manufacturers and bulk buyers. Our mustard seeds are supplied according
                  to agreed buyer requirements for variety, purity, moisture, appearance, foreign matter,
                  cleaning and packaging. Buyers can request product specifications, samples, laboratory
                  documentation and export quotations based on their destination and contract requirements.
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
                  src={mustardSeedsImage}
                  alt="Export-grade Indian mustard seeds (rai & sarson) supplied by JM Masala"
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
                  <span className="text-[var(--brand-gold-light)]">Sourcing Origin</span>
                  <p className="mt-1 font-semibold text-white">Gujarat &amp; Rajasthan, India</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">ITC-HS Code</span>
                  <p className="mt-1 font-semibold text-white">1207 50 90 (Whole)</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Purity Range</span>
                  <p className="mt-1 font-semibold text-white">98% – 99.5% Sortex</p>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-[rgba(255,255,255,0.65)]">
                Mustard seeds (Rai &amp; Sarson) supplied by JM Masala from India.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* AI Grounding Box: Mustard Seeds at a Glance */}
      <section className="border-b border-[var(--brand-gold-pale)] bg-white py-10">
        <div className="jm-container">
          <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                  Quick Commercial Summary
                </p>
                <h2 className="text-xl font-bold text-[var(--brand-charcoal)] md:text-2xl">
                  Mustard Seeds at a Glance
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-semibold text-[var(--brand-deep-green)]">
                <Sparkles className="h-3.5 w-3.5" /> Direct Entity Grounding
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Product &amp; Indian Names</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Mustard Seeds · Rai / Sarson (રાઈ / સરસવ)
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Botanical Classification</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Brassica juncea · Sinapis alba · Brassica nigra
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Origin &amp; Sourcing</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Gujarat &amp; Rajasthan, India
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Available Varieties</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Small Brown/Black (Rai) · Bold Yellow · Bold Brown
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Physical Purity</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  98% / 99% / 99.5% Sortex Optical Cleaned
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Moisture Limit</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Maximum 8.0% (target 7.0%–8.0%)
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Natural Oil Content</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  38.0% to 42.0% v/w
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Processing Standards</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Machine Cleaned, Destoned, Sortex, Metal Checked
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Container Loading</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  20ft FCL: 18.0–20.0 MT | 40ft FCL: 26.0–27.0 MT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Are Mustard Seeds? Rai vs. Sarson */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="jm-section-label">Botanical &amp; Regional Terminology</p>
              <h2 className="jm-section-heading">Mustard Seeds, Rai and Sarson: Understanding the Differences</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Mustard seeds are commonly referred to by regional names such as <strong>Rai</strong> or{" "}
                  <strong>Sarson</strong> across India. While often used interchangeably in colloquial
                  speech, the commercial spice and oilseed trades distinguish between distinct botanical
                  varieties:
                </p>
                <p>
                  <strong>Rai (Brown / Black Mustard): </strong> Primarily derived from{" "}
                  <em>Brassica juncea</em> (Indian brown mustard) or <em>Brassica nigra</em> (black mustard).
                  These small, hard, spherical seeds (1.5mm–2.0mm) contain concentrated sinigrin, which
                  converts to potent <strong>allyl isothiocyanate</strong> upon crushing in liquid. They
                  deliver the sharp, pungent, sinus-clearing heat essential to Indian curry tempering and
                  traditional cold-pressed mustard oil.
                </p>
                <p>
                  <strong>Sarson (Yellow &amp; Bold Brown Mustard): </strong> Encompasses{" "}
                  <em>Sinapis alba</em> (yellow/white mustard) and bold seeded <em>Brassica juncea</em>.
                  Yellow mustard seeds contain <strong>sinalbin</strong>, which produces a gentle, lingering,
                  mellow warmth without aggressive pungency. They are the global foundation for prepared table
                  mustards (hot dog mustard, Dijon), salad vinaigrettes, and transparent gourmet pickling
                  brines.
                </p>
                <p>
                  Buyers should specify the exact required mustard variety and color when requesting an
                  export quotation.
                </p>
              </div>
            </div>

            <aside className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">
                The JM Masala Mustard Entity Map
              </h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                How commercial, botanical, and regional relationships connect:
              </p>
              <div className="mt-4 space-y-2.5 text-xs text-[var(--brand-charcoal)]">
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>JM Masala Trading LLP</strong> → Indian Spice Exporter &amp; Processor
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Product:</strong> Mustard Seeds / Rai / Sarson (Brassica species)
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Trade Hub:</strong> Gujarat &amp; Rajasthan Agricultural Belt, India
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Core Varieties:</strong> Small Brown Rai · Bold Yellow Sarson · Bold Brown
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Active Chemistry:</strong> 38%–42% Oil Content · Allyl Isothiocyanate / Sinalbin
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Processing Standard:</strong> Sortex optical color sorted + metal checked
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 2: Mustard Seed Varieties Supplied */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Commercial Varieties</p>
            <h2 className="jm-section-heading">Mustard Seed Varieties Supplied by JM Masala</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala supplies three verified commercial varieties calibrated for culinary, industrial
              condiment, and oil extraction procurement:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {MUSTARD_VARIETIES.map((variety) => (
              <article key={variety.name} className="jm-surface-card flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-bold text-[var(--brand-deep-green)]">
                      {variety.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[var(--brand-charcoal)]">{variety.name}</h3>
                  <p className="mt-1 text-xs font-medium italic text-[var(--brand-forest)]">
                    {variety.botanical}
                  </p>
                  <div className="mt-3 space-y-1.5 text-xs text-[var(--brand-charcoal)]">
                    <p>• <strong>Color:</strong> {variety.color}</p>
                    <p>• <strong>Purity:</strong> {variety.purity}</p>
                    <p>• <strong>Oil Yield:</strong> {variety.oil}</p>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-[var(--brand-forest)]">{variety.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Specifications Table */}
      <section id="specifications" className="jm-section jm-section--white scroll-mt-12">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Technical Parameters</p>
            <h2 className="jm-section-heading">Mustard Seeds Export Specifications</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala provides verifiable laboratory specifications for whole Indian mustard seeds. All
              parameters are verified using standard ISO, ASTA, and FSSAI analytical procedures:
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--brand-gold-pale)] bg-white shadow-sm">
            <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-6 py-4">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
                JM Masala Commercial Export Specifications: Indian Mustard Seeds
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
                  {MUSTARD_SPEC_ROWS.map((row) => (
                    <tr key={row.label} className="hover:bg-[var(--brand-cream)]/40">
                      <td className="whitespace-nowrap px-6 py-3.5 font-semibold text-[var(--brand-charcoal)]">
                        {row.label}
                      </td>
                      <td className="px-6 py-3.5 text-[var(--brand-forest)]">{row.value}</td>
                      <td className="px-6 py-3.5 text-xs text-stone-500">
                        {row.label.includes("Oil")
                          ? "ISO 659 / Solvent Extraction"
                          : row.label.includes("Moisture")
                          ? "ASTA 2.0 / ISO 939"
                          : row.label.includes("Purity")
                          ? "Visual & Gravimetric Separation"
                          : row.label.includes("Ash")
                          ? "ISO 928 / ISO 930"
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

      {/* Section 4: Export Grades by Destination Market */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Market Calibration</p>
            <h2 className="jm-section-heading">Mustard Seed Export Grades by Destination Market</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Export quality grades are tailored to the regulatory, microbiological, and functional needs of
              each destination region:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {MUSTARD_MARKET_GRADES.map((grade) => (
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
            These grades reflect JM Masala's active commercial supply standards developed through ongoing
            contracts with condiment manufacturers, oil extractors, and international spice distributors.
          </div>
        </div>
      </section>

      {/* Section 5: Gujarat & Rajasthan Sourcing Hub */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div>
              <p className="jm-section-label">Geographic Origin</p>
              <h2 className="jm-section-heading">Mustard Seeds from Gujarat &amp; Rajasthan</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Western India—encompassing Gujarat and Rajasthan—is the historical center of Indian mustard
                  production. The region's dry winter climate, cool clear nights during seed filling, and
                  alluvial-sandy loam soils foster high natural oil accumulation and sharp volatile flavor
                  precursors.
                </p>
                <p>
                  JM Masala procures mustard seeds directly through agricultural produce market committees
                  (APMC) across Northern Gujarat and contiguous producing districts of Rajasthan during the
                  peak February to March harvest window.
                </p>
                <p>
                  Operating directly from Gujarat provides our procurement specialists the capability to execute
                  on-arrival physical lot testing, verifying high grain bulk density, natural coloration, and
                  freedom from shriveled or immature seeds.
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
                The Verified JM Masala Mustard Supply Chain
              </h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                From Mandi Procurement to Global Ocean Freight Dispatch:
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    1
                  </span>
                  <span>Mandi Spot Procurement (Gujarat &amp; Rajasthan Mandis)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    2
                  </span>
                  <span>Arrival Lot Sampling &amp; Moisture Testing (&lt;8%)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    3
                  </span>
                  <span>Air Aspiration (Chaff, Dust &amp; Hollow Seeds Removal)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    4
                  </span>
                  <span>High-Density Gravity Destoning (Stone &amp; Soil Separation)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    5
                  </span>
                  <span>Sortex Optical Color Sorting (Discolored Grain Ejection)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    6
                  </span>
                  <span>Inline Rare-Earth Magnetic &amp; Metal Detection Check</span>
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

      {/* Section 6: Processing & Sortex Cleaning Infrastructure */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Processing Operations</p>
            <h2 className="jm-section-heading">Mustard Seeds Cleaning, Sortex Sorting &amp; Metal Detection</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Because mustard seeds are small spherical grains, extracting small field stones, weed seeds, and
              discolored kernels requires calibrated multi-stage processing:
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MUSTARD_SUPPLY_CHAIN_STEPS.map((step) => (
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

      {/* Section 7: Quality Parameters Explained */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Quality Assurance</p>
            <h2 className="jm-section-heading">Mustard Seed Quality Parameters Explained</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Quality compliance for international condiment manufacturers, food processors, and spice mills
              hinges on six critical parameters:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <Sparkles className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Purity Calibration (Up to 99.5%)</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Calibrated across 98% (Machine Cleaned FAQ), 99% (Sortex Cleaned), and 99.5% (Super Sortex).
                Gravimetric analysis confirms exact freedom from foreign seeds and inert matter.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <Scale className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Moisture Control (Max. 8%)</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Strictly controlled at or below 8.0%. Low moisture prevents enzymatic rancidity in oil-rich
                seeds, prevents fungal formation, and protects crisp seed popping characteristics.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <PackageCheck className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Natural Oil Content (38%-42%)</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Tested between 38% and 42% v/w via ISO 659 solvent extraction, delivering high oil yields
                for crushing mills and rich body for emulsion-based table condiments.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <ShieldCheck className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Foreign Matter Control</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Strictly controlled below 0.5% in Sortex lots and 1.0% in machine-cleaned grades. Gravity
                destoners eliminate field gravel and mud pellets of matching size.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <FileCheck2 className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Pesticide Residue &amp; MRLs</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Tested at accredited NABL labs via LC-MS/MS and GC-MS/MS to ensure compliance with destination
                MRLs (EU pesticide regulations, US FDA defect action levels, Codex standards).
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <CheckCircle2 className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Microbiological Compliance</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Certified Salmonella-negative in 25g, E. Coli &lt; 10 CFU/g, and compliant with international
                pathogen and total viable count standards for food ingredient safety.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 8: Packaging & Container Stuffing Logistics */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
            <div>
              <p className="jm-section-label">Logistics &amp; Stowage</p>
              <h2 className="jm-section-heading">Mustard Seeds Packaging &amp; Container Stuffing</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Mustard seeds are dense, spherical grains with a heavy bulk density of approximately{" "}
                  <strong>700 to 750 g/L</strong>, allowing high container payloads:
                </p>
                <ul className="space-y-2 text-sm text-[var(--brand-charcoal)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span>
                      <strong>20ft FCL Container:</strong> 18.0 to 20.0 Metric Tons loose stuffed (approx.
                      720 to 800 bags of 25kg) or ~15.0–16.0 MT palletized.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span>
                      <strong>40ft FCL Container:</strong> 26.0 to 27.0 Metric Tons loose stuffed (approx.
                      1,040 to 1,080 bags of 25kg) or ~22.0–24.0 MT palletized.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span>
                      <strong>Consolidated Consignments:</strong> Mustard can be combined with Cumin,
                      Coriander, Fennel, Fenugreek, and Sesame under a single Bill of Lading.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--brand-gold-pale)] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">
                Available Export Packaging Options
              </h3>
              <div className="mt-4 space-y-3 text-xs text-[var(--brand-forest)]">
                <div className="rounded border border-stone-200 p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    1. Food-Grade Woven PP Bags (25 kg / 50 kg)
                  </p>
                  <p className="mt-1">
                    Heavy-duty laminated polypropylene woven bags with heat-sealed polyethylene inner liners
                    providing moisture defense during ocean voyages.
                  </p>
                </div>
                <div className="rounded border border-stone-200 p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    2. Multi-Wall Kraft Paper Sacks (25 kg / 50 kg)
                  </p>
                  <p className="mt-1">
                    3-ply food-grade Kraft paper with an inner PE moisture barrier liner, ideal for automated
                    condiment and seasoning manufacturing facilities.
                  </p>
                </div>
                <div className="rounded border border-stone-200 p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    3. 1,000 kg (1 MT) FIBC Bulk Jumbo Bags
                  </p>
                  <p className="mt-1">
                    Heavy-duty big bags with top duffle, discharge spout, and lifting loops designed for
                    industrial mustard oil extraction plants and bulk condiment producers.
                  </p>
                </div>
                <div className="rounded border border-stone-200 p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    4. Custom Branded Private Label Pouches (100g to 1kg)
                  </p>
                  <p className="mt-1">
                    Pre-printed stand-up barrier pouches with zip locks, barcodes, and multi-language nutrition
                    labeling for retail supermarket distribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Commercial Applications */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Industrial Applications</p>
            <h2 className="jm-section-heading">Commercial Applications of Indian Mustard Seeds</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Supplied across key global condiment manufacturing, food processing, and edible oil sectors:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Prepared Condiments &amp; Pastes</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                Yellow and brown mustard seeds are milled and emulsified into prepared table mustards (Dijon,
                American yellow, wholegrain), mayonnaise, hot dog relishes, and barbecue sauces.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Culinary Tempering &amp; Curries</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                Small brown and black rai seeds are popped in hot ghee or oil (tadka) across Indian, Sri
                Lankan, and Southeast Asian cooking, releasing an aromatic nutty crackle and pungent savory flavor.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Pickling &amp; Brining</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                Whole and cracked mustard seeds act as an essential aromatic and natural preservative in
                commercial cucumber pickles, sauerkraut, pickled herring, and traditional mango preserves.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Cold-Pressed Mustard Oil</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                High natural oil content (38%–42%) makes brown rai seeds the preferred feedstock for
                traditional expeller-pressed pungent mustard oil (Sarson ka Tel) widely consumed across Asia.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 10: Export Documentation Package */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Trade Compliance</p>
            <h2 className="jm-section-heading">Export Documentation Package</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Every mustard consignment shipped by JM Masala includes a verified regulatory and commercial
              documentation package:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOCUMENTATION_PACKAGE.map((doc) => (
              <div key={doc} className="flex items-start gap-3 rounded-lg border border-stone-200 bg-white p-4">
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

      {/* Section 11: How to Buy Bulk Mustard Seeds */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Buyer Guide</p>
            <h2 className="jm-section-heading">How to Buy Bulk Mustard Seeds from India</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala provides a streamlined, transparent procurement procedure for international B2B buyers:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                1
              </span>
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Inquiry &amp; Specs</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Submit your required variety (Brown Rai, Bold Yellow, Bold Brown), purity target, packaging, and destination port.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                2
              </span>
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Sample &amp; Quote</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                We provide a formal proforma quotation (FOB Mundra or CIF) and dispatch representative 250g–500g physical samples.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                3
              </span>
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Processing &amp; Sortex</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Upon contract agreement, seeds undergo mechanical cleaning, destoning, Sortex optical grading, metal checking, and NABL COA testing.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/30 p-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                4
              </span>
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Stuffing &amp; Dispatch</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Containers are inspected, stuffed, sealed, and dispatched to Mundra Port with complete export documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Frequently Asked Questions */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Buyer Inquiries</p>
            <h2 className="jm-section-heading">Frequently Asked Questions</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Direct, factual answers to common questions about Indian mustard seed export, commercial grades,
              specifications, and procurement:
            </p>
          </div>

          <div className="mt-8 divide-y divide-[var(--brand-gold-pale)] rounded-xl border border-[var(--brand-gold-pale)] bg-white">
            {MUSTARD_FAQS.map((faq) => (
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
            Request Mustard Seed Export Specifications &amp; Quotation
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[rgba(255,255,255,0.85)]">
            Contact JM Masala's trade desk in Gujarat for representative samples, technical specification
            sheets, laboratory test reports, and competitive FOB Mundra or CIF ocean freight quotations.
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

export default MustardSeedsPage;
