import { Link } from "react-router-dom";
import { ArrowRight, Award, Leaf, Package, Ship } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import heroImageSmall from "@/assets/hero-bg-sm.jpg";
import "@/styles/home-hero.css";

const HIGHLIGHTS = [
  { icon: Leaf, lines: ["Sourced from", "trusted regions in India"] },
  { icon: Award, lines: ["Quality-focused", "cleaning and sorting options"] },
  { icon: Package, lines: ["Bulk and export", "packaging available"] },
  { icon: Ship, lines: ["Support for documentation", "and global shipments"] },
];

export default function HomeHero(): JSX.Element {
  return (
    <section className="jmh-hero" aria-labelledby="jmh-hero-title">
      <div className="jmh-hero-media">
        <img
          src={heroImage}
          srcSet={`${heroImageSmall} 960w, ${heroImage} 1920w`}
          sizes="100vw"
          alt="Rustic wooden bowls of cumin, coriander and fennel seeds on a dark green background"
          width={1920}
          height={768}
          {...{ fetchpriority: "high" }}
          decoding="async"
          className="jmh-hero-img"
        />
        <div className="jmh-hero-overlay" aria-hidden="true" />
        <div className="jmh-container jmh-hero-inner">
          <div className="jmh-hero-content">
            <p className="jmh-eyebrow jmh-hero-eyebrow">Trusted Indian Spice Exporter</p>
            <h1 id="jmh-hero-title" className="jmh-h1">
              Premium Indian Spices for Global Markets
            </h1>
            <p className="jmh-lead jmh-hero-text">
              Quality-focused sourcing and supply of Indian spices and seeds for importers,
              wholesalers, distributors and food manufacturers across the world.
            </p>
            <div className="jmh-hero-actions">
              <a href="#inquiry-rfq" className="jmh-btn jmh-btn--primary">
                Request a Bulk Quotation
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <Link to="/products" className="jmh-btn jmh-btn--outline-light">
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="jmh-hero-strip">
        <ul className="jmh-container jmh-hero-features" aria-label="Highlights">
          {HIGHLIGHTS.map(({ icon: Icon, lines }) => (
            <li key={lines[0]} className="jmh-hero-feature">
              <Icon size={36} strokeWidth={1.25} aria-hidden="true" />
              <span>
                {lines[0]}
                <br />
                {lines[1]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
