import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { PRODUCTS } from "@/data/siteData";

type CategoryFilter = "all" | "whole" | "powders" | "agro";

const CATEGORY_TABS: Array<{ id: CategoryFilter; label: string }> = [
  { id: "all", label: "All Master Products" },
  { id: "whole", label: "Whole Spices" },
  { id: "powders", label: "Spice Powders" },
  { id: "agro", label: "Agro Products" },
];

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search")?.toLowerCase().trim() ?? "";
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");

  const visibleProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match check
      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory ||
        (selectedCategory === "whole" && (product.category === "north" || product.category === "south"));

      if (!matchesCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      const fullText =
        `${product.name} ${product.botanicalName} ${product.description} ${product.keySpec}`.toLowerCase();
      return fullText.includes(query);
    });
  }, [query, selectedCategory]);

  return (
    <>
      <Seo
        title="Indian Spice Manufacturer, Processor & Exporter | Master Product Portfolio | JM Masala"
        description="JM Masala Trading LLP is an Indian spices manufacturer, processor and exporter supplying premium cumin, coriander, fennel, fenugreek, ajwain, mustard, turmeric, dry ginger, red chilli, powders, and psyllium worldwide."
        path="/products"
        imageUrl={PRODUCTS[0]?.imageUrl}
        keywords={[
          "export grade spices India",
          "Indian spices exporter products",
          "cumin coriander turmeric exporter",
          "bulk spices supplier India",
          "psyllium husk exporter India",
          "black pepper exporter India",
          "mustard ajwain kalonji exporter India",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: "JM Masala Master Product Portfolio",
              url: "https://jmmasalaexports.com/products",
              description:
                "Export-grade Indian spice master portfolio from JM Masala Trading LLP.",
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
                    text: "JM Masala exports cumin seeds, coriander seeds, fennel, fenugreek, ajwain, mustard, turmeric fingers & powder, dry ginger & powder, red chilli whole & powder, kalonji, psyllium, dehydrated onion/garlic, and agro commodities.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can buyers request custom packing and export documentation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. JM Masala supports buyer-specific packing (25kg/50kg PP, Jute, paper bags, vacuum packs), private labelling, NABL lab COA, phytosanitary, fumigation, APEDA, and FOB Mundra port terms.",
                  },
                },
              ],
            },
          ],
        }}
      />

      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <p className="jm-section-label">Master Product Database</p>
          <h1 className="jm-section-heading">
            Premium Indian Spices & Agro Products Portfolio
          </h1>
          <p className="mt-2 max-w-3xl text-[var(--brand-forest)]">
            JM Masala Trading LLP is an Indian spice manufacturer, processor, and exporter supplying high-purity whole spices, ground spice powders, and agro commodities with FOB Mundra shipping terms.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-[var(--brand-gold-pale)] pb-4">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`rounded-full px-5 py-2 text-xs font-medium transition-all ${
                  selectedCategory === tab.id
                    ? "bg-[var(--brand-deep-green)] text-white shadow-sm"
                    : "bg-[var(--brand-gold-pale)]/50 text-[var(--brand-charcoal)] hover:bg-[var(--brand-gold-pale)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {query && (
            <p className="mt-4 text-sm text-[var(--brand-forest)]">
              Search results for: <strong>{query}</strong> ({visibleProducts.length} items found)
            </p>
          )}

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <article
                key={product.slug}
                className="jm-product-card transition-transform hover:-translate-y-1"
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
                    decoding="async"
                    className="h-56 w-full object-cover"
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
                      opacity: 0.85,
                    }}
                  >
                    {product.botanicalName} &bull; {product.origin}
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
                    View Specifications & Quotes
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <section className="jm-surface-card mt-12 p-6 lg:p-8">
            <h2 className="text-[28px] text-[var(--brand-charcoal)] text-tagline not-italic">
              JM Masala Trading LLP — Indian Spice Manufacturer, Processor & Exporter
            </h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              <div className="text-body text-[var(--brand-forest)]">
                <p>
                  JM Masala Trading LLP is a Gujarat-based manufacturer, processor, and exporter of premium Indian spices and agro products. We source, clean, process, grade, and supply high-quality spices to international buyers with specifications tailored to their market and application requirements.
                </p>
                <p className="mt-4">
                  From sourcing in Unjha mandi and quality control to processing, packing, and export documentation, JM Masala works with international importers, distributors, wholesalers, food manufacturers, and spice companies looking for reliable Indian spice supply.
                </p>
              </div>
              <div className="space-y-3 text-sm text-[var(--brand-forest)]">
                <div className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3 font-medium">
                  Direct processing capability: Machine cleaning, gravity separation, destoning, grading, and Sortex color sorting.
                </div>
                <div className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3 font-medium">
                  Customized parameters: Purity (98-99.5%), moisture control, admixture limits, custom mesh grinding, and private-label packaging.
                </div>
                <div className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3 font-medium">
                  Export compliance: COA, Phytosanitary Certificate, Fumigation, APEDA RCMC, Spice Board RCMC, and FOB Mundra port shipment options.
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
