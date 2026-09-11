import blackPepperImage from "../assets/BlackPepper.png";
import cardamomImage from "../assets/Cardamom.png";
import corianderSeedsImage from "../assets/CorianderSeeds.png";
import cuminImage from "../assets/cumin.png";
import curryLeafImage from "../assets/CurryLeaf.png";
import fennelSeedsImage from "../assets/FennelSeeds.png";
import fenugreekSeedsImage from "../assets/FenugreekSeeds.png";
import psylliumHuskImage from "../assets/PsylliumHusk.png";
import psylliumSeedsImage from "../assets/PsylliumSeeds.png";
import redChilliImage from "../assets/RedChilli.png";
import sesameSeedsImage from "../assets/SesameSeeds.png";
import turmericImage from "../assets/Turmeric.png";
import ajwainSeedsImage from "../assets/AjwainSeeds.jpg";
import mustardSeedsImage from "../assets/MustardSeeds.jpg";
import dryGingerImage from "../assets/DryGinger.jpg";
import nigellaSeedsImage from "../assets/NigellaSeeds.jpg";
import cuminPowderImage from "../assets/CuminPowder.jpg";
import corianderPowderImage from "../assets/CorianderPowder.jpg";
import turmericPowderImage from "../assets/TurmericPowder.jpg";
import redChilliPowderImage from "../assets/RedChilliPowder.jpg";
import gingerPowderImage from "../assets/GingerPowder.jpg";
import fenugreekPowderImage from "../assets/FenugreekPowder.jpg";
import dehydratedOnionImage from "../assets/DehydratedOnion.jpg";
import dehydratedGarlicImage from "../assets/DehydratedGarlic.jpg";
import agroCommoditiesImage from "../assets/AgroCommodities.jpg";

export const SITE_URL = "https://jmmasalaexports.com";

export const COMPANY = {
  name: "JM Masala",
  legalName: "JM Masala Trading LLP",
  tagline: "Indian Spice Manufacturer, Processor & Exporter",
  entityType:
    "Spice Manufacturer, Processor, Exporter, Bulk Supplier & Private Label Partner",
  email: "jmmasalaexports@gmail.com",
  website: "jmmasalaexports.com",
  phones: ["+91 91067 66041", "+91 98245 10478"],
  addressLine:
    "A/18, Main Line, APMC Market Yard, Unjha, Mehsana District, Gujarat 384170, India",
  corporateOffice:
    "A/18, Main Line, APMC Market Yard, Unjha, Mehsana District, Gujarat 384170, India",
  whatsappNumber: "919106766041",
  whatsappMessage:
    "Hi JM Masala, I am interested in your spices. Can you share specifications and pricing?",
};

export const OFFICIAL_PROFILES = [
  SITE_URL,
  `https://${COMPANY.website}`,
];

export const ENTITY_ASSOCIATIONS = [
  "Indian Spice Manufacturer",
  "Spice Processor",
  "Spice Exporter",
  "Indian Spice Supplier",
  "Private Label Spice Manufacturer",
  "Retail Spice Supplier",
  "Bulk Spice Supplier",
  "Cumin / Jeera Specialist",
  "Indian Agro Product Supplier",
];

export const PROCESSING_CAPABILITIES = [
  {
    name: "Machine Cleaning",
    description:
      "Raw spice lots are passed through mechanical cleaning systems to remove dust, stalks, husk fragments, light impurities, and visible foreign matter before grading.",
  },
  {
    name: "Destoning",
    description:
      "Density-based separation helps remove stones, mud balls, and heavy field impurities from seed spices before final buyer-grade sorting.",
  },
  {
    name: "Gravity Separation",
    description:
      "Gravity tables separate hollow, lightweight, immature, and broken seeds so export lots have stronger density and visual consistency.",
  },
  {
    name: "Sortex Optical Cleaning",
    description:
      "Color sorting supports higher-purity cumin, coriander, fennel, fenugreek, sesame, psyllium, and other spice lots by rejecting off-color grains.",
  },
  {
    name: "Grading and Sieving",
    description:
      "Product lots are graded by size, purity, moisture, and buyer specification for bulk import, food processing, retail, and private-label channels.",
  },
  {
    name: "Grinding and Milling",
    description:
      "Whole spices can be ground into pure spice powders with buyer-specific mesh, aroma retention, and packaging requirements.",
  },
  {
    name: "Blending and Custom Processing",
    description:
      "Buyer-led specifications can combine product selection, cleaning level, powder mesh, packing size, label needs, and export documents.",
  },
  {
    name: "Quality Inspection",
    description:
      "Inward and finished lots are checked for moisture, appearance, aroma, foreign matter, and lab-test requirements before dispatch.",
  },
];

export type SourcingRegion = {
  slug: string;
  name: string;
  title: string;
  description: string;
  products: string[];
  productSlugs: string[];
  sourcingUseCases: string[];
};

export const SOURCING_REGIONS: SourcingRegion[] = [
  {
    slug: "gujarat",
    name: "Gujarat",
    title: "Gujarat Spice Sourcing",
    description:
      "Gujarat is JM Masala's primary sourcing and trading base, especially through Unjha and nearby agricultural markets for seed spices, psyllium, sesame, and other agro products.",
    products: [
      "Cumin Seeds",
      "Fennel Seeds",
      "Fenugreek Seeds",
      "Ajwain Seeds",
      "Psyllium Husk",
      "Psyllium Seeds",
      "Sesame Seeds",
      "Coriander Seeds",
    ],
    productSlugs: [
      "cumin-seeds-exporter-india",
      "fennel-seeds-exporter-india",
      "fenugreek-seeds-exporter-india",
      "ajwain-seeds-exporter-india",
      "psyllium-husk-exporter-india",
      "psyllium-seeds-exporter-india",
      "sesame-seeds-exporter-india",
      "coriander-seeds-exporter-india",
    ],
    sourcingUseCases: [
      "Bulk spice sourcing for importers and traders",
      "Seed spice lots for cleaning, grading, and Sortex processing",
      "Private-label product supply built around Gujarat-origin spices",
      "FOB Mundra and Gujarat port export planning",
    ],
  },
  {
    slug: "north-east-india",
    name: "North-East India",
    title: "North-East India Spice and Agro Product Sourcing",
    description:
      "JM Masala is expanding sourcing relationships across North-East India to evaluate regional spices, ginger, turmeric, chilli, herbs, and specialty agro products for processing, private-label, retail, and export opportunities.",
    products: [
      "Ginger",
      "Turmeric",
      "Chilli",
      "Black Pepper",
      "Regional Spices",
      "Herbs",
      "Specialty Agro Products",
    ],
    productSlugs: [
      "dry-ginger-exporter-india",
      "ginger-powder-exporter-india",
      "turmeric-exporter-india",
      "turmeric-powder-exporter-india",
      "red-chilli-exporter-india",
      "black-pepper-exporter-india",
    ],
    sourcingUseCases: [
      "Regional Indian products for international food markets",
      "Specialty spice and agro product discovery",
      "Retail and private-label product development",
      "Bulk export evaluation based on season, quality, and commercial availability",
    ],
  },
  {
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    title: "Andhra Pradesh Chilli and Spice Sourcing",
    description:
      "Andhra Pradesh is an important Indian sourcing region for red chilli and selected spice products. JM Masala can evaluate chilli requirements by variety, heat, color, grade, packing, and destination-market needs.",
    products: [
      "Red Chilli",
      "Red Chilli Powder",
      "Chilli Varieties",
      "Product-Specific Spices",
    ],
    productSlugs: [
      "red-chilli-exporter-india",
      "red-chilli-powder-exporter-india",
    ],
    sourcingUseCases: [
      "Chilli sourcing for importers and food manufacturers",
      "ASTA color and SHU-led product discussions",
      "Whole, stemless, crushed, or powder-format requirements",
      "Aflatoxin and destination-market testing support where required",
    ],
  },
];

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const buildGeneralInquiryMessage = (topic = "your products") =>
  `Hi JM Masala, I am interested in ${topic}. Please share specifications, packing options, MOQ, and pricing.`;

export const buildProductInquiryMessage = (
  productName: string,
  note = "Please share specifications, packing options, MOQ, and pricing.",
) => `Hi JM Masala, I am interested in ${productName}. ${note}`;

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Cold Pressed Oils", path: "/cold-pressed-oils" },
  { label: "About Us", path: "/about-jm-masala" },
  { label: "Sourcing", path: "/sourcing-network" },
  { label: "Processing", path: "/spice-processing-manufacturing" },
  { label: "Quality and Certifications", path: "/quality-certifications" },
  { label: "Private Label", path: "/private-label-spices" },
  { label: "Packaging", path: "/spice-packaging" },
  { label: "Export Operations", path: "/export-destinations" },
  { label: "Domestic Buyers", path: "/domestic-supply-india" },
  { label: "Contact", path: "/contact" },
];

export const TRUST_BADGES = [
  "HACCP Certified",
  "ISO 22000",
  "APEDA Registered",
  "Spice Board RCMC",
  "FSSAI Licensed",
  "IEC Registered",
];

export type ProductCategory = "whole" | "powders" | "agro" | "north" | "south";

export type ProductSpec = {
  label: string;
  value: string;
};

export type TechnicalSpec = {
  label: string;
  value: string;
};

export type ExportDetail = {
  label: string;
  value: string;
};

export type QualityGrade = {
  market: string;
  purity: string;
  moisture: string;
  admixture: string;
  notes: string;
};

export type ColorPalette = {
  primary: string;
  accent: string;
  pale: string;
  swatches: string[];
  tagline: string;
};

export type ProductData = {
  slug: string;
  name: string;
  botanicalName: string;
  origin: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  keySpec: string;
  imageUrl: string;
  specs: ProductSpec[];
  qualityGrades?: QualityGrade[];
  relatedSlugs: string[];
  colors?: ColorPalette;
};

export type ProductTechnicalDetails = {
  general?: TechnicalSpec[];
  physical?: TechnicalSpec[];
  chemical?: TechnicalSpec[];
  microbiological?: TechnicalSpec[];
  contaminants?: string[];
  processing?: string[];
  packaging?: string[];
  certifications?: string[];
  exportDetails?: ExportDetail[];
  optionalBuyerRequirements?: string[];
};

export const PRODUCTS: ProductData[] = [
  {
    slug: "cumin-seeds-exporter-india",
    name: "Cumin Seeds",
    botanicalName: "Cuminum cyminum",
    origin: "Unjha, Gujarat",
    category: "north",
    shortDescription:
      "High-oil, export-grade cumin directly sourced from Unjha mandi.",
    description:
      "Cumin is our flagship export from Unjha, Gujarat. We source directly from trusted mandi channels and farmer groups, then process through Sortex cleaning and lab verification for stable aroma, oil content, and purity across buyer markets.",
    keySpec: "Purity up to 99.5% | Moisture max 8-10%",
    imageUrl: cuminImage,
    colors: {
      primary: "#2d1f0e",
      accent: "#c17f3a",
      pale: "#f5e6d0",
      swatches: ["#2d1f0e", "#5c3e1c", "#c17f3a", "#e2ad6e", "#f5e6d0"],
      tagline: "Warm amber tones of Unjha's finest jeera",
    },
    specs: [
      { label: "HS Code (ITC-HS)", value: "0909 31 29 (Sortex) / 0909 31 19" },
      { label: "Purity", value: "98% / 99% / 99.5% / 99.9%" },
      { label: "Moisture", value: "Max 8% to 10%" },
      { label: "Admixture", value: "Max 0.5% to 1.75% by market grade" },
      { label: "Oil Content", value: "2.5% to 4.5%" },
      { label: "Cleaning Process", value: "Machine Cleaned & Sortex Optical Sorted" },
      { label: "Color", value: "Brown to dark brown" },
      { label: "Crop Year", value: "Latest fresh harvest" },
    ],
    qualityGrades: [
      {
        market: "Europe",
        purity: "98% / 99% / 99.5%",
        moisture: "Max 8%",
        admixture: "Max 1.75%",
        notes: "Strict low admixture and clean uniform color",
      },
      {
        market: "USA",
        purity: "99.5%",
        moisture: "Max 8%",
        admixture: "Max 1.5%",
        notes: "High purity for premium food service importers",
      },
      {
        market: "Gulf",
        purity: "98%",
        moisture: "Max 9-10%",
        admixture: "Max 2-3%",
        notes: "Balanced commercial grade for bulk retail",
      },
      {
        market: "Singapore",
        purity: "98% / 99%",
        moisture: "Max 8-10%",
        admixture: "Max 2%",
        notes: "Uniform medium-brown color with stable aroma",
      },
    ],
    relatedSlugs: [
      "coriander-seeds-exporter-india",
      "fennel-seeds-exporter-india",
      "fenugreek-seeds-exporter-india",
    ],
  },
  {
    slug: "coriander-seeds-exporter-india",
    name: "Coriander Seeds",
    botanicalName: "Coriandrum sativum",
    origin: "Gujarat",
    category: "north",
    shortDescription:
      "Cleaned coriander with strong citrus notes and stable volatile oil.",
    description:
      "Our coriander seeds are sourced from Gujarat trade networks and selected for aroma, size consistency, and low foreign matter. Processing follows HACCP-compatible cleaning and lot-wise inspection for export reliability.",
    keySpec: "Purity min 98% | Moisture 8-10%",
    imageUrl: corianderSeedsImage,
    colors: {
      primary: "#1a2e12",
      accent: "#6fa832",
      pale: "#e8f4d0",
      swatches: ["#1a2e12", "#2e5020", "#6fa832", "#a8d46a", "#e8f4d0"],
      tagline: "Fresh herb green, earthy and clean",
    },
    specs: [
      { label: "Purity", value: "Min 98%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Splits", value: "Max 2%" },
      { label: "Color", value: "Green to golden yellow" },
      { label: "Type", value: "Eagle / Parrot / Badami available" },
      { label: "Cleaning", value: "Machine + Sortex cleaned" },
    ],
    qualityGrades: [
      {
        market: "Europe",
        purity: "99% / 99.5%",
        moisture: "Max 9%",
        admixture: "Max 1.0%",
        notes: "Single Parrot & Eagle grade, low split seeds (<2%), pesticide tested",
      },
      {
        market: "USA",
        purity: "99%",
        moisture: "Max 9%",
        admixture: "Max 1.0%",
        notes: "ASTA grade, bold aroma for industrial grinding and seasoning blends",
      },
      {
        market: "Gulf",
        purity: "98% / 99%",
        moisture: "Max 10%",
        admixture: "Max 1.5%",
        notes: "Commercial Eagle / Badami grade for retail repacking and curry powder",
      },
      {
        market: "Singapore",
        purity: "98% / 99%",
        moisture: "Max 9.5%",
        admixture: "Max 1.5%",
        notes: "Uniform golden-green hue, low moisture, high essential oil retention",
      },
    ],
    relatedSlugs: [
      "cumin-seeds-exporter-india",
      "fennel-seeds-exporter-india",
      "sesame-seeds-exporter-india",
    ],
  },
  {
    slug: "fennel-seeds-exporter-india",
    name: "Fennel Seeds",
    botanicalName: "Foeniculum vulgare",
    origin: "Gujarat",
    category: "north",
    shortDescription:
      "Sweet-aroma fennel with high visual uniformity and low breakage.",
    description:
      "Our fennel seeds are selected for color and aroma consistency, then graded to match importer requirements. We provide bold and small fennel variants with quality-tested lots for export buyers.",
    keySpec: "Purity min 99% | Moisture max 8%",
    imageUrl: fennelSeedsImage,
    colors: {
      primary: "#1a2210",
      accent: "#8fa860",
      pale: "#e5f0d5",
      swatches: ["#1a2210", "#3a4820", "#8fa860", "#b8d080", "#e5f0d5"],
      tagline: "Sweet aroma, botanical green harmony",
    },
    specs: [
      { label: "Purity", value: "Min 99%" },
      { label: "Moisture", value: "Max 8%" },
      { label: "Broken Seeds", value: "Max 1%" },
      { label: "Color", value: "Greenish-brown to light brown" },
      { label: "Variety", value: "Bold / Small / Singapore grade" },
      { label: "Processing", value: "Sortex cleaned and metal checked" },
    ],
    qualityGrades: [
      {
        market: "Europe",
        purity: "99.5% Sortex",
        moisture: "Max 8%",
        admixture: "Max 0.8%",
        notes: "Abu Road bold green, high essential oil (1.5%+), pesticide compliant",
      },
      {
        market: "USA",
        purity: "99% ASTA",
        moisture: "Max 8.5%",
        admixture: "Max 1.0%",
        notes: "Selected bold green seeds for bakeries, tea blends & confectionery",
      },
      {
        market: "Gulf",
        purity: "98% / 99%",
        moisture: "Max 9%",
        admixture: "Max 1.5%",
        notes: "Popular mukhwas & mouth freshener grade with high natural sweetness",
      },
      {
        market: "Singapore",
        purity: "98% / 99%",
        moisture: "Max 8.5%",
        admixture: "Max 1.5%",
        notes: "Uniform greenish brown color, high aroma, zero mouldy seeds",
      },
    ],
    relatedSlugs: [
      "cumin-seeds-exporter-india",
      "fenugreek-seeds-exporter-india",
      "coriander-seeds-exporter-india",
    ],
  },
  {
    slug: "fenugreek-seeds-exporter-india",
    name: "Fenugreek Seeds",
    botanicalName: "Trigonella foenum-graecum",
    origin: "Gujarat",
    category: "north",
    shortDescription:
      "Golden fenugreek seeds for food, spice blends, and nutraceuticals.",
    description:
      "Fenugreek seeds are sourced from Gujarat and cleaned for export lots requiring high purity and low contamination. We support commercial and premium grades with buyer-specific packing.",
    keySpec: "Purity 99% | Semi-bold and bold grades",
    imageUrl: fenugreekSeedsImage,
    colors: {
      primary: "#2a1f0a",
      accent: "#d4a048",
      pale: "#fae8c5",
      swatches: ["#2a1f0a", "#5c3e1c", "#d4a048", "#e5c485", "#fae8c5"],
      tagline: "Golden abundance, nutty and precious",
    },
    specs: [
      { label: "Purity", value: "99%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Color", value: "Yellowish to golden brown" },
      { label: "Size", value: "Semi-bold / bold" },
      { label: "Foreign Matter", value: "As per agreed buyer limit" },
      { label: "Cleaning", value: "Sortex cleaned" },
    ],
    qualityGrades: [
      {
        market: "Europe",
        purity: "99.5% Sortex",
        moisture: "Max 9%",
        admixture: "Max 0.5%",
        notes: "Double Sortex cleaned, high saponin for nutraceutical & food extraction",
      },
      {
        market: "USA",
        purity: "99% ASTA",
        moisture: "Max 9%",
        admixture: "Max 0.8%",
        notes: "Microbiologically tested, low foreign matter, suitable for seasoning",
      },
      {
        market: "Gulf",
        purity: "98% / 99%",
        moisture: "Max 10%",
        admixture: "Max 1.5%",
        notes: "Bold golden seed for pickle manufacturing, curry powder & seasoning",
      },
      {
        market: "Singapore",
        purity: "98% / 99%",
        moisture: "Max 9.5%",
        admixture: "Max 1.5%",
        notes: "Semi-bold & bold uniform seeds, consistent harvest lot",
      },
    ],
    relatedSlugs: [
      "cumin-seeds-exporter-india",
      "fennel-seeds-exporter-india",
      "psyllium-seeds-exporter-india",
    ],
  },
  {
    slug: "psyllium-husk-exporter-india",
    name: "Psyllium Husk",
    botanicalName: "Plantago ovata",
    origin: "Gujarat",
    category: "north",
    shortDescription:
      "High-swelling psyllium husk for nutraceutical and pharma buyers.",
    description:
      "We supply export-grade psyllium husk with controlled moisture and high swell volume. Processing and packing are handled for pharma, nutraceutical, and food-grade demand with lab-tested batches.",
    keySpec: "Swell volume 25-40 ml/g | Moisture max 12%",
    imageUrl: psylliumHuskImage,
    colors: {
      primary: "#1e1a0e",
      accent: "#8a7840",
      pale: "#f0e9d0",
      swatches: ["#1e1a0e", "#3a3018", "#8a7840", "#c4ae6e", "#f0e9d0"],
      tagline: "Warm wheat tone — pure wellness",
    },
    specs: [
      { label: "Purity", value: "Min 98%" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Swell Volume", value: "25 to 40 ml/g" },
      { label: "Mesh", value: "60 mesh / 80 mesh / custom" },
      { label: "Color", value: "Off-white to cream" },
      { label: "Microbiology", value: "As per buyer standard" },
    ],
    qualityGrades: [
      {
        market: "Europe",
        purity: "99% Purity (40/60 Mesh)",
        moisture: "Max 11.5%",
        admixture: "Max 0.5%",
        notes: "Swell volume 40+ ml/g, pharma and high-end nutraceutical grade",
      },
      {
        market: "USA",
        purity: "98% / 99% USP",
        moisture: "Max 12%",
        admixture: "Max 0.8%",
        notes: "Dietary fiber supplement grade, steam-treated, low microbial count",
      },
      {
        market: "Gulf",
        purity: "95% / 98%",
        moisture: "Max 12%",
        admixture: "Max 1.5%",
        notes: "Commercial retail packaging for digestive wellness and baking",
      },
      {
        market: "Singapore",
        purity: "98% Purity",
        moisture: "Max 12%",
        admixture: "Max 1.0%",
        notes: "Clean off-white color, high mucilage content for food formulations",
      },
    ],
    relatedSlugs: [
      "psyllium-seeds-exporter-india",
      "cumin-seeds-exporter-india",
      "sesame-seeds-exporter-india",
    ],
  },
  {
    slug: "psyllium-seeds-exporter-india",
    name: "Psyllium Seeds",
    botanicalName: "Plantago ovata",
    origin: "Gujarat",
    category: "north",
    shortDescription:
      "Clean psyllium seeds with controlled moisture for export processing.",
    description:
      "Psyllium seeds from Gujarat are supplied in export lots after sorting and quality checks. We support bulk buyers using psyllium as a base ingredient in food, feed, and fiber-focused products.",
    keySpec: "Purity min 99% | Moisture max 10-12%",
    imageUrl: psylliumSeedsImage,
    colors: {
      primary: "#1a1608",
      accent: "#9d8950",
      pale: "#f2eddc",
      swatches: ["#1a1608", "#3a3010", "#9d8950", "#c9bb80", "#f2eddc"],
      tagline: "Earthy wellness, golden-brown noble",
    },
    specs: [
      { label: "Purity", value: "Min 99%" },
      { label: "Moisture", value: "Max 10-12%" },
      { label: "Color", value: "Light brown" },
      { label: "Foreign Matter", value: "As per contract grade" },
      { label: "Packaging", value: "Food-safe PP bags with liner" },
      { label: "Testing", value: "NABL lab test available" },
    ],
    relatedSlugs: [
      "psyllium-husk-exporter-india",
      "fenugreek-seeds-exporter-india",
      "coriander-seeds-exporter-india",
    ],
  },
  {
    slug: "sesame-seeds-exporter-india",
    name: "Sesame Seeds",
    botanicalName: "Sesamum indicum",
    origin: "Gujarat",
    category: "north",
    shortDescription:
      "Natural and hulled sesame seeds with export-focused quality control.",
    description:
      "Our sesame seeds are procured and processed for bakery, tahini, and spice applications. We offer natural and hulled variants with controlled moisture and customizable quality bands.",
    keySpec: "Natural and hulled variants | Export packed",
    imageUrl: sesameSeedsImage,
    colors: {
      primary: "#1a1510",
      accent: "#b89968",
      pale: "#f5ede4",
      swatches: ["#1a1510", "#3a2c1a", "#b89968", "#d4bb8d", "#f5ede4"],
      tagline: "Subtle elegance, pale and pure",
    },
    specs: [
      { label: "Purity", value: "98-99.5%" },
      { label: "Moisture", value: "Max 8%" },
      { label: "Color", value: "White / natural" },
      { label: "FFA", value: "As per buyer requirement" },
      { label: "Admixture", value: "Low as per contract grade" },
      { label: "Processing", value: "Machine cleaned and sorted" },
    ],
    relatedSlugs: [
      "cumin-seeds-exporter-india",
      "coriander-seeds-exporter-india",
      "psyllium-husk-exporter-india",
    ],
  },
  {
    slug: "red-chilli-exporter-india",
    name: "Red Chilli",
    botanicalName: "Capsicum annuum",
    origin: "Andhra Pradesh",
    category: "south",
    shortDescription:
      "Whole and stemless red chilli with buyer-specific heat and color.",
    description:
      "Red chilli is sourced through our East India partnership and standardized to export specifications. Lots are graded by pungency, color value, and cleanliness for food processing and trading buyers.",
    keySpec: "ASTA color and SHU range on request",
    imageUrl: redChilliImage,
    colors: {
      primary: "#2e0a0a",
      accent: "#cc2222",
      pale: "#fde8e8",
      swatches: ["#2e0a0a", "#5c1414", "#cc2222", "#e87070", "#fde8e8"],
      tagline: "Deep crimson, bold and unapologetic",
    },
    specs: [
      { label: "Type", value: "Whole / stemless / crushed / powder" },
      { label: "Moisture", value: "Max 10-12%" },
      { label: "Color Value", value: "As per ASTA requirement" },
      { label: "Pungency", value: "SHU bands available" },
      { label: "Aflatoxin", value: "Test report available" },
      { label: "Processing", value: "Cleaned and graded for export" },
    ],
    relatedSlugs: [
      "turmeric-exporter-india",
      "black-pepper-exporter-india",
      "cardamom-exporter-india",
    ],
  },
  {
    slug: "turmeric-exporter-india",
    name: "Turmeric",
    botanicalName: "Curcuma longa",
    origin: "Telangana",
    category: "south",
    shortDescription: "Finger and powder turmeric with high curcumin options.",
    description:
      "Turmeric is sourced from trusted South India channels and processed for export-grade quality. We support finger and powder requirements with color consistency, moisture control, and curcumin-focused grades.",
    keySpec: "High curcumin grades | Moisture controlled export lots",
    imageUrl: turmericImage,
    colors: {
      primary: "#2e1e00",
      accent: "#e89b00",
      pale: "#fff3c4",
      swatches: ["#2e1e00", "#5c3c00", "#e89b00", "#f5c84a", "#fff3c4"],
      tagline: "Vibrant gold — the colour of healing",
    },
    specs: [
      { label: "Type", value: "Finger / bulb / powder" },
      { label: "Curcumin", value: "2% to 5%+ by grade" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Color", value: "Golden yellow to deep orange" },
      { label: "Processing", value: "Polished and cleaned" },
      { label: "Lab Test", value: "NABL COA available" },
    ],
    qualityGrades: [
      {
        market: "Europe",
        purity: "High Curcumin (3.5% - 5.0%)",
        moisture: "Max 9%",
        admixture: "Max 1.0%",
        notes: "Salem / Erode double-polished fingers, heavy metal & pesticide tested",
      },
      {
        market: "USA",
        purity: "Curcumin 3.0% - 4.0% ASTA",
        moisture: "Max 10%",
        admixture: "Max 1.0%",
        notes: "Nizamabad & Salem grade for extraction and whole-spice distribution",
      },
      {
        market: "Gulf",
        purity: "Curcumin 2.5% - 3.0%",
        moisture: "Max 10%",
        admixture: "Max 1.5%",
        notes: "Commercial finger & bulb grade, bright golden yellow appearance",
      },
      {
        market: "Singapore",
        purity: "Curcumin 3.0%+",
        moisture: "Max 9.5%",
        admixture: "Max 1.2%",
        notes: "Evenly polished, crisp snap, uniform finger length and low breakage",
      },
    ],
    relatedSlugs: [
      "red-chilli-exporter-india",
      "black-pepper-exporter-india",
      "curry-leaf-exporter-india",
    ],
  },
  {
    slug: "black-pepper-exporter-india",
    name: "Black Pepper",
    botanicalName: "Piper nigrum",
    origin: "Kerala",
    category: "south",
    shortDescription:
      "MG1 FAQ and other export grades with high piperine potential.",
    description:
      "Black pepper is sourced from South India and processed to export-ready standards. We support MG1 FAQ and market-specific grades with moisture and density controls for commercial and premium buyers.",
    keySpec: "MG1 FAQ grade available | Export cleaned lots",
    imageUrl: blackPepperImage,
    colors: {
      primary: "#1e1e1e",
      accent: "#888888",
      pale: "#ebebeb",
      swatches: ["#1e1e1e", "#383838", "#888888", "#c9a84c", "#ebebeb"],
      tagline: "Obsidian black with a gold crown",
    },
    specs: [
      { label: "Grade", value: "MG1 FAQ / TGSEB / as required" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Bulk Density", value: "As per grade spec" },
      { label: "Piperine", value: "As per buyer requirement" },
      { label: "Cleanliness", value: "Machine + hand sorted" },
      { label: "Packing", value: "25kg and 50kg bags" },
    ],
    qualityGrades: [
      {
        market: "Europe",
        purity: "Malabar Garbled (550 GL / 570 GL)",
        moisture: "Max 11.5%",
        admixture: "Max 0.5%",
        notes: "Strict mold & foreign matter control, high piperine content (5.0%+)",
      },
      {
        market: "USA",
        purity: "ASTA Quality (570 GL)",
        moisture: "Max 12%",
        admixture: "Max 0.8%",
        notes: "Tellicherry Extra Bold & Garbled lots for premium spice grinders",
      },
      {
        market: "Gulf",
        purity: "MG1 FAQ (500 GL / 550 GL)",
        moisture: "Max 12.5%",
        admixture: "Max 1.5%",
        notes: "Commercial grade for whole retail packaging and seasoning mills",
      },
      {
        market: "Singapore",
        purity: "550 GL Cleaned",
        moisture: "Max 12%",
        admixture: "Max 1.0%",
        notes: "Deep uniform black color, heavy berry weight, high essential pungency",
      },
    ],
    relatedSlugs: [
      "cardamom-exporter-india",
      "red-chilli-exporter-india",
      "turmeric-exporter-india",
    ],
  },
  {
    slug: "cardamom-exporter-india",
    name: "Cardamom",
    botanicalName: "Elettaria cardamomum",
    origin: "Kerala",
    category: "south",
    shortDescription:
      "Green cardamom lots sorted by size and color for premium buyers.",
    description:
      "Our cardamom lots are sourced from South India partner channels and graded for size, color, and aroma retention. Supply is managed against seasonality to ensure stable export contracts.",
    keySpec: "Size-graded lots | Strong aroma and green color",
    imageUrl: cardamomImage,
    colors: {
      primary: "#0e1e26",
      accent: "#2a7a8c",
      pale: "#d0edf4",
      swatches: ["#0e1e26", "#1a3a48", "#2a7a8c", "#6ab8c8", "#d0edf4"],
      tagline: "Teal luxury — rare, aromatic, precious",
    },
    specs: [
      { label: "Grade", value: "5mm / 6mm / 7mm / bold by requirement" },
      { label: "Moisture", value: "As per export grade" },
      { label: "Color", value: "Natural green to light green" },
      { label: "Aroma", value: "High volatile oil profile" },
      { label: "Processing", value: "Hand sorted and graded" },
      { label: "Packing", value: "Vacuum and bulk options" },
    ],
    relatedSlugs: [
      "black-pepper-exporter-india",
      "turmeric-exporter-india",
      "red-chilli-exporter-india",
    ],
  },
  {
    slug: "curry-leaf-exporter-india",
    name: "Curry Leaf",
    botanicalName: "Murraya koenigii",
    origin: "Tamil Nadu",
    category: "south",
    shortDescription:
      "Fresh and dehydrated curry leaf for food manufacturing buyers.",
    description:
      "Curry leaf is supplied through partner channels in South India for buyers needing fresh or dehydrated formats. We align lot preparation, moisture control, and packing based on destination regulations.",
    keySpec: "Fresh and dehydrated formats available",
    imageUrl: curryLeafImage,
    colors: {
      primary: "#0f1a14",
      accent: "#4a8856",
      pale: "#d5f0d8",
      swatches: ["#0f1a14", "#1a3828", "#4a8856", "#7cb380", "#d5f0d8"],
      tagline: "Vibrant green vitality, tropical aroma",
    },
    specs: [
      { label: "Format", value: "Fresh / dehydrated / powder on request" },
      { label: "Moisture", value: "As per format and destination" },
      { label: "Color", value: "Natural green retention" },
      { label: "Cleaning", value: "Sorted and washed process" },
      { label: "Packaging", value: "Retail and bulk options" },
      { label: "Testing", value: "Lot testing available" },
    ],
    relatedSlugs: [
      "turmeric-exporter-india",
      "red-chilli-exporter-india",
      "cardamom-exporter-india",
    ],
  },
  {
    slug: "ajwain-seeds-exporter-india",
    name: "Ajwain / Carom Seeds",
    botanicalName: "Trachyspermum ammi",
    origin: "Gujarat / Rajasthan",
    category: "whole",
    shortDescription:
      "Aromatic Ajwain seeds with high essential oil content, machine cleaned and Sortex processed.",
    description:
      "JM Masala supplies and exports Indian ajwain (Carom Seeds) sourced from established growing regions in Gujarat and Rajasthan. Known for high thymol oil content, uniform seed size, low admixture, and distinctive herbal aroma.",
    keySpec: "Purity 99% Sortex | Essential Oil 2.5-5%",
    imageUrl: ajwainSeedsImage,
    colors: {
      primary: "#2e2210",
      accent: "#b5873e",
      pale: "#f7eee1",
      swatches: ["#2e2210", "#5c4320", "#b5873e", "#d8b273", "#f7eee1"],
      tagline: "Earthy herbal notes of premium Indian Carom",
    },
    specs: [
      { label: "Purity", value: "98% / 99% / 99.5% Sortex" },
      { label: "Moisture", value: "Max 8% to 10%" },
      { label: "Admixture", value: "Max 1%" },
      { label: "Essential Oil", value: "2.5% to 5.0%" },
      { label: "Color", value: "Greyish green to light brown" },
      { label: "Cleaning", value: "Machine Cleaned & Sortex Cleaned" },
    ],
    qualityGrades: [
      {
        market: "Europe",
        purity: "99.5% Sortex Clean",
        moisture: "Max 8%",
        admixture: "Max 0.5%",
        notes: "High thymol content (3.5%+), low volatile loss, microbiological purity",
      },
      {
        market: "USA",
        purity: "99% ASTA Clean",
        moisture: "Max 9%",
        admixture: "Max 0.8%",
        notes: "Steam treated, uniform seed size, aromatic essential oil retention",
      },
      {
        market: "Gulf",
        purity: "98% / 99%",
        moisture: "Max 9.5%",
        admixture: "Max 1.2%",
        notes: "High herbal aroma for digestive seasonings and bakery formulations",
      },
      {
        market: "Singapore",
        purity: "99% Sortex",
        moisture: "Max 9%",
        admixture: "Max 1.0%",
        notes: "Consistent greenish-grey appearance, zero dead insects or stones",
      },
    ],
    relatedSlugs: [
      "cumin-seeds-exporter-india",
      "fennel-seeds-exporter-india",
      "fenugreek-seeds-exporter-india",
    ],
  },
  {
    slug: "mustard-seeds-exporter-india",
    name: "Mustard Seeds",
    botanicalName: "Brassica juncea",
    origin: "Gujarat / Rajasthan",
    category: "whole",
    shortDescription:
      "Export-grade yellow and brown mustard seeds with high oil content and Sortex purity.",
    description:
      "JM Masala supplies premium Indian mustard seeds for international food processors, spice blenders, pickling manufacturers, and oil extractors. We process small yellow, bold yellow, and black/brown mustard varieties.",
    keySpec: "Purity 99% | Oil Content 38-42%",
    imageUrl: mustardSeedsImage,
    colors: {
      primary: "#332605",
      accent: "#d4a71c",
      pale: "#faf3d9",
      swatches: ["#332605", "#664d0a", "#d4a71c", "#e6c354", "#faf3d9"],
      tagline: "Golden brilliance of Gujarat mustard",
    },
    specs: [
      { label: "Varieties", value: "Small Yellow / Bold Yellow / Black Brown" },
      { label: "Purity", value: "98% / 99% / 99.5%" },
      { label: "Moisture", value: "Max 8%" },
      { label: "Admixture", value: "Max 1%" },
      { label: "Oil Content", value: "38% to 42%" },
      { label: "Cleaning", value: "Machine Cleaned & Sortex Cleaned" },
    ],
    qualityGrades: [
      {
        market: "Europe",
        purity: "99.5% Sortex Clean",
        moisture: "Max 8%",
        admixture: "Max 0.5%",
        notes: "High oil (40%+), bold spherical seeds, tested for erucic acid limits",
      },
      {
        market: "USA",
        purity: "99% ASTA Clean",
        moisture: "Max 8%",
        admixture: "Max 0.8%",
        notes: "Yellow & brown varieties for condiment manufacturing & pickling",
      },
      {
        market: "Gulf",
        purity: "98% / 99%",
        moisture: "Max 8.5%",
        admixture: "Max 1.5%",
        notes: "Black & yellow mustard for whole retail packing and spice blends",
      },
      {
        market: "Singapore",
        purity: "99% Sortex",
        moisture: "Max 8%",
        admixture: "Max 1.0%",
        notes: "Uniform seed diameter, crisp crackle, high pungency",
      },
    ],
    relatedSlugs: [
      "cumin-seeds-exporter-india",
      "coriander-seeds-exporter-india",
      "sesame-seeds-exporter-india",
    ],
  },
  {
    slug: "dry-ginger-exporter-india",
    name: "Dry Ginger",
    botanicalName: "Zingiber officinale",
    origin: "Kerala / Gujarat",
    category: "whole",
    shortDescription:
      "Whole bleached and unbleached dry ginger (Sonth) with rich pungency and volatile oil.",
    description:
      "JM Masala exports premium Indian dry ginger (Sonth) processed into nuggets and splits. Sourced from optimal spice belts and lab-tested for essential oil, low moisture, and clean appearance.",
    keySpec: "Moisture 10-12% | Volatile Oil 1.5-2.5%",
    imageUrl: dryGingerImage,
    colors: {
      primary: "#2e2113",
      accent: "#ab7a46",
      pale: "#f7ebd9",
      swatches: ["#2e2113", "#5c4226", "#ab7a46", "#cca474", "#f7ebd9"],
      tagline: "Warm pungent ginger notes",
    },
    specs: [
      { label: "Format", value: "Whole Bleached / Unbleached (Splits/Nuggets)" },
      { label: "Purity", value: "Min 99%" },
      { label: "Moisture", value: "Max 10% to 12%" },
      { label: "Extraneous Matter", value: "Max 1%" },
      { label: "Volatile Oil", value: "1.5% to 2.5%" },
      { label: "Processing", value: "Hand Selected & Machine Cleaned" },
    ],
    relatedSlugs: [
      "ginger-powder-exporter-india",
      "turmeric-exporter-india",
      "black-pepper-exporter-india",
    ],
  },
  {
    slug: "nigella-seeds-exporter-india",
    name: "Nigella Seeds / Kalonji",
    botanicalName: "Nigella sativa",
    origin: "Gujarat / Madhya Pradesh",
    category: "whole",
    shortDescription:
      "Jet-black, high-purity Kalonji seeds with intense aromatic profile for global export.",
    description:
      "Our Nigella seeds (Kalonji) are selected for deep dark visual appearance, high oil content, and low admixture. Fully Sortex cleaned and packed for global food, bakery, and nutraceutical buyers.",
    keySpec: "Purity 99.5% Sortex | Moisture max 7-8%",
    imageUrl: nigellaSeedsImage,
    colors: {
      primary: "#141414",
      accent: "#6b6b6b",
      pale: "#f0f0f0",
      swatches: ["#141414", "#2e2e2e", "#6b6b6b", "#a3a3a3", "#f0f0f0"],
      tagline: "Deep obsidian purity of premium Kalonji",
    },
    specs: [
      { label: "Purity", value: "99% / 99.5% (Sortex Cleaned)" },
      { label: "Moisture", value: "Max 7% to 8%" },
      { label: "Admixture", value: "Max 0.5% to 1%" },
      { label: "Volatile Oil", value: "1.0% to 1.8%" },
      { label: "Color", value: "Jet Black" },
      { label: "Cleaning", value: "Sortex Cleaned & Destoned" },
    ],
    relatedSlugs: [
      "cumin-seeds-exporter-india",
      "sesame-seeds-exporter-india",
      "ajwain-seeds-exporter-india",
    ],
  },
  {
    slug: "cumin-powder-exporter-india",
    name: "Cumin Powder",
    botanicalName: "Cuminum cyminum",
    origin: "Unjha, Gujarat",
    category: "powders",
    shortDescription:
      "100% pure ground cumin powder milled from Unjha Sortex jeera seeds.",
    description:
      "Milled in controlled hygienic conditions from Unjha cumin seeds. Retains natural essential oils, warm aroma, and rich flavor. Custom mesh sizes and steam sterilization available.",
    keySpec: "100% Pure | Mesh 40-80 | Steam Sterilized",
    imageUrl: cuminPowderImage,
    colors: {
      primary: "#2d1f0e",
      accent: "#c17f3a",
      pale: "#f5e6d0",
      swatches: ["#2d1f0e", "#5c3e1c", "#c17f3a", "#e2ad6e", "#f5e6d0"],
      tagline: "Aromatic ground jeera from Unjha",
    },
    specs: [
      { label: "Mesh Size", value: "40 to 80 mesh custom ground" },
      { label: "Purity", value: "100% Pure Cumin Ground" },
      { label: "Moisture", value: "Max 8%" },
      { label: "Total Ash", value: "Max 8.5%" },
      { label: "Volatile Oil", value: "Min 1.8% to 3.0%" },
      { label: "Sterilization", value: "Steam Sterilized / ETO Free options" },
    ],
    relatedSlugs: [
      "cumin-seeds-exporter-india",
      "coriander-powder-exporter-india",
      "turmeric-powder-exporter-india",
    ],
  },
  {
    slug: "coriander-powder-exporter-india",
    name: "Coriander Powder",
    botanicalName: "Coriandrum sativum",
    origin: "Gujarat",
    category: "powders",
    shortDescription:
      "Aromatic Dhania powder milled from fresh-harvest coriander seeds.",
    description:
      "Cold-milled coriander powder preserving natural green-golden hue and citrusy volatile oils. Free from synthetic additives or fillers, ideal for spice blenders and food packaging.",
    keySpec: "100% Pure | Moisture max 9% | Fine ground",
    imageUrl: corianderPowderImage,
    colors: {
      primary: "#1a2e12",
      accent: "#6fa832",
      pale: "#e8f4d0",
      swatches: ["#1a2e12", "#2e5020", "#6fa832", "#a8d46a", "#e8f4d0"],
      tagline: "Fresh herbal Dhania powder",
    },
    specs: [
      { label: "Mesh Size", value: "40 to 80 mesh" },
      { label: "Purity", value: "100% Pure Coriander Ground" },
      { label: "Moisture", value: "Max 9%" },
      { label: "Total Ash", value: "Max 7%" },
      { label: "Volatile Oil", value: "Min 0.3% to 0.8%" },
      { label: "Milling", value: "Cold-milled process" },
    ],
    relatedSlugs: [
      "coriander-seeds-exporter-india",
      "cumin-powder-exporter-india",
      "turmeric-powder-exporter-india",
    ],
  },
  {
    slug: "turmeric-powder-exporter-india",
    name: "Turmeric Powder",
    botanicalName: "Curcuma longa",
    origin: "Telangana / Gujarat",
    category: "powders",
    shortDescription:
      "Vibrant golden turmeric powder with high curcumin content and zero chromate.",
    description:
      "Ground from polished turmeric fingers. Lab-certified for zero lead chromate, controlled moisture, and guaranteed curcumin levels ranging from 2% to 5%+.",
    keySpec: "Curcumin 2-5%+ | Zero Chromate | 60-100 Mesh",
    imageUrl: turmericPowderImage,
    colors: {
      primary: "#2e1e00",
      accent: "#e89b00",
      pale: "#fff3c4",
      swatches: ["#2e1e00", "#5c3c00", "#e89b00", "#f5c84a", "#fff3c4"],
      tagline: "High curcumin golden radiance",
    },
    specs: [
      { label: "Curcumin", value: "2.0% to 5.0%+ (Grade Aligned)" },
      { label: "Mesh Size", value: "60 to 100 mesh" },
      { label: "Moisture", value: "Max 8% to 9%" },
      { label: "Total Ash", value: "Max 7%" },
      { label: "Lead Chromate", value: "NIL (Lab Certified)" },
      { label: "Processing", value: "Cleaned finger milling" },
    ],
    relatedSlugs: [
      "turmeric-exporter-india",
      "red-chilli-powder-exporter-india",
      "cumin-powder-exporter-india",
    ],
  },
  {
    slug: "red-chilli-powder-exporter-india",
    name: "Red Chilli Powder",
    botanicalName: "Capsicum annuum",
    origin: "Andhra Pradesh",
    category: "powders",
    shortDescription:
      "Vibrant red chilli powder custom-blended by ASTA color and SHU heat levels.",
    description:
      "Export-quality red chilli powder sourced from Guntur red chilli belts. Supplied in Reshampatti, Sanam, Teja, and Kashmiri grades with Aflatoxin and Sudan dye testing.",
    keySpec: "ASTA 60-140 | Heat 15k-90k SHU | Aflatoxin free",
    imageUrl: redChilliPowderImage,
    colors: {
      primary: "#2e0a0a",
      accent: "#cc2222",
      pale: "#fde8e8",
      swatches: ["#2e0a0a", "#5c1414", "#cc2222", "#e87070", "#fde8e8"],
      tagline: "Vibrant crimson pungency",
    },
    specs: [
      { label: "Heat Band (SHU)", value: "15,000 to 90,000 SHU" },
      { label: "ASTA Color", value: "60 to 140 ASTA" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Total Ash", value: "Max 8%" },
      { label: "Aflatoxin", value: "EU/US compliant lab certified" },
      { label: "Grades", value: "Reshampatti / Sanam / Teja / Kashmiri" },
    ],
    relatedSlugs: [
      "red-chilli-exporter-india",
      "turmeric-powder-exporter-india",
      "coriander-powder-exporter-india",
    ],
  },
  {
    slug: "ginger-powder-exporter-india",
    name: "Ginger Powder",
    botanicalName: "Zingiber officinale",
    origin: "Kerala / Gujarat",
    category: "powders",
    shortDescription:
      "Pure dry ginger powder (Sonth) for food manufacturing and spice seasonings.",
    description:
      "Fine micro-milled dry ginger powder with pungent zing and high essential oil content. Ideal for bakery, beverages, spice blends, and nutraceutical processing.",
    keySpec: "100% Pure | Moisture max 9% | 50-80 Mesh",
    imageUrl: gingerPowderImage,
    colors: {
      primary: "#2e2113",
      accent: "#ab7a46",
      pale: "#f7ebd9",
      swatches: ["#2e2113", "#5c4226", "#ab7a46", "#cca474", "#f7ebd9"],
      tagline: "Pure aromatic Sonth powder",
    },
    specs: [
      { label: "Mesh Size", value: "50 to 80 mesh fine powder" },
      { label: "Purity", value: "100% Natural Dried Ginger Ground" },
      { label: "Moisture", value: "Max 9% to 10%" },
      { label: "Volatile Oil", value: "Min 1.5%" },
      { label: "Total Ash", value: "Max 6%" },
      { label: "Applications", value: "Bakery, spice blends, tea & food processing" },
    ],
    relatedSlugs: [
      "dry-ginger-exporter-india",
      "turmeric-powder-exporter-india",
      "cumin-powder-exporter-india",
    ],
  },
  {
    slug: "fenugreek-powder-exporter-india",
    name: "Fenugreek Powder",
    botanicalName: "Trigonella foenum-graecum",
    origin: "Gujarat",
    category: "powders",
    shortDescription:
      "Nutty and aromatic ground Methi powder for spice blends and health formulations.",
    description:
      "Fine ground fenugreek powder milled from machine-cleaned golden seeds. Rich in dietary fiber and protein, suited for food manufacturing and nutraceutical applications.",
    keySpec: "100% Pure | Protein 20-25% | Mesh 40-60",
    imageUrl: fenugreekPowderImage,
    colors: {
      primary: "#2a1f0a",
      accent: "#d4a048",
      pale: "#fae8c5",
      swatches: ["#2a1f0a", "#5c3e1c", "#d4a048", "#e5c485", "#fae8c5"],
      tagline: "Nutty golden Methi powder",
    },
    specs: [
      { label: "Mesh Size", value: "40 to 60 mesh" },
      { label: "Purity", value: "100% Pure Ground Methi" },
      { label: "Moisture", value: "Max 9%" },
      { label: "Protein Content", value: "20% to 25%" },
      { label: "Cleaning", value: "Sortex seed milling" },
      { label: "Packing", value: "25kg PP / paper bags with PE liner" },
    ],
    relatedSlugs: [
      "fenugreek-seeds-exporter-india",
      "coriander-powder-exporter-india",
      "cumin-powder-exporter-india",
    ],
  },
  {
    slug: "dehydrated-onion-exporter-india",
    name: "Dehydrated Onion",
    botanicalName: "Allium cepa",
    origin: "Mahuva, Gujarat",
    category: "agro",
    shortDescription:
      "Export-grade dehydrated onion flakes, kibbled, minced, granules, and powder.",
    description:
      "Sourced from Mahuva, Gujarat onion hub. Supplied in White, Red, and Pink onion variants. Processed with low moisture, high pungency, and strict microbial hygiene.",
    keySpec: "Purity 99.5% | Moisture max 6% | Flakes/Granules/Powder",
    imageUrl: dehydratedOnionImage,
    colors: {
      primary: "#2e1c12",
      accent: "#c46c3b",
      pale: "#faebd7",
      swatches: ["#2e1c12", "#5c3824", "#c46c3b", "#e39a72", "#faebd7"],
      tagline: "Premium Mahuva dehydrated onion",
    },
    specs: [
      { label: "Variants", value: "White Onion / Red Onion / Pink Onion" },
      { label: "Formats", value: "Flakes (Kibbled) / Chopped / Minced / Granules / Powder" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Purity", value: "Min 99.5%" },
      { label: "Microbiology", value: "TPC < 100,000 cfu/g, Salmonella Negative" },
      { label: "Packaging", value: "14-20kg Kraft paper bags / Corrugated carton" },
    ],
    relatedSlugs: [
      "dehydrated-garlic-exporter-india",
      "agro-commodities-exporter-india",
      "psyllium-husk-exporter-india",
    ],
  },
  {
    slug: "dehydrated-garlic-exporter-india",
    name: "Dehydrated Garlic",
    botanicalName: "Allium sativum",
    origin: "Gujarat / MP",
    category: "agro",
    shortDescription:
      "Dehydrated garlic flakes, cloves, minced, granules, and pure garlic powder.",
    description:
      "Dehydrated garlic processed from fresh Indian garlic bulbs. Features intense aroma and low moisture. Perfect for soup mixes, meat seasoning, sauces, and instant foods.",
    keySpec: "Purity 99.5% | Moisture max 6% | Flakes & Powder",
    imageUrl: dehydratedGarlicImage,
    colors: {
      primary: "#242119",
      accent: "#8c826b",
      pale: "#f5f2eb",
      swatches: ["#242119", "#474233", "#8c826b", "#b8b09d", "#f5f2eb"],
      tagline: "Intense aroma dehydrated garlic",
    },
    specs: [
      { label: "Formats", value: "Flakes (Cloves) / Chopped / Minced / Granules / Powder" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Purity", value: "Min 99.5%" },
      { label: "Acid Insoluble Ash", value: "Max 0.5%" },
      { label: "Color", value: "Creamy white to light yellow" },
      { label: "Packaging", value: "20kg Kraft paper bags / cartons with inner poly bag" },
    ],
    relatedSlugs: [
      "dehydrated-onion-exporter-india",
      "agro-commodities-exporter-india",
      "psyllium-husk-exporter-india",
    ],
  },
  {
    slug: "agro-commodities-exporter-india",
    name: "Indian Agro Commodities",
    botanicalName: "Various Agro Produce",
    origin: "Gujarat & India",
    category: "agro",
    shortDescription:
      "Bulk supply of peanuts, chickpeas, sesame, oilseeds, and specialty Indian grains.",
    description:
      "JM Masala facilitates container-load export of key Indian agricultural commodities including Groundnuts/Peanuts, Kabuli Chickpeas, Oilseeds, and Grains with full port shipping terms.",
    keySpec: "Machine & Sortex Cleaned | FCL Loading | FOB Mundra",
    imageUrl: agroCommoditiesImage,
    colors: {
      primary: "#241c10",
      accent: "#a88242",
      pale: "#f7efe1",
      swatches: ["#241c10", "#473820", "#a88242", "#cca86a", "#f7efe1"],
      tagline: "Pan-India agro commodity export strength",
    },
    specs: [
      { label: "Products Handled", value: "Peanuts, Chickpeas (Kabuli), Oilseeds, Rice & Grains" },
      { label: "Cleaning", value: "Machine Cleaned & Sortex Cleaned" },
      { label: "Moisture & Purity", value: "As per buyer contract specifications" },
      { label: "Packaging", value: "25kg / 50kg PP / Jute bags or 1 MT Jumbo bags" },
      { label: "MOQ", value: "1 FCL (20ft / 40ft container load)" },
      { label: "Ports", value: "FOB Mundra / Nhava Sheva / CIF destination" },
    ],
    relatedSlugs: [
      "sesame-seeds-exporter-india",
      "dehydrated-onion-exporter-india",
      "psyllium-husk-exporter-india",
    ],
  },
];

export const PRODUCTS_BY_SLUG = Object.fromEntries(
  PRODUCTS.map((product) => [product.slug, product]),
) as Record<string, ProductData>;

const COMMON_MICROBIOLOGY: TechnicalSpec[] = [
  { label: "Total Plate Count", value: "< 1,000,000 cfu/g" },
  { label: "Yeast & Mold", value: "< 100,000 cfu/g" },
  { label: "E. coli", value: "Absent" },
  { label: "Salmonella", value: "Absent / 25g" },
];

const COMMON_CERTIFICATIONS = [
  "FSSAI licensed facility",
  "ISO 22000 / HACCP aligned processing",
  "APEDA registered exporter",
  "SGS / Intertek / third-party lab reports on request",
];

const COMMON_OPTIONAL_REQUIREMENTS = [
  "Steam sterilization (ETO-free) on request",
  "Cold storage logistics where applicable",
  "Organic certification support (NOP / EU) subject to lot availability",
  "Gluten-free / Non-GMO declarations on request",
];

export const PRODUCT_TECHNICAL_DETAILS: Record<string, ProductTechnicalDetails> = {
  "cumin-seeds-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Cuminum cyminum" },
      { label: "HS Code (ITC-HS)", value: "0909 31 29 (Sortex Whole) / 0909 31 19" },
      { label: "Origin", value: "Unjha, Gujarat, India" },
      { label: "Harvest Season", value: "February to April" },
      { label: "Shelf Life", value: "12 to 24 months in cool, dry storage" },
    ],
    physical: [
      { label: "Purity", value: "99% / 99.5% / 99.9% (Sortex)" },
      { label: "Moisture", value: "Max 8% to 10%" },
      { label: "Admixture", value: "Max 0.5% to 1%" },
      { label: "Foreign Matter", value: "Max 0.5%" },
      { label: "Damaged Seeds", value: "Max 1%" },
      { label: "Immature Seeds", value: "Max 1%" },
      { label: "Color", value: "Brown to dark brown" },
      { label: "Odor", value: "Strong aromatic, typical cumin" },
    ],
    chemical: [
      { label: "Volatile Oil", value: "2.0 to 4.5 ml/100g" },
      { label: "Acid Insoluble Ash", value: "Max 1.5%" },
      { label: "Total Ash", value: "Max 9%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Aflatoxin compliant as per EU standards",
      "Pesticide residue compliant with destination MRL requirements",
      "Lead (Pb): below 2 ppm",
      "Arsenic (As): below 1 ppm",
    ],
    processing: [
      "Direct mandi arrival pre-cleaning & dust aspiration",
      "Destoner & gravity density separation",
      "Sortex optical color sorting (99%, 99.5%, 99.9% purity)",
      "Continuous metal detection & foreign body check",
      "Optional cold-milling into Cumin Powder (40-80 mesh)",
      "Optional steam sterilization (ETO-free) on request",
    ],
    packaging: [
      "Bulk: 25 kg & 50 kg PP bags with inner poly liner",
      "Export: Multi-layer paper bags & food-grade jute bags",
      "Industrial: 1 MT Jumbo FIBC bags for commercial processors",
      "Retail: 50g, 100g, 200g, 500g, 1kg stand-up zipper pouches",
      "Consumer: PET jars, shaker bottles, and branded monocartons",
      "Private label branding, custom artwork & barcoding support",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT (LCL) / 1 FCL for optimal freight economics" },
      { label: "20ft FCL Capacity", value: "Approx. 13 to 14 Metric Tons" },
      { label: "40ft FCL Capacity", value: "Approx. 26 to 27 Metric Tons" },
      { label: "Origin Mandi", value: "APMC Unjha, Gujarat, India" },
      { label: "Loading Port", value: "Mundra Port (Gujarat) / Nhava Sheva (JNPT)" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CFR / CNF" },
      { label: "Payment Terms", value: "LC at sight / Advance TT as agreed" },
      { label: "Lead Time", value: "7 to 15 business days from order confirmation" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "coriander-seeds-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Coriandrum sativum" },
      { label: "HS Code (ITC-HS)", value: "0909 21 90 (Whole Seeds)" },
      { label: "Origin", value: "Gujarat / Rajasthan, India" },
      { label: "Harvest Season", value: "March to May" },
      { label: "Shelf Life", value: "12 to 18 months in dry storage" },
    ],
    physical: [
      { label: "Purity", value: "98% to 99%" },
      { label: "Moisture", value: "8% to 10%" },
      { label: "Split Seeds", value: "Max 5%" },
      { label: "Foreign Matter", value: "Max 1%" },
      { label: "Color", value: "Light brown to greenish" },
      { label: "Size", value: "Approx. 2 to 4 mm diameter" },
      { label: "Grades", value: "Eagle / Scooter / Parrot" },
    ],
    chemical: [
      { label: "Volatile Oil", value: "0.2% to 1.5%" },
      { label: "Total Ash", value: "Max 6%" },
      { label: "Acid Insoluble Ash", value: "Max 1.25%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Aflatoxin and pesticide residue controlled as per buyer market",
      "Heavy metals checked through third-party lab report on request",
    ],
    processing: [
      "Machine cleaned",
      "Density grading",
      "Sortex cleaning on premium lots",
      "Metal detection before dispatch",
    ],
    packaging: [
      "Bulk: 25 kg & 50 kg PP bags with inner poly liner",
      "Export: Multi-wall paper bags & food-grade jute bags",
      "Retail: 50g, 100g, 200g, 500g, 1kg stand-up zipper pouches",
      "Private label branding & barcode printing on request",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT (LCL) / 1 FCL for optimal freight economics" },
      { label: "20ft FCL Capacity", value: "Approx. 7 to 9 Metric Tons" },
      { label: "40ft FCL Capacity", value: "Approx. 17 to 19 Metric Tons" },
      { label: "Loading Port", value: "Mundra Port (Gujarat) / Nhava Sheva (JNPT)" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CFR / CNF" },
      { label: "Lead Time", value: "7 to 15 business days from order confirmation" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "fennel-seeds-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Foeniculum vulgare" },
      { label: "HS Code (ITC-HS)", value: "0909 61 39 (Sortex Whole)" },
      { label: "Origin", value: "Gujarat, India" },
      { label: "Harvest Season", value: "February to April" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    physical: [
      { label: "Purity", value: "99% / 99.5% Sortex" },
      { label: "Moisture", value: "Max 8%" },
      { label: "Color", value: "Light green to vibrant green" },
      { label: "Size", value: "Bold / Medium / Singapore Grade" },
      { label: "Breakage", value: "Low breakage export lots" },
    ],
    chemical: [
      { label: "Volatile Oil", value: "1.5% to 3.0%" },
      { label: "Sweetness", value: "High, export-preferred profile" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Pesticide residue and aflatoxin compliance as per destination market",
    ],
    processing: [
      "Mandi procurement & dust aspiration",
      "Destoning & density gravity grading",
      "Sortex optical sorting for color uniformity",
      "Continuous metal detection before packing",
    ],
    packaging: [
      "Bulk: 25 kg & 50 kg PP export bags with inner liner",
      "Retail: Stand-up zipper pouches & PET jars on request",
      "Private label packaging with custom buyer artwork",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT (LCL) / 1 FCL" },
      { label: "20ft FCL Capacity", value: "Approx. 12 to 13 Metric Tons" },
      { label: "40ft FCL Capacity", value: "Approx. 25 to 26 Metric Tons" },
      { label: "Loading Port", value: "Mundra Port (Gujarat) / Nhava Sheva (JNPT)" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CFR / CNF" },
      { label: "Lead Time", value: "7 to 15 business days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "fenugreek-seeds-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Trigonella foenum-graecum" },
      { label: "Origin", value: "Gujarat, India" },
      { label: "Harvest Season", value: "February to April" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    physical: [
      { label: "Purity", value: "99%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Color", value: "Yellow golden" },
      { label: "Broken", value: "Below 2%" },
      { label: "Grades", value: "Semi-bold / Bold" },
    ],
    chemical: [
      { label: "Protein", value: "20% to 25%" },
      { label: "Fiber", value: "25% to 50%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Pesticide residue and aflatoxin controlled as per buyer requirement",
    ],
    processing: [
      "Machine cleaned",
      "Sortex cleaned",
      "Metal detection",
    ],
    packaging: [
      "25 kg and 50 kg PP bags",
      "Bulk and retail-ready packing on request",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "psyllium-husk-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Plantago ovata" },
      { label: "Origin", value: "Gujarat, India" },
      { label: "Harvest Season", value: "March to May" },
      { label: "Shelf Life", value: "24 months under dry storage" },
    ],
    physical: [
      { label: "Swell Volume", value: "25 to 40 ml/g" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Purity", value: "98% to 99%" },
      { label: "Color", value: "Off-white to cream" },
    ],
    chemical: [
      { label: "Fiber Content", value: "80% to 85%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Heavy metals and pesticide residue checked as per pharma / food use case",
    ],
    processing: [
      "Cleaned and milled as per mesh requirement",
      "Lot-wise lab verification",
      "Metal detection and export-safe packing",
    ],
    packaging: [
      "25 kg multiwall paper bags",
      "HDPE / PP bags with liner",
      "Customized retail packs",
    ],
    certifications: [
      ...COMMON_CERTIFICATIONS,
      "Pharma-grade supply possible under USP / BP aligned requirements",
    ],
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB / CIF / CNF" },
      { label: "Lead Time", value: "10 to 18 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "psyllium-seeds-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Plantago ovata" },
      { label: "Origin", value: "Gujarat, India" },
      { label: "Harvest Season", value: "March to May" },
      { label: "Shelf Life", value: "18 to 24 months" },
    ],
    physical: [
      { label: "Purity", value: "Min 99%" },
      { label: "Moisture", value: "Max 10% to 12%" },
      { label: "Color", value: "Light brown" },
      { label: "Foreign Matter", value: "As per contract grade" },
    ],
    chemical: [
      { label: "Base Ingredient Use", value: "Food, feed, and fiber products" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Lot-wise pesticide residue and heavy metal testing available on request",
    ],
    processing: [
      "Machine cleaned and graded",
      "Metal detection",
      "Moisture-controlled packing",
    ],
    packaging: [
      "25 kg and 50 kg food-safe PP bags with liner",
      "Customized private-label packs on request",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "sesame-seeds-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Sesamum indicum" },
      { label: "Origin", value: "Gujarat, India" },
      { label: "Harvest Season", value: "October to December / seasonal lots" },
      { label: "Shelf Life", value: "12 months under cool, dry storage" },
    ],
    physical: [
      { label: "Purity", value: "Up to 99.5%" },
      { label: "Moisture", value: "Max 6% to 8%" },
      { label: "Color", value: "Natural white / hulled white" },
      { label: "Variants", value: "Natural and hulled" },
    ],
    chemical: [
      { label: "Oil Content", value: "48% to 52%" },
      { label: "FFA", value: "Below 2%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Aflatoxin and pesticide residue checked as per buyer market",
    ],
    processing: [
      "Machine cleaned",
      "Color sorting",
      "Metal detection",
      "Export-safe moisture control",
    ],
    packaging: [
      "25 kg and 50 kg export bags",
      "Vacuum and retail packs on request",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "red-chilli-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Capsicum annuum" },
      { label: "Origin", value: "Andhra Pradesh, India" },
      { label: "Harvest Season", value: "January to April" },
      { label: "Shelf Life", value: "12 months" },
    ],
    physical: [
      { label: "Moisture", value: "Max 12%" },
      { label: "Stemless", value: "Available" },
      { label: "Formats", value: "Whole / stemless / crushed / powder" },
    ],
    chemical: [
      { label: "ASTA Color", value: "80 to 180+" },
      { label: "Capsaicin", value: "As per required SHU range" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Aflatoxin and Sudan dye free supply supported through lab-tested lots",
      "Pesticide residue aligned to destination market requirement",
    ],
    processing: [
      "Cleaning and destemming",
      "Size / color grading",
      "Metal detection",
    ],
    packaging: [
      "25 kg and 50 kg export bags",
      "Compressed or customized packs on request",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Chennai / Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "turmeric-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Curcuma longa" },
      { label: "Origin", value: "Telangana / South India" },
      { label: "Harvest Season", value: "January to March" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    physical: [
      { label: "Moisture", value: "Max 10%" },
      { label: "Formats", value: "Finger / bulb / powder" },
      { label: "Color", value: "Golden yellow to deep orange" },
    ],
    chemical: [
      { label: "Curcumin", value: "2% to 5%+" },
      { label: "Lead Chromate", value: "NIL" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Pesticide residue and heavy metals as per buyer and destination standard",
    ],
    processing: [
      "Polishing and cleaning",
      "Sorting by finger / bulb / powder requirement",
      "Metal detection and lab testing",
    ],
    packaging: [
      "25 kg and 50 kg export bags",
      "Retail packs and powder pouches on request",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Chennai / Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "black-pepper-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Piper nigrum" },
      { label: "Origin", value: "Kerala, India" },
      { label: "Harvest Season", value: "December to March" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    physical: [
      { label: "Density", value: "550 to 600 g/l" },
      { label: "Grade", value: "MG1 FAQ / TGSEB / buyer-specific grade" },
      { label: "Moisture", value: "Max 12%" },
    ],
    chemical: [
      { label: "Piperine", value: "3% to 6%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Pesticide residue and contaminant compliance as per import market",
    ],
    processing: [
      "Cleaning and grading",
      "Density-based sorting",
      "Metal detection",
    ],
    packaging: [
      "25 kg and 50 kg export bags",
      "Vacuum packs on request",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Cochin / Chennai / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "cardamom-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Elettaria cardamomum" },
      { label: "Origin", value: "Kerala / South India" },
      { label: "Harvest Season", value: "Seasonal lots by crop availability" },
      { label: "Shelf Life", value: "12 months under cool, dry storage" },
    ],
    physical: [
      { label: "Size", value: "6 mm / 7 mm / 8 mm+" },
      { label: "Color", value: "Natural green" },
      { label: "Aroma", value: "Strong and premium export quality" },
    ],
    chemical: [
      { label: "Volatile Oil", value: "Buyer and season specific" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Pesticide residue compliance supported through lot-wise testing",
    ],
    processing: [
      "Hand sorting and grading",
      "Color and size segregation",
      "Export-safe packing",
    ],
    packaging: [
      "Vacuum packs",
      "Bulk export packs",
      "Retail jars / pouches on request",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "250 kg onward depending on grade" },
      { label: "Loading Port", value: "Cochin / Chennai / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "curry-leaf-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Murraya koenigii" },
      { label: "Origin", value: "Tamil Nadu / South India" },
      { label: "Formats", value: "Fresh / Dehydrated / Powder" },
      { label: "Shelf Life", value: "Format dependent" },
    ],
    physical: [
      { label: "Fresh Moisture", value: "Approx. 60% to 70%" },
      { label: "Dry Moisture", value: "Below 10%" },
      { label: "Color", value: "Natural green retention" },
    ],
    chemical: [
      { label: "Use Case", value: "Food manufacturing and seasoning" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Format- and destination-based testing supported on request",
    ],
    processing: [
      "Sorting and washing",
      "Controlled dehydration where applicable",
      "Metal detection and buyer-specific packing",
    ],
    packaging: [
      "Fresh leaf transport packs",
      "Dehydrated bulk pouches",
      "Private-label packs on request",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "Format dependent; bulk and retail support available" },
      { label: "Loading Port", value: "Chennai / Nhava Sheva / air shipment support" },
      { label: "Delivery Terms", value: "FOB / CIF / CNF" },
      { label: "Lead Time", value: "Fresh lots faster; dehydrated 7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "ajwain-seeds-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Trachyspermum ammi" },
      { label: "Origin", value: "Gujarat / Rajasthan, India" },
      { label: "Harvest Season", value: "February to April" },
      { label: "Shelf Life", value: "12 to 18 months in dry storage" },
    ],
    physical: [
      { label: "Purity", value: "98% / 99% / 99.5% (Sortex Cleaned)" },
      { label: "Moisture", value: "Max 8% to 10%" },
      { label: "Admixture", value: "Max 1%" },
      { label: "Foreign Matter", value: "Max 0.5%" },
      { label: "Color", value: "Greyish green to light brown" },
    ],
    chemical: [
      { label: "Essential Oil (Thymol)", value: "2.5% to 5.0%" },
      { label: "Total Ash", value: "Max 9%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Pesticide residue compliant with destination market requirement",
    ],
    processing: [
      "Machine cleaned",
      "Sortex color sorting",
      "Metal detection",
    ],
    packaging: [
      "25 kg and 50 kg PP bags with liner",
      "Jute bags on request",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "mustard-seeds-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Brassica juncea" },
      { label: "Origin", value: "Gujarat / Rajasthan, India" },
      { label: "Harvest Season", value: "February to March" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    physical: [
      { label: "Purity", value: "98% / 99% / 99.5%" },
      { label: "Moisture", value: "Max 8%" },
      { label: "Admixture", value: "Max 1%" },
      { label: "Varieties", value: "Small Yellow / Bold Yellow / Black Brown" },
    ],
    chemical: [
      { label: "Oil Content", value: "38% to 42%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Pesticide residue and heavy metals checked per lot COA",
    ],
    processing: [
      "Machine cleaned",
      "Sortex cleaned",
      "Metal detection",
    ],
    packaging: [
      "25 kg and 50 kg PP export bags",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "dry-ginger-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Zingiber officinale" },
      { label: "Origin", value: "Kerala / Gujarat, India" },
      { label: "Harvest Season", value: "January to March" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    physical: [
      { label: "Format", value: "Whole Bleached / Unbleached (Splits / Nuggets)" },
      { label: "Purity", value: "Min 99%" },
      { label: "Moisture", value: "Max 10% to 12%" },
      { label: "Extraneous Matter", value: "Max 1%" },
    ],
    chemical: [
      { label: "Volatile Oil", value: "1.5% to 2.5%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Aflatoxin compliant as per target country standards",
    ],
    processing: [
      "Hand selected and machine cleaned",
      "Sun dried / hot-air dried",
      "Metal detection",
    ],
    packaging: [
      "25 kg and 50 kg Jute or PP bags",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Cochin / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "nigella-seeds-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Nigella sativa" },
      { label: "Origin", value: "Gujarat / MP, India" },
      { label: "Harvest Season", value: "March to April" },
      { label: "Shelf Life", value: "18 to 24 months" },
    ],
    physical: [
      { label: "Purity", value: "99% / 99.5% (Sortex Cleaned)" },
      { label: "Moisture", value: "Max 7% to 8%" },
      { label: "Admixture", value: "Max 0.5% to 1%" },
      { label: "Color", value: "Jet Black" },
    ],
    chemical: [
      { label: "Volatile Oil", value: "1.0% to 1.8%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Pesticide residue checked as per import market standard",
    ],
    processing: [
      "Machine cleaned",
      "Gravity separator & Sortex color sorting",
      "Metal detection",
    ],
    packaging: [
      "25 kg and 50 kg PP export bags",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "cumin-powder-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Cuminum cyminum" },
      { label: "Origin", value: "Unjha, Gujarat, India" },
      { label: "Format", value: "Ground Powder" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    physical: [
      { label: "Mesh Size", value: "40 to 80 mesh custom ground" },
      { label: "Purity", value: "100% Pure Cumin Ground" },
      { label: "Moisture", value: "Max 8%" },
    ],
    chemical: [
      { label: "Volatile Oil", value: "Min 1.8% to 3.0%" },
      { label: "Total Ash", value: "Max 8.5%" },
      { label: "Acid Insoluble Ash", value: "Max 1.2%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Pesticide and aflatoxin test compliant",
    ],
    processing: [
      "Cleaned seed grinding",
      "Steam sterilization option (ETO free)",
      "Sieving and metal detection",
    ],
    packaging: [
      "25 kg Multiwall paper bags with PE liner",
      "Custom retail packs on request",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "coriander-powder-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Coriandrum sativum" },
      { label: "Origin", value: "Gujarat, India" },
      { label: "Format", value: "Ground Powder" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    physical: [
      { label: "Mesh Size", value: "40 to 80 mesh" },
      { label: "Purity", value: "100% Pure Coriander Ground" },
      { label: "Moisture", value: "Max 9%" },
    ],
    chemical: [
      { label: "Volatile Oil", value: "Min 0.3% to 0.8%" },
      { label: "Total Ash", value: "Max 7%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Lab verified COA available per lot",
    ],
    processing: [
      "Cold-milling process",
      "Fine sieving",
      "Metal detection",
    ],
    packaging: [
      "25 kg Multiwall paper / PP bags with PE liner",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "turmeric-powder-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Curcuma longa" },
      { label: "Origin", value: "Telangana / Gujarat, India" },
      { label: "Format", value: "Ground Powder" },
      { label: "Shelf Life", value: "18 to 24 months" },
    ],
    physical: [
      { label: "Mesh Size", value: "60 to 100 mesh" },
      { label: "Color", value: "Vibrant Golden Yellow" },
      { label: "Moisture", value: "Max 8% to 9%" },
    ],
    chemical: [
      { label: "Curcumin Content", value: "2.0% to 5.0%+" },
      { label: "Lead Chromate", value: "NIL (Guaranteed Pure)" },
      { label: "Total Ash", value: "Max 7%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Zero artificial colors, Sudan dye free, Aflatoxin compliant",
    ],
    processing: [
      "Polished finger milling",
      "Steam sterilization option",
      "Metal detection before packing",
    ],
    packaging: [
      "25 kg Kraft paper bags with food-grade liner",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva / Chennai" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "red-chilli-powder-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Capsicum annuum" },
      { label: "Origin", value: "Andhra Pradesh, India" },
      { label: "Format", value: "Ground Powder" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    physical: [
      { label: "Grades", value: "Reshampatti / Sanam / Teja / Kashmiri" },
      { label: "Color Value", value: "60 to 140 ASTA" },
      { label: "Moisture", value: "Max 10%" },
    ],
    chemical: [
      { label: "Pungency (Heat)", value: "15,000 to 90,000 SHU" },
      { label: "Total Ash", value: "Max 8%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Aflatoxin & Ochratoxin compliant as per EU/US standards",
      "Sudan dye free declaration with COA",
    ],
    processing: [
      "Destemming and cleaned pod milling",
      "Mesh sizing and metal detection",
    ],
    packaging: [
      "25 kg Multiwall paper bags / laminated PP bags",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Chennai / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "ginger-powder-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Zingiber officinale" },
      { label: "Origin", value: "Kerala / Gujarat, India" },
      { label: "Format", value: "Ground Powder (Sonth)" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    physical: [
      { label: "Mesh Size", value: "50 to 80 mesh" },
      { label: "Color", value: "Off-white to light beige" },
      { label: "Moisture", value: "Max 9% to 10%" },
    ],
    chemical: [
      { label: "Volatile Oil", value: "Min 1.5%" },
      { label: "Total Ash", value: "Max 6%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Pesticide residue testing available per lot",
    ],
    processing: [
      "Dry ginger root milling",
      "Metal detection",
    ],
    packaging: [
      "25 kg Kraft paper bags with PE liner",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "fenugreek-powder-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Trigonella foenum-graecum" },
      { label: "Origin", value: "Gujarat, India" },
      { label: "Format", value: "Ground Powder (Methi)" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    physical: [
      { label: "Mesh Size", value: "40 to 60 mesh" },
      { label: "Purity", value: "100% Pure Ground Methi" },
      { label: "Moisture", value: "Max 9%" },
    ],
    chemical: [
      { label: "Protein Content", value: "20% to 25%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Pesticide residue checked as per contract",
    ],
    processing: [
      "Clean seed grinding",
      "Metal detection",
    ],
    packaging: [
      "25 kg PP / paper bags with PE liner",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "dehydrated-onion-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Allium cepa" },
      { label: "Origin", value: "Mahuva, Gujarat, India" },
      { label: "Harvest Season", value: "January to May" },
      { label: "Shelf Life", value: "24 months under dry storage" },
    ],
    physical: [
      { label: "Variants", value: "White Onion / Red Onion / Pink Onion" },
      { label: "Formats", value: "Flakes (Kibbled) / Chopped / Minced / Granules / Powder" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Purity", value: "Min 99.5%" },
    ],
    chemical: [
      { label: "Acid Insoluble Ash", value: "Max 0.5%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Strict food safety and heavy metal compliance",
    ],
    processing: [
      "Washing and slicing",
      "Controlled hot-air dehydration",
      "Optical sorting & metal detection",
    ],
    packaging: [
      "14 kg - 20 kg Kraft paper bags / Corrugated carton with poly liner",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "dehydrated-garlic-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Allium sativum" },
      { label: "Origin", value: "Gujarat / MP, India" },
      { label: "Harvest Season", value: "February to April" },
      { label: "Shelf Life", value: "24 months under dry storage" },
    ],
    physical: [
      { label: "Formats", value: "Flakes (Cloves) / Chopped / Minced / Granules / Powder" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Purity", value: "Min 99.5%" },
      { label: "Color", value: "Creamy white to light yellow" },
    ],
    chemical: [
      { label: "Acid Insoluble Ash", value: "Max 0.5%" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Lab report COA supported per lot",
    ],
    processing: [
      "Clove separation and peeling",
      "Hot-air dehydration & size milling",
      "Metal detection",
    ],
    packaging: [
      "20 kg Kraft paper bags / cartons with inner poly bag",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT onward" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "agro-commodities-exporter-india": {
    general: [
      { label: "Commodity Scope", value: "Peanuts, Chickpeas, Sesame, Oilseeds, Grains" },
      { label: "Origin", value: "Gujarat & Pan-India Sourcing" },
      { label: "Harvest Season", value: "Crop dependent" },
      { label: "Shelf Life", value: "Product dependent" },
    ],
    physical: [
      { label: "Cleaning", value: "Machine Cleaned & Sortex Cleaned" },
      { label: "Purity", value: "Min 98% to 99.5% (Contract aligned)" },
      { label: "Moisture", value: "As per product standard (Max 7-10%)" },
    ],
    chemical: [
      { label: "Quality Checks", value: "Aflatoxin, FFA, Protein as applicable" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Phytosanitary & SGS inspection support",
    ],
    processing: [
      "Mandi procurement",
      "Density & Sortex cleaning",
      "Container loading & stuffing",
    ],
    packaging: [
      "25 kg / 50 kg PP or Jute bags, 1 MT Jumbo bags",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 FCL (20ft / 40ft container)" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB Mundra / CIF / CNF" },
      { label: "Lead Time", value: "10 to 18 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
};

export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPostFaq = {
  question: string;
  answer: string;
};

export type BlogPostSummary = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  keywords: string[];
  sections: BlogPostSection[];
  faqs?: BlogPostFaq[];
  relatedProductSlugs: string[];
};

export const BLOG_POSTS: BlogPostSummary[] = [
  {
    slug: "cumin-seeds-quality-grades-europe-usa-gulf-singapore",
    title: "Cumin Seeds Quality Grades: Europe vs USA vs Gulf vs Singapore",
    date: "2026-03-01",
    excerpt:
      "A buyer-focused guide to how cumin specifications change across Europe, USA, Gulf and Singapore markets.",
    keywords: [
      "cumin seeds exporter India",
      "cumin quality grades",
      "Unjha cumin supplier",
      "cumin seeds export specifications",
    ],
    sections: [
      {
        heading: "Why cumin grades differ by market",
        paragraphs: [
          "Cumin buyers do not all buy on the same quality logic. A European importer may focus more on lower admixture and stronger documentation, while a Gulf wholesaler may accept a more commercial grade if color, aroma, and price are balanced.",
          "That is why exporters should not quote only one generic cumin specification. The better approach is to align purity, moisture, sorting level, and packing with the destination market and the final use of the product.",
        ],
      },
      {
        heading: "Typical market expectations",
        paragraphs: [
          "The following patterns are common in trade discussions, but final contracts should always be lot-specific and buyer-approved.",
        ],
        bullets: [
          "Europe: lower admixture, cleaner appearance, stronger compliance focus.",
          "USA: high-purity lots with stable aroma and consistent visual quality.",
          "Gulf: balanced commercial grades with competitive landed value.",
          "Singapore: reliable medium to high purity with consistent moisture and color.",
        ],
      },
      {
        heading: "What buyers should confirm before booking",
        paragraphs: [
          "Before confirming a cumin order, buyers should review more than price. The practical checkpoints are purity band, moisture range, foreign matter, crop year, cleaning method, packing type, and available laboratory reports.",
          "It is also helpful to confirm whether the quoted lot is machine cleaned, gravity separated, or Sortex cleaned. These processing steps affect export suitability, complaint risk, and the consistency of repeat shipments.",
        ],
        bullets: [
          "Purity and moisture committed in the final contract",
          "Admixture and foreign matter limits",
          "Sortex and metal detection status",
          "Packing format and shipment markings",
          "COA, phytosanitary, fumigation, and origin documents where required",
        ],
      },
      {
        heading: "How JM Masala supports cumin buyers",
        paragraphs: [
          "JM Masala works from Unjha, Gujarat, so cumin is not just one more item in the catalog. We support buyer discussions with grade-wise clarity, lot-wise testing support, and packing formats aligned to wholesale, food service, and import distribution needs.",
          "For serious cumin buyers, the goal is simple: match the specification to the destination market instead of forcing one grade into every country.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which cumin grade is usually preferred for Europe?",
        answer:
          "European buyers often prefer cleaner lots with lower admixture and stronger documentation support, but the final grade still depends on the buyer's application and contract terms.",
      },
      {
        question: "Can one cumin grade work for multiple countries?",
        answer:
          "Sometimes yes, but it is safer to align the grade to the strictest buyer requirement in the shipment plan so there is less risk of quality mismatch after arrival.",
      },
    ],
    relatedProductSlugs: [
      "cumin-seeds-exporter-india",
      "coriander-seeds-exporter-india",
      "fennel-seeds-exporter-india",
    ],
  },
  {
    slug: "why-unjha-gujarat-is-worlds-cumin-capital",
    title: "Why Unjha, Gujarat Is the World's Cumin Capital",
    date: "2026-03-01",
    excerpt:
      "Why Unjha matters in global cumin trade and how that origin gives importers a sourcing advantage.",
    keywords: [
      "Unjha cumin market",
      "cumin exporter Unjha Gujarat",
      "spice exporter from Unjha",
      "cumin supplier India",
    ],
    sections: [
      {
        heading: "Why origin matters in spice buying",
        paragraphs: [
          "In commodity trade, origin affects more than storytelling. It influences availability, market intelligence, lot freshness, trader access, and how quickly an exporter can respond when quality or pricing changes after harvest.",
          "For cumin, Unjha is one of the most important trade points in India. Buyers looking for steady cumin sourcing often prefer partners close to this market because that reduces information gaps and procurement delays.",
        ],
      },
      {
        heading: "What makes Unjha important",
        paragraphs: [
          "Unjha is known for deep cumin trade activity, strong mandi linkages, and a commercial ecosystem built around seeds, grading, testing, and movement. This concentration matters because exporters can source with more speed and visibility.",
        ],
        bullets: [
          "Direct access to large cumin arrivals during season",
          "Trade intelligence from the mandi ecosystem",
          "Better visibility on price movement and crop quality",
          "Fast access to cleaning, sorting, transport, and documentation support",
        ],
      },
      {
        heading: "How this benefits importers",
        paragraphs: [
          "For an importer, origin advantage shows up in practical ways. Faster procurement can reduce delays, closer market access can improve grade matching, and a stronger local network can help secure the right lots when demand is high.",
          "This does not remove the need for proper testing and documentation, but it does improve the exporter's ability to execute consistently on buyer requirements.",
        ],
      },
      {
        heading: "Why JM Masala highlights Unjha",
        paragraphs: [
          "JM Masala is rooted in Unjha, Gujarat, which is why cumin remains one of the strongest products in our export portfolio. We combine local sourcing strength with export-ready communication, packing, and specification support.",
          "For buyers searching for a cumin exporter from India, understanding the role of Unjha helps explain why origin can be a real commercial advantage and not just a branding statement.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Unjha only important for cumin?",
        answer:
          "Unjha is strongly associated with cumin and seed trade, but its wider trading ecosystem also supports other products and supply chain services connected to spice exports.",
      },
      {
        question: "Does buying from an Unjha-based exporter guarantee quality?",
        answer:
          "No location alone guarantees quality. Buyers should still confirm specifications, testing, packing, and documents, but an Unjha base can improve sourcing access and execution.",
      },
    ],
    relatedProductSlugs: [
      "cumin-seeds-exporter-india",
      "fenugreek-seeds-exporter-india",
      "psyllium-seeds-exporter-india",
    ],
  },
  {
    slug: "complete-guide-importing-spices-from-india",
    title: "Complete Guide to Importing Spices from India",
    date: "2026-03-01",
    excerpt:
      "A practical import guide covering specifications, documents, packing, and supplier checks for spice buyers sourcing from India.",
    keywords: [
      "import spices from India",
      "Indian spice exporter guide",
      "spice import documentation",
      "bulk spice supplier India",
    ],
    sections: [
      {
        heading: "Start with specification, not only price",
        paragraphs: [
          "The most common mistake in spice buying is comparing prices before locking the specification. A cheaper price can reflect lower purity, higher moisture, weaker cleaning, or less suitable packing.",
          "For importers, the first step should be a written specification sheet that matches the destination market, product application, and buyer tolerance for variation.",
        ],
      },
      {
        heading: "Documents importers usually ask for",
        paragraphs: [
          "The exact document set depends on the country and product, but serious buyers usually review a standard export pack before shipment approval.",
        ],
        bullets: [
          "Commercial invoice and packing list",
          "Certificate of origin where required",
          "Phytosanitary certificate if applicable",
          "Fumigation certificate for the shipment",
          "Laboratory COA or buyer-requested test report",
          "Bill of lading and shipment markings",
        ],
      },
      {
        heading: "Packing and logistics planning",
        paragraphs: [
          "Packing should be agreed at the quotation stage, especially for moisture-sensitive or appearance-sensitive products. Bulk bags, retail packs, vacuum packs, liners, and pallet rules can all affect export readiness.",
          "It is also useful to confirm lead time, loading port, incoterm, and whether multiple products can be consolidated into one shipment.",
        ],
      },
      {
        heading: "How to evaluate an Indian spice exporter",
        paragraphs: [
          "Buyers should look for clear product pages, lot-wise communication, realistic claims, traceable origin, and the ability to explain processing steps. Certifications help, but consistency in documents and responses matters just as much.",
          "A dependable exporter should be able to discuss product specifications, packaging options, sample flow, payment terms, and shipment support without relying on vague promises.",
        ],
      },
    ],
    faqs: [
      {
        question: "What should a buyer confirm before placing the first spice order from India?",
        answer:
          "Confirm the full product specification, packing details, documentation set, shipment terms, payment terms, and sample approval process before placing the order.",
      },
      {
        question: "Do all spices need the same documents?",
        answer:
          "No. Documentation can vary by product type, importing country, and buyer requirement, so it is better to confirm destination-specific needs before dispatch.",
      },
    ],
    relatedProductSlugs: [
      "cumin-seeds-exporter-india",
      "turmeric-exporter-india",
      "red-chilli-exporter-india",
    ],
  },
  {
    slug: "psyllium-husk-vs-psyllium-seeds-explained",
    title: "Psyllium Husk vs Psyllium Seeds: Explained",
    date: "2026-03-01",
    excerpt:
      "A clear comparison of psyllium husk and psyllium seeds for nutraceutical, food, and processing buyers.",
    keywords: [
      "psyllium husk exporter India",
      "psyllium seeds exporter India",
      "psyllium husk vs seeds",
      "Plantago ovata supplier",
    ],
    sections: [
      {
        heading: "The basic difference",
        paragraphs: [
          "Psyllium husk and psyllium seeds come from the same plant, Plantago ovata, but they are sold for different use cases. Husk is the outer covering and is typically selected for higher fiber and swell-related applications.",
          "Psyllium seeds are the whole seed format and are used where the buyer requires seed form for further processing, extraction, or specialized formulations.",
        ],
      },
      {
        heading: "What buyers usually compare",
        paragraphs: [
          "The buying conversation usually changes depending on whether the customer is in nutraceuticals, food processing, or ingredient trading.",
        ],
        bullets: [
          "Psyllium husk: swell volume, mesh, moisture, microbiology, and fiber-focused performance.",
          "Psyllium seeds: purity, moisture, seed appearance, foreign matter, and suitability for downstream processing.",
        ],
      },
      {
        heading: "How to choose the right format",
        paragraphs: [
          "If the end use depends on fiber expansion and functional performance, husk is usually the correct commercial discussion. If the buyer needs the seed itself as an input, then seed-grade supply becomes the right direction.",
          "Because psyllium is often buyer-specification-driven, it is useful to align on technical parameters and intended use before quoting volume and packing.",
        ],
      },
      {
        heading: "How JM Masala supports psyllium buyers",
        paragraphs: [
          "JM Masala supports both psyllium husk and psyllium seeds with export-oriented specifications, packing options, and document support. This helps buyers compare formats based on application instead of guessing from generic catalog descriptions.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is psyllium husk better than psyllium seeds?",
        answer:
          "Neither is universally better. The correct choice depends on the buyer's application, whether the need is for husk performance or whole-seed processing use.",
      },
      {
        question: "Can one exporter supply both psyllium husk and psyllium seeds?",
        answer:
          "Yes. Many buyers prefer one exporter who can discuss both formats clearly and support the right specification for the final application.",
      },
    ],
    relatedProductSlugs: [
      "psyllium-husk-exporter-india",
      "psyllium-seeds-exporter-india",
      "fenugreek-seeds-exporter-india",
    ],
  },
  {
    slug: "haccp-certification-spice-processing-buyers-guide",
    title: "HACCP Certification in Spice Processing: Buyer Guide",
    date: "2026-03-01",
    excerpt:
      "What HACCP certification means in spice exports and what serious buyers should still verify beyond the certificate.",
    keywords: [
      "HACCP spice exporter India",
      "spice processing certification",
      "HACCP buyer guide spices",
      "certified spice exporter India",
    ],
    sections: [
      {
        heading: "What HACCP means in spice processing",
        paragraphs: [
          "HACCP refers to a structured food safety approach based on hazard analysis and critical control points. In spice processing, buyers often view HACCP as a sign that the exporter works with a more disciplined quality and process framework.",
          "It is an important trust signal, but buyers should treat it as part of a wider quality review rather than the only approval checkpoint.",
        ],
      },
      {
        heading: "Why buyers ask for HACCP",
        paragraphs: [
          "Importers, food brands, and processors often need supplier evidence that food safety risks are being managed consistently. HACCP helps support that conversation because it points to formalized process controls and audit discipline.",
        ],
        bullets: [
          "Stronger confidence in processing control",
          "Better support during supplier onboarding",
          "Useful signal for retail, food service, and manufacturing buyers",
          "Helps frame quality conversations with procurement and compliance teams",
        ],
      },
      {
        heading: "What to verify beyond the certificate",
        paragraphs: [
          "A certificate is useful, but buyers should also review actual operational readiness. Lot-wise testing, moisture control, cleaning stages, packing hygiene, complaint handling, and document discipline all matter in real shipments.",
          "In practice, the strongest exporters combine certification with transparent communication on how lots are cleaned, tested, packed, and documented.",
        ],
      },
      {
        heading: "How JM Masala positions HACCP in export discussions",
        paragraphs: [
          "JM Masala uses HACCP as part of a broader exporter profile that also includes specifications, packing options, quality documents, and shipment communication. That gives buyers a more complete picture than certification alone.",
          "For procurement teams, the best supplier conversation combines paperwork with operational clarity, because shipments are won or lost on execution.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does HACCP certification guarantee every shipment will be acceptable?",
        answer:
          "No. It improves confidence in process control, but buyers should still verify product specifications, test reports, and shipment documents for each order.",
      },
      {
        question: "Why do importers still ask for lab reports when HACCP is available?",
        answer:
          "Because certification does not replace lot-specific quality confirmation. Lab reports remain important for moisture, purity, microbiology, and destination-market compliance checks.",
      },
    ],
    relatedProductSlugs: [
      "cumin-seeds-exporter-india",
      "black-pepper-exporter-india",
      "turmeric-exporter-india",
    ],
  },
];

export const DOCUMENTATION_PACKAGE = [
  "Phytosanitary certificate",
  "Fumigation certificate",
  "NABL lab COA",
  "Certificate of Origin",
  "APEDA certificate",
  "Commercial invoice",
  "Packing list",
  "Bill of Lading",
];
