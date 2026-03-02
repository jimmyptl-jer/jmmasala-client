import Seo from "@/components/Seo";

const AboutPage = () => {
  return (
    <>
      <Seo
        title="About JM Masala | Heritage, Unjha Location, and Global Spice Expansion"
        description="Learn JM Masala's family heritage, sourcing roots in Unjha, and expansion into a complete Indian spice portfolio."
        path="/about-jm-masala"
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="font-serif text-4xl font-bold text-stone-900">About JM Masala</h1>

        <article className="mt-10 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-stone-900">Our Heritage</h2>
          <p className="mt-3 text-stone-700">
            JM Masala is built on a family legacy in the spice trade. Our
            grandparents started working in local spice markets, and each
            generation strengthened practical sourcing knowledge, grading
            discipline, and buyer trust in export supply.
          </p>
        </article>

        <article className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-stone-900">Our Location</h2>
          <p className="mt-3 text-stone-700">
            Our base is near APMC Market Yard, Unjha, Asia&apos;s largest spice mandi.
            This gives us deep market access and speed. Unjha is approximately 4
            hours from Mundra and Kandla ports, supporting efficient export logistics.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-stone-200">
            <iframe
              title="Unjha location map"
              src="https://www.google.com/maps?q=Unjha%2C+Gujarat&output=embed"
              className="h-80 w-full"
              loading="lazy"
            />
          </div>
        </article>

        <article className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-stone-900">Our Expansion</h2>
          <p className="mt-3 text-stone-700">
            Through our Kolkata and East India partner network, we added South
            Indian sourcing streams including red chilli, turmeric, black pepper,
            and cardamom. This expanded us from a strong regional supplier to a
            complete Indian spice portfolio partner.
          </p>
        </article>

        <article className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-stone-900">Our Process</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-700">
            <li>Sortex cleaning and grading</li>
            <li>NABL lab testing for each lot</li>
            <li>Fumigation when required by destination country</li>
            <li>End-to-end export documentation support</li>
          </ul>
        </article>

        <article className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-6">
          <h2 className="text-2xl font-semibold text-stone-900">Our Mission</h2>
          <p className="mt-3 font-semibold text-amber-900">
            To be India&apos;s most trusted complete spice sourcing partner for global buyers
          </p>
        </article>

        <article className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-stone-900">Team</h2>
          <p className="mt-3 text-stone-700">
            Team photo section is ready. Upload final team photographs to highlight
            leadership and operations in this block.
          </p>
        </article>
      </section>
    </>
  );
};

export default AboutPage;
