import Seo from "@/components/Seo";
import { DOCUMENTATION_PACKAGE } from "@/data/siteData";

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
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="font-serif text-4xl font-bold text-stone-900">
          Every Lot. Every Shipment. Verified Quality.
        </h1>

        <section className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-stone-100 text-left text-stone-800">
              <tr>
                <th className="px-4 py-3">Certification</th>
                <th className="px-4 py-3">Issuing Authority</th>
                <th className="px-4 py-3">Certificate Number</th>
                <th className="px-4 py-3">Validity</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((cert) => (
                <tr key={cert.name} className="border-t border-stone-200">
                  <td className="px-4 py-3 font-semibold text-stone-900">{cert.name}</td>
                  <td className="px-4 py-3 text-stone-700">{cert.authority}</td>
                  <td className="px-4 py-3 text-stone-700">{cert.certificateNumber}</td>
                  <td className="px-4 py-3 text-stone-700">{cert.validity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-stone-900">Certificate Scans</h2>
          <p className="mt-3 text-stone-700">
            Upload scanned certificate images for HACCP, ISO 22000, APEDA, Spice
            Board RCMC, FSSAI, IEC, and MSME in this section.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-lg border border-dashed border-stone-300 p-4 text-sm text-stone-600"
              >
                {cert.name} scan placeholder
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-stone-900">Quality Process</h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {qualitySteps.map((step, index) => (
              <li
                key={step}
                className="rounded-lg border border-stone-200 bg-stone-50 p-4 text-sm font-semibold text-stone-800"
              >
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-stone-900">Documentation Package</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {DOCUMENTATION_PACKAGE.map((item) => (
              <li
                key={item}
                className="rounded-md border border-stone-200 px-3 py-2 text-sm text-stone-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-900">
          All certifications available for download on request. Contact us at
          jmmasala@outlook.in
        </p>
      </section>
    </>
  );
};

export default QualityCertificationsPage;
