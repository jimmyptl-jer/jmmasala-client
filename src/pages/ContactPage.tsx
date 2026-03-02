import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { COMPANY, PRODUCTS, SITE_URL } from "@/data/siteData";

type ContactFormState = {
  fullName: string;
  companyName: string;
  country: string;
  email: string;
  whatsappNumber: string;
  productOfInterest: string;
  estimatedMonthlyQuantity: string;
  preferredPaymentTerms: string;
  message: string;
  website: string;
};

const paymentTerms = ["LC at Sight", "LC 30 Days", "TT Advance", "Other"];

const ContactPage = () => {
  const [params] = useSearchParams();
  const prefilledProduct = params.get("product") ?? "";
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<ContactFormState>({
    fullName: "",
    companyName: "",
    country: "",
    email: "",
    whatsappNumber: "",
    productOfInterest: prefilledProduct,
    estimatedMonthlyQuantity: "",
    preferredPaymentTerms: "",
    message: "",
    website: "",
  });

  const whatsappLink = useMemo(
    () =>
      `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
        COMPANY.whatsappMessage,
      )}`,
    [],
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.website.trim()) {
      return;
    }

    const mailBody = [
      `Full Name: ${form.fullName}`,
      `Company Name: ${form.companyName}`,
      `Country: ${form.country}`,
      `Email: ${form.email}`,
      `WhatsApp Number: ${form.whatsappNumber}`,
      `Product of Interest: ${form.productOfInterest}`,
      `Estimated Monthly Quantity: ${form.estimatedMonthlyQuantity}`,
      `Preferred Payment Terms: ${form.preferredPaymentTerms}`,
      `Message: ${form.message}`,
    ].join("\n");

    const mailtoUrl = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      "New Export Inquiry - JM Masala Website",
    )}&body=${encodeURIComponent(mailBody)}`;

    const waMessage = [
      "New website inquiry:",
      `Name: ${form.fullName}`,
      `Company: ${form.companyName}`,
      `Product: ${form.productOfInterest}`,
      `Qty: ${form.estimatedMonthlyQuantity}`,
      `Payment terms: ${form.preferredPaymentTerms}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.whatsappNumber}`,
    ].join("\n");

    window.open(
      `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(waMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Contact JM Masala | Indian Spice Export Inquiries"
        description="Send your spice sourcing inquiry to JM Masala. We respond quickly with specifications, pricing, and shipment support."
        path="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "JM Masala Exports",
          url: `${SITE_URL}/contact`,
          email: COMPANY.email,
          telephone: COMPANY.phones,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Near APMC Market Yard",
            addressLocality: "Unjha",
            addressRegion: "Gujarat",
            postalCode: "384170",
            addressCountry: "IN",
          },
        }}
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="font-serif text-4xl font-bold text-stone-900">Contact JM Masala</h1>
        <p className="mt-3 text-stone-700">
          We respond to all inquiries within 2 hours during 7AM to 8PM IST
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-stone-900">Export Inquiry Form</h2>

            {submitted && (
              <p className="mt-4 rounded-md bg-green-50 p-3 text-sm text-green-700">
                Inquiry submitted. Email and WhatsApp notification flows have been triggered.
              </p>
            )}

            <form id="inquiry-form" className="mt-5 grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
              <input
                required
                value={form.fullName}
                onChange={(event) => setForm({ ...form, fullName: event.target.value })}
                placeholder="Full Name"
                className="rounded-md border border-stone-300 px-3 py-2"
              />
              <input
                required
                value={form.companyName}
                onChange={(event) => setForm({ ...form, companyName: event.target.value })}
                placeholder="Company Name"
                className="rounded-md border border-stone-300 px-3 py-2"
              />
              <input
                required
                value={form.country}
                onChange={(event) => setForm({ ...form, country: event.target.value })}
                placeholder="Country"
                className="rounded-md border border-stone-300 px-3 py-2"
              />
              <input
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="Email Address"
                className="rounded-md border border-stone-300 px-3 py-2"
              />
              <input
                required
                value={form.whatsappNumber}
                onChange={(event) => setForm({ ...form, whatsappNumber: event.target.value })}
                placeholder="WhatsApp Number"
                className="rounded-md border border-stone-300 px-3 py-2"
              />
              <select
                required
                value={form.productOfInterest}
                onChange={(event) =>
                  setForm({ ...form, productOfInterest: event.target.value })
                }
                className="rounded-md border border-stone-300 px-3 py-2"
              >
                <option value="">Product of Interest</option>
                {PRODUCTS.map((product) => (
                  <option key={product.slug} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
              <input
                required
                value={form.estimatedMonthlyQuantity}
                onChange={(event) =>
                  setForm({ ...form, estimatedMonthlyQuantity: event.target.value })
                }
                placeholder="Estimated Monthly Quantity"
                className="rounded-md border border-stone-300 px-3 py-2"
              />
              <select
                required
                value={form.preferredPaymentTerms}
                onChange={(event) =>
                  setForm({ ...form, preferredPaymentTerms: event.target.value })
                }
                className="rounded-md border border-stone-300 px-3 py-2"
              >
                <option value="">Preferred Payment Terms</option>
                {paymentTerms.map((term) => (
                  <option key={term} value={term}>
                    {term}
                  </option>
                ))}
              </select>
              <textarea
                required
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                placeholder="Message"
                rows={5}
                className="rounded-md border border-stone-300 px-3 py-2 md:col-span-2"
              />

              <input
                type="text"
                value={form.website}
                onChange={(event) => setForm({ ...form, website: event.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                className="md:col-span-2 rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
              >
                Send Inquiry
              </button>
            </form>
          </section>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-stone-200 bg-white p-6 text-sm text-stone-700">
              <h2 className="text-xl font-semibold text-stone-900">Direct Contact Details</h2>
              <p className="mt-3">{COMPANY.phones[0]}</p>
              <p>{COMPANY.phones[1]}</p>
              <p className="mt-2">
                <a href={`mailto:${COMPANY.email}`} className="text-amber-700 hover:text-amber-800">
                  {COMPANY.email}
                </a>
              </p>
              <p className="mt-2">{COMPANY.addressLine}</p>
              <a
                href={whatsappLink}
                className="mt-4 inline-block rounded-full bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
              >
                WhatsApp Direct Chat
              </a>
            </section>

            <section className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <iframe
                title="Unjha office map"
                src="https://www.google.com/maps?q=Unjha%2C+Gujarat&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </section>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
