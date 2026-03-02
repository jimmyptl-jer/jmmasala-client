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

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
          <article>
            <h1 className="font-serif text-4xl font-bold text-stone-900">{product.name}</h1>
            <p className="mt-1 text-lg italic text-stone-600">{product.botanicalName}</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-amber-700">
              Origin: {product.origin}
            </p>
            <p className="mt-4 text-stone-700">{product.description}</p>

            <div className="mt-8 overflow-hidden rounded-xl border border-stone-200">
              <div className="bg-stone-900 px-4 py-3 text-sm font-semibold text-white">
                Full Specifications
              </div>
              <table className="w-full border-collapse bg-white text-sm">
                <tbody>
                  {product.specs.map((spec) => (
                    <tr key={spec.label} className="border-t border-stone-200">
                      <th className="w-1/3 bg-stone-50 px-4 py-3 text-left font-semibold text-stone-700">
                        {spec.label}
                      </th>
                      <td className="px-4 py-3 text-stone-700">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {product.qualityGrades && (
              <div className="mt-8 overflow-x-auto rounded-xl border border-stone-200 bg-white">
                <div className="border-b border-stone-200 bg-stone-50 px-4 py-3 text-sm font-semibold text-stone-800">
                  Market-specific Quality Grades
                </div>
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-stone-100 text-left text-stone-700">
                      <th className="px-4 py-3">Market</th>
                      <th className="px-4 py-3">Purity</th>
                      <th className="px-4 py-3">Moisture</th>
                      <th className="px-4 py-3">Admixture</th>
                      <th className="px-4 py-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.qualityGrades.map((grade) => (
                      <tr key={grade.market} className="border-t border-stone-200">
                        <td className="px-4 py-3 font-semibold text-stone-800">{grade.market}</td>
                        <td className="px-4 py-3 text-stone-700">{grade.purity}</td>
                        <td className="px-4 py-3 text-stone-700">{grade.moisture}</td>
                        <td className="px-4 py-3 text-stone-700">{grade.admixture}</td>
                        <td className="px-4 py-3 text-stone-700">{grade.notes}</td>
                      </tr>
                    ))}
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

            <section className="rounded-xl border border-stone-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-stone-900">Processing Standards</h2>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                <li>Sortex cleaned for export-grade uniformity</li>
                <li>NABL tested lots and COA available</li>
                <li>Fumigation available based on destination</li>
              </ul>
            </section>

            <section className="rounded-xl border border-stone-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-stone-900">Packaging Options</h2>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                <li>25kg PP bags</li>
                <li>50kg PP bags</li>
                <li>Retail packs on request</li>
              </ul>
            </section>

            <div className="flex flex-wrap gap-3">
              <a
                href={specSheetUrl}
                className="rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
              >
                Download Product Specification Sheet
              </a>
              <Link
                to={quoteUrl}
                className="rounded-full border border-amber-600 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50"
              >
                Request Quote for This Product
              </Link>
            </div>
          </aside>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-stone-900">Related Products</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {relatedProducts.map((related) => (
              <article
                key={related.slug}
                className="rounded-xl border border-stone-200 bg-white p-4"
              >
                <h3 className="font-semibold text-stone-900">{related.name}</h3>
                <p className="mt-1 text-sm text-stone-600">{related.keySpec}</p>
                <Link
                  to={`/${related.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-amber-700 hover:text-amber-800"
                >
                  View Specifications
                </Link>
              </article>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default ProductDetailPage;
