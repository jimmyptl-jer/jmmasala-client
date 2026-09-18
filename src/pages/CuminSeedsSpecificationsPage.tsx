import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  Info,
  Package,
  Scale,
  ShieldCheck,
  Ship,
} from "lucide-react";
import Seo from "@/components/Seo";
import {
  COMPANY,
  DOCUMENTATION_PACKAGE,
  SITE_URL,
  buildProductInquiryMessage,
  buildWhatsAppUrl,
} from "@/data/siteData";
import bannerImage from "@/assets/homepage.png";

const SPEC_FAQS = [
  {
    question: "What is the difference between Sortex 99.5% and Machine Cleaned 99% Cumin?",
    answer:
      "Machine Cleaned (99%) utilizes mechanical screens, aspirators, and gravity tables to remove field stones, chaff, and dust. Sortex Cleaned (99.5%+) adds an optical sorting stage where high-resolution color cameras inspect each individual seed in free-fall, ejecting discolored, dark, and weed seeds that mechanical sieves cannot distinguish.",
  },
  {
    question: "How is volatile essential oil measured in cumin seeds?",
    answer:
      "Volatile oil is quantified via hydro-distillation according to standard ISO 6571 or ASTA Method 7.0 laboratory protocols. Fresh Unjha crop cumin typically tests between 2.5% and 4.5% v/w, which gives the seed its characteristic warm, pungent aroma.",
  },
  {
    question: "How does JM Masala address pesticide MRL and microbiological limits?",
    answer:
      "Cumin lots can be supplied against buyer-specific laboratory testing criteria, including destination-market Maximum Residue Limits (MRLs) for the European Union, United States, or Gulf regions. Laboratory analysis is conducted through independent NABL-accredited facilities, and pre-shipment COAs are issued per container batch.",
  },
  {
    question: "Can cumin seeds be steam sterilized for low-microbial requirements?",
    answer:
      "Yes. Upon buyer request, export lots can undergo calibrated continuous steam sterilization to reduce total plate count (TPC), eliminate Salmonella (absent in 25g), and suppress yeast/mold without synthetic chemical residues.",
  },
  {
    question: "How much cumin fits into 20-foot and 40-foot shipping containers?",
    answer:
      "In standard 25kg or 50kg PP woven bags, a 20ft FCL holds approximately 13.0 to 14.0 Metric Tons loose stuffed, or approximately 11.0 Metric Tons on heat-treated ISPM-15 wooden pallets. A 40ft FCL container accommodates 26.0 to 28.0 Metric Tons loose stuffed.",
  },
];

const PHYSICAL_CHEMICAL_SPECS = [
  { parameter: "Botanical Name", method: "Taxonomic", value: "Cuminum cyminum L." },
  { parameter: "HS Code (Whole Seeds)", method: "Customs Tariff", value: "0909 31 29" },
  { parameter: "HS Code (Crushed / Ground)", method: "Customs Tariff", value: "0909 32 00" },
  { parameter: "Physical Purity (Sortex Grade)", method: "Visual / Gravimetric", value: "99.5% to 99.9% Minimum" },
  { parameter: "Physical Purity (Machine Cleaned)", method: "Visual / Gravimetric", value: "98.0% to 99.0% Minimum" },
  { parameter: "Moisture Content (Europe / USA)", method: "Oven Drying / Karl Fischer", value: "Max 8.0% to 8.5%" },
  { parameter: "Moisture Content (Standard FAQ)", method: "Oven Drying", value: "Max 9.0%" },
  { parameter: "Volatile Essential Oil", method: "ISO 6571 / ASTA 7.0", value: "2.5% to 4.5% v/w (Crop dependent)" },
  { parameter: "Total Ash", method: "ISO 928 / ASTA 3.0", value: "Max 8.0% to 8.5%" },
  { parameter: "Acid Insoluble Ash (AIA)", method: "ISO 930 / ASTA 4.0", value: "Max 1.0% to 1.25%" },
  { parameter: "Extraneous Foreign Matter", method: "Gravimetric Sorting", value: "<0.1% (Sortex) / <0.5% (MC)" },
  { parameter: "Discolored / Damaged Grains", method: "Optical / Manual Separation", value: "<0.5% (Sortex Grade)" },
  { parameter: "Live Insect Infestation", method: "Physical Inspection", value: "Nil (100% insect free at dispatch)" },
];

const MICROBIOLOGICAL_LIMITS = [
  { test: "Salmonella", requirement: "Absent in 25g / 375g", status: "Certified per lot" },
  { test: "Escherichia coli (E. coli)", requirement: "<10 CFU/g or Absent", status: "Laboratory verified" },
  { test: "Total Plate Count (TPC)", requirement: "<10^5 CFU/g (Raw) / <10^4 (Steam Sterilized)", status: "Process aligned" },
  { test: "Yeast & Mold", requirement: "<10^3 CFU/g", status: "Laboratory verified" },
  { test: "Aflatoxin B1", requirement: "<2 to <5 ppb (as per destination regulation)", status: "HPLC / LC-MS/MS tested" },
  { test: "Total Aflatoxins (B1+B2+G1+G2)", requirement: "<4 to <10 ppb (aligned to buyer contract)", status: "HPLC / LC-MS/MS tested" },
  { test: "Ochratoxin A", requirement: "<15 to <20 ppb (EU aligned limits)", status: "Tested on request" },
];

const GRADE_COMPARISON = [
  {
    grade: "Europe Quality (Sortex 99.5%)",
    purity: "99.5% Min",
    moisture: "Max 8.0%",
    volatileOil: "Min 2.8%",
    cleaning: "Double Sortex optical inspection",
    compliance: "Coordinated against EU MRLs, low pesticide parameters, and Aflatoxin testing",
    bestFor: "European spice importers, grinding mills, and organic/high-end retail packers",
  },
  {
    grade: "USA Quality (ASTA Standard)",
    purity: "99.0% Min",
    moisture: "Max 8.5%",
    volatileOil: "Min 2.5%",
    cleaning: "Destoned, aspirated & optical clean",
    compliance: "Aligned to ASTA cleanliness guidelines and US FDA food facility requirements",
    bestFor: "North American seasoning houses, industrial blenders, and food service suppliers",
  },
  {
    grade: "Singapore Quality (99% Clean)",
    purity: "99.0% Min",
    moisture: "Max 9.0%",
    volatileOil: "Min 2.5%",
    cleaning: "Machine cleaned & precision graded",
    compliance: "Clean seed appearance, natural coloration, and standard phytosanitary cert",
    bestFor: "Southeast Asian repackers, ethnic wholesale markets, and food processors",
  },
  {
    grade: "Gulf / Middle East Grade",
    purity: "98.0% - 99.0%",
    moisture: "Max 9.0%",
    volatileOil: "Min 2.5%",
    cleaning: "Machine destoned and cleaned",
    compliance: "SFDA / GCC food standard alignment, fumigation and COO certified",
    bestFor: "UAE, Saudi Arabia, Oman, and GCC wholesale commodity distributors",
  },
];

const CuminSeedsSpecificationsPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Indian Cumin Seeds (Technical specifications inquiry & COA request)",
      "1x 20ft FCL (~13-14 MT)",
    ),
  );

  return (
    <>
      <Seo
        title="Cumin Seeds Technical Specifications | Export Grades & COA Standards | JM Masala"
        description="Comprehensive technical datasheet for Indian cumin seeds (jeera): purity levels, volatile oil, moisture limits, microbiological standards, container stuffing, and commercial export grades."
        path="/cumin-seeds-specifications"
        imageUrl={bannerImage}
        imageAlt="Indian cumin seeds technical specifications and export grade comparison"
        keywords={[
          "cumin seeds specifications",
          "jeera technical datasheet",
          "cumin seeds export grades",
          "Sortex 99.5 cumin specs",
          "cumin seeds volatile oil content",
          "cumin seeds moisture limit",
          "cumin seeds HS code 09093129",
          "cumin container loading capacity",
          "Indian cumin seeds COA",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ItemPage",
            name: "Indian Cumin Seeds Technical Specifications",
            url: `${SITE_URL}/cumin-seeds-specifications`,
            description:
              "Commercial and laboratory specifications datasheet for procurement of export-grade Indian cumin seeds from JM Masala.",
            publisher: {
              "@type": "Organization",
              name: COMPANY.legalName,
              url: SITE_URL,
              logo: `${SITE_URL}/JMMasala.png`,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: SPEC_FAQS.map((faq) => ({
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

      <div className="bg-[var(--brand-cream-light)] text-[var(--brand-charcoal)]">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[var(--brand-deep-green)] text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${bannerImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(13,34,20,0.96)] via-[rgba(13,34,20,0.88)] to-[rgba(13,34,20,0.78)]" />

          <div className="jm-container relative py-20 lg:py-24">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.12)] px-4 py-1.5 text-xs font-semibold tracking-wider text-[var(--brand-gold-light)] uppercase">
                <FileSpreadsheet className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
                Technical Buyer Datasheet · Jeera
              </div>

              <h1 className="font-[var(--font-display)] text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                Cumin Seeds Technical Specifications &amp; Export Grades
              </h1>

              <p className="text-base text-gray-200 leading-relaxed md:text-lg">
                Technical parameters, physical and chemical standards, microbiological tolerances,
                and container stuffing data for procurement managers, quality assurance heads,
                and international commodity importers sourcing Indian cumin seeds (
                <em>Cuminum cyminum L.</em>).
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-gold)] px-6 py-3.5 text-sm font-bold text-[var(--brand-deep-green)] shadow-lg transition-transform hover:scale-[1.02] hover:bg-[var(--brand-gold-light)]"
                >
                  <span>Request Custom Specification Lot</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  to="/unjha-cumin-seeds"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <Info className="h-4 w-4 text-[var(--brand-gold-light)]" />
                  <span>Unjha Mandi Origin Guide</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15 text-xs">
                <div>
                  <div className="font-bold text-[var(--brand-gold-light)]">HS Code</div>
                  <div className="text-gray-300">0909 31 29 (Whole)</div>
                </div>
                <div>
                  <div className="font-bold text-[var(--brand-gold-light)]">Volatile Oil</div>
                  <div className="text-gray-300">2.5% to 4.5% v/w</div>
                </div>
                <div>
                  <div className="font-bold text-[var(--brand-gold-light)]">Sortex Purity</div>
                  <div className="text-gray-300">Up to 99.9% Purity</div>
                </div>
                <div>
                  <div className="font-bold text-[var(--brand-gold-light)]">Port of Loading</div>
                  <div className="text-gray-300">Mundra Port (INMUN1)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHYSICAL & CHEMICAL PARAMETERS TABLE */}
        <section className="py-16 md:py-20 bg-white border-b border-[rgba(201,168,76,0.15)]">
          <div className="jm-container space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)]">
                Standard Laboratory Testing Parameters
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                Physical &amp; Chemical Specification Matrix
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                The parameters below represent standard commercial export benchmarks. Final lot
                parameters are tested by NABL-accredited partner laboratories and confirmed against
                contract specifications prior to container stuffing:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[rgba(201,168,76,0.3)] bg-white shadow-sm">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="bg-[var(--brand-deep-green)] text-white">
                  <tr>
                    <th className="py-4 px-5 font-semibold">Quality Parameter</th>
                    <th className="py-4 px-5 font-semibold">Testing Method / Standard</th>
                    <th className="py-4 px-5 font-semibold">Export Benchmark Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(201,168,76,0.2)]">
                  {PHYSICAL_CHEMICAL_SPECS.map((spec) => (
                    <tr key={spec.parameter} className="hover:bg-[var(--brand-cream-light)] transition-colors">
                      <td className="py-3.5 px-5 font-bold text-[var(--brand-charcoal)]">
                        {spec.parameter}
                      </td>
                      <td className="py-3.5 px-5 text-gray-500 font-mono text-[11px] md:text-xs">
                        {spec.method}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-[var(--brand-forest)]">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-[rgba(201,168,76,0.3)] bg-[var(--brand-cream-light)] p-4 flex items-start gap-3 text-xs text-gray-700">
              <Info className="h-5 w-5 text-[var(--brand-forest)] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[var(--brand-forest)]">Note on Lot Variability: </span>
                Volatile oil, natural seed coloration, and moisture vary across agricultural seasons and
                growing regions. JM Masala draws composite representative samples for each batch and
                furnishes verified Certificate of Analysis (COA) records prior to dispatch.
              </div>
            </div>
          </div>
        </section>

        {/* COMMERCIAL GRADE COMPARISON */}
        <section className="py-16 md:py-20 bg-[var(--brand-cream)] border-b border-[rgba(201,168,76,0.15)]">
          <div className="jm-container space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)]">
                Commercial Grading
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                Export Grade Standards by Destination Market
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Different international markets require tailored cleaning calibrations and compliance
                documentation. Below is a structured comparison of export grades supplied by JM Masala:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GRADE_COMPARISON.map((grade) => (
                <div
                  key={grade.grade}
                  className="rounded-2xl bg-white p-7 shadow-sm border border-[rgba(201,168,76,0.25)] flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[rgba(201,168,76,0.2)] pb-3">
                      <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--brand-charcoal)]">
                        {grade.grade}
                      </h3>
                      <span className="rounded-full bg-[var(--brand-cream-light)] px-3 py-1 text-xs font-bold text-[var(--brand-forest)]">
                        {grade.purity}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-gray-500 block">Moisture Limit:</span>
                        <span className="font-bold text-[var(--brand-charcoal)]">{grade.moisture}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Volatile Essential Oil:</span>
                        <span className="font-bold text-[var(--brand-charcoal)]">{grade.volatileOil}</span>
                      </div>
                    </div>

                    <div className="text-xs space-y-1">
                      <span className="text-gray-500 block">Cleaning Technology:</span>
                      <p className="font-semibold text-gray-800">{grade.cleaning}</p>
                    </div>

                    <div className="text-xs space-y-1">
                      <span className="text-gray-500 block">Compliance Protocol:</span>
                      <p className="text-gray-700 leading-relaxed">{grade.compliance}</p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[var(--brand-cream-light)] p-3 border-l-2 border-[var(--brand-gold)] text-xs text-gray-700">
                    <span className="font-bold text-[var(--brand-forest)] block">Ideal Application:</span>
                    {grade.bestFor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOD SAFETY & MICROBIOLOGY */}
        <section className="py-16 md:py-20 bg-white border-b border-[rgba(201,168,76,0.15)]">
          <div className="jm-container space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)]">
                Food Safety &amp; Laboratory Controls
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                Microbiological, Aflatoxin &amp; Contaminant Protocols
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                For commercial buyers supplying food processing plants, ready-to-eat brands, or
                stringent retail chains, testing documentation must be verifiable. We coordinate
                laboratory testing through accredited facilities to confirm compliance before container stuffing:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 overflow-x-auto rounded-2xl border border-[rgba(201,168,76,0.3)] bg-white shadow-sm">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-[var(--brand-deep-green)] text-white">
                    <tr>
                      <th className="py-3.5 px-4 font-semibold">Test Parameter</th>
                      <th className="py-3.5 px-4 font-semibold">Specification Limit</th>
                      <th className="py-3.5 px-4 font-semibold">Verification Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[rgba(201,168,76,0.2)]">
                    {MICROBIOLOGICAL_LIMITS.map((micro) => (
                      <tr key={micro.test} className="hover:bg-[var(--brand-cream-light)]">
                        <td className="py-3 px-4 font-bold text-[var(--brand-charcoal)]">
                          {micro.test}
                        </td>
                        <td className="py-3 px-4 text-gray-700 font-mono text-[11px] md:text-xs">
                          {micro.requirement}
                        </td>
                        <td className="py-3 px-4 font-semibold text-[var(--brand-forest)]">
                          {micro.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-2xl border border-[rgba(201,168,76,0.25)] bg-[var(--brand-cream-light)] p-7 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[var(--brand-deep-green)] font-bold text-sm">
                    <ShieldCheck className="h-5 w-5 text-[var(--brand-gold)]" />
                    Laboratory Testing Policy
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Testing is conducted on representative composite samples drawn per container lot.
                    Reports are issued by NABL-accredited, FSSAI-approved analytical facilities using
                    validated GC-MS/MS, LC-MS/MS, and microbiological culture methods.
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Optional treatment protocols such as calibrated continuous steam sterilization
                    can be organized upon request for buyers requiring ultra-low microbial counts.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4 border border-[rgba(201,168,76,0.25)] text-xs space-y-1">
                  <span className="font-bold text-[var(--brand-charcoal)] block">Third-Party Inspection:</span>
                  <span className="text-gray-600">
                    Buyers may appoint surveyors (SGS, Intertek, Bureau Veritas) to supervise loading and draw duplicate counter-samples at Mundra Port.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PACKAGING & CONTAINER STUFFING SPECIFICATIONS */}
        <section className="py-16 md:py-20 bg-[var(--brand-cream)] border-b border-[rgba(201,168,76,0.15)]">
          <div className="jm-container space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)]">
                Logistics Engineering
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                Packaging, Palletization &amp; Container Loading Metrics
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Optimized container utilization ensures freight efficiency while protective barrier
                packaging prevents ocean-sweat degradation during transit:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white p-7 border border-[rgba(201,168,76,0.25)] shadow-sm space-y-4">
                <div className="rounded-xl bg-[var(--brand-cream-light)] p-3 w-fit text-[var(--brand-deep-green)]">
                  <Package className="h-6 w-6 text-[var(--brand-gold)]" />
                </div>
                <h3 className="font-bold text-base text-[var(--brand-charcoal)]">Packaging Formats</h3>
                <ul className="text-xs text-gray-600 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-forest)] shrink-0 mt-0.5" />
                    <span><strong>25 kg &amp; 50 kg PP Bags:</strong> Food-grade woven polypropylene with inner polyethylene liner.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-forest)] shrink-0 mt-0.5" />
                    <span><strong>Multi-Wall Paper Bags:</strong> 3-ply kraft paper bags for European and North American industrial buyers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-forest)] shrink-0 mt-0.5" />
                    <span><strong>Jumbo Bags:</strong> 500 kg to 1000 kg FIBC bulk bags with discharge spouts on request.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-7 border border-[rgba(201,168,76,0.25)] shadow-sm space-y-4">
                <div className="rounded-xl bg-[var(--brand-cream-light)] p-3 w-fit text-[var(--brand-deep-green)]">
                  <Ship className="h-6 w-6 text-[var(--brand-gold)]" />
                </div>
                <h3 className="font-bold text-base text-[var(--brand-charcoal)]">20ft FCL Container Capacity</h3>
                <ul className="text-xs text-gray-600 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-forest)] shrink-0 mt-0.5" />
                    <span><strong>Loose Stuffing:</strong> ~13.0 to 14.0 Metric Tons (~520 to 560 bags of 25kg).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-forest)] shrink-0 mt-0.5" />
                    <span><strong>Palletized:</strong> ~11.0 Metric Tons (10 standard 1000x1200mm ISPM-15 heat-treated pallets).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-forest)] shrink-0 mt-0.5" />
                    <span><strong>Preservation:</strong> 5-sided kraft paper lining with suspended dry-gel desiccant poles.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-7 border border-[rgba(201,168,76,0.25)] shadow-sm space-y-4">
                <div className="rounded-xl bg-[var(--brand-cream-light)] p-3 w-fit text-[var(--brand-deep-green)]">
                  <Scale className="h-6 w-6 text-[var(--brand-gold)]" />
                </div>
                <h3 className="font-bold text-base text-[var(--brand-charcoal)]">40ft FCL Container Capacity</h3>
                <ul className="text-xs text-gray-600 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-forest)] shrink-0 mt-0.5" />
                    <span><strong>Loose Stuffing:</strong> ~26.0 to 28.0 Metric Tons (dependent on destination road weight limits).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-forest)] shrink-0 mt-0.5" />
                    <span><strong>Palletized:</strong> ~22.0 to 24.0 Metric Tons (20 to 22 pallets).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-forest)] shrink-0 mt-0.5" />
                    <span><strong>Mixed Containers:</strong> Consolidated with coriander, fennel, or fenugreek on single B/L.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EXPORT DOCUMENTATION DOSSIER */}
        <section className="py-16 md:py-20 bg-white border-b border-[rgba(201,168,76,0.15)]">
          <div className="jm-container space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)]">
                Trade Compliance
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                Standard Export Documentation Package
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Clear and compliant shipping documents are vital to smooth customs clearance at destination
                ports. JM Masala issues a complete documentation dossier with every container:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {DOCUMENTATION_PACKAGE.map((doc) => (
                <div
                  key={doc}
                  className="rounded-xl border border-[rgba(201,168,76,0.25)] bg-[var(--brand-cream-light)] p-4 text-center space-y-2"
                >
                  <FileText className="h-6 w-6 text-[var(--brand-deep-green)] mx-auto" />
                  <div className="font-bold text-xs text-[var(--brand-charcoal)]">{doc}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-[var(--brand-deep-green)] p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="font-[var(--font-display)] text-xl font-bold text-white">
                  Need a customized Certificate of Analysis (COA) or pre-shipment sample?
                </h3>
                <p className="text-sm text-gray-200">
                  Our commercial team can dispatch crop samples via international courier and prepare FOB/CIF price indications.
                </p>
              </div>
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[var(--brand-gold)] px-6 py-3 text-sm font-bold text-[var(--brand-deep-green)] hover:bg-[var(--brand-gold-light)] transition-colors"
              >
                <span>Request Sample &amp; Quote</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-16 md:py-20 bg-[var(--brand-cream)] border-b border-[rgba(201,168,76,0.15)]">
          <div className="jm-container space-y-8 max-w-4xl">
            <div className="space-y-3 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)]">
                Technical FAQ
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                Frequently Asked Technical Questions
              </h2>
            </div>

            <div className="space-y-4">
              {SPEC_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-white p-6 shadow-sm border border-[rgba(201,168,76,0.25)] space-y-2"
                >
                  <h3 className="font-bold text-sm md:text-base text-[var(--brand-charcoal)]">
                    {faq.question}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED TOPICS / PILLAR NAVIGATION */}
        <section className="py-16 bg-white">
          <div className="jm-container space-y-8">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <h2 className="font-[var(--font-display)] text-xl md:text-2xl font-bold text-[var(--brand-charcoal)]">
                Explore Related Cumin Resources
              </h2>
              <p className="text-xs md:text-sm text-gray-600">
                Explore origin sourcing dynamics, main catalog specifications, and processing lines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Link
                to="/unjha-cumin-seeds"
                className="group rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[var(--brand-cream-light)] p-5 hover:border-[var(--brand-gold)] transition-all space-y-2"
              >
                <div className="font-bold text-sm text-[var(--brand-charcoal)] group-hover:text-[var(--brand-forest)] flex items-center justify-between">
                  <span>Unjha Mandi Origin</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-gray-600">
                  APMC arrival dynamics, crop calendar, and origin logistics from Gujarat.
                </p>
              </Link>

              <Link
                to="/cumin-seeds-exporter-india"
                className="group rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[var(--brand-cream-light)] p-5 hover:border-[var(--brand-gold)] transition-all space-y-2"
              >
                <div className="font-bold text-sm text-[var(--brand-charcoal)] group-hover:text-[var(--brand-forest)] flex items-center justify-between">
                  <span>Cumin Product Page</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-gray-600">
                  Commercial catalog page with packing options, HS codes, and container capacities.
                </p>
              </Link>

              <Link
                to="/best-cumin-exporter-india"
                className="group rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[var(--brand-cream-light)] p-5 hover:border-[var(--brand-gold)] transition-all space-y-2"
              >
                <div className="font-bold text-sm text-[var(--brand-charcoal)] group-hover:text-[var(--brand-forest)] flex items-center justify-between">
                  <span>Best Cumin Exporter</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-gray-600">
                  Overview of JM Masala&apos;s export profile, certifications, and buyer credentials.
                </p>
              </Link>

              <Link
                to="/export-destinations"
                className="group rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[var(--brand-cream-light)] p-5 hover:border-[var(--brand-gold)] transition-all space-y-2"
              >
                <div className="font-bold text-sm text-[var(--brand-charcoal)] group-hover:text-[var(--brand-forest)] flex items-center justify-between">
                  <span>Export Destinations</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-gray-600">
                  Global trade lanes, ocean transit routes, Incoterms, and payment terms.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CuminSeedsSpecificationsPage;
