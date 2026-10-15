import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/siteData";
import "@/styles/home-about.css";


const AboutJmSection = (): JSX.Element => (
  <section
    id="about-jm"
    aria-labelledby="about-jm-heading"
    className="jmh-section jmh-section--white"
  >
    <div className="jmh-container">
      <div className="jmh-about-body">
        <p className="jmh-eyebrow">{COMPANY.legalName}</p>
        <h2 id="about-jm-heading" className="jmh-h2">
          About JM Masala
        </h2>
        <p>
          JM Masala Trading LLP is a spice and seed supplier based at the APMC Market Yard in
          Unjha, Gujarat. We supply spices and seeds for export and bulk wholesale, with cumin
          as our flagship export.
        </p>
        <p>
          Standard export packing is 25 kg or 50 kg PP bags with inner liner, and retail and
          private-label packs are available on request. Samples can be arranged, and private
          label is available.
        </p>
        <div className="jmh-about-links">
          <Link to="/about-jm-masala" className="jmh-btn jmh-btn--outline">
            Learn more about us
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to="/sourcing-network" className="jmh-btn jmh-btn--outline">
            Our sourcing network
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>

    </div>
  </section>
);

export default AboutJmSection;
