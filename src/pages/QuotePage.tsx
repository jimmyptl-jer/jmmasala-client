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

          <form className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col">
              <label className="jm-form-label">Full Name</label>
              <input type="text" placeholder="Enter your name" className="jm-input" required />
            </div>

            <div className="flex flex-col">
              <label className="jm-form-label">Email Address</label>
              <input type="email" placeholder="Enter your email" className="jm-input" required />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="jm-form-label">Product / Spice Name</label>
              <input
                type="text"
                placeholder="Example: Cumin Seeds, Turmeric Powder"
                className="jm-input"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="jm-form-label">Quantity Required</label>
              <input type="text" placeholder="e.g. 100 kg, 1 ton" className="jm-input" />
            </div>

            <div className="flex flex-col">
              <label className="jm-form-label">Country of Import</label>
              <input type="text" placeholder="e.g. Canada, UAE, UK" className="jm-input" />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="jm-form-label">Additional Details</label>
              <textarea
                rows={4}
                placeholder="Any packaging preferences, delivery timeline, or special notes"
                className="jm-input"
              />
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button type="submit" className="jm-btn jm-btn--primary">
                Submit Quote Request
              </button>
            </div>
          </form>

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
