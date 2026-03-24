import { FormEvent, useState } from "react";
import Seo from "@/components/Seo";

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
  en: "We supply certified premium spices across India for wholesale, distribution, retail chains, and white-label packs.",
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
        title="Domestic Supply India | JM Masala for Wholesalers and Distributors"
        description="Premium spices for Indian wholesalers, distributors, retailers, and white-label partners."
        path="/domestic-supply-india"
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
              Domestic Certifications
            </h2>
            <p className="mt-3 text-body text-[var(--brand-forest)]">
              FSSAI licensed operations with quality-compliant handling. Additional
              certification documents are shared as required for procurement onboarding.
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
