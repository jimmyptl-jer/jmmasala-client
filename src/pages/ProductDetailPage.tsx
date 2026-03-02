import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { PRODUCTS_BY_SLUG } from "@/data/siteData";

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
    .filter((related): related is NonNullable<typeof related> => Boolean(related))
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

      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
            <article>
              <h1 className="jm-heading-1 text-[32px] lg:text-[40px]">
                {product.name}
              </h1>
              <p className="mt-1 text-lg italic text-[var(--color-text-medium)]">
                {product.botanicalName}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
                Origin: {product.origin}
              </p>
              <p className="mt-4 text-[var(--color-text-medium)]">{product.description}</p>

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
                  <div className="border-b border-[var(--color-bg-beige)] bg-[var(--color-bg-cream)] px-4 py-3 text-sm font-semibold text-[var(--color-text-dark)]">
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
                            <td className={`font-semibold ${marketClass}`}>{grade.market}</td>
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

              <section className="rounded-xl border border-[var(--color-bg-beige)] bg-white p-5">
                <h2 className="text-lg font-semibold text-[var(--color-text-dark)]">
                  Processing Standards
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-medium)]">
                  <li>Sortex cleaned for export-grade uniformity</li>
                  <li>NABL tested lots and COA available</li>
                  <li>Fumigation available based on destination</li>
                </ul>
              </section>

              <section className="rounded-xl border border-[var(--color-bg-beige)] bg-white p-5">
                <h2 className="text-lg font-semibold text-[var(--color-text-dark)]">
                  Packaging Options
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-medium)]">
                  <li>25kg PP bags</li>
                  <li>50kg PP bags</li>
                  <li>Retail packs on request</li>
                </ul>
              </section>

              <div className="flex flex-wrap gap-3">
                <a href={specSheetUrl} className="jm-btn jm-btn--secondary text-[13px]">
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
            <h2 className="jm-heading-2 text-[24px] text-[var(--color-text-dark)]">
              Related Products
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {relatedProducts.map((related) => (
                <article key={related.slug} className="jm-product-card">
                  <div className="jm-product-card__body">
                    <h3 className="jm-product-card__name">{related.name}</h3>
                    <p className="jm-product-card__description">{related.keySpec}</p>
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
