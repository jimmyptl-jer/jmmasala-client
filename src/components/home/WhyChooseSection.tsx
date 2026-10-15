import type { LucideIcon } from "lucide-react";
import { Cog, FileText, Package, Sprout } from "lucide-react";
import "@/styles/home-trust.css";

type Reason = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

const REASONS: Reason[] = [
  {
    title: "Indian Spice Sourcing",
    text: "We source high-quality spices and seeds from trusted farming regions across India.",
    Icon: Sprout,
  },
  {
    title: "Cleaning & Sorting Options",
    text: "Machine-cleaned and Sortex-cleaned options available as per buyer requirements.",
    Icon: Cog,
  },
  {
    title: "Export Packaging",
    text: "Bulk packaging options including 25 kg, 50 kg bags and customized packaging as per requirements.",
    Icon: Package,
  },
  {
    title: "Documentation & Logistics",
    text: "Assistance with export documentation and shipment coordination to global destinations.",
    Icon: FileText,
  },
];

const SUPPLY_TERMS = [
  "Trial orders from 1 MT",
  "Supply up to 200 MT per month",
  "Dispatch 1-5 days after order confirmation",
  "Private label available",
  "Samples can be arranged",
];

export default function WhyChooseSection(): JSX.Element {
  return (
    <section className="jmh-section jmh-section--white" aria-labelledby="jmh-why-heading">
      <div className="jmh-container">
        <p className="jmh-eyebrow">Why Choose JM Masala</p>
        <h2 id="jmh-why-heading" className="jmh-h2">
          A Reliable Partner for Global Buyers
        </h2>
        <ul className="jmh-why-grid">
          {REASONS.map(({ title, text, Icon }) => (
            <li key={title} className="jmh-why-item">
              <span className="jmh-why-icon">
                <Icon size={48} strokeWidth={1} aria-hidden />
              </span>
              <div>
                <h3 className="jmh-why-title">{title}</h3>
                <p className="jmh-why-text">{text}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="jmh-why-terms">
          <h3 className="jmh-why-terms-title">Supply terms</h3>
          <ul className="jmh-why-terms-list">
            {SUPPLY_TERMS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
