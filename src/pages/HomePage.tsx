import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  MapPin,
  Package,
  Tag,
  Layers,
  Truck,
  FileText,
  ChevronRight,
  Search,
  Sparkles,
  ShieldCheck,
  Globe2,
  Anchor,
  Clock,
  MessageSquare,
  Award,
  Zap,
  Check,
  ArrowUpRight,
} from "lucide-react";
import Seo from "@/components/Seo";
import {
  BLOG_POSTS,
  COMPANY,
  DOCUMENTATION_PACKAGE,
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
import pouchTurmeric from "@/assets/pouch-turmeric-powder.jpg";
import pouchGingerSlices from "@/assets/pouch-dry-ginger-slices.jpg";
import pouchGingerPowder from "@/assets/pouch-dry-ginger-powder.jpg";
import pouchBayLeaf from "@/assets/pouch-bay-leaf.jpg";
import pouchCardamom from "@/assets/pouch-black-cardamom.jpg";

/* ─────────────────────────── CONSTANTS & DATA ─────────────────────────── */

const STATS = [
  { value: "25+", label: "Years Industry Legacy", sub: "Two generations in Unjha Mandi" },
  { value: "23+", label: "Master Spices & Commodities", sub: "Whole, ground & cold pressed" },
  { value: "30+", label: "Export Destinations", sub: "Across 5 global continents" },
  { value: "500+", label: "B2B Importers & Brands", sub: "Bulk & private-label partners" },
];

/* THE BIG FOUR FLAGSHIP SEED SPICES (UNJHA MANDI CORE) */
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
    powderName: "Pure Cumin Powder",
    fcl20: "13.0 - 14.0 MT",
    fcl40: "26.0 - 28.0 MT",
    headline: "Why Global Spice Importers Source Unjha Cumin from JM Masala",
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
        moisture: "Max 9.0%",
        features: "High Aroma · Bold Seed Size · Ideal for Grinding",
        target: "UAE, Saudi Arabia, Qatar & Oman",
      },
    ],
  },
  {
    id: "coriander",
    tabLabel: "Coriander Seeds (Dhania)",
    name: "Whole Coriander Seeds (Dhania)",
    botanical: "Coriandrum sativum",
    hsCode: "0909 21 90",
    origin: "Gujarat & Rajasthan Mandi",
    tag: "High Export Volume",
    image: corianderSeedsImage,
    slug: "coriander-seeds-exporter-india",
    powderSlug: "coriander-powder-exporter-india",
    powderName: "Pure Coriander Powder",
    fcl20: "10.0 - 11.5 MT",
    fcl40: "21.0 - 23.0 MT",
    headline: "Indian Coriander Seeds — Eagle, Scooter & Single Parrot Grades",
    description:
      "Sourced from prime Gujarat and Kota growing belts, our coriander seeds feature vibrant green-to-golden color, citrusy aroma, and low split percentage (<2%). We offer machine cleaned and double sortex sorted lots for premium retail packaging and spice grinding.",
    keySpecs: "Moisture: <9.0% · Splits: <2.0% · Purity: 99%+ · Volatile Oil: >0.4%",
    grades: [
      {
        name: "Europe Single Parrot (99.5% Sortex)",
        purity: "99.5% Purity",
        moisture: "Max 8.5%",
        features: "Splits <1.5% · Pesticide Residue Tested · High Volatile Oil",
        target: "EU Whole Spice Brands & Herb Packers",
      },
      {
        name: "USA Eagle Quality (99% Clean)",
        purity: "99.0% Purity",
        moisture: "Max 9.0%",
        features: "ASTA Clean · Golden Color · Fresh Season Harvest",
        target: "US Meat Seasoning & Blending Manufacturers",
      },
      {
        name: "Gulf Scooter / Badami Grade",
        purity: "98.0% - 99.0%",
        moisture: "Max 10.0%",
        features: "Uniform Seed Size · Rich Citrus Flavour Profile",
        target: "Middle East Curry Powder & Masala Makers",
      },
      {
        name: "Singapore Commercial Clean",
        purity: "98.5% Purity",
        moisture: "Max 9.5%",
        features: "Machine Cleaned & Sortex · Zero Stems & Stones",
        target: "ASEAN Repackers & Wholesale Traders",
      },
    ],
  },
  {
    id: "fennel",
    tabLabel: "Fennel Seeds (Saunf)",
    name: "Green Fennel Seeds (Saunf)",
    botanical: "Foeniculum vulgare",
    hsCode: "0909 61 39",
    origin: "North Gujarat & Abu Road Mandi",
    tag: "High Aroma Grade",
    image: fennelSeedsImage,
    slug: "fennel-seeds-exporter-india",
    powderSlug: "coriander-powder-exporter-india",
    powderName: "Fennel Ground",
    fcl20: "12.0 - 13.0 MT",
    fcl40: "24.0 - 26.0 MT",
    headline: "Aromatic Indian Fennel Seeds — Abu Road Bold Green Quality",
    description:
      "North Gujarat produces India's highest-sweetness fennel seeds with distinctive anise-like essential oil (1.5%+). Processed through optical sortex cleaners to preserve the natural lush green hue without chemical colorants, ideal for mouth fresheners, tea blending, and bakeries.",
    keySpecs: "Essential Oil: 1.5%+ · Moisture: <8.0% · Bold Green · Sweet Anise Profile",
    grades: [
      {
        name: "Abu Road Extra Bold Green (99.5%)",
        purity: "99.5% Sortex",
        moisture: "Max 8.0%",
        features: "Natural Lush Green · Sweet Anise Flavor · Essential Oil 1.8%+",
        target: "Premium Confectionery & Beverage Importers",
      },
      {
        name: "Europe Grade Sortex (99% Clean)",
        purity: "99.0% Purity",
        moisture: "Max 8.5%",
        features: "Low Admixture (<0.8%) · Lab Tested for Pesticides & ETO",
        target: "EU Herbal Tea & Bakery Distributors",
      },
      {
        name: "USA ASTA Cleaned",
        purity: "99.0% ASTA",
        moisture: "Max 8.5%",
        features: "Microbiologically Screened · Uniform Seed Size",
        target: "North American Food Processors & Spice Mills",
      },
      {
        name: "Gulf & Singapore Commercial Grade",
        purity: "98.0% - 99.0%",
        moisture: "Max 9.0%",
        features: "Medium Bold Greenish Seeds · High Aroma Retention",
        target: "Mukhwas Manufacturers & Asian Groceries",
      },
    ],
  },
  {
    id: "fenugreek",
    tabLabel: "Fenugreek Seeds (Methi)",
    name: "Golden Fenugreek Seeds (Methi)",
    botanical: "Trigonella foenum-graecum",
    hsCode: "0910 99 12",
    origin: "Gujarat & Rajasthan Mandi",
    tag: "High Saponin Potency",
    image: fenugreekSeedsImage,
    slug: "fenugreek-seeds-exporter-india",
    powderSlug: "fenugreek-powder-exporter-india",
    powderName: "Pure Fenugreek Powder",
    fcl20: "18.0 - 20.0 MT",
    fcl40: "26.0 - 28.0 MT",
    headline: "Indian Fenugreek Seeds — High Saponin & Pure Sortex Cleaned",
    description:
      "Gujarat fenugreek seeds are world-renowned for high trigonelline and steroid saponin content, making them a dual-purpose commodity for international spice blenders and nutraceutical extractors. Our Sortex processing ensures zero soil, stones, or weed seeds.",
    keySpecs: "Purity: 99.0% Sortex · Moisture: <10.0% · Bold Golden Yellow · Saponin Rich",
    grades: [
      {
        name: "Europe Nutraceutical Grade (99.5%)",
        purity: "99.5% Sortex",
        moisture: "Max 9.0%",
        features: "High Saponin · Double Sortex · Heavy Metal & Pesticide Tested",
        target: "Pharma, Nutraceutical & Extract Manufacturers",
      },
      {
        name: "USA ASTA Clean (99.0%)",
        purity: "99.0% ASTA",
        moisture: "Max 9.0%",
        features: "Steam Treated Option · Low Foreign Matter (<0.8%)",
        target: "US Dietary Supplement & Seasoning Companies",
      },
      {
        name: "Gulf Pickling & Masala Grade",
        purity: "98.0% - 99.0%",
        moisture: "Max 10.0%",
        features: "Bold Golden Yellow Seeds · Intense Bitter-Sweet Aroma",
        target: "Middle East Pickle Factories & Spice Mills",
      },
      {
        name: "Singapore Commercial Grade",
        purity: "98.5% Purity",
        moisture: "Max 9.5%",
        features: "Semi-bold & Bold Uniform Lots · Free from Live Insects",
        target: "Southeast Asia Importers & Food Service",
      },
    ],
  },
];

const STAR_SLUGS = [
  "cumin-seeds-exporter-india",
  "coriander-seeds-exporter-india",
  "fennel-seeds-exporter-india",
  "fenugreek-seeds-exporter-india",
  "turmeric-exporter-india",
  "red-chilli-exporter-india",
  "cumin-powder-exporter-india",
  "psyllium-husk-exporter-india",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Direct Mandi & Farm Sourcing",
    description:
      "Direct procurement from Unjha APMC market yard and dedicated farmer networks across Gujarat and southern spice growing belts.",
    icon: "🌾",
    detail: "Zero intermediary markups",
  },
  {
    step: "02",
    title: "Optical Sortex Cleaning",
    description:
      "Multi-stage mechanical pre-cleaning, de-stoning, gravity separation, and high-speed optical sortex sorting up to 99.9% purity.",
    icon: "⚙️",
    detail: "State-of-the-art grading",
  },
  {
    step: "03",
    title: "Lab Testing & Microbiological QA",
    description:
      "Strict in-house and NABL-accredited third-party testing for moisture, volatile oil content, pesticide residue, ETO, and microbial compliance.",
    icon: "🔬",
    detail: "COA with every shipment",
  },
  {
    step: "04",
    title: "Custom Packaging & Private Label",
    description:
      "Flexible packing from 100g shelf-ready zipper pouches and PET jars to 25kg/50kg multi-ply paper or PP export sacks.",
    icon: "📦",
    detail: "Barcode & nutritional print",
  },
  {
    step: "05",
    title: "Complete Export Documentation",
    description:
      "Issuance of Certificate of Origin, Phytosanitary inspection, Fumigation certificate, APEDA documentation, and LC compliance.",
    icon: "📋",
    detail: "100% customs clearance guarantee",
  },
  {
    step: "06",
    title: "Container Dispatch via Mundra Port",
    description:
      "Direct container stuffing just ~300km from Mundra and Kandla ports, delivering prompt ocean transit to Middle East, Europe, and Americas.",
    icon: "🚢",
    detail: "FOB Mundra or CIF terms",
  },
];

const RETAIL_POUCH_PRODUCTS = [
  {
    id: "turmeric",
    tab: "Turmeric Powder",
    name: "Turmeric Powder (Rajapuri)",
    cataloguePage: "Catalogue Page 15",
    category: "Pure Ground Spice",
    weights: "100g, 200g, 500g, 1kg, 5kg, 10kg, 25kg",
    image: pouchTurmeric,
    form: "Deep Golden Yellow Ground Powder",
    features: ["Cleaned & Graded", "Natural Colour", "Rich Aroma", "No Additives", "Non-GMO"],
    specs: "Curcumin: 2.5% - 5.0% · Mesh: 80 - 100 · Moisture: ≤10% · Shelf Life: 12-24M",
    applications: "Curries, gravies, seasonings, nutraceuticals, ready-to-eat foods",
  },
  {
    id: "ginger-slices",
    tab: "Dry Ginger Slices",
    name: "Dry Ginger Slices",
    cataloguePage: "Catalogue Page 18",
    category: "Whole Dehydrated Slices",
    weights: "500g, 5kg, 10kg, 25kg, 50kg",
    image: pouchGingerSlices,
    form: "Sun-Dried Ginger Slices (2 - 10 mm)",
    features: ["Cleaned & Graded", "Natural Product", "Rich Aroma", "No Additives", "Non-GMO"],
    specs: "Moisture: ≤12% · Foreign Matter: <0.5% · Admixture: <1.0% · High Pungency",
    applications: "Spice blends, herbal teas, confectionery, pickles & chutneys",
  },
  {
    id: "ginger-powder",
    tab: "Dry Ginger Powder",
    name: "Dry Ginger Powder",
    cataloguePage: "Catalogue Page 17",
    category: "Pure Ground Spice",
    weights: "100g, 200g, 500g, 1kg, 5kg, 10kg, 25kg",
    image: pouchGingerPowder,
    form: "Fine Ground Zingiber officinale Powder",
    features: ["Cleaned & Graded", "Natural Product", "Fine Grind", "No Additives", "Non-GMO"],
    specs: "Particle Size: 80 - 100 Mesh · Moisture: ≤12% · High Natural Gingerol",
    applications: "Bakery, curries, nutraceutical products, health tea & beverages",
  },
  {
    id: "bay-leaf",
    tab: "Bay Leaf (Tej Patta)",
    name: "Bay Leaf (Tej Patta)",
    cataloguePage: "Catalogue Page 21",
    category: "Whole Dried Leaves",
    weights: "500g, 1kg, 5kg, 10kg, 25kg, 50kg",
    image: pouchBayLeaf,
    form: "Whole Selected Leaves (8 - 18 cm)",
    features: ["Cleaned & Graded", "Natural Product", "Premium Quality", "No Additives", "Non-GMO"],
    specs: "Moisture: 8 - 10% · Essential Oil: 1.5% - 2.5% · Grade A Whole Leaves",
    applications: "Rice & biryani, soups & broths, spice blends, essential oil extraction",
  },
  {
    id: "black-cardamom",
    tab: "Black Cardamom",
    name: "Black Cardamom (Large Cardamom)",
    cataloguePage: "Catalogue Page 22",
    category: "Whole Aromatic Pods",
    weights: "500g, 1kg, 5kg, 10kg, 25kg, 50kg",
    image: pouchCardamom,
    form: "Bold Uniform Capsules (Dark Brown)",
    features: ["Cleaned & Graded", "Natural Product", "Rich Aroma", "No Additives", "Non-GMO"],
    specs: "Moisture: 8 - 10% · Volatile Oil: ~2.0% · Essential Oil: ~1.5%",
    applications: "Curries, spice blends, meat seasoning, herbal products",
  },
];

const SERVICES = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Private Label & Contract Packing",
    description:
      "Launch or expand your own spice brand with zero manufacturing overhead. We supply retail shelf-ready bags, jars, and cartons customized with your barcode, branding, and local regulatory requirements.",
    highlights: [
      "Stand-up pouches with zip lock (100g to 1kg)",
      "Food-grade PET jars and tins with shaker caps",
      "Retail-ready inner display cartons",
      "Full multilingual regulatory text & nutrition labels",
    ],
    link: "/private-label-spices",
    linkText: "Explore Private Label Program",
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Custom Export Packaging",
    description:
      "Engineered packaging designed for long ocean freight voyages. We eliminate moisture ingress and preserve volatile aromatic oils across all transit climates.",
    highlights: [
      "25 kg & 50 kg PP woven bags with inner liners",
      "Multi-wall kraft paper bags (food-grade)",
      "Traditional heavy-duty jute bags",
      "Palletized and stretch-wrapped container loading",
    ],
    link: "/spice-packaging",
    linkText: "View Packaging Solutions",
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Bulk Container Logistics",
    description:
      "Full container loads (FCL 20ft & 40ft) and consolidated LCL shipments dispatched on FOB Mundra, CIF, or CFR terms with real-time tracking.",
    highlights: [
      "13 to 20 MT capacity depending on product",
      "Direct container stuffing at Unjha facility",
      "Proximity to Mundra Port (~300 km)",
      "Pre-shipment fumigation & seal verification",
    ],
    link: "/contact?intent=quote#inquiry-form",
    linkText: "Request Container Freight Rates",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "End-to-End Export Compliance",
    description:
      "We eliminate import clearance delays by delivering accurate, pre-verified international trade documentation tailored to your national customs authority.",
    highlights: [
      "Certificate of Analysis (COA) per lot",
      "Government Phytosanitary Inspection Certificate",
      "Phosphine / Methyl Bromide Fumigation",
      "Spice Board RCMC & APEDA verification",
    ],
    link: "/quality-certifications",
    linkText: "Check Compliance Standards",
  },
];

const EXPORT_DESTINATIONS = [
  {
    region: "Middle East & GCC",
    transit: "3 - 5 Days Sailing",
    countries: ["UAE (Jebel Ali)", "Saudi Arabia (Jeddah/Dammam)", "Kuwait", "Qatar", "Oman", "Bahrain"],
  },
  {
    region: "Southeast Asia",
    transit: "8 - 12 Days Sailing",
    countries: ["Singapore", "Malaysia (Port Klang)", "Indonesia", "Vietnam", "Thailand"],
  },
  {
    region: "Europe & UK",
    transit: "18 - 24 Days Sailing",
    countries: ["United Kingdom", "Germany (Hamburg)", "Netherlands (Rotterdam)", "France", "Spain", "Poland"],
  },
  {
    region: "Americas",
    transit: "24 - 32 Days Sailing",
    countries: ["USA (New York/Savannah/LA)", "Canada (Montreal/Vancouver)", "Mexico", "Brazil"],
  },
  {
    region: "Africa & Oceania",
    transit: "14 - 22 Days Sailing",
    countries: ["South Africa (Durban)", "Kenya (Mombasa)", "Australia (Melbourne/Sydney)", "New Zealand"],
  },
];

const HOME_FAQS = [
  {
    question: "Why is sourcing spices directly from Unjha, Gujarat a major competitive advantage?",
    answer:
      "Unjha is recognized as the world's largest commercial hub for cumin, fennel, coriander, and fenugreek seeds. Sourcing directly from JM Masala in Unjha gives international buyers fresh mandi arrivals, eliminates multi-tier trading markups, enables strict Sortex grading at origin, and ensures shorter transit to Mundra Port.",
  },
  {
    question: "Can JM Masala supply custom retail packaging and private-label spice lines?",
    answer:
      "Yes. We support global supermarket chains, spice brands, and distributors with turn-key private label manufacturing. This includes stand-up pouches with zipper, food-grade PET jars, custom artwork printing, multilingual regulatory labeling, barcode compliance, and Master Shipper cartons.",
  },
  {
    question: "What are the standard container capacities (FCL) for spice shipments?",
    answer:
      "For whole cumin, coriander, and fennel seeds, a standard 20ft container accommodates approximately 10 to 14 metric tonnes depending on seed density. For fenugreek and psyllium seeds, capacity reaches 18 to 20 MT per 20ft container. In 40ft High Cube containers, whole seed shipments reach 24 to 28 metric tonnes.",
  },
  {
    question: "What export certificates and laboratory testing are provided with each order?",
    answer:
      "Every export consignment is accompanied by a comprehensive document package: Certificate of Analysis (COA) specifying purity, moisture, and volatile oil; Government Phytosanitary Certificate; Fumigation Certificate; Certificate of Origin; Commercial Invoice; Packing List; and Bill of Lading (or BL draft for approval).",
  },
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

const HomePage = () => {
  const [activeHeroSpice, setActiveHeroSpice] = useState(0);
  const [activeFlagshipTab, setActiveFlagshipTab] = useState(0);
  const [activePouch, setActivePouch] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("star");
  const [searchQuery, setSearchQuery] = useState("");

  // Interactive RFQ Calculator State
  const [rfqSpice, setRfqSpice] = useState("Cumin Seeds (Jeera)");
  const [rfqGrade, setRfqGrade] = useState("Europe Quality 99.5% Sortex");
  const [rfqPacking, setRfqPacking] = useState("25kg PP Export Bags");
  const [rfqVolume, setRfqVolume] = useState("1x 20ft FCL (~13-14 MT)");
  const [rfqPort, setRfqPort] = useState("FOB Mundra Port");

  const currentHeroSpice = CORE_FOUR_SPICES[activeHeroSpice];
  const currentFlagship = CORE_FOUR_SPICES[activeFlagshipTab];
  const currentPouch = RETAIL_POUCH_PRODUCTS[activePouch];

  // Filtered Products Logic
  const filteredProducts = PRODUCTS.filter((p) => {
    // Search match
    if (
      searchQuery.trim() !== "" &&
      !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.botanicalName.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (activeCategory === "star") {
      return STAR_SLUGS.includes(p.slug);
    }
    if (activeCategory === "whole") {
      return p.category === "whole" || p.category === "north" || p.category === "south";
    }
    if (activeCategory === "powders") {
      return p.category === "powders";
    }
    if (activeCategory === "agro") {
      return p.category === "agro";
    }
    return true;
  });

  const rfqWhatsAppMessage = `Hi JM Masala Export Team, I am requesting a commercial quotation for:
• Product: ${rfqSpice}
• Grade / Purity: ${rfqGrade}
• Required Volume: ${rfqVolume}
• Packing Preference: ${rfqPacking}
• Delivery Terms: ${rfqPort}
Please share current FOB/CIF pricing and COA technical specification.`;

  return (
    <>
      <Seo
        title="JM Masala | Indian Spices Manufacturer, Processor & Exporter"
        description="JM Masala Trading LLP is a premier Indian spices manufacturer, processor and exporter based in Unjha, Gujarat. Sourcing and processing Sortex cumin seeds, coriander, fennel, fenugreek, turmeric, ground powders, and private-label packaging worldwide."
        path=""
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "JM Masala Trading LLP",
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            description:
              "Indian Spices Manufacturer, Processor & Global Exporter of Sortex Cumin Seeds, Coriander, Fennel, Fenugreek, Turmeric, Powders, and Private-Label Products.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Unjha",
              addressRegion: "Gujarat",
              addressCountry: "India",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOME_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]}
      />

      <style>{`
        .jm-home {
          font-family: var(--font-body);
          color: var(--brand-charcoal);
        }

        .jm-display {
          font-family: var(--font-display);
        }

        .jm-hero-gradient {
          background: linear-gradient(135deg, rgba(26, 46, 26, 0.96) 0%, rgba(45, 74, 45, 0.88) 52%, rgba(16, 23, 15, 0.95) 100%);
        }

        .jm-gold-text {
          background: linear-gradient(135deg, #e2c97e 0%, #c9a84c 60%, #fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Glassmorphism Cards */
        .jm-glass-dark {
          background: rgba(26, 46, 26, 0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(201, 168, 76, 0.3);
        }

        /* Tab Pills */
        .jm-tab-btn {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .jm-tab-btn.active {
          background: linear-gradient(135deg, var(--brand-gold), var(--brand-gold-light));
          color: var(--brand-deep-green);
          font-weight: 700;
          box-shadow: 0 4px 14px rgba(201, 168, 76, 0.3);
        }

        /* Product Card Animation */
        .jm-card-lift {
          transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.28s;
        }
        .jm-card-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px -10px rgba(26, 46, 26, 0.16);
          border-color: rgba(201, 168, 76, 0.6);
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .jm-float {
          animation: floatSlow 4s ease-in-out infinite;
        }
      `}</style>

      <div className="jm-home bg-[var(--brand-warm-white)]">
        {/* ══════════════════════════════════════════════════════════════════
            1. HERO SECTION WITH CORE FOUR SPOTLIGHT
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
              
              {/* Left Column: Authority & Direct CTA */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(201,168,76,0.16)] border border-[rgba(201,168,76,0.4)] text-[var(--brand-gold-light)] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--brand-gold)] animate-pulse" />
                  <span>Unjha Mandi Origin · ISO 22000 &amp; HACCP Certified</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] jm-display">
                  Premium Indian Spices &amp; Agro Produce —{" "}
                  <span className="jm-gold-text italic block sm:inline">Direct from Origin</span>
                </h1>

                <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                  <strong>JM Masala Trading LLP</strong> is an integrated Indian spice manufacturer, processor, and exporter based in Unjha, Gujarat. Leading processors of <strong>Cumin, Coriander, Fennel, and Fenugreek</strong>, along with pure ground powders and agro commodities for importers across 30+ countries.
                </p>

                {/* Core Capability Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/90 text-xs">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-gold)] shrink-0" />
                    <span>99.5%+ Sortex Purity</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/90 text-xs">
                    <Truck className="h-4 w-4 text-[var(--brand-gold)] shrink-0" />
                    <span>FCL &amp; LCL Shipments</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/90 text-xs">
                    <Package className="h-4 w-4 text-[var(--brand-gold)] shrink-0" />
                    <span>Private Label Packs</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/90 text-xs">
                    <Anchor className="h-4 w-4 text-[var(--brand-gold)] shrink-0" />
                    <span>Mundra Port Dispatch</span>
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-3">
                  <Link
                    to="/contact?intent=quote#inquiry-form"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-light)] text-[var(--brand-deep-green)] font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-[rgba(201,168,76,0.35)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Request Commercial Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href="#core-four"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold text-sm sm:text-base transition-all duration-200"
                  >
                    <span>Core 4 Flagships</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>

                  <a
                    href="/JMMasalaProducts.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[rgba(201,168,76,0.5)] text-[var(--brand-gold-light)] hover:bg-[rgba(201,168,76,0.12)] font-semibold text-sm transition-all duration-200"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Catalogue (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Product Spotlight Showcase */}
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
                        className={`py-1.5 px-1 text-center rounded-lg text-xs transition-all ${
                          activeHeroSpice === idx
                            ? "bg-[var(--brand-gold)] text-[var(--brand-deep-green)] font-bold shadow-md"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {sp.tabLabel.split(" ")[0]}
                      </button>
                    ))}
                  </div>

                  {/* Active Product Visual & Specs */}
                  <div className="text-center">
                    <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center mb-4">
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.3)_0%,transparent_70%)]" />
                      
                      <img
                        src={currentHeroSpice.image}
                        alt={currentHeroSpice.name}
                        className="relative max-h-full max-w-full object-contain jm-float drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
                      />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-white jm-display mb-1">
                      {currentHeroSpice.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--brand-gold-light)] italic mb-3">
                      {currentHeroSpice.botanical} · {currentHeroSpice.origin}
                    </p>

                    <div className="bg-black/40 rounded-xl p-3 border border-white/10 text-left mb-4">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-white/60">Export Quality Target:</span>
                        <span className="text-[var(--brand-gold)] font-semibold">{currentHeroSpice.grades[0].name.split("(")[0]}</span>
                      </div>
                      <div className="text-xs text-emerald-100/90 font-mono">
                        {currentHeroSpice.keySpecs}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/${currentHeroSpice.slug}`}
                        className="flex-1 py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors border border-white/20 flex items-center justify-center gap-1.5"
                      >
                        <span>Full Specifications</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href={buildWhatsAppUrl(
                          `Hi JM Masala, I would like current export pricing and lot availability for ${currentHeroSpice.name}.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>Quick RFQ</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            2. TRUST BAR & CERTIFICATION RIBBON
        ══════════════════════════════════════════════════════════════════ */}
        <div className="bg-[var(--brand-forest)] text-white py-3.5 border-y border-[rgba(201,168,76,0.3)] shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-y-2 gap-x-6 text-xs sm:text-sm font-medium">
              {[
                "HACCP Certified",
                "ISO 22000:2018",
                "APEDA Registered",
                "Spice Board RCMC",
                "FSSAI Licensed",
                "IEC Registered",
                "Mundra Port Dispatch",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-white/90">
                  <ShieldCheck className="h-4 w-4 text-[var(--brand-gold)]" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            3. KEY OPERATIONAL METRICS (STATS)
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-12 border-b border-[var(--brand-gold-pale)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-6 rounded-2xl bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.25)] hover:border-[var(--brand-gold)] transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-forest)] jm-display mb-1">
                    {s.value}
                  </div>
                  <div className="text-sm font-bold text-[var(--brand-charcoal)] mb-0.5">
                    {s.label}
                  </div>
                  <div className="text-xs text-[var(--brand-sage)]">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            4. THE BIG FOUR INDIAN SEED SPICES SPOTLIGHT (UNJHA CORE)
        ══════════════════════════════════════════════════════════════════ */}
        <section id="core-four" className="py-20 lg:py-24 bg-white border-b border-[var(--brand-gold-pale)] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)] mb-2">
                <Award className="h-4 w-4" />
                <span>Unjha APMC Mandi Flagships</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-charcoal)] jm-display mb-4">
                The Big Four Indian Seed Spices
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-light)] rounded mb-4" />
              <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                Directly sourced from farm gates and Unjha's premier APMC trading yard. We specialize in <strong>Cumin, Coriander, Fennel, and Fenugreek</strong> — machine cleaned, double sortex graded, and lab-certified for global food manufacturers and spice brands.
              </p>
            </div>

            {/* Interactive 4-Tab Switcher */}
            <div className="flex flex-wrap gap-2 sm:gap-3 p-1.5 bg-[var(--brand-cream)] rounded-2xl border border-[rgba(201,168,76,0.3)] mb-10">
              {CORE_FOUR_SPICES.map((sp, idx) => (
                <button
                  key={sp.id}
                  onClick={() => setActiveFlagshipTab(idx)}
                  className={`flex-1 min-w-[140px] sm:min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                    activeFlagshipTab === idx
                      ? "bg-[var(--brand-forest)] text-white shadow-lg"
                      : "text-[var(--brand-charcoal)] hover:bg-white/80"
                  }`}
                >
                  {sp.tabLabel}
                </button>
              ))}
            </div>

            {/* Dynamic Spotlight Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[var(--brand-cream)] rounded-3xl p-6 sm:p-10 border border-[rgba(201,168,76,0.35)] shadow-xl">
              
              {/* Left Column: Visual Product Box */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-2xl p-6 sm:p-8 bg-white border border-[rgba(201,168,76,0.3)] text-center shadow-md overflow-hidden">
                  <div className="absolute top-4 right-4 bg-[var(--brand-forest)] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    {currentFlagship.tag}
                  </div>
                  
                  <img
                    src={currentFlagship.image}
                    alt={`${currentFlagship.name} Exporter from India`}
                    className="w-52 h-52 sm:w-60 sm:h-60 mx-auto object-contain drop-shadow-xl mb-4 jm-float"
                  />
                  
                  <h3 className="text-2xl font-bold text-[var(--brand-charcoal)] jm-display">
                    {currentFlagship.name}
                  </h3>
                  <p className="text-xs text-[var(--brand-sage)] italic mb-4">
                    {currentFlagship.botanical} · HS: {currentFlagship.hsCode}
                  </p>

                  {/* FCL Capacity Callout */}
                  <div className="grid grid-cols-2 gap-2 text-left bg-[var(--brand-cream)] p-3 rounded-xl border border-[rgba(201,168,76,0.3)] text-xs">
                    <div>
                      <span className="text-gray-500 block text-[10px]">20ft FCL Container:</span>
                      <strong className="text-[var(--brand-forest)] font-mono">{currentFlagship.fcl20}</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block text-[10px]">40ft FCL Container:</span>
                      <strong className="text-[var(--brand-forest)] font-mono">{currentFlagship.fcl40}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/${currentFlagship.slug}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-[var(--brand-forest)] text-white text-center font-bold text-xs sm:text-sm hover:bg-[var(--brand-deep-green)] transition-colors shadow-md"
                  >
                    View {currentFlagship.tabLabel.split(" ")[0]} Specs
                  </Link>
                  <Link
                    to={`/${currentFlagship.powderSlug}`}
                    className="py-3 px-4 rounded-xl border border-[var(--brand-forest)] text-[var(--brand-forest)] text-center font-bold text-xs sm:text-sm hover:bg-white transition-colors"
                  >
                    {currentFlagship.powderName}
                  </Link>
                </div>
              </div>

              {/* Right Column: Global Market Quality Grades */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Calibrated Export Standards</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--brand-charcoal)] jm-display leading-tight">
                  {currentFlagship.headline}
                </h3>
                
                <p className="text-xs sm:text-sm text-[var(--brand-forest)] leading-relaxed">
                  {currentFlagship.description}
                </p>

                {/* 4 Quality Grades Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {currentFlagship.grades.map((g) => (
                    <div
                      key={g.name}
                      className="p-4 rounded-xl bg-white border border-[rgba(201,168,76,0.3)] hover:border-[var(--brand-gold)] transition-colors shadow-sm"
                    >
                      <div className="font-bold text-sm text-[var(--brand-charcoal)] mb-1">
                        {g.name}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[var(--brand-forest)] font-mono mb-1.5">
                        <span>Purity: {g.purity}</span>
                        <span>•</span>
                        <span>{g.moisture}</span>
                      </div>
                      <p className="text-xs text-[var(--brand-sage)] mb-2">
                        {g.features}
                      </p>
                      <div className="text-[11px] font-semibold text-[var(--brand-gold)]">
                        Buyer: {g.target}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[rgba(201,168,76,0.2)]">
                  <span className="text-xs text-gray-600">
                    Need customized admixture, moisture, or private label packing?
                  </span>
                  <a
                    href={buildWhatsAppUrl(
                      `Hi JM Masala, I would like to inquire about specifications and commercial rates for ${currentFlagship.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-forest)] hover:text-[var(--brand-gold)] transition-colors"
                  >
                    <span>Request Custom Quote on WhatsApp</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            5. MASTER PRODUCT SHOWCASE (ALL PRODUCTS ACCESSIBLE)
        ══════════════════════════════════════════════════════════════════ */}
        <section id="product-showcase" className="py-20 lg:py-28 bg-[var(--brand-warm-white)] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)] mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Full Product Catalog</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-charcoal)] jm-display mb-4">
                Whole Spices, Pure Powders &amp; Agro Commodities
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-light)] rounded mb-4" />
              <p className="text-base text-[var(--brand-forest)] leading-relaxed">
                Directly sourced from Unjha APMC mandi and premier Indian spice belts. Graded with multi-deck vibro-separators and optical sortex technology to guarantee zero foreign matter and maximum essential oil retention.
              </p>
            </div>

            {/* Interactive Filter Tabs & Search Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[rgba(201,168,76,0.3)]">
              
              {/* Category Buttons */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "star", label: "★ Star Flagships" },
                  { id: "whole", label: "Whole Spices (Sortex)" },
                  { id: "powders", label: "Pure Ground Powders" },
                  { id: "agro", label: "Agro & Psyllium" },
                  { id: "all", label: "All 23+ Products" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`jm-tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      activeCategory === tab.id
                        ? "active"
                        : "bg-white text-[var(--brand-forest)] hover:bg-[var(--brand-gold-pale)] border border-[rgba(201,168,76,0.25)]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Live Search */}
              <div className="relative min-w-[260px] sm:min-w-[300px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--brand-sage)]" />
                <input
                  type="text"
                  placeholder="Search spice by name (e.g. Cumin, Coriander, Turmeric...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-[rgba(201,168,76,0.3)] text-xs sm:text-sm text-[var(--brand-charcoal)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--brand-gold)] shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700"
                  >
                    Clear
                  </button>
                )}
              </div>

            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-[var(--brand-gold-pale)] p-8">
                <p className="text-base text-[var(--brand-forest)] mb-4">
                  No products found matching "{searchQuery}".
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[var(--brand-forest)] text-white text-xs font-semibold"
                >
                  Reset Product Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <article
                    key={product.slug}
                    className="jm-card-lift bg-white rounded-2xl border border-[rgba(201,168,76,0.25)] overflow-hidden flex flex-col justify-between shadow-sm group"
                  >
                    <div>
                      {/* Image Area */}
                      <div className="relative h-48 bg-gradient-to-b from-[var(--brand-cream)] to-[var(--brand-warm-white)] p-4 flex items-center justify-center overflow-hidden border-b border-[var(--brand-gold-pale)]">
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm border border-[rgba(201,168,76,0.4)] text-[10px] font-semibold text-[var(--brand-forest)]">
                            <MapPin className="h-2.5 w-2.5 text-[var(--brand-gold)]" />
                            {product.origin.split(",")[0]}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3 z-10">
                          <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[var(--brand-forest)] text-white">
                            {product.category}
                          </span>
                        </div>

                        <img
                          src={product.imageUrl}
                          alt={`${product.name} Exporter from India`}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      {/* Content Area */}
                      <div className="p-5">
                        <div className="text-[11px] text-[var(--brand-sage)] font-serif italic mb-1">
                          {product.botanicalName}
                        </div>
                        <h3 className="text-base font-bold text-[var(--brand-charcoal)] jm-display group-hover:text-[var(--brand-forest)] transition-colors mb-2 line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-xs text-[var(--brand-forest)] leading-relaxed mb-3 line-clamp-2">
                          {product.shortDescription}
                        </p>

                        <div className="bg-[var(--brand-cream)] rounded-lg p-2.5 border border-[rgba(201,168,76,0.2)] text-[11px] font-mono text-[var(--brand-charcoal)] mb-4">
                          <span className="text-[var(--brand-gold)] font-bold">Spec:</span> {product.keySpec}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="px-5 pb-5 pt-0 flex items-center justify-between gap-2 border-t border-[var(--brand-gold-pale)] pt-3 mt-auto">
                      <Link
                        to={`/${product.slug}`}
                        className="text-xs font-bold text-[var(--brand-forest)] hover:text-[var(--brand-gold)] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Specifications</span>
                        <ChevronRight className="h-3 w-3" />
                      </Link>

                      <a
                        href={buildWhatsAppUrl(
                          `Hi JM Masala, I would like to inquire about specifications and pricing for ${product.name}.`
                        )}
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
            )}

            {/* Cold Pressed Oils Banner (White in Color) */}
            <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(201,168,76,0.35)] text-[var(--brand-charcoal)] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                  Virgin Cold Pressed Oils Available
                </div>
                <h3 className="text-xl sm:text-2xl font-bold jm-display text-[var(--brand-charcoal)]">
                  Looking for Wood Pressed Cooking Oils &amp; Seeds?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--brand-forest)] max-w-xl leading-relaxed">
                  We also process and export 100% natural, chemical-free cold pressed groundnut, sesame, and mustard oils for retail and bulk distribution.
                </p>
              </div>
              <Link
                to="/cold-pressed-oils"
                className="shrink-0 px-6 py-3 rounded-xl bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-deep-green)] font-bold text-xs sm:text-sm transition-colors shadow-sm flex items-center gap-2"
              >
                <span>Explore Cold Pressed Oils</span>
                <ArrowRight className="h-4 w-4 text-[var(--brand-gold-light)]" />
              </Link>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            6. INTERACTIVE B2B RFQ / QUOTE CALCULATOR WIDGET
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-[var(--brand-warm-white)] to-[var(--brand-cream)] border-b border-[var(--brand-gold-pale)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)] mb-2">
                <Zap className="h-4 w-4" />
                <span>Instant Commercial Quotation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display mb-3">
                Build Your Commercial RFQ in Seconds
              </h2>
              <p className="text-xs sm:text-sm text-[var(--brand-forest)]">
                Select your required spice variety, export grade, container volume, and packing preference. Our export desk will confirm FOB/CIF rates within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[rgba(201,168,76,0.35)] shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                
                {/* 1. Select Spice */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)] mb-2">
                    1. Select Commodity / Spice
                  </label>
                  <select
                    value={rfqSpice}
                    onChange={(e) => setRfqSpice(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm text-[var(--brand-charcoal)] font-medium focus:border-[var(--brand-gold)] focus:ring-1 focus:ring-[var(--brand-gold)] outline-none"
                  >
                    <option value="Cumin Seeds (Jeera)">Cumin Seeds (Jeera) - Unjha Origin</option>
                    <option value="Coriander Seeds (Dhania)">Coriander Seeds (Dhania) - Eagle / Scooter</option>
                    <option value="Fennel Seeds (Saunf)">Fennel Seeds (Saunf) - Green Bold</option>
                    <option value="Fenugreek Seeds (Methi)">Fenugreek Seeds (Methi) - Sortex Cleaned</option>
                    <option value="Turmeric Finger (Haldi)">Turmeric Finger - Salem / Nizamabad</option>
                    <option value="Ajwain Seeds (Carom)">Ajwain Seeds (Carom) - Bold Green</option>
                    <option value="Mustard Seeds (Rai)">Mustard Seeds (Black / Yellow)</option>
                    <option value="Psyllium Husk (Isabgol)">Psyllium Husk 99% / 98% Purity</option>
                    <option value="Cumin Powder">Pure Cumin Powder (Cryogenic Ground)</option>
                    <option value="Turmeric Powder">Pure Turmeric Powder (High Curcumin)</option>
                    <option value="Red Chilli Powder">Red Chilli Powder (Stemless)</option>
                    <option value="Cold Pressed Oils">Virgin Cold Pressed Cooking Oils</option>
                  </select>
                </div>

                {/* 2. Select Quality Grade */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)] mb-2">
                    2. Desired Quality Grade / Purity
                  </label>
                  <select
                    value={rfqGrade}
                    onChange={(e) => setRfqGrade(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm text-[var(--brand-charcoal)] font-medium focus:border-[var(--brand-gold)] focus:ring-1 focus:ring-[var(--brand-gold)] outline-none"
                  >
                    <option value="Europe Quality 99.5% Sortex">Europe Quality (99.5% Sortex, ETO Tested)</option>
                    <option value="USA Quality (ASTA Graded)">USA Quality (ASTA Graded &amp; Cleaned)</option>
                    <option value="Singapore Quality (99.0% Clean)">Singapore Quality (99.0% Machine Cleaned)</option>
                    <option value="Gulf / Middle East Grade (98-99%)">Gulf / Middle East Commercial Grade (98%-99%)</option>
                    <option value="Standard Machine Cleaned (98%)">Standard Machine Cleaned (98% Purity)</option>
                  </select>
                </div>

                {/* 3. Select Volume */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)] mb-2">
                    3. Required Order Volume
                  </label>
                  <select
                    value={rfqVolume}
                    onChange={(e) => setRfqVolume(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm text-[var(--brand-charcoal)] font-medium focus:border-[var(--brand-gold)] focus:ring-1 focus:ring-[var(--brand-gold)] outline-none"
                  >
                    <option value="1x 20ft FCL (~13-14 MT)">1x 20ft Container (FCL ~10 to 14 MT)</option>
                    <option value="1x 40ft FCL (~26-28 MT)">1x 40ft Container (FCL ~24 to 28 MT)</option>
                    <option value="Multiple Containers (50+ MT)">Multiple Containers (50+ Metric Tonnes)</option>
                    <option value="LCL Consolidation (3 to 8 MT)">LCL Partial Container (3 to 8 MT)</option>
                    <option value="Sample Order (100kg to 1 MT)">Commercial Sample Lot (100kg to 1 MT)</option>
                  </select>
                </div>

                {/* 4. Select Packaging */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)] mb-2">
                    4. Export Packaging Format
                  </label>
                  <select
                    value={rfqPacking}
                    onChange={(e) => setRfqPacking(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm text-[var(--brand-charcoal)] font-medium focus:border-[var(--brand-gold)] focus:ring-1 focus:ring-[var(--brand-gold)] outline-none"
                  >
                    <option value="25kg PP Export Bags">25 kg PP Woven Export Bags with Liner</option>
                    <option value="50kg PP Export Bags">50 kg PP Woven Export Bags</option>
                    <option value="25kg Multi-wall Paper Bags">25 kg Multi-wall Kraft Paper Bags</option>
                    <option value="50kg Jute Bags">50 kg Heavy Duty Jute Bags</option>
                    <option value="Retail Stand-up Pouches (100g-1kg)">Retail Stand-up Pouches (100g - 1kg)</option>
                    <option value="Private Label PET Jars">Private Label PET Jars &amp; Tins</option>
                  </select>
                </div>

              </div>

              {/* Delivery Terms */}
              <div className="mb-8 p-4 rounded-xl bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.3)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-[var(--brand-forest)] uppercase">
                      5. Preferred Shipping Terms
                    </div>
                    <div className="text-xs text-gray-600">
                      Dispatched directly from Mundra Port (Gujarat, India)
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["FOB Mundra Port", "CIF Destination Port", "CFR Terms"].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setRfqPort(term)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          rfqPort === term
                            ? "bg-[var(--brand-forest)] text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={buildWhatsAppUrl(rfqWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base shadow-lg transition-all"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send RFQ via WhatsApp (Instant)</span>
                </a>

                <Link
                  to={`/contact?product=${encodeURIComponent(rfqSpice)}&grade=${encodeURIComponent(rfqGrade)}&volume=${encodeURIComponent(rfqVolume)}&packing=${encodeURIComponent(rfqPacking)}#inquiry-form`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--brand-deep-green)] hover:bg-[var(--brand-forest)] text-white font-bold text-sm sm:text-base transition-all shadow-md"
                >
                  <span>Submit Email Inquiry Form</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            7. PROCESSING, RETAIL PACKING & PRIVATE LABEL INFRASTRUCTURE
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 bg-white border-b border-[var(--brand-gold-pale)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)] mb-2">
                <Tag className="h-4 w-4" />
                <span>Our Retail Packaging &amp; Private Label</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-charcoal)] jm-display mb-4">
                Our Retail Packaging &amp; Private Label Solutions
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-light)] rounded mb-4" />
              <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                We manufacture shelf-ready, food-grade stand-up zipper pouches with transparent display windows and airtight aroma seals. Full private-label customization with your brand logo, barcodes, and multi-language regulatory information for global supermarket chains and distributors.
              </p>
            </div>

            {/* Visual Real Stand-Up Pouch Showcase */}
            <div className="mb-16 bg-gradient-to-br from-[var(--brand-cream)] via-[var(--brand-warm-white)] to-[var(--brand-gold-pale)] rounded-3xl p-6 sm:p-10 border border-[rgba(201,168,76,0.35)] shadow-xl">
              
              {/* Product Pouch Selector Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-[rgba(201,168,76,0.25)]">
                {RETAIL_POUCH_PRODUCTS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePouch(idx)}
                    className={`py-2 px-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      activePouch === idx
                        ? "bg-[var(--brand-forest)] text-white shadow-md font-bold"
                        : "bg-white text-[var(--brand-charcoal)] hover:bg-[var(--brand-gold-pale)] border border-[rgba(201,168,76,0.25)]"
                    }`}
                  >
                    {p.tab}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Column: Real Pouch / Catalogue Image */}
                <div className="lg:col-span-5 text-center">
                  <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-[rgba(201,168,76,0.4)] group bg-white">
                    <img
                      src={currentPouch.image}
                      alt={`${currentPouch.name} Retail Stand-Up Pouch Packaging - JM Masala`}
                      className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-[var(--brand-deep-green)]/90 backdrop-blur-sm text-white py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-between">
                      <span className="text-[var(--brand-gold-light)] font-mono">{currentPouch.cataloguePage}</span>
                      <span>Stand-Up Zipper Pouch with Window</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Packaging Anatomy & Specifications */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Food-Grade Barrier Pouch with Transparent Display Window</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--brand-charcoal)] jm-display">
                    {currentPouch.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--brand-forest)] leading-relaxed">
                    Packed in multi-layer barrier stand-up pouches featuring a clear display window so consumers see the authentic purity, rich natural colour, and uniform particle size.
                  </p>

                  {/* 5 Quality Badges from the Pouch */}
                  <div className="bg-white p-3.5 rounded-xl border border-[rgba(201,168,76,0.3)] shadow-sm">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-forest)] mb-2">
                      Official Packaging Quality Seals:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentPouch.features.map((feat) => (
                        <span
                          key={feat}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--brand-cream)] text-[11px] font-semibold text-[var(--brand-charcoal)] border border-[rgba(201,168,76,0.25)]"
                        >
                          <CheckCircle2 className="h-3 w-3 text-[var(--brand-gold)]" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pouch Specification Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white border border-[rgba(201,168,76,0.25)]">
                      <span className="text-gray-500 block text-[10px] uppercase font-bold">Pack Formats Available:</span>
                      <strong className="text-[var(--brand-forest)]">{currentPouch.weights}</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[rgba(201,168,76,0.25)]">
                      <span className="text-gray-500 block text-[10px] uppercase font-bold">Pouch Construction:</span>
                      <strong className="text-[var(--brand-forest)]">Zipper Lock · Window · Stand-Up Bottom</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[rgba(201,168,76,0.25)]">
                      <span className="text-gray-500 block text-[10px] uppercase font-bold">Product Specifications:</span>
                      <strong className="text-[var(--brand-forest)] font-mono">{currentPouch.specs}</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[rgba(201,168,76,0.25)]">
                      <span className="text-gray-500 block text-[10px] uppercase font-bold">Private Label Customization:</span>
                      <strong className="text-[var(--brand-forest)]">Buyer Logo · Barcode · Multilingual Label</strong>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={buildWhatsAppUrl(
                        `Hi JM Masala, I would like to inquire about private label manufacturing and retail packing for ${currentPouch.name}. Please share MOQ and pouch pricing.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Inquire for Private Label (WhatsApp)</span>
                    </a>

                    <Link
                      to="/private-label-spices"
                      className="px-6 py-3 rounded-xl bg-[var(--brand-forest)] hover:bg-[var(--brand-deep-green)] text-white font-bold text-xs sm:text-sm transition-colors shadow-sm flex items-center gap-2"
                    >
                      <span>Explore Private Label Program</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <Link
                      to="/spice-packaging"
                      className="px-5 py-3 rounded-xl border border-[var(--brand-forest)] text-[var(--brand-forest)] hover:bg-white font-bold text-xs sm:text-sm transition-colors"
                    >
                      All Packaging Specs
                    </Link>
                  </div>

                </div>

              </div>

            </div>

            {/* 4 Infrastructure Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((svc) => (
                <div
                  key={svc.title}
                  className="p-8 rounded-2xl bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.3)] hover:border-[var(--brand-gold)] transition-all duration-300 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-gold)] to-[var(--brand-gold-light)] text-[var(--brand-deep-green)] flex items-center justify-center mb-6 shadow-md">
                      {svc.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--brand-charcoal)] jm-display mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--brand-forest)] leading-relaxed mb-6">
                      {svc.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {svc.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-[var(--brand-charcoal)] font-medium">
                          <Check className="h-3.5 w-3.5 text-[var(--brand-gold)] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={svc.link}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--brand-forest)] hover:text-[var(--brand-gold)] transition-colors pt-4 border-t border-[rgba(201,168,76,0.2)]"
                  >
                    <span>{svc.linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            8. 6-STAGE EXPORT SUPPLY CHAIN JOURNEY
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[var(--brand-cream)] border-t border-[var(--brand-gold-pale)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)] mb-2">
                <Clock className="h-4 w-4" />
                <span>Supply Chain Transparency</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display mb-3">
                From Unjha Mandi to Container Loading
              </h2>
              <p className="text-xs sm:text-sm text-[var(--brand-forest)]">
                Every consignment undergoes a calibrated 6-stage lifecycle ensuring quality compliance, optical sortex cleaning, and smooth port clearance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROCESS_STEPS.map((ps) => (
                <div
                  key={ps.step}
                  className="bg-white rounded-2xl p-6 border border-[rgba(201,168,76,0.25)] relative shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-[var(--brand-gold-pale)] font-mono">
                      {ps.step}
                    </span>
                    <span className="text-2xl">{ps.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--brand-charcoal)] jm-display mb-2">
                    {ps.title}
                  </h3>
                  <p className="text-xs text-[var(--brand-forest)] leading-relaxed mb-3">
                    {ps.description}
                  </p>
                  <div className="text-[11px] font-semibold text-[var(--brand-gold)] flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>{ps.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            9. GLOBAL EXPORT DESTINATIONS & MUNDRA PORT ADVANTAGE
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 bg-gradient-to-br from-[#10170f] via-[var(--brand-deep-green)] to-[#1a2e1a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold-light)] mb-2">
                <Globe2 className="h-4 w-4" />
                <span>Global Shipping Network</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold jm-display mb-4 text-white">
                Exporting to 30+ Countries Worldwide
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-light)] mx-auto mb-4" />
              <p className="text-xs sm:text-sm text-emerald-100/80 max-w-2xl mx-auto">
                Situated just ~300 km from Mundra and Kandla Ports, India's largest commercial marine gateways. Fast container trucking enables shorter dispatch lead times.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {EXPORT_DESTINATIONS.map((dest) => (
                <div
                  key={dest.region}
                  className="jm-glass-dark rounded-2xl p-6 border border-white/10 hover:border-[var(--brand-gold)] transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white jm-display">
                      {dest.region}
                    </h3>
                    <span className="text-[11px] font-semibold text-[var(--brand-gold-light)] bg-white/10 px-2 py-0.5 rounded">
                      {dest.transit}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.countries.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-emerald-100/90"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Logistics Badge Bar */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-around gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <Anchor className="h-6 w-6 text-[var(--brand-gold)]" />
                <div>
                  <div className="font-bold text-sm text-white">Direct Sea Ports</div>
                  <div className="text-xs text-white/70">Mundra Port &amp; Kandla Port, Gujarat</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="h-6 w-6 text-[var(--brand-gold)]" />
                <div>
                  <div className="font-bold text-sm text-white">Inland Container Depot</div>
                  <div className="text-xs text-white/70">ICD Khodiyar / ICD Sanand</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-[var(--brand-gold)]" />
                <div>
                  <div className="font-bold text-sm text-white">Dispatch Speed</div>
                  <div className="text-xs text-white/70">Container Stuffing in 3-5 Business Days</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            10. ABOUT JM MASALA & UNJHA HERITAGE
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 bg-white border-b border-[var(--brand-gold-pale)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[rgba(201,168,76,0.3)]">
                  <img
                    src={aboutImage}
                    alt="JM Masala Spice Trading Yard in Unjha Gujarat"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-light)] text-[var(--brand-deep-green)] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xl jm-display hidden sm:block">
                  Est. Unjha, Gujarat · 2 Generations
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
                  <Award className="h-4 w-4" />
                  <span>Heritage &amp; Processing Credibility</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display leading-tight">
                  Rooted in the APMC Spice Capital of India
                </h2>
                <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                  <strong>JM Masala Trading LLP</strong> was born out of Unjha's vibrant APMC market yard. Over two generations, our team has built direct linkages with thousands of cumin, coriander, fennel, and fenugreek farmers across Gujarat and Rajasthan.
                </p>
                <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                  Today, we merge traditional mandi grading wisdom with advanced Sortex optical separation and cryogenic grinding machinery. Our buyers receive honest lot representation, competitive FOB Mundra rates, and zero supply surprises.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.25)]">
                    <div className="text-xs text-[var(--brand-sage)] font-bold uppercase">Mandi Presence</div>
                    <div className="text-sm font-bold text-[var(--brand-charcoal)] mt-0.5">APMC Unjha Yard</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.25)]">
                    <div className="text-xs text-[var(--brand-sage)] font-bold uppercase">Processing</div>
                    <div className="text-sm font-bold text-[var(--brand-charcoal)] mt-0.5">Sortex &amp; Milling</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.25)]">
                    <div className="text-xs text-[var(--brand-sage)] font-bold uppercase">Regulatory</div>
                    <div className="text-sm font-bold text-[var(--brand-charcoal)] mt-0.5">APEDA &amp; Spice Board</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about-jm-masala"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--brand-forest)] hover:text-[var(--brand-gold)] transition-colors"
                  >
                    <span>Learn More About Our Company &amp; Facility</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            11. EXPORT DOCUMENTATION & CERTIFICATIONS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[var(--brand-cream)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Trade Verification</span>
                </div>
                <h2 className="text-3xl font-bold text-[var(--brand-charcoal)] jm-display">
                  Verified Certifications &amp; Accreditations
                </h2>
                <p className="text-xs sm:text-sm text-[var(--brand-forest)] leading-relaxed">
                  We maintain full compliance with Indian statutory trade authorities and destination market food safety standards.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "HACCP Certified", sub: "Food Safety System" },
                    { name: "ISO 22000:2018", sub: "Food Safety Mgmt" },
                    { name: "APEDA Reg.", sub: "Govt of India" },
                    { name: "Spice Board RCMC", sub: "Ministry of Commerce" },
                    { name: "FSSAI Licensed", sub: "Food Authority" },
                    { name: "IEC Registered", sub: "Foreign Trade" },
                  ].map((cert) => (
                    <div
                      key={cert.name}
                      className="p-3.5 rounded-xl bg-white border border-[rgba(201,168,76,0.3)] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[var(--brand-gold)] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-[var(--brand-charcoal)]">{cert.name}</div>
                        <div className="text-[10px] text-gray-500">{cert.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Export Documentation Package */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[rgba(201,168,76,0.3)] shadow-md">
                <h3 className="text-xl font-bold text-[var(--brand-charcoal)] jm-display mb-3">
                  Standard International Export Document Package
                </h3>
                <p className="text-xs sm:text-sm text-[var(--brand-forest)] mb-6">
                  Every commercial order comes with an ironclad documentation set compatible with Letter of Credit (LC) and documentary collections (DP/DA).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DOCUMENTATION_PACKAGE.map((doc) => (
                    <div
                      key={doc}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.2)] text-xs text-[var(--brand-charcoal)]"
                    >
                      <Check className="h-3.5 w-3.5 text-[var(--brand-gold)] shrink-0" />
                      <span className="font-medium">{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Need specific lab analysis (SGS, Eurofins, Geo-Chem)?</span>
                  <Link to="/quality-certifications" className="font-bold text-[var(--brand-forest)] hover:underline">
                    View Lab Protocols →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            12. B2B BUYER FAQS & SOURCING DIRECTORY
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)] mb-2">
                <FileText className="h-4 w-4" />
                <span>Buyer Knowledge Center</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display mb-3">
                Frequently Asked Procurement Questions
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-light)] mx-auto mb-4" />
              <p className="text-xs sm:text-sm text-[var(--brand-forest)]">
                Essential insights on sourcing Indian spices directly from Unjha processors, custom packing specifications, and international export documentation.
              </p>
            </div>

            {/* Clean 2-Column Balanced FAQ Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {HOME_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 rounded-2xl bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.3)] hover:border-[var(--brand-gold)] transition-colors shadow-sm"
                >
                  <h3 className="text-sm sm:text-base font-bold text-[var(--brand-charcoal)] jm-display mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--brand-forest)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Hidden Semantic Sourcing Directory for Search Crawlers & Indexing */}
            <nav aria-label="Internal Sourcing and Product Directory" className="sr-only">
              <h2>Product Specifications &amp; Market Sourcing Directory</h2>
              <ul>
                {PRODUCTS.map((product) => (
                  <li key={product.slug}>
                    <Link to={`/${product.slug}`}>{product.name} Exporter &amp; Supplier India</Link>
                  </li>
                ))}
                <li><Link to="/best-spice-exporter-india">Best Spice Exporter in India</Link></li>
                <li><Link to="/best-cumin-exporter-india">Best Cumin Exporter in India</Link></li>
                <li><Link to="/spice-exporter-gujarat">Spice Exporter in Gujarat</Link></li>
                <li><Link to="/private-label-spices">Private Label Spice Manufacturing</Link></li>
                <li><Link to="/spice-packaging">Bulk &amp; Retail Spice Packaging</Link></li>
                <li><Link to="/cold-pressed-oils">Wood Pressed Edible Oils India</Link></li>
                {BLOG_POSTS.map((post) => (
                  <li key={post.slug}>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            13. FINAL COMMERCIAL CALL TO ACTION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-[#10170f] via-[var(--brand-deep-green)] to-[#10170f] text-white relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.15)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold-light)] px-3.5 py-1 rounded-full bg-white/10 border border-white/20">
              <Zap className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
              <span>Direct Mandi Procurement · Global Shipping</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold jm-display text-white leading-tight">
              Looking for a Trusted Indian Spice Processing Partner?
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
              Connect directly with JM Masala Trading LLP at Unjha, Gujarat. Share your target specifications, required packaging, and destination port to receive verified COA parameters and a competitive FOB/CIF quotation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/contact?intent=quote#inquiry-form"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-light)] text-[var(--brand-deep-green)] font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-[rgba(201,168,76,0.35)] hover:-translate-y-0.5 transition-all"
              >
                Request Commercial Quote
              </Link>
              
              <a
                href={buildWhatsAppUrl("Hi JM Masala, I would like to discuss spice importing and request FOB Mundra pricing.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base flex items-center gap-2 transition-colors shadow-lg"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="/JMMasalaProducts.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl border border-white/30 text-white hover:bg-white/10 font-semibold text-sm transition-colors"
              >
                Download Catalogue PDF
              </a>
            </div>

            <div className="pt-8 text-xs text-white/60">
              {COMPANY.addressLine} · Direct Phone: {COMPANY.phones.join(" · ")}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HomePage;
