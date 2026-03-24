import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { PRODUCTS } from "@/data/siteData";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search")?.toLowerCase().trim() ?? "";

  const visibleProducts = useMemo(() => {
    if (!query) {
      return PRODUCTS;
    }

    return PRODUCTS.filter((product) => {
      const fullText =
        `${product.name} ${product.description} ${product.keySpec}`.toLowerCase();
      return fullText.includes(query);
    });
  }, [query]);

  return (
    <>
      <Seo
        title="Export Grade Indian Spices Portfolio | Cumin, Coriander, Turmeric, Psyllium | JM Masala"
        description="Browse JM Masala's export-grade Indian spices portfolio including cumin seeds, coriander seeds, fennel, fenugreek, psyllium, sesame, red chilli, turmeric, black pepper, cardamom and curry leaf."
        path="/products"
        imageUrl={PRODUCTS[0]?.imageUrl}
        keywords={[
          "export grade spices India",
          "Indian spices exporter products",
          "cumin coriander turmeric exporter",
          "bulk spices supplier India",
          "psyllium husk exporter India",
          "black pepper exporter India",
          "cardamom exporter India",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: "JM Masala Product Portfolio",
              url: "https://jmmasalaexports.com/products",
              description:
                "Export-grade Indian spice portfolio from JM Masala Exports.",
            },
            {
              "@type": "ItemList",
              itemListElement: PRODUCTS.map((product, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://jmmasalaexports.com/${product.slug}`,
                name: product.name,
              })),
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Which spices does JM Masala export from India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "JM Masala exports cumin seeds, coriander seeds, fennel, fenugreek, psyllium husk, psyllium seeds, sesame, turmeric, red chilli, black pepper, cardamom and curry leaf.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can buyers request custom packing and export documentation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. JM Masala supports buyer-specific packing, labelling, documentation, and shipment terms based on the destination market and product requirement.",
                  },
                },
              ],
            },
          ],
        }}
      />

      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <p className="jm-section-label">Product Portfolio</p>
          <h1 className="jm-section-heading">
            Complete Indian Spice Portfolio – Export Grade
          </h1>

          {query && (
            <p className="mt-4 text-sm text-[var(--brand-forest)]">
              Search results for: <strong>{query}</strong>
            </p>
          )}

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <article
                key={product.slug}
                className="jm-product-card"
                style={
                  product.colors
                    ? ({
                        "--accent-color": product.colors.accent,
                      } as React.CSSProperties)
                    : undefined
                }
              >
                {/* 4px Accent Band (Gold Band Signature) */}
                {product.colors && (
                  <div
                    style={{
                      height: "4px",
                      background: product.colors.accent,
                    }}
                  ></div>
                )}
                <div className="relative jm-product-card__image">
                  <span className="jm-product-card__badge">Export Grade</span>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    loading="lazy"
                  />
                </div>
                <div className="jm-product-card__body">
                  <h2 className="jm-product-card__name">{product.name}</h2>
                  {/* Botanical Name - Authenticity Signal */}
                  <p
                    style={{
                      fontSize: "12px",
                      fontStyle: "italic",
                      color: product.colors ? product.colors.accent : "#c9a84c",
                      marginBottom: "8px",
                      opacity: 0.8,
                    }}
                  >
                    {product.botanicalName}
                  </p>
                  <p className="jm-product-card__description">
                    {product.shortDescription}
                  </p>
                  <span className="jm-product-card__chip">
                    {product.keySpec}
                  </span>
                  <Link
                    to={`/${product.slug}`}
                    className="mt-4 inline-flex w-full justify-center jm-btn jm-btn--outline text-[13px]"
                  >
                    View Specifications
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <section className="jm-surface-card mt-12 p-6 lg:p-8">
            <h2 className="text-[28px] text-[var(--brand-charcoal)] text-tagline not-italic">
              Export Spices from India for Serious Buyers
            </h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              <div className="text-body text-[var(--brand-forest)]">
                <p>
                  JM Masala focuses on exporter-grade Indian spices with buyer-led
                  control over purity, moisture, packing format, documentation, and
                  shipment preparation. Our portfolio is built around high-demand
                  products like{" "}
                  <Link to="/cumin-seeds-exporter-india" className="text-[var(--brand-gold)] hover:text-[var(--brand-deep-green)]">
                    cumin seeds
                  </Link>
                  ,{" "}
                  <Link to="/coriander-seeds-exporter-india" className="text-[var(--brand-gold)] hover:text-[var(--brand-deep-green)]">
                    coriander seeds
                  </Link>
                  ,{" "}
                  <Link to="/psyllium-husk-exporter-india" className="text-[var(--brand-gold)] hover:text-[var(--brand-deep-green)]">
                    psyllium husk
                  </Link>
                  ,{" "}
                  <Link to="/turmeric-exporter-india" className="text-[var(--brand-gold)] hover:text-[var(--brand-deep-green)]">
                    turmeric
                  </Link>
                  , and other export staples sourced and processed for international trade.
                </p>
                <p className="mt-4">
                  Buyers can review each product page for specifications, market-grade
                  notes, packaging options, certifications, export details, and direct
                  WhatsApp inquiry support. This helps your team move faster from
                  sourcing review to sample approval and shipment planning.
                </p>
              </div>
              <div className="space-y-3 text-sm text-[var(--brand-forest)]">
                <div className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3">
                  Export-focused portfolio for importers, wholesalers, food brands, and private-label buyers.
                </div>
                <div className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3">
                  Direct product pages for cumin, coriander, fennel, fenugreek, psyllium, sesame, turmeric, chilli, pepper, cardamom, and curry leaf.
                </div>
                <div className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3">
                  Support for lot-wise documents, quality parameters, custom packing, and export communication.
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
