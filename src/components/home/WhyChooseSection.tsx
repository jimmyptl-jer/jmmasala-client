import type { LucideIcon } from "lucide-react";
import { MapPin, Sprout, PackageCheck, Warehouse, Truck, Tags, FlaskConical } from "lucide-react";
import "@/styles/home-trust.css";

type Reason = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

const REASONS: Reason[] = [
  {
    title: "Based in Unjha",
    text: "Sourcing and operations run from the APMC Market Yard, Unjha, Gujarat.",
    Icon: MapPin,
  },
  {
    title: "Cumin with defined export grades",
    text: "Cumin is our flagship export, offered in four commercial grades.",
    Icon: Sprout,
  },
  {
    title: "Trial order from 1 MT",
    text: "Start with a trial order of a minimum of 1 MT before planning larger volumes.",
    Icon: PackageCheck,
  },
  {
    title: "Up to 200 MT per month",
    text: "Monthly supply capacity of up to 200 MT for bulk and wholesale buyers.",
    Icon: Warehouse,
  },
  {
    title: "Dispatch in 1-5 days",
    text: "Orders are dispatched 1-5 days after order confirmation.",
    Icon: Truck,
  },
  {
    title: "Private label and retail packs",
    text: "Private-label and retail packing are available on request.",
    Icon: Tags,
  },
  {
    title: "Samples can be arranged",
    text: "Ask for a sample so you can evaluate the product before you order.",
    Icon: FlaskConical,
  },
];

export default function WhyChooseSection(): JSX.Element {
  return (
    <section className="jmh-section jmh-section--ivory" aria-labelledby="jmh-why-heading">
      <div className="jmh-container">
        <h2 id="jmh-why-heading" className="jmh-h2">
          Why Choose JM Masala
        </h2>
        <p className="jmh-lead">
          JM Masala Trading LLP supplies spices and seeds for export and bulk wholesale from Unjha, Gujarat.
        </p>
        <ul className="jmh-why-grid">
          {REASONS.map(({ title, text, Icon }) => (
            <li key={title} className="jmh-card jmh-why-card">
              <span className="jmh-why-icon">
                <Icon size={24} aria-hidden />
              </span>
              <h3 className="jmh-why-title">{title}</h3>
              <p className="jmh-why-text">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
