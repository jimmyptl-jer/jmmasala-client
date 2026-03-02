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

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-serif text-3xl font-bold text-stone-900">
            JM Masala - Premium Spices for Indian Wholesalers, Distributors and Retailers
          </h1>
          <div className="flex rounded-full border border-stone-300 p-1 text-sm">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 ${
                language === "en" ? "bg-amber-600 text-white" : "text-stone-700"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-3 py-1 ${
                language === "hi" ? "bg-amber-600 text-white" : "text-stone-700"
              }`}
            >
              Hindi
            </button>
          </div>
        </div>

        {language === "en" ? (
          <p className="mt-4 text-stone-700">
            We supply certified premium spices across India for wholesale, distribution,
            retail chains, and white-label packs.
          </p>
        ) : (
          <p className="mt-4 text-stone-700">
            हम पूरे भारत में थोक, डिस्ट्रीब्यूटर, रिटेल चेन और व्हाइट लेबल ब्रांड के लिए
            प्रमाणित प्रीमियम मसाले सप्लाई करते हैं।
          </p>
        )}

        <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            Products for Domestic Market
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {retailProducts.map((item) => (
              <li key={item} className="rounded-md border border-stone-200 px-3 py-2 text-sm text-stone-700">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-semibold text-stone-900">Domestic Certifications</h2>
          <p className="mt-3 text-stone-700">
            FSSAI licensed operations with quality-compliant handling. Additional
            certification documents are shared as required for procurement onboarding.
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-stone-900">White Label Manufacturing</h2>
          <p className="mt-3 text-stone-700">We pack under your brand.</p>
        </section>

        <section className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            Become a JM Masala Distributor in Your District
          </h2>

          {submitted ? (
            <p className="mt-4 rounded-md bg-green-50 p-3 text-sm text-green-700">
              Domestic inquiry submitted. Our team will contact you shortly.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-4 grid gap-4 md:grid-cols-2">
              <input type="text" name="name" placeholder="Name" required className="rounded-md border border-stone-300 px-3 py-2" />
              <input type="text" name="company" placeholder="Company" required className="rounded-md border border-stone-300 px-3 py-2" />
              <input type="text" name="city" placeholder="City" required className="rounded-md border border-stone-300 px-3 py-2" />
              <input type="text" name="state" placeholder="State" required className="rounded-md border border-stone-300 px-3 py-2" />
              <select name="businessType" required className="rounded-md border border-stone-300 px-3 py-2">
                <option value="">Type of Business</option>
                <option value="Wholesaler">Wholesaler</option>
                <option value="Distributor">Distributor</option>
                <option value="Retailer">Retailer</option>
                <option value="White Label">White Label</option>
              </select>
              <input type="text" name="productsRequired" placeholder="Products Required" required className="rounded-md border border-stone-300 px-3 py-2" />
              <input type="text" name="monthlyQuantity" placeholder="Monthly Quantity" required className="rounded-md border border-stone-300 px-3 py-2 md:col-span-2" />

              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              <button type="submit" className="md:col-span-2 rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700">
                Submit Domestic Inquiry
              </button>
            </form>
          )}
        </section>
      </section>
    </>
  );
};

export default DomesticSupplyPage;
