import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { COMPANY, DOCUMENTATION_PACKAGE, SITE_URL } from "@/data/siteData";

const certifications = [
  {
    name: "HACCP",
    authority: "Accredited Certification Body",
    certificateNumber: "Available on request",
    validity: "Documents available on request where applicable",
  },
  {
    name: "ISO 22000",
    authority: "Accredited Certification Body",
    certificateNumber: "Available on request",
    validity: "Documents available on request where applicable",
  },
  {
    name: "APEDA",
    authority: "Agricultural and Processed Food Products Export Development Authority",
    certificateNumber: "Available on request",
    validity: "Documents available on request where applicable",
  },
  {
    name: "Spice Board RCMC",
    authority: "Spices Board India",
    certificateNumber: "Available on request",
    validity: "Documents available on request where applicable",
  },
  {
    name: "FSSAI",
    authority: "Food Safety and Standards Authority of India",
    certificateNumber: "Available on request",
    validity: "Documents available on request where applicable",
  },
  {
    name: "IEC",
    authority: "DGFT",
    certificateNumber: "Available on request",
    validity: "Documents available on request where applicable",
  },
  {
    name: "MSME",
    authority: "Government of India",
    certificateNumber: "Available on request",
    validity: "Documents available on request where applicable",
  },
];

const qualitySteps = [
  "Raw material inspection",
  "Sortex cleaning",
  "Moisture testing",
  "Third-party laboratory testing",
  "Fumigation",
  "Documentation",
  "Dispatch",
];

const QualityCertificationsPage = () => {
  return (
    <>
      <Seo
        title="Quality Control & Export Documents | JM Masala"
        description="How JM Masala checks spice lots for moisture, appearance and foreign matter, and the export documents buyers can request."
        path="/quality-certifications"
        keywords={[
          "spice export documentation India",
          "spice quality documentation",
          "Sortex cleaned spices India",
          "spice sampling before shipment",
          "JM Masala quality process",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Quality, Sampling and Export Documents",
            url: `${SITE_URL}/quality-certifications`,
            description:
              "Cleaning, sampling and export documentation process followed by JM Masala Trading LLP.",
            about: { "@id": `${SITE_URL}/#organization` },
            publisher: { "@id": `${SITE_URL}/#organization` },
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
                name: "Quality and Documentation",
                item: `${SITE_URL}/quality-certifications`,
              },
            ],
          },
        ]}
      />

      <section className="jm-section">
        <div className="jm-container">
          <p className="jm-section-label">Quality System</p>
          <h1 className="jm-heading-1">Every Lot. Every Shipment. Verified Quality.</h1>

          <section className="jm-surface-card mt-8 overflow-hidden">
            <div className="jm-spec-table__header">Certifications and Registrations</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[var(--brand-cream)] text-left text-[var(--brand-charcoal)]">
                  <tr>
                    <th className="px-4 py-3">Certification</th>
                    <th className="px-4 py-3">Issuing Authority</th>
                    <th className="px-4 py-3">Certificate Number</th>
                    <th className="px-4 py-3">Validity</th>
                  </tr>
                </thead>
                <tbody>
                  {certifications.map((cert) => (
                    <tr key={cert.name} className="border-t border-[var(--brand-gold-pale)]">
                      <td className="px-4 py-3 font-semibold text-[var(--brand-charcoal)]">{cert.name}</td>
                      <td className="px-4 py-3 text-[var(--brand-forest)]">{cert.authority}</td>
                      <td className="px-4 py-3 text-[var(--brand-forest)]">{cert.certificateNumber}</td>
                      <td className="px-4 py-3 text-[var(--brand-forest)]">{cert.validity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="jm-surface-card mt-8 p-6">
            <h2 className="jm-section-heading">
              Certificate Scans
            </h2>
            <p className="mt-3 text-body text-[var(--brand-forest)]">
              Certificates and test documents can be requested with a quotation.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-lg border border-dashed border-[var(--brand-gold)] bg-[var(--brand-cream)] p-4 text-sm text-[var(--brand-forest)]"
                >
                  {cert.name}: documents available on request where applicable
                </div>
              ))}
            </div>
          </section>

          <section className="jm-surface-card mt-8 p-6">
            <h2 className="jm-section-heading">
              Quality Process
            </h2>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {qualitySteps.map((step, index) => (
                <li
                  key={step}
                  className="rounded-lg border border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] p-4 text-sm font-semibold text-[var(--brand-charcoal)]"
                >
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </section>

          <section className="jm-surface-card mt-8 p-6">
            <h2 className="jm-section-heading">
              Third-Party Laboratory Testing
            </h2>
            <p className="mt-3 text-body text-[var(--brand-forest)]">
              At JM Masala Trading LLP, we prioritize product quality and
              transparency. We work with Eureka Lab for third-party laboratory
              testing, as required by the product, buyer specifications, and
              destination-market requirements. Testing may cover relevant
              quality parameters such as purity, moisture, foreign matter,
              pesticide residues, and microbiological parameters, depending on
              the product and testing requirements. Laboratory reports and
              Certificates of Analysis (COAs) can be shared with buyers where
              available and applicable to the tested product lot. Our approach
              supports informed purchasing decisions and helps buyers assess
              product quality against mutually agreed specifications.
            </p>
          </section>

          <section className="jm-surface-card mt-8 p-6">
            <h2 className="jm-section-heading">
              Documentation Package
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {DOCUMENTATION_PACKAGE.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-[var(--brand-gold-pale)] px-3 py-2 text-sm text-[var(--brand-forest)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="jm-surface-card mt-8 p-6">
            <h2 className="jm-section-heading">
              How We Handle Quality and Documents
            </h2>
            <p className="mt-3 text-body text-[var(--brand-forest)]">
              Seed spices are cleaned and Sortex sorted before packing, and a
              sample can be sent for buyer approval before shipment. Documents
              are prepared per shipment, such as the commercial invoice, packing
              list and bill of lading, and quality documentation is available on
              request. See the specifics for{" "}
              <Link to="/cumin-seeds-exporter-india" className="underline">cumin seeds (jeera)</Link>,{" "}
              <Link to="/coriander-seeds-exporter-india" className="underline">coriander seeds (dhania)</Link>,{" "}
              <Link to="/fennel-seeds-exporter-india" className="underline">fennel seeds (saunf)</Link>,{" "}
              <Link to="/sesame-seeds-exporter-india" className="underline">sesame seeds (til)</Link>,{" "}
              <Link to="/ajwain-seeds-exporter-india" className="underline">ajwain (carom) seeds</Link> and{" "}
              <Link to="/mustard-seeds-exporter-india" className="underline">mustard seeds (rai)</Link>.
              Related pages: <Link to="/spice-packaging" className="underline">spice packaging</Link>,{" "}
              <Link to="/private-label-spices" className="underline">private label spices</Link>,{" "}
              <Link to="/spice-processing-manufacturing" className="underline">spice processing</Link> and{" "}
              <Link to="/cumin-seeds-specifications" className="underline">cumin seeds specifications</Link>.
            </p>
          </section>

          <section className="jm-surface-card mt-8 p-6">
            <h2 className="jm-section-heading">
              Buyer Assurance
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3 text-sm text-[var(--brand-forest)]">
                Lot-wise documentation support for importer approvals and customs processes.
              </div>
              <div className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3 text-sm text-[var(--brand-forest)]">
                Third-party laboratory reports (where available), moisture checks, and export packing aligned to buyer specifications.
              </div>
              <div className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3 text-sm text-[var(--brand-forest)]">
                Documents available on request where applicable.
              </div>
            </div>
          </section>

          <p className="jm-soft-panel mt-8 p-4 text-sm font-semibold text-[var(--brand-charcoal)]">
            Documents are available on request where applicable. Contact us at
            {" "}
            {COMPANY.email}.
          </p>
        </div>
      </section>
    </>
  );
};

export default QualityCertificationsPage;
