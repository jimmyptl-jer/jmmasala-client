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
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-green-700"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  );
};

export default FloatingWhatsApp;
