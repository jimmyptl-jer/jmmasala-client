import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/data/siteData";

const FloatingWhatsApp = () => {
  const href = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    COMPANY.whatsappMessage,
  )}`;

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
