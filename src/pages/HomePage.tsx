import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Package,
  FileText,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Globe2,
  Award,
  Factory,
  FileCheck,
  Scale,
  Building2,
  Send
} from "lucide-react";
import Seo from "@/components/Seo";
import {
  COMPANY,
  PRODUCTS,
  SITE_URL,
  buildWhatsAppUrl,
} from "@/data/siteData";

import bannerImage from "@/assets/homepage.png";
import aboutImage from "@/assets/aboutpage.png";
import cuminImage from "@/assets/cumin.png";
import corianderSeedsImage from "@/assets/CorianderSeeds.png";
import fennelSeedsImage from "@/assets/FennelSeeds.png";
import fenugreekSeedsImage from "@/assets/FenugreekSeeds.png";
import ajwainSeedsImage from "@/assets/AjwainSeeds.jpg";
import redChilliImage from "@/assets/RedChilli.png";
import turmericImage from "@/assets/Turmeric.png";
import psylliumHuskImage from "@/assets/PsylliumHusk.png";

/* ─────────────────────────── CONSTANTS & DATA ─────────────────────────── */

const CORE_FOUR_SPICES = [
  {
    id: "cumin",
    tabLabel: "Cumin Seeds (Jeera)",
    name: "Indian Cumin Seeds (Jeera)",
    botanical: "Cuminum cyminum",
    hsCode: "0909 31 29",
    origin: "APMC Mandi, Unjha, Gujarat",
    tag: "Flagship Commodity",
    image: cuminImage,
    slug: "cumin-seeds-exporter-india",
    powderSlug: "cumin-powder-exporter-india",
    fcl20: "13.0 - 14.0 MT",
    fcl40: "26.0 - 28.0 MT",
    headline: "Unjha Cumin Seeds — Cleaned & Sortex Graded at Source",
    description:
      "Unjha is the undisputed cumin capital of the world. Stationed directly adjacent to the APMC Mandi, JM Masala procures fresh harvest arrivals directly from farmers, eliminating multi-tier trading markups. Our automated Sortex lines deliver calibrated optical cleaning up to 99.9% purity.",
    keySpecs: "Volatile Oil: 2.5% to 4.5% · Moisture: <8.0% · Purity: 99.5% Sortex",
    grades: [
      {
        name: "Europe Quality (Sortex 99.5%)",
        purity: "99.5% Minimum",
        moisture: "Max 8.0%",
        features: "ETO Tested · Low Pesticide · Double Sortex Cleaned",
        target: "EU, UK & Scandinavia Importers",
      },
      {
        name: "USA Quality (ASTA Graded)",
        purity: "99.0% ASTA Clean",
        moisture: "Max 8.5%",
        features: "Low Volatile Loss · Micro-tested · Fumigated",
        target: "North American Food Processors",
      },
      {
        name: "Singapore Quality (99% Clean)",
        purity: "99.0% Purity",
        moisture: "Max 9.0%",
        features: "Natural Color · Whole Seed · Machine Cleaned",
        target: "Southeast Asia Spice Repackers",
      },
      {
        name: "Gulf & Middle East Grade",
        purity: "98.0% - 99.0%",
        moisture: "Max 9.5%",
        features: "Bold Grain · High Aroma · Machine Cleaned",
        target: "UAE, Saudi Arabia & Middle East Wholesalers",
      },
    ],
  },
  {
    id: "coriander",
    tabLabel: "Coriander Seeds (Dhania)",
    name: "Indian Coriander Seeds (Dhania)",
    botanical: "Coriandrum sativum",
    hsCode: "0909 21 10",
    origin: "Gujarat & Rajasthan Mandis",
    tag: "High Essential Oil",
    image: corianderSeedsImage,
    slug: "coriander-seeds-exporter-india",
    powderSlug: "coriander-powder-exporter-india",
    fcl20: "9.0 - 10.0 MT",
    fcl40: "20.0 - 21.0 MT",
    headline: "Whole Round Coriander (Eagle, Scooter, Badami & Single Parrot)",
    description:
      "Sourced from the prime coriander growing tracts of Gujarat and Rajasthan. Available in Eagle, Scooter, and Badami grades with high linalool content, golden husk color, and calibrated moisture retention.",
    keySpecs: "Volatile Oil: >0.3% · Moisture: <9.0% · Splits: <5%",
    grades: [
      {
        name: "Eagle Quality (Bold Golden)",
        purity: "99.0% Purity",
        moisture: "Max 8.5%",
        features: "Uniform Round Seeds · Vibrant Aroma · Low Splits",
        target: "Grinding Plants & Global Retail Brands",
      },
      {
        name: "Scooter Quality (Sortex Graded)",
        purity: "98.5% Purity",
        moisture: "Max 9.0%",
        features: "Selected Grain · Cleaned · Minimal Foreign Matter",
        target: "B2B Spice Blenders & Food Processors",
      },
      {
        name: "Badami Quality (Commercial)",
        purity: "98.0% Purity",
        moisture: "Max 10.0%",
        features: "Brownish Hue · Cost-Effective · High Yield",
        target: "Wholesale Repackers & Curry Powder Mills",
      },
      {
        name: "Single Parrot / Super Green",
        purity: "99.5% Purity",
        moisture: "Max 8.0%",
        features: "Rare Vibrant Green · Premium Fragrance",
        target: "Middle East & Gourmet Specialty Importers",
      },
    ],
  },
  {
    id: "fennel",
    tabLabel: "Fennel Seeds (Saunf)",
    name: "Indian Fennel Seeds (Saunf / Variyali)",
    botanical: "Foeniculum vulgare",
    hsCode: "0909 61 19",
    origin: "Unjha & North Gujarat Mandis",
    tag: "Sweet Anethole Rich",
    image: fennelSeedsImage,
    slug: "fennel-seeds-exporter-india",
    powderSlug: "fennel-seeds-exporter-india",
    fcl20: "12.0 - 13.0 MT",
    fcl40: "24.0 - 25.0 MT",
    headline: "Unjha Green & Lucknow Quality Fennel Seeds",
    description:
      "Unjha is the global nerve center for fennel seed processing. JM Masala selects long-grain, pale-green to vivid-green fennel seeds with high anethole sweetness, screened for export across Europe, North America, and the Middle East.",
    keySpecs: "Anethole Content: Rich · Moisture: <9.0% · Stemless: Yes",
    grades: [
      {
        name: "Abu Road / Green Sortex",
        purity: "99.5% Purity",
        moisture: "Max 8.5%",
        features: "Intense Natural Green · Extra Bold · Sweet Taste",
        target: "Europe & Confectionery Importers",
      },
      {
        name: "Singapore Grade (99%)",
        purity: "99.0% Purity",
        moisture: "Max 9.0%",
        features: "Double Machine Cleaned · Uniform Size",
        target: "Southeast Asia & Mukhwas Manufacturers",
      },
      {
        name: "Medium Bold Grade",
        purity: "98.5% Purity",
        moisture: "Max 9.5%",
        features: "Even Grain · Machine Cleaned · Aromatic",
        target: "Gulf & North African Bulk Buyers",
      },
      {
        name: "Commercial Grade",
        purity: "98.0% Purity",
        moisture: "Max 10.0%",
        features: "Standard Seed · High Extraction Yield",
        target: "Distillation & Essential Oil Processors",
      },
    ],
  },
  {
    id: "fenugreek",
    tabLabel: "Fenugreek Seeds (Methi)",
    name: "Indian Fenugreek Seeds (Methi Dana)",
    botanical: "Trigonella foenum-graecum",
    hsCode: "0910 99 12",
    origin: "Gujarat & Rajasthan Mandis",
    tag: "Pharma & Culinary Grade",
    image: fenugreekSeedsImage,
    slug: "fenugreek-seeds-exporter-india",
    powderSlug: "fenugreek-powder-exporter-india",
    fcl20: "18.0 - 20.0 MT",
    fcl40: "26.0 - 27.0 MT",
    headline: "Sortex Cleaned Machine-Graded Golden Methi Dana",
    description:
      "Selected hard, angular golden-yellow fenugreek seeds with high saponin and mucilage content. Machine-cleaned and optical-sorted to eliminate immature dark grains and inert matter for culinary, nutraceutical, and extraction buyers.",
    keySpecs: "Purity: 99.0% - 99.5% · Moisture: <8.5% · Heavy Density",
    grades: [
      {
        name: "Europe Quality (Sortex 99.5%)",
        purity: "99.5% Minimum",
        moisture: "Max 8.0%",
        features: "Low Heavy Metals · ETO Cleaned · Zero Weevil",
        target: "EU Nutraceutical & Seasoning Houses",
      },
      {
        name: "USA Machine Cleaned (99%)",
        purity: "99.0% Purity",
        moisture: "Max 8.5%",
        features: "Uniform Yellow Color · Clean Husk",
        target: "North American Food Packers",
      },
      {
        name: "Gulf Quality (Bold Yellow)",
        purity: "98.5% Purity",
        moisture: "Max 9.0%",
        features: "Hard Grain · High Bitterness & Aroma",
        target: "Middle East & North Africa Buyers",
      },
      {
        name: "Extraction Grade",
        purity: "98.0% Purity",
        moisture: "Max 10.0%",
        features: "High Saponin & Galactomannan Content",
        target: "Herbal & Oleoresin Extractors",
      },
    ],
  },
];

const FEATURED_PRODUCTS = [
  { name: "Cumin Seeds (Jeera)", botanical: "Cuminum cyminum", origin: "Unjha Mandi, Gujarat", spec: "99.5% Sortex · Max 8% Moisture", img: cuminImage, slug: "cumin-seeds-exporter-india" },
  { name: "Coriander Seeds (Dhania)", botanical: "Coriandrum sativum", origin: "Gujarat & Rajasthan", spec: "Eagle Grade · High Linalool", img: corianderSeedsImage, slug: "coriander-seeds-exporter-india" },
  { name: "Fennel Seeds (Saunf)", botanical: "Foeniculum vulgare", origin: "Unjha Mandi, Gujarat", spec: "Green Bold · Sweet Anethole", img: fennelSeedsImage, slug: "fennel-seeds-exporter-india" },
  { name: "Fenugreek Seeds (Methi)", botanical: "Trigonella foenum-graecum", origin: "Gujarat Mandi", spec: "Golden Rhomboid · Saponin Rich", img: fenugreekSeedsImage, slug: "fenugreek-seeds-exporter-india" },
  { name: "Ajwain Seeds (Carom)", botanical: "Trachyspermum ammi", origin: "Unjha & Gujarat", spec: "High Thymol · Micro Graded", img: ajwainSeedsImage, slug: "ajwain-seeds-exporter-india" },
  { name: "Red Chilli (Lal Mirch)", botanical: "Capsicum annuum", origin: "Guntur Origin", spec: "Stemless · High ASTA Color", img: redChilliImage, slug: "red-chilli-exporter-india" },
  { name: "Turmeric (Haldi)", botanical: "Curcuma longa", origin: "Salem & North-East", spec: "Bold Fingers · High Curcumin", img: turmericImage, slug: "turmeric-exporter-india" },
  { name: "Psyllium Husk (Isabgol)", botanical: "Plantago ovata", origin: "Unjha Hub, Gujarat", spec: "99% Purity · High Swell Volume", img: psylliumHuskImage, slug: "psyllium-husk-exporter-india" },
];

const SUPPLY_MODELS = [
  { model: "Bulk Commodity Export", bestFor: "International importers, traders & bulk distributors", jmSolution: "20ft & 40ft FCL container loads in 25kg / 50kg PP, Jute or multi-wall paper bags with full export documentation." },
  { model: "Food Manufacturing & Seasoning", bestFor: "Industrial food processors, snack brands & bakeries", jmSolution: "Standardized physical purity (99.5% - 99.9% Sortex), calibrated mesh sizes, and continuous contract consistency." },
  { model: "Spice Brands & Repackers", bestFor: "Wholesale re-packers & regional spice houses", jmSolution: "Machine cleaned & Sortex graded lots with consistent lot-to-lot color, moisture control, and low microbial counts." },
  { model: "Retail-Ready Packaging", bestFor: "Supermarket chains, retail distributors & ethnic grocers", jmSolution: "100g, 250g, 500g, and 1kg stand-up zipper pouches or pillow packs packed in shelf-ready master cartons." },
  { model: "Private Label OEM Program", bestFor: "D2C brands, overseas ethnic labels & private brands", jmSolution: "Turnkey brand identity: sourcing, processing, custom pouch printing, barcoding, and export clearance under your brand." },
  { model: "Direct Export Supply", bestFor: "Overseas trading houses & government tenders", jmSolution: "FOB Mundra, CIF global discharge ports, pre-shipment inspections (SGS/Bureau Veritas), and complete bank LC terms." }
];

const KNOWLEDGE_ARTICLES = [
  { title: "Cumin Seeds Export Guide (Mandi to Container)", desc: "A comprehensive guide on procuring, Sortex cleaning, packing, and shipping Indian Cumin from Unjha to world ports.", slug: "cumin-seeds-export-guide" },
  { title: "Cumin Grades Explained: Europe vs USA vs Gulf", desc: "Understanding the commercial purity, admixture tolerances, and volatile oil specifications across international markets.", slug: "cumin-grades-explained" },
  { title: "Machine Cleaning vs Sortex Optical Cleaning", desc: "Why optical sorting matters for international spice compliance and how bi-chromatic cameras eliminate defects.", slug: "machine-cleaning-vs-sortex" },
  { title: "How Indian Spices Are Industrially Processed", desc: "An inside look at destoning, aspiration, cryogenic low-temperature milling, and foreign body magnetic extraction.", slug: "how-indian-spices-are-processed" },
  { title: "Private Label Spice Manufacturing Guide", desc: "Step-by-step roadmap for overseas brands launching retail-ready Indian spice products with custom packaging.", slug: "private-label-spice-manufacturing-guide" },
  { title: "How International Buyers Source Spices from India", desc: "Essential buyer playbook: crop calendars, contract terms, Mundra port logistics, and NABL laboratory COAs.", slug: "how-to-source-spices-from-india" }
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

const HomePage = () => {
  const [activeHeroSpice, setActiveHeroSpice] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("star");

  // RFQ Form State
  const [rfqSpice, setRfqSpice] = useState("Cumin Seeds (Jeera)");
  const [rfqQuantity, setRfqQuantity] = useState("1x 20ft FCL (~14 MT)");
  const [rfqGrade, setRfqGrade] = useState("Sortex Cleaned 99.5% (Europe Quality)");
  const [rfqPacking, setRfqPacking] = useState("25kg PP Bags with Inner Liner");
  const [rfqDestination, setRfqDestination] = useState("");
  const [rfqCompany, setRfqCompany] = useState("");
  const [rfqEmail, setRfqEmail] = useState("");
  const [rfqMessage, setRfqMessage] = useState("");

  const currentHeroSpice = CORE_FOUR_SPICES[activeHeroSpice];

  // Category Filter for Master Product Portfolio
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      return (
        activeCategory === "all" ||
        (activeCategory === "star" && ["cumin-seeds-exporter-india", "coriander-seeds-exporter-india", "fennel-seeds-exporter-india", "fenugreek-seeds-exporter-india"].includes(p.slug)) ||
        (activeCategory === "whole" && (p.category === "whole" || p.category === "north" || p.category === "south")) ||
        (activeCategory === "powders" && p.category === "powders") ||
        (activeCategory === "agro" && p.category === "agro")
      );
    });
  }, [activeCategory]);

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi JM Masala Export Desk, I would like to request a commercial quotation:\n\n- Product: ${rfqSpice}\n- Quantity: ${rfqQuantity}\n- Grade: ${rfqGrade}\n- Packing: ${rfqPacking}\n- Destination: ${rfqDestination || "To Be Advised"}\n- Company: ${rfqCompany || "N/A"}\n- Email: ${rfqEmail || "N/A"}\n- Notes: ${rfqMessage || "Please share latest FOB Mundra & CIF pricing."}`;
    window.open(buildWhatsAppUrl(text), "_blank");
  };

  return (
    <>
      <Seo
        title="Indian Spice Manufacturer, Processor & Exporter | JM Masala Trading LLP"
        description="JM Masala Trading LLP is an Indian spice manufacturer, processor and exporter based in Unjha, Gujarat. Leading suppliers of Cumin, Coriander, Fennel, Fenugreek, Ajwain, Turmeric, Red Chilli, and Psyllium with advanced Sortex cleaning and global export."
        path="/"
        imageUrl="/JMMasala.png"
        keywords={[
          "Indian spice manufacturer",
          "spice processor India",
          "spice exporter India",
          "cumin seeds exporter Unjha",
          "Sortex cleaned cumin India",
          "private label spice manufacturer India",
          "bulk spices supplier Gujarat",
          "JM Masala Trading LLP",
          "coriander fennel fenugreek exporter"
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: COMPANY.legalName,
              alternateName: [COMPANY.name, "JM Masala Exports", "JM Masala Unjha"],
              url: SITE_URL,
              logo: `${SITE_URL}/JMMasala.png`,
              description:
                "Indian spice manufacturer, processor, bulk exporter and private-label partner rooted in Unjha APMC Market Yard, Gujarat.",
              address: {
                "@type": "PostalAddress",
                streetAddress: COMPANY.addressLine,
                addressLocality: "Unjha",
                addressRegion: "Gujarat",
                postalCode: "384170",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 91067 66041",
                contactType: "sales and export desk",
                availableLanguage: ["English", "Hindi", "Gujarati"],
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "JM Masala Indian Spices",
              publisher: { "@id": `${SITE_URL}/#organization` },
            }
          ]
        }}
      />

      <style>{`
        .jm-hero-gradient {
          background: linear-gradient(135deg, rgba(16, 23, 15, 0.96) 0%, rgba(26, 46, 26, 0.92) 55%, rgba(45, 74, 45, 0.88) 100%);
        }
        .jm-gold-text {
          background: linear-gradient(135deg, #e2c97e 0%, #c9a84c 60%, #fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .jm-glass-dark {
          background: rgba(26, 46, 26, 0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(201, 168, 76, 0.3);
        }
        .jm-card-lift {
          transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.28s;
        }
        .jm-card-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px -10px rgba(26, 46, 26, 0.15);
          border-color: rgba(201, 168, 76, 0.6);
        }
      `}</style>

      <div className="jm-home bg-[var(--brand-warm-white)]">
        
        {/* ══════════════════════════════════════════════════════════════════
            2. HERO SECTION (10/10 CORE POSITIONING)
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${bannerImage}')` }}
          />
          <div className="absolute inset-0 jm-hero-gradient" />
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[var(--brand-gold)] opacity-10 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Authority & Headline */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(201,168,76,0.16)] border border-[rgba(201,168,76,0.4)] text-[var(--brand-gold-light)] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--brand-gold)] animate-pulse" />
                  <span>Unjha Mandi Origin · ISO 22000 &amp; HACCP Certified</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.14] jm-display">
                  Indian Spices.{" "}
                  <span className="jm-gold-text block sm:inline">Processed for Your Market.</span>{" "}
                  Ready for the World.
                </h1>

                <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                  <strong>JM Masala Trading LLP</strong> is an Indian spice manufacturer, processor and exporter supplying whole spices, processed ingredients, private-label products and retail-ready solutions to international B2B buyers.
                </p>

                {/* The 7-Step Value Flow Banner */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[var(--brand-gold-light)] text-xs sm:text-sm font-medium tracking-wide flex flex-wrap items-center gap-2">
                  <span className="font-bold text-white">Flow:</span>
                  <span>Source in India</span>
                  <span className="text-white/40">→</span>
                  <span>Process</span>
                  <span className="text-white/40">→</span>
                  <span>Clean</span>
                  <span className="text-white/40">→</span>
                  <span>Grade</span>
                  <span className="text-white/40">→</span>
                  <span>Pack</span>
                  <span className="text-white/40">→</span>
                  <span>Private Label</span>
                  <span className="text-white/40">→</span>
                  <span className="text-white font-bold">Export</span>
                </div>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#featured-products"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-light)] text-[var(--brand-deep-green)] font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-[rgba(201,168,76,0.35)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="#inquiry-rfq"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold text-sm sm:text-base transition-all duration-200"
                  >
                    <span>Request a Quote</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>

                  <Link
                    to="/spice-processing-manufacturing"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[rgba(201,168,76,0.5)] text-[var(--brand-gold-light)] hover:bg-[rgba(201,168,76,0.12)] font-semibold text-sm transition-all duration-200"
                  >
                    <Factory className="h-4 w-4" />
                    <span>Processing Plant</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Core 4 Spotlight Switcher */}
              <div className="lg:col-span-5">
                <div className="jm-glass-dark rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                  
                  {/* Floating Top Badge */}
                  <div className="flex items-center justify-between border-b border-[rgba(201,168,76,0.2)] pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-gold)] animate-ping" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold-light)]">
                        {currentHeroSpice.tag}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/80">
                      HS: {currentHeroSpice.hsCode}
                    </span>
                  </div>

                  {/* Core 4 Quick Switcher Tabs */}
                  <div className="grid grid-cols-4 gap-1.5 bg-black/30 p-1 rounded-xl mb-5">
                    {CORE_FOUR_SPICES.map((sp, idx) => (
                      <button
                        key={sp.id}
                        onClick={() => setActiveHeroSpice(idx)}
                        className={`py-2 px-1 text-center rounded-lg text-xs font-bold transition-all ${
                          activeHeroSpice === idx
                            ? "bg-[var(--brand-gold)] text-[var(--brand-deep-green)] shadow-md"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {sp.id.charAt(0).toUpperCase() + sp.id.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Product Card */}
                  <div className="space-y-4">
                    <div className="relative h-52 sm:h-56 rounded-xl bg-gradient-to-b from-white/10 to-black/30 flex items-center justify-center p-4 overflow-hidden border border-white/10">
                      <img
                        src={currentHeroSpice.image}
                        alt={currentHeroSpice.name}
                        className="max-h-full max-w-full object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[11px] text-white/90">
                        <span className="text-[var(--brand-gold-light)] font-bold">Origin:</span> {currentHeroSpice.origin}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-[var(--brand-gold-light)] font-serif italic">
                        {currentHeroSpice.botanical}
                      </div>
                      <h3 className="text-xl font-bold text-white jm-display mt-0.5">
                        {currentHeroSpice.name}
                      </h3>
                      <p className="text-xs text-white/80 leading-relaxed mt-1 line-clamp-2">
                        {currentHeroSpice.description}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white/90 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-white/60">Standard Spec:</span>
                        <span className="font-semibold text-[var(--brand-gold-light)]">{currentHeroSpice.keySpecs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">20ft FCL Load:</span>
                        <span className="font-semibold">{currentHeroSpice.fcl20}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <Link
                        to={`/${currentHeroSpice.slug}`}
                        className="w-full py-2.5 px-3 rounded-lg bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-light)] text-[var(--brand-deep-green)] text-xs font-bold text-center transition-colors"
                      >
                        Technical Specs
                      </Link>
                      <a
                        href={buildWhatsAppUrl(`Hi JM Masala, please quote FOB Mundra for ${currentHeroSpice.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold text-center border border-white/20 transition-colors"
                      >
                        Quick WhatsApp RFQ
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            3. TRUST STRIP
        ══════════════════════════════════════════════════════════════════ */}
        <div className="bg-[#121b13] border-y border-[rgba(201,168,76,0.3)] py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-white/90">
            <div className="flex items-center gap-2"><span className="text-base">🇮🇳</span><span>Indian Origin</span></div>
            <div className="hidden sm:block text-[var(--brand-gold)] opacity-40">•</div>
            <div className="flex items-center gap-2"><Factory className="h-4 w-4 text-[var(--brand-gold)]" /><span>Advanced Processing &amp; Sortex</span></div>
            <div className="hidden sm:block text-[var(--brand-gold)] opacity-40">•</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--brand-gold)]" /><span>NABL Lab Quality Control</span></div>
            <div className="hidden sm:block text-[var(--brand-gold)] opacity-40">•</div>
            <div className="flex items-center gap-2"><Package className="h-4 w-4 text-[var(--brand-gold)]" /><span>Custom Export Packaging</span></div>
            <div className="hidden sm:block text-[var(--brand-gold)] opacity-40">•</div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-[var(--brand-gold)]" /><span>Private Label OEM</span></div>
            <div className="hidden sm:block text-[var(--brand-gold)] opacity-40">•</div>
            <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-[var(--brand-gold)]" /><span>Global Supply (30+ Countries)</span></div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            4. PRODUCT CATEGORIES (FEATURED CORE PRODUCTS)
        ══════════════════════════════════════════════════════════════════ */}
        <section id="featured-products" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
              <Package className="h-4 w-4" />
              <span>Core Commercial Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
              Our Indian Spices &amp; Agro Products
            </h2>
            <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
              From whole spices and seeds to processed ingredients and retail-ready products, JM Masala supplies Indian agricultural products according to customer specifications and market requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((prod) => (
              <article
                key={prod.slug}
                className="jm-card-lift bg-white rounded-2xl border border-[rgba(201,168,76,0.25)] overflow-hidden flex flex-col justify-between shadow-sm group"
              >
                <div>
                  <div className="relative h-48 bg-gradient-to-b from-[var(--brand-cream)] to-white p-4 flex items-center justify-center border-b border-[var(--brand-gold-pale)]">
                    <img
                      src={prod.img}
                      alt={`${prod.name} Exporter India`}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-white/90 border border-[rgba(201,168,76,0.3)] text-[var(--brand-forest)]">
                      {prod.origin.split(",")[0]}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="text-[11px] text-[var(--brand-sage)] font-serif italic">
                      {prod.botanical}
                    </div>
                    <h3 className="text-base font-bold text-[var(--brand-charcoal)] jm-display group-hover:text-[var(--brand-forest)] transition-colors">
                      {prod.name}
                    </h3>
                    <div className="bg-[var(--brand-cream)] rounded-lg p-2 text-[11px] font-mono text-[var(--brand-charcoal)] border border-[rgba(201,168,76,0.2)]">
                      <span className="text-[var(--brand-gold)] font-bold">Spec:</span> {prod.spec}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-[var(--brand-gold-pale)] flex items-center justify-between gap-2">
                  <Link
                    to={`/${prod.slug}`}
                    className="text-xs font-bold text-[var(--brand-forest)] hover:text-[var(--brand-gold)] inline-flex items-center gap-1"
                  >
                    <span>View Specs</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                  <a
                    href={buildWhatsAppUrl(`Hi JM Masala, I would like to inquire about specifications and pricing for ${prod.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[rgba(201,168,76,0.15)] hover:bg-[var(--brand-gold)] text-[var(--brand-deep-green)] hover:text-white font-bold text-xs transition-colors"
                  >
                    Quick RFQ
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-deep-green)] font-bold text-sm shadow-md transition-all"
            >
              <span>View All 25+ Products</span>
              <ArrowRight className="h-4 w-4 text-[var(--brand-gold-light)]" />
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            5. FLAGSHIP CUMIN SECTION (CUMIN AUTHORITY)
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-b from-[var(--brand-cream)] to-[var(--brand-warm-white)] border-y border-[rgba(201,168,76,0.25)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
                  <Award className="h-4 w-4" />
                  <span>Unjha Mandi Flagship Authority</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display leading-tight">
                  Indian Cumin — From Source to Global Supply
                </h2>
                <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                  JM Masala supplies Indian cumin seeds in different grades and processing specifications for international buyers. From sourcing through established Indian markets to cleaning, grading, packaging and export, we work with customers to develop specifications suited to their application and destination market.
                </p>

                {/* Cumin Flow Diagram */}
                <div className="p-4 rounded-xl bg-white border border-[rgba(201,168,76,0.3)] shadow-sm">
                  <div className="text-xs font-bold text-[var(--brand-gold)] uppercase tracking-wider mb-2">
                    Industrial Processing Sequence:
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[var(--brand-charcoal)]">
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-cream)]">Sourcing</span>
                    <span>→</span>
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-cream)]">Machine Cleaning</span>
                    <span>→</span>
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-cream)] text-[var(--brand-forest)] font-bold">Sortex (99.9%)</span>
                    <span>→</span>
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-cream)]">Grading</span>
                    <span>→</span>
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-cream)]">Quality Control</span>
                    <span>→</span>
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-cream)]">Custom Packing</span>
                    <span>→</span>
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-forest)] text-white">Export</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white border border-[rgba(201,168,76,0.2)]">
                    <div className="text-gray-500 font-medium">Europe Grade</div>
                    <div className="font-bold text-[var(--brand-forest)] mt-0.5">99.5% Sortex</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-[rgba(201,168,76,0.2)]">
                    <div className="text-gray-500 font-medium">USA ASTA</div>
                    <div className="font-bold text-[var(--brand-forest)] mt-0.5">99.0% Clean</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-[rgba(201,168,76,0.2)]">
                    <div className="text-gray-500 font-medium">Singapore Grade</div>
                    <div className="font-bold text-[var(--brand-forest)] mt-0.5">99.0% Purity</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-[rgba(201,168,76,0.2)]">
                    <div className="text-gray-500 font-medium">Gulf Quality</div>
                    <div className="font-bold text-[var(--brand-forest)] mt-0.5">98.5% Machine</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to="/cumin-seeds-exporter-india"
                    className="px-7 py-3 rounded-xl bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-deep-green)] font-bold text-sm shadow-sm transition-all"
                  >
                    Explore Cumin Specifications
                  </Link>
                  <Link
                    to="/best-cumin-exporter-india"
                    className="px-6 py-3 rounded-xl bg-white border border-[rgba(201,168,76,0.4)] text-[var(--brand-forest)] hover:bg-[var(--brand-gold-pale)] font-semibold text-sm transition-all"
                  >
                    Unjha Sourcing Details
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[rgba(201,168,76,0.35)] bg-white p-6">
                  <img
                    src={cuminImage}
                    alt="Indian Cumin Seeds Sourcing & Processing"
                    className="w-full h-72 object-contain"
                  />
                  <div className="mt-4 p-4 rounded-xl bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.2)] text-xs text-[var(--brand-forest)] space-y-1.5">
                    <div className="font-bold text-[var(--brand-charcoal)]">FCL Container Loading Volume:</div>
                    <div className="flex justify-between"><span>20ft Container (Bagged):</span><span className="font-bold">13.0 - 14.0 Metric Tons</span></div>
                    <div className="flex justify-between"><span>40ft Container (Bagged):</span><span className="font-bold">26.0 - 28.0 Metric Tons</span></div>
                    <div className="flex justify-between"><span>Discharge Port Transit:</span><span className="font-bold">4 Hours to Mundra / Kandla</span></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            6. WHY JM MASALA / DIFFERENTIATORS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
              <ShieldCheck className="h-4 w-4" />
              <span>Core Differentiators</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
              More Than an Indian Spice Exporter
            </h2>
            <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
              We operate as a full-stack spice partner — combining agricultural origin procurement with precision processing, custom private-label packing, and rigorous export documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[rgba(201,168,76,0.25)] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-cream)] flex items-center justify-center text-[var(--brand-gold)] font-bold text-base font-mono">01</div>
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)] jm-display">Source</h3>
              <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                Multi-region sourcing across India, including Gujarat (Unjha Mandi, Saurashtra), Rajasthan, North-East India (Meghalaya, Assam), and South Indian plantation belts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[rgba(201,168,76,0.25)] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-cream)] flex items-center justify-center text-[var(--brand-gold)] font-bold text-base font-mono">02</div>
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)] jm-display">Process</h3>
              <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                Automated multi-deck pre-cleaning, gravity destoning, high-speed Sortex optical sorting (99.9%), and cryogenic low-temperature powder grinding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[rgba(201,168,76,0.25)] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-cream)] flex items-center justify-center text-[var(--brand-gold)] font-bold text-base font-mono">03</div>
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)] jm-display">Customize</h3>
              <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                Physical purity grades, volatile oil retention, calibrated mesh sizes (40-100 mesh), and country-specific microbiological compliance protocols.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[rgba(201,168,76,0.25)] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-cream)] flex items-center justify-center text-[var(--brand-gold)] font-bold text-base font-mono">04</div>
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)] jm-display">Pack</h3>
              <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                Bulk export packaging (25kg/50kg PP, Jute, multi-wall paper), institutional totes, and customized retail stand-up zipper pouches (100g to 1kg).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[rgba(201,168,76,0.25)] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-cream)] flex items-center justify-center text-[var(--brand-gold)] font-bold text-base font-mono">05</div>
              <h3 className="text-lg font-bold text-[var(--brand-charcoal)] jm-display">Export</h3>
              <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                Full documentation: Phytosanitary Certificate, fumigation, NABL COA, APEDA, Certificate of Origin, and container stuffing 4 hours from Mundra Port.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            7. SOURCING SECTION (MULTI-REGION SOURCING NETWORK)
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-b from-[var(--brand-cream)] to-[var(--brand-warm-white)] border-t border-[rgba(201,168,76,0.25)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
                <MapPin className="h-4 w-4" />
                <span>Multi-Region Procurement</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
                Sourced Across India's Agricultural Regions
              </h2>
              <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                India's agricultural diversity gives buyers access to different products, varieties and regional characteristics. JM Masala develops sourcing relationships across relevant producing regions to identify products according to quality, seasonality, availability and customer requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Hub 1: Gujarat */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[rgba(201,168,76,0.3)] shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">Primary Seed Spice Hub</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-gold)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-charcoal)] jm-display">Gujarat &amp; Rajasthan</h3>
                <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                  Asia's largest seed spice mandi at Unjha. Direct farmer linkages, mandi floor inspection, and continuous harvest procurement.
                </p>
                <div className="pt-2 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {["Cumin", "Fennel", "Fenugreek", "Ajwain", "Mustard", "Psyllium", "Sesame"].map((item) => (
                    <span key={item} className="px-2 py-0.5 rounded text-[11px] bg-[var(--brand-cream)] text-[var(--brand-charcoal)] font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hub 2: North-East India */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[rgba(230,126,34,0.3)] shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E67E22]">High-Potency Specialty Hub</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E67E22]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-charcoal)] jm-display">North-East India</h3>
                <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                  Meghalaya and Assam tribal farmer cooperative linkages. World-famous for pristine high-curcumin Lakadong turmeric and sun-dried organic ginger.
                </p>
                <div className="pt-2 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {["Lakadong Turmeric (7-9% Curcumin)", "Organic Dry Ginger", "Bird's Eye Chilli", "Wild Black Pepper"].map((item) => (
                    <span key={item} className="px-2 py-0.5 rounded text-[11px] bg-orange-50 text-orange-800 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hub 3: South India */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[rgba(76,175,80,0.3)] shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4CAF50]">Plantation Spices</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-charcoal)] jm-display">South India &amp; Coast</h3>
                <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                  Direct plantation sourcing across Kerala, Andhra Pradesh, and Tamil Nadu estates for pungent chillies and whole spices.
                </p>
                <div className="pt-2 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {["Tellicherry Black Pepper", "Alleppey Green Cardamom", "Guntur Red Chilli", "Curry Leaves"].map((item) => (
                    <span key={item} className="px-2 py-0.5 rounded text-[11px] bg-emerald-50 text-emerald-800 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="text-center mt-10">
              <Link
                to="/sourcing-network"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-deep-green)] font-bold text-sm shadow-sm transition-all"
              >
                <span>Explore Our Sourcing Network</span>
                <ArrowRight className="h-4 w-4 text-[var(--brand-gold-light)]" />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            8. PROCESSING SECTION (HORIZONTAL TIMELINE)
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
              <Factory className="h-4 w-4" />
              <span>Plant Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
              From Raw Product to Export-Ready Specification
            </h2>
            <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
              Our processing approach enables JM Masala to supply products for bulk commodity buyers, food manufacturers, spice companies, private-label brands and retail businesses.
            </p>
          </div>

          {/* Horizontal Process Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 text-center">
            {[
              { step: "01", label: "SOURCE", sub: "Mandi Intake" },
              { step: "02", label: "INSPECT", sub: "Physical QC" },
              { step: "03", label: "CLEAN", sub: "Pre-Screening" },
              { step: "04", label: "DESTONE", sub: "Gravity Sep." },
              { step: "05", label: "GRADE", sub: "Size Sieving" },
              { step: "06", label: "SORTEX", sub: "Optical 99.9%" },
              { step: "07", label: "PROCESS", sub: "Cold Grinding" },
              { step: "08", label: "QUALITY", sub: "NABL Lab COA" },
              { step: "09", label: "PACK", sub: "Export Loading" },
            ].map((p) => (
              <div
                key={p.step}
                className="p-3.5 rounded-xl bg-white border border-[rgba(201,168,76,0.25)] shadow-sm hover:border-[var(--brand-gold)] transition-colors"
              >
                <div className="text-xs font-mono font-black text-[var(--brand-gold)]">{p.step}</div>
                <div className="text-xs font-bold text-[var(--brand-charcoal)] mt-1">{p.label}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{p.sub}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/spice-processing-manufacturing"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-deep-green)] font-bold text-sm shadow-sm transition-all"
            >
              <span>Explore Processing Plant</span>
              <ArrowRight className="h-4 w-4 text-[var(--brand-gold-light)]" />
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            9. PRIVATE LABEL SECTION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-b from-[var(--brand-warm-white)] to-[var(--brand-cream)] border-y border-[rgba(201,168,76,0.25)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
                  <Award className="h-4 w-4" />
                  <span>Turnkey OEM Manufacturing</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display leading-tight">
                  Build Your Spice Brand with JM Masala
                </h2>
                <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                  From product sourcing and processing to customized packaging and export, JM Masala can support businesses developing their own spice products under a private-label brand.
                </p>

                {/* Journey Timeline */}
                <div className="p-4 rounded-xl bg-white border border-[rgba(201,168,76,0.3)] shadow-sm">
                  <div className="text-xs font-bold text-[var(--brand-gold)] uppercase tracking-wider mb-2">
                    Turnkey Private Label Journey:
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[var(--brand-charcoal)]">
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-gold)] text-[var(--brand-deep-green)] font-bold">Your Brand</span>
                    <span>→</span>
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-cream)]">Our Sourcing</span>
                    <span>→</span>
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-cream)]">Processing</span>
                    <span>→</span>
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-cream)]">Packaging</span>
                    <span>→</span>
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-cream)]">Retail-Ready</span>
                    <span>→</span>
                    <span className="px-2.5 py-1 rounded bg-[var(--brand-forest)] text-white">Global Export</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white border border-[rgba(201,168,76,0.2)]">
                    <div className="font-bold text-[var(--brand-forest)]">Flexible MOQs</div>
                    <div className="text-gray-500 text-[11px] mt-0.5">Low barrier SKU testing</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-[rgba(201,168,76,0.2)]">
                    <div className="font-bold text-[var(--brand-forest)]">Custom Branding</div>
                    <div className="text-gray-500 text-[11px] mt-0.5">Pouches, jars, tins &amp; boxes</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-[rgba(201,168,76,0.2)]">
                    <div className="font-bold text-[var(--brand-forest)]">Compliance Ready</div>
                    <div className="text-gray-500 text-[11px] mt-0.5">Barcodes &amp; nutrition panels</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/private-label-spices"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-deep-green)] font-bold text-sm shadow-md transition-all"
                  >
                    <span>Explore Private Label Program</span>
                    <ArrowRight className="h-4 w-4 text-[var(--brand-gold-light)]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-[rgba(201,168,76,0.3)] shadow-lg space-y-4">
                <h3 className="text-lg font-bold text-[var(--brand-charcoal)] jm-display">
                  Supported Packaging Formats
                </h3>
                <div className="space-y-2.5 text-xs text-[var(--brand-forest)]">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--brand-cream)]">
                    <span className="font-semibold">Stand-up Zipper Pouches:</span>
                    <span className="font-mono text-[var(--brand-gold)] font-bold">100g, 200g, 500g, 1kg</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--brand-cream)]">
                    <span className="font-semibold">Pillow Packs &amp; Sachets:</span>
                    <span className="font-mono text-[var(--brand-gold)] font-bold">50g, 100g, 250g</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--brand-cream)]">
                    <span className="font-semibold">PET Jars &amp; Spice Shakers:</span>
                    <span className="font-mono text-[var(--brand-gold)] font-bold">100g, 200g, 400g</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--brand-cream)]">
                    <span className="font-semibold">Institutional Bulk Sacks:</span>
                    <span className="font-mono text-[var(--brand-gold)] font-bold">5kg, 10kg, 25kg, 50kg</span>
                  </div>
                </div>
                <Link
                  to="/spice-packaging"
                  className="block text-center py-2.5 rounded-lg border border-[rgba(201,168,76,0.4)] hover:bg-[var(--brand-gold-pale)] text-[var(--brand-forest)] font-bold text-xs transition-colors"
                >
                  View Full Packaging Catalogue →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            10. RETAIL SECTION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
              <Package className="h-4 w-4" />
              <span>Shelf-Ready Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
              Retail-Ready Indian Spices
            </h2>
            <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
              We support retail-oriented requirements with product selection, processing, packaging and private-label solutions designed around the customer's target market.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            <div className="p-5 rounded-xl bg-white border border-[rgba(201,168,76,0.25)] shadow-sm">
              <div className="text-2xl font-bold text-[var(--brand-gold)] font-mono">100g</div>
              <div className="text-xs font-semibold text-[var(--brand-charcoal)] mt-1">Trial / Retail Sachet</div>
              <div className="text-[10px] text-gray-500 mt-0.5">High Turn Repacking</div>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[rgba(201,168,76,0.25)] shadow-sm">
              <div className="text-2xl font-bold text-[var(--brand-gold)] font-mono">250g</div>
              <div className="text-xs font-semibold text-[var(--brand-charcoal)] mt-1">Supermarket Standup</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Zipper Window Pouch</div>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[rgba(201,168,76,0.25)] shadow-sm">
              <div className="text-2xl font-bold text-[var(--brand-gold)] font-mono">500g</div>
              <div className="text-xs font-semibold text-[var(--brand-charcoal)] mt-1">Family Consumer Pack</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Pillow / Window Pouch</div>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[rgba(201,168,76,0.25)] shadow-sm">
              <div className="text-2xl font-bold text-[var(--brand-gold)] font-mono">1kg</div>
              <div className="text-xs font-semibold text-[var(--brand-charcoal)] mt-1">Chef &amp; Bulk Retail</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Resealable Heavy Duty</div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/spice-packaging"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-deep-green)] font-bold text-sm shadow-sm transition-all"
            >
              <span>Retail Packaging Solutions</span>
              <ArrowRight className="h-4 w-4 text-[var(--brand-gold-light)]" />
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            11. QUALITY SECTION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-b from-[var(--brand-cream)] to-[var(--brand-warm-white)] border-y border-[rgba(201,168,76,0.25)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
                <FileCheck className="h-4 w-4" />
                <span>Food Safety Standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
                Quality Begins at the Source
              </h2>
              <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                Specifications can be established according to product, application and destination-market requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-7 rounded-2xl border border-[rgba(201,168,76,0.25)] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-cream)] flex items-center justify-center text-[var(--brand-gold)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-charcoal)] jm-display">1. Sourcing</h3>
                <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                  Product and origin selection directly from farmers and certified mandis with strict moisture meters and varietal purity checks before inward clearance.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[rgba(201,168,76,0.25)] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-cream)] flex items-center justify-center text-[var(--brand-gold)]">
                  <Factory className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-charcoal)] jm-display">2. Processing</h3>
                <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                  Mechanical cleaning, precision gravity destoning, and high-resolution Sortex optical color sorting (99.5% to 99.9% purity) with magnetic separation.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[rgba(201,168,76,0.25)] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-cream)] flex items-center justify-center text-[var(--brand-gold)]">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-charcoal)] jm-display">3. Testing</h3>
                <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                  NABL accredited laboratory COAs issued per container lot: chemical analysis (moisture, volatile oil, ash), food safety (pesticides, ETO, aflatoxins), and microbial limits.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                to="/quality-certifications"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-deep-green)] font-bold text-sm shadow-sm transition-all"
              >
                <span>Quality &amp; Testing Protocols</span>
                <ArrowRight className="h-4 w-4 text-[var(--brand-gold-light)]" />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            12. SUPPLY MODELS (TABLE MATRIX)
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
              <Scale className="h-4 w-4" />
              <span>Commercial Versatility</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
              One Supplier. Multiple Supply Models.
            </h2>
            <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
              We structure commercial supply agreements to match your exact business model, volume requirements, and destination logistics.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[rgba(201,168,76,0.3)] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[var(--brand-cream)] border-b border-[rgba(201,168,76,0.3)] text-[var(--brand-charcoal)] font-bold">
                    <th className="py-4 px-6">Requirement / Buyer Profile</th>
                    <th className="py-4 px-6">Target Application</th>
                    <th className="py-4 px-6">JM Masala Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {SUPPLY_MODELS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[var(--brand-cream)]/30 transition-colors">
                      <td className="py-4 px-6 font-bold text-[var(--brand-forest)]">
                        {item.model}
                      </td>
                      <td className="py-4 px-6 text-gray-600 font-medium">
                        {item.bestFor}
                      </td>
                      <td className="py-4 px-6 text-[var(--brand-charcoal)]">
                        {item.jmSolution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            13. PRODUCT PORTFOLIO CATEGORY EXPLORER
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[var(--brand-cream)] border-y border-[rgba(201,168,76,0.25)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)] mb-1">
                  <Package className="h-4 w-4" />
                  <span>Comprehensive Portfolio</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
                  Explore by Product Category
                </h2>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "star", label: "★ Star Flagships" },
                  { id: "whole", label: "Whole Spices" },
                  { id: "powders", label: "Pure Ground Powders" },
                  { id: "agro", label: "Seeds & Agro" },
                  { id: "all", label: "All 23+ Products" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeCategory === tab.id
                        ? "bg-[var(--brand-forest)] text-white shadow-sm"
                        : "bg-white text-[var(--brand-forest)] hover:bg-[var(--brand-gold-pale)] border border-[rgba(201,168,76,0.25)]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.slice(0, 8).map((p) => (
                <article
                  key={p.slug}
                  className="bg-white rounded-xl p-4 border border-[rgba(201,168,76,0.25)] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="h-40 bg-[var(--brand-warm-white)] rounded-lg p-3 flex items-center justify-center mb-3">
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-[10px] text-gray-500 font-serif italic">{p.botanicalName}</div>
                    <h3 className="text-sm font-bold text-[var(--brand-charcoal)] jm-display mt-0.5">{p.name}</h3>
                    <p className="text-[11px] text-[var(--brand-forest)] mt-1 line-clamp-2">{p.shortDescription}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                    <Link to={`/${p.slug}`} className="text-xs font-bold text-[var(--brand-forest)] hover:text-[var(--brand-gold)]">
                      View Specs →
                    </Link>
                    <span className="text-[10px] font-mono text-gray-500">{p.origin.split(",")[0]}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Cold Pressed Oils Highlight Card */}
            <div className="mt-12 p-6 rounded-2xl bg-white border border-[rgba(201,168,76,0.35)] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">Dedicated Oil Sourcing</div>
                <h3 className="text-xl font-bold text-[var(--brand-charcoal)] jm-display">
                  Looking for Cold Pressed Cooking Oils?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--brand-forest)]">
                  100% pure virgin wood pressed mustard oil, sesame oil, and groundnut oil in retail and bulk drums.
                </p>
              </div>
              <Link
                to="/cold-pressed-oils"
                className="shrink-0 px-6 py-3 rounded-xl bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-deep-green)] font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                Explore Cold Pressed Oils →
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            14. GLOBAL MARKETS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
              <Globe2 className="h-4 w-4" />
              <span>Worldwide Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
              Supplying Indian Products to Global Markets
            </h2>
            <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
              We work with international importers, distributors, wholesalers, food manufacturers, spice companies, retailers and private-label businesses across key commercial territories.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white border border-[rgba(201,168,76,0.25)] shadow-sm">
              <div className="text-2xl mb-1">🇦🇪 🇸🇦</div>
              <div className="text-xs font-bold text-[var(--brand-charcoal)]">Middle East &amp; Gulf</div>
              <div className="text-[10px] text-gray-500 mt-0.5">UAE, Saudi, Oman</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[rgba(201,168,76,0.25)] shadow-sm">
              <div className="text-2xl mb-1">🇧🇩 🇱🇰</div>
              <div className="text-xs font-bold text-[var(--brand-charcoal)]">South Asia</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Bangladesh, Sri Lanka</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[rgba(201,168,76,0.25)] shadow-sm">
              <div className="text-2xl mb-1">🇬🇧 🇩🇪</div>
              <div className="text-xs font-bold text-[var(--brand-charcoal)]">Europe &amp; UK</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Germany, Netherlands</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[rgba(201,168,76,0.25)] shadow-sm">
              <div className="text-2xl mb-1">🇨🇦 🇺🇸</div>
              <div className="text-xs font-bold text-[var(--brand-charcoal)]">North America</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Canada, USA (ASTA)</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[rgba(201,168,76,0.25)] shadow-sm">
              <div className="text-2xl mb-1">🇦🇺 🇳🇿</div>
              <div className="text-xs font-bold text-[var(--brand-charcoal)]">Oceania</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Australia, New Zealand</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[rgba(201,168,76,0.25)] shadow-sm">
              <div className="text-2xl mb-1">🇸🇬 🇲🇾</div>
              <div className="text-xs font-bold text-[var(--brand-charcoal)]">Southeast Asia</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Singapore, Malaysia</div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            15. KNOWLEDGE CENTER
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-b from-[var(--brand-warm-white)] to-[var(--brand-cream)] border-t border-[rgba(201,168,76,0.25)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
                <FileText className="h-4 w-4" />
                <span>Topical Authority</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
                Indian Spice Knowledge Center
              </h2>
              <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                Objective technical resources and commercial guides answering the real-world operational questions of international spice importers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {KNOWLEDGE_ARTICLES.map((art, idx) => (
                <article
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[rgba(201,168,76,0.25)] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                      Buyer Technical Resource
                    </div>
                    <h3 className="text-base font-bold text-[var(--brand-charcoal)] jm-display leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                      {art.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <Link
                      to="/blog"
                      className="text-xs font-bold text-[var(--brand-forest)] hover:text-[var(--brand-gold)] inline-flex items-center gap-1"
                    >
                      <span>Read Full Guide</span>
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-deep-green)] font-bold text-sm shadow-sm transition-all"
              >
                <span>Visit Knowledge Center</span>
                <ArrowRight className="h-4 w-4 text-[var(--brand-gold-light)]" />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            16. ABOUT / COMPANY TRUST
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 relative">
              <img
                src={aboutImage}
                alt="JM Masala Spice Processing Facility"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-xl border border-[rgba(201,168,76,0.3)]"
              />
              <div className="absolute -bottom-4 -right-4 bg-[var(--brand-forest)] text-white px-5 py-3 rounded-xl shadow-lg border border-[rgba(201,168,76,0.4)]">
                <div className="text-xs font-bold text-[var(--brand-gold-light)]">Established Heritage</div>
                <div className="text-sm font-black jm-display">Three Generations in Unjha</div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
                <Building2 className="h-4 w-4" />
                <span>Company Credibility</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display leading-tight">
                JM Masala Trading LLP — Indian Manufacturer • Processor • Exporter
              </h2>
              <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                Rooted directly in Unjha, Gujarat — Asia's premier spice capital — JM Masala combines three generations of mandi trading insight with modern Sortex optical cleaning, temperature-controlled grinding, and standardized export packing.
              </p>
              <p className="text-xs sm:text-sm text-[var(--brand-forest)] leading-relaxed">
                We maintain registered licenses with APEDA, the Spices Board of India, FSSAI, and operate under ISO 22000 and HACCP certified food safety management protocols.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.2)]">
                  <div className="text-[10px] text-gray-500 uppercase font-semibold">Location</div>
                  <div className="text-xs font-bold text-[var(--brand-charcoal)] mt-0.5">Unjha APMC Yard</div>
                </div>
                <div className="p-3 rounded-lg bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.2)]">
                  <div className="text-[10px] text-gray-500 uppercase font-semibold">Port Transit</div>
                  <div className="text-xs font-bold text-[var(--brand-charcoal)] mt-0.5">Mundra Port (4 Hrs)</div>
                </div>
                <div className="p-3 rounded-lg bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.2)]">
                  <div className="text-[10px] text-gray-500 uppercase font-semibold">Certifications</div>
                  <div className="text-xs font-bold text-[var(--brand-charcoal)] mt-0.5">ISO 22000 · HACCP</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about-jm-masala"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-deep-green)] font-bold text-sm shadow-sm transition-all"
                >
                  <span>About JM Masala</span>
                  <ArrowRight className="h-4 w-4 text-[var(--brand-gold-light)]" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            17. FINAL B2B RFQ / INQUIRY FORM
        ══════════════════════════════════════════════════════════════════ */}
        <section id="inquiry-rfq" className="py-20 lg:py-24 bg-gradient-to-b from-[var(--brand-warm-white)] to-[var(--brand-cream)] border-t border-[rgba(201,168,76,0.3)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
                <Send className="h-4 w-4" />
                <span>Direct Commercial Inquiry</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
                Looking for an Indian Spice Supply Partner?
              </h2>
              <p className="text-xs sm:text-sm text-[var(--brand-forest)]">
                Tell us what you need and our team will help evaluate the right product, specification, processing, packaging and shipment solution.
              </p>
            </div>

            <form onSubmit={handleRfqSubmit} className="bg-white rounded-2xl p-6 sm:p-10 border border-[rgba(201,168,76,0.35)] shadow-xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--brand-charcoal)] mb-2">
                    1. Product Required
                  </label>
                  <select
                    value={rfqSpice}
                    onChange={(e) => setRfqSpice(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-xs sm:text-sm text-[var(--brand-charcoal)] font-medium focus:border-[var(--brand-gold)] outline-none"
                  >
                    <option value="Cumin Seeds (Jeera)">Cumin Seeds (Jeera) - Unjha Origin</option>
                    <option value="Coriander Seeds (Dhania)">Coriander Seeds (Dhania) - Eagle / Scooter</option>
                    <option value="Fennel Seeds (Saunf)">Fennel Seeds (Saunf) - Green Bold</option>
                    <option value="Fenugreek Seeds (Methi)">Fenugreek Seeds (Methi) - Sortex Cleaned</option>
                    <option value="Ajwain Seeds (Carom)">Ajwain Seeds (Carom) - Bold Green</option>
                    <option value="Mustard Seeds (Rai)">Mustard Seeds (Black / Yellow)</option>
                    <option value="Turmeric Finger (Haldi)">Turmeric Finger - Salem / Nizamabad</option>
                    <option value="Red Chilli (Lal Mirch)">Whole Red Chilli - Guntur Sannam / Teja</option>
                    <option value="Black Pepper">Tellicherry Black Pepper</option>
                    <option value="Psyllium Husk">Psyllium Husk 99% / 98%</option>
                    <option value="Pure Ground Powder">Ground Powder (Cumin / Turmeric / Chilli)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--brand-charcoal)] mb-2">
                    2. Estimated Order Quantity
                  </label>
                  <select
                    value={rfqQuantity}
                    onChange={(e) => setRfqQuantity(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-xs sm:text-sm text-[var(--brand-charcoal)] font-medium focus:border-[var(--brand-gold)] outline-none"
                  >
                    <option value="Trial / LCL (1 to 5 MT)">Trial / LCL (1 to 5 Metric Tons)</option>
                    <option value="1x 20ft FCL (~14 MT)">1x 20ft FCL Container (~14 Metric Tons)</option>
                    <option value="1x 40ft FCL (~26-28 MT)">1x 40ft FCL Container (~26-28 MT)</option>
                    <option value="Multiple Containers (Monthly)">Multiple Containers (Monthly Contract)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--brand-charcoal)] mb-2">
                    3. Specification / Grade
                  </label>
                  <select
                    value={rfqGrade}
                    onChange={(e) => setRfqGrade(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-xs sm:text-sm text-[var(--brand-charcoal)] font-medium focus:border-[var(--brand-gold)] outline-none"
                  >
                    <option value="Sortex Cleaned 99.5% (Europe Quality)">Sortex Cleaned 99.5% (Europe Quality)</option>
                    <option value="USA Quality (99.0% ASTA Clean)">USA Quality (99.0% ASTA Clean)</option>
                    <option value="Singapore Quality (99.0% Machine Cleaned)">Singapore Quality (99.0% Machine Cleaned)</option>
                    <option value="Gulf Quality (98.0% - 99.0%)">Gulf Quality (98.0% - 99.0%)</option>
                    <option value="Custom Technical Specification">Custom Technical Specification</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--brand-charcoal)] mb-2">
                    4. Packaging Preference
                  </label>
                  <select
                    value={rfqPacking}
                    onChange={(e) => setRfqPacking(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-xs sm:text-sm text-[var(--brand-charcoal)] font-medium focus:border-[var(--brand-gold)] outline-none"
                  >
                    <option value="25kg PP Bags with Inner Liner">25kg PP Bags with Inner Liner</option>
                    <option value="50kg Jute Bags">50kg Traditional Jute Bags</option>
                    <option value="Multi-Wall Paper Bags (25kg)">Multi-Wall Paper Bags (25kg)</option>
                    <option value="Stand-up Zipper Pouches (Retail/Private Label)">Stand-up Zipper Pouches (Retail/Private Label)</option>
                    <option value="Palletized & Shrink-Wrapped (ISPM-15)">Palletized &amp; Shrink-Wrapped (ISPM-15)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--brand-charcoal)] mb-2">
                    5. Discharge Port &amp; Country
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jebel Ali, UAE / Felixstowe, UK / Toronto, Canada"
                    value={rfqDestination}
                    onChange={(e) => setRfqDestination(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-xs sm:text-sm text-[var(--brand-charcoal)] focus:border-[var(--brand-gold)] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--brand-charcoal)] mb-2">
                    6. Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your company / trading entity"
                    value={rfqCompany}
                    onChange={(e) => setRfqCompany(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-xs sm:text-sm text-[var(--brand-charcoal)] focus:border-[var(--brand-gold)] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--brand-charcoal)] mb-2">
                  7. Business Email &amp; WhatsApp
                </label>
                <input
                  type="email"
                  required
                  placeholder="commercial@yourcompany.com"
                  value={rfqEmail}
                  onChange={(e) => setRfqEmail(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 bg-white text-xs sm:text-sm text-[var(--brand-charcoal)] focus:border-[var(--brand-gold)] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--brand-charcoal)] mb-2">
                  8. Technical Requirements / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify target delivery terms (FOB Mundra / CIF), lab testing parameters, or payment terms."
                  value={rfqMessage}
                  onChange={(e) => setRfqMessage(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 bg-white text-xs sm:text-sm text-[var(--brand-charcoal)] focus:border-[var(--brand-gold)] outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--brand-forest)] to-[var(--brand-deep-green)] text-white hover:from-[var(--brand-deep-green)] hover:to-[#10170f] font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4 text-[var(--brand-gold-light)]" />
                  <span>Submit Commercial RFQ via WhatsApp &amp; Email</span>
                </button>
              </div>
            </form>
          </div>
        </section>

      </div>
    </>
  );
};

export default HomePage;
