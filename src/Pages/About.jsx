import React from "react";
import { FaTruck, FaWarehouse, FaSeedling, FaClipboardCheck } from "react-icons/fa";
import InfoSection from "../Components/InfoSection";

const About = () => {
  return (
    <div className="container mx-auto p-8 md:p-16 bg-softBeige rounded-lg shadow-xl">
      <h1
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center font-heading"
        style={{ color: "var(--tw-color-earthBrown)" }}
      >
        About JM Masala
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Our Legacy */}
        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "var(--tw-color-limePrimary)" }}
          >
            Our Legacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            JM Masala is a trusted import-export company based in Unjha, India
            — famously known as the{" "}
            <span className="font-semibold text-limePrimary">Spice Hub of India</span>. We
            specialize in premium-quality spices, proudly supplying authentic
            and high-grade products worldwide.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With decades of experience, we serve wholesalers, retailers, and
            food industries, consistently meeting stringent{" "}
            <span className="font-semibold text-limeSecondary">
              global quality standards
            </span>
            . From sourcing the finest raw materials to hygienic processing and
            secure packaging, we ensure excellence in every shipment.
          </p>
        </section>

        {/* Global Reach */}
        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "var(--tw-color-limePrimary)" }}
          >
            Global Reach
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Exporting to over{" "}
            <span className="font-semibold text-limeSecondary">30 countries</span>, we
            provide bulk quantities while preserving purity, freshness, and the
            rich aroma of our spices. Our commitment to quality, punctual delivery,
            and customer satisfaction makes JM Masala a preferred partner in the
            global spice trade.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We emphasize{" "}
            <span className="font-semibold text-limePrimary">sustainability</span> and{" "}
            <span className="font-semibold text-limeSecondary">ethical sourcing</span>,
            building relationships based on trust and transparency.
          </p>
        </section>

        {/* Our Services */}
        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "var(--tw-color-limePrimary)" }}
          >
            Our Services
          </h2>
          <ul className="space-y-5">
            <li className="flex items-center space-x-4 text-gray-700">
              <FaSeedling className="text-limeSecondary w-6 h-6" />
              <span>
                <strong>Purchasing:</strong> Sourcing premium raw spices directly
                from APMC Market Yard, Unjha.
              </span>
            </li>
            <li className="flex items-center space-x-4 text-gray-700">
              <FaClipboardCheck className="text-limePrimary w-6 h-6" />
              <span>
                <strong>Processing:</strong> Advanced cleaning and sorting machinery
                ensure unmatched quality.
              </span>
            </li>
            <li className="flex items-center space-x-4 text-gray-700">
              <FaWarehouse className="text-limeSecondary w-6 h-6" />
              <span>
                <strong>Packaging:</strong> Secure, hygienic packaging preserving aroma
                and shelf life.
              </span>
            </li>
            <li className="flex items-center space-x-4 text-gray-700">
              <FaTruck className="text-limePrimary w-6 h-6" />
              <span>
                <strong>Logistics:</strong> Reliable, timely global delivery ensuring
                client satisfaction.
              </span>
            </li>
          </ul>
        </section>

        {/* Our Vision */}
        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
          <div>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--tw-color-limePrimary)" }}
            >
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To be a globally recognized leader in the spice industry by
              consistently delivering{" "}
              <span className="font-semibold text-limePrimary">quality</span>,{" "}
              <span className="font-semibold text-limeSecondary">reliability</span>, and{" "}
              <span className="font-semibold text-limePrimary">innovation</span>.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We strive to expand to new markets and continuously improve our
              processes to meet evolving customer needs.
            </p>
          </div>

          <button
            className="mt-6 bg-limePrimary hover:bg-limeSecondary text-white font-semibold py-3 rounded shadow transition-colors duration-300"
            onClick={() => window.location.href = "/contact"}
          >
            Contact Us
          </button>
        </section>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        <h3
          className="text-3xl font-semibold mb-8 text-center"
          style={{ color: "var(--tw-color-earthBrown)" }}
        >
          What Our Customers Say
        </h3>
        <div className="space-y-6 text-gray-700 italic text-center">
          <blockquote>
            “JM Masala’s spices are unmatched in quality and aroma. Their timely
            delivery and professional service have made them our trusted partner
            for years.”
            <footer className="mt-2 font-semibold text-limePrimary">
              — Rajesh Patel, Food Industry
            </footer>
          </blockquote>

          <blockquote>
            “Excellent sourcing and packaging. The freshness of their cumin and fennel
            seeds is amazing. Highly recommended for bulk buyers.”
            <footer className="mt-2 font-semibold text-limeSecondary">
              — Anjali Sharma, Wholesale Supplier
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="mt-12">
        <InfoSection />
      </div>
    </div>
  );
};

export default About;
