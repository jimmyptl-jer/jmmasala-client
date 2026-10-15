import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { SITE_URL } from "@/data/siteData";

type Language = "en" | "hi";

const retailProducts = [
  "Cumin Seeds - 100g / 500g / 1kg",
  "Coriander Seeds - 100g / 500g / 1kg",
  "Fennel Seeds - 100g / 500g / 1kg",
  "Fenugreek Seeds - 100g / 500g / 1kg",
  "Turmeric Powder - 100g / 500g / 1kg",
  "Red Chilli Powder - 100g / 500g / 1kg",
  "Black Pepper - 100g / 250g / 1kg",
  "Cardamom - 50g / 100g / 250g",
  "Psyllium Husk - 100g / 250g / 500g",
];

const copyByLanguage: Record<Language, string> = {
  en: "We supply premium spices across India for wholesale, distribution, retail chains, and white-label packs.",
  hi: "Hum poore Bharat mein thok, distributor, retail chain aur white-label brand ke liye premium masale supply karte hain.",
};

const DomesticSupplyPage = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Domestic Spice Supply India | JM Masala"
        description="Wholesale spice supply in India for distributors, processors, retailers and institutional buyers from Unjha, Gujarat. Request specifications and a quote."
        path="/domestic-supply-india"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE_URL}/domestic-supply-india#webpage`,
            name: "Domestic Supply India",
            url: `${SITE_URL}/domestic-supply-india`,
            description:
              "Spices for Indian wholesalers, distributors, retailers and white-label partners from JM Masala Trading LLP.",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            publisher: { "@id": `${SITE_URL}/#organization` },
            breadcrumb: { "@id": `${SITE_URL}/domestic-supply-india#breadcrumb` },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `${SITE_URL}/domestic-supply-india#breadcrumb`,
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Domestic Supply India",
                item: `${SITE_URL}/domestic-supply-india`,
              },
            ],
          },
        ]}
      />

      <section className="jm-section">
        <div className="jm-container">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="jm-section-heading max-w-4xl">
              JM Masala for Indian Wholesalers, Distributors, and Retailers
            </h1>
            <div className="flex rounded-full border border-[var(--brand-gold-pale)] bg-[var(--brand-warm-white)] p-1 text-sm">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1 ${
                  language === "en"
                    ? "bg-[var(--brand-gold)] text-[var(--brand-deep-green)]"
                    : "text-[var(--brand-forest)]"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage("hi")}
                className={`rounded-full px-3 py-1 ${
                  language === "hi"
                    ? "bg-[var(--brand-gold)] text-[var(--brand-deep-green)]"
                    : "text-[var(--brand-forest)]"
                }`}
              >
                Hindi
              </button>
            </div>
          </div>

          <p className="mt-4 text-body text-[var(--brand-forest)]">{copyByLanguage[language]}</p>

          <section className="jm-surface-card mt-8 p-6">
            <h2 className="text-tagline not-italic text-[28px] text-[var(--brand-charcoal)]">
              Products for Domestic Market
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {retailProducts.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-3 py-2 text-sm text-[var(--brand-forest)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="jm-soft-panel mt-6 p-6">
            <h2 className="text-tagline not-italic text-[28px] text-[var(--brand-charcoal)]">
              Quality Documents
            </h2>
            <p className="mt-3 text-body text-[var(--brand-forest)]">
              Compliance and quality documents can be requested for procurement
              onboarding. See our <Link to="/quality-certifications" className="underline">quality and documentation</Link> page.
            </p>
          </section>

          <section className="jm-surface-card mt-6 p-6">
            <h2 className="text-tagline not-italic text-[28px] text-[var(--brand-charcoal)]">
              Seed Spices and Sourcing Pages
            </h2>
            <p className="mt-3 text-body text-[var(--brand-forest)]">
              Explore{" "}
              <Link to="/cumin-seeds-exporter-india" className="underline">cumin seeds (jeera)</Link>,{" "}
              <Link to="/coriander-seeds-exporter-india" className="underline">coriander seeds (dhania)</Link>,{" "}
              <Link to="/fennel-seeds-exporter-india" className="underline">fennel seeds (saunf)</Link>,{" "}
              <Link to="/sesame-seeds-exporter-india" className="underline">sesame seeds (til)</Link>,{" "}
              <Link to="/ajwain-seeds-exporter-india" className="underline">ajwain (carom) seeds</Link> and{" "}
              <Link to="/mustard-seeds-exporter-india" className="underline">mustard seeds (rai)</Link>.
              For origin and sourcing details see{" "}
              <Link to="/sourcing-network" className="underline">our Indian spice sourcing network</Link>,{" "}
              <Link to="/spice-exporter-gujarat" className="underline">spice exporter in Gujarat</Link> and{" "}
              <Link to="/private-label-spices" className="underline">private label spices</Link>.
            </p>
          </section>

          <section className="jm-surface-card mt-6 p-6">
            <h2 className="text-tagline not-italic text-[28px] text-[var(--brand-charcoal)]">
              White Label Manufacturing
            </h2>
            <p className="mt-3 text-body text-[var(--brand-forest)]">
              We pack under your brand with flexible SKU sizes and market-ready presentation.
            </p>
          </section>

          <section className="jm-surface-card mt-6 p-6">
            <h2 className="text-tagline not-italic text-[28px] text-[var(--brand-charcoal)]">
              Become a JM Masala Distributor in Your District
            </h2>

            {submitted ? (
              <p className="mt-4 rounded-md bg-[rgba(74,103,65,0.12)] p-3 text-sm text-[var(--brand-forest)]">
                Domestic inquiry submitted. Our team will contact you shortly.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-4 grid gap-4 md:grid-cols-2">
                <input type="text" name="name" placeholder="Name" required className="jm-input" />
                <input type="text" name="company" placeholder="Company" required className="jm-input" />
                <input type="text" name="city" placeholder="City" required className="jm-input" />
                <input type="text" name="state" placeholder="State" required className="jm-input" />
                <select name="businessType" required className="jm-input">
                  <option value="">Type of Business</option>
                  <option value="Wholesaler">Wholesaler</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Retailer">Retailer</option>
                  <option value="White Label">White Label</option>
                </select>
                <input type="text" name="productsRequired" placeholder="Products Required" required className="jm-input" />
                <input
                  type="text"
                  name="monthlyQuantity"
                  placeholder="Monthly Quantity"
                  required
                  className="jm-input md:col-span-2"
                />
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                <button type="submit" className="jm-btn jm-btn--primary md:col-span-2">
                  Submit Domestic Inquiry
                </button>
              </form>
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default DomesticSupplyPage;
