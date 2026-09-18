import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  FileCheck2,
  FileText,
  Layers,
  MapPin,
  Package,
  ShieldCheck,
  Ship,
} from "lucide-react";
import Seo from "@/components/Seo";
import {
  COMPANY,
  SITE_URL,
  buildProductInquiryMessage,
  buildWhatsAppUrl,
} from "@/data/siteData";
import bannerImage from "@/assets/homepage.png";

const UNJHA_FAQS = [
  {
    question: "Why is Unjha considered the commercial hub for Indian cumin seeds?",
    answer:
      "Unjha, located in the Mehsana district of Gujarat, hosts one of India's largest Agricultural Produce Market Committees (APMC) dedicated to seed spices. It serves as the primary physical arrival and price-discovery center for cumin seeds harvested across Gujarat and Rajasthan.",
  },
  {
    question: "When is the fresh cumin harvest season in Unjha?",
    answer:
      "Fresh crop arrivals at the Unjha APMC mandi typically begin in February and peak between March and April. During this window, buyers have the widest access to high-volatile-oil lots with optimal natural color before crops move into seasonal storage.",
  },
  {
    question: "How does JM Masala process raw cumin arrivals from the Unjha mandi?",
    answer:
      "Raw mandi lots undergo multi-stage physical cleaning: preliminary screening, vibro-destoning to remove field stones and dirt balls, air aspiration, and high-resolution Sortex optical color grading to achieve buyer-required purity ranging from 98% up to 99.9%.",
  },
  {
    question: "What is the typical container loading capacity for cumin seeds from Unjha?",
    answer:
      "A standard 20-foot Full Container Load (FCL) accommodates approximately 13.0 to 14.0 Metric Tons in loose 25kg or 50kg bags, or approximately 11.0 Metric Tons when palletized. A 40-foot container typically carries 26.0 to 28.0 Metric Tons.",
  },
  {
    question: "How are export shipments routed from Unjha to international seaports?",
    answer:
      "Containers are stuffed and sealed in Gujarat and transported approximately 320 km via highway directly to Mundra Port (INMUN1) or Kandla Port for direct ocean vessel sailings to the Middle East, Europe, North America, and Asia.",
  },
  {
    question: "Can buyers obtain pre-shipment laboratory test reports and third-party inspection?",
    answer:
      "Yes. Pre-shipment laboratory certificates of analysis (COAs) from NABL-accredited facilities are coordinated against contract specifications. Importers can also appoint independent inspection agencies such as SGS, Intertek, or Bureau Veritas at the port terminal.",
  },
];

const HARVEST_TIMELINE = [
  {
    season: "Peak Harvest (Feb – Apr)",
    status: "Fresh Crop Arrivals",
    description:
      "Primary market arrivals across Gujarat and Rajasthan belts. Peak liquidity, brightest natural greenish-brown seed coloration, and volatile essential oil content ranging from 2.5% to 4.5%.",
    buyerAdvantage: "Best window for annual contract bookings and fresh-crop lot selection.",
  },
  {
    season: "Post-Harvest (May – Aug)",
    status: "Warehousing & Secondary Sourcing",
    description:
      "Arrivals stabilize; stock moves into temperature-monitored and dry storage warehouses. Lots are tested for moisture stability (<8.0% to 8.5%) before processing.",
    buyerAdvantage: "Consistent lot sizing and steady supply for routine container programs.",
  },
  {
    season: "Off-Season (Sep – Jan)",
    status: "Controlled Cold Storage Supply",
    description:
      "Supply transitions to cold-stored stocks. Careful quality verification is conducted to ensure volatile oil retention and absence of stored-product pests prior to optical sorting.",
    buyerAdvantage: "Continuous year-round supply with multi-stage re-cleaning prior to dispatch.",
  },
];

const UnjhaCuminSeedsPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Unjha Cumin Seeds (Origin procurement & export specifications)",
      "1x 20ft FCL (~13-14 MT)",
    ),
  );

  return (
    <>
      <Seo
        title="Unjha Cumin Seeds | APMC Mandi Sourcing & Export Supply | JM Masala"
        description="Learn about Unjha cumin seeds sourcing, APMC market yard arrival dynamics, Sortex optical grading, harvest calendar, and export container logistics from Unjha, Gujarat."
        path="/unjha-cumin-seeds"
        imageUrl={bannerImage}
        imageAlt="Unjha cumin seeds processing and export supply from Gujarat India"
        keywords={[
          "Unjha cumin seeds",
          "Unjha jeera market",
          "APMC Unjha cumin supplier",
          "cumin seeds origin Gujarat",
          "Unjha spice exporter",
          "Sortex cumin seeds Unjha",
          "Indian cumin seeds supplier",
          "cumin harvest calendar India",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ItemPage",
            name: "Unjha Cumin Seeds Origin & Export Supply",
            url: `${SITE_URL}/unjha-cumin-seeds`,
            description:
              "Commercial and technical guide to sourcing Indian cumin seeds directly from the Unjha trading hub in Gujarat.",
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
            mainEntity: UNJHA_FAQS.map((faq) => ({
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
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${bannerImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(13,34,20,0.95)] via-[rgba(13,34,20,0.85)] to-[rgba(13,34,20,0.7)]" />

          <div className="jm-container relative py-20 lg:py-24">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.12)] px-4 py-1.5 text-xs font-semibold tracking-wider text-[var(--brand-gold-light)] uppercase">
                <MapPin className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
                Origin Authority · Unjha, Gujarat
              </div>

              <h1 className="font-[var(--font-display)] text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                Unjha Cumin Seeds: Origin Sourcing &amp; Export Supply
              </h1>

              <p className="text-base text-gray-200 leading-relaxed md:text-lg">
                Unjha is one of India&apos;s primary commercial centers for seed spices. Positioned
                directly within this trading ecosystem, JM Masala sources fresh harvest arrivals
                through established APMC mandi networks, delivering calibrated Sortex-cleaned
                lots to international food processors, spice packers, and wholesale importers.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-gold)] px-6 py-3.5 text-sm font-bold text-[var(--brand-deep-green)] shadow-lg transition-transform hover:scale-[1.02] hover:bg-[var(--brand-gold-light)]"
                >
                  <span>Request Unjha Cumin Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  to="/cumin-seeds-specifications"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <FileText className="h-4 w-4 text-[var(--brand-gold-light)]" />
                  <span>View Technical Specs</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15 text-xs">
                <div>
                  <div className="font-bold text-[var(--brand-gold-light)]">Origin Hub</div>
                  <div className="text-gray-300">APMC Unjha, Gujarat</div>
                </div>
                <div>
                  <div className="font-bold text-[var(--brand-gold-light)]">Purity Range</div>
                  <div className="text-gray-300">98% to 99.9% Sortex</div>
                </div>
                <div>
                  <div className="font-bold text-[var(--brand-gold-light)]">Gateway Port</div>
                  <div className="text-gray-300">Mundra Port (INMUN1)</div>
                </div>
                <div>
                  <div className="font-bold text-[var(--brand-gold-light)]">Container FCL</div>
                  <div className="text-gray-300">~13.0 to 14.0 MT / 20ft</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ORIGIN CONTEXT SECTION */}
        <section className="py-16 md:py-20 bg-white border-b border-[rgba(201,168,76,0.15)]">
          <div className="jm-container space-y-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)]">
                Market Geography &amp; Trade Infrastructure
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                Why Unjha Origin Matters in International Cumin Procurement
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                In commodity agricultural trade, physical proximity to the primary arrival market
                provides measurable operational advantages. For cumin seeds (
                <em>Cuminum cyminum</em>), the Unjha market yard acts as the central clearinghouse
                where agricultural lots from northern Gujarat and western Rajasthan converge daily.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[var(--brand-cream-light)] p-7 space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-deep-green)] text-[var(--brand-gold)]">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--brand-charcoal)]">
                  Daily Physical Spot Liquidity
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  During peak crop arrivals, tens of thousands of agricultural bags pass through the
                  Unjha APMC daily. This volume enables precise physical lot selection based on seed
                  size, natural color, aroma, and essential oil levels rather than relying on mixed
                  secondary consignments.
                </p>
              </div>

              <div className="rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[var(--brand-cream-light)] p-7 space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-deep-green)] text-[var(--brand-gold)]">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--brand-charcoal)]">
                  Immediate Inward Quality Control
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sourcing at the point of origin allows immediate moisture testing and screen analysis
                  before lot consolidation. Raw lots exhibiting excessive moisture (&gt;9%) or inert
                  foreign matter are identified and screened before inward processing.
                </p>
              </div>

              <div className="rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[var(--brand-cream-light)] p-7 space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-deep-green)] text-[var(--brand-gold)]">
                  <Ship className="h-6 w-6" />
                </div>
                <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--brand-charcoal)]">
                  Direct Corridor to Mundra Port
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Unjha is situated along key multi-lane commercial corridors in northern Gujarat,
                  approximately 320 km from Mundra Port (INMUN1). Export containers are stuffed,
                  fumigated, and sealed close to origin and transported directly to port berths.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HARVEST CALENDAR & QUALITY CYCLES */}
        <section className="py-16 md:py-20 bg-[var(--brand-cream)] border-b border-[rgba(201,168,76,0.15)]">
          <div className="jm-container space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)]">
                Procurement Planning
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                The Unjha Cumin Crop &amp; Harvest Cycle
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Understanding seasonal procurement timing helps international buyers align annual
                purchasing programs, container schedules, and specification requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HARVEST_TIMELINE.map((item) => (
                <div
                  key={item.season}
                  className="rounded-2xl bg-white p-7 shadow-sm border border-[rgba(201,168,76,0.25)] flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-cream-light)] px-3 py-1 text-xs font-bold text-[var(--brand-deep-green)]">
                      <Calendar className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
                      {item.season}
                    </div>
                    <h3 className="font-bold text-base text-[var(--brand-charcoal)]">
                      {item.status}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[var(--brand-cream-light)] p-3.5 border-l-2 border-[var(--brand-gold)]">
                    <span className="block text-[11px] font-bold text-[var(--brand-forest)] uppercase">
                      Buyer Strategy
                    </span>
                    <span className="text-xs text-gray-700">
                      {item.buyerAdvantage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSING & SORTEX STAGES */}
        <section className="py-16 md:py-20 bg-white border-b border-[rgba(201,168,76,0.15)]">
          <div className="jm-container space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)]">
                Factory &amp; Sorting Infrastructure
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                From Mandi Arrival to Calibrated Export Lot
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Raw cumin harvested from agricultural fields carries crop stems, dirt, loose stones,
                and discolored grains. Converting raw arrivals into export-grade material requires
                a continuous physical grading process:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[var(--brand-cream-light)] border border-[rgba(201,168,76,0.2)] space-y-3">
                <span className="text-xs font-black text-[var(--brand-gold)]">STEP 01</span>
                <h3 className="font-bold text-base text-[var(--brand-charcoal)]">
                  Vibro Destoning &amp; Aspiration
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  High-capacity vibratory screens remove field stones, gravel, loose dust, and large
                  crop chaff through balanced air suction.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--brand-cream-light)] border border-[rgba(201,168,76,0.2)] space-y-3">
                <span className="text-xs font-black text-[var(--brand-gold)]">STEP 02</span>
                <h3 className="font-bold text-base text-[var(--brand-charcoal)]">
                  Gravity Separation
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Fluidized-bed gravity tables separate immature, hollow, or light-weight seeds from
                  heavy, oil-rich cumin grains.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--brand-cream-light)] border border-[rgba(201,168,76,0.2)] space-y-3">
                <span className="text-xs font-black text-[var(--brand-gold)]">STEP 03</span>
                <h3 className="font-bold text-base text-[var(--brand-charcoal)]">
                  Optical Sortex Grading
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Full-color optical sorters scan every seed in free-fall, ejecting dark, discolored,
                  and damaged seeds to achieve 99% to 99.9% purity.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--brand-cream-light)] border border-[rgba(201,168,76,0.2)] space-y-3">
                <span className="text-xs font-black text-[var(--brand-gold)]">STEP 04</span>
                <h3 className="font-bold text-base text-[var(--brand-charcoal)]">
                  Export Packaging &amp; Lining
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Packed in clean, food-grade woven polypropylene bags with inner moisture liners or
                  multi-wall paper sacks labeled per buyer specifications.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--brand-deep-green)] p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="font-[var(--font-display)] text-xl font-bold text-white">
                  Looking for detailed laboratory parameters and grade standards?
                </h3>
                <p className="text-sm text-gray-200">
                  Review moisture limits, volatile essential oil data, microbiological tolerances, and container stuffing weights.
                </p>
              </div>
              <Link
                to="/cumin-seeds-specifications"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[var(--brand-gold)] px-6 py-3 text-sm font-bold text-[var(--brand-deep-green)] hover:bg-[var(--brand-gold-light)] transition-colors"
              >
                <span>Technical Specifications Sheet</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE: RAW MANDI VS SORTEX */}
        <section className="py-16 md:py-20 bg-[var(--brand-cream)] border-b border-[rgba(201,168,76,0.15)]">
          <div className="jm-container space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)]">
                Grade Differentiation
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                Unjha Cumin Grades: Raw Mandi vs Export-Ready Sortex
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Clear distinction between raw arrival stock and value-added export grades:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[rgba(201,168,76,0.3)] bg-white shadow-sm">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="bg-[var(--brand-deep-green)] text-white">
                  <tr>
                    <th className="py-4 px-5 font-semibold">Parameter</th>
                    <th className="py-4 px-5 font-semibold">Raw Mandi Arrival (FAQ)</th>
                    <th className="py-4 px-5 font-semibold">Machine Cleaned (98-99%)</th>
                    <th className="py-4 px-5 font-semibold">Sortex Cleaned (99.5%+)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(201,168,76,0.2)]">
                  <tr>
                    <td className="py-3.5 px-5 font-bold text-[var(--brand-charcoal)]">Physical Purity</td>
                    <td className="py-3.5 px-5 text-gray-600">92% to 95%</td>
                    <td className="py-3.5 px-5 text-gray-600">98.0% to 99.0%</td>
                    <td className="py-3.5 px-5 font-bold text-[var(--brand-forest)]">99.5% to 99.9%</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold text-[var(--brand-charcoal)]">Stones &amp; Foreign Matter</td>
                    <td className="py-3.5 px-5 text-gray-600">Present (field stones, mud)</td>
                    <td className="py-3.5 px-5 text-gray-600">&lt;1.0% (destoned)</td>
                    <td className="py-3.5 px-5 font-bold text-[var(--brand-forest)]">Nil / Trace (&lt;0.1%)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold text-[var(--brand-charcoal)]">Discolored / Damaged Grains</td>
                    <td className="py-3.5 px-5 text-gray-600">3% to 6% variable</td>
                    <td className="py-3.5 px-5 text-gray-600">1% to 2%</td>
                    <td className="py-3.5 px-5 font-bold text-[var(--brand-forest)]">&lt;0.5% (optically rejected)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold text-[var(--brand-charcoal)]">Moisture Content</td>
                    <td className="py-3.5 px-5 text-gray-600">9% to 12% (fresh arrival)</td>
                    <td className="py-3.5 px-5 text-gray-600">8.5% to 9.0% max</td>
                    <td className="py-3.5 px-5 font-bold text-[var(--brand-forest)]">Max 8.0% to 8.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold text-[var(--brand-charcoal)]">Volatile Essential Oil</td>
                    <td className="py-3.5 px-5 text-gray-600">Variable by farm lot</td>
                    <td className="py-3.5 px-5 text-gray-600">2.5% to 3.5%</td>
                    <td className="py-3.5 px-5 font-bold text-[var(--brand-forest)]">2.8% to 4.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-5 font-bold text-[var(--brand-charcoal)]">Typical Buyer Suitability</td>
                    <td className="py-3.5 px-5 text-gray-600">Local processors with cleaning plants</td>
                    <td className="py-3.5 px-5 text-gray-600">Wholesale repackers, grinding mills</td>
                    <td className="py-3.5 px-5 font-bold text-[var(--brand-forest)]">Export importers, EU/USA/Gulf packers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* LOGISTICS & DOCUMENTATION SECTION */}
        <section className="py-16 md:py-20 bg-white border-b border-[rgba(201,168,76,0.15)]">
          <div className="jm-container space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)]">
                Container Logistics &amp; Documentation
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                Shipment Execution from Unjha to Mundra Port
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Exporting cumin requires strict sea-freight preservation protocols and verified
                trade documentation. Every export container organized by JM Masala follows
                standard operational guidelines:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[var(--brand-cream-light)] p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[var(--brand-deep-green)] p-2 text-[var(--brand-gold)]">
                    <Package className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[var(--brand-charcoal)]">Container Preservation</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Containers are lined with 5-side heavy kraft paper and equipped with high-absorption
                  dry-gel desiccant poles suspended in corrugations to protect against maritime
                  container sweat.
                </p>
              </div>

              <div className="rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[var(--brand-cream-light)] p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[var(--brand-deep-green)] p-2 text-[var(--brand-gold)]">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[var(--brand-charcoal)]">Standard Export Dossier</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Shipments include Commercial Invoice, Packing List, Certificate of Origin (COO),
                  Government Phytosanitary Certificate, Bill of Lading, and NABL-accredited Lab COA.
                </p>
              </div>

              <div className="rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[var(--brand-cream-light)] p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[var(--brand-deep-green)] p-2 text-[var(--brand-gold)]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[var(--brand-charcoal)]">Independent Surveyors</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We coordinate with buyer-nominated inspection agencies such as SGS, Intertek, or
                  Bureau Veritas at Mundra Port to supervise container loading and draw composite samples.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-16 md:py-20 bg-[var(--brand-cream)] border-b border-[rgba(201,168,76,0.15)]">
          <div className="jm-container space-y-8 max-w-4xl">
            <div className="space-y-3 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-forest)]">
                Buyer Questions
              </span>
              <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--brand-charcoal)]">
                Frequently Asked Questions About Unjha Cumin
              </h2>
            </div>

            <div className="space-y-4">
              {UNJHA_FAQS.map((faq) => (
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
                Explore More in the Cumin Export Cluster
              </h2>
              <p className="text-xs md:text-sm text-gray-600">
                Cross-reference technical specifications, processing capabilities, and export operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Link
                to="/cumin-seeds-specifications"
                className="group rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[var(--brand-cream-light)] p-5 hover:border-[var(--brand-gold)] transition-all space-y-2"
              >
                <div className="font-bold text-sm text-[var(--brand-charcoal)] group-hover:text-[var(--brand-forest)] flex items-center justify-between">
                  <span>Cumin Specifications</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-gray-600">
                  Full chemical, physical, and microbiological data sheets with grade comparisons.
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
                to="/spice-processing-manufacturing"
                className="group rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[var(--brand-cream-light)] p-5 hover:border-[var(--brand-gold)] transition-all space-y-2"
              >
                <div className="font-bold text-sm text-[var(--brand-charcoal)] group-hover:text-[var(--brand-forest)] flex items-center justify-between">
                  <span>Processing Infrastructure</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-gray-600">
                  Detailed look at destoners, gravity separators, and Sortex optical lines.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UnjhaCuminSeedsPage;
