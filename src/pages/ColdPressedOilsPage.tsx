import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import {
  COMPANY,
  SITE_URL,
  buildGeneralInquiryMessage,
  buildProductInquiryMessage,
  buildWhatsAppUrl,
} from "@/data/siteData";
import "@/styles/product-palette.css";

const oilProducts = [
  {
    name: "Sesame Oil",
    botanicalName: "Sesamum indicum · Til Tel",
    description: "Cold pressed in Unjha, Gujarat",
    themeClass: "oil-card--sesame",
    accentColor: "var(--brand-gold)",
    bandColor: "var(--brand-gold)",
    volume: "100ml / 250ml / 500ml",
    benefits: ["Ayurvedic massage", "Body oils", "Cooking"],
    yield: "45-50%",
    badges: ["Cold Pressed", "Unrefined", "Single Origin"],
  },
  {
    name: "Mustard Oil",
    botanicalName: "Brassica nigra · Rai Tel",
    description: "Traditional cooking oil from Gujarat",
    themeClass: "oil-card--mustard",
    accentColor: "#8B7355",
    bandColor: "#8B7355",
    volume: "100ml / 250ml / 500ml",
    benefits: ["Daily cooking", "Pickling base", "Hair care"],
    yield: "35-40%",
    badges: ["Cold Pressed", "Unrefined", "Kitchen Staple"],
  },
  {
    name: "Groundnut Oil",
    botanicalName: "Arachis hypogaea · Mungfali Tel",
    description: "Premium for daily kitchen use",
    themeClass: "oil-card--groundnut",
    accentColor: "#D4A574",
    bandColor: "#D4A574",
    volume: "100ml / 250ml / 500ml",
    benefits: ["Cooking", "Frying", "Wellness"],
    yield: "42-48%",
    badges: ["Cold Pressed", "Pure", "No Additives"],
  },
  {
    name: "Black Seed Oil",
    botanicalName: "Nigella sativa · Kalonji Tel",
    description: "Premium wellness and healing",
    themeClass: "oil-card--blackseed",
    accentColor: "#1A2E1A",
    bandColor: "var(--brand-gold)",
    volume: "100ml / 250ml",
    benefits: ["Immune support", "Skincare", "Global demand"],
    yield: "25-30%",
    badges: ["Cold Pressed", "Premium", "Export Grade"],
  },
  {
    name: "Cumin Oil",
    botanicalName: "Cuminum cyminum · Jeera Tel",
    description: "Rare, ultra-premium from Unjha",
    themeClass: "oil-card--cumin",
    accentColor: "#C17F3A",
    bandColor: "#C17F3A",
    volume: "100ml",
    benefits: ["Digestive wellness", "Aromatherapy", "Ayurveda"],
    yield: "25-30%",
    badges: ["Ultra Premium", "Single Origin", "Rare"],
  },
  {
    name: "Fennel Oil",
    botanicalName: "Foeniculum vulgare · Saunf Tel",
    description: "Digestive wellness & export quality",
    themeClass: "oil-card--fennel",
    accentColor: "#6FA832",
    bandColor: "#6FA832",
    volume: "100ml",
    benefits: ["Digestive support", "Aromatherapy", "Export market"],
    yield: "12-18%",
    badges: ["Cold Pressed", "Premium", "Export Ready"],
  },
  {
    name: "Flaxseed Oil",
    botanicalName: "Linum usitatissimum · Alsi Tel",
    description: "Omega-3 powerhouse for health",
    themeClass: "oil-card--flaxseed",
    accentColor: "#8A7840",
    bandColor: "#8A7840",
    volume: "100ml / 250ml",
    benefits: ["Omega-3 rich", "Keto friendly", "Heart health"],
    yield: "38-42%",
    badges: ["Cold Pressed", "High Omega-3", "Health Focused"],
  },
];

const bottleFormats = [
  {
    sku: "Petite",
    volume: "100 ml",
    bottleType: "Dark amber glass, slim",
    cap: "Natural wood",
    label: "Premium wrap, gold band",
    channel: "Gifting | Sampling | Travel",
  },
  {
    sku: "Classic",
    volume: "250 ml",
    bottleType: "Dark amber glass, tall slim",
    cap: "Natural wood",
    label: "Premium wrap, product accent",
    channel: "Health stores | Direct | Online D2C",
  },
  {
    sku: "Hero",
    volume: "500 ml",
    bottleType: "Dark amber glass, tall slim",
    cap: "Natural wood",
    label: "Premium wrap, product accent",
    channel: "Flagship | All channels",
  },
  {
    sku: "Grand",
    volume: "1 Litre",
    bottleType: "Dark amber glass, wide",
    cap: "Black matte",
    label: "Dark label, gold type",
    channel: "Restaurants | Bulk buyers",
  },
  {
    sku: "Bulk",
    volume: "5 Litre",
    bottleType: "Food-grade HDPE, black",
    cap: "Black matte + pour spout",
    label: "Minimal front panel",
    channel: "B2B | Wholesale | Manufacturers",
  },
];

const ColdPressedOilsPage = () => {
  const generalOrderLink = buildWhatsAppUrl(
    buildGeneralInquiryMessage("your cold pressed oils"),
  );

  return (
    <>
      <Seo
        title="Cold Pressed Oils | JM Masala | Premium Single-Origin from Unjha"
        description="Pure, cold-pressed oils from Unjha, Gujarat. Sesame, black seed, mustard, groundnut, cumin, fennel, flaxseed. No heat. No chemicals. Pressed in the seed capital of the world."
        path="/cold-pressed-oils"
        keywords={[
          "cold pressed oils India",
          "groundnut oil manufacturer India",
          "sesame oil supplier India",
          "mustard oil exporter India",
          "black seed oil India",
          "cold pressed oils Unjha Gujarat",
          "JM Masala oils",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: "JM Cold Pressed Oils",
              url: `${SITE_URL}/cold-pressed-oils`,
              description:
                "Pure, cold-pressed single-origin oils from Unjha, Gujarat. Traditional methods, modern purity.",
            },
            {
              "@type": "ItemList",
              itemListElement: oilProducts.map((oil, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: oil.name,
                url: `${SITE_URL}/cold-pressed-oils#${oil.name.toLowerCase().replace(/\s+/g, "-")}`,
              })),
            },
          ],
        }}
      />

      <div className="oil-design-shell">
        {/* ─── HERO SECTION ─── */}
        <section
          className="jm-section"
          style={{ background: "var(--oil-dark)" }}
        >
          <div className="jm-container">
            <p className="jm-section-label">Cold Pressed Oils</p>
            <h1 className="jm-section-heading jm-section-heading--on-dark">
              Pure, Unrefined Oils from the Seed Capital of the World
            </h1>
            <p
              className="mt-5 max-w-3xl text-body"
              style={{ color: "rgba(250,246,238,0.72)" }}
            >
              Pressed fresh in Unjha, Gujarat — where cumin, sesame, and mustard
              have been traded for centuries. No heat above 49°C. No chemicals.
              No additives. Just seeds and tradition.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={generalOrderLink}
                target="_blank"
                rel="noreferrer"
                className="jm-btn jm-btn--primary"
              >
                Order Now
              </a>
              <a href={`mailto:${COMPANY.email}`} className="jm-btn jm-btn--ghost">
                Bulk & B2B Inquiry
              </a>
            </div>
          </div>
        </section>

        {/* ─── THE STORY SECTION ─── */}
        <section
          className="jm-section"
          style={{ background: "var(--brand-cream)" }}
        >
          <div className="jm-container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="jm-section-label">Our Origin</p>
                <h2 className="jm-section-heading">Pressed in Unjha</h2>
                <p className="mt-4 text-body text-[var(--brand-forest)]">
                  Unjha is not just a town — it's the world's largest seed
                  trading hub. Every morning, traders from across India and 50+
                  countries gather at the APMC (Agricultural Market) here to buy
                  and sell seeds. We buy directly from this market, pressing
                  oils the same day they arrive.
                </p>
                <p className="mt-4 text-body text-[var(--brand-forest)]">
                  This means: freshest seeds in India, lowest cost per litre,
                  and a story that no competitor outside Gujarat can replicate.
                </p>
              </div>
              <div>
                <p className="jm-section-label">The Process</p>
                <h2 className="jm-section-heading">Cold Pressed, Not Heated</h2>
                <div className="mt-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="text-2xl">🌱</div>
                    <div>
                      <h4 className="font-semibold text-[var(--brand-charcoal)]">
                        Fresh Seeds
                      </h4>
                      <p className="text-sm text-[var(--brand-forest)]">
                        Bought same day from APMC Unjha
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">❄️</div>
                    <div>
                      <h4 className="font-semibold text-[var(--brand-charcoal)]">
                        Cold Press
                      </h4>
                      <p className="text-sm text-[var(--brand-forest)]">
                        Temperature never exceeds 49°C to preserve nutrients
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">🔍</div>
                    <div>
                      <h4 className="font-semibold text-[var(--brand-charcoal)]">
                        Filtered
                      </h4>
                      <p className="text-sm text-[var(--brand-forest)]">
                        48-hour gravity settling, then filter press
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">🫒</div>
                    <div>
                      <h4 className="font-semibold text-[var(--brand-charcoal)]">
                        Bottled
                      </h4>
                      <p className="text-sm text-[var(--brand-forest)]">
                        Dark glass, nitrogen flushed, batch dated
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRODUCT SHOWCASE ─── */}
        <section className="oil-label-section">
          <div className="jm-container">
            <div className="oil-section-label">Our Oil Range</div>
            <div className="oil-label-grid">
              {oilProducts.map((oil) => (
                <article
                  key={oil.name}
                  id={oil.name.toLowerCase().replace(/\s+/g, "-")}
                  className={`oil-bottle-card ${oil.themeClass}`}
                >
                  <div
                    className="oil-bottle-card__band"
                    style={{ background: oil.bandColor }}
                  />
                  <div className="oil-bottle-card__label">
                    <div className="oil-bottle-card__brand">JM</div>
                    <div className="oil-bottle-card__origin">
                      Cold Pressed · Unjha, Gujarat
                    </div>
                    <div className="oil-bottle-card__divider" />
                    <div className="oil-bottle-card__name">{oil.name}</div>
                    <div className="oil-bottle-card__meta">
                      {oil.botanicalName}
                    </div>
                    <div className="oil-bottle-card__badges">
                      {oil.badges.map((badge) => (
                        <span key={badge} className="oil-bottle-card__badge">
                          {badge}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-xs space-y-1">
                      <p className="opacity-50">
                        <strong>Yield:</strong> {oil.yield}
                      </p>
                      <p className="opacity-50">
                        <strong>Sizes:</strong> {oil.volume}
                      </p>
                    </div>
                    <div className="oil-bottle-card__volume">
                      {oil.description}
                    </div>
                  </div>
                  <div className="oil-bottle-card__footer">
                    <div className="oil-bottle-card__sku">{oil.name}</div>
                    <a
                      href={buildWhatsAppUrl(
                        buildProductInquiryMessage(
                          oil.name,
                          `I want to place an order for ${oil.name}. Please share available sizes (${oil.volume}), MOQ, and pricing.`,
                        ),
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="jm-btn jm-btn--primary"
                    >
                      Place Order
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BOTTLE FORMATS ─── */}
        <section className="oil-spec-section">
          <div className="jm-container">
            <div className="oil-section-label">Available Formats</div>
            <p className="mt-2 max-w-2xl text-body text-[var(--brand-forest)]">
              Same premium quality in every size — from 100ml gifts to 5-litre
              bulk. Dark amber glass protects the oil's nutritional integrity.
            </p>
            <div className="oil-spec-table-wrap mt-6">
              <table className="oil-spec-table">
                <thead>
                  <tr>
                    <th>Format</th>
                    <th>Volume</th>
                    <th>Bottle</th>
                    <th>Cap</th>
                    <th>Use Case</th>
                    </tr>
                </thead>
                <tbody>
                  {bottleFormats.map((item) => (
                    <tr key={item.sku}>
                      <td className="oil-spec-table__sku" data-label="Format">{item.sku}</td>
                      <td className="oil-spec-table__value font-semibold" data-label="Volume">{item.volume}</td>
                      <td className="oil-spec-table__value" data-label="Bottle">{item.bottleType}</td>
                      <td className="oil-spec-table__value" data-label="Cap">{item.cap}</td>
                      <td className="oil-spec-table__value" data-label="Use Case">{item.channel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="oil-spec-footnote mt-6">
              <span>
                All oils in dark amber glass bottles with natural wood caps
                (retail)
              </span>
              <span>Batch date printed on every bottle</span>
            </div>
          </div>
        </section>

        {/* ─── WHO WE SERVE ─── */}
        <section
          className="jm-section"
          style={{ background: "var(--oil-dark)" }}
        >
          <div className="jm-container grid gap-6 lg:grid-cols-[1fr,0.95fr]">
            <div>
              <p className="jm-section-label">For Every Buyer</p>
              <h2 className="jm-section-heading jm-section-heading--on-dark">
                Premium oils for health-conscious India and global wellness
                markets
              </h2>
              <p
                className="mt-4 text-body"
                style={{ color: "rgba(250,246,238,0.68)" }}
              >
                Whether you're a home cook seeking pure sesame oil, a yoga
                studio needing massage oil, a skincare brand looking for carrier
                oil base, or a restaurant wanting premium finishing oils — we
                have you covered.
              </p>
            </div>
            <div
              className="jm-surface-card p-6"
              style={{ background: "var(--oil-label)" }}
            >
              <h3 className="text-tagline not-italic text-[26px] text-[var(--brand-charcoal)]">
                We Supply
              </h3>
              <ul className="mt-4 space-y-3 text-body text-[var(--brand-forest)]">
                <li>✓ Individuals & families (direct orders)</li>
                <li>✓ Health food stores & organic shops</li>
                <li>✓ Yoga studios & Ayurveda practitioners</li>
                <li>✓ Spas & wellness centres</li>
                <li>✓ Skincare & cosmetic brands (raw material)</li>
                <li>✓ Restaurants & gourmet chefs</li>
                <li>✓ Corporate gifting & bulk orders</li>
                <li>✓ Export to UAE, UK, USA, Germany</li>
              </ul>
              <div className="mt-6">
                <Link
                  to="/contact?product=Cold Pressed Oils#inquiry-form"
                  className="jm-btn jm-btn--secondary"
                >
                  Start an Inquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CERTIFICATIONS ─── */}
        <section
          className="jm-section"
          style={{ background: "var(--brand-cream)" }}
        >
          <div className="jm-container">
            <p className="jm-section-label text-center">Quality & Trust</p>
            <h2 className="jm-section-heading text-center">
              Every Bottle Is Certified
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              <div className="jm-surface-card p-6 text-center">
                <div className="text-4xl mb-3">🔬</div>
                <h4 className="font-semibold text-[var(--brand-charcoal)]">
                  FSSAI Licensed
                </h4>
                <p className="mt-2 text-sm text-[var(--brand-forest)]">
                  Food safety & standards certified
                </p>
              </div>
              <div className="jm-surface-card p-6 text-center">
                <div className="text-4xl mb-3">🌾</div>
                <h4 className="font-semibold text-[var(--brand-charcoal)]">
                  Single Origin
                </h4>
                <p className="mt-2 text-sm text-[var(--brand-forest)]">
                  Traceable from Unjha APMC
                </p>
              </div>
              <div className="jm-surface-card p-6 text-center">
                <div className="text-4xl mb-3">❄️</div>
                <h4 className="font-semibold text-[var(--brand-charcoal)]">
                  Cold Pressed
                </h4>
                <p className="mt-2 text-sm text-[var(--brand-forest)]">
                  Below 49°C — nutrients intact
                </p>
              </div>
              <div className="jm-surface-card p-6 text-center">
                <div className="text-4xl mb-3">🚫</div>
                <h4 className="font-semibold text-[var(--brand-charcoal)]">
                  Zero Additives
                </h4>
                <p className="mt-2 text-sm text-[var(--brand-forest)]">
                  No chemicals, no preservatives
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section
          className="jm-section"
          style={{ background: "var(--oil-dark)" }}
        >
          <div className="jm-container text-center">
            <h2 className="jm-section-heading jm-section-heading--on-dark">
              Ready to Experience Pure Cold Pressed Oil?
            </h2>
            <p
              className="mt-4 text-body"
              style={{
                color: "rgba(250,246,238,0.72)",
                maxWidth: "600px",
                margin: "1rem auto",
              }}
            >
              Order from our website, visit us at local stores, or contact us
              for bulk and B2B quantities.
            </p>
            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              <a
                href={generalOrderLink}
                target="_blank"
                rel="noreferrer"
                className="jm-btn jm-btn--primary"
              >
                Place an Order
              </a>
              <a href={`mailto:${COMPANY.email}`} className="jm-btn jm-btn--ghost">
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ColdPressedOilsPage;

