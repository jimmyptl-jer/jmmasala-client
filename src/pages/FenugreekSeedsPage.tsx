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
import fenugreekSeedsImage from "@/assets/FenugreekSeeds.png";

const FENUGREEK_SPEC_ROWS = [
  { label: "Product Name", value: "Fenugreek Seeds" },
  { label: "Common Indian Name", value: "Methi Seeds (મેથી / मेथी)" },
  { label: "Botanical Name", value: "Trigonella foenum-graecum L." },
  { label: "ITC-HS Code", value: "0910 99 12 (Whole Seeds) / 0910 99 26 (Ground Powder)" },
  { label: "Origin", value: "Gujarat and Rajasthan, India" },
  { label: "Physical Purity", value: "98.0% / 99.0% / 99.5% Sortex Optical Cleaned" },
  { label: "Moisture Content", value: "Max 10.0% (standard target 8.0% to 9.5%)" },
  { label: "Available Grades", value: "Bold Grade / Semi-Bold Grade / Machine Cleaned FAQ" },
  { label: "Color Profile", value: "Natural yellowish to golden amber brown" },
  { label: "Broken / Damaged Seeds", value: "Below 2.0% maximum" },
  { label: "Foreign Matter (Admixture)", value: "Max 0.5% (Sortex) / Max 1.0% (Machine Cleaned)" },
  { label: "Total Ash", value: "Max 7.0%" },
  { label: "Acid Insoluble Ash", value: "Max 1.25%" },
  { label: "Protein Content", value: "20.0% to 25.0% (natural vegetable protein)" },
  { label: "Total Dietary Fiber", value: "25.0% to 50.0% (rich in galactomannan mucilage)" },
  { label: "Seed Structure", value: "Hard, compact rhombic grains with characteristic oblique furrow" },
  { label: "Cleaning Standard", value: "Multi-Deck Screening + Gravity Destoning + Sortex Optical Color Sorted" },
  { label: "Microbiological Limits", value: "Salmonella: Absent in 25g; E. Coli: <10 CFU/g" },
  { label: "Pesticide & Residue Limits", value: "Controlled to destination MRLs (EU, US FDA, GCC, Codex)" },
  { label: "Shelf Life", value: "18 to 24 months under cool, dry warehouse storage" },
];

const FENUGREEK_MARKET_GRADES = [
  {
    market: "Bold Grade (Sortex Cleaned)",
    gradeBadge: "99.5% Sortex Clean",
    purity: "99.5% Minimum Purity",
    moisture: "Max 9.0% to 10.0% Moisture",
    admixture: "Max 0.5% (Foreign Matter <0.2%)",
    description:
      "Plump, uniformly sized large rhombic seeds with radiant golden-yellow luster. Virtually free of dark or immature grains, ideal for premium consumer retail packaging, whole spice culinary displays, and European/American specialty spice distribution.",
  },
  {
    market: "Semi-Bold Grade (Export Standard)",
    gradeBadge: "99.0% Sortex Clean",
    purity: "99.0% Minimum Purity",
    moisture: "Max 10.0% Moisture",
    admixture: "Max 0.8% Admixture",
    description:
      "The global workhorse export grade. High aromatic concentration of natural sotolon with optimal balance of flavor and bulk density, extensively procured for curry powder blending, commercial pickling, and institutional food service.",
  },
  {
    market: "Machine Cleaned FAQ Grade",
    gradeBadge: "98.0% Machine Cleaned",
    purity: "98.0% Minimum Purity",
    moisture: "Max 10.0% Moisture",
    admixture: "Max 1.5% Admixture",
    description:
      "Sifted over vibratory fine-mesh screens and destoned to eliminate dirt, sand, and field straw. Cost-effective commercial solution widely imported for industrial cold-milling into fenugreek powder and high-volume curry paste formulations.",
  },
  {
    market: "Nutraceutical & Extract Grade",
    gradeBadge: "High Saponin / 4-HIL",
    purity: "99.5% Super Clean",
    moisture: "Max 8.5% Moisture",
    admixture: "Max 0.3% Admixture",
    description:
      "Specialty lots selected for high natural active phytochemical markers (steroidal saponins, diosgenin precursors, and 4-hydroxyisoleucine) for botanical extraction, pharmaceutical dietary supplements, and blood sugar support capsules.",
  },
];

const FENUGREEK_SUPPLY_CHAIN_STEPS = [
  {
    step: "01",
    title: "Gujarat & Rajasthan Mandi Procurement",
    description:
      "Procured directly from agricultural market yards across Northern Gujarat (Mehsana, Unjha, Patan) and Western Rajasthan during the fresh February to April harvest window.",
  },
  {
    step: "02",
    title: "Arrival Lot Sampling & Moisture Testing",
    description:
      "Arrival bags are sampled at the warehouse gate to test moisture stability (<10%), seed hardness, natural golden color retention, and physical admixture before intake.",
  },
  {
    step: "03",
    title: "Multi-Deck Vibratory Fine Screening",
    description:
      "Raw seeds pass through calibrated multi-deck screens to separate oversized pods, chaff, straw, dust, and undersized fractured grains from the main seed flow.",
  },
  {
    step: "04",
    title: "High-Density Gravity Destoning",
    description:
      "Gravity separators eliminate small stones, gravel, and field dirt lumps matching seed size and weight, followed by inline rare-earth magnets to catch metallic debris.",
  },
  {
    step: "05",
    title: "Sortex Optical Color Sorting",
    description:
      "High-speed digital optical color sorters inspect each seed individually, using precision pneumatic air nozzles to eject dark, black, discolored, or defective grains.",
  },
  {
    step: "06",
    title: "NABL Laboratory Inspection & COA",
    description:
      "Finished production batches are tested at accredited laboratories for purity, moisture, total ash, acid-insoluble ash, microbiological criteria, and pesticide residue MRLs.",
  },
  {
    step: "07",
    title: "Moisture-Barrier Export Packaging",
    description:
      "Seeds are packed in heavy-duty 25kg/50kg food-grade woven PP bags with heat-sealed PE inner liners or 3-ply Kraft paper sacks, protected with container-level desiccants.",
  },
  {
    step: "08",
    title: "Container Stuffing & Mundra Port Dispatch",
    description:
      "Containers are stuffed and sealed under supervision in Gujarat and hauled via direct expressway to Mundra Port or Pipavav Port for swift ocean freight departure.",
  },
];

const FENUGREEK_FAQS = [
  {
    question: "Who is a fenugreek seeds exporter from India?",
    answer:
      "JM Masala is an Indian spice exporter supplying export-grade fenugreek seeds (methi seeds) for international bulk buyers, food manufacturers, and spice distributors from Gujarat, India. Product specifications, cleaning standards, packaging, and export documentation are agreed according to the buyer's destination requirements.",
  },
  {
    question: "What are fenugreek seeds called in India?",
    answer:
      "In India, fenugreek seeds are widely known as 'Methi' or 'Methi Dana' in Hindi, Gujarati, Marathi, and Punjabi. In southern states, they are known as 'Vendhayam' in Tamil and 'Menthulu' in Telugu.",
  },
  {
    question: "What is the botanical name of fenugreek?",
    answer:
      "The botanical name of fenugreek is Trigonella foenum-graecum L., an annual legume plant belonging to the family Fabaceae.",
  },
  {
    question: "What is the difference between fenugreek seeds and methi seeds?",
    answer:
      "There is no difference. 'Methi seeds' is the authentic Indian regional name, while 'fenugreek seeds' is the English international commercial name for the exact same botanical seed spice (Trigonella foenum-graecum).",
  },
  {
    question: "Where does JM Masala source fenugreek seeds?",
    answer:
      "JM Masala sources fenugreek seeds through established agricultural trade networks across Northern Gujarat (Mehsana, Patan, Unjha) and contiguous growing tracts in Western Rajasthan during peak harvest arrivals.",
  },
  {
    question: "What purity of fenugreek seeds does JM Masala supply?",
    answer:
      "JM Masala supplies Fenugreek Seeds in 98% Machine Cleaned FAQ, 99% Sortex Cleaned, and 99.5% Super Cleaned optical grades. The exact purity specification is confirmed against the buyer's agreed contract parameters.",
  },
  {
    question: "What is the maximum moisture specification for fenugreek?",
    answer:
      "Our export commercial specifications calibrate moisture at maximum 10.0%, with standard lots typically tested between 8.0% and 9.5% to ensure shelf stability, prevent fungal growth, and preserve the seed's characteristic aroma during ocean transit.",
  },
  {
    question: "What grades of fenugreek seeds are available?",
    answer:
      "We offer Bold Grade (large plump rhombic seeds with uniform golden luster for premium retail packs), Semi-Bold Grade (standard export grade for spice blending and food service), and Machine Cleaned FAQ Grade (for industrial powder grinding and oil extraction).",
  },
  {
    question: "Does JM Masala supply bulk fenugreek seeds?",
    answer:
      "Yes. JM Masala supplies bulk fenugreek seeds in 20ft FCL (~20.0 to 22.0 Metric Tons) and 40ft FCL (~26.0 to 27.0 Metric Tons) container loads, as well as combined multi-spice container shipments with cumin, coriander, fennel, and sesame.",
  },
  {
    question: "Why does fenugreek load higher tonnage in containers?",
    answer:
      "Fenugreek seeds are hard, compact, dense rhombic grains with a high bulk density of approximately 750 to 800 g/L. This heavy bulk density allows container payloads of up to 20 to 22 Metric Tons in a standard 20ft FCL container without exceeding volumetric space.",
  },
  {
    question: "How are fenugreek seeds cleaned and processed?",
    answer:
      "Raw fenugreek seeds undergo multi-deck vibratory screening to separate pods and straw, air aspiration for dust elimination, gravity destoning to extract stones of matching size, and digital high-resolution Sortex optical color sorting to remove discolored or defective grains.",
  },
  {
    question: "What packaging options are available for fenugreek exports?",
    answer:
      "We supply fenugreek in 25kg and 50kg food-grade woven polypropylene (PP) bags with heat-sealed PE inner liners, multi-wall Kraft paper sacks, 1,000 kg FIBC jumbo totes, and custom private-label retail pouches (100g to 1kg).",
  },
  {
    question: "Can buyers request physical samples of fenugreek seeds?",
    answer:
      "Yes. Commercial importers and food industrial buyers can contact JM Masala to request representative physical samples (250g to 500g) along with laboratory specification sheets prior to confirming bulk contracts.",
  },
  {
    question: "Can JM Masala provide laboratory documentation (COA)?",
    answer:
      "Yes. Every commercial export consignment is accompanied by an accredited NABL laboratory Certificate of Analysis (COA) verifying purity, moisture, ash, microbiological criteria, and destination-specific pesticide residue MRLs.",
  },
  {
    question: "How can I request a quotation for fenugreek seeds?",
    answer:
      "Buyers can submit an export inquiry via our website contact form or directly through WhatsApp (+91 91067 66041) stating required grade (Bold, Semi-Bold, or Sortex 99%), packaging type, destination port, and delivery terms (FOB Mundra or CIF).",
  },
];

const FenugreekSeedsPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Fenugreek Seeds / Methi Seeds (99% Sortex Export Procurement)",
      "1x 20ft FCL (~20-22 MT)",
    ),
  );

  const canonicalUrl = `${SITE_URL}/fenugreek-seeds-exporter-india`;
  const productImageUrl = `${SITE_URL}${fenugreekSeedsImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: "Fenugreek Seeds (Methi Seeds)",
    description:
      "Export-grade Indian fenugreek seeds (Methi Dana) from Gujarat. Machine-cleaned & Sortex golden-yellow seeds, 99%-99.5% purity, high dietary fiber, FOB Mundra and CIF global supply.",
    image: [productImageUrl],
    sku: "JMM-FENUGREEK-SEEDS",
    mpn: "JMM-FENUGREEK-SEEDS",
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
    additionalProperty: FENUGREEK_SPEC_ROWS.map((spec) => ({
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
        name: "Fenugreek Seeds Exporter India",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FENUGREEK_FAQS.map((faq) => ({
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
        title="Fenugreek Seeds Exporter from India | Methi Seeds | JM Masala"
        description="JM Masala supplies export-grade fenugreek (methi) seeds from India for bulk buyers, spice distributors and food manufacturers. Request specifications, samples and export quotations."
        path="/fenugreek-seeds-exporter-india"
        imageUrl={productImageUrl}
        imageAlt="Export-grade golden fenugreek seeds (Methi Dana) supplied by JM Masala from India"
        type="product"
        keywords={[
          "fenugreek seeds exporter india",
          "fenugreek seeds supplier india",
          "methi seeds exporter",
          "methi seeds supplier india",
          "indian fenugreek seeds",
          "bulk fenugreek seeds",
          "fenugreek seeds gujarat",
          "sortex fenugreek seeds",
          "fenugreek seeds wholesale",
          "fenugreek seeds manufacturer india",
          "methi dana bulk supplier",
          "trigonella foenum-graecum exporter",
          "bold fenugreek seeds india",
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
              Fenugreek Seeds Exporter from India
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
                Fenugreek Seeds Exporter from India
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--brand-gold-light)] md:text-xl">
                Indian Methi Seeds | Bulk Export Supply | Gujarat, India
              </p>

              {/* Factual Opening Direct Answer Paragraph (verbatim prompt answer) */}
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[rgba(255,255,255,0.9)]">
                <p>
                  JM Masala supplies export-grade fenugreek seeds (methi seeds) from India for
                  international importers, spice distributors, food manufacturers and bulk buyers. Our
                  fenugreek seeds are sourced through established Indian trade networks and processed
                  according to agreed buyer requirements for purity, moisture, appearance, cleaning and
                  packing. Buyers can request product specifications, samples, laboratory documentation
                  and export quotations based on their destination and contract requirements.
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
                  src={fenugreekSeedsImage}
                  alt="Export-grade fenugreek seeds (Methi Dana) supplied by JM Masala from India"
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
                  <p className="mt-1 font-semibold text-white">0910 99 12 (Whole)</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Purity Range</span>
                  <p className="mt-1 font-semibold text-white">98% – 99.5% Sortex</p>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-[rgba(255,255,255,0.65)]">
                Fenugreek seeds (methi seeds) supplied by JM Masala from Gujarat, India.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* AI Grounding Box: Fenugreek Seeds at a Glance */}
      <section className="border-b border-[var(--brand-gold-pale)] bg-white py-10">
        <div className="jm-container">
          <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                  Quick Commercial Summary
                </p>
                <h2 className="text-xl font-bold text-[var(--brand-charcoal)] md:text-2xl">
                  Fenugreek Seeds at a Glance
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
                  Fenugreek Seeds · Methi Seeds (મેથી / मेथी)
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Botanical Classification</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Trigonella foenum-graecum L.
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Origin &amp; Sourcing</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Gujarat (Mehsana, Patan, Unjha) &amp; Rajasthan
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Export Commercial Grades</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Bold Grade · Semi-Bold Grade · Machine Cleaned
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Purity Standard</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  98.0% / 99.0% / 99.5% Sortex Optical Cleaned
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Moisture Limit</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Max 10.0% (Standard target 8.0%–9.5%)
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Color &amp; Shape</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Golden yellow to amber brown rhombic seeds
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Processing Infrastructure</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Multi-deck Screening, Destoning, Sortex Sorting
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Container Loading</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  20ft FCL: 20.0–22.0 MT | 40ft FCL: 26.0–27.0 MT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Are Fenugreek Seeds? */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="jm-section-label">Botanical Identity &amp; Origin</p>
              <h2 className="jm-section-heading">What Are Fenugreek Seeds? (Methi Seeds)</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Fenugreek seeds are the hard, angular, rhombic seeds produced within the slender curved
                  pods of the <em>Trigonella foenum-graecum</em> plant, an annual self-pollinating herb of
                  the legume family (Fabaceae). In India, they are known everywhere as <strong>Methi</strong>{" "}
                  or <strong>Methi Dana</strong>.
                </p>
                <p>
                  Each seed features a distinctive, deep oblique groove dividing it into two unequal halves.
                  They exhibit a warm golden-yellow to light amber-brown hue and possess a potent, complex
                  aroma powered by natural <strong>sotolon</strong>—the organic lactone responsible for the
                  characteristic maple-like fragrance released when the seeds are gently roasted or brewed.
                </p>
                <p>
                  Beyond traditional culinary usage across curries, pickles, and spice blends, fenugreek
                  seeds are an exceptional industrial raw material. They contain 45% to 50% dietary fiber
                  (predominantly water-soluble galactomannan mucilage), 20% to 25% plant protein, and
                  bioactive steroidal saponins (including diosgenin precursors and 4-hydroxyisoleucine),
                  making them highly sought after by global nutraceutical and functional food formulators.
                </p>
              </div>
            </div>

            <aside className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">
                The JM Masala Fenugreek Entity Map
              </h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                Unambiguous botanical, geographic, and trade relationships:
              </p>
              <div className="mt-4 space-y-2.5 text-xs text-[var(--brand-charcoal)]">
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>JM Masala Trading LLP</strong> → Indian Spice Exporter &amp; Processor
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Product:</strong> Fenugreek Seeds / Methi Seeds (Trigonella foenum-graecum L.)
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Trade Hub:</strong> Unjha &amp; Mehsana, Gujarat, India
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Key Constituents:</strong> Sotolon aroma · Soluble Galactomannan · Saponins
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Available Grades:</strong> Bold (Machine/Sortex) · Semi-Bold · FAQ Grade
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Global Logistics:</strong> 20–22 MT per 20ft FCL container via Mundra Port
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 2: Fenugreek Seed Grades (Bold vs Semi-Bold) */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Commercial Classification</p>
            <h2 className="jm-section-heading">Fenugreek Seed Grades: Bold vs. Semi-Bold</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala supplies fenugreek seeds calibrated according to seed sizing, visual appearance, and
              intended industrial use:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {FENUGREEK_MARKET_GRADES.map((grade) => (
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
            <strong className="text-[var(--brand-charcoal)]">Commercial Specification Note: </strong>
            These grades represent JM Masala's standard export offerings developed through ongoing commercial
            contracts with spice packers and ingredient buyers globally. Contract specifications are agreed
            and confirmed against buyer-approved pre-shipment lot samples.
          </div>
        </div>
      </section>

      {/* Section 3: Specifications Table */}
      <section id="specifications" className="jm-section jm-section--white scroll-mt-12">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Technical Parameters</p>
            <h2 className="jm-section-heading">Fenugreek Seeds Export Specifications</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala provides laboratory-verified commercial specifications for whole Indian Fenugreek
              seeds. All parameters are verified using standard ISO and ASTA testing procedures:
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--brand-gold-pale)] bg-white shadow-sm">
            <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-6 py-4">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
                JM Masala Commercial Export Specifications: Indian Fenugreek Seeds
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
                  {FENUGREEK_SPEC_ROWS.map((row) => (
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
                          : row.label.includes("Ash")
                          ? "ISO 928 / ISO 930"
                          : row.label.includes("Protein")
                          ? "ISO 1871 / Kjeldahl"
                          : row.label.includes("Fiber")
                          ? "AOAC Enzymatic-Gravimetric"
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
              Specifications can be calibrated according to agreed buyer requirements, destination-market
              regulations (EU, US FDA, GCC, East Asia), and individual contract parameters. Verified
              pre-shipment COA is issued by accredited NABL testing laboratories.
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Sourcing from Gujarat & Regional Mandis */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div>
              <p className="jm-section-label">Geographic Origin</p>
              <h2 className="jm-section-heading">Fenugreek Seeds from Gujarat &amp; Mandi Networks</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  India is the world's leading producer and exporter of fenugreek seeds, with Northern
                  Gujarat and Western Rajasthan accounting for the predominant share of commercial
                  production. The semi-arid climate, cool dry winter nights, and loamy sandy soils of these
                  regions allow fenugreek pods to mature with uniform golden color and concentrated sotolon
                  flavor.
                </p>
                <p>
                  JM Masala operates directly from Unjha, Gujarat—India's foremost commercial hub for seed
                  spices. We source fresh-crop fenugreek arrivals directly from agricultural produce market
                  committees (APMC) across Northern Gujarat (Mehsana, Patan, Harij, Unjha) and regional
                  mandi networks during peak harvest (February through April).
                </p>
                <p>
                  Direct mandi access provides our quality control team the ability to inspect fresh arrivals
                  in person, spot-test moisture, and procure select lots free from rain damage, ensuring high
                  bulk density and brilliant golden luster.
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

            <aside className="rounded-xl border border-[var(--brand-gold-pale)] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--brand-charcoal)]">
                The Verified JM Masala Fenugreek Supply Chain
              </h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                From Gujarat Mandi Procurement to Global Ocean Freight Dispatch:
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    1
                  </span>
                  <span>Gujarat &amp; Rajasthan Mandi Spot Procurement</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    2
                  </span>
                  <span>Direct Lot Selection &amp; Moisture Testing (&lt;10%)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    3
                  </span>
                  <span>Multi-Deck Vibratory Fine Screening &amp; Aspiration</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    4
                  </span>
                  <span>High-Density Gravity Destoning &amp; Metal Separation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    5
                  </span>
                  <span>Sortex Optical Color Sorting (Discolored Grain Rejection)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    6
                  </span>
                  <span>Batch NABL Laboratory Inspection &amp; Pre-Shipment COA</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    7
                  </span>
                  <span>Food-Grade Moisture-Barrier Packaging &amp; Desiccant Packing</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    8
                  </span>
                  <span>Container Stuffing &amp; Express Trucking to Mundra Port</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 5: Processing Infrastructure */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Processing Operations</p>
            <h2 className="jm-section-heading">Fenugreek Seeds Cleaning &amp; Sortex Optical Sorting</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Raw fenugreek arrives from fields with dried pod pieces, sand, weed seeds, and small stones of
              similar shape and weight. Achieving 99.0%–99.5% export cleanliness requires calibrated
              multi-stage physical processing:
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FENUGREEK_SUPPLY_CHAIN_STEPS.map((step) => (
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
            <h2 className="jm-section-heading">Fenugreek Seed Quality Parameters Explained</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Quality compliance for international food processors, spice mills, and nutraceutical brands
              requires rigorous monitoring across six core parameters:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <Sparkles className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Purity Calibration</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Supplied across 98% (Machine Cleaned FAQ), 99% (Sortex Cleaned), and 99.5% (Super Cleaned).
                Gravimetric testing ensures exact adherence to contractual purity specifications.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <Scale className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Moisture Control (Max 10%)</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Maintaining moisture below 10.0% is vital to avoid mold formation, mycotoxins, and enzymatic
                degradation during long maritime ocean crossings across the tropics.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <ShieldCheck className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Color &amp; Visual Luster</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Natural golden-yellow to amber-brown color profile. We sort mechanically and optically without
                any synthetic polishing, water washing, or artificial colorants.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <PackageCheck className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Foreign Matter Control</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Controlled below 0.5% in Sortex lots and 1.0% in machine-cleaned grades. Gravity destoners
                ensure zero gravel, field stones, mud lumps, or foreign agricultural seeds.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <FileCheck2 className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Pesticide Residue &amp; MRLs</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Tested at accredited NABL labs via LC-MS/MS and GC-MS/MS to ensure compliance with destination
                MRLs (EU pesticide regulations, US FDA defect action levels, Codex standards).
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <CheckCircle2 className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Microbiological Limits</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Certified Salmonella-free in 25g, E. Coli &lt; 10 CFU/g, and compliant with international yeast,
                mould, and total plate count standards for commercial food manufacturing.
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
              <h2 className="jm-section-heading">Fenugreek Seeds Packaging &amp; Container Stuffing</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Fenugreek seeds are hard, dense, compact grains with a high bulk density of{" "}
                  <strong>750 to 800 g/L</strong>. This enables high-efficiency container loading without
                  running out of volumetric room:
                </p>
                <ul className="space-y-2 text-sm text-[var(--brand-charcoal)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span>
                      <strong>20ft FCL Container:</strong> 20.0 to 22.0 Metric Tons loose stuffed (approx.
                      800 to 880 bags of 25kg) or ~18.0–19.0 MT palletized.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span>
                      <strong>40ft FCL Container:</strong> 26.0 to 27.0 Metric Tons loose stuffed (approx.
                      1,040 to 1,080 bags of 25kg) or ~23.0–24.0 MT palletized.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span>
                      <strong>Consolidated Shipments:</strong> Fenugreek can be shipped alongside Cumin,
                      Coriander, Fennel, and Sesame under a single consolidated Bill of Lading.
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
                    Heavy-duty polypropylene woven bags with heat-sealed polyethylene inner liners, the global
                    industry benchmark for moisture protection and mechanical durability.
                  </p>
                </div>
                <div className="rounded border border-stone-200 bg-white p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    2. Multi-Wall Kraft Paper Sacks (25 kg / 50 kg)
                  </p>
                  <p className="mt-1">
                    3-ply food-grade Kraft paper with inner barrier lining, widely requested by automated food
                    factories and spice blenders in Europe and North America.
                  </p>
                </div>
                <div className="rounded border border-stone-200 bg-white p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    3. 1,000 kg (1 MT) FIBC Bulk Jumbo Bags
                  </p>
                  <p className="mt-1">
                    Heavy-duty big bags with top duffle, bottom discharge spout, and corner lifting loops,
                    engineered for automated spice mills and industrial nutraceutical extraction plants.
                  </p>
                </div>
                <div className="rounded border border-stone-200 bg-white p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    4. Custom Branded Private Label Pouches (100g to 1kg)
                  </p>
                  <p className="mt-1">
                    Pre-printed stand-up zipper pouches with barcodes and multi-language nutrition labeling for
                    retail supermarket chains and consumer spice brands.
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
            <p className="jm-section-label">Industrial Applications</p>
            <h2 className="jm-section-heading">Commercial Applications of Indian Fenugreek Seeds</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Supplied across key global culinary, industrial food processing, and nutraceutical ingredient sectors:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Curry Powders &amp; Masalas</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                An indispensable base component in commercial curry powders, garam masala, sambar masala, and
                rasam blends, providing grounding bitter-sweet depth and rich aroma.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Pickling &amp; Preserves</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                Whole and crushed fenugreek seeds act as a natural preservative and essential flavoring agent
                in traditional Indian mango pickles, lime chutneys, and vinegar brines.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Nutraceutical Supplements</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                Rich in 4-hydroxyisoleucine, steroidal saponins, and water-soluble galactomannan fiber, widely
                encapsulated for dietary glucose management and wellness teas.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Industrial Spice Milling</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                Cleaned semi-bold and machine-cleaned seeds are cold-milled into pure 50-70 mesh fenugreek
                powder for snack seasonings, savory batters, and sauce bases.
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
              Every fenugreek consignment shipped by JM Masala includes a comprehensive regulatory and
              commercial export documentation package:
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

      {/* Section 10: How to Buy Bulk Fenugreek Seeds */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Buyer Guide</p>
            <h2 className="jm-section-heading">How to Buy Bulk Fenugreek Seeds from India</h2>
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
                Submit your required grade (Bold, Semi-Bold, Sortex 99%), packaging format, and destination port.
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
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Processing &amp; Sortex</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Upon order confirmation, seeds undergo mechanical cleaning, destoning, Sortex optical grading, and NABL COA testing.
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
              Direct, factual answers to common questions about Indian fenugreek seed export, commercial grades,
              specifications, and procurement:
            </p>
          </div>

          <div className="mt-8 divide-y divide-[var(--brand-gold-pale)] rounded-xl border border-[var(--brand-gold-pale)] bg-white">
            {FENUGREEK_FAQS.map((faq) => (
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
            Request Fenugreek Seed Export Specifications &amp; Quotation
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

export default FenugreekSeedsPage;
