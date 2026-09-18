import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  FileCheck2,
  FileText,
  Layers,
  MapPin,
  Ship,
  Sparkles,
} from "lucide-react";
import Seo from "@/components/Seo";
import {
  COMPANY,
  SITE_URL,
  buildProductInquiryMessage,
  buildWhatsAppUrl,
} from "@/data/siteData";
import bannerImage from "@/assets/homepage.png";

const UNJHA_FENNEL_FAQS = [
  {
    question: "Why is Unjha, Gujarat considered the premier trading hub for Indian fennel seeds?",
    answer:
      "Unjha hosts one of Asia's largest Agricultural Produce Market Committees (APMC) dedicated to seed spices. Adjacent agricultural belts in northern Gujarat (Mehsana, Patan, Banaskantha) produce the world's most aromatic Foeniculum vulgare crops. Unjha acts as the central arrival, quality grading, and price-discovery mandi where spot-market lots are inspected daily for color, seed boldness, and volatile oil retention.",
  },
  {
    question: "What are the primary varieties of Indian fennel seeds exported from Unjha?",
    answer:
      "JM Masala exports three primary commercial varieties: (1) Abu Road / Gujarat Bold Green Fennel—plump, vibrant green seeds with high essential oil (1.5%–3.0%) favored for tea blends, beverage infusions, and savory seasonings; (2) Lakhnavi Fennel (Choti Saunf)—delicate, extra-sweet, slender seeds prized worldwide for luxury tabletop mouth fresheners and confectionery; and (3) Machine Cleaned FAQ Grade—cost-effective lots for industrial grinding and extraction.",
  },
  {
    question: "When is the peak fresh fennel harvest arrival window in Gujarat?",
    answer:
      "Fresh fennel harvest arrivals at the Unjha APMC mandi commence in late February and peak between March and April. During this harvest window, international buyers can contract fresh-crop lots with optimal natural green hue, low moisture (<8%), and maximum trans-anethole essential oil before crops transition into seasonal warehouse storage.",
  },
  {
    question: "What container loading capacity and packaging options are available for fennel?",
    answer:
      "Due to the physical volume of whole fennel seeds, a standard 20-foot Full Container Load (FCL) accommodates approximately 12.0 to 13.5 Metric Tons loose stuffed, or approximately 10.5 to 11.0 Metric Tons palletized. A 40-foot FCL carries 24.0 to 26.0 Metric Tons. We package in 25kg and 50kg food-grade woven PP bags with inner polyethylene barrier liners, multi-wall kraft paper bags, or custom private-label retail pouches.",
  },
  {
    question: "How does JM Masala ensure compliance with European Union (EU) pesticide MRLs?",
    answer:
      "We source from documented cultivation belts and subject raw lots to pre-cleaning, mechanical destoning, and optical Sortex grading. Pre-shipment batch samples are tested at NABL-accredited ISO/IEC 17025 laboratories via LC-MS/MS and GC-MS/MS for over 500 pesticide residues, guaranteeing compliance with European Commission Regulation (EC) No 396/2005 and US FDA ASTA cleanliness guidelines.",
  },
  {
    question: "How are export shipments routed from Unjha to international destination ports?",
    answer:
      "Finished container consignments are stuffed and sealed under customs supervision in Gujarat and trucked approximately 320 km via national highways directly to Mundra Port (INMUN1) or Kandla Port. Direct ocean vessels provide rapid transit times to Jebel Ali (3-5 days), Singapore (8-10 days), European ports (20-25 days), and North American ports (28-35 days).",
  },
];

const FENNEL_HARVEST_TIMELINE = [
  {
    season: "Peak Harvest (Feb – Apr)",
    status: "Fresh Crop Arrivals",
    description:
      "Primary crop arrivals across Gujarat's Mehsana and Saurashtra belts. Maximum spot market liquidity, richest natural light-to-deep green coloration, and peak trans-anethole essential oil (1.8% to 3.2%).",
    buyerAdvantage: "Prime window for annual contract bookings, color-critical retail lots, and tea blending programs.",
  },
  {
    season: "Post-Harvest (May – Aug)",
    status: "Warehousing & Controlled Storage",
    description:
      "Arrivals stabilize; stock moves into temperature-monitored, light-protected dry warehouses to prevent photo-oxidation and color fading. Lots are re-screened for moisture stability (<8.0%).",
    buyerAdvantage: "Consistent lot sizing, steady market availability, and reliable container fulfillment.",
  },
  {
    season: "Off-Season (Sep – Jan)",
    status: "Cold Storage Stock Processing",
    description:
      "Supply transitions to climate-controlled cold storage reserves (5°C to 10°C). Prior to shipment, stock undergoes multi-stage re-cleaning and optical Sortex grading to eliminate discolored seeds.",
    buyerAdvantage: "Continuous year-round supply with verified essential oil stability and guaranteed pest-free dispatch.",
  },
];

const FENNEL_VARIETIES = [
  {
    name: "Abu Road / Gujarat Bold Green (Variyali)",
    botanical: "Foeniculum vulgare Mill.",
    purity: "99.0% to 99.5% Sortex",
    oilContent: "1.8% to 3.0% Volatile Oil",
    characteristics: "Large, plump, curved ribbed seeds with a vibrant greenish hue. Naturally sweet with distinct aniseed aromatic profile.",
    bestFor: "Herbal tea blends, botanical infusions, Italian sausage seasoning, whole spice repacking.",
  },
  {
    name: "Lakhnavi Fennel (Choti Saunf)",
    botanical: "Foeniculum vulgare var. dulce",
    purity: "99.5% Double Sortex",
    oilContent: "2.0% to 3.5% Volatile Oil",
    characteristics: "Slender, delicate, miniature grains with exceptional natural sweetness, minimal bitterness, and soft chewable texture.",
    bestFor: "Gourmet tabletop mouth fresheners (mukhwas), luxury confectionery, bakery, fine dining hospitality.",
  },
  {
    name: "Medium Green & Machine Cleaned FAQ",
    botanical: "Foeniculum vulgare",
    purity: "98.0% to 99.0% Purity",
    oilContent: "1.5% to 2.2% Volatile Oil",
    characteristics: "Evenly sized seeds, pale green to yellowish-green tone, thoroughly destoned and aspirated to remove stalks.",
    bestFor: "Industrial grinding into ground fennel powder, curry powder formulations, oleoresin extraction.",
  },
];

const UnjhaFennelSeedsPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Unjha Fennel Seeds (Origin procurement & export specifications)",
      "1x 20ft FCL (~12-13.5 MT)",
    ),
  );

  return (
    <>
      <Seo
        title="Unjha Fennel Seeds Exporter India | Indian Saunf | JM Masala"
        description="Comprehensive guide to Unjha fennel seeds (Saunf / Variyali) export supply from Gujarat. Bold Green, Lakhnavi, Sortex 99.5%, EU MRL testing, FOB Mundra."
        path="/unjha-fennel-seeds"
        imageUrl={bannerImage}
        imageAlt="Unjha fennel seeds processing and export supply from Gujarat India"
        keywords={[
          "Unjha fennel seeds",
          "fennel seeds exporter india",
          "Unjha saunf market",
          "APMC Unjha fennel supplier",
          "fennel seeds origin Gujarat",
          "bold green fennel seeds",
          "lakhnavi fennel seeds supplier",
          "variyali exporter gujarat",
          "Sortex fennel seeds Unjha",
          "Indian saunf wholesale",
          "fennel seeds hs code 09096129",
          "fennel seeds harvest calendar India",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ItemPage",
            name: "Unjha Fennel Seeds Origin Sourcing & Export Supply",
            url: `${SITE_URL}/unjha-fennel-seeds`,
            description:
              "Commercial and technical guide to sourcing Indian fennel seeds (Saunf / Variyali) directly from the Unjha agricultural trade hub in Gujarat.",
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
            mainEntity: UNJHA_FENNEL_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: `${SITE_URL}/products`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Fennel Seeds",
                item: `${SITE_URL}/fennel-seeds-exporter-india`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Unjha Fennel Seeds Origin Guide",
                item: `${SITE_URL}/unjha-fennel-seeds`,
              },
            ],
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
                Unjha Fennel Seeds: Origin Sourcing &amp; Export Supply
              </h1>

              <p className="text-base text-gray-200 leading-relaxed md:text-lg">
                Unjha, Gujarat is the epicenter of India&apos;s seed spice commerce. Sourced directly
                from APMC Unjha mandi auctions and farmer networks in northern Gujarat, JM Masala
                supplies machine-cleaned and Sortex optical-graded Indian Fennel Seeds (Saunf / Variyali)
                with calibrated green color retention, high trans-anethole essential oil, and certified low moisture.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-gold)] px-6 py-3.5 text-sm font-bold text-[var(--brand-deep-green)] shadow-lg transition-transform hover:scale-[1.02] hover:bg-[var(--brand-gold-light)]"
                >
                  <span>Request Unjha Fennel Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  to="/fennel-seeds-exporter-india"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <FileText className="h-4 w-4 text-[var(--brand-gold-light)]" />
                  <span>View Product Catalog Specs</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-4">
                <div>
                  <div className="text-2xl font-extrabold text-[var(--brand-gold-light)]">99.5%</div>
                  <div className="text-xs text-gray-300">Sortex Optical Purity</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[var(--brand-gold-light)]">1.5–3.0%</div>
                  <div className="text-xs text-gray-300">Volatile Essential Oil</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[var(--brand-gold-light)]">&lt; 8.0%</div>
                  <div className="text-xs text-gray-300">Moisture Control</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[var(--brand-gold-light)]">Mundra Port</div>
                  <div className="text-xs text-gray-300">320 km Direct Highway</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: WHY UNJHA IS THE COMMERCIAL EPICENTER */}
        <section className="jm-section jm-section--white border-b border-[var(--brand-gold-pale)]/50">
          <div className="jm-container">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                  Geographic Sourcing Advantage
                </span>
                <h2 className="text-tagline not-italic text-2xl sm:text-3xl lg:text-4xl text-[var(--brand-charcoal)]">
                  Why Global Buyers Source Fennel Seeds from Unjha, Gujarat
                </h2>
                <p className="text-base text-[var(--brand-forest)] leading-relaxed">
                  Fennel (*Foeniculum vulgare*) thrives in the well-drained, sandy-loam soils and arid winter sunshine of
                  northern Gujarat. The districts surrounding Unjha—Mehsana, Patan, Banaskantha, and Sabarkantha—produce
                  India&apos;s highest-grade fennel crops, characterized by intense sweetness, dense grain weight, and vibrant
                  natural green hue.
                </p>
                <p className="text-base text-[var(--brand-forest)] leading-relaxed">
                  As the primary spot trading center, the Unjha APMC market yard brings together hundreds of agricultural
                  producers daily. Operating inside Unjha gives JM Masala significant advantages over brokers located in port
                  cities:
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 rounded-lg border border-[var(--brand-gold-pale)]/40 bg-[var(--brand-cream-light)] p-3.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--brand-gold)] mt-0.5" />
                    <div className="text-sm text-[var(--brand-forest)]">
                      <strong className="text-[var(--brand-charcoal)]">Direct Auction Lot Selection:</strong> We inspect fresh
                      daily arrivals on the auction floor, cherry-picking lots with the highest trans-anethole volatile oil and
                      lowest admixture.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-[var(--brand-gold-pale)]/40 bg-[var(--brand-cream-light)] p-3.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--brand-gold)] mt-0.5" />
                    <div className="text-sm text-[var(--brand-forest)]">
                      <strong className="text-[var(--brand-charcoal)]">Immediate Processing &amp; Optical Sorting:</strong> Fresh
                      lots transition straight from the mandi into calibrated vibro-cleaning and high-resolution Sortex optical
                      grading machines without prolonged humid storage.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-[var(--brand-gold-pale)]/40 bg-[var(--brand-cream-light)] p-3.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--brand-gold)] mt-0.5" />
                    <div className="text-sm text-[var(--brand-forest)]">
                      <strong className="text-[var(--brand-charcoal)]">Direct Mundra Port Logistics:</strong> Located just 320 km
                      from Mundra Port, stuffed and sealed containers move rapidly over dedicated national freight corridors,
                      minimizing thermal shock and preserving delicate chlorophyll green color.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Quick Trade Fact Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream-light)] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-[var(--brand-gold-pale)] pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-gold)] text-[var(--brand-deep-green)]">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[var(--brand-charcoal)]">Unjha Fennel Trade Snapshot</h3>
                      <p className="text-xs text-gray-500">Key Commercial &amp; Physical Benchmarks</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-[var(--brand-gold-pale)]/50 pb-2.5">
                      <span className="text-gray-500">Primary Mandi</span>
                      <span className="font-bold text-[var(--brand-charcoal)]">APMC Unjha (Mehsana, Gujarat)</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--brand-gold-pale)]/50 pb-2.5">
                      <span className="text-gray-500">HS Code (Whole)</span>
                      <span className="font-bold text-[var(--brand-charcoal)]">0909 61 29 / 0909 61 39</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--brand-gold-pale)]/50 pb-2.5">
                      <span className="text-gray-500">Peak Harvest Season</span>
                      <span className="font-bold text-[var(--brand-charcoal)]">February to April</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--brand-gold-pale)]/50 pb-2.5">
                      <span className="text-gray-500">Key Quality Grades</span>
                      <span className="font-bold text-[var(--brand-charcoal)]">Bold Green, Lakhnavi, FAQ</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--brand-gold-pale)]/50 pb-2.5">
                      <span className="text-gray-500">Sortex Optical Purity</span>
                      <span className="font-bold text-[var(--brand-charcoal)]">99.0% / 99.5%</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--brand-gold-pale)]/50 pb-2.5">
                      <span className="text-gray-500">20ft FCL Capacity</span>
                      <span className="font-bold text-[var(--brand-charcoal)]">12.0 to 13.5 Metric Tons</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--brand-gold-pale)]/50 pb-2.5">
                      <span className="text-gray-500">40ft FCL Capacity</span>
                      <span className="font-bold text-[var(--brand-charcoal)]">24.0 to 26.0 Metric Tons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Nearest Export Port</span>
                      <span className="font-bold text-[var(--brand-gold)]">Mundra Port (INMUN1)</span>
                    </div>
                  </div>

                  <a
                    href={quoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-xl bg-[var(--brand-deep-green)] py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[var(--brand-charcoal)]"
                  >
                    Request Contract Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: VARIETIES OF INDIAN FENNEL */}
        <section className="jm-section bg-[var(--brand-cream)] border-b border-[var(--brand-gold-pale)]/50">
          <div className="jm-container space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                Product Taxonomy
              </span>
              <h2 className="text-tagline not-italic text-2xl sm:text-3xl lg:text-4xl text-[var(--brand-charcoal)] mt-1">
                Indian Fennel Seed Varieties &amp; Commercial Grades
              </h2>
              <p className="text-sm text-[var(--brand-forest)] mt-2">
                We classify and calibrate fennel export consignments based on seed geometry, color intensity, chewability,
                and active essential oil composition.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {FENNEL_VARIETIES.map((variety) => (
                <div
                  key={variety.name}
                  className="rounded-2xl border border-[var(--brand-gold-pale)] bg-white p-6 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-1.5 rounded-md bg-[var(--brand-cream-light)] px-2.5 py-1 text-xs font-semibold text-[var(--brand-charcoal)]">
                      <Sparkles className="h-3 w-3 text-[var(--brand-gold)]" />
                      {variety.purity}
                    </div>

                    <h3 className="font-bold text-lg text-[var(--brand-charcoal)] leading-snug">{variety.name}</h3>
                    <p className="text-xs italic text-gray-500">{variety.botanical}</p>

                    <p className="text-xs text-[var(--brand-forest)] leading-relaxed">{variety.characteristics}</p>

                    <div className="rounded-lg bg-[var(--brand-cream-light)]/60 p-3 text-xs space-y-1">
                      <span className="font-semibold text-gray-700">Essential Oil:</span>
                      <p className="text-[var(--brand-charcoal)] font-bold">{variety.oilContent}</p>
                    </div>
                  </div>

                  <div className="border-t border-[var(--brand-gold-pale)]/40 pt-3 text-xs">
                    <span className="font-semibold text-gray-500 uppercase tracking-wider block mb-1">Recommended Uses:</span>
                    <p className="text-[var(--brand-charcoal)]">{variety.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: HARVEST CALENDAR & CROP DYNAMICS */}
        <section className="jm-section jm-section--white border-b border-[var(--brand-gold-pale)]/50">
          <div className="jm-container space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                Procurement Seasonality
              </span>
              <h2 className="text-tagline not-italic text-2xl sm:text-3xl lg:text-4xl text-[var(--brand-charcoal)] mt-1">
                Fennel Harvest Calendar &amp; Seasonal Buying Strategy
              </h2>
              <p className="text-sm text-[var(--brand-forest)] mt-2">
                Understanding Gujarat&apos;s fennel crop cycle allows global procurement managers to optimize lot quality,
                chlorophyll retention, and contract price stability.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {FENNEL_HARVEST_TIMELINE.map((stage) => (
                <div
                  key={stage.season}
                  className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream-light)] p-6 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-deep-green)] px-3 py-1 text-xs font-bold text-[var(--brand-gold-light)]">
                      <Calendar className="h-3.5 w-3.5" />
                      {stage.season}
                    </div>

                    <h3 className="font-bold text-lg text-[var(--brand-charcoal)]">{stage.status}</h3>
                    <p className="text-xs text-[var(--brand-forest)] leading-relaxed">{stage.description}</p>
                  </div>

                  <div className="border-t border-[var(--brand-gold-pale)]/50 pt-3 text-xs bg-white/70 rounded-xl p-3">
                    <span className="font-bold text-[var(--brand-deep-green)] block mb-1">Buyer Advantage:</span>
                    <p className="text-gray-600">{stage.buyerAdvantage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: INTERNATIONAL MARKET QUALITY STANDARDS */}
        <section className="jm-section bg-[var(--brand-cream)] border-b border-[var(--brand-gold-pale)]/50">
          <div className="jm-container space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                Regulatory &amp; Destination Standards
              </span>
              <h2 className="text-tagline not-italic text-2xl sm:text-3xl lg:text-4xl text-[var(--brand-charcoal)] mt-1">
                Market-Specific Export Quality Bands
              </h2>
              <p className="text-sm text-[var(--brand-forest)] mt-2">
                We calibrate machine cleaning, Sortex optical thresholds, and lab testing parameters to match regulatory
                tolerances in target importing nations.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Europe */}
              <div className="rounded-2xl border border-[rgba(201,168,76,0.4)] bg-white p-5 space-y-3 shadow-xs">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-bold text-[var(--brand-deep-green)]">Europe Grade</span>
                  <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">EU 396/2005</span>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li><strong>Purity:</strong> 99.5% Sortex Optical</li>
                  <li><strong>Moisture:</strong> Max 8.0%</li>
                  <li><strong>Admixture:</strong> Max 0.8%</li>
                  <li><strong>Volatile Oil:</strong> Min 1.5% v/w</li>
                  <li><strong>Testing:</strong> Pesticide MRLs &amp; Aflatoxins (B1 &lt; 5 ppb)</li>
                </ul>
              </div>

              {/* USA */}
              <div className="rounded-2xl border border-[rgba(201,168,76,0.4)] bg-white p-5 space-y-3 shadow-xs">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-bold text-[var(--brand-deep-green)]">USA / ASTA</span>
                  <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">US FDA ASTA</span>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li><strong>Purity:</strong> 99.0% ASTA Standard</li>
                  <li><strong>Moisture:</strong> Max 8.5%</li>
                  <li><strong>Admixture:</strong> Max 1.0%</li>
                  <li><strong>Volatile Oil:</strong> Min 1.5% v/w</li>
                  <li><strong>Micro:</strong> Salmonella Neg / 25g, E. coli &lt; 10 CFU</li>
                </ul>
              </div>

              {/* Gulf / Middle East */}
              <div className="rounded-2xl border border-[rgba(201,168,76,0.4)] bg-white p-5 space-y-3 shadow-xs">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-bold text-[var(--brand-deep-green)]">Gulf / Middle East</span>
                  <span className="text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">GSO 1016</span>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li><strong>Purity:</strong> 99.0% Machine / Sortex</li>
                  <li><strong>Moisture:</strong> Max 9.0%</li>
                  <li><strong>Color:</strong> Selected Bold Green Variyali</li>
                  <li><strong>Packing:</strong> 25kg &amp; 50kg food-grade PP bags</li>
                  <li><strong>Application:</strong> Mukhwas, tea, &amp; savory rice</li>
                </ul>
              </div>

              {/* Singapore & SE Asia */}
              <div className="rounded-2xl border border-[rgba(201,168,76,0.4)] bg-white p-5 space-y-3 shadow-xs">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-bold text-[var(--brand-deep-green)]">Singapore Quality</span>
                  <span className="text-[10px] font-semibold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Asian Standard</span>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li><strong>Purity:</strong> 99.0% Machine Cleaned</li>
                  <li><strong>Moisture:</strong> Max 9.0%</li>
                  <li><strong>Admixture:</strong> Max 1.0%</li>
                  <li><strong>Volatile Oil:</strong> Min 1.2% to 1.8%</li>
                  <li><strong>Economy:</strong> Optimized freight &amp; bulk packing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CONTAINER LOGISTICS & PACKAGING */}
        <section className="jm-section jm-section--white border-b border-[var(--brand-gold-pale)]/50">
          <div className="jm-container">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                  Logistics &amp; Packaging
                </span>
                <h2 className="text-tagline not-italic text-2xl sm:text-3xl lg:text-4xl text-[var(--brand-charcoal)]">
                  FCL Container Stuffing &amp; Export Packaging Specs
                </h2>
                <p className="text-base text-[var(--brand-forest)] leading-relaxed">
                  Whole fennel seeds possess a medium bulk density (~450–520 g/L). Stuffed under strict moisture controls,
                  containers incorporate high-absorption desiccant bags to prevent container condensation during transit
                  across equatorial waters.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 pt-2">
                  <div className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream-light)] p-4 space-y-2">
                    <div className="flex items-center gap-2 text-[var(--brand-gold)] font-bold text-sm">
                      <Ship className="h-4 w-4" />
                      20ft FCL Container
                    </div>
                    <div className="text-2xl font-extrabold text-[var(--brand-charcoal)]">12.0 – 13.5 MT</div>
                    <p className="text-xs text-gray-600">Loose stuffed in 25/50kg bags (~10.5–11.0 MT palletized)</p>
                  </div>

                  <div className="rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream-light)] p-4 space-y-2">
                    <div className="flex items-center gap-2 text-[var(--brand-gold)] font-bold text-sm">
                      <Ship className="h-4 w-4" />
                      40ft FCL Container
                    </div>
                    <div className="text-2xl font-extrabold text-[var(--brand-charcoal)]">24.0 – 26.0 MT</div>
                    <p className="text-xs text-gray-600">Loose stuffed in 25/50kg bags (~21.0–22.0 MT palletized)</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-[var(--brand-forest)]">
                  <p className="font-semibold text-[var(--brand-charcoal)]">Packaging Options:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-600">
                    <li>25 kg &amp; 50 kg food-grade woven polypropylene (PP) bags with LDPE inner liner</li>
                    <li>3-ply multi-wall kraft paper bags for European &amp; North American industrial processors</li>
                    <li>Vacuum-sealed aluminium barrier bags for premium bold green varieties to prevent light fading</li>
                    <li>Private label retail pouches (100g, 200g, 500g, 1kg) with custom barcode &amp; nutritional printing</li>
                  </ul>
                </div>
              </div>

              {/* Right: Export Documentation & Inspection */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream-light)] p-6 sm:p-8 space-y-5">
                  <div className="flex items-center gap-3 border-b border-[var(--brand-gold-pale)] pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-gold)] text-[var(--brand-deep-green)]">
                      <FileCheck2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[var(--brand-charcoal)]">Export Documentation Package</h3>
                      <p className="text-xs text-gray-500">Every Consignment Fully Compliant</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="text-[var(--brand-gold)] font-bold">&bull;</span>
                      <span><strong>Certificate of Analysis (COA):</strong> Issued by NABL-accredited labs for purity, moisture, volatile oil, and micro limits.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[var(--brand-gold)] font-bold">&bull;</span>
                      <span><strong>Phytosanitary Certificate:</strong> Issued by the Ministry of Agriculture, Government of India.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[var(--brand-gold)] font-bold">&bull;</span>
                      <span><strong>Fumigation Certificate:</strong> Aluminum Phosphide / Methyl Bromide fumigation prior to container sealing.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[var(--brand-gold)] font-bold">&bull;</span>
                      <span><strong>Certificate of Origin:</strong> Issued by the Spices Board of India or authorized Chamber of Commerce.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[var(--brand-gold)] font-bold">&bull;</span>
                      <span><strong>Third-Party Inspection:</strong> SGS, Intertek, or Bureau Veritas inspection coordinated at loading port upon request.</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={quoteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl bg-[var(--brand-gold)] py-3 text-center text-sm font-bold text-[var(--brand-deep-green)] transition-transform hover:scale-[1.01]"
                    >
                      Inquire for Next Vessel Sailing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
        <section className="jm-section bg-[var(--brand-cream)]">
          <div className="jm-container space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--brand-gold)]">
                Technical Knowledge
              </span>
              <h2 className="text-tagline not-italic text-2xl sm:text-3xl lg:text-4xl text-[var(--brand-charcoal)] mt-1">
                Frequently Asked Questions: Unjha Fennel Seeds
              </h2>
              <p className="text-sm text-[var(--brand-forest)] mt-2">
                Answers to common buyer queries regarding origin procurement, chemical testing, and shipping programs.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {UNJHA_FENNEL_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-[var(--brand-gold-pale)] bg-white p-5 shadow-xs space-y-2"
                >
                  <h3 className="font-bold text-base text-[var(--brand-charcoal)]">{faq.question}</h3>
                  <p className="text-xs text-[var(--brand-forest)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="bg-[var(--brand-deep-green)] text-white py-16">
          <div className="jm-container text-center max-w-3xl space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--brand-gold-light)]">
              Direct Mandi Procurement
            </span>
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Source Export-Grade Indian Fennel Seeds Directly from Unjha
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Connect with JM Masala to request live Unjha mandi price indications, laboratory specifications, and FCL container shipping schedules to your destination port.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-gold)] px-8 py-3.5 text-sm font-bold text-[var(--brand-deep-green)] shadow-lg transition-transform hover:scale-[1.02]"
              >
                <span>Request FCL Quotation</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/fennel-seeds-exporter-india"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <span>View Full Product Datasheet</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UnjhaFennelSeedsPage;
