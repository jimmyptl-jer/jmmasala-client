import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Ship,
  Globe2,
  FileCheck,
  Package,
  CheckCircle2,
  Clock,
  Scale,
  Anchor,
  FileText,
  MapPin,
  ArrowRight,
  HelpCircle,
  Truck,
  Check
} from "lucide-react";
import Seo from "@/components/Seo";
import QuotationForm from "@/components/quote/QuotationForm";
import { COMPANY, SITE_URL } from "@/data/siteData";

/* ─────────────────────────── CONSTANTS & DATA ─────────────────────────── */

const EXPORT_PORTS = [
  {
    name: "Mundra Port (INMUN1)",
    role: "Primary Export Gateway",
    distance: "~320 km from Unjha Processing Plant",
    state: "Gujarat, India",
    highlight: "India's largest commercial port with high-frequency direct container liner calls.",
    transitTimes: [
      { destination: "Jebel Ali / Dubai, UAE", days: "3 – 5 Days" },
      { destination: "Dammam / Jeddah, Saudi Arabia", days: "5 – 8 Days" },
      { destination: "Chittagong, Bangladesh", days: "5 – 7 Days" },
      { destination: "Rotterdam / Hamburg / Antwerp, Europe", days: "18 – 24 Days" },
      { destination: "Felixstowe / London Gateway, UK", days: "20 – 24 Days" },
      { destination: "New York / Newark / Savannah, USA", days: "26 – 32 Days" },
      { destination: "Melbourne / Sydney, Australia", days: "20 – 26 Days" },
      { destination: "Singapore / Port Klang, Southeast Asia", days: "8 – 12 Days" }
    ]
  },
  {
    name: "Deendayal / Kandla Port (INIXY1)",
    role: "Secondary Seaport & Breakbulk",
    distance: "~290 km from Unjha",
    state: "Gujarat, India",
    highlight: "Ideal for heavy bulk shipments and select regional container liner routes to the Middle East and East Africa.",
    transitTimes: [
      { destination: "Gulf Ports (GCC)", days: "4 – 6 Days" },
      { destination: "Mombasa / Dar es Salaam, East Africa", days: "12 – 16 Days" },
      { destination: "Colombo, Sri Lanka", days: "5 – 7 Days" }
    ]
  },
  {
    name: "Nhava Sheva / JNPT (INNSA1)",
    role: "Alternative Deepwater Hub",
    distance: "~650 km from Unjha",
    state: "Maharashtra, India",
    highlight: "Utilized for specialized reefer cargo, niche destination feeder routes, and specific carrier liner preferences.",
    transitTimes: [
      { destination: "European Main Ports", days: "20 – 25 Days" },
      { destination: "North America East Coast", days: "28 – 35 Days" },
      { destination: "Far East & Japan", days: "14 – 18 Days" }
    ]
  }
];

const CONTAINER_SPECS = [
  {
    spice: "Cumin Seeds (Jeera)",
    bagType: "25kg / 50kg PP Woven with PE Liner",
    fcl20: "13.5 – 14.0 Metric Tons (Floor Loaded)",
    fcl40: "24.0 – 26.0 Metric Tons (HC Container)",
    moistureTarget: "< 8.0%",
    purityGrades: "99.0% / 99.5% Europe / 99.9% Sortex"
  },
  {
    spice: "Coriander Seeds (Dhania)",
    bagType: "20kg / 25kg PP Woven or Multi-Wall Paper",
    fcl20: "9.5 – 10.5 Metric Tons (Low Bulk Density)",
    fcl40: "18.0 – 21.0 Metric Tons (HC Container)",
    moistureTarget: "< 9.0%",
    purityGrades: "Eagle, Scooter, Badami, Sortex Cleaned"
  },
  {
    spice: "Fennel Seeds (Saunf)",
    bagType: "25kg / 50kg Bags with Inner Polyliner",
    fcl20: "12.5 – 13.5 Metric Tons (Floor Loaded)",
    fcl40: "23.0 – 25.0 Metric Tons (HC Container)",
    moistureTarget: "< 8.5%",
    purityGrades: "Green Sortex, Medium Green, Commercial"
  },
  {
    spice: "Fenugreek Seeds (Methi)",
    bagType: "25kg / 50kg Heavy PP Bags",
    fcl20: "18.0 – 20.0 Metric Tons (High Density Seed)",
    fcl40: "26.0 – 27.0 Metric Tons (Weight Limit Capped)",
    moistureTarget: "< 9.0%",
    purityGrades: "Machine Cleaned 99%, Sortex 99.5%"
  },
  {
    spice: "Ajwain / Carom Seeds",
    bagType: "25kg PP Bags with Liner",
    fcl20: "13.0 – 14.0 Metric Tons",
    fcl40: "24.0 – 25.0 Metric Tons",
    moistureTarget: "< 9.0%",
    purityGrades: "Super Green, Sortex Cleaned 99.5%"
  },
  {
    spice: "Psyllium Husk & Seeds",
    bagType: "25kg Multi-wall Paper / Paper-Poly Bags",
    fcl20: "9.0 – 10.0 MT (Husk) / 18.0 MT (Seeds)",
    fcl40: "19.0 – 20.0 MT (Husk HC)",
    moistureTarget: "< 10.0%",
    purityGrades: "85%, 95%, 98%, 99% Swell Volume"
  },
  {
    spice: "Turmeric Whole & Finger",
    bagType: "25kg / 50kg Jute Bags or PP Bags",
    fcl20: "16.0 – 18.0 Metric Tons",
    fcl40: "26.0 Metric Tons",
    moistureTarget: "< 10.0%",
    purityGrades: "Salem, Nizamabad, Lakadong (7%+ Curcumin)"
  },
  {
    spice: "Ground Spice Powders",
    bagType: "20kg / 25kg Kraft Paper Bags with PE Barrier",
    fcl20: "14.0 – 16.0 Metric Tons",
    fcl40: "24.0 – 26.0 Metric Tons",
    moistureTarget: "< 7.0%",
    purityGrades: "Cumin, Turmeric, Chilli, Coriander (30-80 Mesh)"
  }
];

const EXPORT_DOCUMENTS = [
  {
    id: "coo",
    name: "Certificate of Origin (COO)",
    issuer: "Chamber of Commerce / Export Inspection Council (EIC)",
    purpose: "Authenticates Indian origin for customs clearance and preferential duty tariffs under international trade pacts."
  },
  {
    id: "phyto",
    name: "Phytosanitary Certificate",
    issuer: "Plant Quarantine Division, Ministry of Agriculture (Govt. of India)",
    purpose: "Mandatory official certificate verifying that spices are free from quarantined pests, pathogens, and plant diseases."
  },
  {
    id: "bl",
    name: "Clean on Board Ocean Bill of Lading (B/L)",
    issuer: "Shipping Liner / Carrier Agent",
    purpose: "Definitive title of goods, proof of shipment date at Mundra port, negotiable document for bank letter of credit collection."
  },
  {
    id: "coa",
    name: "Certificate of Analysis (COA)",
    issuer: "NABL Accredited Third-Party Analytical Laboratory",
    purpose: "Batch-specific laboratory report detailing physical purity, moisture, volatile oil, total ash, microbiology, and pesticide residue MRLs."
  },
  {
    id: "fumi",
    name: "Fumigation Certificate",
    issuer: "Government-Approved Licensed Fumigation Agency",
    purpose: "ISPM-15 compliant container fumigation (Methyl Bromide / Aluminium Phosphide) preventing live insect infestation during ocean voyage."
  },
  {
    id: "spices-board",
    name: "Spices Board Health & Clearance Certificate",
    issuer: "Spices Board of India (Ministry of Commerce & Industry)",
    purpose: "Mandatory statutory clearance for export consignments ensuring national food safety and pesticide residue compliance."
  },
  {
    id: "invoice-pack",
    name: "Commercial Invoice & Packing List",
    issuer: "JM Masala Trading LLP",
    purpose: "Itemized commercial invoice with exact Harmonized System (HS) codes, container seal numbers, net and gross weight breakdown."
  },
  {
    id: "psi",
    name: "Third-Party Pre-Shipment Inspection (PSI)",
    issuer: "SGS, Intertek, Bureau Veritas, or Cotecna (Buyer's Choice)",
    purpose: "Independent container stuffing supervision, random composite lot sampling, seal integrity, and container hygiene verification."
  }
];

const TARGET_MARKETS = [
  {
    region: "Middle East & GCC",
    countries: "United Arab Emirates (UAE), Saudi Arabia, Oman, Qatar, Kuwait, Bahrain",
    standards: "SFDA (Saudi Food & Drug Authority), GSO Standard Labeling (Arabic + English), Halal Certified",
    leadTime: "3 to 8 Days ocean transit via Mundra Port",
    popularProducts: "Cumin Seeds Sortex 99.5%, Fennel Seeds Green, Coriander Seeds, Turmeric Whole, Cold Pressed Oils",
    notes: "High frequency direct feeder vessels from Mundra to Jebel Ali and Dammam with swift customs clearance."
  },
  {
    region: "South Asia & Neighboring Markets",
    countries: "Bangladesh, Sri Lanka, Nepal",
    standards: "BSTI specifications, Land Customs Petrapole / Benapole clearance, Chittagong Sea Port FCL",
    leadTime: "4 to 7 Days transit",
    popularProducts: "Cumin Seeds (High volume bulk), Coriander Seeds Machine Cleaned, Fennel Seeds, Red Chilli",
    notes: "Direct cross-border road logistics and containerized vessel sailings for wholesale mandi trade."
  },
  {
    region: "European Union & United Kingdom",
    countries: "Germany, Netherlands, United Kingdom, France, Poland, Spain, Italy",
    standards: "Pesticide residue screening, Aflatoxins (<10 ppb), and laboratory protocols aligned to buyer purchase orders",
    leadTime: "Typical ocean transit ~18 to 24 days via Mundra to major European container ports",
    popularProducts: "Europe Quality Cumin 99.5%, Sortex Fennel, Coriander Split, Psyllium Husk 99%, High Curcumin Lakadong Turmeric",
    notes: "Pre-shipment sampling and test reports from accredited laboratories coordinated before container stuffing."
  },
  {
    region: "North America (USA & Canada)",
    countries: "United States (US East & West Coast), Canada (Montreal, Toronto, Vancouver)",
    standards: "US FDA food facility registration, ASTA cleanliness guidelines, and buyer-specified food safety documentation",
    leadTime: "Typical ocean transit ~26 to 35 days",
    popularProducts: "Cumin Seeds Sortex 99.5%, Fenugreek Seeds, Ajwain, Psyllium Husk Organic, Ground Spice Powders, Private Label Pouches",
    notes: "Lot tracking from Unjha mandi procurement to container stuffing with comprehensive export documentation."
  },
  {
    region: "Oceania & Southeast Asia",
    countries: "Australia, New Zealand, Singapore, Malaysia, Indonesia, Vietnam, Japan",
    standards: "Biosecurity import protocols, cleanliness standards, and destination food authority guidelines",
    leadTime: "Typical ocean transit ~8 to 24 days",
    popularProducts: "Sortex Cumin, Fennel Bold Green, Pure Spice Powders, Mustard Seeds, Sesame Seeds",
    notes: "Fumigation certificates and phytosanitary declarations arranged to meet port clearance requirements."
  }
];

const INCOTERMS_LIST = [
  {
    code: "FOB",
    title: "Free On Board (Mundra / Kandla Port)",
    desc: "JM Masala covers inland transit from Unjha, export customs clearance, terminal handling charges (THC), and container loading onto the vessel at Mundra Port. Ocean freight and destination charges are managed by the buyer's shipping line.",
    bestFor: "Importers with existing global freight contracts and volume forwarders."
  },
  {
    code: "CIF / CFR",
    title: "Cost, Insurance & Freight / Cost & Freight (Destination Port)",
    desc: "JM Masala arranges and prepays ocean freight directly to your designated seaport (e.g. Jebel Ali, Dammam, Chittagong, Rotterdam, New York). Under CIF, comprehensive marine insurance covering 110% of invoice value is included.",
    bestFor: "Buyers seeking turnkey delivery directly to their home country seaport."
  },
  {
    code: "CIP / CPT",
    title: "Carriage and Insurance Paid (Inland ICD or Airport)",
    desc: "Applicable for landlocked destinations or air freight cargo shipments (e.g., sample dispatches or urgent retail private-label air shipments).",
    bestFor: "Air cargo lots, dry port ICD destinations, and cross-border trucking."
  }
];

const PAYMENT_TERMS_LIST = [
  {
    method: "Letter of Credit (L/C at Sight)",
    desc: "Irrevocable, unconfirmed (or confirmed if agreed) Documentary Letter of Credit payable 100% at sight against presentation of compliant shipping documents through first-class international prime banks.",
    security: "Highest institutional security for both importer and exporter."
  },
  {
    method: "Cash Against Documents (CAD / D/P via Bank)",
    desc: "Advance deposit (typically 20% to 30% by T/T) upon contract confirmation, with balance payable via bank-to-bank collection upon presentation of original shipping documents (Document Against Payment - D/P at sight).",
    security: "Balanced commercial structure widely used in commodity spice trading."
  },
  {
    method: "Telegraphic Transfer (T/T Wire Transfer)",
    desc: "Direct international SWIFT bank wire transfer (advance deposit upon order placement, balance upon transmission of non-negotiable ocean Bill of Lading copy).",
    security: "Fastest processing for repeat verified buyers and smaller container trial orders."
  }
];

const EXPORT_FAQS = [
  {
    q: "What is the Minimum Order Quantity (MOQ) for export shipments?",
    a: "Our standard commercial export MOQ is 1x 20-foot Full Container Load (FCL), which typically holds 13 to 18 Metric Tons depending on the bulk density of the specific spice. For buyers wishing to source multiple products, we gladly offer Mixed Container Loads (e.g. 8 MT Cumin + 4 MT Fennel + 2 MT Coriander) in a single 20ft or 40ft container."
  },
  {
    q: "Can you provide pre-shipment samples before we confirm an export order?",
    a: "Yes. We regularly dispatch laboratory-representative crop samples (typically 250g to 500g) via international express couriers (DHL, FedEx, Aramex) to international buyers for visual inspection, physical evaluation, and independent laboratory testing before contract finalization."
  },
  {
    q: "Which seaport does JM Masala use for export container shipments?",
    a: "Our primary export gateway is Mundra Port (INMUN1) in Gujarat, located approximately 320 km via multi-lane highway from our Unjha processing plant. Mundra is India's premier container hub offering direct weekly liner sailings to the Middle East, Europe, North America, and Asia. We also operate via Kandla Port and Nhava Sheva (JNPT) upon request."
  },
  {
    q: "How does JM Masala prevent moisture damage, mold, and insect infestation during ocean voyages?",
    a: "We implement rigorous sea-freight preservation protocols: (1) All spices are dried to safe moisture parameters (<8% for Cumin/Fennel) before bagging; (2) High-barrier polyethylene inner liners are used inside woven polypropylene bags; (3) Clean, odor-free, leak-tested containers are lined on five sides with heavy kraft paper; (4) High-absorption container dry-gel desiccant poles are suspended along the container corrugations to eliminate container sweat during sea transit."
  },
  {
    q: "Can we appoint an independent inspection agency like SGS or Intertek at Mundra Port?",
    a: "Absolutely. We welcome third-party pre-shipment inspection (PSI) by internationally recognized surveyors such as SGS, Intertek, Bureau Veritas, or Cotecna nominated by the buyer. The surveyor is granted full access to supervise container stuffing, draw random composite samples, verify gross/tare weights, and witness container sealing."
  },
  {
    q: "Can JM Masala supply spices aligned with European Union (EU) pesticide MRL requirements?",
    a: "Yes. Spice lots for European buyers can be supplied against buyer-specified EU pesticide-residue (MRL) parameters, Aflatoxin thresholds, and laboratory testing criteria. Pre-shipment test reports from NABL-accredited laboratories are coordinated against contract specifications and buyer purchase order requirements."
  }
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

const ExportOperationsPage = () => {
  const [activePortTab, setActivePortTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}/export-destinations#webpage`,
      "name": "Spice Export Operations from Mundra Port",
      "url": `${SITE_URL}/export-destinations`,
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "about": { "@id": `${SITE_URL}/#organization` },
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "breadcrumb": { "@id": `${SITE_URL}/export-destinations#breadcrumb` }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/export-destinations#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
        { "@type": "ListItem", "position": 2, "name": "Export Operations", "item": `${SITE_URL}/export-destinations` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Indian Spices Export Operations & Global Supply Chain",
      "provider": { "@id": `${SITE_URL}/#organization` },
      "serviceType": "Agricultural Commodity Export & Processing",
      "description": "Export operations for Indian spices including Cumin, Coriander, Fennel, Fenugreek, Ajwain, Turmeric and Psyllium shipped via Mundra Port with export documentation."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": EXPORT_FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <>
      <Seo
        title="Indian Spices Export Operations | Mundra Port | JM Masala"
        description="Export operations of JM Masala Trading LLP: Indian spices shipped from Mundra Port with export documentation and container loading."
        path="/export-destinations"
        schema={schema}
      />

      <div className="bg-[var(--brand-warm-white)] text-[var(--brand-charcoal)]">

        {/* ══════════════════════════════════════════════════════════════════
            1. HERO SECTION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[var(--brand-deep-green)] to-[var(--brand-forest)] text-white jm-section">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="relative jm-container">
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-[var(--brand-gold-light)] backdrop-blur-sm">
                <Ship className="h-4 w-4" />
                <span>Global B2B Supply Chain &amp; Logistics</span>
              </div>

              <h1 className="text-white">
                Indian Spices. Processed at Origin. <br className="hidden sm:inline" />
                <span className="text-[var(--brand-gold-light)]">Exported Worldwide via Mundra Port.</span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--brand-cream)] leading-relaxed max-w-3xl mx-auto font-normal">
                <strong className="text-white font-semibold">{COMPANY.legalName}</strong> supplies international spice importers, industrial blenders, food manufacturers, and private-label distributors across 20+ countries. Sourced at APMC Unjha, Sortex cleaned, container-packed, and cleared through Gujarat&apos;s deepwater maritime gateways.
              </p>

              {/* Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 text-left">
                <div className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                  <div className="text-xs text-[var(--brand-gold-light)] uppercase tracking-wider font-semibold">Primary Gateway</div>
                  <div className="text-lg font-bold text-white mt-1">Mundra Port</div>
                  <div className="text-[11px] text-[var(--brand-cream)] mt-0.5">320 km direct transit from plant</div>
                </div>
                <div className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                  <div className="text-xs text-[var(--brand-gold-light)] uppercase tracking-wider font-semibold">Fast Sea Transit</div>
                  <div className="text-lg font-bold text-white mt-1">3 – 5 Days</div>
                  <div className="text-[11px] text-[var(--brand-cream)] mt-0.5">Direct feeder sailings to GCC</div>
                </div>
                <div className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                  <div className="text-xs text-[var(--brand-gold-light)] uppercase tracking-wider font-semibold">Documentation</div>
                  <div className="text-lg font-bold text-white mt-1">100% Compliant</div>
                  <div className="text-[11px] text-[var(--brand-cream)] mt-0.5">Phyto, NABL COA, COO, Spices Board</div>
                </div>
                <div className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                  <div className="text-xs text-[var(--brand-gold-light)] uppercase tracking-wider font-semibold">Incoterms</div>
                  <div className="text-lg font-bold text-white mt-1">FOB / CIF / CFR</div>
                  <div className="text-[11px] text-[var(--brand-cream)] mt-0.5">L/C at Sight &amp; CAD Supported</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="#export-rfq"
                  className="jm-btn jm-btn--primary flex items-center gap-2"
                >
                  <span>Request CIF Export Quotation</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#container-specs"
                  className="jm-btn jm-btn--ghost"
                >
                  View Container Capacities
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            2. PRIMARY SEAPORTS & LOGISTICS CORRIDOR
        ══════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-[rgba(201,168,76,0.25)] jm-section jm-section--white">
          <div className="jm-container">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="jm-section-label inline-flex items-center gap-2">
                <Anchor className="h-4 w-4" />
                <span>Maritime Port Infrastructure</span>
              </div>
              <h2 className="jm-section-heading">
                Strategic Gateway to Global Trade
              </h2>
              <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                Located in Unjha, Gujarat, our facility connects directly via dedicated national expressways to India&apos;s leading western seaports, ensuring rapid container stuffing, customs clearance, and high-frequency vessel loading.
              </p>
            </div>

            {/* Port Selector Tabs */}
            <div className="flex justify-center gap-2 mb-8">
              {EXPORT_PORTS.map((port, idx) => (
                <button
                  key={port.name}
                  onClick={() => setActivePortTab(idx)}
                  className={`min-h-[44px] px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activePortTab === idx
                      ? "bg-[var(--brand-forest)] text-white"
                      : "bg-[var(--brand-cream)] text-[var(--brand-charcoal)] hover:bg-[var(--brand-gold-pale)]"
                  }`}
                >
                  {port.name.split(" ")[0]} Port
                </button>
              ))}
            </div>

            {/* Active Port Details Card */}
            {(() => {
              const p = EXPORT_PORTS[activePortTab];
              return (
                <div className="jm-surface-card p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[rgba(201,168,76,0.25)]">
                    <div>
                      <div className="jm-section-label inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{p.state} • {p.role}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--brand-charcoal)]">{p.name}</h3>
                      <p className="text-xs sm:text-sm text-[var(--brand-forest)] mt-1">{p.distance} • {p.highlight}</p>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[rgba(201,168,76,0.3)] text-xs font-bold text-[var(--brand-forest)]">
                        <Ship className="h-4 w-4 text-[var(--brand-gold-text)]" />
                        <span>Weekly Scheduled Container Sailings</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--brand-charcoal)] mb-4">
                      Indicative Ocean Transit Times from {p.name.split(" ")[0]}:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {p.transitTimes.map((t) => (
                        <div key={t.destination} className="p-3.5 rounded-xl bg-white border border-[var(--brand-gold-pale)] flex items-center justify-between">
                          <div className="text-xs font-semibold text-[var(--brand-charcoal)] pr-2">{t.destination}</div>
                          <span className="text-xs font-bold text-[var(--brand-gold-text)] font-mono shrink-0">{t.days}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            3. CONTAINER SPECIFICATIONS & LOADING CAPACITY MATRIX
        ══════════════════════════════════════════════════════════════════ */}
        <section id="container-specs" className="border-b border-[rgba(201,168,76,0.25)] jm-section jm-section--cream">
          <div className="jm-container">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="jm-section-label inline-flex items-center gap-2">
                <Scale className="h-4 w-4" />
                <span>Payload &amp; Stowage Calculation</span>
              </div>
              <h2 className="jm-section-heading">
                Container Loading &amp; FCL Capacities
              </h2>
              <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                Because agricultural spices vary substantially in bulk density, grain size, and compaction volume, container stuffing metrics are precisely calculated to optimize shipping freight costs.
              </p>
            </div>

            <div className="jm-surface-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[var(--brand-forest)] text-white">
                      <th className="py-4 px-5 font-bold">Indian Spice Product</th>
                      <th className="py-4 px-5 font-bold">Standard Export Packaging</th>
                      <th className="py-4 px-5 font-bold">20ft FCL Capacity</th>
                      <th className="py-4 px-5 font-bold">40ft HC Capacity</th>
                      <th className="py-4 px-5 font-bold">Target Moisture</th>
                      <th className="py-4 px-5 font-bold">Export Grades Available</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--brand-gold-pale)]">
                    {CONTAINER_SPECS.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[var(--brand-cream)] transition-colors">
                        <td className="py-3.5 px-5 font-bold text-[var(--brand-charcoal)]">
                          {item.spice}
                        </td>
                        <td className="py-3.5 px-5 text-[var(--brand-forest)]">
                          {item.bagType}
                        </td>
                        <td className="py-3.5 px-5 font-mono font-bold text-[var(--brand-forest)]">
                          {item.fcl20}
                        </td>
                        <td className="py-3.5 px-5 font-mono font-medium text-[var(--brand-forest)]">
                          {item.fcl40}
                        </td>
                        <td className="py-3.5 px-5 font-mono text-[var(--brand-gold-text)] font-semibold">
                          {item.moistureTarget}
                        </td>
                        <td className="py-3.5 px-5 text-xs text-[var(--brand-forest)]">
                          {item.purityGrades}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-[var(--brand-warm-white)] border-t border-[var(--brand-gold-pale)] text-[11px] text-[var(--brand-forest)] flex flex-col sm:flex-row items-center justify-between gap-2">
                <span>* Capacities represent loose floor-loaded cargo. Palletized loading (ISPM-15 heat treated wooden pallets) reduces net cargo payload by ~15-20% due to pallet tare and vertical headspace constraints.</span>
                <span className="font-semibold text-[var(--brand-forest)]">Mixed containers available upon request.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            4. TARGET EXPORT MARKETS & REGIONAL COMPLIANCE
        ══════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-[rgba(201,168,76,0.25)] jm-section jm-section--white">
          <div className="jm-container">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="jm-section-label inline-flex items-center gap-2">
                <Globe2 className="h-4 w-4" />
                <span>International Regulatory Standards</span>
              </div>
              <h2 className="jm-section-heading">
                Supplying Key Global Spice Markets
              </h2>
              <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                Different destination markets enforce distinct pesticide residue tolerances, biological parameters, labeling languages, and quarantine protocols. JM Masala customizes processing lots to meet the statutory framework of your importing nation.
              </p>
            </div>

            <div className="space-y-6">
              {TARGET_MARKETS.map((m) => (
                <div
                  key={m.region}
                  className="jm-surface-card p-6 sm:p-8 hover:border-[var(--brand-gold)] transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[rgba(201,168,76,0.2)]">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--brand-charcoal)]">
                        {m.region}
                      </h3>
                      <p className="text-xs text-[var(--brand-gold-text)] font-medium mt-0.5">
                        {m.countries}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[var(--brand-gold-pale)] text-xs font-semibold text-[var(--brand-forest)]">
                        <Clock className="h-3.5 w-3.5 text-[var(--brand-gold-text)]" />
                        <span>{m.leadTime}</span>
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs sm:text-sm">
                    <div>
                      <div className="font-bold text-[var(--brand-charcoal)] mb-1">Compliance &amp; Quality Mandates:</div>
                      <p className="text-[var(--brand-forest)] leading-relaxed">{m.standards}</p>

                      <div className="font-bold text-[var(--brand-charcoal)] mt-3 mb-1">Operational Advantage:</div>
                      <p className="text-[var(--brand-forest)] leading-relaxed">{m.notes}</p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-[var(--brand-gold-pale)] flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-gold-text)] mb-1">
                          Core Export Products for this Region
                        </div>
                        <p className="font-medium text-[var(--brand-forest)] leading-relaxed">
                          {m.popularProducts}
                        </p>
                      </div>
                      <div className="pt-3 mt-3 border-t border-[var(--brand-gold-pale)] flex items-center justify-between">
                        <span className="text-[11px] text-[var(--brand-forest)]">Destination Quotation</span>
                        <a
                          href="#export-rfq"
                          className="text-xs font-bold text-[var(--brand-forest)] hover:text-[var(--brand-gold-text)] inline-flex items-center gap-1"
                        >
                          <span>Get CIF Rate</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            5. THE COMPLETE EXPORT DOCUMENTATION PACKAGE
        ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-gradient-to-b from-[var(--brand-cream)] to-[var(--brand-warm-white)] border-b border-[rgba(201,168,76,0.25)] jm-section">
          <div className="jm-container">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="jm-section-label inline-flex items-center gap-2">
                <FileCheck className="h-4 w-4" />
                <span>Statutory &amp; Trade Clearance</span>
              </div>
              <h2 className="jm-section-heading">
                The Complete Export Documentation Package
              </h2>
              <p className="text-sm sm:text-base text-[var(--brand-forest)] leading-relaxed">
                Zero customs delays. Every consignment dispatched by JM Masala is backed by an airtight suite of trade, quarantine, and laboratory documentation verified before the vessel departs Mundra Port.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {EXPORT_DOCUMENTS.map((doc) => (
                <div
                  key={doc.id}
                  className="jm-surface-card p-5 hover:border-[var(--brand-gold)] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[var(--brand-cream)] text-[var(--brand-gold-text)] flex items-center justify-center mb-3">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--brand-charcoal)]">
                      {doc.name}
                    </h3>
                    <div className="text-[10px] text-[var(--brand-forest)] font-semibold mt-1">
                      Issued by: {doc.issuer}
                    </div>
                    <p className="text-xs text-[var(--brand-forest)] mt-2 leading-relaxed">
                      {doc.purpose}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[var(--brand-gold-pale)] flex items-center gap-1 text-[11px] font-bold text-[var(--brand-forest)]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-gold-text)]" />
                    <span>Included in Shipping Set</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            6. PACKAGING & TRANSIT PRESERVATION PROTOCOLS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-[rgba(201,168,76,0.25)] jm-section jm-section--white">
          <div className="jm-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <div className="jm-section-label inline-flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  <span>Sea Freight Protection</span>
                </div>
                <h2 className="jm-section-heading">
                  Moisture, Mold &amp; Infestation Barrier
                </h2>
                <p className="text-sm text-[var(--brand-forest)] leading-relaxed">
                  Ocean container transit involves extreme temperature swings, high relative humidity, and risk of condensation (&apos;cargo sweat&apos;). Our packaging protocol is engineered so that agricultural spices reach your warehouse in optimum physical and sensory condition.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--brand-cream)] text-[var(--brand-gold-text)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-[var(--brand-charcoal)]">Polyethylene Inner Barrier Liners:</strong>
                      <span className="text-xs text-[var(--brand-forest)] block">Food-grade virgin PE film inserted into woven polypropylene or multi-wall paper bags acts as a sealed moisture vapor barrier.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--brand-cream)] text-[var(--brand-gold-text)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-[var(--brand-charcoal)]">5-Sided Heavy Kraft Container Lining:</strong>
                      <span className="text-xs text-[var(--brand-forest)] block">The interior floor, walls, and ceiling of the ocean container are lined with absorbent kraft paper to shield goods from steel rust and thermal radiating heat.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--brand-cream)] text-[var(--brand-gold-text)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-[var(--brand-charcoal)]">High-Absorption Desiccant Poles:</strong>
                      <span className="text-xs text-[var(--brand-forest)] block">Calcium chloride dry-gel desiccant bags (holding up to 300% of their dry weight in water) are hung in container wall corrugations to eliminate atmospheric dew point risk.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--brand-cream)] text-[var(--brand-gold-text)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-[var(--brand-charcoal)]">Custom Buyer Labeling &amp; Barcoding:</strong>
                      <span className="text-xs text-[var(--brand-forest)] block">Export bag markings include bilingual English/Arabic/Spanish product names, crop year, batch number, production/expiry dates, net weight, and custom GS1 barcodes.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Incoterms & Payment Matrix */}
              <div className="space-y-6">
                <div className="jm-surface-card p-6">
                  <h3 className="text-base font-bold text-[var(--brand-charcoal)] mb-3">
                    Commercial Incoterms Framework
                  </h3>
                  <div className="space-y-3">
                    {INCOTERMS_LIST.map((inc) => (
                      <div key={inc.code} className="p-3 bg-white rounded-xl border border-[var(--brand-gold-pale)]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[var(--brand-forest)] font-mono">{inc.code}</span>
                          <span className="text-[10px] text-[var(--brand-forest)] italic">{inc.bestFor}</span>
                        </div>
                        <div className="text-xs font-semibold text-[var(--brand-charcoal)] mt-0.5">{inc.title}</div>
                        <p className="text-[11px] text-[var(--brand-forest)] mt-1 leading-snug">{inc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="jm-surface-card p-6">
                  <h3 className="text-base font-bold text-[var(--brand-charcoal)] mb-3">
                    Accepted International Payment Terms
                  </h3>
                  <div className="space-y-2.5">
                    {PAYMENT_TERMS_LIST.map((pay) => (
                      <div key={pay.method} className="p-3 rounded-xl bg-[var(--brand-cream)] border border-[var(--brand-gold-pale)]">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-bold text-[var(--brand-charcoal)]">{pay.method}</div>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--brand-gold-pale)] text-[var(--brand-charcoal)] font-bold uppercase">
                            {pay.security.split(" ")[0]}
                          </span>
                        </div>
                        <p className="text-[11px] text-[var(--brand-forest)] mt-1">{pay.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            7. INTERACTIVE EXPORT RFQ & CIF QUOTATION FORM
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative jm-section jm-section--primary">
          <div className="jm-container"><div className="mx-auto max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="jm-section-label jm-section-label--on-dark inline-flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span>Commercial Desk Direct Inquiry</span>
              </div>
            </div>
            <div className="jm-surface-card text-[var(--brand-charcoal)] p-6 sm:p-10">
              <QuotationForm
                id="export-rfq"
                sourcePage="export-destinations"
                heading="Request an Export CIF / FOB Quotation"
                introText="Connect with our international trade desk. Please mention your preferred Incoterm (for example CIF, CFR or FOB), destination port and country, container volume and any quality or packing requirements in the message."
                messageIntro="Hello JM Masala Export Desk, I would like to request an export quotation."
                submitLabel="Request export quotation"
                emailSubjectPrefix="Export quotation request"
              />
            </div>
          </div></div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            8. EXPORT FREQUENTLY ASKED QUESTIONS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-[rgba(201,168,76,0.25)] jm-section jm-section--white">
          <div className="jm-container"><div className="mx-auto max-w-4xl">
            <div className="text-center mb-12 space-y-3">
              <div className="jm-section-label inline-flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                <span>Buyer Knowledge Base</span>
              </div>
              <h2 className="jm-section-heading">
                Frequently Asked Questions on Export Operations
              </h2>
            </div>

            <div className="space-y-4">
              {EXPORT_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[rgba(201,168,76,0.25)] rounded-xl overflow-hidden bg-[var(--brand-warm-white)] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full min-h-[44px] text-left px-6 py-3 flex items-center justify-between gap-4 font-bold text-[var(--brand-charcoal)] hover:text-[var(--brand-gold-text)] transition-colors"
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <span className="text-lg font-mono text-[var(--brand-gold-text)] shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[var(--brand-forest)] leading-relaxed border-t border-[var(--brand-gold-pale)]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="mt-10 text-sm text-[var(--brand-forest)] leading-relaxed text-center">
              Seed spices for export:{" "}
              <Link to="/cumin-seeds-exporter-india" className="underline">cumin seeds (jeera) exporter</Link>,{" "}
              <Link to="/coriander-seeds-exporter-india" className="underline">coriander seeds (dhania) exporter</Link>,{" "}
              <Link to="/fennel-seeds-exporter-india" className="underline">fennel seeds (saunf) supplier</Link>,{" "}
              <Link to="/sesame-seeds-exporter-india" className="underline">sesame seeds (til) supplier</Link>,{" "}
              <Link to="/ajwain-seeds-exporter-india" className="underline">ajwain (carom) seeds exporter</Link> and{" "}
              <Link to="/mustard-seeds-exporter-india" className="underline">mustard seeds (rai) supplier</Link>.
              Origin and sourcing:{" "}
              <Link to="/spice-exporter-gujarat" className="underline">spice exporter in Gujarat</Link>,{" "}
              <Link to="/sourcing/gujarat" className="underline">Gujarat spice sourcing</Link>,{" "}
              <Link to="/sourcing-network" className="underline">Indian spice sourcing network</Link>.
            </p>

            <div className="text-center mt-12">
              <Link
                to="/products"
                className="jm-btn jm-btn--secondary inline-flex items-center gap-2"
              >
                <span>Browse Full Product Portfolio</span>
                <ArrowRight className="h-4 w-4 text-[var(--brand-gold-light)]" />
              </Link>
            </div>
          </div></div>
        </section>

      </div>
    </>
  );
};

export default ExportOperationsPage;
