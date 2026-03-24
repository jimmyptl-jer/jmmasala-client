import Seo from "@/components/Seo";
import { COMPANY, DOCUMENTATION_PACKAGE, SITE_URL } from "@/data/siteData";

const certifications = [
  {
    name: "HACCP",
    authority: "Accredited Certification Body",
    certificateNumber: "Available on request",
    validity: "Active",
  },
  {
    name: "ISO 22000",
    authority: "Accredited Certification Body",
    certificateNumber: "Available on request",
    validity: "Active",
  },
  {
    name: "APEDA",
    authority: "Agricultural and Processed Food Products Export Development Authority",
    certificateNumber: "Available on request",
    validity: "Active",
  },
  {
    name: "Spice Board RCMC",
    authority: "Spices Board India",
    certificateNumber: "Available on request",
    validity: "Active",
  },
  {
    name: "FSSAI",
    authority: "Food Safety and Standards Authority of India",
    certificateNumber: "Available on request",
    validity: "Active",
  },
  {
    name: "IEC",
    authority: "DGFT",
    certificateNumber: "Available on request",
    validity: "Active",
  },
  {
    name: "MSME",
    authority: "Government of India",
    certificateNumber: "Available on request",
    validity: "Active",
  },
];

const qualitySteps = [
  "Raw material inspection",
  "Sortex cleaning",
  "Moisture testing",
  "NABL lab test",
  "Fumigation",
  "Documentation",
  "Dispatch",
];

const QualityCertificationsPage = () => {
  return (
    <>
      <Seo
        title="Quality Certifications | JM Masala Export Quality System"
        description="Every lot and every shipment is verified through certification, testing, and export documentation standards."
        path="/quality-certifications"
        keywords={[
          "spice exporter certifications India",
          "HACCP certified spice exporter",
          "ISO 22000 spice exporter India",
          "APEDA registered exporter India",
          "spice export documentation India",
          "JM Masala quality certifications",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "JM Masala Quality Certifications",
            url: `${SITE_URL}/quality-certifications`,
            description:
              "Quality systems, export certifications, lot testing, and documentation process followed by JM Masala.",
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
                name: "Quality Certifications",
                item: `${SITE_URL}/quality-certifications`,
              },
            ],
          },
        ]}
      />

      <section className="jm-section">
        <div className="jm-container">
          <p className="jm-section-label">Quality System</p>
          <h1 className="jm-section-heading">Every Lot. Every Shipment. Verified Quality.</h1>

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
            <h2 className="text-tagline not-italic text-[28px] text-[var(--brand-charcoal)]">
              Certificate Scans
            </h2>
            <p className="mt-3 text-body text-[var(--brand-forest)]">
              Upload scanned certificate images for HACCP, ISO 22000, APEDA, Spice
              Board RCMC, FSSAI, IEC, and MSME in this section.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-lg border border-dashed border-[var(--brand-gold)] bg-[var(--brand-cream)] p-4 text-sm text-[var(--brand-forest)]"
                >
                  {cert.name} scan placeholder
                </div>
              ))}
            </div>
          </section>

          <section className="jm-surface-card mt-8 p-6">
            <h2 className="text-tagline not-italic text-[28px] text-[var(--brand-charcoal)]">
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
            <h2 className="text-tagline not-italic text-[28px] text-[var(--brand-charcoal)]">
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
            <h2 className="text-tagline not-italic text-[28px] text-[var(--brand-charcoal)]">
              Buyer Assurance
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3 text-sm text-[var(--brand-forest)]">
                Lot-wise documentation support for importer approvals and customs processes.
              </div>
              <div className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3 text-sm text-[var(--brand-forest)]">
                Lab reports, moisture checks, and export packing aligned to buyer specifications.
              </div>
              <div className="rounded-md border border-[var(--brand-gold-pale)] px-4 py-3 text-sm text-[var(--brand-forest)]">
                HACCP, ISO 22000, APEDA, Spice Board, FSSAI, IEC and MSME-backed exporter profile.
              </div>
            </div>
          </section>

          <p className="jm-soft-panel mt-8 p-4 text-sm font-semibold text-[var(--brand-charcoal)]">
            All certifications are available for download on request. Contact us at
            {" "}
            {COMPANY.email}.
          </p>
        </div>
      </section>
    </>
  );
};

export default QualityCertificationsPage;
