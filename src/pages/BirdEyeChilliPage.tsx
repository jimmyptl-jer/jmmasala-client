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
import birdEyeChilliImage from "@/assets/BirdEyeChilli.jpg";

const BIRD_EYE_SUMMARY_ROWS = [
  { label: "Product & Variety", value: "Bird's Eye Chilli / Kanthari Chilli (Capsicum frutescens)" },
  { label: "Trade Classification", value: "High-Heat Heirloom Indian Export Chilli" },
  { label: "Primary Origins", value: "Kerala & Southern Hill Tracts, Meghalaya & Mizoram (Northeast India)" },
  { label: "ITC-HS Codes", value: "0904 21 10 (Whole Dried) · 0904 22 11 (Fine Powder)" },
  { label: "Heat Level (Capsaicin)", value: "100,000 to 225,000+ Scoville Heat Units (SHU, HPLC Tested)" },
  { label: "Color Value (ASTA)", value: "60 to 90 ASTA (Fiery Bright Red to Deep Crimson)" },
  { label: "Pod Morphology", value: "1.5 cm to 3.0 cm small conical upright pods, smooth to finely wrinkled skin" },
  { label: "Available Formats", value: "Whole Sun-Dried · Coarse Crushed Flakes · Fine Pure Powder" },
  { label: "Moisture Content", value: "Maximum 10.0% to 11.0% (standard export stability)" },
  { label: "Aflatoxin Standard", value: "B1 <5 ppb, Total <10 ppb (EU Compliant) / <20 ppb (US FDA)" },
  { label: "Packing Formats", value: "10kg / 20kg Corrugated 5-Ply Cartons or 25kg PP Bags with Poly Liner" },
];

const BIRD_EYE_SPECS = [
  { label: "Botanical Name", value: "Capsicum frutescens", standard: "Taxonomic Classification" },
  { label: "Commercial Name", value: "Bird's Eye Chilli / Kanthari Mulaku / Dhani Chilli", standard: "Regional Spice Identity" },
  { label: "Origin Region", value: "Kerala / Southern Western Ghats & Northeast India", standard: "Certificate of Origin" },
  { label: "Heat Rating (SHU)", value: "100,000 to 225,000+ SHU", standard: "HPLC / ASTA 21.3" },
  { label: "Color Value", value: "60 to 90 ASTA Units", standard: "ASTA Method 20.1" },
  { label: "Pod Length", value: "1.5 cm to 3.0 cm", standard: "Physical Measurement" },
  { label: "Moisture Content", value: "Maximum 10.5%", standard: "ASTA 2.0 / ISO 939" },
  { label: "Foreign Matter", value: "Max 0.5% (Sortex) / Max 1.0% (FAQ)", standard: "Manual Sieve" },
  { label: "Broken / Discolored Pods", value: "Max 2.0%", standard: "Visual Sorting" },
  { label: "Aflatoxin B1", value: "Less than 5.0 ppb", standard: "HPLC / LC-MS/MS" },
  { label: "Total Aflatoxins", value: "Less than 10.0 ppb (EU) / Less than 20.0 ppb (US)", standard: "HPLC / LC-MS/MS" },
  { label: "Sudan Dyes (I-IV)", value: "Negative / Absent", standard: "HPLC-DAD" },
  { label: "Salmonella", value: "Absent in 25 grams", standard: "ISO 6579" },
];

const BIRD_EYE_FAQS = [
  {
    question: "What is Indian Bird's Eye Chilli (Kanthari)?",
    answer:
      "Bird's Eye Chilli (Capsicum frutescens), locally called Kanthari in Kerala and South India, is a small, upright conical chilli famous for intense, rapid-onset thermal heat (100,000–225,000 SHU). It is prized in Southeast Asian cooking, gourmet hot sauces, traditional pickles, and medicinal capsaicin extracts.",
  },
  {
    question: "How hot is Bird's Eye Chilli compared to regular red chillies?",
    answer:
      "Bird's Eye Chilli is significantly hotter than commercial chillies. While standard commercial chillies (like S4 Sanam or Byadgi) range from 15,000 to 35,000 SHU and Teja S17 delivers 50,000 to 85,000 SHU, authentic Bird's Eye packs 100,000 to 225,000+ SHU—providing intense heat in small volumes.",
  },
  {
    question: "Where does JM Masala source Bird's Eye chilli?",
    answer:
      "We source genuine Bird's Eye chillies from contracted grower communities in Kerala (Western Ghats region) as well as the pristine organic hill tracts of Northeast India (Meghalaya and Mizoram).",
  },
  {
    question: "What packaging is recommended for bulk export?",
    answer:
      "Because Bird's Eye pods are small and delicate, we recommend 10 kg or 20 kg heavy-duty corrugated export cartons with food-grade inner poly liners to prevent pod breakage and retain pristine appearance.",
  },
];

const BirdEyeChilliPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildProductInquiryMessage(
      "Bird's Eye Chilli / Kanthari (Bulk Export Procurement)",
      "1x 20ft FCL or LCL Commercial Consignment",
    ),
  );

  const canonicalUrl = `${SITE_URL}/bird-eye-chilli-exporter-india`;
  const productImageUrl = `${SITE_URL}${birdEyeChilliImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: "Indian Bird's Eye Chilli (Kanthari)",
    description:
      "Export-grade Indian Bird's Eye Chilli (Capsicum frutescens) supplied by JM Masala. Intense heat 100,000–225,000 SHU, small conical dried pods, tested for aflatoxin and Sudan dye compliance.",
    image: [productImageUrl],
    sku: "JMM-BIRD-EYE-CHILLI",
    mpn: "JMM-bird-eye-chilli",
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
      { "@type": "PropertyValue", name: "Variety", value: "Bird's Eye Chilli / Kanthari (Capsicum frutescens)" },
      { "@type": "PropertyValue", name: "Heat Range", value: "100,000 to 225,000+ SHU" },
      { "@type": "PropertyValue", name: "Color Value", value: "60 to 90 ASTA" },
      { "@type": "PropertyValue", name: "Pod Size", value: "1.5 to 3.0 cm" },
      { "@type": "PropertyValue", name: "Origin", value: "Kerala & Northeast India" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: "Red Chilli", item: `${SITE_URL}/red-chilli-exporter-india` },
      { "@type": "ListItem", position: 4, name: "Bird's Eye Chilli", item: canonicalUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BIRD_EYE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Seo
        title="Bird's Eye Chilli Exporter from India | Kanthari Chilli | JM Masala"
        description="JM Masala supplies authentic Indian Bird's Eye chilli (Kanthari) for bulk international buyers. Intense heat 100,000–225,000 SHU, small conical dried pods."
        path="/bird-eye-chilli-exporter-india"
        imageUrl={productImageUrl}
        imageAlt="Export-grade Indian Bird's Eye chilli Kanthari supplied by JM Masala"
        type="product"
        keywords={[
          "bird eye chilli exporter india",
          "bird's eye chilli supplier",
          "kanthari chilli export",
          "indian bird eye chilli",
          "capsicum frutescens supplier",
          "small hot chilli india",
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
              Bird's Eye Chilli (Kanthari)
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
                <MapPin className="h-3.5 w-3.5" /> Kerala &amp; Northeast Hill Sourcing
              </p>
              <h1 className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-white md:text-5xl">
                Bird's Eye Chilli Exporter from India
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--brand-gold-light)] md:text-xl">
                Indian Bird's Eye Chilli (Kanthari) | High-Heat Export Supply
              </p>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[rgba(255,255,255,0.9)]">
                <p>
                  JM Masala supplies authentic Indian Bird's Eye Chilli (Kanthari) from Kerala and Southern hill tracts
                  for international bulk buyers, hot sauce producers, and oleoresin extractors. Known for its small
                  conical pods and sharp, rapid-onset thermal heat ranging between 100,000 and 225,000+ Scoville Heat
                  Units (SHU), our Bird's Eye chillies are carefully sun-cured, graded, and supplied with full laboratory
                  documentation and export clearance.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="jm-btn jm-btn--primary inline-flex items-center gap-2"
                >
                  Request Bird's Eye Quote <ArrowRight className="h-4 w-4" />
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
                  src={birdEyeChilliImage}
                  alt="Indian Bird's Eye Kanthari chilli exported by JM Masala"
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  width={500}
                  height={350}
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Heat Level</span>
                  <p className="mt-1 font-semibold text-white">100k – 225k+ SHU</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Pod Size</span>
                  <p className="mt-1 font-semibold text-white">1.5 cm – 3.0 cm</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Species</span>
                  <p className="mt-1 font-semibold text-white">Capsicum frutescens</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-3">
                  <span className="text-[var(--brand-gold-light)]">Aflatoxin Standard</span>
                  <p className="mt-1 font-semibold text-white">EU / US FDA Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Bird's Eye Chilli at a Glance (AI Answer Box) */}
      <section className="border-b border-[var(--brand-gold-pale)] bg-white py-10">
        <div className="jm-container">
          <div className="rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                  Verified Technical Data
                </p>
                <h2 className="text-xl font-bold text-[var(--brand-charcoal)] md:text-2xl">
                  Bird's Eye Chilli at a Glance
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-semibold text-[var(--brand-deep-green)]">
                <Sparkles className="h-3.5 w-3.5" /> Direct Entity Grounding
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BIRD_EYE_SUMMARY_ROWS.map((row) => (
                <div key={row.label} className="rounded-lg border border-stone-200 bg-white p-4">
                  <span className="text-xs font-medium text-stone-500">{row.label}</span>
                  <p className="mt-1 text-sm font-bold text-[var(--brand-charcoal)]">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Botanical Profile & Applications */}
      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="max-w-3xl">
            <p className="jm-section-label">Botanical Profile</p>
            <h2 className="jm-section-heading">Capsicum frutescens: The Power of Kanthari</h2>
            <div className="mt-4 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
              <p>
                Unlike commercial chillies belonging to <em>Capsicum annuum</em>, Bird's Eye chilli belongs to{" "}
                <em>Capsicum frutescens</em>. The plants grow as perennial woody shrubs bearing clusters of small,
                erect pods pointing upward toward the sky.
              </p>
              <p>
                Its high heat-to-volume ratio makes it exceptionally economical for industrial condiment manufacturers,
                Southeast Asian sambal and curry paste processors, and pharmaceutical capsaicin extraction where maximum
                thermal heat is desired without excessive bulk vegetable matter.
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
            <h2 className="jm-section-heading">Bird's Eye Chilli Export Specifications</h2>
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
                  {BIRD_EYE_SPECS.map((s) => (
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
            <h2 className="jm-section-heading">Bird's Eye Chilli FAQs</h2>
          </div>

          <div className="mt-8 divide-y divide-[var(--brand-gold-pale)] rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]/40 p-6">
            {BIRD_EYE_FAQS.map((faq) => (
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
            Procure Indian Bird's Eye Chilli (Kanthari)
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs md:text-sm text-[rgba(255,255,255,0.85)]">
            Small pods, severe 100k–225k SHU heat, and verified export food safety.
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

export default BirdEyeChilliPage;
