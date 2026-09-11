import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Cpu,
  Eye,
  Layers,
  ShieldCheck,
  FileCheck,
  Sparkles,
  Truck,
  Flame,
  Factory
} from "lucide-react";
import Seo from "@/components/Seo";
import { SITE_URL, buildWhatsAppUrl } from "@/data/siteData";

const PROCESSING_STEPS = [
  {
    num: "01",
    name: "Inward Mandi Procurement & Visual Grading",
    icon: Eye,
    tag: "Origin Sourcing",
    headline: "Direct APMC Mandi Procurement with Inward Lot QC",
    description:
      "Raw seeds and whole spices arrive directly from Unjha APMC mandi and regional farmer partner clusters. Every truckload undergoes strict intake sampling: moisture testing via digital moisture meters, foreign matter percentage assessment, and botanical varietal confirmation before unloading into clean warehousing.",
    metrics: [
      { label: "Intake Moisture", val: "< 9.5%" },
      { label: "Physical Sampling", val: "100% Lots" },
      { label: "Traceability", val: "Farmer/Mandi Batch ID" }
    ]
  },
  {
    num: "02",
    name: "Pre-Cleaning, Aspiration & Destoning",
    icon: Layers,
    tag: "Mechanical Cleaning",
    headline: "Triple-Deck Pre-Cleaners & Density Destoning",
    description:
      "Spices pass through vibrating multi-deck mechanical screeners with calibrated perforation sieves. High-velocity air aspiration removes chaff, dust, light seeds, and botanical debris, while gravity destoners extract stones, mud balls, and heavy inert particles of matching seed size.",
    metrics: [
      { label: "Mechanical Purity", val: "98.0% - 99.0%" },
      { label: "Stone Extraction", val: "99.9% Efficiency" },
      { label: "Aspiration Stages", val: "Dual Air Flow" }
    ]
  },
  {
    num: "03",
    name: "High-Resolution Sortex Optical Sorting",
    icon: Cpu,
    tag: "Optical Separation",
    headline: "Bi-Chromatic HD Cameras & Infrared Ejection",
    description:
      "Our Sortex optical color sorters utilize high-definition bi-chromatic cameras and NIR sensors scanning 10,000+ seeds per second. Discolored seeds, immature grains, dark seeds, insect-damaged seeds, and foreign vegetative bits are ejected via ultra-fast pneumatic air nozzles to achieve export purities up to 99.9%.",
    metrics: [
      { label: "Optical Purity", val: "99.5% to 99.9%" },
      { label: "Defect Rejection", val: "Pixel-Level Detection" },
      { label: "Output Grades", val: "Europe, USA, Singapore" }
    ]
  },
  {
    num: "04",
    name: "Magnetic Separation & Metal Detection",
    icon: ShieldCheck,
    tag: "Foreign Body Control",
    headline: "Rare-Earth Neodymium Magnets & Ferrous Detection",
    description:
      "All product streams flow across 10,000+ Gauss rare-earth neodymium magnetic grates to capture trace ferrous particles. Prior to final packaging, products pass through calibrated digital tunnel metal detectors capable of detecting 1.0mm Ferrous, 1.2mm Non-Ferrous, and 1.5mm Stainless Steel.",
    metrics: [
      { label: "Magnetic Strength", val: "10,000+ Gauss" },
      { label: "Metal Sensitivity", val: "Up to 1.0mm Fe" },
      { label: "Rejection", val: "Automatic Lockout" }
    ]
  },
  {
    num: "05",
    name: "Controlled-Temperature & Cryogenic Grinding",
    icon: Flame,
    tag: "Powder Manufacturing",
    headline: "Cold Grinding with Volatile Oil Retention",
    description:
      "For spice powders (Cumin, Coriander, Turmeric, Red Chilli, Ginger), we utilize temperature-controlled hammer and pin mills with liquid nitrogen / chill cooling jackets. Grinding below 40°C prevents volatile essential oil loss, aroma vaporization, and heat discoloration common in conventional commercial mills.",
    metrics: [
      { label: "Grinding Temp", val: "< 40°C Cold Milling" },
      { label: "Volatile Oil Retention", val: "95%+ Preserved" },
      { label: "Mesh Granularity", val: "40 - 100 Mesh" }
    ]
  },
  {
    num: "06",
    name: "NABL Lab Verification & Chemical Analysis",
    icon: FileCheck,
    tag: "Quality Assurance",
    headline: "Complete COA Issued for Every Export Container",
    description:
      "Representative samples are analyzed at NABL accredited partner testing laboratories for chemical purity (Moisture, Total Ash, Acid Insoluble Ash, Volatile Essential Oil), food safety contaminants (Aflatoxin B1/B2/G1/G2, Ochratoxin A, ETO residue), and microbial limits (Salmonella 0/25g, E. coli, Yeast & Mold).",
    metrics: [
      { label: "Moisture Analysis", val: "Karl Fischer / Oven" },
      { label: "Aflatoxin Screening", val: "HPLC-FLD Certified" },
      { label: "Microbial Testing", val: "Zero Pathogens" }
    ]
  },
  {
    num: "07",
    name: "Automated Packaging & Container Stuffing",
    icon: Truck,
    tag: "Export Dispatch",
    headline: "Hygienic Bagging, Palletization & Port Dispatch",
    description:
      "Final processed spices are packed into buyer-specified formats: multi-wall paper bags with PE liner, food-grade PP woven bags, traditional jute bags, or stand-up retail zipper pouches. Bags are metal-detected, check-weighed, lot-stamped, shrink-wrapped on ISPM-15 heat-treated pallets, and container-stuffed for direct dispatch to Mundra Port.",
    metrics: [
      { label: "Bulk Formats", val: "10kg, 25kg, 50kg, 1 MT" },
      { label: "Retail Formats", val: "100g to 1kg Standup" },
      { label: "Port Transit", val: "4 Hours to Mundra" }
    ]
  }
];

const CAPABILITIES = [
  {
    title: "Optical Sortex Cleaning",
    desc: "Achieve 99.0%, 99.5%, and 99.9% physical purity for seed spices (Cumin, Fennel, Coriander, Fenugreek, Sesame) matching strict European, North American, and Gulf buyer standards.",
    badge: "99.9% Purity"
  },
  {
    title: "Precision Destoning & Grading",
    desc: "Multi-stage density separation eliminating inert field stones, soil clumps, glass, and heavy impurities with zero seed damage.",
    badge: "Food Safe"
  },
  {
    title: "Low-Temperature Grinding",
    desc: "Cryogenically chilled powder processing retaining 100% natural volatile essential oils, bright natural color, and intense aroma.",
    badge: "< 40°C Milling"
  },
  {
    title: "Customized Mesh Sizing",
    desc: "Rotary vibrating sifting providing calibrated grain size from coarse kibbled cuts to ultra-fine 100-mesh powders for industrial seasoning blending.",
    badge: "40 - 100 Mesh"
  },
  {
    title: "ETO & Steam Sterilization Support",
    desc: "Pre-shipment treatment coordination meeting US-FDA, European Commission, and Japanese microbial and food safety import regulations.",
    badge: "EU / US Standard"
  },
  {
    title: "Export Documentation Package",
    desc: "Complete pre-cleared export documentation: Phytosanitary Certificate, licensed Fumigation, NABL COA, APEDA Certificate, and Certificate of Origin.",
    badge: "100% Compliant"
  }
];

const SpiceProcessingPage = () => {
  return (
    <>
      <Seo
        title="Indian Spice Processing & Manufacturing Plant | Machine Cleaning, Sortex & Grinding | JM Masala"
        description="Explore JM Masala's industrial spice processing plant in Unjha, Gujarat. High-speed Sortex optical sorting (99.9% purity), density destoning, cryogenic low-temperature grinding, NABL lab testing, and bulk/retail export packing."
        path="/spice-processing-manufacturing"
        keywords={[
          "spice processing plant India",
          "Sortex cleaned cumin India",
          "spice manufacturer Unjha Gujarat",
          "spice cleaning and grading facility",
          "cryogenic spice grinding India",
          "machine cleaned spices exporter",
          "NABL tested Indian spices",
          "bulk spice processing facility India"
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: "Spice Processing & Manufacturing Plant — JM Masala Trading LLP",
              url: `${SITE_URL}/spice-processing-manufacturing`,
              description:
                "Industrial spice processing infrastructure in Unjha, Gujarat featuring mechanical pre-cleaning, Sortex optical sorting, cryogenic grinding, and certified export packing."
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Processing & Manufacturing", item: `${SITE_URL}/spice-processing-manufacturing` }
              ]
            }
          ]
        }}
      />

      <div className="bg-[var(--brand-warm-white)] text-[var(--brand-charcoal)]">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-b from-[#10170f] via-[var(--brand-deep-green)] to-[#182618] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(201,168,76,0.18)] border border-[rgba(201,168,76,0.4)] text-[var(--brand-gold-light)] text-xs sm:text-sm font-semibold uppercase tracking-wider">
              <Factory className="h-4 w-4 text-[var(--brand-gold)]" />
              <span>Unjha Manufacturing &amp; Processing Facility · Gujarat, India</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white jm-display leading-tight max-w-4xl mx-auto">
              From Raw Mandi Arrivals to{" "}
              <span className="text-[var(--brand-gold-light)] italic block sm:inline">
                Export-Ready Precision
              </span>
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 max-w-3xl mx-auto leading-relaxed">
              <strong>JM Masala Trading LLP</strong> operates dedicated mechanical cleaning, Sortex optical color sorting, and temperature-controlled grinding lines in Unjha, Gujarat. We bridge direct farm procurement with world-class technical specifications for food manufacturers, spice brands, and international importers.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--brand-gold-light)]">99.9%</div>
                <div className="text-xs text-white/70 uppercase tracking-wider font-medium mt-1">Sortex Purity</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--brand-gold-light)]">&lt; 40°C</div>
                <div className="text-xs text-white/70 uppercase tracking-wider font-medium mt-1">Cold Grinding</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--brand-gold-light)]">100%</div>
                <div className="text-xs text-white/70 uppercase tracking-wider font-medium mt-1">NABL Lab Tested</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--brand-gold-light)]">4 Hours</div>
                <div className="text-xs text-white/70 uppercase tracking-wider font-medium mt-1">To Mundra Port</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/contact?intent=quote#inquiry-form"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-light)] text-[var(--brand-deep-green)] font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-[rgba(201,168,76,0.3)] transition-all"
              >
                Request Processing Quotation
              </Link>
              <a
                href={buildWhatsAppUrl("Hi JM Masala, I would like to inquire about your spice processing capabilities and custom grading.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl border border-white/30 hover:bg-white/10 text-white font-semibold text-sm transition-all"
              >
                WhatsApp Export Desk
              </a>
            </div>
          </div>
        </section>

        {/* 7-STAGE PROCESSING PIPELINE */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
              <Cpu className="h-4 w-4" />
              <span>Engineered Quality Control</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
              The 7-Stage Industrial Processing Pipeline
            </h2>
            <p className="text-sm sm:text-base text-[var(--brand-forest)]">
              Every metric ton of spice processed at our Unjha facility follows a documented, standardized sequence to eliminate biological, physical, and chemical hazards.
            </p>
          </div>

          <div className="space-y-8">
            {PROCESSING_STEPS.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[rgba(201,168,76,0.25)] shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  <div className="lg:col-span-1 flex items-center lg:flex-col justify-between">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-[var(--brand-gold)]">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.3)] flex items-center justify-center text-[var(--brand-forest)]">
                      <IconComp className="h-6 w-6 text-[var(--brand-gold)]" />
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-2">
                    <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-[var(--brand-sage)] px-2.5 py-0.5 rounded bg-[var(--brand-cream)]">
                      {step.tag}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--brand-charcoal)] jm-display">
                      {step.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--brand-forest)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-6">
                    {step.metrics.map((m, idx) => (
                      <div key={idx} className="bg-[var(--brand-cream)]/50 p-2.5 rounded-lg border border-[rgba(201,168,76,0.15)]">
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">{m.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-[var(--brand-deep-green)]">{m.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROCESSING CAPABILITIES GRID */}
        <section className="py-16 bg-[var(--brand-cream)] border-y border-[rgba(201,168,76,0.25)] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brand-charcoal)] jm-display mb-2">
                Custom Processing Capabilities for Global Buyers
              </h2>
              <p className="text-xs sm:text-sm text-[var(--brand-forest)]">
                Whether you need 99.5% Sortex cumin seeds, cryogenic 80-mesh coriander powder, or custom-branded retail pouches, we configure processing lines to your exact specs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((c, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-[rgba(201,168,76,0.3)] shadow-sm hover:-translate-y-1 transition-transform">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--brand-forest)] text-white">
                      {c.badge}
                    </span>
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-gold)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--brand-charcoal)] jm-display mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[var(--brand-forest)] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-gold)]">
            <Sparkles className="h-4 w-4" />
            <span>Direct Mandi Origin Partner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-charcoal)] jm-display">
            Have Specific Quality Parameters or Custom Mesh Requirements?
          </h2>
          <p className="text-sm sm:text-base text-[var(--brand-forest)] max-w-2xl mx-auto">
            Share your technical specification sheet or target destination market requirements. Our technical processing team will configure trial batches and lab COAs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact?intent=quote#inquiry-form"
              className="px-8 py-3.5 rounded-xl bg-[var(--brand-forest)] text-white hover:bg-[var(--brand-deep-green)] font-bold text-sm shadow-md transition-all"
            >
              Submit Specification RFQ
            </Link>
            <Link
              to="/products"
              className="px-7 py-3.5 rounded-xl bg-white border border-[rgba(201,168,76,0.4)] text-[var(--brand-forest)] hover:bg-[var(--brand-gold-pale)] font-bold text-sm transition-all"
            >
              Explore Master Products
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpiceProcessingPage;
