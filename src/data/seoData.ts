/**
 * seoData.ts
 * Per-page SEO titles, descriptions, and schemas.
 * Kept separate from siteData.ts to avoid bloating the main data file.
 */

// ── Product page SEO titles (keyword-optimised, under 65 chars) ──
export const PRODUCT_SEO_TITLES: Record<string, string> = {
  "cumin-seeds-exporter-india":
    "Cumin Seeds Exporter India | Unjha Gujarat | JM Masala",
  "coriander-seeds-exporter-india":
    "Coriander Seeds Exporter India | HACCP Certified | JM Masala",
  "fennel-seeds-exporter-india":
    "Fennel Seeds Exporter India | Saunf Supplier Gujarat | JM Masala",
  "fenugreek-seeds-exporter-india":
    "Fenugreek Seeds Exporter India | Methi Seeds | JM Masala",
  "psyllium-husk-exporter-india":
    "Psyllium Husk Exporter India | Isabgol | Gujarat | JM Masala",
  "psyllium-seeds-exporter-india":
    "Psyllium Seeds Exporter India | Plantago ovata | JM Masala",
  "sesame-seeds-exporter-india":
    "Sesame Seeds Exporter India | Natural & Hulled | JM Masala",
  "red-chilli-exporter-india":
    "Red Chilli Exporter India | Whole & Stemless | JM Masala",
  "turmeric-exporter-india":
    "Turmeric Exporter India | High Curcumin | Telangana | JM Masala",
  "black-pepper-exporter-india":
    "Black Pepper Exporter India | MG1 FAQ Grade | JM Masala",
  "cardamom-exporter-india":
    "Cardamom Exporter India | Green Cardamom Kerala | JM Masala",
  "curry-leaf-exporter-india":
    "Curry Leaf Exporter India | Fresh & Dehydrated | JM Masala",
};

// ── Product page SEO descriptions (keyword-rich, under 155 chars) ──
export const PRODUCT_SEO_DESCRIPTIONS: Record<string, string> = {
  "cumin-seeds-exporter-india":
    "Export-grade cumin seeds from Unjha, Gujarat. Purity up to 99.5%, moisture max 8–10%. HACCP certified, APEDA registered. Custom packing & market-specific grades. Get a quote.",
  "coriander-seeds-exporter-india":
    "Cleaned coriander seeds (Eagle, Parrot, Badami varieties) from Gujarat. Purity min 98%, Sortex cleaned. HACCP certified Indian spice exporter. FOB/CIF supply. Request sample.",
  "fennel-seeds-exporter-india":
    "Sweet-aroma fennel seeds from Gujarat. Purity min 99%, bold and Singapore grade available. HACCP certified exporter. Custom packing and export documentation. Get a quote today.",
  "fenugreek-seeds-exporter-india":
    "Golden fenugreek seeds for food, pharma and nutraceutical buyers. Purity 99%, Sortex cleaned. HACCP ISO 22000 certified spice exporter from Gujarat India. Request quote.",
  "psyllium-husk-exporter-india":
    "High-swelling psyllium husk (isabgol) for pharma and nutraceutical buyers. Swell volume 25–40 ml/g, NABL lab tested. HACCP ISO 22000 certified exporter from Gujarat India.",
  "psyllium-seeds-exporter-india":
    "Export-grade psyllium seeds (Plantago ovata) from Gujarat. Purity min 99%, NABL lab tested. HACCP certified Indian spice exporter. Bulk PP bags with liner. Get a quote.",
  "sesame-seeds-exporter-india":
    "Natural and hulled sesame seeds from Gujarat. Purity 98–99.5%, moisture max 8%. For bakery, tahini and oil extraction buyers. HACCP certified exporter. Custom packing available.",
  "red-chilli-exporter-india":
    "Whole, stemless and crushed red chilli from Andhra Pradesh. ASTA color graded, aflatoxin tested. HACCP certified Indian spice exporter. FOB/CIF supply. Request a quote today.",
  "turmeric-exporter-india":
    "Finger and powder turmeric from Telangana with high curcumin options (2–5%+). NABL COA, HACCP certified exporter from India. Custom grades for EU, USA and Gulf markets.",
  "black-pepper-exporter-india":
    "MG1 FAQ and premium grade black pepper from Kerala. Moisture max 12%, high piperine. HACCP certified spice exporter India. 25kg and 50kg packs. Request specifications and quote.",
  "cardamom-exporter-india":
    "Green cardamom from Kerala, size graded 5mm–7mm. Strong aroma, natural colour retention. HACCP certified Indian spice exporter. Vacuum and bulk packing. Request a quote.",
  "curry-leaf-exporter-india":
    "Fresh and dehydrated curry leaf from Tamil Nadu. Moisture controlled, sorted and washed. HACCP certified Indian spice exporter. Retail and bulk packing options. Get a quote.",
};

// ── Static page SEO ──
export const PAGE_SEO: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: "Indian Spice Exporter from Unjha Gujarat | JM Masala",
    description:
      "HACCP certified Indian spice exporter from Unjha, Gujarat. Cumin, coriander, turmeric, red chilli, black pepper, cardamom, psyllium and more. Custom packing, private label, full export documentation.",
  },
  "/products": {
    title: "Indian Spices Export Catalogue | 12+ Varieties | JM Masala",
    description:
      "Complete range of export-grade Indian spices: cumin, coriander, fennel, fenugreek, turmeric, red chilli, black pepper, cardamom, sesame, psyllium. HACCP certified, APEDA registered.",
  },
  "/about-jm-masala": {
    title: "About JM Masala | Spice Exporter from Unjha Gujarat | Two Generations",
    description:
      "JM Masala Exports is a two-generation spice trading family from Unjha, Gujarat — India's largest spice hub. HACCP certified, APEDA & Spice Board registered. Supplying 30+ countries.",
  },
  "/quality-certifications": {
    title: "Quality Certifications | HACCP ISO 22000 APEDA | JM Masala",
    description:
      "JM Masala holds HACCP, ISO 22000, APEDA, Spice Board RCMC, FSSAI and IEC certifications. Every shipment backed by NABL lab tests, phytosanitary and fumigation certificates.",
  },
  "/sourcing-network": {
    title: "Spice Sourcing Network | Unjha Gujarat & South India | JM Masala",
    description:
      "Dual sourcing network: Unjha mandi for north Indian spices and trusted South India partners for turmeric, pepper, cardamom and curry leaf. Direct from origin with traceability.",
  },
  "/domestic-supply-india": {
    title: "Domestic Spice Supplier India | Bulk Wholesale | JM Masala",
    description:
      "Bulk and wholesale spice supply for domestic buyers in India. Cumin, coriander, fennel, fenugreek, turmeric and more. FSSAI licensed, custom packing and private label available.",
  },
  "/cold-pressed-oils": {
    title: "Cold Pressed Oils Exporter India | Natural Oils | JM Masala",
    description:
      "Export-grade cold pressed oils from India. Natural, unrefined and chemical-free. Wholesale and retail packing available. HACCP certified, FSSAI licensed. Request a quote.",
  },
  "/contact": {
    title: "Contact JM Masala | Request Spice Export Quote | Unjha Gujarat",
    description:
      "Contact JM Masala Exports for spice sourcing enquiries, bulk export quotes and sample requests. Based in Unjha, Gujarat, India. WhatsApp, email and inquiry form available.",
  },
  "/blog": {
    title: "Spice Export Insights | Blog | JM Masala",
    description:
      "Expert articles on spice export from India — quality grades, import guides, HACCP compliance, sourcing tips and market insights from JM Masala, Unjha Gujarat.",
  },
};
