import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import QuotationForm from "@/components/quote/QuotationForm";
import { COMPANY, buildWhatsAppUrl } from "@/data/siteData";
import "@/styles/home-enquiry.css";

const telHref = (phone: string): string => `tel:${phone.replace(/\s+/g, "")}`;

const EnquirySection = (): JSX.Element => (
  <section id="inquiry-rfq" aria-labelledby="home-quotation-form-title" className="jmh-enquiry">
    <div className="jmh-container jmh-enquiry-inner">
      <div className="jmh-enquiry-card">
        <QuotationForm id="home-quotation-form" heading="Request a Quotation" sourcePage="home" />
      </div>

      <div className="jmh-enquiry-side">
        <span className="jmh-enquiry-or" aria-hidden="true">
          OR
        </span>
        <div className="jmh-enquiry-wa">
          <span className="jmh-enquiry-wa-icon" aria-hidden="true">
            <MessageCircle size={36} />
          </span>
          <h3>Chat with us on WhatsApp</h3>
          <p>For quick enquiries and product information.</p>
          <a
            href={buildWhatsAppUrl(COMPANY.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="jmh-btn jmh-btn--outline-light"
          >
            Open WhatsApp
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <div className="jmh-enquiry-links">
            {COMPANY.phones.map((phone) => (
              <a key={phone} href={telHref(phone)} className="jmh-enquiry-link">
                <Phone size={16} aria-hidden="true" />
                {phone}
              </a>
            ))}
            <a href={`mailto:${COMPANY.email}`} className="jmh-enquiry-link">
              <Mail size={16} aria-hidden="true" />
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EnquirySection;
