import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import QuotationForm from "@/components/quote/QuotationForm";
import {
  COMPANY,
  SITE_URL,
  buildGeneralInquiryMessage,
  buildWhatsAppUrl,
} from "@/data/siteData";

type EnquiryIntent = {
  heading: string;
  /** Must match a packaging option in QuotationForm exactly. */
  packaging?: string;
  intro: string;
};

// Where a CTA sets ?intent=..., the form is labelled for it. "quote" is the default form, so it has no entry.
const INTENTS: Record<string, EnquiryIntent> = {
  "private-label": {
    heading: "Request a Private Label Quotation",
    packaging: "Retail packs or private label (on request)",
    intro: "Hello JM Masala, I would like a private label quotation.",
  },
  sample: {
    heading: "Request a Sample and Quotation",
    intro: "Hello JM Masala, I would like to request a sample and a quotation.",
  },
  packaging: {
    heading: "Request Packaging Options and a Quotation",
    intro: "Hello JM Masala, I would like to discuss packaging options and a quotation.",
  },
};

const ContactPage = () => {
  const [params] = useSearchParams();
  // The prerendered /contact page has no query string, so the product and intent are read after
  // hydration to keep the first client render identical to the server HTML.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const prefilledProduct = hydrated ? (params.get("product") ?? "") : "";
  const intentKey = params.get("intent") ?? "";
  const intent = hydrated && Object.prototype.hasOwnProperty.call(INTENTS, intentKey) ? INTENTS[intentKey] : undefined;

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

  return (
    <>
      <Seo
        title="Contact JM Masala Trading LLP | Request a Spice Quote"
        description="Contact JM Masala Trading LLP in Unjha, Gujarat for spice specifications, samples, packing and export documentation. Phone and email."
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
            "@id": `${SITE_URL}/contact#webpage`,
            name: "Contact JM Masala Trading LLP",
            url: `${SITE_URL}/contact`,
            description:
              "Contact page for spice export inquiries to JM Masala Trading LLP, Unjha, Gujarat.",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            mainEntity: { "@id": `${SITE_URL}/#organization` },
            breadcrumb: { "@id": `${SITE_URL}/contact#breadcrumb` },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `${SITE_URL}/contact#breadcrumb`,
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
              {prefilledProduct && (
                <div className="mb-5 flex flex-wrap gap-3">
                  <a href={productWhatsappLink} target="_blank" rel="noreferrer" className="jm-btn jm-btn--primary">
                    WhatsApp About {prefilledProduct}
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="jm-btn jm-btn--outline">
                    Email Us Directly
                  </a>
                </div>
              )}

              <QuotationForm
                id="inquiry-form"
                defaultProduct={prefilledProduct}
                defaultPackaging={intent?.packaging}
                heading={intent?.heading}
                messageIntro={intent?.intro}
                sourcePage={intent ? `contact?intent=${intentKey}` : "contact"}
                showPaymentTerms
              />
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
                    <p className="font-semibold text-[var(--brand-deep-green)]">Corporate Office:</p>
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
