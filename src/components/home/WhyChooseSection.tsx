import type { LucideIcon } from "lucide-react";
import { Cog, FileText, Package, Sprout } from "lucide-react";
import sourcingImage from "@/assets/why-sourcing.jpg";
import sortingImage from "@/assets/why-sorting.jpg";
import packagingImage from "@/assets/why-packaging.jpg";
import logisticsImage from "@/assets/why-logistics.jpg";
import "@/styles/home-trust.css";

type Reason = {
  title: string;
  text: string;
  Icon: LucideIcon;
  image: string;
  alt: string;
};

const REASONS: Reason[] = [
  {
    title: "Indian Spice Sourcing",
    text: "We source high-quality spices and seeds from trusted farming regions across India.",
    Icon: Sprout,
    image: sourcingImage,
    alt: "Rows of flowering coriander plants in a green farm field under a blue sky",
  },
  {
    title: "Cleaning & Sorting Options",
    text: "Machine-cleaned and Sortex-cleaned options available as per buyer requirements.",
    Icon: Cog,
    image: sortingImage,
    alt: "Workers in hairnets, masks and gloves sorting seeds on a conveyor in a processing hall",
  },
  {
    title: "Export Packaging",
    text: "Bulk packaging options including 25 kg, 50 kg bags and customized packaging as per requirements.",
    Icon: Package,
    image: packagingImage,
    alt: "Large white bulk bags stacked on pallets in a warehouse while a forklift loads a shipping container",
  },
  {
    title: "Documentation & Logistics",
    text: "Assistance with export documentation and shipment coordination to global destinations.",
    Icon: FileText,
    image: logisticsImage,
    alt: "Container ship and port cranes at sunset with sacks of seeds in the foreground",
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
          {REASONS.map(({ title, text, Icon, image, alt }) => (
            <li key={title} className="jmh-why-item">
              <img
                src={image}
                alt={alt}
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="jmh-why-photo"
              />
              <div className="jmh-why-row">
                <span className="jmh-why-icon">
                  <Icon size={40} strokeWidth={1} aria-hidden />
                </span>
                <div>
                  <h3 className="jmh-why-title">{title}</h3>
                  <p className="jmh-why-text">{text}</p>
                </div>
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
