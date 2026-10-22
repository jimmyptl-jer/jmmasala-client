import { Download } from "lucide-react";
import { useLocation } from "react-router-dom";

// One-page PDF per product, generated from the confirmed catalogue facts (public/catalogue/<slug>.pdf).
const DATASHEETS: Record<string, string> = {
  "cumin-seeds-exporter-india": "Cumin Seeds",
  "coriander-seeds-exporter-india": "Coriander Seeds",
  "fennel-seeds-exporter-india": "Fennel Seeds",
  "sesame-seeds-exporter-india": "Sesame Seeds",
  "ajwain-seeds-exporter-india": "Ajwain (Carom) Seeds",
  "mustard-seeds-exporter-india": "Mustard Seeds",
  "fenugreek-seeds-exporter-india": "Fenugreek Seeds",
  "nigella-seeds-exporter-india": "Nigella Seeds",
  "psyllium-husk-exporter-india": "Psyllium Husk",
  "psyllium-seeds-exporter-india": "Psyllium Seeds",
  "red-chilli-exporter-india": "Red Chilli",
  "teja-chilli-exporter-india": "Teja Chilli",
  "bird-eye-chilli-exporter-india": "Bird's Eye Chilli",
  "king-chilli-exporter-india": "King Chilli",
  "turmeric-exporter-india": "Turmeric",
  "black-pepper-exporter-india": "Black Pepper",
  "cardamom-exporter-india": "Green and Black Cardamom",
  "dry-ginger-exporter-india": "Dry Ginger",
  "cumin-powder-exporter-india": "Cumin Powder",
  "coriander-powder-exporter-india": "Coriander Powder",
  "turmeric-powder-exporter-india": "Turmeric Powder",
  "red-chilli-powder-exporter-india": "Red Chilli Powder",
  "ginger-powder-exporter-india": "Ginger Powder",
  "fenugreek-powder-exporter-india": "Fenugreek Powder",
  "agro-commodities-exporter-india": "Agro Commodities",
};

/** Slim strip under the header on product pages with a downloadable one-page data sheet. */
const DatasheetBar = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/|\/$/g, "");
  if (!Object.prototype.hasOwnProperty.call(DATASHEETS, slug)) return null;
  const name = DATASHEETS[slug];
  return (
    <div className="border-b border-[var(--brand-gold-pale)] bg-[var(--brand-cream)]">
      <div className="jm-container flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1.5 text-sm text-[var(--brand-forest)]">
        <span>Product data sheet and supply terms for {name}</span>
        <a
          href={`/catalogue/${slug}.pdf`}
          download={`JM-Masala-${slug.replace(/-exporter-india$/, "")}.pdf`}
          className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-[var(--brand-deep-green)] underline underline-offset-2"
        >
          <Download size={16} aria-hidden="true" /> Download {name} data sheet (PDF)
        </a>
      </div>
    </div>
  );
};

export default DatasheetBar;
