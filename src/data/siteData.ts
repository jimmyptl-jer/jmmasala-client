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

export const SITE_URL = "https://jmmasalaexports.com";

export const COMPANY = {
  name: "JM Masala",
  legalName: "JM Masala Exports",
  email: "jmmasalaexports@gmail.com",
  website: "jmmasalaexports.com",
  phones: ["+91 91067 66041", "+91 98245 10478"],
  addressLine:
    "Near APMC Market Yard, Unjha, Mehsana District, Gujarat 384170, India",
  whatsappNumber: "919106766041",
  whatsappMessage:
    "Hi JM Masala, I am interested in your spices. Can you share specifications and pricing?",
};

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
  { label: "Quality and Certifications", path: "/quality-certifications" },
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

export type ProductCategory = "north" | "south" | "powders";

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
      { label: "Purity", value: "98% / 99% / 99.5%" },
      { label: "Moisture", value: "Max 8% to 10%" },
      { label: "Admixture", value: "Max 1% to 3% by market grade" },
      { label: "Oil Content", value: "2.5% to 4.5%" },
      { label: "Color", value: "Brown to dark brown" },
      { label: "Crop Year", value: "Latest available" },
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
      "Machine cleaned",
      "Gravity separator applied",
      "Sortex color sorting",
      "Metal detection before packing",
    ],
    packaging: [
      "25 kg and 50 kg PP bags",
      "Jute bags",
      "Vacuum packing",
      "Customized retail packs",
    ],
    certifications: COMMON_CERTIFICATIONS,
    exportDetails: [
      { label: "MOQ", value: "1 MT to 20 MT (FCL support available)" },
      { label: "Loading Port", value: "Mundra / Nhava Sheva" },
      { label: "Delivery Terms", value: "FOB / CIF / CNF" },
      { label: "Lead Time", value: "7 to 15 days" },
    ],
    optionalBuyerRequirements: COMMON_OPTIONAL_REQUIREMENTS,
  },
  "coriander-seeds-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Coriandrum sativum" },
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
      "25 kg and 50 kg PP bags with liner",
      "Jute packing on request",
      "Private-label retail packs on request",
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
  "fennel-seeds-exporter-india": {
    general: [
      { label: "Botanical Name", value: "Foeniculum vulgare" },
      { label: "Origin", value: "Gujarat, India" },
      { label: "Harvest Season", value: "February to April" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    physical: [
      { label: "Purity", value: "99%" },
      { label: "Moisture", value: "Max 8%" },
      { label: "Color", value: "Light green to green" },
      { label: "Size", value: "Bold / Medium" },
      { label: "Breakage", value: "Low breakage export lots" },
    ],
    chemical: [
      { label: "Volatile Oil", value: "1.5% to 3%" },
      { label: "Sweetness", value: "High, export-preferred profile" },
    ],
    microbiological: COMMON_MICROBIOLOGY,
    contaminants: [
      "Pesticide residue and aflatoxin compliance as per destination market",
    ],
    processing: [
      "Cleaning and destoning",
      "Size grading",
      "Sortex on premium export lots",
      "Metal detection",
    ],
    packaging: [
      "25 kg and 50 kg export bags",
      "Retail and private-label packs on request",
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
};

export type BlogPostSummary = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export const BLOG_POSTS: BlogPostSummary[] = [
  {
    slug: "cumin-seeds-quality-grades-europe-usa-gulf-singapore",
    title: "Cumin Seeds Quality Grades: Europe vs USA vs Gulf vs Singapore",
    date: "2026-03-01",
    excerpt:
      "Placeholder article page created. Content will be added separately.",
  },
  {
    slug: "why-unjha-gujarat-is-worlds-cumin-capital",
    title: "Why Unjha, Gujarat Is the World's Cumin Capital",
    date: "2026-03-01",
    excerpt:
      "Placeholder article page created. Content will be added separately.",
  },
  {
    slug: "complete-guide-importing-spices-from-india",
    title: "Complete Guide to Importing Spices from India",
    date: "2026-03-01",
    excerpt:
      "Placeholder article page created. Content will be added separately.",
  },
  {
    slug: "psyllium-husk-vs-psyllium-seeds-explained",
    title: "Psyllium Husk vs Psyllium Seeds: Explained",
    date: "2026-03-01",
    excerpt:
      "Placeholder article page created. Content will be added separately.",
  },
  {
    slug: "haccp-certification-spice-processing-buyers-guide",
    title: "HACCP Certification in Spice Processing: Buyer Guide",
    date: "2026-03-01",
    excerpt:
      "Placeholder article page created. Content will be added separately.",
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
