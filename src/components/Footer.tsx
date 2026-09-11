import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Ship,
  Factory,
  Package,
  Globe2,
  FileCheck
} from "lucide-react";
import { COMPANY } from "@/data/siteData";
import logo from "@/assets/JmMasala.png";

const TOP_PRODUCTS = [
  { name: "Cumin Seeds (Jeera)", slug: "cumin-seeds-exporter-india", tag: "Flagship" },
  { name: "Coriander Seeds (Dhania)", slug: "coriander-seeds-exporter-india" },
  { name: "Fennel Seeds (Saunf)", slug: "fennel-seeds-exporter-india" },
  { name: "Fenugreek Seeds (Methi)", slug: "fenugreek-seeds-exporter-india" },
  { name: "Ajwain / Carom Seeds", slug: "ajwain-seeds-exporter-india" },
  { name: "Mustard Seeds (Rai)", slug: "mustard-seeds-exporter-india" },
  { name: "Turmeric Whole & Finger", slug: "turmeric-exporter-india" },
  { name: "Dry Ginger (Sonth)", slug: "dry-ginger-exporter-india" },
  { name: "Red Chilli Whole & Powder", slug: "red-chilli-exporter-india" },
  { name: "Psyllium Husk 98%-99%", slug: "psyllium-husk-exporter-india" },
  { name: "Cumin Powder (Pure Milled)", slug: "cumin-powder-exporter-india" },
  { name: "Cold Pressed Virgin Oils", path: "/cold-pressed-oils" }
];

const CAPABILITIES = [
  { label: "Spice Processing & Plant", path: "/spice-processing-manufacturing" },
  { label: "Multi-Region Sourcing Network", path: "/sourcing-network" },
  { label: "Private Label Spice OEM", path: "/private-label-spices" },
  { label: "Retail Packaging Solutions", path: "/spice-packaging" },
  { label: "Export Operations & Logistics", path: "/export-destinations" },
  { label: "Quality & Lab Certifications", path: "/quality-certifications" },
  { label: "Domestic B2B Supply India", path: "/domestic-supply-india" },
  { label: "About JM Masala Heritage", path: "/about-jm-masala" },
  { label: "Contact & Commercial Quotes", path: "/contact" }
];

const CERTIFICATION_BADGES = [
  { name: "FSSAI Licensed", sub: "Food Safety Standards Authority of India" },
  { name: "ISO 22000 Certified", sub: "Food Safety Management System" },
  { name: "HACCP Aligned", sub: "Hazard Analysis Critical Control Point" },
  { name: "Spices Board RCMC", sub: "Ministry of Commerce & Industry" },
  { name: "APEDA Registered", sub: "Agricultural & Processed Food Products" },
  { name: "IEC Registered", sub: "Directorate General of Foreign Trade" },
  { name: "NABL Lab Tested", sub: "COA Issued per Container Lot" }
];

const Footer = () => {
  return (
    <footer className="bg-[#121e12] text-[var(--brand-cream)] border-t-2 border-[var(--brand-gold)] relative">
      
      {/* ── 1. UPPER CAPABILITY STRIP ── */}
      <div className="bg-[#0b140b] py-3.5 border-b border-[rgba(201,168,76,0.18)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-xs font-semibold text-gray-300">
            <div className="flex items-center justify-center gap-1.5 py-1">
              <span className="text-base">🇮🇳</span>
              <span>APMC Unjha Origin</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <Factory className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
              <span>Sortex 99.9% Cleaning</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
              <span>NABL Lab COA Tested</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <Package className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
              <span>Private Label OEM</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <Ship className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
              <span>FOB Mundra Port</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <Globe2 className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
              <span>20+ Export Destinations</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. MAIN 5-COLUMN FOOTER NAVIGATION ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Company Profile (4 Cols) */}
          {/* Column 1: Company Profile (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="JM Masala Trading LLP"
                className="h-14 w-auto object-contain bg-white/5 p-1 rounded-lg border border-white/10"
                loading="lazy"
              />
              <div>
                <h3 className="text-base font-black tracking-wider text-[var(--brand-gold-light)] jm-display uppercase">
                  JM Masala
                </h3>
                <p className="text-[10px] uppercase tracking-[0.16em] text-gray-300 font-semibold">
                  Trading LLP • India
                </p>
              </div>
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">JM Masala Trading LLP</strong> is an integrated Indian spice manufacturer, processor, and exporter based in Unjha, Gujarat. Three generations of seed spice trading insight combined with modern Sortex optical cleaning, cold grinding, and private-label contract packaging.
            </p>

            <div className="space-y-2 pt-2 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[var(--brand-gold)] shrink-0 mt-0.5" />
                <span>{COMPANY.addressLine}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[var(--brand-gold)] shrink-0" />
                <div className="flex gap-2 font-mono">
                  {COMPANY.phones.map((p, idx) => (
                    <span key={p}>
                      {idx > 0 && " • "}
                      <a href={`tel:${p.replace(/\s+/g, "")}`} className="hover:text-[var(--brand-gold-light)] transition-colors">
                        {p}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[var(--brand-gold)] shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-[var(--brand-gold-light)] transition-colors font-mono">
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--brand-gold)] text-[var(--brand-charcoal)] font-bold text-xs hover:bg-[var(--brand-gold-light)] transition-all shadow-xs"
              >
                <span>Request B2B Export Quote</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Core Export Products (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold-light)] border-b border-white/10 pb-2 flex items-center justify-between">
              <span>Export Spices</span>
              <span className="text-[10px] text-gray-400 font-mono">25 Products</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-gray-300">
              {TOP_PRODUCTS.map((p) => (
                <div key={p.name}>
                  <Link
                    to={p.path ?? `/${p.slug}`}
                    className="hover:text-[var(--brand-gold-light)] transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{p.name}</span>
                    {p.tag && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-[var(--brand-gold)]/20 text-[var(--brand-gold-light)] font-bold">
                        {p.tag}
                      </span>
                    )}
                  </Link>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <Link
                to="/products"
                className="text-xs font-bold text-[var(--brand-gold)] hover:underline inline-flex items-center gap-1"
              >
                <span>Complete Catalogue (25) →</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Processing & Capabilities (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold-light)] border-b border-white/10 pb-2">
              Capabilities &amp; Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-300">
              {CAPABILITIES.map((c) => (
                <li key={c.label}>
                  <Link
                    to={c.path}
                    className="hover:text-[var(--brand-gold-light)] transition-colors block py-0.5 hover:translate-x-0.5 transition-transform"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── 3. STATUTORY COMPLIANCE & CERTIFICATION BADGES ── */}
        <div className="mt-12 pt-8 border-t border-[rgba(201,168,76,0.18)]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--brand-gold-light)] flex items-center gap-1.5">
              <FileCheck className="h-3.5 w-3.5 text-[var(--brand-gold)]" />
              <span>Statutory Registrations &amp; Food Safety Standards</span>
            </span>
            <Link to="/quality-certifications" className="text-xs text-gray-400 hover:text-[var(--brand-gold)]">
              View Certificates &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
            {CERTIFICATION_BADGES.map((b) => (
              <div
                key={b.name}
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--brand-gold)]/40 transition-colors text-center"
              >
                <div className="text-xs font-bold text-white">{b.name}</div>
                <div className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── 4. COPYRIGHT & LEGAL BOTTOM BAR ── */}
      <div className="bg-[#0a120a] border-t border-[rgba(201,168,76,0.12)] py-5 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="space-y-0.5">
            <div>
              &copy; {new Date().getFullYear()} <strong className="text-gray-300">{COMPANY.legalName}</strong>. All Rights Reserved.
            </div>
            <div className="text-[11px] text-gray-500">
              Indian Spice Manufacturer • Processor • Exporter • Private Label Partner • APMC Unjha, Gujarat, India.
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
            <Link to="/quality-certifications" className="hover:text-white transition-colors">Quality Standards</Link>
            <span>•</span>
            <Link to="/export-destinations" className="hover:text-white transition-colors">Export &amp; Incoterms</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Desk</Link>
            <span>•</span>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-[var(--brand-gold)] hover:underline font-semibold"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
