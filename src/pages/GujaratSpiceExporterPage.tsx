import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, MapPin, Package, ShieldCheck, Truck } from "lucide-react";
import Seo from "@/components/Seo";
import {
  COMPANY,
  DOCUMENTATION_PACKAGE,
  PRODUCTS,
  SITE_URL,
  TRUST_BADGES,
  buildGeneralInquiryMessage,
  buildWhatsAppUrl,
} from "@/data/siteData";
import bannerImage from "@/assets/homepage.png";

const GUJARAT_FAQS = [
  {
    question: "Why is Gujarat important for spice exports from India?",
    answer:
      "Gujarat is a major trade and processing base for seed spices, especially through Unjha. Buyers benefit from faster access to cumin, fennel, fenugreek, coriander, sesame, and psyllium supply chains.",
  },
  {
    question: "Is JM Masala a Gujarat-based spice exporter?",
    answer:
      "Yes. JM Masala Exports is based near APMC Market Yard in Unjha, Mehsana district, Gujarat, and supplies export-grade Indian spices with packing, testing, and documentation support.",
  },
  {
    question: "Which Gujarat spices can buyers source from JM Masala?",
    answer:
      "Buyers commonly source cumin seeds, coriander seeds, fennel seeds, fenugreek seeds, sesame seeds, psyllium husk, and psyllium seeds, along with South India spices through JM Masala's partner network.",
  },
  {
    question: "Can JM Masala handle bulk export and private label spice orders?",
    answer:
      "Yes. JM Masala supports bulk export packing, retail and private label formats, buyer-specific labelling, COA support, phytosanitary and fumigation coordination, and FOB, CIF, or CNF shipment terms.",
  },
];

const GUJARAT_STRENGTHS = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Unjha Origin Advantage",
    text: "Close sourcing access to one of India's strongest cumin and seed spice trading hubs.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Certified Export Profile",
    text: "HACCP, ISO 22000, APEDA, Spice Board, FSSAI, and IEC-backed buyer confidence.",
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Custom Packing",
    text: "Bulk, retail, private label, liner bags, vacuum packs, and buyer-specific markings.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Documentation Support",
    text: "COA, origin, phytosanitary, fumigation, invoice, packing list, and shipment papers.",
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Port-Ready Dispatch",
    text: "FOB, CIF, CNF, container stuffing, and multi-product consolidation support.",
  },
];

const GujaratSpiceExporterPage = () => {
  const gujaratProducts = PRODUCTS.filter((product) =>
    ["Gujarat", "Unjha, Gujarat"].includes(product.origin),
  );
  const quoteUrl = buildWhatsAppUrl(
    buildGeneralInquiryMessage("Gujarat-origin spices and export supply"),
  );

  return (
    <>
      <Seo
        title="Best Spice Exporter in Gujarat | Unjha Cumin Supplier | JM Masala"
        description="JM Masala is a Gujarat-based spice exporter from Unjha supplying cumin, coriander, fennel, fenugreek, sesame, psyllium and more with HACCP, packing, lab testing, and export documentation."
        path="/spice-exporter-gujarat"
        imageUrl={bannerImage}
        imageAlt="JM Masala spice exporter in Gujarat from Unjha"
        keywords={[
          "best spice exporter in Gujarat",
          "spice exporter Gujarat",
          "Unjha spice exporter",
          "cumin exporter Gujarat",
          "Gujarat spices supplier",
          "Indian spice exporter from Gujarat",
          "HACCP spice exporter Gujarat",
          "bulk spice supplier Gujarat",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: COMPANY.legalName,
            alternateName: COMPANY.name,
            url: `${SITE_URL}/spice-exporter-gujarat`,
            image: `${SITE_URL}/JMMasala.png`,
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
            areaServed: ["Gujarat", "India", "Worldwide"],
            priceRange: "$$",
          },
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Best Spice Exporter in Gujarat",
            url: `${SITE_URL}/spice-exporter-gujarat`,
            description:
              "Gujarat-focused spice exporter page for JM Masala Exports in Unjha.",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: gujaratProducts.map((product, index) => ({
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
            mainEntity: GUJARAT_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
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
                name: "Spice Exporter Gujarat",
                item: `${SITE_URL}/spice-exporter-gujarat`,
              },
            ],
          },
        ]}
      />

      <section className="relative overflow-hidden bg-[var(--brand-deep-green)] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-28"
          style={{ backgroundImage: `url(${bannerImage})` }}
        />
        <div className="absolute inset-0 bg-[rgba(13,34,20,0.82)]" />
        <div className="jm-container relative grid min-h-[620px] items-center gap-10 py-20 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.1)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold-light)]">
              <MapPin className="h-4 w-4" /> Unjha, Gujarat
            </p>
            <h1 className="mt-5 max-w-4xl font-[var(--font-display)] text-[42px] leading-tight md:text-[58px]">
              Best Spice Exporter in Gujarat for Origin-Led Bulk Supply
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(255,255,255,0.82)]">
              JM Masala Exports is based in Unjha, Gujarat, helping importers,
              wholesalers, food brands, and private-label buyers source export-grade
              cumin, coriander, fennel, fenugreek, sesame, psyllium, turmeric,
              chilli, pepper, cardamom, and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={quoteUrl} target="_blank" rel="noreferrer" className="jm-btn jm-btn--primary">
                Request Gujarat Spice Quote <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/products" className="jm-btn jm-btn--outline border-white text-white hover:bg-white hover:text-[var(--brand-deep-green)]">
                View Export Products
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.1)] p-6 backdrop-blur">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--brand-gold-light)]">
              Gujarat Buyer Signals
            </h2>
            <div className="mt-5 grid gap-3">
              {[
                "Near APMC Market Yard, Unjha",
                "HACCP and ISO 22000 aligned",
                "APEDA, Spice Board, FSSAI, IEC profile",
                "FOB, CIF, CNF shipment support",
                "Bulk, retail, and private label packing",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-[rgba(255,255,255,0.86)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-gold-light)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <p className="jm-section-label">Why Gujarat Buyers Find Us</p>
          <h2 className="jm-section-heading">A Gujarat Spice Exporter Built Around Unjha Access</h2>
          <p className="jm-section-subtext ml-0 max-w-3xl">
            Search visibility improves when the site proves local relevance with real
            address, product depth, quality process, documentation, and useful buyer
            answers. This page brings those signals together for Gujarat and Unjha
            spice export searches.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {GUJARAT_STRENGTHS.map((item) => (
              <article key={item.title} className="jm-surface-card p-6">
                <div className="inline-flex rounded-md bg-[var(--brand-gold-pale)] p-3 text-[var(--brand-deep-green)]">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--brand-charcoal)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--brand-forest)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jm-section jm-section--cream">
        <div className="jm-container">
          <p className="jm-section-label">Gujarat-Origin Products</p>
          <h2 className="jm-section-heading">High-Demand Spices from Gujarat Supply Chains</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gujaratProducts.map((product) => (
              <article key={product.slug} className="jm-product-card">
                <div className="jm-product-card__image">
                  <img src={product.imageUrl} alt={`${product.name} from Gujarat`} loading="lazy" decoding="async" />
                </div>
                <div className="jm-product-card__body">
                  <h3 className="jm-product-card__name">{product.name}</h3>
                  <p className="text-xs italic text-[var(--brand-gold)]">{product.botanicalName}</p>
                  <p className="jm-product-card__description">{product.shortDescription}</p>
                  <Link to={`/${product.slug}`} className="mt-4 inline-flex jm-btn jm-btn--outline text-[13px]">
                    View {product.name} Specifications
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jm-section jm-section--white">
        <div className="jm-container grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <aside className="jm-surface-card p-6">
            <h2 className="text-tagline not-italic text-[28px] text-[var(--brand-charcoal)]">
              Certifications and Documents
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {TRUST_BADGES.map((badge) => (
                <span key={badge} className="rounded-full bg-[var(--brand-gold-pale)] px-3 py-1 text-xs font-semibold text-[var(--brand-deep-green)]">
                  {badge}
                </span>
              ))}
            </div>
            <ul className="mt-5 grid gap-2 text-sm text-[var(--brand-forest)]">
              {DOCUMENTATION_PACKAGE.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <p className="jm-section-label">Buyer Questions</p>
            <h2 className="jm-section-heading">Gujarat Spice Exporter FAQs</h2>
            <div className="mt-6 space-y-4">
              {GUJARAT_FAQS.map((faq) => (
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
        </div>
      </section>

      <section className="jm-section jm-section--primary text-center">
        <div className="jm-container">
          <p className="jm-section-label text-[var(--brand-gold-light)]">Source from Gujarat</p>
          <h2 className="jm-section-heading jm-section-heading--on-dark">
            Send Your Spice Requirement to JM Masala
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[rgba(255,255,255,0.78)]">
            Share product, quantity, grade, packing, destination, and payment terms.
            Our team will respond with specifications, MOQ, and quote support.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={quoteUrl} target="_blank" rel="noreferrer" className="jm-btn jm-btn--primary">
              WhatsApp Export Requirement
            </a>
            <Link to="/contact" className="jm-btn jm-btn--outline border-white text-white hover:bg-white hover:text-[var(--brand-deep-green)]">
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GujaratSpiceExporterPage;
