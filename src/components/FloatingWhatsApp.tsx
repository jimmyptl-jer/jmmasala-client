import { MessageCircle } from "lucide-react";
import { COMPANY, buildWhatsAppUrl } from "@/data/siteData";

const FloatingWhatsApp = () => {
  const href = buildWhatsAppUrl(COMPANY.whatsappMessage);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="jm-whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default FloatingWhatsApp;
