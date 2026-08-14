import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, Globe2, Package, ShieldCheck, Truck } from "lucide-react";
import Seo from "@/components/Seo";
import {
  COMPANY,
  DOCUMENTATION_PACKAGE,
  PRODUCTS,
  PRODUCTS_BY_SLUG,
  SITE_URL,
  TRUST_BADGES,
  buildGeneralInquiryMessage,
  buildProductInquiryMessage,
  buildWhatsAppUrl,
} from "@/data/siteData";
import bannerImage from "@/assets/homepage.png";

const toAbsoluteUrl = (value: string) =>
  value.startsWith("http") ? value : `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;

const exporterSignals = [
  "HACCP and ISO 22000 aligned spice export process",
  "APEDA, Spice Board RCMC, FSSAI, and IEC exporter profile",
  "Bulk, retail, private-label, and buyer-specific packing",
  "COA, phytosanitary, fumigation, origin, invoice, packing list, and bill of lading support",
  "FOB, CIF, CNF, LCL, FCL, and multi-product shipment coordination",
];

const indiaFaqs = [
  {
    question: "What makes JM Masala one of the best spice exporters in India?",
    answer:
      "JM Masala combines Unjha-based sourcing, export-grade product specifications, certification support, buyer-specific packing, and complete shipment documentation for importers and wholesale buyers.",
  },
  {
    question: "Which spices does JM Masala export from India?",
    answer:
      "JM Masala exports cumin seeds, coriander seeds, fennel, fenugreek, sesame, psyllium husk, psyllium seeds, turmeric, red chilli, black pepper, cardamom, and curry leaf.",
  },
  {
    question: "Can international buyers request custom packing?",
    answer:
      "Yes. JM Masala supports bulk bags, retail packs, private label requirements, buyer-specific markings, and documentation aligned to destination-market requirements.",
  },
];

const cuminFaqs = [
  {
    question: "Why is JM Masala a strong cumin exporter from India?",
    answer:
      "JM Masala is based in Unjha, Gujarat, a major cumin trading hub, and supports cumin buyers with export-grade purity options, Sortex cleaning, lot-wise testing, packing, and documentation.",
  },
  {
    question: "Which cumin grades are available for export?",
    answer:
      "Cumin can be supplied in buyer-approved grades such as 98%, 99%, and 99.5% purity, with moisture, admixture, oil content, packing, and lab report requirements aligned before shipment.",
  },
  {
    question: "Can JM Masala supply cumin for Europe, USA, Gulf, and Singapore buyers?",
    answer:
      "Yes. JM Masala supports market-specific cumin discussions for Europe, USA, Gulf, Singapore, and other importer destinations based on final contract specification and lot availability.",
  },
];

const strengthCards = [
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "India Export Reach",
    text: "Supply support for importers, distributors, food processors, and private-label brands across global markets.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Compliance Ready",
    text: "Certification profile and shipment documents that help buyers move faster through supplier onboarding.",
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Buyer-Specific Packing",
    text: "Bulk bags, liner packing, vacuum packs, retail packs, labels, barcodes, and shipping marks.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Documentation Support",
    text: "Commercial and compliance documents prepared according to destination and buyer requirements.",
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Shipment Planning",
    text: "FOB, CIF, CNF, container loading, port coordination, and multi-product consolidation support.",
  },
];

const Hero = ({
  eyebrow,
  title,
  description,
  quoteUrl,
  secondaryPath,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  quoteUrl: string;
  secondaryPath: string;
  secondaryLabel: string;
}) => (
  <section className="relative overflow-hidden bg-[var(--brand-deep-green)] text-white">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: `url(${bannerImage})` }}
    />
    <div className="absolute inset-0 bg-[rgba(13,34,20,0.84)]" />
    <div className="jm-container relative grid min-h-[600px] items-center gap-10 py-20 lg:grid-cols-[1.05fr,0.95fr]">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.1)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold-light)]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-[var(--font-display)] text-[40px] leading-tight md:text-[58px]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(255,255,255,0.82)]">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={quoteUrl} target="_blank" rel="noreferrer" className="jm-btn jm-btn--primary">
            Request Export Quote <ArrowRight className="h-4 w-4" />
          </a>
          <Link to={secondaryPath} className="jm-btn jm-btn--outline border-white text-white hover:bg-white hover:text-[var(--brand-deep-green)]">
            {secondaryLabel}
          </Link>
        </div>
      </div>

      <aside className="rounded-lg border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.1)] p-6 backdrop-blur">
        <h2 className="font-[var(--font-display)] text-2xl text-[var(--brand-gold-light)]">
          Export Buyer Signals
        </h2>
        <div className="mt-5 grid gap-3">
          {exporterSignals.map((item) => (
            <div key={item} className="flex gap-3 text-sm text-[rgba(255,255,255,0.86)]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-gold-light)]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  </section>
);

export const SpiceExporterIndiaPage = () => {
  const quoteUrl = buildWhatsAppUrl(
    buildGeneralInquiryMessage("Indian spices for export from India"),
  );

  return (
    <>
      <Seo
        title="Best Spice Exporter in India | Bulk Indian Spices | JM Masala"
        description="JM Masala is an Indian spice exporter supplying cumin, coriander, fennel, fenugreek, sesame, psyllium, turmeric, chilli, pepper, cardamom and more with packing, testing, and export documentation."
        path="/best-spice-exporter-india"
        imageUrl={bannerImage}
        imageAlt="JM Masala best spice exporter in India"
        keywords={[
          "best spice exporter in India",
          "spice exporter India",
          "Indian spices exporter",
          "bulk spice supplier India",
          "HACCP spice exporter India",
          "private label spice exporter India",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: COMPANY.legalName,
            url: SITE_URL,
            email: COMPANY.email,
            telephone: COMPANY.phones,
            address: {
              "@type": "PostalAddress",
              streetAddress: COMPANY.addressLine,
              addressCountry: "IN",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Best Spice Exporter in India",
            url: `${SITE_URL}/best-spice-exporter-india`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: PRODUCTS.map((product, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: product.name,
                url: `${SITE_URL}/${product.slug}`,
              })),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: indiaFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]}
      />

      <Hero
        eyebrow="Indian Spice Exporter"
        title="Best Spice Exporter in India for Bulk, Private Label, and Food Industry Buyers"
        description="JM Masala Exports helps global buyers source export-grade Indian spices with clear specifications, dependable packing, certification support, and complete export documentation from India."
        quoteUrl={quoteUrl}
        secondaryPath="/products"
        secondaryLabel="View Spice Portfolio"
      />

      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <p className="jm-section-label">Why Importers Choose JM Masala</p>
          <h2 className="jm-section-heading">A Serious Indian Spice Export Partner</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {strengthCards.map((item) => (
              <article key={item.title} className="jm-surface-card p-6">
                <div className="inline-flex rounded-md bg-[var(--brand-gold-pale)] p-3 text-[var(--brand-deep-green)]">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--brand-charcoal)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--brand-forest)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <p className="jm-section-label">Export Product Range</p>
          <h2 className="jm-section-heading">Indian Spices Supplied by JM Masala</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <article key={product.slug} className="jm-product-card">
                <div className="jm-product-card__body">
                  <h3 className="jm-product-card__name">{product.name}</h3>
                  <p className="jm-product-card__description">{product.keySpec}</p>
                  <Link to={`/${product.slug}`} className="mt-4 inline-flex jm-btn jm-btn--outline text-[13px]">
                    View Specifications
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Best Spice Exporter in India FAQs" faqs={indiaFaqs} />
    </>
  );
};

export const BestCuminExporterIndiaPage = () => {
  const cumin = PRODUCTS_BY_SLUG["cumin-seeds-exporter-india"];
  const quoteUrl = buildWhatsAppUrl(buildProductInquiryMessage("Cumin Seeds"));

  return (
    <>
      <Seo
        title="Best Cumin Exporter in India | Unjha Cumin Seeds | JM Masala"
        description="JM Masala exports cumin seeds from Unjha, Gujarat with 98%, 99%, and 99.5% purity options, Sortex cleaning, lab testing, packing, and export documentation for global buyers."
        path="/best-cumin-exporter-india"
        imageUrl={cumin.imageUrl}
        imageAlt="Best cumin exporter in India from Unjha Gujarat"
        type="product"
        keywords={[
          "best cumin exporter in India",
          "cumin exporter India",
          "cumin seeds exporter India",
          "Unjha cumin exporter",
          "jeera exporter India",
          "bulk cumin supplier India",
          "Sortex cumin seeds exporter",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Cumin Seeds",
            description: cumin.description,
            image: toAbsoluteUrl(cumin.imageUrl),
            brand: { "@type": "Brand", name: COMPANY.name },
            category: "Spices",
            countryOfOrigin: "India",
            url: `${SITE_URL}/best-cumin-exporter-india`,
            additionalProperty: cumin.specs.map((spec) => ({
              "@type": "PropertyValue",
              name: spec.label,
              value: spec.value,
            })),
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "USD",
              url: `${SITE_URL}/best-cumin-exporter-india`,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: cuminFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]}
      />

      <Hero
        eyebrow="Unjha Cumin Exporter"
        title="Best Cumin Exporter in India for Importers and Bulk Buyers"
        description="JM Masala supplies export-grade cumin seeds from Unjha, Gujarat with purity options, moisture control, Sortex cleaning, market-specific grade discussions, and complete shipment documentation."
        quoteUrl={quoteUrl}
        secondaryPath="/cumin-seeds-exporter-india"
        secondaryLabel="View Cumin Specifications"
      />

      <section className="jm-section jm-section--white">
        <div className="jm-container grid gap-8 lg:grid-cols-[1fr,0.9fr]">
          <div>
            <p className="jm-section-label">Cumin Export Strength</p>
            <h2 className="jm-section-heading">Unjha-Based Cumin Sourcing with Export Discipline</h2>
            <div className="mt-5 space-y-4 text-body leading-8 text-[var(--brand-forest)]">
              <p>
                Cumin is JM Masala's flagship export product. Being based near
                Unjha helps buyers discuss crop availability, grade, color, aroma,
                oil content, cleaning level, packing, and documentation with a
                supplier close to a major cumin trade hub.
              </p>
              <p>
                For buyers comparing the best cumin exporter in India, the
                practical proof is not a claim alone. It is the ability to provide
                clear specifications, buyer-approved lots, testing support, packing
                options, and shipment execution.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/cumin-seeds-exporter-india" className="jm-btn jm-btn--secondary">
                Full Cumin Product Page
              </Link>
              <Link to="/blog/cumin-seeds-quality-grades-europe-usa-gulf-singapore" className="jm-btn jm-btn--outline">
                Compare Cumin Grades
              </Link>
            </div>
          </div>

          <aside className="jm-surface-card p-6">
            <h2 className="text-tagline not-italic text-[28px] text-[var(--brand-charcoal)]">
              Cumin Specification Signals
            </h2>
            <div className="mt-4 grid gap-3">
              {cumin.specs.map((spec) => (
                <div key={spec.label} className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3 text-sm">
                  <span className="font-semibold text-[var(--brand-charcoal)]">{spec.label}: </span>
                  <span className="text-[var(--brand-forest)]">{spec.value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <p className="jm-section-label">Export Readiness</p>
          <h2 className="jm-section-heading">Documents and Compliance for Cumin Buyers</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[...TRUST_BADGES, ...DOCUMENTATION_PACKAGE].map((item) => (
              <div key={item} className="rounded-md border border-[var(--brand-gold-pale)] bg-white px-4 py-3 text-sm text-[var(--brand-forest)]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Best Cumin Exporter in India FAQs" faqs={cuminFaqs} />
    </>
  );
};

const FaqSection = ({
  title,
  faqs,
}: {
  title: string;
  faqs: Array<{ question: string; answer: string }>;
}) => (
  <section className="jm-section jm-section--white">
    <div className="jm-container">
      <p className="jm-section-label">Buyer Questions</p>
      <h2 className="jm-section-heading">{title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {faqs.map((faq) => (
          <article key={faq.question} className="jm-surface-card p-5">
            <h3 className="text-lg font-semibold text-[var(--brand-charcoal)]">
              {faq.question}
            </h3>
            <p className="mt-2 text-sm leading-7 text-[var(--brand-forest)]">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
