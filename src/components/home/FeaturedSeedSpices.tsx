import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS_BY_SLUG } from "@/data/siteData";
import "@/styles/home-seeds.css";

const SLUGS = [
  "cumin-seeds-exporter-india",
  "coriander-seeds-exporter-india",
  "fennel-seeds-exporter-india",
  "sesame-seeds-exporter-india",
  "ajwain-seeds-exporter-india",
  "mustard-seeds-exporter-india",
] as const;

const FLAGSHIP = "cumin-seeds-exporter-india";

export default function FeaturedSeedSpices(): JSX.Element {
  const products = SLUGS.map((slug) => PRODUCTS_BY_SLUG[slug]).filter(Boolean);

  return (
    <section
      id="seed-spices"
      className="jmh-section jmh-section--ivory"
      aria-labelledby="jmh-seeds-title"
    >
      <div className="jmh-container">
        <p className="jmh-eyebrow">Export range</p>
        <h2 id="jmh-seeds-title" className="jmh-h2">
          Our Seed Spices
        </h2>

        <ul className="jmh-seeds-grid">
          {products.map((p) => (
            <li key={p.slug} className="jmh-card jmh-seeds-card">
              <div className="jmh-seeds-media">
                <img
                  src={p.imageUrl}
                  alt={`${p.name} for export`}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="jmh-seeds-img"
                />
                {p.slug === FLAGSHIP && (
                  <span className="jmh-seeds-tag">Flagship export</span>
                )}
              </div>
              <div className="jmh-seeds-body">
                <h3 className="jmh-seeds-name">{p.name}</h3>
                <p className="jmh-seeds-desc">{p.shortDescription}</p>
                <div className="jmh-seeds-links">
                  <Link to={`/${p.slug}`} className="jmh-btn jmh-btn--outline">
                    View specifications
                  </Link>
                  <Link
                    to={`/contact?product=${encodeURIComponent(p.name)}#inquiry-form`}
                    className="jmh-seeds-link"
                  >
                    Request pricing
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="jmh-seeds-all">
          <Link to="/products" className="jmh-seeds-link">
            View all products
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
