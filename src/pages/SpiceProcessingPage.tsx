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
    name: "Third-Party Laboratory Testing",
    icon: FileCheck,
    tag: "Quality Assurance",
    headline: "COA Shared Where Available and Applicable to the Tested Lot",
    description:
      "Samples are tested by a third-party laboratory as required by the product, buyer specification and destination market. Testing may cover purity, moisture, foreign matter, pesticide residues and microbiological parameters, depending on buyer requirements.",
    metrics: [
      { label: "Moisture Analysis", val: "As per buyer specification" },
      { label: "Pesticide Residues", val: "As required by market" },
      { label: "Microbiological", val: "As per buyer specification" }
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
    desc: "Complete pre-cleared export documentation: Phytosanitary Certificate, licensed Fumigation, third-party laboratory COA where available, APEDA Certificate, and Certificate of Origin.",
    badge: "100% Compliant"
  }
];

const SpiceProcessingPage = () => {
  return (
    <>
      <Seo
        title="Spice Processing & Manufacturing India | Sortex Cleaning"
        description="Spice processor in Gujarat: machine cleaning, Sortex cleaning, destoning, grading, grinding, private-label packing and export documents."
        path="/spice-processing-manufacturing"
        keywords={[
          "spice processing plant India",
          "Sortex cleaned cumin India",
          "spice manufacturer Unjha Gujarat",
          "spice cleaning and grading facility",
          "cryogenic spice grinding India",
          "machine cleaned spices exporter",
          "Indian spice processing Unjha",
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
                "Industrial spice processing infrastructure in Unjha, Gujarat featuring mechanical pre-cleaning, Sortex optical sorting, low-temperature grinding, and export packing."
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
        <section className="relative bg-gradient-to-b from-[var(--brand-deep-green)] to-[var(--brand-forest)] text-white overflow-hidden jm-section">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="jm-container relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(201,168,76,0.18)] border border-[rgba(201,168,76,0.4)] text-[var(--brand-gold-light)] text-xs sm:text-sm font-semibold uppercase tracking-wider">
              <Factory className="h-4 w-4 text-[var(--brand-gold)]" />
              <span>Unjha Manufacturing &amp; Processing Facility · Gujarat, India</span>
            </div>

            <h1 className="max-w-4xl mx-auto text-white">
              From Raw Mandi Arrivals to{" "}
              <span className="text-[var(--brand-gold-light)] italic block sm:inline">
                Export-Ready Precision
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[var(--brand-cream)] max-w-3xl mx-auto leading-relaxed">
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
                <div className="text-xs text-white/70 uppercase tracking-wider font-medium mt-1">Quality Checks</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--brand-gold-light)]">4 Hours</div>
                <div className="text-xs text-white/70 uppercase tracking-wider font-medium mt-1">To Mundra Port</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/contact?intent=quote#inquiry-form"
                className="jm-btn jm-btn--primary"
              >
                Request Processing Quotation
              </Link>
              <a
                href={buildWhatsAppUrl("Hi JM Masala, I would like to inquire about your spice processing capabilities and custom grading.")}
                target="_blank"
                rel="noopener noreferrer"
                className="jm-btn jm-btn--ghost"
              >
                WhatsApp Export Desk
              </a>
            </div>
          </div>
        </section>

        {/* 7-STAGE PROCESSING PIPELINE */}
        <section className="jm-section jm-section--white">
          <div className="jm-container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="jm-section-label inline-flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              <span>Engineered Quality Control</span>
            </div>
            <h2 className="jm-section-heading">
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
                  className="jm-surface-card p-6 sm:p-8 hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  <div className="lg:col-span-1 flex items-center lg:flex-col justify-between">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-[var(--brand-gold-text)]">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-cream)] border border-[rgba(201,168,76,0.3)] flex items-center justify-center text-[var(--brand-forest)]">
                      <IconComp className="h-6 w-6 text-[var(--brand-gold-text)]" />
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-2">
                    <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-[var(--brand-sage)] px-2.5 py-0.5 rounded bg-[var(--brand-cream)]">
                      {step.tag}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--brand-charcoal)]">
                      {step.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--brand-forest)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 border-t lg:border-t-0 lg:border-l border-[var(--brand-gold-pale)] pt-4 lg:pt-0 lg:pl-6">
                    {step.metrics.map((m, idx) => (
                      <div key={idx} className="bg-[var(--brand-cream)] p-2.5 rounded-lg border border-[rgba(201,168,76,0.15)]">
                        <div className="text-[10px] text-[var(--brand-forest)] uppercase tracking-wider font-semibold">{m.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-[var(--brand-deep-green)]">{m.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </section>

        {/* PROCESSING CAPABILITIES GRID */}
        <section className="border-y border-[rgba(201,168,76,0.25)] jm-section jm-section--cream">
          <div className="jm-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="jm-section-heading mb-2">
                Custom Processing Capabilities for Global Buyers
              </h2>
              <p className="text-xs sm:text-sm text-[var(--brand-forest)]">
                Whether you need 99.5% Sortex cumin seeds, cryogenic 80-mesh coriander powder, or custom-branded retail pouches, we configure processing lines to your exact specs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((c, idx) => (
                <div key={idx} className="jm-surface-card p-6 hover:-translate-y-1 transition-transform">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--brand-forest)] text-white">
                      {c.badge}
                    </span>
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-gold-text)]" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--brand-charcoal)] mb-2">
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
        <section className="jm-section jm-section--white">
          <div className="jm-container"><div className="mx-auto max-w-5xl text-center space-y-6">
          <div className="jm-section-label inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>Direct Mandi Origin Partner</span>
          </div>
          <h2 className="jm-section-heading">
            Have Specific Quality Parameters or Custom Mesh Requirements?
          </h2>
          <p className="text-sm sm:text-base text-[var(--brand-forest)] max-w-2xl mx-auto">
            Share your technical specification sheet or target destination market requirements. Our technical processing team will configure trial batches, with third-party laboratory COAs where available.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact?intent=quote#inquiry-form"
              className="jm-btn jm-btn--secondary"
            >
              Submit Specification RFQ
            </Link>
            <Link
              to="/products"
              className="jm-btn jm-btn--outline"
            >
              Explore Master Products
            </Link>
          </div>
          </div></div>
        </section>
      </div>
    </>
  );
};

export default SpiceProcessingPage;
