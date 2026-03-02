import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { PRODUCTS, SITE_URL, TRUST_BADGES } from "@/data/siteData";

const northProducts = PRODUCTS.filter((product) => product.category === "north");
const southProducts = PRODUCTS.filter((product) => product.category === "south");

const HomePage = () => {
  return (
    <>
      <Seo
        title="JM Masala | Premium Indian Spice Exporter | Unjha Gujarat | Cumin Turmeric Pepper Cardamom"
        description="HACCP certified Indian spice exporter from Unjha Gujarat. Complete portfolio - cumin, coriander, turmeric, red chilli, black pepper, cardamom, psyllium. APEDA Spice Board registered. LC basis. Export worldwide."
        path="/"
        imageUrl={PRODUCTS[0]?.imageUrl}
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "JM Masala Exports",
          url: SITE_URL,
          email: "jmmasala@outlook.in",
          logo: `${SITE_URL}/favicon.svg`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91 91067 66041",
            contactType: "sales",
            areaServed: "Worldwide",
          },
        }}
      />

      <section className="relative overflow-hidden bg-stone-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1800&q=70"
          alt="Spice bowls and dried whole spices arranged for export"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-800/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32">
          <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
            India&apos;s Complete Spice Sourcing Partner - From Unjha to Your Market
          </h1>
          <p className="mt-5 max-w-4xl text-base text-stone-100 sm:text-lg">
            North Indian Spices from Unjha, Gujarat + South Indian Spices from East
            India Partnership. Cumin to Cardamom. Turmeric to Psyllium. HACCP
            Certified. APEDA Registered. LC Basis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/JMMasalaProducts.pdf"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-amber-400"
            >
              Download Product Catalogue
            </a>
            <Link
              to="/contact?intent=quote#inquiry-form"
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-stone-900"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-amber-200 bg-amber-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-4 md:grid-cols-6">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge}
              className="rounded-md border border-amber-200 bg-white px-3 py-2 text-center text-xs font-semibold text-stone-700"
            >
              {badge}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-stone-900">
          Our Complete Spice Portfolio
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-stone-900">
              North Indian Spices - Sourced from Unjha, Gujarat
            </h3>
            <div className="mt-5 grid gap-4">
              {northProducts.map((product) => (
                <article
                  key={product.slug}
                  className="rounded-xl border border-stone-200 p-4"
                >
                  <h4 className="font-semibold text-stone-900">{product.name}</h4>
                  <p className="mt-1 text-sm text-stone-600">{product.shortDescription}</p>
                  <Link
                    to={`/${product.slug}`}
                    className="mt-3 inline-block text-sm font-semibold text-amber-700 hover:text-amber-800"
                  >
                    View Specifications
                  </Link>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-stone-900">
              South Indian Spices - East India Partnership
            </h3>
            <div className="mt-5 grid gap-4">
              {southProducts.map((product) => (
                <article
                  key={product.slug}
                  className="rounded-xl border border-stone-200 p-4"
                >
                  <h4 className="font-semibold text-stone-900">{product.name}</h4>
                  <p className="mt-1 text-sm text-stone-600">{product.shortDescription}</p>
                  <Link
                    to={`/${product.slug}`}
                    className="mt-3 inline-block text-sm font-semibold text-amber-700 hover:text-amber-800"
                  >
                    View Specifications
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-serif text-3xl font-bold text-stone-900">Why JM Masala</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Complete Portfolio from One Source",
              "Dual Sourcing Network",
              "HACCP and ISO 22000 Certified",
              "Unjha Location Advantage",
              "Generational Legacy",
            ].map((point) => (
              <div
                key={point}
                className="rounded-xl border border-stone-200 bg-white p-4 text-sm font-semibold text-stone-700"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm font-semibold text-stone-800 sm:text-base">
          12+ Products | 4+ Export Markets | HACCP Certified | Unjha Gujarat
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="font-serif text-3xl font-bold text-stone-900">Certifications</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {[
            "HACCP",
            "ISO 22000",
            "APEDA",
            "Spice Board RCMC",
            "FSSAI",
            "IEC",
            "MSME",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-amber-600 py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold">
            Ready to Source Premium Indian Spices?
          </h2>
          <Link
            to="/contact?intent=quote"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-amber-700 hover:bg-stone-100"
          >
            Send Us Your Requirement
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
