import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { COMPANY, buildWhatsAppUrl } from "@/data/siteData";
import "@/styles/home-enquiry.css";

const telHref = (phone: string): string => `tel:${phone.replace(/\s+/g, "")}`;

const EnquirySection = (): JSX.Element => {
  const [rfqSpice, setRfqSpice] = useState("Cumin Seeds (Jeera)");
  const [rfqQuantity, setRfqQuantity] = useState("Trial order (from 1 MT)");
  const [rfqGrade, setRfqGrade] = useState("Europe 99.5% Sortex cleaned (cumin)");
  const [rfqPacking, setRfqPacking] = useState("25 kg PP bags with inner liner");
  const [rfqDestination, setRfqDestination] = useState("");
  const [rfqCompany, setRfqCompany] = useState("");
  const [rfqEmail, setRfqEmail] = useState("");
  const [rfqMessage, setRfqMessage] = useState("");

  const handleRfqSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi JM Masala Export Desk, I would like to request a commercial quotation:\n\n- Product: ${rfqSpice}\n- Quantity: ${rfqQuantity}\n- Grade: ${rfqGrade}\n- Packing: ${rfqPacking}\n- Destination: ${rfqDestination || "To Be Advised"}\n- Company: ${rfqCompany || "N/A"}\n- Email: ${rfqEmail || "N/A"}\n- Notes: ${rfqMessage || "Please share latest FOB Mundra & CIF pricing."}`;
    window.open(buildWhatsAppUrl(text), "_blank");
  };

  return (
    <section
      id="inquiry-rfq"
      aria-labelledby="inquiry-rfq-heading"
      className="jmh-section jmh-section--forest"
    >
      <div className="jmh-container">
        <p className="jmh-eyebrow">Direct Commercial Inquiry</p>
        <h2 id="inquiry-rfq-heading" className="jmh-h2">
          Request a Bulk Quotation
        </h2>

        <div className="jmh-enquiry-grid">
          <form onSubmit={handleRfqSubmit} className="jmh-enquiry-form">
            <div className="jmh-enquiry-fields">
              <div className="jmh-enquiry-field">
                <label htmlFor="rfq-product">Product required</label>
                <select
                  id="rfq-product"
                  value={rfqSpice}
                  onChange={(e) => setRfqSpice(e.target.value)}
                >
                  <option value="Cumin Seeds (Jeera)">Cumin Seeds (Jeera) - Unjha Origin</option>
                  <option value="Coriander Seeds (Dhania)">Coriander Seeds (Dhania) - Eagle / Scooter</option>
                  <option value="Fennel Seeds (Saunf)">Fennel Seeds (Saunf) - Green Bold</option>
                  <option value="Sesame Seeds (Til)">Sesame Seeds (Til)</option>
                  <option value="Ajwain Seeds (Carom)">Ajwain Seeds (Carom) - Bold Green</option>
                  <option value="Mustard Seeds (Rai)">Mustard Seeds (Black / Yellow)</option>
                  <option value="Fenugreek Seeds (Methi)">Fenugreek Seeds (Methi) - Sortex Cleaned</option>
                  <option value="Turmeric Finger (Haldi)">Turmeric Finger - Salem / Nizamabad</option>
                  <option value="Red Chilli (Lal Mirch)">Whole Red Chilli - Guntur Sannam / Teja</option>
                  <option value="Black Pepper">Tellicherry Black Pepper</option>
                  <option value="Psyllium Husk">Psyllium Husk 99% / 98%</option>
                  <option value="Pure Ground Powder">Ground Powder (Cumin / Turmeric / Chilli)</option>
                </select>
              </div>

              <div className="jmh-enquiry-field">
                <label htmlFor="rfq-quantity">Estimated order quantity</label>
                <select
                  id="rfq-quantity"
                  value={rfqQuantity}
                  onChange={(e) => setRfqQuantity(e.target.value)}
                >
                  <option value="Trial order (from 1 MT)">Trial order (from 1 MT)</option>
                  <option value="Container load (we confirm the quantity with you)">Container load (we confirm the quantity with you)</option>
                  <option value="Regular monthly supply">Regular monthly supply</option>
                </select>
              </div>

              <div className="jmh-enquiry-field">
                <label htmlFor="rfq-grade">Specification / grade</label>
                <select
                  id="rfq-grade"
                  value={rfqGrade}
                  onChange={(e) => setRfqGrade(e.target.value)}
                >
                  <option value="Europe 99.5% Sortex cleaned (cumin)">Europe 99.5% Sortex cleaned (cumin)</option>
                  <option value="Europe Bold 99.99% Sortex cleaned (cumin)">Europe Bold 99.99% Sortex cleaned (cumin)</option>
                  <option value="Singapore 99% Sortex cleaned (cumin)">Singapore 99% Sortex cleaned (cumin)</option>
                  <option value="Singapore 99% machine cleaned (cumin)">Singapore 99% machine cleaned (cumin)</option>
                  <option value="Other product or custom specification">Other product or custom specification</option>
                </select>
              </div>

              <div className="jmh-enquiry-field">
                <label htmlFor="rfq-packing">Packaging preference</label>
                <select
                  id="rfq-packing"
                  value={rfqPacking}
                  onChange={(e) => setRfqPacking(e.target.value)}
                >
                  <option value="25 kg PP bags with inner liner">25 kg PP bags with inner liner</option>
                  <option value="50 kg PP bags with inner liner">50 kg PP bags with inner liner</option>
                  <option value="Retail packs or private label (on request)">Retail packs or private label (on request)</option>
                  <option value="Other (tell us in the message)">Other (tell us in the message)</option>
                </select>
              </div>

              <div className="jmh-enquiry-field">
                <label htmlFor="rfq-destination">Discharge port &amp; country</label>
                <input
                  id="rfq-destination"
                  type="text"
                  required
                  placeholder="e.g. Jebel Ali, UAE / Felixstowe, UK"
                  value={rfqDestination}
                  onChange={(e) => setRfqDestination(e.target.value)}
                />
              </div>

              <div className="jmh-enquiry-field">
                <label htmlFor="rfq-company">Company name</label>
                <input
                  id="rfq-company"
                  type="text"
                  required
                  placeholder="Your company / trading entity"
                  value={rfqCompany}
                  onChange={(e) => setRfqCompany(e.target.value)}
                />
              </div>
            </div>

            <div className="jmh-enquiry-field">
              <label htmlFor="rfq-email">Business email</label>
              <input
                id="rfq-email"
                type="email"
                required
                placeholder="commercial@yourcompany.com"
                value={rfqEmail}
                onChange={(e) => setRfqEmail(e.target.value)}
              />
            </div>

            <div className="jmh-enquiry-field">
              <label htmlFor="rfq-notes">Technical requirements / notes</label>
              <textarea
                id="rfq-notes"
                rows={3}
                placeholder="Specify target delivery terms (FOB Mundra / CIF), lab testing parameters, or payment terms."
                value={rfqMessage}
                onChange={(e) => setRfqMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="jmh-btn jmh-enquiry-submit">
              <Send size={18} aria-hidden="true" />
              Send quotation request via WhatsApp
            </button>
          </form>

          <div className="jmh-enquiry-contact">
            <h3>Talk to us directly</h3>
            <a
              href={buildWhatsAppUrl(COMPANY.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="jmh-btn jmh-btn--primary jmh-enquiry-whatsapp"
            >
              <MessageCircle size={24} aria-hidden="true" />
              Chat on WhatsApp
            </a>
            {COMPANY.phones.map((phone) => (
              <a key={phone} href={telHref(phone)} className="jmh-enquiry-link">
                <Phone size={20} aria-hidden="true" />
                {phone}
              </a>
            ))}
            <a href={`mailto:${COMPANY.email}`} className="jmh-enquiry-link">
              <Mail size={20} aria-hidden="true" />
              {COMPANY.email}
            </a>
            <p>
              Please include the product, quantity, destination port and packing you need. Trial
              orders start from 1 MT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
