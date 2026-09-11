import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Seo from "@/components/Seo";
import {
  buildWhatsAppUrl,
  buildGeneralInquiryMessage,
} from "@/data/siteData";

/* ─── DATA ─── */

const PKG_CATEGORIES = [
  {
    icon: "📦",
    title: "Bulk Export Packaging",
    desc: "Standard export-grade packaging for container-load shipments of whole spices, powders, and agro products.",
    formats: [
      "PP woven bags — 25kg / 50kg",
      "Jute bags — 25kg / 50kg",
      "Multi-wall paper bags with PE liner — 25kg",
      "HDPE bags with food-grade inner — 25kg / 50kg",
      "Fumigation-ready export palletization",
    ],
    application: "Commodity importers, trading companies, food processors",
    color: "#1a5e1a",
  },
  {
    icon: "🛒",
    title: "Consumer Retail Packaging",
    desc: "Shelf-ready retail packs formatted for supermarket, grocery, and specialty-store distribution channels.",
    formats: [
      "Pillow pouches — 50g / 100g / 200g / 500g",
      "Stand-up zipper pouches — 100g / 200g / 500g / 1kg",
      "Three-side seal pouches — 50g / 100g",
      "Window pouches for product visibility",
      "Master cartons for retail distribution",
    ],
    application: "Spice brands, supermarkets, e-commerce sellers, grocery stores",
    color: "#c9a84c",
  },
  {
    icon: "🏷️",
    title: "Private Label Packaging",
    desc: "Custom-branded packaging with buyer's logo, artwork, nutritional tables, barcodes, and multilingual regulatory text.",
    formats: [
      "Custom-printed retail pouches",
      "Branded stand-up bags with zipper",
      "Custom labels on standard pouches",
      "Shrink-wrap and sleeve labels",
      "Multi-language text for export markets",
    ],
    application: "Private-label brands, distributors, supermarket own-brand programs",
    color: "#8b5e3c",
  },
  {
    icon: "🍽️",
    title: "Institutional & Food-Service",
    desc: "Larger pack sizes for professional kitchens, catering businesses, and food-service distribution.",
    formats: [
      "Food-grade pouches — 1kg / 2kg / 5kg",
      "Resealable institutional bags — 2kg / 5kg",
      "Multi-wall paper bags — 10kg / 25kg",
      "Vacuum packs for volatile-oil products",
      "Bulk carton packaging for food-service",
    ],
    application: "Restaurant chains, caterers, food-service distributors, hotel suppliers",
    color: "#2d5016",
  },
];

const PACKAGING_FEATURES = [
  {
    title: "Food-Grade Materials",
    desc: "All packaging materials are food-grade and compliant with standard food-contact requirements for spice and dry-food products.",
  },
  {
    title: "Moisture & Aroma Barrier",
    desc: "Multi-layer laminate and foil-lined pouches protect against moisture ingress and volatile oil loss during transit and storage.",
  },
  {
    title: "Custom Printing",
    desc: "Flexographic and rotogravure printing capabilities for high-quality brand artwork, photographic images, and colour reproduction.",
  },
  {
    title: "Batch Coding & Traceability",
    desc: "Printed batch numbers, manufacturing dates, and expiry dates on every pack for supply-chain traceability.",
  },
  {
    title: "Regulatory Labels",
    desc: "Nutritional information, ingredient declarations, allergen warnings, and origin labelling formatted for destination markets.",
  },
  {
    title: "Barcode & QR Integration",
    desc: "EAN, UPC, and retailer-specific barcodes plus optional QR codes linking to product information or traceability data.",
  },
];

const SP_FAQS = [
  {
    q: "What packaging formats does JM Masala offer for export spices?",
    a: "JM Masala offers bulk export packaging (25kg/50kg PP, jute, paper bags), consumer retail packaging (pouches, stand-up bags, cartons), private-label custom packaging, and institutional food-service packs. Format selection depends on product, quantity, and destination.",
  },
  {
    q: "Can I get custom-branded packaging with my own logo?",
    a: "Yes. JM Masala supports custom-branded packaging including buyer-supplied logo, artwork, nutritional tables, barcodes, and multilingual regulatory text as part of private-label supply arrangements.",
  },
  {
    q: "What pack sizes are available for retail spice products?",
    a: "Retail packs are typically available in 50g, 100g, 200g, 500g, and 1kg sizes in pillow pouches or stand-up zipper pouches. Other sizes can be discussed based on product and commercial requirements.",
  },
  {
    q: "Do you supply vacuum-sealed spice packaging?",
    a: "Vacuum-sealed and nitrogen-flushed packaging options can be discussed for products where volatile oil preservation and extended shelf life are important requirements.",
  },
  {
    q: "Can JM Masala handle destination-market labelling requirements?",
    a: "Labelling content is reviewed collaboratively with the buyer before production. Final regulatory compliance for labelling in the destination market remains the responsibility of the importer or brand owner.",
  },
  {
    q: "What is the minimum order for custom-printed packaging?",
    a: "Minimum order quantities for custom-printed packaging depend on the packaging format, printing method, and number of SKUs. Requirements are evaluated individually to determine commercially feasible quantities.",
  },
];

/* ─── STYLES ─── */

const styles = `
  .sp-root { font-family: var(--font-body); color: var(--brand-charcoal); }

  /* Hero */
  .sp-hero {
    background: linear-gradient(135deg, var(--wood-dark) 0%, var(--brand-deep-green) 55%, #10170f 100%);
    position: relative; overflow: hidden; padding: 96px 24px 80px;
  }
  .sp-hero::before {
    content: ''; position: absolute; inset: 0;
    background-image: radial-gradient(circle at 75% 30%, rgba(200,150,12,0.12) 0%, transparent 55%),
                      radial-gradient(circle at 25% 70%, rgba(200,150,12,0.06) 0%, transparent 50%);
  }
  .sp-hero-inner { position: relative; max-width: 1200px; margin: 0 auto; }
  .sp-hero-label {
    font-size: 11px; font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
    color: var(--brand-gold); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;
  }
  .sp-hero-label::before, .sp-hero-label::after {
    content: ''; flex: 1; max-width: 48px; height: 1px; background: var(--brand-gold); opacity: 0.6;
  }
  .sp-hero h1 {
    font-family: var(--font-display); font-size: clamp(36px, 5vw, 56px);
    font-weight: 700; color: #fff; line-height: 1.15; margin-bottom: 20px; max-width: 780px;
  }
  .sp-hero h1 em { font-style: italic; color: var(--brand-gold); }
  .sp-hero-sub {
    font-size: 17px; color: rgba(255,255,255,0.78); max-width: 620px;
    line-height: 1.75; margin-bottom: 36px;
  }
  .sp-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
  @media (max-width: 640px) {
    .sp-hero { padding: 80px 16px 56px; }
    .sp-hero-actions { flex-direction: column; }
    .sp-hero-actions a { width: 100%; justify-content: center; }
  }

  /* Shared */
  .sp-section { max-width: 1200px; margin: 0 auto; padding: 80px 24px; }
  @media (max-width: 640px) { .sp-section { padding: 48px 16px; } }
  .sp-bg-cream { background: var(--brand-cream); }
  .sp-bg-white { background: var(--brand-warm-white); }
  .sp-bg-beige { background: var(--brand-gold-pale); }
  .sp-label {
    font-size: 11px; font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
    color: var(--brand-gold); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;
  }
  .sp-label::before { content: ''; width: 32px; height: 1px; background: var(--brand-gold); }
  .sp-heading {
    font-family: var(--font-display); font-size: clamp(28px, 4vw, 42px);
    font-weight: 700; color: var(--brand-charcoal); line-height: 1.2; margin-bottom: 16px;
  }
  .sp-sub { font-size: 16px; color: var(--brand-forest); line-height: 1.75; max-width: 640px; margin-bottom: 40px; }
  .sp-divider { height: 1px; background: linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent); }

  /* Buttons */
  .sp-btn-primary {
    background: linear-gradient(135deg, var(--brand-gold), var(--brand-gold-light));
    color: var(--brand-deep-green); padding: 14px 28px; border-radius: 8px;
    font-weight: 600; font-size: 15px; text-decoration: none;
    display: inline-flex; align-items: center; gap: 8px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(201,168,76,0.32);
  }
  .sp-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(201,168,76,0.42); }
  .sp-btn-outline {
    border: 2px solid rgba(255,255,255,0.5); color: #fff;
    padding: 14px 28px; border-radius: 8px;
    font-weight: 600; font-size: 15px; text-decoration: none;
    display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s;
  }
  .sp-btn-outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; }

  /* Package Category cards */
  .sp-cats { display: grid; gap: 24px; }
  .sp-cat {
    background: #fff; border: 1px solid var(--brand-gold-pale); border-radius: 16px;
    overflow: hidden; display: grid; grid-template-columns: 6px 1fr;
    box-shadow: 0 2px 12px rgba(44,26,14,0.05);
  }
  .sp-cat__bar { border-radius: 16px 0 0 16px; }
  .sp-cat__body { padding: 28px 28px 28px 24px; }
  .sp-cat__header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .sp-cat__icon { font-size: 24px; }
  .sp-cat__title {
    font-family: var(--font-display); font-size: 20px; font-weight: 600;
    color: var(--brand-charcoal);
  }
  .sp-cat__desc { font-size: 14px; color: var(--brand-forest); line-height: 1.7; margin-bottom: 16px; }
  .sp-cat__formats { display: grid; gap: 6px; margin-bottom: 16px; }
  .sp-cat__format {
    display: flex; align-items: center; gap: 8px;
    font-size: 14px; color: var(--brand-charcoal);
  }
  .sp-cat__format svg { flex-shrink: 0; color: var(--brand-gold); }
  .sp-cat__application {
    font-size: 12px; color: var(--brand-gold); font-weight: 600;
    letter-spacing: 0.5px; text-transform: uppercase;
    padding-top: 12px; border-top: 1px solid var(--brand-gold-pale);
  }

  /* Features grid */
  .sp-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  @media (max-width: 900px) { .sp-features { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 540px) { .sp-features { grid-template-columns: 1fr; } }
  .sp-feature {
    background: #fff; border: 1px solid var(--brand-gold-pale); border-radius: 12px;
    padding: 24px; box-shadow: 0 2px 8px rgba(44,26,14,0.04);
  }
  .sp-feature__title {
    font-family: var(--font-display); font-size: 16px; font-weight: 600;
    color: var(--brand-charcoal); margin-bottom: 8px;
  }
  .sp-feature__desc { font-size: 13px; color: var(--brand-forest); line-height: 1.7; }

  /* FAQs */
  .sp-faqs { display: grid; gap: 12px; }
  .sp-faq {
    background: #fff; border: 1px solid var(--brand-gold-pale); border-radius: 12px;
    padding: 20px 24px; box-shadow: 0 2px 8px rgba(44,26,14,0.04);
  }
  .sp-faq__q {
    font-family: var(--font-display); font-size: 16px; font-weight: 600;
    color: var(--brand-charcoal); margin-bottom: 8px;
  }
  .sp-faq__a { font-size: 14px; color: var(--brand-forest); line-height: 1.75; }

  /* CTA */
  .sp-cta {
    background: linear-gradient(135deg, #10170f 0%, var(--brand-deep-green) 55%, var(--wood-dark) 100%);
    padding: 80px 24px; text-align: center; position: relative; overflow: hidden;
  }
  .sp-cta::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(circle at 40% 50%, rgba(201,168,76,0.12) 0%, transparent 55%);
  }
  .sp-cta-inner { position: relative; max-width: 600px; margin: 0 auto; }
  .sp-cta-heading {
    font-family: var(--font-display); font-size: clamp(28px, 3.5vw, 40px);
    color: #fff; margin-bottom: 16px; line-height: 1.3;
  }
  .sp-cta-sub { color: rgba(255,255,255,0.72); font-size: 16px; margin-bottom: 32px; line-height: 1.7; }
  .sp-cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  @media (max-width: 640px) {
    .sp-cta { padding: 56px 16px; }
    .sp-cta-actions { flex-direction: column; align-items: stretch; }
  }
`;

/* ─── COMPONENT ─── */

const SpicePackagingPage = () => {
  const waUrl = buildWhatsAppUrl(
    buildGeneralInquiryMessage("spice packaging solutions"),
  );

  return (
    <>
      <Seo
        title="Spice Packaging Company India | Custom Spice Packaging & Export Packing | JM Masala"
        description="JM Masala Trading LLP provides custom spice packaging solutions for export — bulk bags, retail pouches, private-label branding, and food-service packs for cumin, coriander, turmeric, chilli and other Indian spices."
        path="/spice-packaging"
        keywords={[
          "spice packaging India",
          "custom spice packaging India",
          "spice packaging company",
          "export spice packing",
          "private label spice packaging India",
          "bulk spice packaging supplier",
          "retail spice packaging India",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: SP_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />
      <style>{styles}</style>

      <div className="sp-root">
        {/* ── HERO ── */}
        <section className="sp-hero">
          <div className="sp-hero-inner">
            <div className="sp-hero-label">Packaging &amp; Packing Solutions</div>
            <h1>
              Indian Spice <em>Packaging</em> for Export &amp; Retail
            </h1>
            <p className="sp-hero-sub">
              <strong>JM Masala Trading LLP</strong> provides custom spice packaging
              for export, retail, private-label, and food-service markets. From 50g
              retail pouches to 50kg export bags — every pack formatted for your
              product, market, and distribution channel.
            </p>
            <div className="sp-hero-actions">
              <Link
                to="/contact?intent=packaging#inquiry-form"
                className="sp-btn-primary"
              >
                Discuss Packaging Requirements <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="sp-btn-outline">
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </section>

        {/* ── PACKAGING CATEGORIES ── */}
        <section className="sp-bg-white">
          <div className="sp-section">
            <div className="sp-label">Packaging Categories</div>
            <h2 className="sp-heading">
              Packaging Formats for Every Supply Model
            </h2>
            <p className="sp-sub">
              JM Masala provides packaging across four distinct categories — from
              container-load bulk supply to shelf-ready retail packs and
              custom-branded private-label packaging.
            </p>
            <div className="sp-cats">
              {PKG_CATEGORIES.map((cat) => (
                <div key={cat.title} className="sp-cat">
                  <div className="sp-cat__bar" style={{ background: cat.color }} />
                  <div className="sp-cat__body">
                    <div className="sp-cat__header">
                      <span className="sp-cat__icon">{cat.icon}</span>
                      <h3 className="sp-cat__title">{cat.title}</h3>
                    </div>
                    <p className="sp-cat__desc">{cat.desc}</p>
                    <div className="sp-cat__formats">
                      {cat.formats.map((f) => (
                        <div key={f} className="sp-cat__format">
                          <CheckCircle2 style={{ width: 14, height: 14 }} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="sp-cat__application">{cat.application}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sp-divider" />

        {/* ── PACKAGING FEATURES ── */}
        <section className="sp-bg-cream">
          <div className="sp-section">
            <div className="sp-label">Packaging Capabilities</div>
            <h2 className="sp-heading">
              Quality Assurance in Every Pack
            </h2>
            <p className="sp-sub">
              Every packaging format is designed to preserve product quality, meet
              destination-market requirements, and support supply-chain traceability.
            </p>
            <div className="sp-features">
              {PACKAGING_FEATURES.map((feat) => (
                <div key={feat.title} className="sp-feature">
                  <h3 className="sp-feature__title">{feat.title}</h3>
                  <p className="sp-feature__desc">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sp-divider" />

        {/* ── FAQs ── */}
        <section className="sp-bg-white">
          <div className="sp-section">
            <div className="sp-label">Packaging FAQs</div>
            <h2 className="sp-heading">
              Frequently Asked Questions — Spice Packaging
            </h2>
            <p className="sp-sub">
              Common questions from international spice buyers about packaging
              formats, custom printing, regulatory compliance, and order requirements.
            </p>
            <div className="sp-faqs">
              {SP_FAQS.map((faq) => (
                <article key={faq.q} className="sp-faq">
                  <h3 className="sp-faq__q">{faq.q}</h3>
                  <p className="sp-faq__a">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section className="sp-bg-beige">
          <div className="sp-section" style={{ paddingTop: 48, paddingBottom: 48 }}>
            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600,
              color: "var(--brand-charcoal)", marginBottom: 16,
            }}>
              Related JM Masala Pages
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "Private Label Manufacturing", to: "/private-label-spices" },
                { label: "All Products", to: "/products" },
                { label: "Spice Processing & Sourcing", to: "/sourcing-network" },
                { label: "Quality & Certifications", to: "/quality-certifications" },
                { label: "About JM Masala", to: "/about-jm-masala" },
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
        <section className="sp-cta">
          <div className="sp-cta-inner">
            <div className="sp-label" style={{ justifyContent: "center", color: "var(--brand-gold-light)" }}>
              Packaging Inquiry
            </div>
            <h2 className="sp-cta-heading">
              Discuss Your Spice Packaging Requirements
            </h2>
            <p className="sp-cta-sub">
              Share your product, pack size, branding, and destination-market details
              with our team. We will evaluate the requirement and propose the most
              suitable packaging solution.
            </p>
            <div className="sp-cta-actions">
              <Link
                to="/contact?intent=packaging#inquiry-form"
                className="sp-btn-primary"
              >
                Request Packaging Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/private-label-spices" className="sp-btn-outline">
                Private Label Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpicePackagingPage;
