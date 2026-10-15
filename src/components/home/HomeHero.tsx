import { Link } from "react-router-dom";
import { ArrowRight, Boxes, Clock, Package, Tag } from "lucide-react";
import heroImage from "@/assets/hero-spices.jpg";
import "@/styles/home-hero.css";

const FACTS = [
  { icon: Package, text: "Trial minimum order 1 MT" },
  { icon: Boxes, text: "Monthly supply up to 200 MT" },
  { icon: Clock, text: "Dispatch 1-5 days after order confirmation" },
  { icon: Tag, text: "Private label available" },
];

export default function HomeHero(): JSX.Element {
  return (
    <section className="jmh-hero" aria-labelledby="jmh-hero-title">
      {/* One composite photo of the whole range, darkened by the overlay below so the text stays readable. */}
      <img
        src={heroImage}
        alt="Whole spices and seeds supplied by JM Masala: cumin, coriander, fennel, sesame, ajwain, mustard, chillies, turmeric, pepper, cardamom, ginger and curry leaf"
        width={1918}
        height={1080}
        {...{ fetchpriority: "high" }}
        decoding="async"
        className="jmh-hero-img"
      />
      <div className="jmh-hero-overlay" aria-hidden="true" />
      <div className="jmh-container jmh-hero-inner">
        <p className="jmh-eyebrow" style={{ color: "var(--jmh-gold)" }}>
          JM Masala Trading LLP · Unjha, Gujarat
        </p>
        <h1 id="jmh-hero-title" className="jmh-h1">
          Premium Indian Spices for Global Markets
        </h1>
        <p className="jmh-lead jmh-hero-text">
          Export-focused supply of whole spices and seeds from Unjha, Gujarat,
          with cumin as our flagship, in bulk packing and private label on request.
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
        <ul className="jmh-hero-facts" aria-label="Supply terms">
          {FACTS.map(({ icon: Icon, text }) => (
            <li key={text} className="jmh-hero-fact">
              <Icon size={20} aria-hidden="true" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
