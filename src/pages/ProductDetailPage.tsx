import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "@/Components/Seo";
import { PRODUCTS_BY_SLUG } from "@/data/siteData";
import "@/styles/product-palette.css";

const TITLE_BY_SLUG: Record<string, string> = {
  "cumin-seeds-exporter-india":
    "Cumin Seeds Exporter India | Unjha Gujarat | HACCP APEDA | JM Masala",
  "turmeric-exporter-india":
    "Turmeric Exporter India | High Curcumin | HACCP Certified | JM Masala",
  "psyllium-husk-exporter-india":
    "Psyllium Husk Exporter India | HACCP ISO 22000 | Unjha Gujarat | JM Masala",
  "black-pepper-exporter-india":
    "Black Pepper Exporter India | MG1 FAQ Grade | HACCP Certified | JM Masala",
};

const ProductDetailPage = () => {
  const params = useParams();
  const slug = params.slug ?? "";
  const product = PRODUCTS_BY_SLUG[slug];

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const relatedProducts = product.relatedSlugs
    .map((relatedSlug) => PRODUCTS_BY_SLUG[relatedSlug])
    .filter((related): related is NonNullable<typeof related> =>
      Boolean(related),
    )
    .slice(0, 3);

  const title =
    TITLE_BY_SLUG[product.slug] ??
    `${product.name} Exporter India | HACCP Certified | JM Masala`;

  const specSheetUrl = "/JMMasalaProducts.pdf";
  const quoteUrl = `/contact?product=${encodeURIComponent(product.name)}#inquiry-form`;

  return (
    <>
      <Seo
        title={title}
        description={product.description}
        path={`/${product.slug}`}
        imageUrl={product.imageUrl}
        type="product"
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: product.imageUrl,
          brand: { "@type": "Brand", name: "JM Masala" },
          category: "Spices",
          countryOfOrigin: "India",
          additionalProperty: product.specs.map((spec) => ({
            "@type": "PropertyValue",
            name: spec.label,
            value: spec.value,
          })),
        }}
      />

      {/* Product Color Identity Hero Section */}
      {product.colors && (
        <section
          className="product-detail-hero"
          style={{ background: product.colors.primary }}
        >
          <div className="jm-container">
            <div className="product-detail-hero-grid">
              {/* Left: Hero Content */}
              <div className="hero-content">
                <div
                  className="hero-monogram"
                  style={{ color: product.colors.accent }}
                >
                  JM
                </div>
                <h1
                  className="hero-product-name"
                  style={{ color: product.colors.accent }}
                >
                  {product.name}
                </h1>
                <p
                  className="hero-botanical"
                  style={{ color: product.colors.accent }}
                >
                  {product.botanicalName}
                </p>
                <p
                  className="hero-origin"
                  style={{ color: product.colors.accent }}
                >
                  {product.origin}
                </p>
                <p
                  className="hero-tagline"
                  style={{ color: product.colors.accent }}
                >
                  {product.colors.tagline && `"${product.colors.tagline}"`}
                </p>
              </div>

              {/* Right: Color Palette */}
              <div className="hero-color-palette">
                <div className="palette-preview">
                  <div
                    className="color-box"
                    style={{ background: product.colors.primary }}
                  >
                    <span className="color-label">Primary</span>
                    <span className="color-value">
                      {product.colors.primary}
                    </span>
                  </div>
                  <div
                    className="color-box"
                    style={{ background: product.colors.accent }}
                  >
                    <span className="color-label">Accent</span>
                    <span className="color-value">{product.colors.accent}</span>
                  </div>
                  <div
                    className="color-box"
                    style={{ background: product.colors.pale }}
                  >
                    <span className="color-label">Pale</span>
                    <span className="color-value">{product.colors.pale}</span>
                  </div>
                </div>
                <div className="swatch-row">
                  {product.colors.swatches.map((color, idx) => (
                    <div
                      key={idx}
                      className="swatch"
                      style={{ background: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
            <article>
              <h1 className="jm-heading-1 text-[32px] lg:text-[40px]">
                {product.name}
              </h1>
              <p className="mt-1 text-tagline text-[var(--brand-forest)]">
                {product.botanicalName}
              </p>
              <p className="mt-3 text-label text-[var(--brand-gold)]">
                Origin: {product.origin}
              </p>
              <p className="mt-4 text-body text-[var(--brand-forest)]">
                {product.description}
              </p>

              <div className="mt-8 jm-spec-table">
                <div className="jm-spec-table__header">Full Specifications</div>
                <table>
                  <tbody>
                    {product.specs.map((spec) => (
                      <tr key={spec.label}>
                        <th>{spec.label}</th>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {product.qualityGrades && (
                <div className="mt-8 overflow-x-auto jm-grade-table">
                  <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-4 py-3 text-sm font-semibold text-[var(--brand-charcoal)]">
                    Market-specific Quality Grades
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>Market</th>
                        <th>Purity</th>
                        <th>Moisture</th>
                        <th>Admixture</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.qualityGrades.map((grade) => {
                        const marketClass =
                          grade.market === "Europe"
                            ? "jm-grade-table__market-europe"
                            : grade.market === "USA"
                              ? "jm-grade-table__market-usa"
                              : grade.market === "Gulf"
                                ? "jm-grade-table__market-gulf"
                                : grade.market === "Singapore"
                                  ? "jm-grade-table__market-singapore"
                                  : "";

                        return (
                          <tr key={grade.market}>
                            <td className={`font-semibold ${marketClass}`}>
                              {grade.market}
                            </td>
                            <td>{grade.purity}</td>
                            <td>{grade.moisture}</td>
                            <td>{grade.admixture}</td>
                            <td>{grade.notes}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </article>

            <aside className="space-y-6">
              <img
                src={product.imageUrl}
                alt={`${product.name} export lot sample from India`}
                className="h-72 w-full rounded-xl object-cover"
                loading="lazy"
              />

              <section className="jm-surface-card p-5">
                <h2 className="text-tagline not-italic text-[24px] text-[var(--brand-charcoal)]">
                  Processing Standards
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-[var(--brand-forest)]">
                  <li>Sortex cleaned for export-grade uniformity</li>
                  <li>NABL tested lots and COA available</li>
                  <li>Fumigation available based on destination</li>
                </ul>
              </section>

              <section className="jm-surface-card p-5">
                <h2 className="text-tagline not-italic text-[24px] text-[var(--brand-charcoal)]">
                  Packaging Options
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-[var(--brand-forest)]">
                  <li>25kg PP bags</li>
                  <li>50kg PP bags</li>
                  <li>Retail packs on request</li>
                </ul>
              </section>

              <div className="flex flex-wrap gap-3">
                <a
                  href={specSheetUrl}
                  className="jm-btn jm-btn--secondary text-[13px]"
                >
                  Download Product Specification Sheet
                </a>
                <Link
                  to={quoteUrl}
                  className="jm-btn jm-btn--outline text-[13px]"
                >
                  Request Quote for This Product
                </Link>
              </div>
            </aside>
          </div>

          <section className="mt-12">
            <h2 className="jm-heading-2 text-[24px] text-[var(--brand-charcoal)]">
              Related Products
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {relatedProducts.map((related) => (
                <article key={related.slug} className="jm-product-card">
                  <div className="jm-product-card__body">
                    <h3 className="jm-product-card__name">{related.name}</h3>
                    <p className="jm-product-card__description">
                      {related.keySpec}
                    </p>
                    <Link
                      to={`/${related.slug}`}
                      className="mt-3 inline-flex jm-btn jm-btn--outline text-[13px]"
                    >
                      View Specifications
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
