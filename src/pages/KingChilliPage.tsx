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
import redChilliImage from "@/assets/RedChilli.png";

const KING_CHILLI_SUMMARY_ROWS = [
  { label: "Product & Variety", value: "King Chilli / Bhut Jolokia / Ghost Pepper (Capsicum chinense)" },
  { label: "Trade Classification", value: "World Record Super-Hot Indian Origin Chilli" },
  { label: "Primary Origins", value: "Assam, Nagaland & Manipur (Northeast India - GI Tag Origin)" },
  { label: "ITC-HS Codes", value: "0904 21 10 (Whole Dried Pods) · 0904 22 11 (Pure Powder)" },
  { label: "Heat Level (Capsaicin)", value: "800,000 to 1,041,000+ Scoville Heat Units (SHU, HPLC Tested)" },
  { label: "Color Value (ASTA)", value: "50 to 80 ASTA (Fiery Orange-Red to Wrinkled Dark Crimson)" },
  { label: "Pod Morphology", value: "5.0 cm to 8.5 cm elongated pods with distinctive bumpy, dented skin and tapered tip" },
  { label: "Flavor & Aroma Profile", value: "Intense sub-tropical sweet fruity aroma followed by slow-building, prolonged inferno heat" },
  { label: "Available Formats", value: "Whole Solar-Dried Pods · Coarse Flakes · Micro-Milled Super-Hot Powder" },
  { label: "Moisture Content", value: "Maximum 10.0% to 11.0% (controlled temperature dehydration / solar cured)" },
  { label: "Aflatoxin Standard", value: "B1 <5 ppb, Total <10 ppb (EU Standard) / <20 ppb (US FDA)" },
  { label: "Packaging Formats", value: "5kg / 10kg Corrugated 5-Ply Cartons with Nitrogen Flushing or Food-Grade Poly Liner" },
];

const KING_CHILLI_SPECS = [
  { label: "Botanical Name", value: "Capsicum chinense (syn. Capsicum frutescens hybrid)", standard: "Taxonomic Classification" },
  { label: "Common Regional Names", value: "Bhut Jolokia, Naga Morich, Raja Mircha, Ghost Pepper", standard: "Geographical Indication (GI)" },
  { label: "Origin Region", value: "Assam & Nagaland, Northeast India", standard: "Certificate of Origin" },
  { label: "Heat Rating (SHU)", value: "800,000 to 1,041,000+ Scoville Heat Units", standard: "HPLC / ASTA 21.3" },
  { label: "Color Value", value: "50 to 80 ASTA Units", standard: "ASTA Method 20.1" },
  { label: "Pod Length", value: "5.0 cm to 8.5 cm", standard: "Physical Measurement" },
  { label: "Moisture Content", value: "Maximum 10.5%", standard: "ASTA 2.0 / ISO 939" },
  { label: "Foreign Matter", value: "Max 0.5%", standard: "Manual Inspection" },
  { label: "Broken Pods", value: "Max 3.0% (Carefully packed to avoid crushing)", standard: "Visual Sorting" },
  { label: "Aflatoxin B1", value: "Less than 5.0 ppb", standard: "HPLC / LC-MS/MS" },
  { label: "Total Aflatoxins", value: "Less than 10.0 ppb (EU) / Less than 20.0 ppb (US)", standard: "HPLC / LC-MS/MS" },
  { label: "Sudan Dyes (I-IV)", value: "Negative / Absent", standard: "HPLC-DAD" },
  { label: "Salmonella", value: "Absent in 25 grams", standard: "ISO 6579" },
];

const KING_CHILLI_FAQS = [
  {
    question: "What is King Chilli (Bhut Jolokia / Ghost Pepper)?",
    answer:
      "King Chilli (Capsicum chinense), famously known as Bhut Jolokia or Ghost Pepper, is an indigenous super-hot chilli native to Northeast India (Assam, Nagaland, Manipur). In 2007, it was certified by Guinness World Records as the world's hottest chilli pepper, testing over 1,000,000 Scoville Heat Units.",
  },
  {
    question: "What does King Chilli taste like?",
    answer:
      "Unlike many harsh commercial chillies, King Chilli has a uniquely sweet, sub-tropical fruity aroma upon first contact. However, its immense capsaicin concentration causes an intense, slow-building burn that lingers for 20 to 30 minutes, making it prized for gourmet extreme hot sauces.",
  },
  {
    question: "How is King Chilli dried and preserved for export?",
    answer:
      "Due to high humidity in Northeast India, traditional open-air drying can cause mold. JM Masala works with contracted drying facilities utilizing solar greenhouse drying tunnels and controlled low-temperature hot air dehydrators (<50°C) to lock in natural pod color, aroma, and prevent mycotoxin formation.",
  },
  {
    question: "What packaging is used to ship whole King Chillies internationally?",
    answer:
      "Whole King Chillies have fragile wrinkled pods. We pack them in 5 kg or 10 kg heavy-duty 5-ply corrugated cartons with internal moisture-barrier liners (or vacuum pouches upon request) to prevent transit crushing.",
  },
];

const KingChilliPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "King Chilli / Bhut Jolokia (Bulk Export Procurement)",
      "Commercial Lot (100 kg to Full Container Load)",
    ),
  );

  const canonicalUrl = `${SITE_URL}/king-chilli-exporter-india`;
  const productImageUrl = `${SITE_URL}${redChilliImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: "Indian King Chilli (Bhut Jolokia / Ghost Pepper)",
    description:
      "Export-grade Indian King Chilli (Capsicum chinense) supplied by JM Masala. Super-hot 800,000–1,041,000+ SHU, solar-dried whole pods and flakes with full laboratory test reports.",
    image: [productImageUrl],
    sku: "JMM-KING-CHILLI",
    mpn: "JMM-king-chilli",
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
      { "@type": "PropertyValue", name: "Variety", value: "King Chilli / Bhut Jolokia (Capsicum chinense)" },
      { "@type": "PropertyValue", name: "Heat Range", value: "800,000 to 1,041,000+ Scoville Heat Units (SHU)" },
      { "@type": "PropertyValue", name: "Origin", value: "Assam & Nagaland, Northeast India" },
      { "@type": "PropertyValue", name: "Specialty", value: "GI Tag Certified Indigenous Super-Hot Chilli" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: "Red Chilli", item: `${SITE_URL}/red-chilli-exporter-india` },
      { "@type": "ListItem", position: 4, name: "King Chilli", item: canonicalUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: KING_CHILLI_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Seo
        title="King Chilli Exporter from India | Bhut Jolokia Ghost Pepper | JM Masala"
        description="JM Masala supplies genuine Indian King Chilli (Bhut Jolokia / Naga Chilli) for bulk export. Super-hot 800,000–1,041,000+ SHU, solar dried whole pods & flakes."
        path="/king-chilli-exporter-india"
        imageUrl={productImageUrl}
        imageAlt="Export-grade Indian King chilli Bhut Jolokia supplied by JM Masala"
        type="product"
        keywords={[
          "king chilli exporter india",
          "bhut jolokia supplier india",
          "ghost pepper bulk export",
          "naga chilli exporter",
          "indian king chilli wholesale",
          "super hot chilli supplier",
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
              King Chilli (Bhut Jolokia)
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
                <MapPin className="h-3.5 w-3.5" /> Assam &amp; Nagaland GI Sourcing
              </p>
              <h1 className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-white md:text-5xl">
                King Chilli Exporter from India
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--brand-gold-light)] md:text-xl">
                Indian King Chilli (Bhut Jolokia / Naga Chilli) | Super-Hot Export Supply
              </p>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[rgba(255,255,255,0.9)]">
                <p>
                  JM Masala supplies authentic Indian King Chilli (Bhut Jolokia / Naga Chilli) from Assam, Nagaland,
                  and Northeast India for bulk international buyers, specialty extreme hot sauce manufacturers, and
                  capsaicin extractors. Globally celebrated for its staggering 800,000 to 1,041,000+ Scoville Heat Units
                  (SHU) and distinctive sub-tropical fruity aroma, our King Chillies are carefully solar-cured to
                  preserve pod morphology, tested for chemical purity, and packed for global export.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="jm-btn jm-btn--primary inline-flex items-center gap-2"
                >
                  Request King Chilli Quote <ArrowRight className="h-4 w-4" />
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
                  src={redChilliImage}
                  alt="Indian King Chilli Bhut Jolokia exported by JM Masala"
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  width={500}
                  height={350}
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Heat Level</span>
                  <p className="mt-1 font-semibold text-white">800k – 1,041,000+ SHU</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Pod Size</span>
                  <p className="mt-1 font-semibold text-white">5.0 cm – 8.5 cm</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Species</span>
                  <p className="mt-1 font-semibold text-white">Capsicum chinense</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Status</span>
                  <p className="mt-1 font-semibold text-white">GI Protected Origin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* King Chilli at a Glance (AI Answer Box) */}
      <section className="border-b border-[var(--brand-gold-pale)] bg-white py-10">
        <div className="jm-container">
          <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                  Verified Technical Data
                </p>
                <h2 className="text-xl font-bold text-[var(--brand-charcoal)] md:text-2xl">
                  King Chilli at a Glance
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-semibold text-[var(--brand-deep-green)]">
                <Sparkles className="h-3.5 w-3.5" /> Direct Entity Grounding
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {KING_CHILLI_SUMMARY_ROWS.map((row) => (
                <div key={row.label} className="rounded-lg border border-stone-200 bg-white p-4">
                  <span className="text-xs font-medium text-stone-500">{row.label}</span>
                  <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geographical Origin & Super-Hot Profile */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Geographic Heritage</p>
            <h2 className="jm-section-heading">Northeast India's Indigenous Super-Hot Wonder</h2>
            <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
              <p>
                King Chilli (known locally as <em>Bhut Jolokia</em> in Assam or <em>Raja Mircha</em> in Nagaland) is
                one of the world's most scientifically interesting cultivars. It represents a naturally evolved
                interspecific hybrid of <em>Capsicum chinense</em> with <em>Capsicum frutescens</em> genes.
              </p>
              <p>
                The pods possess an unmistakable rough, dented surface texture with deep red coloration upon drying.
                Industrial food processors utilize King Chilli to achieve intense fiery heat with microscopic dosing
                ratios, drastically lowering shipping freight and formulation costs per batch of hot sauce or spicy snack rub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Laboratory Data</p>
            <h2 className="jm-section-heading">King Chilli Export Specifications</h2>
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
                  {KING_CHILLI_SPECS.map((s) => (
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
            <h2 className="jm-section-heading">King Chilli FAQs</h2>
          </div>

          <div className="mt-8 divide-y divide-[var(--brand-gold-pale)] rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/40 p-6">
            {KING_CHILLI_FAQS.map((faq) => (
              <article key={faq.question} className="py-4 first:pt-0 last:pb-0">
                <h3 className="text-base font-bold text-[var(--brand-charcoal)]">{faq.question}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--brand-forest)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Link back & CTA */}
      <section className="bg-[var(--brand-deep-green)] py-12 text-white text-center">
        <div className="jm-container">
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl">
            Procure Genuine King Chilli (Bhut Jolokia)
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs md:text-sm text-[rgba(255,255,255,0.85)]">
            World-record 800k–1,041k+ SHU heat with guaranteed geographical origin authenticity.
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

export default KingChilliPage;
