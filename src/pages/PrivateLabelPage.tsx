import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Seo from "@/components/Seo";
import {
  PRODUCTS,
  buildWhatsAppUrl,
  buildGeneralInquiryMessage,
} from "@/data/siteData";

/* ─── DATA ─── */

const SUPPLY_MODELS = [
  {
    icon: "📦",
    title: "Bulk Commodity Supply",
    desc: "Container-load export supply for importers and commodity buyers seeking Indian-origin spices in standard export packaging.",
    buyers: "Commodity importers, trading companies, food processors",
  },
  {
    icon: "⚙️",
    title: "Processed & Cleaned Supply",
    desc: "Machine-cleaned and Sortex-cleaned spices processed to buyer-specific purity, moisture, and admixture specifications.",
    buyers: "Spice manufacturers, food companies, ingredient suppliers",
  },
  {
    icon: "🏷️",
    title: "Private Label Manufacturing",
    desc: "Complete private-label supply from product selection through custom-branded packaging with your logo, artwork, and regulatory text.",
    buyers: "Spice brands, supermarket chains, e-commerce brands",
  },
  {
    icon: "🛒",
    title: "Retail-Ready Supply",
    desc: "Shelf-ready consumer packs in pouches, jars, or cartons formatted for direct retail placement and distribution.",
    buyers: "Distributors, retailers, food-service suppliers",
  },
];

const PL_STEPS = [
  {
    num: "01",
    title: "Product Selection",
    desc: "Select cumin seeds, coriander, fennel, turmeric powder, or other products from our spice and agro portfolio.",
  },
  {
    num: "02",
    title: "Specification Agreement",
    desc: "Define target purity, moisture, admixture, cleaning level, and any microbiological or pesticide requirements.",
  },
  {
    num: "03",
    title: "Packaging Format",
    desc: "Choose pack sizes (100g to 50kg), materials (PP, foil, paper, jute, vacuum), and retail or bulk configuration.",
  },
  {
    num: "04",
    title: "Branding & Artwork",
    desc: "Provide your brand logo, packaging design, nutritional tables, barcode data, and multi-language regulatory text.",
  },
  {
    num: "05",
    title: "Compliance Review",
    desc: "Label content and product specifications are reviewed against destination-market regulations before production.",
  },
  {
    num: "06",
    title: "Processing & Packing",
    desc: "Product is cleaned, Sortex sorted, graded, and packed under hygienic HACCP-compatible conditions with batch coding.",
  },
  {
    num: "07",
    title: "Export & Shipment",
    desc: "Container loading, export documentation (COA, Phytosanitary, BL, COO), and shipment coordination to destination port.",
  },
];

const PL_PRODUCTS = PRODUCTS.filter((p) =>
  [
    "cumin-seeds-exporter-india",
    "coriander-seeds-exporter-india",
    "fennel-seeds-exporter-india",
    "fenugreek-seeds-exporter-india",
    "ajwain-seeds-exporter-india",
    "mustard-seeds-exporter-india",
    "turmeric-exporter-india",
    "red-chilli-exporter-india",
    "dry-ginger-exporter-india",
    "psyllium-husk-exporter-india",
    "cumin-powder-exporter-india",
    "coriander-powder-exporter-india",
    "turmeric-powder-exporter-india",
    "red-chilli-powder-exporter-india",
  ].includes(p.slug),
);

const PACKAGING_FORMATS = [
  {
    title: "Retail Pouches",
    sizes: "50g · 100g · 200g · 500g · 1kg",
    desc: "Pillow pouches and stand-up zipper pouches with custom printing for supermarket and grocery retail.",
  },
  {
    title: "Institutional Packs",
    sizes: "1kg · 2kg · 5kg",
    desc: "Larger consumer or food-service packs for restaurants, caterers, and institutional kitchens.",
  },
  {
    title: "Bulk Export Bags",
    sizes: "25kg · 50kg",
    desc: "Standard PP woven bags, jute bags, or multi-wall paper bags with food-grade inner liners.",
  },
  {
    title: "Vacuum & Specialty",
    sizes: "Custom weights",
    desc: "Vacuum-sealed foil bags or specialty packaging for extended shelf life and volatile oil preservation.",
  },
];

const BUYER_SEGMENTS = [
  { emoji: "🏪", label: "Supermarket & Grocery Chains" },
  { emoji: "🌿", label: "Independent Spice Brands" },
  { emoji: "🛒", label: "E-Commerce & Online Grocery" },
  { emoji: "🍽️", label: "Food-Service & Restaurant Suppliers" },
  { emoji: "📦", label: "Wholesale Distributors" },
  { emoji: "🏭", label: "Food Manufacturing Companies" },
  { emoji: "🌍", label: "International Trading Companies" },
  { emoji: "🔬", label: "Ingredient & Nutraceutical Brands" },
];

const PL_FAQS = [
  {
    q: "Does JM Masala offer private-label spice manufacturing?",
    a: "Yes. JM Masala Trading LLP provides integrated private-label spice supply covering product selection, custom processing specifications, packaging design, and branded labelling for international buyers.",
  },
  {
    q: "Can I sell Indian spices under my own brand name?",
    a: "Yes. We work with importers, distributors, and supermarket chains to supply spices packed and labelled directly under the buyer's brand identity, subject to agreed specifications and commercial terms.",
  },
  {
    q: "What products are available for private labelling?",
    a: "Our private-label capability covers our core spice portfolio including cumin, coriander, fennel, fenugreek, ajwain, mustard, turmeric, red chilli, dry ginger, psyllium, and selected spice powders.",
  },
  {
    q: "Can JM Masala supply retail-ready spice products?",
    a: "Yes. Retail-ready formats including consumer pouches, stand-up bags, and master cartons can be discussed based on product, pack size, destination, and customer requirements.",
  },
  {
    q: "Can you print our custom brand artwork and barcode on packaging?",
    a: "Yes. Buyer-supplied artwork, nutritional information, multi-language regulatory text, and retail barcodes can be incorporated onto packaging as part of a private-label project.",
  },
  {
    q: "What is the minimum order quantity for private-label orders?",
    a: "Private-label MOQs depend on the product, pack format, and printing requirements. Requirements can be discussed individually to establish commercially feasible quantities.",
  },
  {
    q: "Does JM Masala handle destination-market labelling compliance?",
    a: "Labelling requirements are reviewed in collaboration with the buyer before production. Final regulatory compliance responsibility rests with the importer or brand owner for their specific market.",
  },
  {
    q: "How do I start a private-label project with JM Masala?",
    a: "Send your product requirements, target pack sizes, destination market, and branding details to our team. We will evaluate the requirement and provide a commercial proposal.",
  },
];

/* ─── STYLES ─── */

const styles = `
  .pl-root { font-family: var(--font-body); color: var(--brand-charcoal); }

  /* Hero */
  .pl-hero {
    background: linear-gradient(135deg, #10170f 0%, var(--brand-deep-green) 52%, var(--wood-dark) 100%);
    position: relative; overflow: hidden; padding: 96px 24px 80px;
  }
  .pl-hero::before {
    content: ''; position: absolute; inset: 0;
    background-image: radial-gradient(circle at 20% 50%, rgba(200,150,12,0.12) 0%, transparent 60%),
                      radial-gradient(circle at 80% 20%, rgba(200,150,12,0.08) 0%, transparent 50%);
  }
  .pl-hero-inner { position: relative; max-width: 1200px; margin: 0 auto; }
  .pl-hero-label {
    font-size: 11px; font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
    color: var(--brand-gold); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;
  }
  .pl-hero-label::before, .pl-hero-label::after {
    content: ''; flex: 1; max-width: 48px; height: 1px; background: var(--brand-gold); opacity: 0.6;
  }
  .pl-hero h1 {
    font-family: var(--font-display); font-size: clamp(36px, 5vw, 56px);
    font-weight: 700; color: #fff; line-height: 1.15; margin-bottom: 20px; max-width: 780px;
  }
  .pl-hero h1 em { font-style: italic; color: var(--brand-gold); }
  .pl-hero-sub {
    font-size: 17px; color: rgba(255,255,255,0.78); max-width: 620px;
    line-height: 1.75; margin-bottom: 36px;
  }
  .pl-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
  @media (max-width: 640px) {
    .pl-hero { padding: 80px 16px 56px; }
    .pl-hero-actions { flex-direction: column; }
    .pl-hero-actions a { width: 100%; justify-content: center; }
  }

  /* Shared */
  .pl-section { max-width: 1200px; margin: 0 auto; padding: 80px 24px; }
  @media (max-width: 640px) { .pl-section { padding: 48px 16px; } }
  .pl-bg-cream { background: var(--brand-cream); }
  .pl-bg-white { background: var(--brand-warm-white); }
  .pl-bg-beige { background: var(--brand-gold-pale); }
  .pl-bg-dark {
    background: linear-gradient(135deg, #10170f 0%, var(--brand-deep-green) 55%, var(--wood-dark) 100%);
  }
  .pl-label {
    font-size: 11px; font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
    color: var(--brand-gold); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;
  }
  .pl-label::before { content: ''; width: 32px; height: 1px; background: var(--brand-gold); }
  .pl-heading {
    font-family: var(--font-display); font-size: clamp(28px, 4vw, 42px);
    font-weight: 700; color: var(--brand-charcoal); line-height: 1.2; margin-bottom: 16px;
  }
  .pl-heading--white { color: #fff; }
  .pl-sub { font-size: 16px; color: var(--brand-forest); line-height: 1.75; max-width: 640px; margin-bottom: 40px; }
  .pl-sub--white { color: rgba(255,255,255,0.72); }
  .pl-divider { height: 1px; background: linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent); }

  /* Buttons */
  .pl-btn-primary {
    background: linear-gradient(135deg, var(--brand-gold), var(--brand-gold-light));
    color: var(--brand-deep-green); padding: 14px 28px; border-radius: 8px;
    font-weight: 600; font-size: 15px; text-decoration: none;
    display: inline-flex; align-items: center; gap: 8px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(201,168,76,0.32);
  }
  .pl-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(201,168,76,0.42); }
  .pl-btn-outline {
    border: 2px solid rgba(255,255,255,0.5); color: #fff;
    padding: 14px 28px; border-radius: 8px;
    font-weight: 600; font-size: 15px; text-decoration: none;
    display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s;
  }
  .pl-btn-outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; }

  /* Supply Models Grid */
  .pl-models { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
  @media (max-width: 768px) { .pl-models { grid-template-columns: 1fr; } }
  .pl-model-card {
    background: #fff; border: 1px solid var(--brand-gold-pale); border-radius: 16px;
    padding: 28px; box-shadow: 0 2px 12px rgba(44,26,14,0.05);
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .pl-model-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(44,26,14,0.1); }
  .pl-model-icon { font-size: 28px; margin-bottom: 12px; }
  .pl-model-title {
    font-family: var(--font-display); font-size: 18px; font-weight: 600;
    color: var(--brand-charcoal); margin-bottom: 8px;
  }
  .pl-model-desc { font-size: 14px; color: var(--brand-forest); line-height: 1.7; margin-bottom: 12px; }
  .pl-model-buyers { font-size: 12px; color: var(--brand-gold); font-weight: 600; }

  /* Steps */
  .pl-steps { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
  .pl-step {
    position: relative; background: #fff; border: 1px solid var(--brand-gold-pale);
    border-radius: 16px; padding: 28px; box-shadow: 0 2px 12px rgba(44,26,14,0.05);
  }
  .pl-step__bar {
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--brand-gold), var(--brand-gold-light));
    border-radius: 16px 16px 0 0;
  }
  .pl-step__num {
    font-family: var(--font-display); font-size: 40px; font-weight: 700;
    color: var(--brand-gold-pale); line-height: 1; margin-bottom: 8px;
  }
  .pl-step__title {
    font-family: var(--font-display); font-size: 16px; font-weight: 600;
    color: var(--brand-charcoal); margin-bottom: 8px;
  }
  .pl-step__desc { font-size: 14px; color: var(--brand-forest); line-height: 1.7; }

  /* Products grid */
  .pl-products { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
  .pl-product-chip {
    display: flex; align-items: center; gap: 10px;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px; padding: 12px 16px; text-decoration: none;
    color: #fff; font-size: 14px; font-weight: 500;
    transition: background 0.2s, border-color 0.2s;
    backdrop-filter: blur(4px);
  }
  .pl-product-chip:hover { background: rgba(255,255,255,0.14); border-color: var(--brand-gold); }
  .pl-product-chip img {
    width: 36px; height: 36px; border-radius: 8px; object-fit: cover;
    background: rgba(255,255,255,0.1);
  }

  /* Packaging formats */
  .pl-pkg-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  @media (max-width: 900px) { .pl-pkg-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 540px) { .pl-pkg-grid { grid-template-columns: 1fr; } }
  .pl-pkg-card {
    background: var(--brand-gold-pale); border-radius: 12px; padding: 24px;
    border: 1px solid rgba(201,168,76,0.18);
  }
  .pl-pkg-title { font-family: var(--font-display); font-size: 16px; font-weight: 600; color: var(--brand-charcoal); margin-bottom: 4px; }
  .pl-pkg-sizes { font-size: 13px; color: var(--brand-gold); font-weight: 600; margin-bottom: 8px; }
  .pl-pkg-desc { font-size: 13px; color: var(--brand-forest); line-height: 1.65; }

  /* Buyers */
  .pl-buyers { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  @media (max-width: 900px) { .pl-buyers { grid-template-columns: repeat(2, 1fr); } }
  .pl-buyer {
    background: #fff; border: 1px solid var(--brand-gold-pale); border-radius: 12px;
    padding: 20px; text-align: center;
  }
  .pl-buyer-emoji { font-size: 28px; margin-bottom: 8px; }
  .pl-buyer-label { font-size: 13px; font-weight: 600; color: var(--brand-charcoal); }

  /* FAQs */
  .pl-faqs { display: grid; gap: 12px; }
  .pl-faq {
    background: #fff; border: 1px solid var(--brand-gold-pale); border-radius: 12px;
    padding: 20px 24px; box-shadow: 0 2px 8px rgba(44,26,14,0.04);
  }
  .pl-faq__q {
    font-family: var(--font-display); font-size: 16px; font-weight: 600;
    color: var(--brand-charcoal); margin-bottom: 8px;
  }
  .pl-faq__a { font-size: 14px; color: var(--brand-forest); line-height: 1.75; }

  /* CTA */
  .pl-cta {
    background: linear-gradient(135deg, #10170f 0%, var(--brand-deep-green) 55%, var(--wood-dark) 100%);
    padding: 80px 24px; text-align: center; position: relative; overflow: hidden;
  }
  .pl-cta::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(circle at 60% 40%, rgba(201,168,76,0.15) 0%, transparent 60%);
  }
  .pl-cta-inner { position: relative; max-width: 600px; margin: 0 auto; }
  .pl-cta-heading {
    font-family: var(--font-display); font-size: clamp(28px, 3.5vw, 40px);
    color: #fff; margin-bottom: 16px; line-height: 1.3;
  }
  .pl-cta-sub { color: rgba(255,255,255,0.72); font-size: 16px; margin-bottom: 32px; line-height: 1.7; }
  .pl-cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  @media (max-width: 640px) {
    .pl-cta { padding: 56px 16px; }
    .pl-cta-actions { flex-direction: column; align-items: stretch; }
  }

  /* Trust strip */
  .pl-trust { background: var(--wood-dark); padding: 14px 24px; }
  .pl-trust-inner {
    max-width: 1200px; margin: 0 auto;
    display: flex; flex-wrap: wrap; gap: 8px 24px;
    align-items: center; justify-content: center;
  }
  .pl-trust-item {
    display: flex; align-items: center; gap: 6px;
    color: rgba(255,255,255,0.85); font-size: 12px; font-weight: 500;
  }
`;

/* ─── COMPONENT ─── */

const PrivateLabelPage = () => {
  const waUrl = buildWhatsAppUrl(
    buildGeneralInquiryMessage("private label spice manufacturing"),
  );

  return (
    <>
      <Seo
        title="Private Label Spice Manufacturer India | Custom Spice Packaging & Branding | JM Masala"
        description="JM Masala Trading LLP is an Indian private label spice manufacturer offering custom processing, packaging, branding and export of cumin, coriander, fennel, turmeric and other Indian spices for global B2B buyers."
        path="/private-label-spices"
        keywords={[
          "private label spices India",
          "private label spice manufacturer India",
          "private label cumin manufacturer",
          "custom spice packaging India",
          "retail spice manufacturer India",
          "private label Indian spices exporter",
          "private label spice supplier",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: PL_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />
      <style>{styles}</style>

      <div className="pl-root">
        {/* ── HERO ── */}
        <section className="pl-hero">
          <div className="pl-hero-inner">
            <div className="pl-hero-label">Private Label &amp; Retail Supply</div>
            <h1>
              Private Label Spice Manufacturing — <em>from India</em>
            </h1>
            <p className="pl-hero-sub">
              <strong>JM Masala Trading LLP</strong> is an Indian spice manufacturer,
              processor and exporter offering private label, custom-branded, and
              retail-ready spice supply for international B2B buyers. From product
              selection and Sortex processing to custom packaging and export shipment
              — one supply partner for your Indian spice requirements.
            </p>
            <div className="pl-hero-actions">
              <Link
                to="/contact?intent=private-label#inquiry-form"
                className="pl-btn-primary"
              >
                Discuss Private Label Requirements <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="pl-btn-outline">
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <div className="pl-trust">
          <div className="pl-trust-inner">
            {[
              "Indian Spice Manufacturer",
              "Sortex & Machine Cleaning",
              "Custom Packaging",
              "Private Label Branding",
              "Export Documentation",
              "HACCP Compatible Processing",
            ].map((b) => (
              <div key={b} className="pl-trust-item">
                <CheckCircle2 style={{ width: 14, height: 14, color: "var(--brand-gold)" }} />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── BRAND POSITIONING ── */}
        <section className="pl-bg-white">
          <div className="pl-section">
            <div className="pl-label">JM Masala Supply Models</div>
            <h2 className="pl-heading">
              Source. Process. Pack. Brand. Export.
            </h2>
            <p className="pl-sub">
              JM Masala Trading LLP works with international buyers across four
              supply models — from bulk commodity shipments to fully branded
              retail-ready spice products. Your requirements determine the supply
              configuration.
            </p>
            <div className="pl-models">
              {SUPPLY_MODELS.map((m) => (
                <div key={m.title} className="pl-model-card">
                  <div className="pl-model-icon">{m.icon}</div>
                  <h3 className="pl-model-title">{m.title}</h3>
                  <p className="pl-model-desc">{m.desc}</p>
                  <div className="pl-model-buyers">{m.buyers}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="pl-divider" />

        {/* ── 7-STEP PROCESS ── */}
        <section className="pl-bg-cream">
          <div className="pl-section">
            <div className="pl-label">Private Label Process</div>
            <h2 className="pl-heading">
              Your Specification. Our Processing.
            </h2>
            <p className="pl-sub">
              Every private-label project follows a structured 7-step workflow
              from product selection through export shipment. Requirements are
              confirmed before production begins.
            </p>
            <div className="pl-steps">
              {PL_STEPS.map((step) => (
                <div key={step.num} className="pl-step">
                  <div className="pl-step__bar" />
                  <div className="pl-step__num">{step.num}</div>
                  <h3 className="pl-step__title">{step.title}</h3>
                  <p className="pl-step__desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="pl-divider" />

        {/* ── AVAILABLE PRODUCTS ── */}
        <section className="pl-bg-dark">
          <div className="pl-section">
            <div className="pl-label" style={{ color: "var(--brand-gold-light)" }}>
              Private Label Product Range
            </div>
            <h2 className="pl-heading pl-heading--white">
              Indian Spices Available for Private Label Supply
            </h2>
            <p className="pl-sub pl-sub--white">
              JM Masala's private-label capability covers whole spices, spice powders,
              and agro products. Select one product or consolidate multiple products
              into a single branded supply arrangement.
            </p>
            <div className="pl-products">
              {PL_PRODUCTS.map((p) => (
                <Link key={p.slug} to={`/${p.slug}`} className="pl-product-chip">
                  {p.imageUrl && (
                    <img src={p.imageUrl} alt={p.name} loading="lazy" />
                  )}
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PACKAGING FORMATS ── */}
        <section className="pl-bg-white">
          <div className="pl-section">
            <div className="pl-label">Packaging Options</div>
            <h2 className="pl-heading">
              Customized Spice Packaging for Every Channel
            </h2>
            <p className="pl-sub">
              Packaging formats can be discussed based on product, quantity,
              destination, handling requirements, and retail or bulk application.
            </p>
            <div className="pl-pkg-grid">
              {PACKAGING_FORMATS.map((pkg) => (
                <div key={pkg.title} className="pl-pkg-card">
                  <h3 className="pl-pkg-title">{pkg.title}</h3>
                  <div className="pl-pkg-sizes">{pkg.sizes}</div>
                  <p className="pl-pkg-desc">{pkg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="pl-divider" />

        {/* ── TARGET BUYERS ── */}
        <section className="pl-bg-cream">
          <div className="pl-section">
            <div className="pl-label">Who We Work With</div>
            <h2 className="pl-heading">
              Private Label Spice Supply for International Businesses
            </h2>
            <p className="pl-sub">
              JM Masala's private-label and retail-ready supply is designed for
              international B2B businesses looking for a single Indian spice
              manufacturing and supply partner.
            </p>
            <div className="pl-buyers">
              {BUYER_SEGMENTS.map((b) => (
                <div key={b.label} className="pl-buyer">
                  <div className="pl-buyer-emoji">{b.emoji}</div>
                  <div className="pl-buyer-label">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="pl-divider" />

        {/* ── FAQs ── */}
        <section className="pl-bg-white">
          <div className="pl-section">
            <div className="pl-label">Private Label FAQs</div>
            <h2 className="pl-heading">
              Frequently Asked Questions — Private Label Spice Manufacturing
            </h2>
            <p className="pl-sub">
              Key questions from international buyers evaluating private-label
              and custom-branded Indian spice supply partnerships.
            </p>
            <div className="pl-faqs">
              {PL_FAQS.map((faq) => (
                <article key={faq.q} className="pl-faq">
                  <h3 className="pl-faq__q">{faq.q}</h3>
                  <p className="pl-faq__a">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section className="pl-bg-beige">
          <div className="pl-section" style={{ paddingTop: 48, paddingBottom: 48 }}>
            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600,
              color: "var(--brand-charcoal)", marginBottom: 16,
            }}>
              Related JM Masala Pages
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "All Products", to: "/products" },
                { label: "Spice Processing & Sourcing", to: "/sourcing-network" },
                { label: "Quality & Certifications", to: "/quality-certifications" },
                { label: "Spice Packaging Solutions", to: "/spice-packaging" },
                { label: "About JM Masala", to: "/about-jm-masala" },
                { label: "Indian Spice Exporter", to: "/best-spice-exporter-india" },
                { label: "Contact & Request Quote", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    padding: "8px 14px", borderRadius: 999,
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "var(--brand-charcoal)", textDecoration: "none",
                    fontSize: 13, fontWeight: 600,
                  }}
                >
                  {link.label} <ChevronRight style={{ width: 14, height: 14 }} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pl-cta">
          <div className="pl-cta-inner">
            <div className="pl-label" style={{ justifyContent: "center", color: "var(--brand-gold-light)" }}>
              Start Your Private Label Project
            </div>
            <h2 className="pl-cta-heading">
              Build Your Own Indian Spice Brand with JM Masala
            </h2>
            <p className="pl-cta-sub">
              Share your product requirements, target pack sizes, destination market,
              and branding details with JM Masala Trading LLP. Our team will evaluate
              the requirement and provide a commercial proposal.
            </p>
            <div className="pl-cta-actions">
              <Link
                to="/contact?intent=private-label#inquiry-form"
                className="pl-btn-primary"
              >
                Request Private Label Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="pl-btn-outline">
                View Product Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivateLabelPage;
