import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Seo from "@/components/Seo";
import {
  COMPANY,
  PRODUCTS_BY_SLUG,
  SITE_URL,
  SOURCING_REGIONS,
  buildGeneralInquiryMessage,
  buildWhatsAppUrl,
} from "@/data/siteData";

const sourcingModel = [
  "Identify the product, origin preference, variety, grade, and commercial requirement",
  "Evaluate seasonal availability, quality, quantity, and market suitability",
  "Inspect lot parameters such as purity, moisture, admixture, color, aroma, and foreign matter",
  "Move suitable lots into cleaning, grading, Sortex, milling, packing, or private-label workflows",
  "Align testing, documentation, packing, and export dispatch with the buyer's destination market",
];

const SourcingRegionPage = () => {
  const params = useParams();
  const region = SOURCING_REGIONS.find((item) => item.slug === params.regionSlug);

  if (!region) {
    return <Navigate to="/404" replace />;
  }

  const relatedProducts = region.productSlugs
    .map((slug) => PRODUCTS_BY_SLUG[slug])
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  const whatsappUrl = buildWhatsAppUrl(
    buildGeneralInquiryMessage(`${region.name} spice and agro product sourcing`),
  );

  const pagePath = `/sourcing/${region.slug}`;
  const title = `${region.title} | Indian Spice Sourcing Company | JM Masala`;

  return (
    <>
      <Seo
        title={title}
        description={region.description}
        path={pagePath}
        keywords={[
          `${region.name} spice supplier`,
          `${region.name} spice sourcing`,
          `${region.name} agricultural products`,
          "Indian spice sourcing company",
          "spice sourcing from India",
          "bulk spice sourcing India",
          "private label spice sourcing India",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: region.title,
            url: `${SITE_URL}${pagePath}`,
            description: region.description,
            about: [
              {
                "@type": "Place",
                name: region.name,
              },
              {
                "@type": "Thing",
                name: "Indian spice sourcing",
              },
            ],
            provider: {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: COMPANY.legalName,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${region.name} Spice and Agro Product Sourcing`,
            provider: {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: COMPANY.legalName,
            },
            areaServed: region.name,
            serviceType:
              "Indian spice sourcing, agro product sourcing, processing, packing, private label, and export support",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${region.name} Sourcing Products`,
              itemListElement: region.products.map((productName) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: productName,
                  category: "Spices and agro products",
                },
              })),
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
                name: "Sourcing Network",
                item: `${SITE_URL}/sourcing-network`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: region.name,
                item: `${SITE_URL}${pagePath}`,
              },
            ],
          },
        ]}
      />

      <section className="bg-[var(--brand-deep-green)] text-white">
        <div className="jm-container py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-gold-light)]">
              <MapPin className="h-4 w-4" />
              Regional Sourcing
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight jm-display sm:text-5xl">
              {region.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/78">
              {region.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="jm-btn jm-btn--primary">
                Request Sourcing Assistance <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/sourcing-network" className="jm-btn jm-btn--outline border-white text-white hover:bg-white/10">
                View Full Sourcing Network
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="jm-section jm-section--white">
        <div className="jm-container grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <div>
            <p className="jm-section-label">Products and Opportunities</p>
            <h2 className="jm-section-heading">What We Can Evaluate from {region.name}</h2>
            <p className="mt-3 text-[var(--brand-forest)]">
              Sourcing is handled according to the buyer's exact requirement:
              product, origin, variety, grade, quantity, specification, packing,
              destination country, and intended use.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {region.products.map((product) => (
              <div key={product} className="flex items-center gap-3 rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--brand-gold)]" />
                <span className="font-semibold text-[var(--brand-charcoal)]">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-cream)] py-16">
        <div className="jm-container">
          <p className="jm-section-label">Sourcing Model</p>
          <h2 className="jm-section-heading">Identify, Source, Inspect, Process, Grade, Test, Pack, Export</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {sourcingModel.map((step, index) => (
              <article key={step} className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5">
                <div className="text-3xl font-bold text-[var(--brand-gold-pale)] jm-display">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--brand-forest)]">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jm-section jm-section--white">
        <div className="jm-container">
          <p className="jm-section-label">Buyer Fit</p>
          <h2 className="jm-section-heading">Who This Sourcing Region Supports</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {region.sourcingUseCases.map((useCase) => (
              <article key={useCase} className="rounded-lg border border-[var(--brand-gold-pale)] p-5 text-sm leading-6 text-[var(--brand-forest)]">
                {useCase}
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-[var(--brand-cream)] py-16">
          <div className="jm-container">
            <p className="jm-section-label">Product-Specific Sourcing</p>
            <h2 className="jm-section-heading">Explore Related JM Masala Products</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <Link
                  key={product.slug}
                  to={`/${product.slug}`}
                  className="rounded-lg border border-[var(--brand-gold-pale)] bg-white p-5 transition-colors hover:border-[var(--brand-gold)]"
                >
                  <h3 className="text-lg font-bold text-[var(--brand-charcoal)]">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--brand-forest)]">
                    {product.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-gold)]">
                    Explore {product.name} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SourcingRegionPage;
