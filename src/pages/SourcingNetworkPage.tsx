import Seo from "@/components/Seo";

const SourcingNetworkPage = () => {
  return (
    <>
      <Seo
        title="Our Sourcing Network | Unjha-Centered Pan-India Sourcing | JM Masala"
        description="JM Masala sources from Unjha, Gujarat and selected regions across India with a unified HACCP processing standard."
        path="/sourcing-network"
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="font-serif text-4xl font-bold text-stone-900">
          Pan-India Sourcing. One Quality Standard.
        </h1>

        <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-stone-900">India Sourcing Overview</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-stone-200 bg-stone-50 p-6">
            <svg viewBox="0 0 900 420" className="w-full" aria-label="India sourcing map">
              <rect x="0" y="0" width="900" height="420" fill="#f5f5f4" />
              <text x="100" y="90" fill="#44403c" fontSize="24">
                India Sourcing Zones
              </text>
              <circle cx="260" cy="180" r="10" fill="#b45309" />
              <text x="280" y="185" fill="#292524" fontSize="18">
                Unjha, Gujarat (Primary Hub)
              </text>
              <circle cx="560" cy="300" r="10" fill="#15803d" />
              <text x="580" y="305" fill="#292524" fontSize="18">
                Other Origin Regions (South &amp; East)
              </text>
            </svg>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-stone-900">Unjha, Gujarat Sourcing</h2>
            <p className="mt-3 text-stone-700">
              Unjha APMC Market Yard is the center of our sourcing for cumin, coriander,
              fennel, fenugreek, psyllium, and sesame. We work with direct farmer
              relationships and reliable mandi channels to maintain stable lot quality
              and traceability.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-stone-900">
              Southern &amp; Coastal Origin Sourcing
            </h2>
            <p className="mt-3 text-stone-700">
              Through our extended sourcing partnerships we procure red chilli, turmeric,
              black pepper, cardamom, and curry leaf from key growing regions in South
              and coastal India. Each lot follows the same quality gate before shipment.
            </p>
          </article>
        </div>

        <article className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-semibold text-stone-900">Unified Processing Standard</h2>
          <p className="mt-3 text-stone-700">
            Regardless of origin, all products are processed under the same HACCP
            aligned quality protocol at our Unjha facility workflow, including
            cleaning, lab testing, and export documentation checks.
          </p>
        </article>
      </section>
    </>
  );
};

export default SourcingNetworkPage;
