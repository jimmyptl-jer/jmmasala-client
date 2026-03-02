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

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="font-serif text-4xl font-bold text-stone-900">
          Complete Indian Spice Portfolio - Export Grade. HACCP Certified.
        </h1>

        <div className="mt-8 flex flex-wrap gap-3">
          {(Object.keys(FILTER_LABELS) as FilterKey[]).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                activeFilter === filter
                  ? "border-amber-700 bg-amber-700 text-white"
                  : "border-stone-300 bg-white text-stone-700 hover:border-amber-500 hover:text-amber-700"
              }`}
            >
              {FILTER_LABELS[filter]}
            </button>
          ))}
        </div>

        {query && (
          <p className="mt-4 text-sm text-stone-600">
            Search results for: <strong>{query}</strong>
          </p>
        )}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <article
              key={product.slug}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
            >
              <img
                src={product.imageUrl}
                alt={`${product.name} export-grade product sample`}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-stone-900">{product.name}</h2>
                <p className="mt-1 text-sm text-stone-600">{product.keySpec}</p>
                <Link
                  to={`/${product.slug}`}
                  className="mt-4 inline-block rounded-full bg-amber-600 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-700"
                >
                  View Full Specifications
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
