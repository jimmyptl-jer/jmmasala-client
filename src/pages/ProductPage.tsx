import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { PRODUCTS, ProductData } from "@/data/siteData";

type FilterKey = "all" | "north" | "south" | "powders";

const FILTER_LABELS: Record<FilterKey, string> = {
  all: "All Products",
  north: "North Indian Spices",
  south: "South Indian Spices",
  powders: "Powders and Blends",
};

const isPowderLike = (product: ProductData) =>
  product.name.toLowerCase().includes("turmeric") ||
  product.name.toLowerCase().includes("red chilli") ||
  product.name.toLowerCase().includes("curry leaf");

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const query = searchParams.get("search")?.toLowerCase().trim() ?? "";

  const visibleProducts = useMemo(() => {
    const byFilter = PRODUCTS.filter((product) => {
      if (activeFilter === "all") {
        return true;
      }
      if (activeFilter === "powders") {
        return isPowderLike(product);
      }
      return product.category === activeFilter;
    });

    if (!query) {
      return byFilter;
    }

    return byFilter.filter((product) => {
      const fullText = `${product.name} ${product.description} ${product.keySpec}`.toLowerCase();
      return fullText.includes(query);
    });
  }, [activeFilter, query]);

  return (
    <>
      <Seo
        title="Complete Indian Spice Portfolio - Export Grade. HACCP Certified."
        description="Browse JM Masala's complete Indian spice portfolio with export specifications, quality grades, and packaging options."
        path="/products"
        imageUrl={PRODUCTS[0]?.imageUrl}
      />

      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <p className="jm-section-label">Product Portfolio</p>
          <h1 className="jm-section-heading">
            Complete Indian Spice Portfolio – Export Grade
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            {(Object.keys(FILTER_LABELS) as FilterKey[]).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase ${
                  activeFilter === filter
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                    : "border-[var(--color-bg-beige)] bg-white text-[var(--color-text-dark)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                }`}
              >
                {FILTER_LABELS[filter]}
              </button>
            ))}
          </div>

          {query && (
            <p className="mt-4 text-sm text-[var(--color-text-medium)]">
              Search results for: <strong>{query}</strong>
            </p>
          )}

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => {
              const categoryLabel =
                product.category === "north"
                  ? "North Indian"
                  : product.category === "south"
                    ? "South Indian"
                    : "Powders & Blends";

              return (
                <article key={product.slug} className="jm-product-card">
                  <div className="relative jm-product-card__image">
                    <span className="jm-product-card__badge">{categoryLabel}</span>
                    <img
                      src={product.imageUrl}
                      alt={`${product.name} export-grade product sample`}
                      loading="lazy"
                    />
                  </div>
                  <div className="jm-product-card__body">
                    <h2 className="jm-product-card__name">{product.name}</h2>
                    <p className="jm-product-card__description">{product.shortDescription}</p>
                    <span className="jm-product-card__chip">{product.keySpec}</span>
                    <Link
                      to={`/${product.slug}`}
                      className="mt-4 inline-flex w-full justify-center jm-btn jm-btn--outline text-[13px]"
                    >
                      View Specifications
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
