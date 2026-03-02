import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Seo from "@/components/Seo";
import {
  DOCUMENTATION_PACKAGE,
  PRODUCTS,
  SITE_URL,
  TRUST_BADGES,
} from "@/data/siteData";

const SOURCING_HIGHLIGHTS = [
  {
    title: "Origin-Centered Procurement",
    description:
      "Core spices like cumin, coriander, fennel, fenugreek, psyllium, and sesame are sourced through our Unjha mandi network and farmer channels for stable quality.",
  },
  {
    title: "Pan-India Product Coverage",
    description:
      "For products such as red chilli, turmeric, black pepper, cardamom, and curry leaf, we use selected sourcing partners in South and coastal India.",
  },
  {
    title: "Single Quality Gate",
    description:
      "Every lot follows a unified process before dispatch: cleaning, grading, moisture checks, and pre-shipment documentation review.",
  },
];

const PACKING_OPTIONS = [
  {
    title: "Retail Packs",
    description:
      "100g, 250g, 500g, and 1kg consumer packs for domestic and private-label programs.",
  },
  {
    title: "Bulk Export Packs",
    description:
      "25kg and 50kg export bags with food-grade liner, with pack style aligned to buyer market and product type.",
  },
  {
    title: "Private Label Support",
    description:
      "Brand label printing, batch coding, and buyer-specific SKU preparation for distributor and retail chains.",
  },
  {
    title: "Dispatch Readiness",
    description:
      "Container-wise lot segregation, shipping marks, and handling guidance to reduce transit and compliance issues.",
  },
];

const BUYER_SUPPORT_ITEMS = [
  "Pre-shipment sample and specification alignment",
  "Lot-wise testing support with COA sharing",
  "MOQ and packing flexibility by product",
  "Commercial support for quote, contract, and shipment planning",
];

const HomePage = () => {
  return (
    <>
      <Seo
        title="JM Masala | Premium Indian Spice Exporter | Unjha Gujarat | Cumin Turmeric Pepper Cardamom"
        description="HACCP certified Indian spice exporter from Unjha Gujarat. Complete portfolio - cumin, coriander, turmeric, red chilli, black pepper, cardamom, psyllium. APEDA Spice Board registered. LC basis. Export worldwide."
        path="/"
        imageUrl={PRODUCTS[0]?.imageUrl}
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "JM Masala Exports",
          url: SITE_URL,
          email: "jmmasala@outlook.in",
          logo: `${SITE_URL}/favicon.svg`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91 91067 66041",
            contactType: "sales",
            areaServed: "Worldwide",
          },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1800&q=80"
          alt="Spice bowls and dried whole spices arranged for export"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(44,26,14,0.85), rgba(92,46,14,0.6))",
          }}
        />
        <div className="relative jm-container flex min-h-[70vh] flex-col justify-center py-16 sm:py-20 lg:min-h-[100vh] lg:py-0">
          <div className="max-w-2xl space-y-6">
            <p className="jm-tagline text-[18px] text-[var(--color-accent)]">
              Premium Indian Spices — From the Heart of Unjha
            </p>
            <h1 className="max-w-xl text-white lg:text-[52px]">
              Complete Indian Spice Portfolio from Unjha
            </h1>
            <p className="max-w-xl text-[16px] text-[rgba(255,255,255,0.88)] sm:text-[18px]">
              A single export partner for cumin, fennel, coriander, chilli,
              turmeric, fenugreek, psyllium and more — HACCP and ISO 22000
              aligned, APEDA and Spice Board registered.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="/JMMasalaProducts.pdf"
                className="jm-btn jm-btn--secondary"
              >
                Download Product Catalogue
              </a>
              <Link
                to="/contact?intent=quote#inquiry-form"
                className="jm-btn jm-btn--ghost border-2 border-white"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="jm-trust-bar">
        <div className="jm-container">
          <div className="jm-trust-bar__list">
            {TRUST_BADGES.map((badge, index) => (
              <div key={badge} className="flex items-center gap-3">
                <div className="jm-trust-bar__item">
                  <CheckCircle2
                    className="h-4 w-4 text-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                  <span>{badge}</span>
                </div>
                {index < TRUST_BADGES.length - 1 && (
                  <div className="jm-trust-bar__divider" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <p className="jm-section-label">Product Portfolio</p>
          <h2 className="jm-section-heading">Our Complete Spice Portfolio</h2>
          <div className="jm-section-underline" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.slice(0, 6).map((product) => (
              <article
                key={product.slug}
                className="rounded-xl border border-[var(--color-bg-beige)] bg-white p-5 shadow-[0_2px_12px_rgba(92,46,14,0.06)]"
              >
                <h3 className="jm-heading-4 text-[var(--color-text-dark)]">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-medium)]">
                  {product.shortDescription}
                </p>
                <Link
                  to={`/${product.slug}`}
                  className="mt-3 inline-flex text-sm font-semibold text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                >
                  View Specifications
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <p className="jm-section-label">Why Choose Us</p>
          <h2 className="jm-section-heading">Why JM Masala</h2>
          <div className="jm-section-underline" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Complete Portfolio from One Source",
              "Dual Sourcing Network",
              "HACCP and ISO 22000 Certified",
              "Unjha Location Advantage",
              "Generational Legacy",
            ].map((point) => (
              <div
                key={point}
                className="rounded-xl border border-[var(--color-bg-beige)] bg-white p-4 text-sm font-semibold text-[var(--color-text-medium)] shadow-[0_2px_12px_rgba(92,46,14,0.06)]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <p className="jm-section-label">Sourcing Process</p>
          <h2 className="jm-section-heading">How We Source Your Products</h2>
          <div className="jm-section-underline" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SOURCING_HIGHLIGHTS.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[var(--color-bg-beige)] bg-white p-5 shadow-[0_2px_12px_rgba(92,46,14,0.06)]"
              >
                <h3 className="jm-heading-4 text-[var(--color-text-dark)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-medium)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <p className="jm-section-label">Packing & Dispatch</p>
          <h2 className="jm-section-heading">Packing Formats We Provide</h2>
          <div className="jm-section-underline" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {PACKING_OPTIONS.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[var(--color-bg-beige)] bg-white p-5 shadow-[0_2px_12px_rgba(92,46,14,0.06)]"
              >
                <h3 className="jm-heading-4 text-[var(--color-text-dark)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-medium)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-[var(--color-bg-beige)] bg-white p-5 shadow-[0_2px_12px_rgba(92,46,14,0.06)]">
            <h3 className="jm-heading-4 text-[var(--color-text-dark)]">
              Buyer Assistance Beyond Certifications
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {BUYER_SUPPORT_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[var(--color-text-medium)]"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 text-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-bg-beige)] bg-white py-8">
        <div className="jm-container text-center text-sm font-semibold text-[var(--color-text-dark)] sm:text-base">
          12+ Products | Pan-India Sourcing | Retail to Bulk Packing | Export
          Documentation Support
        </div>
      </section>

      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <p className="jm-section-label">Compliance</p>
          <h2 className="jm-section-heading">
            Certifications &amp; Shipment Documentation
          </h2>
          <div className="jm-section-underline" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="jm-cert-badges">
              {[
                "HACCP Certified",
                "ISO 22000",
                "APEDA Registered",
                "Spice Board RCMC",
                "FSSAI Licensed",
                "IEC Registered",
              ].map((item) => (
                <div key={item} className="jm-cert-badge">
                  <div className="jm-cert-badge__title">{item}</div>
                  <div>Documentation shared with each export shipment.</div>
                </div>
              ))}
            </div>
            <article className="rounded-xl border border-[var(--color-bg-beige)] bg-[var(--color-bg-cream)] p-5">
              <h3 className="jm-heading-4 text-[var(--color-text-dark)]">
                Export Document Set
              </h3>
              <ul className="mt-4 grid gap-3">
                {DOCUMENTATION_PACKAGE.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-start gap-2 text-sm text-[var(--color-text-medium)]"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 text-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="jm-section jm-section--primary">
        <div className="jm-container text-center">
          <h2 className="jm-heading-2 text-white">
            Ready to Source Premium Indian Spices?
          </h2>
          <Link
            to="/contact?intent=quote"
            className="jm-btn jm-btn--secondary mt-6"
          >
            Send Us Your Requirement
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
