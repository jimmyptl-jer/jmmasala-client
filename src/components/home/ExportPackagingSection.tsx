import { Link } from "react-router-dom";
import { ArrowRight, FileText, Mail, MessageCircle } from "lucide-react";
import { COMPANY, buildGeneralInquiryMessage, buildWhatsAppUrl } from "@/data/siteData";
import "@/styles/home-trust.css";

const CUMIN_GRADES = [
  { grade: "Singapore", purity: "99%", cleaning: "Machine cleaned" },
  { grade: "Singapore", purity: "99%", cleaning: "Sortex cleaned" },
  { grade: "Europe", purity: "99.5%", cleaning: "Sortex cleaned" },
  { grade: "Europe Bold", purity: "99.99%", cleaning: "Sortex cleaned" },
];

export default function ExportPackagingSection(): JSX.Element {
  const whatsappUrl = buildWhatsAppUrl(buildGeneralInquiryMessage("export quotations"));

  return (
    <section className="jmh-section jmh-section--ivory" aria-labelledby="jmh-exp-heading">
      <div className="jmh-container">
        <h2 id="jmh-exp-heading" className="jmh-h2">
          Export Grades, Packing and Documentation
        </h2>

        <div className="jmh-exp-blocks">
          <div className="jmh-exp-block jmh-exp-wide">
            <h3 className="jmh-exp-h3">Available cumin grades</h3>
            <div className="jmh-exp-table-wrap">
              <table className="jmh-exp-table">
                <caption className="jmh-sr-only">Commercial cumin grades, purity and cleaning method</caption>
                <thead>
                  <tr>
                    <th scope="col">Grade</th>
                    <th scope="col">Purity</th>
                    <th scope="col">Cleaning</th>
                  </tr>
                </thead>
                <tbody>
                  {CUMIN_GRADES.map((g) => (
                    <tr key={`${g.grade}-${g.cleaning}`}>
                      <th scope="row">{g.grade}</th>
                      <td>{g.purity}</td>
                      <td>{g.cleaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 12 }}>Specifications for other products are shared on request.</p>
            <Link to="/cumin-seeds-specifications" className="jmh-exp-link">
              See cumin specifications <ArrowRight size={16} aria-hidden />
            </Link>
          </div>

          <div className="jmh-exp-block">
            <h3 className="jmh-exp-h3">Packing</h3>
            <ul className="jmh-exp-list">
              <li>Standard export packing: 25 kg or 50 kg PP bags with inner liner</li>
              <li>Retail packs on request</li>
              <li>Private-label packaging on request</li>
            </ul>
            <Link to="/spice-packaging" className="jmh-exp-link">
              Packaging options <ArrowRight size={16} aria-hidden />
            </Link>
          </div>

          <div className="jmh-exp-block">
            <h3 className="jmh-exp-h3">Documentation and samples</h3>
            <p>
              Export documentation is prepared for each shipment and discussed with your quotation.
            </p>
            <p>Samples can be arranged.</p>
          </div>
        </div>

        <div className="jmh-exp-enquire">
          <h3 className="jmh-exp-h3">How to enquire</h3>
          <div className="jmh-exp-options">
            <a href="#inquiry-rfq" className="jmh-btn jmh-btn--primary">
              <FileText size={18} aria-hidden /> Request a Bulk Quotation
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="jmh-btn jmh-btn--outline"
            >
              <MessageCircle size={18} aria-hidden /> WhatsApp us
            </a>
            <a href={`mailto:${COMPANY.email}`} className="jmh-btn jmh-btn--outline">
              <Mail size={18} aria-hidden /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
