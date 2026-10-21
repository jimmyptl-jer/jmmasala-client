import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import QuotationForm from "@/components/quote/QuotationForm";
import { INTENTS, getIntent } from "@/lib/enquiryIntent";
import { getOriginPath } from "@/lib/originPath";
import { useHydrated } from "@/lib/useHydrated";
import { COMPANY, SITE_URL, buildWhatsAppUrl } from "@/data/siteData";

const ContactPage = () => {
  const [params] = useSearchParams();
  // The prerendered /contact page has no query string. useHydrated is false on the server and during hydration,
  // so the first client render matches the server HTML, and later navigations get the intent immediately.
  const hydrated = useHydrated();
  const prefilledProduct = hydrated ? (params.get("product") ?? "") : "";
  const intentKey = hydrated ? (params.get("intent") ?? "") : "";
  const intent = getIntent(intentKey);
  // Where the visitor came from, for lead attribution. Read once, when this page mounts.
  const [fromPage] = useState(() => {
    const origin = getOriginPath();
    if (origin) return origin;
    try {
      const ref = document.referrer ? new URL(document.referrer) : null;
      return ref && ref.origin === window.location.origin ? ref.pathname : "";
    } catch {
      return "";
    }
  });

  const whatsappLink = useMemo(
    () => buildWhatsAppUrl(COMPANY.whatsappMessage),
    [],
  );

  const quickMessage = (intent ?? INTENTS.quote).quickMessage(prefilledProduct || undefined);
  const quickWhatsappLink = useMemo(() => buildWhatsAppUrl(quickMessage), [quickMessage]);
  const quickMailLink = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
    `${(intent ?? INTENTS.quote).emailSubjectPrefix}: ${prefilledProduct || "spices"}`,
  )}&body=${encodeURIComponent(quickMessage)}`;

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
          <h1 className="jm-heading-1">Contact JM Masala</h1>
          <p className="jm-section-subtext ml-0 max-w-2xl">
            Contact us directly on WhatsApp for the fastest response, or send us an email.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <section className="jm-surface-card p-6 lg:p-8">
              <QuotationForm
                id="inquiry-form"
                defaultProduct={prefilledProduct}
                defaultPackaging={intent?.packaging}
                requirePackaging={intent?.requirePackaging}
                heading={intent?.heading}
                introText={intent?.introText}
                messageIntro={intent?.intro}
                submitLabel={intent?.submitLabel}
                emailSubjectPrefix={intent?.emailSubjectPrefix}
                showPaymentTerms={!intent?.hidePaymentTerms}
                sourcePage={intent ? "contact?intent=" + intentKey : "contact"}
                fromPage={fromPage}
              />
              {(prefilledProduct || (intent && intentKey !== "quote")) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={quickWhatsappLink} target="_blank" rel="noopener noreferrer" className="jm-btn jm-btn--primary">
                    {prefilledProduct ? `WhatsApp About ${prefilledProduct}` : "WhatsApp Us About This"}
                  </a>
                  <a href={quickMailLink} className="jm-btn jm-btn--outline">
                    Email Us Directly
                  </a>
                </div>
              )}
            </section>

            <aside className="space-y-6">
              <section className="jm-surface-card p-6 text-sm text-[var(--brand-forest)]">
                <h2 className="text-xl font-bold text-[var(--brand-charcoal)]">Direct Contact Details</h2>
                <div className="jm-info-list mt-4">
                  <div className="jm-info-item">
                    {COMPANY.phones.map((phone) => (
                      <p key={phone}>
                        <a href={`tel:${phone.replace(/[^+d]/g, "")}`} className="inline-flex min-h-[44px] items-center">
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                  <div className="jm-info-item">
                    <a href={`mailto:${COMPANY.email}`} className="inline-flex min-h-[44px] items-center text-[var(--brand-forest)] underline underline-offset-2 hover:text-[var(--brand-deep-green)]">
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
