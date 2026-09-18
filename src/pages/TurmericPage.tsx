import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Layers,
  MapPin,
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
import turmericImage from "@/assets/Turmeric.png";

const TURMERIC_SUMMARY_ROWS = [
  { label: "Product & Variety", value: "Turmeric / Haldi (Curcuma longa)" },
  { label: "Common Indian Names", value: "Haldi (હળદર / हल्दी / పసుపు / மஞ்சள்)" },
  { label: "Available Forms", value: "Turmeric Fingers (Polished/Unpolished) · Turmeric Bulbs (Gatha) · Turmeric Powder" },
  { label: "ITC-HS Codes", value: "0910 30 20 (Fingers) · 0910 30 10 (Bulbs) · 0910 30 30 (Cold-Ground Powder)" },
  { label: "Primary Origins", value: "Telangana (Nizamabad), Andhra Pradesh, Tamil Nadu (Salem/Erode), India" },
  { label: "Curcumin Content", value: "2.0% to 5.0%+ (HPLC standardized by commercial grade)" },
  { label: "Moisture Content", value: "Maximum 10.0% (target 8.5% to 9.5%)" },
  { label: "Visual Color", value: "Lustrous golden yellow to deep reddish-orange interior" },
  { label: "Processing Standard", value: "Machine cleaned, destoned, boiled, sun-cured & rotary polished" },
  { label: "Adulteration Safeguards", value: "Lead Chromate NIL · Synthetic Sudan Dyes Negative · Heavy metals tested" },
  { label: "Testing Documentation", value: "NABL accredited third-party Laboratory Certificate of Analysis (COA)" },
  { label: "Container Loading", value: "20ft FCL: 16.0–18.0 MT | 40ft FCL: 26.0–27.0 MT (in 25/50 kg export bags)" },
];

const CURCUMIN_GRADES = [
  {
    grade: "High-Curcumin Extraction Grade",
    curcumin: "4.5% to 5.5%+ Curcumin",
    badge: "Nutraceutical & Oleoresin",
    origin: "Selected Telangana & South Indian tracts",
    description:
      "Deep orange-red core with maximum diferuloylmethane concentration. The benchmark choice for international pharmaceutical extractors, dietary supplement brands, and standardized curcuminoid isolate processors.",
  },
  {
    grade: "Premium Salem / Nizamabad Fingers",
    curcumin: "3.2% to 4.2% Curcumin",
    badge: "Grinding & Food Processing",
    origin: "Nizamabad (Telangana) & Salem (Tamil Nadu)",
    description:
      "Uniform elongated fingers with smooth, double-polished bright golden skins and a crisp physical snap. Exceptional flavor depth and rich natural yellow coloring for commercial curry powder manufacturers.",
  },
  {
    grade: "Commercial Whole Finger & Bulb (FAQ)",
    curcumin: "2.2% to 3.0% Curcumin",
    badge: "Culinary & Bulk Repacking",
    origin: "Telangana & regional mandis",
    description:
      "Sturdy whole fingers and round bulbous mother rhizomes (gatha). High bulk density and consistent essential oil aroma, ideal for large-scale institutional milling, consumer repacking, and culinary seasonings.",
  },
];

const TURMERIC_PRODUCTS = [
  {
    title: "Turmeric Fingers (Polished & Unpolished)",
    description:
      "Cylindrical secondary rhizomes (2.5 cm to 7.0 cm length) sorted into unpolished, single polished, and double polished grades. Double polishing strips the outer matte skin in rotary drums, yielding an immaculate golden sheen.",
    applications: "Whole retail packaging, whole spice culinary use, commercial spice milling, and oleoresin extraction.",
    packing: "25kg / 50kg PP bags with inner liner, or traditional new jute bags.",
  },
  {
    title: "Turmeric Bulbs (Gatha / Mother Rhizomes)",
    description:
      "Pear-shaped, high-density central mother rhizomes. Possess dense starch structure and high volatile turmerone oil content, offering exceptional grinding economy and cost-effective curcumin yield.",
    applications: "Industrial curry blending, coarse milling, institutional food catering, and bulk extraction.",
    packing: "25kg / 50kg export bags or bulk container liners.",
  },
  {
    title: "Pure Cold-Ground Turmeric Powder",
    description:
      "Finely pulverized from 100% genuine whole turmeric fingers using low-temperature hammer mills to preserve volatile aroma and prevent color burning. Available in 60 to 100 mesh particle fineness.",
    applications: "Bakery, ready-to-eat seasonings, sauces, mustard conditioning, golden milk lattes, and retail jars.",
    packing: "25kg multi-wall Kraft paper sacks with PE liner or custom private label retail pouches.",
  },
];

const TURMERIC_SPECS = [
  { label: "Product Name", value: "Turmeric Fingers / Turmeric Bulbs / Turmeric Powder", testMethod: "Commercial Standard" },
  { label: "Common Indian Name", value: "Haldi (હળદર / हल्दी)", testMethod: "Regional Trade Identity" },
  { label: "Botanical Name", value: "Curcuma longa L. (Family: Zingiberaceae)", testMethod: "Taxonomic Verification" },
  { label: "ITC-HS Code", value: "0910 30 20 (Fingers) · 0910 30 30 (Powder)", testMethod: "Customs Tariff Classification" },
  { label: "Origin", value: "Telangana (Nizamabad) & South India", testMethod: "Certificate of Origin (COO)" },
  { label: "Curcumin Content (w/w)", value: "2.0% to 5.0%+ (Standardized per contract specification)", testMethod: "HPLC / ASTA Method 18.0" },
  { label: "Moisture Content", value: "Maximum 10.0% (target 8.5% to 9.5%)", testMethod: "ASTA 2.0 / ISO 939" },
  { label: "Volatile Essential Oil", value: "3.0% to 5.0% v/w (rich in turmerone and curlone)", testMethod: "ISO 6571 Steam Distillation" },
  { label: "Foreign Matter (Admixture)", value: "Maximum 0.5% (Sortex) / Maximum 1.0% (Standard)", testMethod: "Manual & Gravimetric Sieve" },
  { label: "Defective / Broken Fingers", value: "Maximum 2.0% to 3.0%", testMethod: "Visual & Physical Grading" },
  { label: "Total Ash", value: "Maximum 7.0% (on dry basis)", testMethod: "ISO 928 / ASTA 3.0" },
  { label: "Acid Insoluble Ash", value: "Maximum 1.0%", testMethod: "ISO 930" },
  { label: "Lead Chromate Adulteration", value: "NIL / Negative (Absolute zero tolerance)", testMethod: "Chemical & Spectrophotometric Test" },
  { label: "Synthetic Dyes (Sudan, Metanil)", value: "Absent / Negative (<10 ppb detection limit)", testMethod: "HPLC-DAD / LC-MS/MS" },
  { label: "Heavy Metals (Lead, Cadmium)", value: "Compliant with EU MRLs and US FDA limits", testMethod: "ICP-MS" },
  { label: "Salmonella", value: "Absent in 25 grams", testMethod: "ISO 6579 / FDA BAM" },
  { label: "E. Coli", value: "Less than 10 CFU/g", testMethod: "ISO 16649-2" },
  { label: "Shelf Life", value: "18 to 24 months under cool, dry warehouse conditions", testMethod: "Packaging Integrity" },
];

const TURMERIC_SUPPLY_CHAIN_STEPS = [
  {
    step: "01",
    title: "Telangana Mandi Origin Procurement",
    description:
      "Direct farm-gate and APMC mandi sourcing across Nizamabad and contiguous Telangana turmeric valleys during the peak February to April harvest window.",
  },
  {
    step: "02",
    title: "Arrival Inspection & Curcumin Spot-Testing",
    description:
      "Every raw lot undergoes physical inspection for core moisture (<10%), absence of insect boring, finger length uniformity, and initial HPLC curcumin screening.",
  },
  {
    step: "03",
    title: "Dry Destoning & Mechanical Sieve Cleaning",
    description:
      "Vibratory deck screeners and high-density gravity separators remove clay pellets, field stones, dried rootlets, and foreign botanical matter.",
  },
  {
    step: "04",
    title: "Rotary Drum Polishing",
    description:
      "Rhizomes are buffed in specialized rotary polishing drums. Single polishing leaves a natural matte surface; double polishing removes rough root skin to reveal a radiant golden exterior.",
  },
  {
    step: "05",
    title: "Manual Sorting & Size Classification",
    description:
      "Experienced graders hand-inspect polished fingers to separate bold fingers from bulbs (gatha) and eliminate split, hollow, or under-cured rhizomes.",
  },
  {
    step: "06",
    title: "Lead Chromate & Chemical Purity Testing",
    description:
      "Composite samples are analyzed by NABL accredited testing laboratories to guarantee zero lead chromate, zero synthetic dyes, and full compliance with destination MRLs.",
  },
  {
    step: "07",
    title: "Cold Milling (Where Applicable)",
    description:
      "For powder contracts, fingers are cold-pulverized in water-cooled stainless steel hammer mills to prevent thermal degradation of active curcumin and essential oils.",
  },
  {
    step: "08",
    title: "Export Bagging & Ocean Container Stuffing",
    description:
      "Stuffed into clean 25kg/50kg PP bags with food-grade inner liners or Kraft paper sacks, loaded in 20ft (16–18 MT) or 40ft (26–27 MT) FCL for global export.",
  },
];

const TURMERIC_FAQS = [
  {
    question: "What is turmeric called in India?",
    answer:
      "Turmeric is universally known as Haldi (हल्दी in Hindi, હળદર in Gujarati, పసుపు in Telugu, and மஞ்சள் in Tamil). It is one of India's most ancient, revered culinary spices and Ayurvedic botanical staples.",
  },
  {
    question: "What is the botanical name of turmeric?",
    answer:
      "The botanical name of commercial turmeric is Curcuma longa L., a perennial rhizomatous herb belonging to the ginger family (Zingiberaceae).",
  },
  {
    question: "Is haldi the same as turmeric?",
    answer:
      "Yes. Haldi is the indigenous Hindi/Sanskrit name for turmeric (Curcuma longa). The terms are commercially interchangeable in export trade.",
  },
  {
    question: "What types of turmeric does JM Masala supply?",
    answer:
      "JM Masala supplies whole Turmeric Fingers (single and double polished), Turmeric Bulbs (round mother rhizomes / Gatha), and micro-milled pure Turmeric Powder.",
  },
  {
    question: "What is the curcumin content of JM Masala turmeric?",
    answer:
      "Our turmeric lots are graded and certified by HPLC according to buyer requirements: standard culinary grades test at 2.0% to 3.0% curcumin, prime Salem/Nizamabad fingers deliver 3.2% to 4.2% curcumin, and high-curcumin extraction grades achieve 4.5% to 5.5%+ curcumin.",
  },
  {
    question: "Where does JM Masala source its turmeric?",
    answer:
      "We source turmeric directly from the prominent agricultural auction yards of Nizamabad (Telangana)—one of Asia's largest turmeric trading hubs—as well as specialized growing belts in Tamil Nadu (Salem, Erode) and South India.",
  },
  {
    question: "What is the moisture specification for export turmeric?",
    answer:
      "Our export turmeric fingers and powder are strictly moisture-controlled to a maximum of 10.0% (with typical export lots testing between 8.5% and 9.5%) to prevent mould formation during ocean transit.",
  },
  {
    question: "What is the difference between single polished and double polished turmeric fingers?",
    answer:
      "Single polished fingers have the outer rough surface cleaned while retaining a light natural matte coat and intact essential oils. Double polished fingers undergo extended drum buffing, creating an exceptionally smooth, uniform, bright golden-yellow exterior preferred for whole retail presentation.",
  },
  {
    question: "Are JM Masala turmeric products tested for lead chromate?",
    answer:
      "Yes. We maintain a zero-tolerance policy against adulteration. All export shipments are certified lead-chromate-free and screened for synthetic azo dyes (Sudan I–IV, Metanil Yellow) by accredited NABL laboratories.",
  },
  {
    question: "Does JM Masala provide a Certificate of Analysis (COA) with turmeric shipments?",
    answer:
      "Yes. Every export consignment is accompanied by an official COA issued by an accredited NABL testing laboratory detailing curcumin percentage, moisture, total ash, acid-insoluble ash, heavy metals, and microbiological criteria.",
  },
  {
    question: "What packaging options are available for bulk turmeric export?",
    answer:
      "We package whole turmeric fingers and bulbs in 25 kg and 50 kg new PP woven bags with inner poly liners or traditional new jute bags. For turmeric powder, we provide 25 kg multi-wall Kraft paper sacks with PE inner liners, as well as customized private label retail stand-up pouches and PET jars.",
  },
  {
    question: "How many metric tons of turmeric fit into an ocean container?",
    answer:
      "A 20ft FCL accommodates approximately 16.0 to 18.0 Metric Tons of whole turmeric fingers in loose-stuffed bags. A 40ft FCL carries 26.0 to 27.0 Metric Tons.",
  },
  {
    question: "Can international buyers request turmeric samples before ordering?",
    answer:
      "Yes. We dispatch representative export samples of turmeric fingers, bulbs, or powder via international express courier accompanied by preliminary specification sheets and HPLC lab test reports for buyer evaluation.",
  },
  {
    question: "How can I buy bulk turmeric from India or request a quotation?",
    answer:
      "You can submit an inquiry via our website contact form or message our export desk directly on WhatsApp (+91 91067 66041). Specify your required format (finger, bulb, or powder), polishing grade, target curcumin percentage, packaging format, and destination seaport for an immediate FOB or CIF quotation.",
  },
];

const TurmericPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Indian Turmeric (Haldi Fingers & Powder Bulk Export)",
      "1x 20ft FCL (~16-18 MT)",
    ),
  );

  const canonicalUrl = `${SITE_URL}/turmeric-exporter-india`;
  const productImageUrl = `${SITE_URL}${turmericImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: "Indian Turmeric Fingers & Powder (Haldi)",
    description:
      "Export-grade Indian turmeric supplied by JM Masala. Polished whole turmeric fingers and cold-ground turmeric powder with 2.0% to 5.0%+ curcumin, max 10% moisture, zero lead chromate, and NABL laboratory certification.",
    image: [productImageUrl],
    sku: "JMM-TURMERIC-WHOLE",
    mpn: "JMM-turmeric-whole",
    brand: {
      "@type": "Brand",
      name: COMPANY.name,
      slogan: COMPANY.tagline,
    },
    category: "Food, Beverages & Tobacco > Food Items > Seasonings & Spices > Turmeric",
    countryOfOrigin: {
      "@type": "Country",
      name: "India",
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    url: canonicalUrl,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Botanical Name", value: "Curcuma longa" },
      { "@type": "PropertyValue", name: "Common Names", value: "Haldi / Turmeric Fingers / Turmeric Powder" },
      { "@type": "PropertyValue", name: "Curcumin Content", value: "2.0% to 5.0%+ (HPLC standardized)" },
      { "@type": "PropertyValue", name: "Moisture", value: "Maximum 10.0%" },
      { "@type": "PropertyValue", name: "Origin", value: "Telangana (Nizamabad), India" },
      { "@type": "PropertyValue", name: "Lead Chromate", value: "NIL / Negative" },
      { "@type": "PropertyValue", name: "Forms", value: "Fingers (single/double polished), Bulbs (Gatha), Powder" },
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
        name: "Turmeric",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: TURMERIC_FAQS.map((faq) => ({
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
        title="Turmeric Exporter from India | Haldi, Fingers & Powder | JM Masala"
        description="JM Masala supplies Indian turmeric and haldi for bulk buyers, importers and food manufacturers. Turmeric fingers and powder available with specifications, samples and export quotations."
        path="/turmeric-exporter-india"
        imageUrl={productImageUrl}
        imageAlt="Export-grade Indian turmeric fingers and powder supplied by JM Masala"
        type="product"
        keywords={[
          "turmeric exporter india",
          "turmeric supplier india",
          "indian turmeric supplier",
          "turmeric wholesale india",
          "bulk turmeric supplier",
          "haldi exporter india",
          "turmeric fingers exporter india",
          "turmeric powder exporter india",
          "high curcumin turmeric supplier",
          "nizamabad turmeric exporter",
          "indian haldi wholesale",
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
              Turmeric Exporter from India
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-[var(--brand-deep-green)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3d2b08] via-[#1f1704] to-[#0d0a02] opacity-95" />
        <div className="jm-container relative py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold-light)]">
                <MapPin className="h-3.5 w-3.5" /> Telangana &amp; South India Sourcing Hubs
              </p>
              <h1 className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-white md:text-5xl">
                Turmeric Exporter from India
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--brand-gold-light)] md:text-xl">
                Indian Haldi | Turmeric Fingers &amp; Powder | Bulk Export Supply
              </p>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[rgba(255,255,255,0.9)]">
                <p>
                  JM Masala supplies turmeric from India for international importers, spice distributors, food
                  manufacturers and bulk buyers. Our turmeric offering includes whole turmeric fingers and turmeric
                  powder according to buyer requirements for curcumin content, moisture, colour, cleanliness,
                  processing and packaging. Buyers can request product specifications, samples, laboratory
                  documentation and export quotations.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="jm-btn jm-btn--primary inline-flex items-center gap-2"
                >
                  Request Turmeric Quotation <ArrowRight className="h-4 w-4" />
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
                  src={turmericImage}
                  alt="Export-grade Indian turmeric fingers and powder supplied by JM Masala"
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
                  <span className="text-[var(--brand-gold-light)]">Curcumin Bands</span>
                  <p className="mt-1 font-semibold text-white">2.0% to 5.0%+ (HPLC)</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Lead Chromate</span>
                  <p className="mt-1 font-semibold text-white">NIL / Zero Adulteration</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Moisture Limit</span>
                  <p className="mt-1 font-semibold text-white">Maximum 10.0%</p>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-[rgba(255,255,255,0.65)]">
                Whole polished fingers, bulbs (gatha), and micro-pulverized powder available in bulk FCL.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Turmeric at a Glance (AI Answer Box) */}
      <section className="border-b border-[var(--brand-gold-pale)] bg-white py-10">
        <div className="jm-container">
          <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                  Quick Commercial Summary
                </p>
                <h2 className="text-xl font-bold text-[var(--brand-charcoal)] md:text-2xl">
                  Turmeric at a Glance
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-semibold text-[var(--brand-deep-green)]">
                <Sparkles className="h-3.5 w-3.5" /> Direct Entity Grounding
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TURMERIC_SUMMARY_ROWS.map((item) => (
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
                JM Masala as Your Direct Indian Turmeric Export Partner
              </h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  India produces over 75% of the world's commercial turmeric, celebrated globally for its high active
                  curcumin concentration, intense golden-orange pigmentation, and potent volatile essential oils.
                </p>
                <p>
                  JM Masala operates a structured procurement and processing bridge linking primary agricultural
                  mandis in <strong>Telangana (Nizamabad)</strong> and <strong>South India (Salem / Erode)</strong> directly
                  with international food manufacturers, spice importers, and nutraceutical extractors.
                </p>
                <p>
                  Every consignment is strictly audited for physical cleanliness, uniform finger size, calibrated
                  curcumin percentage, low moisture, and verified absence of lead chromate or synthetic dyes through
                  accredited third-party laboratory analysis.
                </p>
              </div>
            </div>

            <aside className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">The JM Masala Turmeric Entity Structure</h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                How commercial, botanical, and regional relationships connect:
              </p>

              <div className="mt-4 space-y-2.5 text-xs text-[var(--brand-charcoal)]">
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>JM Masala Trading LLP</strong> → Indian Spice Exporter &amp; Processor
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Botanical Identity:</strong> Curcuma longa (Haldi)
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Key Growing Tracts:</strong> Telangana (Nizamabad), Andhra Pradesh &amp; South India
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Curcumin Concentration:</strong> 2.0% to 5.0%+ (HPLC Certified)
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Commercial Forms:</strong> Polished Fingers · Bulbs (Gatha) · Pure Powder
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Purity Standard:</strong> Zero Lead Chromate · Zero Sudan Dyes · Low Moisture (&lt;10%)
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Global Supply:</strong> Bulk 20ft &amp; 40ft FCL to USA, Europe, Gulf, UK &amp; East Asia
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Curcumin Content: What Importers Should Know */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Active Bio-Marker</p>
            <h2 className="jm-section-heading">Turmeric Curcumin Content: What Importers Should Know</h2>
            <div className="mt-4 space-y-3 text-body leading-7 text-[var(--brand-forest)]">
              <p>
                <strong>Curcumin</strong> (diferuloylmethane) is the primary bioactive polyphenol responsible for
                turmeric's signature deep golden color and documented antioxidant, anti-inflammatory, and therapeutic
                properties.
              </p>
              <p>
                In international trade, curcumin content is the single most critical pricing and quality determinant.
                We quantify curcumin using High-Performance Liquid Chromatography (HPLC) in accordance with ASTA Method
                18.0 / ISO 5566, offering three calibrated commercial bands:
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {CURCUMIN_GRADES.map((item) => (
              <article key={item.grade} className="jm-surface-card flex flex-col justify-between p-6">
                <div>
                  <span className="rounded bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-bold text-[var(--brand-deep-green)]">
                    {item.badge}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[var(--brand-charcoal)]">{item.grade}</h3>
                  <p className="mt-2 text-sm font-extrabold text-[var(--brand-deep-green)]">{item.curcumin}</p>
                  <p className="mt-1 text-xs text-stone-500">Origin: {item.origin}</p>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--brand-forest)]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Turmeric Products Supplied by JM Masala */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Commercial Formats</p>
            <h2 className="jm-section-heading">Turmeric Products Supplied by JM Masala</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              We process and export three distinct commercial formats to accommodate diverse industrial and retail
              requirements:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TURMERIC_PRODUCTS.map((prod) => (
              <div key={prod.title} className="rounded-xl border border-stone-200 bg-[var(--brand-cream)] p-6">
                <Layers className="h-6 w-6 text-[var(--brand-deep-green)]" />
                <h3 className="mt-4 text-lg font-bold text-[var(--brand-charcoal)]">{prod.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">{prod.description}</p>
                <div className="mt-4 rounded bg-white p-3 text-xs text-[var(--brand-charcoal)] border border-stone-200">
                  <p><strong>Primary Applications:</strong> {prod.applications}</p>
                  <p className="mt-1"><strong>Export Packing:</strong> {prod.packing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turmeric from Telangana & India Section */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="jm-section-label">Geographic Heritage</p>
              <h2 className="jm-section-heading">Indian Turmeric from the Telangana Valley</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  The state of Telangana—and particularly the legendary agricultural market of{" "}
                  <strong>Nizamabad</strong>—forms the vibrant core of India's turmeric economy.
                </p>
                <p>
                  Nizamabad's fertile red alluvial soils, high ambient humidity during the monsoon growing phase, and
                  intense dry solar heat during the winter-spring harvest provide the ideal environment for rhizome
                  maturation, thick finger formation, and natural curcumin synthesis.
                </p>
                <p>
                  Traditional post-harvest curing—involving boiling in water to gelatinize starches followed by complete
                  solar drying down to &lt;10% moisture—produces a hard, fracture-resistant core with deep golden yellow
                  permeation and natural pest resistance.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--brand-charcoal)]">The JM Masala Quality Commitment</h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                Commercial and technical guarantees for every export shipment:
              </p>

              <div className="mt-5 space-y-3 text-xs">
                <div className="flex items-start gap-3 rounded bg-stone-50 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-deep-green)]" />
                  <div>
                    <strong>100% Zero Lead Chromate: </strong>Strict analytical screening ensures zero synthetic
                    pigment or chemical polishing adulteration.
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded bg-stone-50 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-deep-green)]" />
                  <div>
                    <strong>Moisture Controlled &lt;10%: </strong>Prevents Aspergillus flavus mould proliferation and
                    aflatoxin formation during high-seas container transit.
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded bg-stone-50 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-deep-green)]" />
                  <div>
                    <strong>Certified HPLC Curcumin: </strong>Accredited third-party COA verifies exact curcumin
                    percentage prior to vessel dispatch.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section id="specifications" className="jm-section jm-section--white scroll-mt-12">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Technical Parameters</p>
            <h2 className="jm-section-heading">Turmeric Commercial Export Specifications</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala supplies whole turmeric fingers, bulbs, and powder verified against internationally recognized
              physical, chemical, and microbiological standards:
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--brand-gold-pale)] bg-white shadow-sm">
            <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-6 py-4">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
                JM Masala Export Standard Specifications: Indian Turmeric (Curcuma longa)
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
                  {TURMERIC_SPECS.map((row) => (
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
              <strong className="text-[var(--brand-charcoal)]">International Regulatory Compliance: </strong>Every
              export lot destined for the European Union (EU), United States (US FDA), United Kingdom, Japan, and the Gulf
              (ESMA/SFDA) is tested by NABL accredited third-party laboratories for pesticide MRLs, heavy metals (Lead,
              Cadmium, Arsenic), and microbiological limits prior to loading.
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Flow */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Traceable Processing</p>
            <h2 className="jm-section-heading">From Mandi Auction to Global Ocean Dispatch</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              An 8-step controlled supply chain guaranteeing authentic origin, high curcumin retention, and physical
              cleanliness:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TURMERIC_SUPPLY_CHAIN_STEPS.map((s) => (
              <div key={s.step} className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-extrabold text-[var(--brand-gold)]">{s.step}</span>
                <h3 className="mt-2 text-sm font-bold text-[var(--brand-charcoal)]">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging, Container Loading & Export Documentation */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="jm-section-label">Logistics &amp; Packaging</p>
              <h2 className="jm-section-heading">Container Stuffing &amp; Packaging Options</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Whole turmeric fingers possess high bulk density, providing excellent container payload efficiency:
                </p>
                <div className="space-y-3 text-xs text-[var(--brand-charcoal)]">
                  <div className="rounded-lg border border-stone-200 bg-[var(--brand-cream)] p-4">
                    <p className="font-bold text-[var(--brand-deep-green)]">Whole Turmeric Fingers &amp; Bulbs:</p>
                    <p className="mt-1 text-stone-600">
                      25 kg or 50 kg new PP bags with PE liner, or new heavy-duty jute bags.
                    </p>
                    <p className="mt-1 font-semibold">
                      • 20ft FCL: 16.0 to 18.0 Metric Tons | • 40ft FCL: 26.0 to 27.0 Metric Tons
                    </p>
                  </div>
                  <div className="rounded-lg border border-stone-200 bg-[var(--brand-cream)] p-4">
                    <p className="font-bold text-[var(--brand-deep-green)]">Cold-Ground Turmeric Powder:</p>
                    <p className="mt-1 text-stone-600">
                      25 kg multi-wall Kraft paper sacks with heat-sealed poly liner, or custom retail stand-up pouches.
                    </p>
                    <p className="mt-1 font-semibold">
                      • 20ft FCL: 17.0 to 18.0 Metric Tons | • 40ft FCL: 26.0 Metric Tons
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6">
              <h3 className="text-xl font-bold text-[var(--brand-charcoal)]">Export Clearance Documentation Package</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Consignments are cleared through Indian ports with full statutory and commercial documentation:
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                {DOCUMENTATION_PACKAGE.map((doc) => (
                  <div key={doc} className="rounded-lg border border-stone-200 bg-white p-3">
                    <FileCheck2 className="h-4 w-4 text-[var(--brand-gold)]" />
                    <p className="mt-2 font-bold text-[var(--brand-charcoal)]">{doc}</p>
                    <p className="mt-1 text-[11px] text-stone-600">Verified official clearance document</p>
                  </div>
                ))}
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
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Buyer Guidance &amp; Clarifications</p>
            <h2 className="jm-section-heading">Frequently Asked Questions: Buying Indian Turmeric</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Authoritative commercial and technical answers for global spice importers and food manufacturers:
            </p>
          </div>

          <div className="mt-8 divide-y divide-[var(--brand-gold-pale)] rounded-xl border border-[var(--brand-gold-pale)] bg-white p-6 shadow-sm">
            {TURMERIC_FAQS.map((faq) => (
              <article key={faq.question} className="py-5 first:pt-0 last:pb-0">
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">{faq.question}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Callout */}
      <section className="bg-[var(--brand-deep-green)] py-14 text-white text-center">
        <div className="jm-container">
          <h2 className="font-[var(--font-display)] text-2xl md:text-4xl">
            Source Certified Indian Turmeric from JM Masala
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[rgba(255,255,255,0.85)] md:text-base">
            Whole polished turmeric fingers, bulbs, and cold-ground powder with standardized 2.0%–5.0%+ curcumin,
            zero lead chromate, and complete export laboratory documentation.
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

export default TurmericPage;
