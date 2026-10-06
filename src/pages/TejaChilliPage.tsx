import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import Seo from "@/components/Seo";
import {
  COMPANY,
  SITE_URL,
  buildProductInquiryMessage,
  buildWhatsAppUrl,
} from "@/data/siteData";
import tejaChilliImage from "@/assets/TejaChilli.jpg";
import pouchRedChilliTeja from "@/assets/pouch-red-chilli-teja.jpg";

const TEJA_SUMMARY_ROWS = [
  { label: "Product & Variety", value: "Teja Chilli / S17 Dry Red Chilli (Capsicum annuum var. acuminatum)" },
  { label: "Trade Classification", value: "Commercial High-Heat Indian Export Chilli" },
  { label: "Primary Origins", value: "Guntur & Prakasam (Andhra Pradesh), Khammam & Warangal (Telangana)" },
  { label: "ITC-HS Codes", value: "0904 21 10 (Whole / Stemless) · 0904 22 11 (Cold-Ground Powder)" },
  { label: "Heat Level (Capsaicin)", value: "50,000 to 85,000+ Scoville Heat Units (SHU, HPLC Tested)" },
  { label: "Color Value (ASTA)", value: "50 to 70 ASTA (Vibrant Deep Red)" },
  { label: "Pod Morphology", value: "6.0 cm to 9.0 cm length, slender cylindrical shape, thick wrinkled pericarp" },
  { label: "Available Formats", value: "Whole with Stem · 100% Stemless (Hand or Machine Destemmed) · Flakes · Powder" },
  { label: "Moisture Content", value: "Maximum 10.0% to 11.0% (standard export stability)" },
  { label: "Foreign Matter (Admixture)", value: "Max 0.5% (Sortex / hand-graded) · Max 1.0% (standard FAQ)" },
  { label: "Aflatoxin Standard", value: "B1 <5 ppb, Total <10 ppb (EU Standard) / <20 ppb (US FDA)" },
  { label: "Container Capacity", value: "20ft FCL: 6.5–7.5 MT (bags) / 11 MT (bales) | 40ft HC: 14–16 MT (bags) / 22–24 MT (bales)" },
];

const TEJA_SPECS = [
  { label: "Botanical Name", value: "Capsicum annuum var. acuminatum", standard: "Taxonomic Classification" },
  { label: "Commercial Trade Name", value: "Teja Chilli / S17 Red Chilli / Guntur Teja", standard: "Spices Board India" },
  { label: "Origin Region", value: "Guntur & Krishna (Andhra Pradesh), Warangal (Telangana)", standard: "Mandi Traceability" },
  { label: "Heat Content (SHU)", value: "50,000 to 85,000+ SHU", standard: "HPLC / ASTA Method 21.3" },
  { label: "Color Value", value: "50 to 70 ASTA Units", standard: "Spectrophotometric / ASTA 20.1" },
  { label: "Pod Length", value: "6.0 cm to 9.0 cm (excluding stem)", standard: "Physical Measurement" },
  { label: "Moisture Limit", value: "Maximum 10.5%", standard: "ASTA 2.0 / ISO 939" },
  { label: "Foreign Matter", value: "Max 0.5% (Sortex) / Max 1.0% (FAQ)", standard: "Manual Sieve / Gravimetric" },
  { label: "Loose Seeds Content", value: "Max 2.0% to 3.0%", standard: "Sieve Separation" },
  { label: "Broken / Discolored Pods", value: "Max 2.0%", standard: "Visual Sorting" },
  { label: "Aflatoxin B1", value: "Less than 5.0 ppb", standard: "HPLC / LC-MS/MS" },
  { label: "Total Aflatoxins", value: "Less than 10.0 ppb (EU) / Less than 20.0 ppb (US)", standard: "HPLC / LC-MS/MS" },
  { label: "Sudan Dyes (I-IV)", value: "Absent / Negative (<10 ppb)", standard: "HPLC-DAD" },
  { label: "Salmonella", value: "Absent in 25 grams", standard: "ISO 6579" },
];

const TEJA_FAQS = [
  {
    question: "What is Teja Chilli and why is it so popular globally?",
    answer:
      "Teja Chilli (often designated S17) is India's most exported commercial high-pungency chilli. Grown predominantly in Guntur (Andhra Pradesh), it is renowned for intense fiery heat (50,000–85,000 SHU), sturdy thick skin that resists in-transit breakage, and vibrant crimson appearance. It is the global workhorse for hot sauce makers, spice processors, and oleoresin extractors.",
  },
  {
    question: "What is the Scoville Heat rating of JM Masala Teja chillies?",
    answer:
      "Our export batches of Teja chillies consistently test between 50,000 and 85,000+ Scoville Heat Units (SHU) via HPLC analysis. Every consignment can be provided with an accredited laboratory Certificate of Analysis.",
  },
  {
    question: "Does JM Masala supply stemless Teja chilli?",
    answer:
      "Yes. We supply both whole with stem and 100% stemless Teja chillies. Our stemless chillies are hand-cut or mechanically destemmed to eliminate stalk tare and allow direct commercial milling.",
  },
  {
    question: "How are Teja chillies packed to maximize container payload?",
    answer:
      "Standard bag packing yields 6.5–7.5 MT in a 20ft container and 14–16 MT in a 40ft HC. To dramatically reduce ocean freight per ton, we offer hydraulic pressed bales that increase container capacity up to 11 MT in 20ft FCL and 22–24 MT in 40ft HC.",
  },
  {
    question: "Are Aflatoxin test reports available for Teja chilli export consignments?",
    answer:
      "Yes. All export lots destined for regulated destinations (EU, USA, UK, Gulf) are screened for Aflatoxin B1, Total Aflatoxins, and Ochratoxin A to guarantee compliance with destination market MRLs.",
  },
];

const TejaChilliPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Teja Chilli (S17 Export Procurement)",
      "1x 40ft HC Container (~14-16 MT loose or 22 MT bales)",
    ),
  );

  const canonicalUrl = `${SITE_URL}/teja-chilli-exporter-india`;
  const productImageUrl = `${SITE_URL}${tejaChilliImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: "Indian Teja Chilli S17 (Whole & Stemless)",
    description:
      "Export-grade Indian Teja Red Chilli (S17) from Guntur, Andhra Pradesh. High pungency 50,000–85,000 SHU, 50–70 ASTA color, whole and stemless, supplied in bulk FCL by JM Masala.",
    image: [productImageUrl],
    sku: "JMM-TEJA-S17",
    mpn: "JMM-teja-s17",
    brand: {
      "@type": "Brand",
      name: COMPANY.name,
      slogan: COMPANY.tagline,
    },
    category: "Food, Beverages & Tobacco > Food Items > Seasonings & Spices > Peppers",
    countryOfOrigin: {
      "@type": "Country",
      name: "India",
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    url: canonicalUrl,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Variety", value: "Teja S17 (Capsicum annuum var. acuminatum)" },
      { "@type": "PropertyValue", name: "Heat Range", value: "50,000 to 85,000+ SHU" },
      { "@type": "PropertyValue", name: "Color Value", value: "50 to 70 ASTA" },
      { "@type": "PropertyValue", name: "Origin", value: "Guntur, Andhra Pradesh, India" },
      { "@type": "PropertyValue", name: "Formats", value: "Whole with stem, 100% stemless, crushed flakes, powder" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: "Red Chilli", item: `${SITE_URL}/red-chilli-exporter-india` },
      { "@type": "ListItem", position: 4, name: "Teja Chilli", item: canonicalUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: TEJA_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Seo
        title="Teja Chilli Exporter from India | S17 Red Chilli | JM Masala"
        description="JM Masala supplies Indian Teja red chilli (S17) for bulk export. High heat 50,000–85,000 SHU, 50–70 ASTA color, whole & stemless. Request lab specs & quote."
        path="/teja-chilli-exporter-india"
        imageUrl={productImageUrl}
        imageAlt="Export-grade Indian Teja red chilli S17 supplied by JM Masala"
        type="product"
        keywords={[
          "teja chilli exporter india",
          "teja chilli supplier",
          "teja dry red chilli",
          "teja chilli wholesale",
          "indian teja chilli",
          "teja chilli bulk supplier",
          "guntur teja chilli exporter",
          "s17 chilli supplier india",
        ]}
        schema={[productSchema, breadcrumbSchema, faqSchema]}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="border-b border-[var(--brand-gold-pale)] bg-white py-3">
        <div className="jm-container">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-[var(--brand-forest)]">
            <li>
              <Link to="/" className="hover:text-[var(--brand-deep-green)]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/products" className="hover:text-[var(--brand-deep-green)]">
                Products
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/red-chilli-exporter-india" className="hover:text-[var(--brand-deep-green)]">
                Red Chilli Exporter from India
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[var(--brand-charcoal)]" aria-current="page">
              Teja Chilli (S17)
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative overflow-hidden bg-[var(--brand-deep-green)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#381010] via-[#1a0808] to-[#0d0404] opacity-95" />
        <div className="jm-container relative py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold-light)]">
                <MapPin className="h-3.5 w-3.5" /> Guntur &amp; Khammam Mandi Sourcing
              </p>
              <h1 className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-white md:text-5xl">
                Teja Chilli Exporter from India
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--brand-gold-light)] md:text-xl">
                Indian Teja Dry Red Chilli (S17) | Bulk Export Supply
              </p>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[rgba(255,255,255,0.9)]">
                <p>
                  JM Masala supplies authentic Indian Teja Chilli (S17) from Andhra Pradesh and Telangana for bulk
                  buyers, spice grinders, oleoresin extractors, and food manufacturers. Sourced directly from Guntur
                  and Warangal mandis, our Teja chillies deliver consistent 50,000 to 85,000+ SHU pungency, rich crimson
                  color, and strict compliance with buyer requirements for moisture, foreign matter, stem/stemless
                  cleaning, and aflatoxin limits.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="jm-btn jm-btn--primary inline-flex items-center gap-2"
                >
                  Request Teja Quote <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/red-chilli-exporter-india"
                  className="jm-btn jm-btn--outline border-white text-white hover:bg-white hover:text-[var(--brand-deep-green)] inline-flex items-center gap-1.5"
                >
                  <ArrowLeft className="h-4 w-4" /> Master Red Chilli Page
                </Link>
                <Link
                  to="/contact?intent=sample"
                  className="jm-btn jm-btn--outline border-[var(--brand-gold-light)] text-[var(--brand-gold-light)] hover:bg-[var(--brand-gold-light)] hover:text-[var(--brand-deep-green)]"
                >
                  Request Sample
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.06)] p-6 backdrop-blur-sm">
              <div className="overflow-hidden rounded-lg bg-black/20">
                <img
                  src={tejaChilliImage}
                  alt="Indian Teja S17 dry red chilli exported by JM Masala"
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  width={500}
                  height={350}
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Heat Level</span>
                  <p className="mt-1 font-semibold text-white">50k – 85k+ SHU</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Color Index</span>
                  <p className="mt-1 font-semibold text-white">50 to 70 ASTA</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Stem Options</span>
                  <p className="mt-1 font-semibold text-white">With Stem / Stemless</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Moisture</span>
                  <p className="mt-1 font-semibold text-white">Max 10.5%</p>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-[rgba(255,255,255,0.65)]">
                Whole stemmed, 100% stemless, crushed flakes and cold-ground powder.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Teja Chilli at a Glance (AI Answer Box) */}
      <section className="border-b border-[var(--brand-gold-pale)] bg-white py-10">
        <div className="jm-container">
          <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                  Verified Technical Data
                </p>
                <h2 className="text-xl font-bold text-[var(--brand-charcoal)] md:text-2xl">
                  Teja Chilli at a Glance
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-semibold text-[var(--brand-deep-green)]">
                <Sparkles className="h-3.5 w-3.5" /> Direct Entity Grounding
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TEJA_SUMMARY_ROWS.map((row) => (
                <div key={row.label} className="rounded-lg border border-stone-200 bg-white p-4">
                  <span className="text-xs font-medium text-stone-500">{row.label}</span>
                  <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Whole vs Stemless Teja */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Processing Options</p>
            <h2 className="jm-section-heading">Whole with Stem vs. 100% Stemless Teja Chilli</h2>
            <p className="mt-3 text-body leading-7 text-[var(--brand-forest)]">
              JM Masala supplies Teja chilli in both standard stemmed and precision stemless formats to match your
              factory processing economics:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-stone-200 bg-[var(--brand-cream)] p-6">
              <span className="rounded bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-bold text-[var(--brand-deep-green)]">
                Standard Bulk Format
              </span>
              <h3 className="mt-4 text-xl font-bold text-[var(--brand-charcoal)]">Teja Whole with Stem</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                Pods are left intact with their natural green/brown stalk. Ideal for bulk trading, long-term warehouse
                storage, and buyers who possess their own internal destemming and cleaning lines.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-[var(--brand-charcoal)]">
                <li>• Lower initial procurement cost per metric ton</li>
                <li>• Stems protect inner seeds during manual transit handling</li>
                <li>• Standard packing in 10kg, 20kg, and 25kg PP bags or pressed bales</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[var(--brand-deep-green)] bg-white p-6 shadow-sm">
              <span className="rounded bg-[var(--brand-deep-green)] px-3 py-1 text-xs font-bold text-white">
                Processor Preferred
              </span>
              <h3 className="mt-4 text-xl font-bold text-[var(--brand-charcoal)]">100% Stemless Teja</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">
                Stems are clipped clean by hand or precision rotary cutters. Eliminates approximately 5% to 7% non-flavor
                woody tare weight, allowing immediate feed into industrial hammer mills and extractors.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-[var(--brand-charcoal)]">
                <li>• Zero stem bitterness in cold-pressed oleoresin and spice rubs</li>
                <li>• Higher capsaicin concentration per volume</li>
                <li>• Recommended packing in 10kg or 20kg corrugated carton boxes to prevent pod crushing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Retail & Private Label Pouch Packaging */}
      <section className="jm-section jm-section--white border-t border-[var(--brand-gold-pale)]">
        <div className="jm-container">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-[rgba(201,168,76,0.35)] bg-[#faf6ee] p-4 shadow-lg transition-transform hover:scale-[1.01]">
                <img
                  src={pouchRedChilliTeja}
                  alt="JM Masala Red Chilli Teja Whole 500g Stand-up Pouch Packaging (Front and Back)"
                  className="w-full rounded-xl object-contain shadow-sm"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="jm-section-label">Private Label & Retail Formats</p>
              <h2 className="jm-section-heading">
                Retail-Ready Teja Chilli Packaging Solutions
              </h2>
              <p className="mt-4 text-body leading-relaxed text-[var(--brand-forest)]">
                In addition to containerized bulk burlap bales and corrugated export cartons, JM Masala provides complete private-label retail packaging for supermarket chains and gourmet spice brands worldwide.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--brand-charcoal)]">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[var(--brand-gold)]">✓</span>
                  <span><strong>500g &amp; 1kg Stand-Up Zipper Pouches:</strong> Multi-layer moisture barrier with transparent window displaying authentic pod grade.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[var(--brand-gold)]">✓</span>
                  <span><strong>Full Regulatory Compliance:</strong> Customized printing with your brand logo, nutritional facts, FSSAI / FDA export barcodes, and language translations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[var(--brand-gold)]">✓</span>
                  <span><strong>Nitrogen Flushing Option:</strong> Locks in fiery red carotenoid color retention and prevents transit pest infestation.</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/private-label-spices"
                  className="jm-btn jm-btn--primary inline-flex items-center gap-2"
                >
                  Explore Private Label Services <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact?intent=private-label"
                  className="jm-btn jm-btn--outline inline-flex items-center gap-2"
                >
                  Request Packaging Sample
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Laboratory Data</p>
            <h2 className="jm-section-heading">Teja Chilli (S17) Export Specifications</h2>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--brand-gold-pale)] bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--brand-gold-pale)] bg-stone-50 text-xs font-semibold uppercase tracking-wider text-[var(--brand-charcoal)]">
                    <th className="px-6 py-3.5">Parameter</th>
                    <th className="px-6 py-3.5">Export Standard</th>
                    <th className="px-6 py-3.5">Analytical Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--brand-gold-pale)]">
                  {TEJA_SPECS.map((s) => (
                    <tr key={s.label} className="hover:bg-[var(--brand-cream)]/40">
                      <td className="px-6 py-3.5 font-semibold text-[var(--brand-charcoal)]">{s.label}</td>
                      <td className="px-6 py-3.5 text-[var(--brand-forest)]">{s.value}</td>
                      <td className="px-6 py-3.5 text-xs text-stone-500">{s.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Buyer Guidance</p>
            <h2 className="jm-section-heading">Teja Chilli FAQs</h2>
          </div>

          <div className="mt-8 divide-y divide-[var(--brand-gold-pale)] rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/40 p-6">
            {TEJA_FAQS.map((faq) => (
              <article key={faq.question} className="py-4 first:pt-0 last:pb-0">
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">{faq.question}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Link back to Master Red Chilli page & CTA */}
      <section className="bg-[var(--brand-deep-green)] py-12 text-white text-center">
        <div className="jm-container">
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl">
            Procure Export-Grade Teja Chilli S17 in Bulk
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs md:text-sm text-[rgba(255,255,255,0.85)]">
            High heat, bold red color, and clean aflatoxin compliance directly from Guntur mandis.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={quoteUrl} target="_blank" rel="noreferrer" className="jm-btn jm-btn--primary">
              WhatsApp Export Desk (+91 91067 66041)
            </a>
            <Link to="/red-chilli-exporter-india" className="jm-btn jm-btn--outline border-white text-white">
              Back to Master Red Chilli Overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TejaChilliPage;
