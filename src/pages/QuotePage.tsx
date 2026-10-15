import QuotationForm from "@/components/quote/QuotationForm";
import { COMPANY } from "@/data/siteData";

const QuotePage = () => {
  return (
    <section className="jm-section">
      <div className="jm-container max-w-4xl">
        <div className="jm-surface-card p-8 lg:p-10">
          <p className="jm-section-label text-center">Quote Request</p>
          <h1 className="jm-section-heading text-center">Get a Quote</h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-body text-[var(--brand-forest)]">
            Tell us about your spice requirements and we will get back to you with a
            personalized quote.
          </p>

          <div className="mt-8">
            <QuotationForm id="quotation-form" sourcePage="quote" />
          </div>

          <div className="mt-10 text-center text-sm text-[var(--brand-forest)]">
            <p>
              Prefer direct contact? Email us at{" "}
              <a href={`mailto:${COMPANY.email}`} className="font-semibold text-[var(--brand-gold)] underline">
                {COMPANY.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotePage;
