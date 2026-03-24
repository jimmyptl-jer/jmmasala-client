import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import {
  COMPANY,
  PRODUCTS,
  SITE_URL,
  buildGeneralInquiryMessage,
  buildWhatsAppUrl,
} from "@/data/siteData";

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
    () => buildWhatsAppUrl(COMPANY.whatsappMessage),
    [],
  );

  const productWhatsappLink = useMemo(() => {
    if (!prefilledProduct) {
      return buildWhatsAppUrl(buildGeneralInquiryMessage());
    }

    return buildWhatsAppUrl(
      `Hi JM Masala, I am interested in ${prefilledProduct}. Please share specifications, MOQ, packing options, and pricing.`,
    );
  }, [prefilledProduct]);

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
      buildWhatsAppUrl(waMessage),
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
        keywords={[
          "contact spice exporter India",
          "contact JM Masala",
          "spice export inquiry India",
          "Unjha Gujarat spice exporter contact",
          "WhatsApp spice exporter India",
          "jmmasalaexports@gmail.com",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact JM Masala",
            url: `${SITE_URL}/contact`,
            description:
              "Direct WhatsApp and email contact page for export spice inquiries with JM Masala.",
          },
          {
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
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item: `${SITE_URL}/contact`,
              },
            ],
          },
        ]}
      />

      <section className="jm-section">
        <div className="jm-container">
          <p className="jm-section-label">Contact</p>
          <h1 className="jm-section-heading">Contact JM Masala</h1>
          <p className="jm-section-subtext ml-0 max-w-2xl">
            Contact us directly on WhatsApp for the fastest response, or send us an email.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <section className="jm-surface-card p-6 lg:p-8">
              <h2 className="text-[28px] text-[var(--brand-charcoal)] text-tagline not-italic">Export Inquiry Form</h2>

              {submitted && (
                <p className="mt-4 rounded-md bg-[rgba(74,103,65,0.12)] p-3 text-sm text-[var(--brand-forest)]">
                  Your inquiry has been opened in WhatsApp and email draft view.
                </p>
              )}

              {prefilledProduct && (
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={productWhatsappLink} target="_blank" rel="noreferrer" className="jm-btn jm-btn--primary">
                    WhatsApp About {prefilledProduct}
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="jm-btn jm-btn--outline">
                    Email Us Directly
                  </a>
                </div>
              )}

              <form id="inquiry-form" className="mt-5 grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
                <input
                  required
                  value={form.fullName}
                  onChange={(event) => setForm({ ...form, fullName: event.target.value })}
                  placeholder="Full Name"
                  className="jm-input"
                />
                <input
                  required
                  value={form.companyName}
                  onChange={(event) => setForm({ ...form, companyName: event.target.value })}
                  placeholder="Company Name"
                  className="jm-input"
                />
                <input
                  required
                  value={form.country}
                  onChange={(event) => setForm({ ...form, country: event.target.value })}
                  placeholder="Country"
                  className="jm-input"
                />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  placeholder="Email Address"
                  className="jm-input"
                />
                <input
                  required
                  value={form.whatsappNumber}
                  onChange={(event) => setForm({ ...form, whatsappNumber: event.target.value })}
                  placeholder="WhatsApp Number"
                  className="jm-input"
                />
                <select
                  required
                  value={form.productOfInterest}
                  onChange={(event) => setForm({ ...form, productOfInterest: event.target.value })}
                  className="jm-input"
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
                  onChange={(event) => setForm({ ...form, estimatedMonthlyQuantity: event.target.value })}
                  placeholder="Estimated Monthly Quantity"
                  className="jm-input"
                />
                <select
                  required
                  value={form.preferredPaymentTerms}
                  onChange={(event) => setForm({ ...form, preferredPaymentTerms: event.target.value })}
                  className="jm-input"
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
                  className="jm-input md:col-span-2"
                />

                <input
                  type="text"
                  value={form.website}
                  onChange={(event) => setForm({ ...form, website: event.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button type="submit" className="jm-btn jm-btn--primary md:col-span-2">
                  Send on WhatsApp
                </button>
              </form>
            </section>

            <aside className="space-y-6">
              <section className="jm-surface-card p-6 text-sm text-[var(--brand-forest)]">
                <h2 className="text-[24px] text-[var(--brand-charcoal)] text-tagline not-italic">Direct Contact Details</h2>
                <div className="jm-info-list mt-4">
                  <div className="jm-info-item">
                    <p>{COMPANY.phones[0]}</p>
                    <p>{COMPANY.phones[1]}</p>
                  </div>
                  <div className="jm-info-item">
                    <a href={`mailto:${COMPANY.email}`} className="text-[var(--brand-gold)] hover:text-[var(--brand-deep-green)]">
                      {COMPANY.email}
                    </a>
                  </div>
                  <div className="jm-info-item">
                    <p>{COMPANY.addressLine}</p>
                  </div>
                </div>
                <a href={whatsappLink} className="mt-5 inline-flex jm-btn jm-btn--secondary">
                  WhatsApp Direct Chat
                </a>
                <a href={`mailto:${COMPANY.email}`} className="mt-3 inline-flex jm-btn jm-btn--outline">
                  Send Email
                </a>
              </section>

              <section className="jm-surface-card overflow-hidden">
                <iframe
                  title="Unjha office map"
                  src="https://www.google.com/maps?q=Unjha%2C+Gujarat&output=embed"
                  className="h-72 w-full"
                  loading="lazy"
                />
              </section>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
