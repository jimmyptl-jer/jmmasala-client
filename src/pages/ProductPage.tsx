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
      const fullText = `${product.name} ${product.description} ${product.keySpec}`.toLowerCase();
      return fullText.includes(query);
    });
  }, [query]);

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

          {query && (
            <p className="mt-4 text-sm text-[var(--color-text-medium)]">
              Search results for: <strong>{query}</strong>
            </p>
          )}

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => {
              return (
                <article key={product.slug} className="jm-product-card">
                  <div className="relative jm-product-card__image">
                    <span className="jm-product-card__badge">Export Grade</span>
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
