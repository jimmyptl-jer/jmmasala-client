import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Flame,
  Layers,
  MapPin,
  PackageCheck,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Seo from "@/components/Seo";
import {
  COMPANY,
  DOCUMENTATION_PACKAGE,
  SITE_URL,
  buildProductInquiryMessage,
  buildWhatsAppUrl,
} from "@/data/siteData";
import redChilliImage from "@/assets/RedChilli.png";

const RED_CHILLI_SUMMARY_ROWS = [
  { label: "Product Category", value: "Indian Dried Red Chilli (Whole, Stemless, Crushed & Powder)" },
  { label: "Key Varieties Supplied", value: "Teja Chilli (S17) · Bird's Eye Chilli (Kanthari) · King Chilli (Bhut Jolokia)" },
  { label: "Botanical Names", value: "Capsicum annuum (Teja) · Capsicum frutescens (Bird's Eye) · Capsicum chinense (King Chilli)" },
  { label: "ITC-HS Codes", value: "0904 21 10 (Whole/Stemless) · 0904 21 20 (Crushed Flakes) · 0904 22 11 (Cold-Ground Powder)" },
  { label: "Primary Origins", value: "Andhra Pradesh (Guntur), Telangana (Warangal), Kerala & Northeast India (Assam/Nagaland)" },
  { label: "Available Formats", value: "Whole with Stem · 100% Stemless · Coarse Crushed Flakes (with/without seeds) · Fine Powder" },
  { label: "Heat Range (SHU)", value: "50,000 to 1,041,000+ SHU across varieties (Standardized by HPLC)" },
  { label: "Color Value (ASTA)", value: "50 to 120+ ASTA (Variety dependent, high color retention)" },
  { label: "Moisture Content", value: "Maximum 10.0% to 11.0% (standard export stability)" },
  { label: "Aflatoxin Standard", value: "B1 <5 ppb, Total <10 ppb (EU Compliance) or <20 ppb (US FDA) on tested lots" },
  { label: "Sudan Dye Testing", value: "Sudan I, II, III & IV Absent / Negative (HPLC verified)" },
  { label: "Container Stuffing", value: "20ft FCL: 6.5–7.5 MT (bags) / 11 MT (bales) | 40ft HC: 14–16 MT (bags) / 22–24 MT (bales)" },
];

const CHILLI_VARIETIES = [
  {
    name: "Teja Chilli (S17)",
    botanical: "Capsicum annuum var. acuminatum",
    slug: "/teja-chilli-exporter-india",
    badge: "Commercial High-Heat Flagship",
    origin: "Guntur (Andhra Pradesh) & Khammam (Telangana)",
    heat: "50,000 to 85,000+ SHU",
    color: "50 to 70 ASTA (Vibrant Deep Crimson)",
    length: "6.0 to 9.0 cm slender, wrinkled pods",
    formats: "Whole with Stem · Stemless · Crushed Flakes · Powder",
    description:
      "India's premier commercial export chilli. Grown in the alluvial plains of Guntur, Teja S17 is renowned for its intense stinging pungency, fiery capsaicin concentration, and durable thick skin that withstands trans-oceanic transit. The primary choice for industrial hot sauces, commercial spice rubs, meat processing, and capsaicin oleoresin extraction.",
  },
  {
    name: "Bird's Eye Chilli (Kanthari)",
    botanical: "Capsicum frutescens",
    slug: "/bird-eye-chilli-exporter-india",
    badge: "Intense Botanical Heat",
    origin: "Kerala & Southern/Northeastern Hill Tracts",
    heat: "100,000 to 225,000+ SHU",
    color: "60 to 90 ASTA (Fiery Bright Red to Deep Scarlet)",
    length: "1.5 to 3.0 cm small conical upright pods",
    formats: "Whole Sun-Dried · Coarse Crushed · Micro-Milled Powder",
    description:
      "A prized heirloom hot chilli known locally as Kanthari. Small in stature but packing severe, rapid-onset thermal heat with distinctive tangy undertones. Extensively procured by gourmet condiment makers, Southeast Asian sambal and paste producers, natural pharmaceutical capsaicin extractors, and specialty pickling brands.",
  },
  {
    name: "King Chilli (Bhut Jolokia / Ghost Pepper)",
    botanical: "Capsicum chinense",
    slug: "/king-chilli-exporter-india",
    badge: "Super-Hot World Record Origin",
    origin: "Assam, Nagaland & Manipur (Northeast India)",
    heat: "800,000 to 1,041,000+ SHU",
    color: "50 to 80 ASTA (Distinctive Fiery Orange-Red to Crimson)",
    length: "5.0 to 8.5 cm elongated with bumpy, dented skin",
    formats: "Whole Dried Pods · Crushed Flakes · Extreme Powder",
    description:
      "The legendary indigenous chilli of Northeast India with certified GI (Geographical Indication) status. Revered globally for staggering super-hot heat combined with an intensely sweet, sub-tropical fruity aroma before the delayed, building inferno takes hold. Carefully solar-cured to preserve pod morphology and pungent volatile resin.",
  },
];

const CHILLI_HEAT_COMPARISON = [
  {
    variety: "King Chilli (Bhut Jolokia)",
    species: "Capsicum chinense",
    scovilleRange: "800,000 – 1,041,000+ SHU",
    heatClassification: "Super Hot / Extreme",
    primaryUse: "Specialty hot sauces, capsaicin oleoresin, ultra-heat rubs",
  },
  {
    variety: "Bird's Eye Chilli (Kanthari)",
    species: "Capsicum frutescens",
    scovilleRange: "100,000 – 225,000+ SHU",
    heatClassification: "Very High Heat",
    primaryUse: "Southeast Asian sambals, curries, botanical extracts",
  },
  {
    variety: "Teja Chilli (S17)",
    species: "Capsicum annuum",
    scovilleRange: "50,000 – 85,000+ SHU",
    heatClassification: "High Commercial Heat",
    primaryUse: "Industrial grinding, curry pastes, meat seasonings",
  },
];

const CHILLI_SPEC_ROWS = [
  { label: "Product Name", value: "Dried Whole Red Chilli / Stemless Chilli", testMethod: "Commercial Standard" },
  { label: "Varieties Available", value: "Teja S17 · Bird's Eye · King Chilli", testMethod: "Visual & Botanical Verification" },
  { label: "Botanical Names", value: "Capsicum annuum · Capsicum frutescens · Capsicum chinense", testMethod: "Taxonomic Classification" },
  { label: "ITC-HS Code", value: "0904 21 10 (Whole/Stemless) · 0904 22 11 (Powder)", testMethod: "Indian Customs Nomenclature" },
  { label: "Origin", value: "Guntur (Andhra Pradesh), Warangal (Telangana), Assam & Kerala, India", testMethod: "Certificate of Origin (COO)" },
  { label: "Physical Appearance", value: "Uniform red pods, free from mold, rot, soil encrustation and insect infestation", testMethod: "Visual Inspection" },
  { label: "Moisture Content", value: "Maximum 10.0% to 11.0% (target 9.5%–10.5%)", testMethod: "ASTA 2.0 / ISO 939 Oven Dry" },
  { label: "Heat Level (Capsaicin)", value: "50,000 SHU (Teja) to 1,041,000+ SHU (King Chilli)", testMethod: "HPLC / ASTA Method 21.3" },
  { label: "Color Value", value: "50 to 120+ ASTA Units (varies by variety and crop freshness)", testMethod: "Spectrophotometric / ASTA 20.1" },
  { label: "Foreign Matter", value: "Maximum 0.5% (Sortex clean) / Maximum 1.0% (Standard)", testMethod: "Manual & Gravimetric Sieve" },
  { label: "Loose Seeds / Damaged Pods", value: "Maximum 2.0% (Controlled during destemming and sorting)", testMethod: "Sieve & Visual Grading" },
  { label: "Aflatoxin B1", value: "Less than 5.0 ppb (EU Regulatory Compliance)", testMethod: "HPLC / LC-MS/MS" },
  { label: "Total Aflatoxins (B1+B2+G1+G2)", value: "Less than 10.0 ppb (EU) / Less than 20.0 ppb (US FDA)", testMethod: "HPLC / LC-MS/MS" },
  { label: "Ochratoxin A", value: "Less than 15.0 ppb (EU MRL compliance)", testMethod: "HPLC Fluorescence" },
  { label: "Sudan Dyes (I, II, III, IV)", value: "Absent / Negative (<10 ppb detection limit)", testMethod: "HPLC-DAD / LC-MS/MS" },
  { label: "Salmonella", value: "Absent in 25 grams", testMethod: "ISO 6579 / FDA BAM" },
  { label: "E. Coli", value: "Less than 10 CFU/g", testMethod: "ISO 16649-2" },
  { label: "Shelf Life", value: "12 to 18 months stored in a cool, dry, pest-free warehouse away from direct sunlight", testMethod: "Packaging Integrity" },
];

const CHILLI_FORMATS = [
  {
    title: "Whole with Stem",
    description:
      "Fully intact dried pods retaining the natural calyx and stem. Popular for bulk commodity trading, traditional culinary tempering, and low-cost bulk storage before final factory processing.",
    packing: "10kg / 20kg / 25kg PP or Jute Bags",
  },
  {
    title: "100% Stemless (Hand or Machine Destemmed)",
    description:
      "Stems precisely clipped or removed. Eliminates non-pungent plant tare, optimizes bulk packing density, and allows direct entry into commercial grinding, extractives, and paste production lines.",
    packing: "10kg / 20kg Corrugated Cartons or Compressed Bags",
  },
  {
    title: "Coarse Crushed Chilli Flakes",
    description:
      "Evenly crushed dried chilli flakes prepared with calibrated seed-to-pod ratios (or completely deseeded). Ideal for pizza toppings, seasoning shakers, and artisanal hot oils.",
    packing: "10kg / 25kg Paper Bags with Poly Liner",
  },
  {
    title: "Cold-Ground Red Chilli Powder",
    description:
      "Micro-pulverized whole dried pods ground in temperature-controlled hammer mills to avoid capsaicin volatilization and color scorching. Mesh size 30 to 60 mesh.",
    packing: "25kg Multi-wall Kraft Bags / 1kg Retail Pouches",
  },
];

const CHILLI_SUPPLY_CHAIN_STEPS = [
  {
    step: "01",
    title: "Mandi Origin Sourcing",
    description:
      "Direct farm and mandi procurement from Guntur APMC, Warangal market yards, and Northeast hill grower networks during the peak fresh winter-spring harvests.",
  },
  {
    step: "02",
    title: "Arrival Inspection & Moisture Audit",
    description:
      "Every batch is tested upon arrival for core moisture (<11%), pod elasticity, absence of surface mould, and true-to-type physical appearance.",
  },
  {
    step: "03",
    title: "Manual Sorting & Pod Grading",
    description:
      "Skilled graders hand-inspect chillies to cull broken, discolored, bleached, or insect-damaged pods, ensuring uniform visual grade.",
  },
  {
    step: "04",
    title: "Precision Destemming",
    description:
      "Pods destined for stemless grade are carefully clipped by hand or processed through automated rotary destemming units with minimal pod tearing.",
  },
  {
    step: "05",
    title: "Air Aspiration & Dust Removal",
    description:
      "High-velocity air aspiration columns strip field dust, loose calyx fragments, dried leaf particles, and loose unattached seeds.",
  },
  {
    step: "06",
    title: "Rare-Earth Magnet & Metal Detection",
    description:
      "Continuous inline magnetic separators and digital industrial metal detectors ensure zero ferrous or non-ferrous foreign contaminants.",
  },
  {
    step: "07",
    title: "Accredited Lab Chemical Testing",
    description:
      "Composite samples are dispatched to NABL accredited laboratories to verify SHU, ASTA color, Aflatoxin B1/Total, Ochratoxin A, and Sudan dye absence.",
  },
  {
    step: "08",
    title: "Baling, Bagging & Container Loading",
    description:
      "Packaged in new clean export bags, cartons, or hydraulic pressed bales to optimize freight volume and protect pods against in-transit moisture absorption.",
  },
];

const CHILLI_FAQS = [
  {
    question: "What types of red chillies does JM Masala export from India?",
    answer:
      "JM Masala exports three principal Indian red chilli varieties: commercial high-heat Teja Chilli (S17, 50,000–85,000 SHU), fiery small Bird's Eye Chilli (Kanthari, 100,000–225,000 SHU), and the world-renowned super-hot King Chilli (Bhut Jolokia / Ghost Pepper, 800,000–1,041,000+ SHU).",
  },
  {
    question: "Where does JM Masala source its red chillies?",
    answer:
      "We source Teja chillies directly from the premier agricultural mandis of Guntur (Andhra Pradesh) and Warangal (Telangana), authentic Bird's Eye chillies from Kerala and Southern hill belts, and genuine King Chillies directly from contracted grower networks in Assam and Northeast India.",
  },
  {
    question: "What is the difference between whole with stem and stemless chillies?",
    answer:
      "Whole with stem chillies retain the natural green/brown calyx and stalk. Stemless chillies have the stalk cleanly removed (either manually or mechanically). Stemless chillies reduce tare weight by approximately 5% to 7%, pack more densely into containers, and can be fed directly into commercial grinding or extraction mills without stem bitterness.",
  },
  {
    question: "What is the Scoville Heat Unit (SHU) rating of your chillies?",
    answer:
      "Our chillies cover an extensive heat spectrum calibrated by HPLC: Teja Chilli ranges between 50,000 and 85,000+ SHU; Bird's Eye Chilli delivers 100,000 to 225,000+ SHU; and King Chilli (Bhut Jolokia) reaches extreme levels of 800,000 to 1,041,000+ SHU.",
  },
  {
    question: "What ASTA color values are available?",
    answer:
      "ASTA color ranges from 50 to 70 ASTA for high-pungency Teja chillies, up to 90 ASTA for selected Bird's Eye batches, and 50 to 80 ASTA for solar-dried King Chilli. If buyers specifically require high color with low heat, we also supply Byadgi-style red chillies with 120–150+ ASTA upon request.",
  },
  {
    question: "Can JM Masala supply Aflatoxin and Sudan Dye test reports?",
    answer:
      "Yes. Every export shipment can be accompanied by an accredited NABL third-party laboratory Certificate of Analysis (COA) confirming that Aflatoxin B1 and Total Aflatoxins meet EU limits (<5 ppb B1, <10 ppb Total) or US FDA limits (<20 ppb Total), and that Sudan Dyes (I, II, III, IV) are absent/negative.",
  },
  {
    question: "What are the standard packaging options for export?",
    answer:
      "We supply red chillies in 10 kg, 20 kg, and 25 kg new PP woven bags with polyethylene liners, traditional jute sacks, corrugated cartons (specifically recommended for stemless and King chillies to prevent pod breakage), and hydraulic pressed bales up to 50 kg for high-tonnage ocean shipping.",
  },
  {
    question: "How many metric tons of red chilli fit in a 20ft or 40ft container?",
    answer:
      "Because whole dried chillies have low bulk density, standard bag packing yields approximately 6.5 to 7.5 Metric Tons in a 20ft FCL and 14.0 to 16.0 Metric Tons in a 40ft HC. When using hydraulic pressed bulk bales, container capacity increases substantially to ~11.0 MT in a 20ft FCL and ~22.0 to 24.0 MT in a 40ft HC.",
  },
  {
    question: "Does JM Masala supply crushed chilli flakes and chilli powder?",
    answer:
      "Yes. We supply coarse crushed chilli flakes (with customized seed ratios or 100% deseeded flakes for pizza toppings) and micro-pulverized pure red chilli powder ground on cold hammer mills to preserve volatile capsaicin oils and avoid scorching.",
  },
  {
    question: "Can international buyers request samples before placing a contract?",
    answer:
      "Yes. We dispatch representative export samples (whole pods, stemless, or powder) via international air courier along with preliminary specification sheets and laboratory test reports for buyer evaluation.",
  },
  {
    question: "What export documentation is included with each consignment?",
    answer:
      "Consignments include a Phytosanitary Certificate from the Plant Quarantine Organization of India, Certificate of Origin (COO), NABL Lab Certificate of Analysis (COA), Fumigation Certificate, Commercial Invoice, Packing List, and Bill of Lading (BL).",
  },
  {
    question: "How can I request a quotation for bulk Indian red chilli?",
    answer:
      "Submit an inquiry via our contact form or contact our export desk on WhatsApp (+91 91067 66041) stating your required variety (Teja, Bird's Eye, or King Chilli), format (whole, stemless, crushed, powder), heat/color parameters, packaging format, and destination seaport (FOB Mundra/Nhava Sheva or CIF global ports).",
  },
];

const RedChilliPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Indian Red Chilli (Teja / Bird's Eye / King Chilli Bulk Export)",
      "1x 40ft HC Container (~14-16 MT)",
    ),
  );

  const canonicalUrl = `${SITE_URL}/red-chilli-exporter-india`;
  const productImageUrl = `${SITE_URL}${redChilliImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: "Indian Red Chilli Whole & Stemless",
    description:
      "Export-grade Indian dry red chillies supplied by JM Masala. Teja Chilli (S17), Bird's Eye Chilli (Kanthari), and King Chilli (Bhut Jolokia) with verified SHU heat, ASTA color, and aflatoxin compliance.",
    image: [productImageUrl],
    sku: "JMM-RED-CHILLI",
    mpn: "JMM-red-chilli",
    brand: {
      "@type": "Brand",
      name: COMPANY.name,
      slogan: COMPANY.tagline,
    },
    category: "Food, Beverages & Tobacco > Food Items > Seasonings & Spices > Peppers",
    countryOfOrigin: {
      "@type": "Country",
      name: "India",
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    url: canonicalUrl,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Varieties", value: "Teja Chilli (S17), Bird's Eye Chilli, King Chilli (Bhut Jolokia)" },
      { "@type": "PropertyValue", name: "Formats", value: "Whole with Stem, 100% Stemless, Crushed Flakes, Powder" },
      { "@type": "PropertyValue", name: "Heat Range", value: "50,000 to 1,041,000+ Scoville Heat Units (SHU)" },
      { "@type": "PropertyValue", name: "Color Value", value: "50 to 120+ ASTA Units" },
      { "@type": "PropertyValue", name: "Moisture", value: "Maximum 10-11%" },
      { "@type": "PropertyValue", name: "Aflatoxin Control", value: "EU Compliant (<5ppb B1, <10ppb Total) & US FDA Compliant" },
      { "@type": "PropertyValue", name: "Sudan Dyes", value: "Negative / Absent (HPLC Screened)" },
      { "@type": "PropertyValue", name: "Origins", value: "Guntur (Andhra Pradesh), Warangal (Telangana), Assam (Northeast India)" },
    ],
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
          addressCountry: ["US", "CA", "GB", "AE", "SA", "SG", "AU", "DE", "NL", "MY"],
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
        applicableCountry: ["IN", "US", "AE", "GB", "CA", "SG", "SA", "AU", "DE", "NL", "MY"],
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
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
        name: "Red Chilli",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CHILLI_FAQS.map((faq) => ({
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
        title="Red Chilli Exporter from India | Teja, Bird's Eye & King Chilli | JM Masala"
        description="JM Masala supplies Indian red chillies for international importers, spice distributors, food manufacturers and bulk buyers. Request specifications, samples and export quotations."
        path="/red-chilli-exporter-india"
        imageUrl={productImageUrl}
        imageAlt="Export-grade Indian red chillies (Teja, Bird's Eye, King Chilli) supplied by JM Masala"
        type="product"
        keywords={[
          "red chilli exporter india",
          "red chilli supplier india",
          "indian red chilli supplier",
          "dry red chilli exporter",
          "bulk red chilli supplier",
          "teja chilli exporter india",
          "bird eye chilli exporter india",
          "king chilli exporter india",
          "stemless red chilli bulk",
          "guntur chilli exporter",
          "indian chilli wholesale",
        ]}
        schema={[productSchema, breadcrumbSchema, faqSchema]}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="border-b border-[var(--brand-gold-pale)] bg-white py-3">
        <div className="jm-container">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-[var(--brand-forest)]">
            <li>
              <Link to="/" className="hover:text-[var(--brand-deep-green)]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/products" className="hover:text-[var(--brand-deep-green)]">
                Products
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[var(--brand-charcoal)]" aria-current="page">
              Red Chilli Exporter from India
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-[var(--brand-deep-green)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#381010] via-[#1a0808] to-[#0d0404] opacity-95" />
        <div className="jm-container relative py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold-light)]">
                <MapPin className="h-3.5 w-3.5" /> Guntur, Warangal &amp; Northeast India Hubs
              </p>
              <h1 className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-white md:text-5xl">
                Red Chilli Exporter from India
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--brand-gold-light)] md:text-xl">
                Teja Chilli | Bird's Eye Chilli | King Chilli | Bulk Export Supply
              </p>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[rgba(255,255,255,0.9)]">
                <p>
                  JM Masala supplies Indian red chillies for international importers, spice distributors, food
                  manufacturers and bulk buyers. Our chilli range includes Teja Chilli, Bird's Eye Chilli and King
                  Chilli, supplied according to buyer requirements for chilli type, colour, heat level, moisture,
                  processing, cleaning, packing and destination-specific specifications. Buyers can request product
                  specifications, samples, laboratory documentation and export quotations.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="jm-btn jm-btn--primary inline-flex items-center gap-2"
                >
                  Request Chilli Quotation <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#specifications"
                  className="jm-btn jm-btn--outline border-white text-white hover:bg-white hover:text-[var(--brand-deep-green)]"
                >
                  View Laboratory Specifications
                </a>
                <Link
                  to="/contact?intent=sample"
                  className="jm-btn jm-btn--outline border-[var(--brand-gold-light)] text-[var(--brand-gold-light)] hover:bg-[var(--brand-gold-light)] hover:text-[var(--brand-deep-green)]"
                >
                  Request Buyer Sample
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.06)] p-6 backdrop-blur-sm">
              <div className="overflow-hidden rounded-lg bg-black/20">
                <img
                  src={redChilliImage}
                  alt="Export-grade Indian red chillies (Teja, Bird's Eye, King Chilli) supplied by JM Masala"
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
                  <span className="text-[var(--brand-gold-light)]">Key Varieties</span>
                  <p className="mt-1 font-semibold text-white">Teja · Bird's Eye · King</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Scoville Range</span>
                  <p className="mt-1 font-semibold text-white">50k – 1,041,000+ SHU</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Aflatoxin Standard</span>
                  <p className="mt-1 font-semibold text-white">EU / US FDA Compliant</p>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-[rgba(255,255,255,0.65)]">
                Whole, stemless, crushed flakes and cold-ground powder available in bulk FCL.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Red Chilli Products at a Glance (AI Answer Box) */}
      <section className="border-b border-[var(--brand-gold-pale)] bg-white py-10">
        <div className="jm-container">
          <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                  Quick Commercial Summary
                </p>
                <h2 className="text-xl font-bold text-[var(--brand-charcoal)] md:text-2xl">
                  Red Chilli Products at a Glance
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-semibold text-[var(--brand-deep-green)]">
                <Sparkles className="h-3.5 w-3.5" /> Direct Entity Grounding
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {RED_CHILLI_SUMMARY_ROWS.map((item) => (
                <div key={item.label} className="rounded-lg border border-stone-200 bg-white p-4">
                  <span className="text-xs font-medium text-stone-500">{item.label}</span>
                  <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entity Relationship Section */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="jm-section-label">Topical Authority Architecture</p>
              <h2 className="jm-section-heading">
                JM Masala as Your Direct Indian Red Chilli Export Partner
              </h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  India is the undisputed world leader in dry chilli cultivation and exports, producing an exceptional
                  range of pungency and color profiles. Rather than treating all red chillies as a generic commodity,
                  JM Masala operates a structured procurement footprint covering the premier chilli micro-climates:
                </p>
                <p>
                  From the vast agricultural auction floors of <strong>Guntur (Andhra Pradesh)</strong> and{" "}
                  <strong>Warangal (Telangana)</strong> for high-heat commercial Teja chillies, to the Southern hill
                  tracts for aromatic <strong>Bird's Eye chillies</strong>, and the fertile river valleys of{" "}
                  <strong>Assam and Nagaland</strong> for authentic super-hot <strong>King Chillies (Bhut Jolokia)</strong>.
                </p>
                <p>
                  Every consignment is tailored to the exact regulatory limits, capsaicin concentration (SHU), ASTA
                  extractable color, physical cleanliness, and packaging geometry required by international buyers.
                </p>
              </div>
            </div>

            <aside className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">The JM Masala Chilli Entity Structure</h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                How commercial, botanical, and regional relationships connect:
              </p>

              <div className="mt-4 space-y-2.5 text-xs text-[var(--brand-charcoal)]">
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>JM Masala Trading LLP</strong> → Indian Spice Exporter &amp; Processor
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Core Category:</strong> Dried Red Chilli (Capsicum genus)
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Three Dedicated Entities:</strong> Teja (S17) · Bird's Eye (Kanthari) · King Chilli (Bhut Jolokia)
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Procurement Hubs:</strong> Guntur (AP), Warangal (Telangana), Assam &amp; Kerala
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Heat Spectrum:</strong> 50,000 to 1,041,000+ SHU (HPLC Standardized)
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Formats:</strong> Whole Stemmed · 100% Stemless · Crushed Flakes · Fine Powder
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Global Supply:</strong> Bulk 20ft / 40ft FCL to USA, EU, Gulf, UK &amp; East Asia
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Indian Red Chilli Varieties Supplied by JM Masala */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Distinct Product Entities</p>
            <h2 className="jm-section-heading">Indian Red Chilli Varieties Supplied by JM Masala</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              We supply three verified, distinct chilli varieties with dedicated grading, heat calibration, and
              packaging protocols. Explore each product's full technical profile:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {CHILLI_VARIETIES.map((variety) => (
              <article key={variety.name} className="jm-surface-card flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-bold text-[var(--brand-deep-green)]">
                      {variety.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[var(--brand-charcoal)]">{variety.name}</h3>
                  <p className="mt-1 text-xs font-medium italic text-[var(--brand-forest)]">{variety.botanical}</p>

                  <div className="mt-4 space-y-2 rounded-lg bg-stone-50 p-3 text-xs text-[var(--brand-charcoal)]">
                    <p>
                      <strong>Heat (SHU):</strong> {variety.heat}
                    </p>
                    <p>
                      <strong>Color (ASTA):</strong> {variety.color}
                    </p>
                    <p>
                      <strong>Pod Length:</strong> {variety.length}
                    </p>
                    <p>
                      <strong>Origin:</strong> {variety.origin}
                    </p>
                    <p>
                      <strong>Available In:</strong> {variety.formats}
                    </p>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-[var(--brand-forest)]">{variety.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200">
                  <Link
                    to={variety.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-deep-green)] hover:text-[var(--brand-gold)]"
                  >
                    View Dedicated {variety.name} Page <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Chilli Heat & Scoville (SHU) Specifications */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Heat Standardization</p>
            <h2 className="jm-section-heading">Chilli Heat Specifications &amp; Scoville Scale (SHU)</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              For commercial buyers and food manufacturers, capsaicin concentration determines functional flavor impact,
              dilution ratios, and recipe consistency. We measure heat using High-Performance Liquid Chromatography
              (HPLC) in accordance with ASTA Method 21.3 / ISO 3513:
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--brand-gold-pale)] bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--brand-gold-pale)] bg-stone-50 text-xs font-semibold uppercase tracking-wider text-[var(--brand-charcoal)]">
                    <th className="px-6 py-4">Chilli Variety</th>
                    <th className="px-6 py-4">Botanical Species</th>
                    <th className="px-6 py-4">Scoville Heat Units (SHU)</th>
                    <th className="px-6 py-4">Heat Classification</th>
                    <th className="px-6 py-4">Primary Commercial Applications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--brand-gold-pale)]">
                  {CHILLI_HEAT_COMPARISON.map((row) => (
                    <tr key={row.variety} className="hover:bg-[var(--brand-cream)]/40">
                      <td className="whitespace-nowrap px-6 py-4 font-bold text-[var(--brand-charcoal)]">
                        {row.variety}
                      </td>
                      <td className="px-6 py-4 text-xs italic text-stone-600">{row.species}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-semibold text-[var(--brand-deep-green)]">
                        <span className="inline-flex items-center gap-1">
                          <Flame className="h-3.5 w-3.5 text-red-600" /> {row.scovilleRange}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-[var(--brand-charcoal)]">
                        {row.heatClassification}
                      </td>
                      <td className="px-6 py-4 text-xs text-[var(--brand-forest)]">{row.primaryUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/60 px-6 py-3 text-xs text-[var(--brand-forest)]">
              <strong>Technical Quality Note: </strong>SHU values represent natural botanical ranges verified on lot
              COAs. Batch-specific HPLC test certificates from NABL accredited laboratories are provided prior to shipment.
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section id="specifications" className="jm-section jm-section--cream scroll-mt-12">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Technical Parameters</p>
            <h2 className="jm-section-heading">Red Chilli Commercial Export Specifications</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala supplies whole and stemless dried red chillies against verifiable physical, chemical, and
              microbiological standards:
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--brand-gold-pale)] bg-white shadow-sm">
            <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-6 py-4">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
                JM Masala Export Standard Specifications: Indian Dried Red Chilli
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--brand-gold-pale)] bg-stone-50 text-xs font-semibold uppercase tracking-wider text-[var(--brand-charcoal)]">
                    <th className="px-6 py-3.5">Parameter</th>
                    <th className="px-6 py-3.5">JM Masala Export Specification</th>
                    <th className="px-6 py-3.5">Testing Method / Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--brand-gold-pale)]">
                  {CHILLI_SPEC_ROWS.map((row) => (
                    <tr key={row.label} className="hover:bg-[var(--brand-cream)]/40">
                      <td className="whitespace-nowrap px-6 py-3.5 font-semibold text-[var(--brand-charcoal)]">
                        {row.label}
                      </td>
                      <td className="px-6 py-3.5 text-[var(--brand-forest)]">{row.value}</td>
                      <td className="px-6 py-3.5 text-xs text-stone-500">{row.testMethod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/60 px-6 py-4 text-xs leading-relaxed text-[var(--brand-forest)]">
              <strong className="text-[var(--brand-charcoal)]">Destination Compliance Assurance: </strong>Consignments
              destined for the European Union, United States (FDA), United Kingdom, and the Gulf are tested for
              multi-residue pesticides, heavy metals (Lead, Cadmium), Aflatoxin, and Ochratoxin A prior to ocean dispatch.
            </div>
          </div>
        </div>
      </section>

      {/* Available Supply Formats */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Product Forms</p>
            <h2 className="jm-section-heading">Whole, Stemless, Crushed &amp; Powder Formats</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              We process and pack chillies according to buyer operational preferences—from whole stemmed pods to
              custom-meshed cold-ground spice powders:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHILLI_FORMATS.map((format) => (
              <div key={format.title} className="rounded-xl border border-stone-200 bg-[var(--brand-cream)] p-5">
                <Layers className="h-6 w-6 text-[var(--brand-deep-green)]" />
                <h3 className="mt-3 text-base font-bold text-[var(--brand-charcoal)]">{format.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">{format.description}</p>
                <div className="mt-4 border-t border-stone-300/60 pt-3 text-xs font-semibold text-[var(--brand-charcoal)]">
                  <span>Packing: </span>
                  <span className="font-normal text-stone-600">{format.packing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality, Aflatoxin & Sudan Dye Testing */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="jm-section-label">Laboratory Rigor</p>
              <h2 className="jm-section-heading">Aflatoxin, Sudan Dye &amp; Food Safety Standards</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Because red chillies are cultivated in warm tropical climates and traditionally sun-dried on open
                  concrete yards, international importers face critical regulatory risks regarding mycotoxins
                  (Aflatoxin &amp; Ochratoxin A) and illegal synthetic adulterants (Sudan dyes).
                </p>
                <p>
                  JM Masala enforces strict quality assurance protocols to mitigate these risks:
                </p>
                <ul className="space-y-2 text-xs text-[var(--brand-charcoal)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-deep-green)]" />
                    <span>
                      <strong>Aflatoxin B1 &amp; Total Screening: </strong>Pre-shipment HPLC analysis ensuring B1 &lt;5 ppb
                      and Total &lt;10 ppb for European Union compliance, or &lt;20 ppb for USA FDA compliance.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-deep-green)]" />
                    <span>
                      <strong>Sudan Dyes I to IV Negative: </strong>Every batch is screened via high-resolution HPLC-DAD to
                      guarantee absolute freedom from synthetic coloring chemicals.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-deep-green)]" />
                    <span>
                      <strong>Microbiological Control: </strong>Steam sterilization or gamma irradiation treatment is
                      available for food manufacturer contracts requiring zero Salmonella and low TVC counts.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--brand-gold-pale)] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">Export Compliance Documentation Package</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Every consignment leaves Indian ports with complete statutory and commercial certification:
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                {DOCUMENTATION_PACKAGE.map((doc) => (
                  <div key={doc} className="rounded-lg border border-stone-200 bg-[var(--brand-cream)] p-3">
                    <FileCheck2 className="h-4 w-4 text-[var(--brand-gold)]" />
                    <p className="mt-2 font-bold text-[var(--brand-charcoal)]">{doc}</p>
                    <p className="mt-1 text-[11px] text-stone-600">Standard statutory export clearance</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Flow */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Traceable Sourcing</p>
            <h2 className="jm-section-heading">From Indian Mandis to Global Ocean Freight</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Our end-to-end supply chain ensures physical cleanliness, stem integrity, and zero moisture degradation:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CHILLI_SUPPLY_CHAIN_STEPS.map((s) => (
              <div key={s.step} className="rounded-xl border border-stone-200 bg-[var(--brand-cream)] p-5">
                <span className="text-xs font-extrabold text-[var(--brand-gold)]">{s.step}</span>
                <h3 className="mt-2 text-sm font-bold text-[var(--brand-charcoal)]">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & Container Stuffing Guide */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="jm-section-label">Logistics Optimization</p>
              <h2 className="jm-section-heading">Packaging Formats &amp; Container Loading Capacity</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Dried whole red chillies are naturally voluminous with low bulk density. Selecting the appropriate
                  packaging and loading format is essential for maximizing freight efficiency:
                </p>
                <div className="space-y-3 text-xs text-[var(--brand-charcoal)]">
                  <div className="rounded-lg border border-stone-200 bg-white p-4">
                    <p className="font-bold text-[var(--brand-deep-green)]">Standard Export Bag Packing (PP / Jute):</p>
                    <p className="mt-1 text-stone-600">
                      10 kg, 20 kg, or 25 kg new bags loose-stuffed in ocean containers.
                    </p>
                    <p className="mt-1 font-semibold">
                      • 20ft FCL: ~6.5 to 7.5 Metric Tons | • 40ft HC: ~14.0 to 16.0 Metric Tons
                    </p>
                  </div>
                  <div className="rounded-lg border border-stone-200 bg-white p-4">
                    <p className="font-bold text-[var(--brand-deep-green)]">Hydraulic Pressed Bulk Bales:</p>
                    <p className="mt-1 text-stone-600">
                      High-density compressed bales wrapped in clean woven fabric. Almost doubles container tonnage!
                    </p>
                    <p className="mt-1 font-semibold">
                      • 20ft FCL: ~11.0 Metric Tons | • 40ft HC: ~22.0 to 24.0 Metric Tons
                    </p>
                  </div>
                  <div className="rounded-lg border border-stone-200 bg-white p-4">
                    <p className="font-bold text-[var(--brand-deep-green)]">Corrugated Export Cartons (Stemless / King Chilli):</p>
                    <p className="mt-1 text-stone-600">
                      10 kg or 20 kg heavy-duty 5-ply cartons protecting delicate pods against crushing during handling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--brand-charcoal)]">Request an Export Proforma Invoice</h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                Our export desk provides competitive CIF and FOB quotations based on current Indian mandi auctions:
              </p>

              <div className="mt-6 space-y-3 text-xs">
                <div className="flex items-center gap-2 rounded bg-stone-50 p-2.5">
                  <PackageCheck className="h-4 w-4 text-[var(--brand-deep-green)]" />
                  <span><strong>Loading Ports: </strong>Chennai Port, Nhava Sheva (JNPT), Mundra Port</span>
                </div>
                <div className="flex items-center gap-2 rounded bg-stone-50 p-2.5">
                  <Scale className="h-4 w-4 text-[var(--brand-deep-green)]" />
                  <span><strong>Minimum Order Quantity: </strong>1x 20ft FCL (~6.5 to 7.5 MT)</span>
                </div>
                <div className="flex items-center gap-2 rounded bg-stone-50 p-2.5">
                  <ShieldCheck className="h-4 w-4 text-[var(--brand-deep-green)]" />
                  <span><strong>Payment Terms: </strong>Letter of Credit (L/C) at sight / T/T advance</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="jm-btn jm-btn--primary flex-1 text-center"
                >
                  WhatsApp Export Desk
                </a>
                <Link to="/contact?intent=quote" className="jm-btn jm-btn--outline flex-1 text-center">
                  Submit Official RFP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Buyer Guidance &amp; Clarifications</p>
            <h2 className="jm-section-heading">Frequently Asked Questions: Buying Indian Red Chilli</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Authoritative answers to commercial, technical, and regulatory questions from international spice importers:
            </p>
          </div>

          <div className="mt-8 divide-y divide-[var(--brand-gold-pale)] rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/40 p-6">
            {CHILLI_FAQS.map((faq) => (
              <article key={faq.question} className="py-5 first:pt-0 last:pb-0">
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">{faq.question}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Callout */}
      <section className="bg-[var(--brand-deep-green)] py-14 text-white">
        <div className="jm-container text-center">
          <h2 className="font-[var(--font-display)] text-2xl md:text-4xl">
            Source Verified Indian Red Chillies from JM Masala
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[rgba(255,255,255,0.85)] md:text-base">
            Whether your procurement requires high-pungency Teja chillies, intense Bird's Eye pods, or super-hot King
            Chillies, JM Masala provides standardized ASTA color, HPLC heat verification, and low-aflatoxin export lots.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={quoteUrl} target="_blank" rel="noreferrer" className="jm-btn jm-btn--primary">
              Contact Export Desk (+91 91067 66041)
            </a>
            <Link
              to="/contact?intent=quote"
              className="jm-btn jm-btn--outline border-white text-white hover:bg-white hover:text-[var(--brand-deep-green)]"
            >
              Request Custom Proforma Invoice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RedChilliPage;
