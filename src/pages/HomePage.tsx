import Seo from "@/components/Seo";
import { COMPANY, SITE_URL } from "@/data/siteData";
import HomeHero from "@/components/home/HomeHero";
import FeaturedSeedSpices from "@/components/home/FeaturedSeedSpices";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ExportPackagingSection from "@/components/home/ExportPackagingSection";
import AboutJmSection from "@/components/home/AboutJmSection";
import EnquirySection from "@/components/home/EnquirySection";
import "@/styles/home-v2.css";

/**
 * Homepage: hero, six priority seed spices, why choose, export and packing, about, enquiry.
 * Each section is its own component in src/components/home/. Only facts confirmed by the owner may be
 * stated there (no certifications, years in business, or country/buyer counts).
 * The enquiry section keeps id="inquiry-rfq": the hero and other pages link to it.
 */
const HomePage = () => {
  return (
    <>
      <Seo
        title="Indian Spice Manufacturer, Processor & Exporter | JM Masala Trading LLP"
        description="JM Masala Trading LLP is an Indian spice manufacturer, processor and exporter based in Unjha, Gujarat. Cumin, coriander, fennel, sesame, ajwain, mustard and more for bulk and export buyers."
        path="/"
        imageUrl="/JMMasala.png"
        keywords={[
          "Indian spice manufacturer",
          "spice processor India",
          "spice exporter India",
          "cumin seeds exporter Unjha",
          "Sortex cleaned cumin India",
          "private label spice manufacturer India",
          "bulk spices supplier Gujarat",
          "JM Masala Trading LLP",
          "coriander fennel fenugreek exporter",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: COMPANY.legalName,
              alternateName: [COMPANY.name, "JM Masala Exports", "JM Masala Unjha"],
              url: SITE_URL,
              logo: `${SITE_URL}/JMMasala.png`,
              description:
                "Indian spice manufacturer, processor, bulk exporter and private-label partner rooted in Unjha APMC Market Yard, Gujarat.",
              address: {
                "@type": "PostalAddress",
                streetAddress: COMPANY.addressLine,
                addressLocality: "Unjha",
                addressRegion: "Gujarat",
                postalCode: "384170",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 91067 66041",
                contactType: "sales and export desk",
                availableLanguage: ["English", "Hindi", "Gujarati"],
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "JM Masala Indian Spices",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }}
      />

      <div className="jmh">
        <HomeHero />
        <FeaturedSeedSpices />
        <WhyChooseSection />
        <ExportPackagingSection />
        <AboutJmSection />
        <EnquirySection />
      </div>
    </>
  );
};

export default HomePage;
