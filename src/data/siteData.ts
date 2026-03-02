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
  email: "jmmasala@outlook.in",
  website: "jmmasalaexports.com",
  phones: ["+91 91067 66041", "+91 98245 10478"],
  addressLine:
    "Near APMC Market Yard, Unjha, Mehsana District, Gujarat 384170, India",
  whatsappNumber: "919106766041",
  whatsappMessage:
    "Hi JM Masala, I am interested in your spices. Can you share specifications and pricing?",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
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

export type QualityGrade = {
  market: string;
  purity: string;
  moisture: string;
  admixture: string;
  notes: string;
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
