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
import sesameSeedsImage from "@/assets/SesameSeeds.png";

const SESAME_SPEC_ROWS = [
  { label: "Product Name", value: "Sesame Seeds" },
  { label: "Common Indian Name", value: "Til (તલ / तिल)" },
  { label: "Botanical Name", value: "Sesamum indicum L." },
  { label: "ITC-HS Code", value: "1207 40 90 (Sesamum seeds, whether or not broken)" },
  { label: "Origin", value: "Gujarat, India (Saurashtra & Northern Gujarat mandis)" },
  { label: "Available Types", value: "Natural White, Hulled White, Black, and Brown" },
  { label: "Physical Purity", value: "98.0% to 99.5% (Natural) | 99.95% to 99.98% Sortex (Hulled)" },
  { label: "Moisture Content", value: "Max 6.0% to 8.0% (typically 5%-6% on premium Hulled)" },
  { label: "Oil Content", value: "48.0% to 52.0% v/w (rich in unsaturated fatty acids)" },
  { label: "Free Fatty Acids (FFA)", value: "Max 1.5% to 2.0% (as oleic acid)" },
  { label: "Foreign Matter (Admixture)", value: "Max 0.5% (Natural Sortex) down to <0.02% (Hulled Auto Sortex)" },
  { label: "Total Ash", value: "Max 6.0% (Natural) / Max 1.5% (Hulled)" },
  { label: "Acid Insoluble Ash", value: "Max 1.0% (Natural) / Max 0.1% (Hulled)" },
  { label: "Color Profile", value: "Natural creamy white / Pearly white (hulled) / Jet black" },
  { label: "Cleaning Standard", value: "Multi-deck Screening + Destoning + Optical Sortex Grading" },
  { label: "Microbiological Limits", value: "Salmonella: Absent in 25g; E. Coli: <10 CFU/g" },
  { label: "Pesticide & ETO Limits", value: "Compliant with EU, US FDA, GCC, and Codex destination MRLs" },
  { label: "Shelf Life", value: "12 to 18 months under cool, dry warehouse conditions" },
];

const SESAME_MARKET_GRADES = [
  {
    market: "Europe Quality (Sortex Hulled)",
    gradeBadge: "99.95% – 99.98% Sortex",
    purity: "99.95% to 99.98% Purity",
    moisture: "Max 5.0% to 6.0% Moisture",
    admixture: "Max 0.02% to 0.05%",
    description:
      "Mechanically hulled, pearly white seeds with rigorous testing for European Union pesticide MRLs, zero ethylene oxide (ETO), aflatoxins, and strict microbiological compliance for commercial bakeries and confectionery lines.",
  },
  {
    market: "USA Quality (ASTA Hulled & Natural)",
    gradeBadge: "99.95% Hulled / 99.0% ASTA",
    purity: "99.95% Hulled or 99.0% ASTA Natural",
    moisture: "Max 6.0% to 7.0% Moisture",
    admixture: "Max 0.05% (Hulled) / Max 0.5% (Natural)",
    description:
      "Prepared to American Spice Trade Association cleanliness standards. Uniform sizing, steam-treatment compatible, and optimal toasted nutty aroma for burger bun coatings, bread toppings, and specialty snack processing.",
  },
  {
    market: "Middle East / Gulf Quality (Tahini & Halva)",
    gradeBadge: "99.0% – 99.5% Natural White",
    purity: "99.0% to 99.5% Purity",
    moisture: "Max 6.0% to 7.5% Moisture",
    admixture: "Max 0.5% Admixture",
    description:
      "High natural oil content (50%–52%) with low free fatty acids (<1.5%), delivering exceptional emulsification, smooth texture, and rich taste for commercial tahini paste, halva confectioneries, and regional savory items.",
  },
  {
    market: "East Asia & Singapore (Culinary & Black)",
    gradeBadge: "99.0% – 99.5% Sortex Clean",
    purity: "99.0% to 99.5% Purity",
    moisture: "Max 7.0% Moisture",
    admixture: "Max 0.5% Admixture",
    description:
      "Premium Sortex natural white and jet black sesame seeds for Japanese sushi, Korean seasonings, furikake toppings, gourmet dressings, and cold-pressed edible oil milling.",
  },
];

const SESAME_SUPPLY_CHAIN_STEPS = [
  {
    step: "01",
    title: "Gujarat Mandi Procurement",
    description:
      "Procured from primary agricultural trade hubs across Gujarat's Saurashtra belt (Rajkot, Amreli, Junagadh) and Northern Gujarat (Unjha, Mehsana) during fresh autumn and winter harvest arrivals.",
  },
  {
    step: "02",
    title: "Incoming Sampling & Oil Screening",
    description:
      "Arrival lots are sampled for oil content (target 48%-52%), free fatty acids (<2.0%), moisture level (<8%), seed coloration, and foreign admixture prior to warehouse acceptance.",
  },
  {
    step: "03",
    title: "Multi-Deck Mechanical Pre-Cleaning",
    description:
      "Vibratory fine sieves and air-aspiration systems remove straw, pods, dust, chaff, undersized seeds, and light organic debris from the raw sesame flow.",
  },
  {
    step: "04",
    title: "Destoning & Magnetic Separation",
    description:
      "High-density gravity destoners separate gravel, stones, and heavy field dirt matching seed size, while high-intensity rare-earth magnets catch all ferrous particles.",
  },
  {
    step: "05",
    title: "Aqua Dehulling & Hot-Air Drying (Hulled Variant)",
    description:
      "For hulled grades, seeds undergo cold water soaking and gentle mechanical friction to remove the outer husk, followed by washing, centrifugal spin-drying, and sanitary hot-air dehydration.",
  },
  {
    step: "06",
    title: "High-Resolution Sortex Optical Sorting",
    description:
      "Digital tri-chromatic optical sorters inspect each seed individually, using high-speed pneumatic air ejectors to remove brown, discolored, immature, or dark specks to reach up to 99.98% purity.",
  },
  {
    step: "07",
    title: "NABL Laboratory Inspection & COA",
    description:
      "Every production lot is analyzed by accredited laboratories for purity, moisture, oil percentage, free fatty acids, microbiological limits, and destination-specific pesticide residues.",
  },
  {
    step: "08",
    title: "Moisture-Barrier Packing & Port Dispatch",
    description:
      "Finished seeds are packed in food-grade multi-wall Kraft paper bags with PE liners, woven PP bags, or 1 MT jumbo bags and trucked via express highway to Mundra Port or Pipavav Port.",
  },
];

const SESAME_FAQS = [
  {
    question: "Who is a sesame seeds exporter from India?",
    answer:
      "JM Masala is an Indian spice and oilseed exporter supplying natural and hulled sesame seeds for bulk commercial buyers, food manufacturers, and international importers from Gujarat, India. Product specifications, packaging, and export documentation are prepared according to agreed destination standards.",
  },
  {
    question: "What are sesame seeds called in India?",
    answer:
      "In India, sesame seeds are widely called 'Til' in Hindi, Marathi, and Punjabi, 'Tal' in Gujarati, and 'Ellu' in Tamil, Malayalam, and Kannada.",
  },
  {
    question: "What is the botanical name of sesame?",
    answer:
      "The botanical name of sesame is Sesamum indicum L., belonging to the family Pedaliaceae. It is one of the world's oldest cultivated oilseed crops.",
  },
  {
    question: "What types of sesame seeds does JM Masala supply?",
    answer:
      "JM Masala supplies Natural White Sesame Seeds, Mechanically Hulled Sesame Seeds (up to 99.98% Sortex purity), Natural Black Sesame Seeds, and Brown Sesame Seeds for commercial bulk buyers.",
  },
  {
    question: "What is the difference between natural and hulled sesame seeds?",
    answer:
      "Natural sesame retains its outer natural seed coat (bran), providing a slightly nutty flavor and higher calcium content, making it ideal for tahini, oil extraction, and confectionery. Hulled sesame has had its outer skin removed mechanically, resulting in a uniform pearly white appearance preferred for bakery buns, bread crusts, and premium pastries.",
  },
  {
    question: "What purity of sesame seeds is available?",
    answer:
      "JM Masala supplies Natural Sesame Seeds in 98% Machine Cleaned, 99% Sortex, and 99.5% Super Cleaned grades. Hulled Sesame Seeds are supplied in 99.9%, 99.95%, and 99.98% Auto Sortex optical cleanliness grades.",
  },
  {
    question: "What is the moisture specification for JM Masala sesame seeds?",
    answer:
      "Moisture is controlled to maximum 8.0% for natural sesame and typically maximum 5.0% to 6.0% for mechanically hulled sesame, ensuring microbial stability and preventing rancidity during ocean transit.",
  },
  {
    question: "What is the oil content of Indian sesame seeds?",
    answer:
      "Natural white sesame from Gujarat typically tests with high natural oil content between 48.0% and 52.0% v/w, providing excellent commercial extraction yields for cold-pressed sesame oil.",
  },
  {
    question: "Where are JM Masala sesame seeds sourced?",
    answer:
      "JM Masala sources sesame seeds from Gujarat's Saurashtra region (Rajkot, Amreli, Junagadh, Bhavnagar) and Northern Gujarat mandis (Unjha, Mehsana, Patan), India's premier growing tract for high-quality white sesame.",
  },
  {
    question: "Does JM Masala supply bulk sesame seeds internationally?",
    answer:
      "Yes. JM Masala supplies sesame seeds in 20ft FCL (~18.0 to 19.0 Metric Tons) and 40ft FCL (~26.0 to 27.0 Metric Tons) container loads, as well as combined container consignments with cumin, coriander, fennel, and other Indian spices.",
  },
  {
    question: "How are sesame seeds cleaned and sorted?",
    answer:
      "Raw sesame passes through multi-deck vibratory screens, air aspiration, gravity destoning to remove field stones, aqua peeling or dry mechanical dehulling (for hulled varieties), and advanced high-speed digital Sortex optical color sorters that eject dark and off-color seeds.",
  },
  {
    question: "What packaging options are available for sesame seed exports?",
    answer:
      "We supply sesame in 25kg and 50kg multi-wall Kraft paper sacks with heat-sealed polyethylene inner liners, 25kg and 50kg food-grade woven PP bags, 1,000 kg (1 MT) FIBC jumbo bags, and private-label retail pouches (100g to 1kg).",
  },
  {
    question: "Can buyers request physical samples of sesame seeds?",
    answer:
      "Yes. International importers and food processors can contact JM Masala to request representative physical samples (250g to 500g) along with full laboratory specification sheets prior to confirming bulk contracts.",
  },
  {
    question: "Can JM Masala provide laboratory documentation (COA)?",
    answer:
      "Yes. Every export shipment includes an accredited NABL laboratory Certificate of Analysis (COA) confirming purity, moisture, oil content, free fatty acids, microbiological limits, and destination-specific pesticide residue and ETO compliance.",
  },
  {
    question: "How can international buyers request a sesame seed quotation?",
    answer:
      "Buyers can submit an export quotation request through our website contact form or directly via WhatsApp (+91 91067 66041) specifying seed type (Natural or Hulled), required purity grade, packaging type, destination port, and delivery terms (FOB Mundra or CIF).",
  },
];

const SesameSeedsPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Sesame Seeds (Natural / Hulled Sortex Export Procurement)",
      "1x 20ft FCL (~18-19 MT)",
    ),
  );

  const canonicalUrl = `${SITE_URL}/sesame-seeds-exporter-india`;
  const productImageUrl = `${SITE_URL}${sesameSeedsImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: "Sesame Seeds (Natural & Hulled)",
    description:
      "Export-grade Indian sesame seeds from Gujarat: Natural White, Hulled (up to 99.98% Sortex), Black & Brown sesame. High oil (48%-52%), lab tested, FOB Mundra and CIF global supply.",
    image: [productImageUrl],
    sku: "JMM-SESAME-SEEDS",
    mpn: "JMM-SESAME-SEEDS",
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
    additionalProperty: SESAME_SPEC_ROWS.map((spec) => ({
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
        name: "Sesame Seeds Exporter India",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SESAME_FAQS.map((faq) => ({
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
        title="Sesame Seeds Exporter from India | Natural & Hulled | JM Masala"
        description="JM Masala supplies natural and hulled sesame seeds from India for bulk buyers, importers, distributors and food manufacturers. Request specifications, samples and export quotations."
        path="/sesame-seeds-exporter-india"
        imageUrl={productImageUrl}
        imageAlt="Export-grade natural and hulled sesame seeds supplied by JM Masala from India"
        type="product"
        keywords={[
          "sesame seeds exporter india",
          "sesame seeds supplier india",
          "hulled sesame seeds exporter",
          "natural sesame seeds exporter",
          "white sesame seeds india",
          "black sesame seeds exporter",
          "til seeds exporter india",
          "bulk sesame seeds india",
          "sesame seeds gujarat",
          "sortex sesame seeds",
          "sesame seeds wholesale",
          "sesame seeds manufacturer india",
          "sesame seeds for food industry",
          "tahini sesame seeds supplier",
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
              Sesame Seeds Exporter from India
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
                Sesame Seeds Exporter from India
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--brand-gold-light)] md:text-xl">
                Natural &amp; Hulled Sesame Seeds | Bulk Export Supply | India
              </p>

              {/* Factual Opening Direct Answer Paragraph (verbatim prompt answer) */}
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[rgba(255,255,255,0.9)]">
                <p>
                  JM Masala supplies export-grade sesame seeds from India for international importers,
                  spice distributors, food manufacturers and bulk buyers. We offer natural and hulled
                  sesame seeds according to agreed buyer specifications for purity, moisture, appearance,
                  foreign matter, processing and packaging. Buyers can request product specifications,
                  samples, laboratory documentation and export quotations based on their destination and
                  contract requirements.
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
                  src={sesameSeedsImage}
                  alt="Natural and hulled sesame seeds supplied by JM Masala from India"
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
                  <span className="text-[var(--brand-gold-light)]">Sourcing Hub</span>
                  <p className="mt-1 font-semibold text-white">Gujarat, India</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">ITC-HS Code</span>
                  <p className="mt-1 font-semibold text-white">1207 40 90 (Whole)</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Purity Range</span>
                  <p className="mt-1 font-semibold text-white">98% – 99.98% Sortex</p>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-[rgba(255,255,255,0.65)]">
                Natural &amp; Hulled sesame seeds supplied by JM Masala from Gujarat, India.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* AI Grounding Box: Sesame Seeds at a Glance */}
      <section className="border-b border-[var(--brand-gold-pale)] bg-white py-10">
        <div className="jm-container">
          <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                  Quick Commercial Summary
                </p>
                <h2 className="text-xl font-bold text-[var(--brand-charcoal)] md:text-2xl">
                  Sesame Seeds at a Glance
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
                  Sesame Seeds · Til (તલ / तिल)
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Botanical Classification</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Sesamum indicum L.
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Origin &amp; Sourcing</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Gujarat, India (Saurashtra belt &amp; Unjha)
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Export Types Available</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Natural White, Hulled White, Black, Brown
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Export Purity Levels</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  98% to 99.5% (Natural) | Up to 99.98% (Hulled)
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Moisture Standard</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Max 6.0% to 8.0% (5%-6% on premium Hulled)
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Oil Content &amp; FFA</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Oil: 48%–52% | Free Fatty Acids: &lt;1.5%–2%
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Processing Methods</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Machine Cleaned, Destoned, Hulled, Sortex
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <span className="text-xs font-medium text-stone-500">Export Order Supply</span>
                <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">
                  Bulk 20ft / 40ft FCL &amp; Consolidated Containers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Are Sesame Seeds? */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="jm-section-label">Botanical Identity &amp; Origin</p>
              <h2 className="jm-section-heading">What Are Sesame Seeds?</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Sesame seeds are the tiny, oil-rich seeds produced inside the pods of the{" "}
                  <em>Sesamum indicum</em> plant, an annual herb belonging to the Pedaliaceae family.
                  Recognized as one of the oldest domesticated oilseeds in human civilization, sesame has
                  been cultivated across the fertile river plains and coastal tracts of the Indian
                  subcontinent for millennia.
                </p>
                <p>
                  In Indian regional commerce, sesame is known as <strong>Til</strong> (Hindi, Marathi,
                  Bengali) or <strong>Tal</strong> (Gujarati). The seed is prized worldwide for its
                  extraordinary oil content (typically 48% to 52%), delicate nutty aroma, pleasant
                  crunch, and exceptional chemical stability against oxidation due to natural antioxidants
                  like sesamin and sesamolin.
                </p>
                <p>
                  India is one of the world's largest producers and premier exporters of high-grade sesame
                  seeds. The state of Gujarat, particularly the Saurashtra agro-climatic zone, yields
                  distinctively bright, plump white sesame seeds favored by global food manufacturers,
                  commercial bakeries, and tahini processors.
                </p>
              </div>
            </div>

            <aside className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6">
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">
                The JM Masala Sesame Entity Map
              </h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                How commercial, botanical, and regional relationships connect:
              </p>
              <div className="mt-4 space-y-2.5 text-xs text-[var(--brand-charcoal)]">
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>JM Masala Trading LLP</strong> → Indian Spice &amp; Oilseed Exporter
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Product:</strong> Sesame Seeds (Sesamum indicum L.) / Til (તલ)
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Origin Tract:</strong> Saurashtra &amp; Northern Gujarat, India
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Core Offerings:</strong> Natural White Sesame · Hulled Sesame · Sortex Black Sesame
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Quality Spectrum:</strong> 98% Machine Cleaned to 99.98% Auto Sortex
                </div>
                <div className="rounded bg-white p-2.5 border border-stone-200">
                  <strong>Global Logistics:</strong> FOB Mundra / CIF worldwide bulk container loading
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 2: Natural vs Hulled Sesame Seeds */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Commercial Classification</p>
            <h2 className="jm-section-heading">Natural Sesame Seeds vs. Hulled Sesame Seeds</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              International importers and food manufacturers typically procure sesame seeds in two primary
              forms, each engineered for distinct industrial applications:
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Natural Sesame Seeds Card */}
            <article className="jm-surface-card flex flex-col justify-between p-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-bold text-[var(--brand-deep-green)]">
                    Whole Seed with Hull
                  </span>
                  <span className="text-xs font-semibold text-stone-500">98% – 99.5% Purity</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--brand-charcoal)]">
                  Natural Sesame Seeds
                </h3>
                <p className="mt-2 text-xs font-medium text-[var(--brand-gold)]">
                  Raw / Unhulled White &amp; Beige Sesame Seeds
                </p>
                <div className="mt-4 space-y-3 text-xs leading-relaxed text-[var(--brand-forest)]">
                  <p>
                    <strong>Definition:</strong> Natural sesame seeds retain their original outer edible
                    seed coat (bran). They have an off-white, light cream, or beige tint and a pronounced,
                    earthy nutty taste.
                  </p>
                  <p>
                    <strong>Nutritional Advantage:</strong> Retaining the hull preserves substantial
                    dietary fiber and vital minerals (particularly plant-based calcium, iron, and magnesium).
                  </p>
                  <p>
                    <strong>Processing:</strong> Machine cleaned over multi-deck screens, destoned, and
                    optically color sorted (98%, 99%, or 99.5% Sortex) without any chemical or wet peeling.
                  </p>
                  <p>
                    <strong>Key Applications:</strong>
                  </p>
                  <ul className="list-inside list-disc space-y-1 pl-1">
                    <li>Traditional Tahini paste and Halva manufacturing (high oil &amp; rich body)</li>
                    <li>Cold-pressed sesame oil crushing (48%–52% extraction yield)</li>
                    <li>Confectionery brittle, til chikki, and savory regional snack coatings</li>
                    <li>Ethnic spice mixes, za'atar seasonings, and Asian cooking</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded border border-stone-200 bg-stone-50 p-3 text-xs text-stone-600">
                <strong>Standard Grades:</strong> 98% FAQ Machine Cleaned · 99% Sortex · 99.5% Sortex
              </div>
            </article>

            {/* Hulled Sesame Seeds Card */}
            <article className="jm-surface-card flex flex-col justify-between p-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-bold text-[var(--brand-deep-green)]">
                    Mechanically Peeled
                  </span>
                  <span className="text-xs font-semibold text-stone-500">Up to 99.98% Sortex</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--brand-charcoal)]">
                  Hulled Sesame Seeds
                </h3>
                <p className="mt-2 text-xs font-medium text-[var(--brand-gold)]">
                  Pearly White Dehulled Sesame Seeds
                </p>
                <div className="mt-4 space-y-3 text-xs leading-relaxed text-[var(--brand-forest)]">
                  <p>
                    <strong>Definition:</strong> Hulled sesame seeds have had their outer fibrous hull
                    mechanically removed, leaving only the pristine, pearly white inner kernel.
                  </p>
                  <p>
                    <strong>Functional Advantage:</strong> Dehulling removes natural oxalic acid and
                    bitter compounds present in the skin, resulting in an exceptionally sweet, mild nutty
                    flavor and softer bite.
                  </p>
                  <p>
                    <strong>Processing:</strong> Treated with aqua washing and centrifugal friction or
                    dry mechanical abrasion, thoroughly dried with hygienic hot air, and run through
                    dual-camera optical Sortex machines.
                  </p>
                  <p>
                    <strong>Key Applications:</strong>
                  </p>
                  <ul className="list-inside list-disc space-y-1 pl-1">
                    <li>Commercial bakery buns (hamburger buns, hot dog rolls, bagels)</li>
                    <li>Artisan breads, breadsticks, sesame crackers, and biscuits</li>
                    <li>Ultra-smooth gourmet white tahini and delicate confectionery creams</li>
                    <li>Sushi roll coating, restaurant garnishes, and salad dressings</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded border border-stone-200 bg-stone-50 p-3 text-xs text-stone-600">
                <strong>Standard Grades:</strong> 99.90% Sortex · 99.95% Sortex · 99.98% Auto Sortex
              </div>
            </article>
          </div>

          {/* Specialty Variants: Black & Brown Sesame Note */}
          <div className="mt-8 rounded-xl border border-[var(--brand-gold-pale)] bg-white p-6">
            <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
              Specialty Sesame Offerings: Black &amp; Brown Sesame Seeds
            </h3>
            <div className="mt-3 grid gap-6 sm:grid-cols-2 text-xs leading-relaxed text-[var(--brand-forest)]">
              <div>
                <strong className="text-[var(--brand-charcoal)]">Natural Black Sesame Seeds: </strong>
                Sourced from specialized tracts in Gujarat and Rajasthan. Sortex cleaned to 99.0%–99.5%
                purity, prized in Asian cooking, Japanese sushi, Korean furikake, black sesame pastes, and
                nutraceutical formulations for its intense aroma and deep coloration.
              </div>
              <div>
                <strong className="text-[var(--brand-charcoal)]">Brown Sesame Seeds: </strong>
                Natural unhulled brown seeds containing high oil percentages (50%+), predominantly procured
                by commercial edible oil mills for high-yield expeller extraction of golden, aromatic sesame
                cooking oil.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Specifications Table */}
      <section id="specifications" className="jm-section jm-section--white scroll-mt-12">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Technical Parameters</p>
            <h2 className="jm-section-heading">Sesame Seeds Export Specifications</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala provides verifiable laboratory specifications for both Natural and Hulled Indian
              sesame seeds. All parameters are tested using internationally recognized ISO, ASTA, and AOCS
              methodologies:
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--brand-gold-pale)] bg-white shadow-sm">
            <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-6 py-4">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
                JM Masala Commercial Export Specifications: Indian Sesame Seeds
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
                  {SESAME_SPEC_ROWS.map((row) => (
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
                          : row.label.includes("FFA")
                          ? "AOCS Ca 5a-40 (as oleic acid)"
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
              Commercial specifications are calibrated according to agreed buyer requirements, destination
              market regulations (EU, US FDA, GCC, East Asia), and individual contract parameters. Verified
              pre-shipment COA is issued by accredited NABL testing laboratories.
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Export Grades by Buyer Market */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Market Calibration</p>
            <h2 className="jm-section-heading">Sesame Seed Grades by Destination Market</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Export quality grades are tailored to the regulatory, microbiological, and functional needs of
              each destination region:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {SESAME_MARKET_GRADES.map((grade) => (
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
            These grades reflect JM Masala's active commercial supply standards developed through recurring
            trade contracts with international distributors and food industrial buyers.
          </div>
        </div>
      </section>

      {/* Section 5: Gujarat Sourcing Network */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div>
              <p className="jm-section-label">Geographic Origin</p>
              <h2 className="jm-section-heading">Sesame Seeds from Gujarat, India</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Gujarat is India's leading producer and commercial trade hub for premium white sesame seeds.
                  The state's semi-arid maritime climate, well-aerated black cotton soils, and prolonged sunny
                  winters create ideal agronomic conditions for developing plump, bright seeds with high
                  concentrations of natural oil.
                </p>
                <p>
                  JM Masala procures sesame directly from key APMC mandis across Gujarat's Saurashtra belt
                  (including Rajkot, Gondal, Amreli, and Junagadh) and Northern Gujarat (Unjha, Mehsana, Patan).
                  Operating in proximity to these primary mandis enables our procurement specialists to execute
                  daily spot-sampling of fresh arrivals, verifying natural coloration, low moisture, and absence
                  of immature grains right at origin.
                </p>
                <p>
                  Procuring directly from regional mandis ensures reliable fresh-crop availability, competitive
                  export cost structures, and complete batch traceability from farm-gate to container stuffing.
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
                The Verified JM Masala Sesame Supply Chain
              </h3>
              <p className="mt-2 text-xs text-[var(--brand-forest)]">
                From Gujarat Mandi Procurement to Global Ocean Freight Dispatch:
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    1
                  </span>
                  <span>Gujarat Mandi Spot Procurement (Saurashtra &amp; Unjha)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    2
                  </span>
                  <span>Direct Lot Selection &amp; Oil/FFA Laboratory Screening</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    3
                  </span>
                  <span>Multi-Deck Vibratory Fine Screening &amp; Air Aspiration</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    4
                  </span>
                  <span>Gravity Destoning &amp; Inline Rare-Earth Magnetic Separation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    5
                  </span>
                  <span>Mechanical Hulling, Washing &amp; Hot-Air Dehydration</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    6
                  </span>
                  <span>Dual-Camera High-Resolution Sortex Optical Color Sorting</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--brand-charcoal)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                    7
                  </span>
                  <span>NABL Laboratory Quality Inspection &amp; Pre-Shipment COA</span>
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

      {/* Section 6: Cleaning & Processing Infrastructure */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Processing Operations</p>
            <h2 className="jm-section-heading">Sesame Seed Cleaning, Hulling &amp; Sortex Sorting</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Because sesame seeds are small and prone to collecting fine field dust, sand, and off-color
              grains, delivering export purity up to 99.98% requires integrated multi-stage processing:
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SESAME_SUPPLY_CHAIN_STEPS.map((step) => (
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
            <h2 className="jm-section-heading">Sesame Seed Quality Parameters Explained</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Compliance for international food manufacturers and bulk buyers hinges on six critical quality
              parameters:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <Sparkles className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Purity Calibration</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Calibrated across 98% (Machine Cleaned FAQ), 99% &amp; 99.5% (Sortex Natural), and up to
                99.95%–99.98% (Auto Sortex Hulled). Optical sorting eliminates dark, broken, or foreign grains.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <Scale className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Moisture Control</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Moisture is strictly kept below 8.0% (and 5.0%–6.0% on hulled sesame) to protect high-oil
                seeds from enzymatic hydrolysis, fungal growth, and volatile rancidity during ocean voyages.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <ShieldCheck className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Free Fatty Acids (FFA)</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Tested to ensure FFA remains below 1.5% to 2.0%. Low FFA guarantees fresh nutty flavor, clean
                odor, extended shelf life, and superior oil stability for tahini and bakery applications.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <PackageCheck className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Oil Percentage (48%-52%)</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Gujarat white sesame naturally tests with 48% to 52% oil content, delivering high extraction
                yields for edible oil pressers and rich, creamy body for emulsified sesame pastes.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <FileCheck2 className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Zero ETO &amp; Pesticide MRLs</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Lots undergo dedicated GC-MS/MS and LC-MS/MS screenings at NABL accredited labs to verify
                strict compliance with destination market maximum residue limits (EU MRLs, US FDA, Codex).
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] p-5">
              <div className="flex items-center gap-2 text-[var(--brand-deep-green)]">
                <CheckCircle2 className="h-5 w-5 text-[var(--brand-gold)]" />
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Microbiological Safety</h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--brand-forest)]">
                Verified zero Salmonella in 25g, E. Coli &lt; 10 CFU/g, and low yeast and mould counts,
                ensuring complete safety for ready-to-eat bakery toppings and food manufacturing.
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
              <h2 className="jm-section-heading">Sesame Seeds Packaging &amp; Container Stuffing</h2>
              <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
                <p>
                  Sesame seeds have a relatively heavy bulk density of approximately{" "}
                  <strong>600 to 650 g/L</strong>, allowing high-tonnage container payloads without
                  exceeding volumetric limits:
                </p>
                <ul className="space-y-2 text-sm text-[var(--brand-charcoal)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                    <span>
                      <strong>20ft FCL Container:</strong> 18.0 to 19.0 Metric Tons loose stuffed (approx.
                      720 to 760 bags of 25kg) or ~15.0–16.0 MT palletized.
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
                      <strong>Consolidated Shipments:</strong> Sesame can be stuffed alongside Cumin,
                      Coriander, Fennel, and Fenugreek under a single Bill of Lading.
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
                    1. Multi-Wall Kraft Paper Sacks (25 kg / 50 kg)
                  </p>
                  <p className="mt-1">
                    3-ply food-grade Kraft paper with an inner heat-sealed polyethylene moisture-barrier liner,
                    the preferred packaging format for automated European and American industrial bakeries.
                  </p>
                </div>
                <div className="rounded border border-stone-200 p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    2. Woven Polypropylene (PP) Bags (25 kg / 50 kg)
                  </p>
                  <p className="mt-1">
                    Heavy-duty laminated food-grade PP bags with inner liner, offering robust mechanical protection
                    and puncture resistance for long-haul maritime transport.
                  </p>
                </div>
                <div className="rounded border border-stone-200 p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    3. 1,000 kg (1 MT) FIBC Bulk Jumbo Bags
                  </p>
                  <p className="mt-1">
                    Heavy-duty big bags with top duffle, bottom discharge spout, and lifting loops designed for
                    high-volume commercial tahini factories and edible oil crushing plants.
                  </p>
                </div>
                <div className="rounded border border-stone-200 p-3">
                  <p className="font-bold text-[var(--brand-charcoal)]">
                    4. Custom Branded Private Label Pouches (100g to 1kg)
                  </p>
                  <p className="mt-1">
                    Pre-printed stand-up barrier pouches with zip locks, barcodes, and multi-language nutrition
                    labeling for supermarket retail brands.
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
            <p className="jm-section-label">Industrial Uses</p>
            <h2 className="jm-section-heading">Commercial Applications of Indian Sesame Seeds</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              Supplied across key global food processing, bakery, and ingredient manufacturing sectors:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/40 p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Bakery &amp; Burger Buns</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                Hulled sesame seeds (99.95% to 99.98% Sortex) are the global standard for topping hamburger
                buns, artisan breads, bagels, pretzels, and savory breadsticks, providing attractive white
                contrast and roasted aroma.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/40 p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Tahini &amp; Halva Processing</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                High natural oil content (50%+) and low free fatty acids in Gujarat natural white sesame deliver
                silky, stable emulsification and rich body essential for authentic Middle Eastern tahini and halva.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/40 p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Confectionery &amp; Snacks</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                Natural white and brown seeds are used in sesame candy bars, honey-sesame biscuits, brittle,
                traditional Indian til chikki, and savory cracker snack formulations worldwide.
              </p>
            </article>

            <article className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/40 p-5">
              <h3 className="text-base font-bold text-[var(--brand-charcoal)]">Cold-Pressed Edible Oil</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                Natural sesame seeds are cold pressed into golden, fragrant edible sesame oil (Gingelly oil)
                prized for high smoke point, oxidative stability, and health-protective lignans.
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
              Every sesame consignment shipped by JM Masala is accompanied by an authenticated trade and
              regulatory documentation package:
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

      {/* Section 11: How to Buy Bulk Sesame Seeds */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Buyer Guide</p>
            <h2 className="jm-section-heading">How to Buy Bulk Sesame Seeds from India</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala provides a transparent, structured procurement process for international commercial
              buyers:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/40 p-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                1
              </span>
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Inquiry &amp; Specs</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Submit your required seed type (Natural or Hulled), target purity, packaging format, and port of destination.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/40 p-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                2
              </span>
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Sample &amp; Quote</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                We provide a formal proforma quotation (FOB Mundra or CIF) and dispatch representative 250g–500g physical samples.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/40 p-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                3
              </span>
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Order &amp; Processing</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Upon contract agreement, seeds undergo mechanical cleaning, hulling, Sortex optical grading, and lab testing.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/40 p-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-deep-green)] text-xs font-bold text-white">
                4
              </span>
              <h3 className="mt-3 text-sm font-bold text-[var(--brand-charcoal)]">Stuffing &amp; Dispatch</h3>
              <p className="mt-1 text-xs text-[var(--brand-forest)]">
                Containers are inspected, stuffed, sealed, and dispatched to Mundra Port with complete documentation.
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
              Direct, factual answers to common questions about Indian sesame seed export, commercial grades,
              specifications, and procurement:
            </p>
          </div>

          <div className="mt-8 divide-y divide-[var(--brand-gold-pale)] rounded-xl border border-[var(--brand-gold-pale)] bg-white">
            {SESAME_FAQS.map((faq) => (
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
            Request Sesame Seed Export Specifications &amp; Quotation
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

export default SesameSeedsPage;
