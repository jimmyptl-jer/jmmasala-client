import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS_BY_SLUG } from "@/data/siteData";
import "@/styles/home-seeds.css";

const FEATURED = [
  { slug: "cumin-seeds-exporter-india", blurb: "Aromatic and high-quality cumin seeds for global markets." },
  { slug: "coriander-seeds-exporter-india", blurb: "Premium coriander seeds in multiple grades." },
  { slug: "fennel-seeds-exporter-india", blurb: "Naturally aromatic fennel seeds for bulk supply." },
  { slug: "sesame-seeds-exporter-india", blurb: "High-quality sesame seeds for food applications." },
  { slug: "ajwain-seeds-exporter-india", blurb: "Pure and natural ajwain seeds for international buyers." },
  { slug: "mustard-seeds-exporter-india", blurb: "Quality mustard seeds in bulk quantities." },
] as const;

export default function FeaturedSeedSpices(): JSX.Element {
  const items = FEATURED.flatMap((f) => {
    const p = PRODUCTS_BY_SLUG[f.slug];
    return p ? [{ ...f, product: p }] : [];
  });

  return (
    <section
      id="seed-spices"
      className="jmh-section jmh-section--ivory"
      aria-labelledby="jmh-seeds-title"
    >
      <div className="jmh-container">
        <div className="jmh-seeds-head">
          <div>
            <p className="jmh-eyebrow">Our Products</p>
            <h2 id="jmh-seeds-title" className="jmh-h2">
              High-Quality Indian Spices
            </h2>
            <p className="jmh-seeds-intro">
              We supply a range of premium Indian spices and seeds to global markets.
            </p>
          </div>
          <Link to="/products" className="jmh-btn jmh-btn--outline jmh-seeds-all">
            View All Products
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <ul className="jmh-seeds-grid">
          {items.map(({ slug, blurb, product: p }) => (
            <li key={slug} className="jmh-seeds-card">
              <Link to={`/${slug}`} className="jmh-seeds-media-link">
                <span className="jmh-seeds-media">
                  <img
                    src={p.imageUrl}
                    alt={`${p.name} in a wooden bowl, available for export`}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="jmh-seeds-img"
                  />
                </span>
                <h3 className="jmh-seeds-name">{p.name}</h3>
              </Link>
              <div className="jmh-seeds-body">
                <p className="jmh-seeds-desc">{blurb}</p>
                <Link
                  to={`/${slug}#quotation-form`}
                  className="jmh-seeds-cta"
                  aria-label={`Request pricing for ${p.name}`}
                >
                  Request Pricing
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
