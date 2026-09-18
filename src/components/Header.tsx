import { ArrowRight, ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/JmMasala.png";

const WHOLE_SEED_SPICES = [
  { name: "Cumin Seeds (Jeera)", slug: "cumin-seeds-exporter-india", tag: "Flagship" },
  { name: "Coriander Seeds (Dhania)", slug: "coriander-seeds-exporter-india" },
  { name: "Fennel Seeds (Saunf)", slug: "fennel-seeds-exporter-india" },
  { name: "Fenugreek Seeds (Methi)", slug: "fenugreek-seeds-exporter-india" },
  { name: "Ajwain / Carom Seeds", slug: "ajwain-seeds-exporter-india" },
  { name: "Mustard Seeds (Rai)", slug: "mustard-seeds-exporter-india" },
  { name: "Sesame Seeds (Til)", slug: "sesame-seeds-exporter-india", tag: "Natural & Hulled" },
  { name: "Nigella Seeds (Kalonji)", slug: "nigella-seeds-exporter-india" },
];

const WHOLE_HOT_AND_AROMATICS = [
  { name: "Turmeric Whole & Fingers", slug: "turmeric-exporter-india", tag: "High Curcumin" },
  {
    name: "Red Chilli (Whole Pods)",
    slug: "red-chilli-exporter-india",
    tag: "Stemless/Stem-cut",
    chilliTypes: [
      { name: "Teja", slug: "teja-chilli-exporter-india" },
      { name: "Bird's Eye", slug: "bird-eye-chilli-exporter-india" },
      { name: "King Chilli", slug: "king-chilli-exporter-india" },
    ],
  },
  { name: "Dry Ginger (Sonth)", slug: "dry-ginger-exporter-india" },
  { name: "Black Pepper (MG1)", slug: "black-pepper-exporter-india" },
  { name: "Green Cardamom (Alleppey)", slug: "cardamom-exporter-india" },
];

const SPICE_POWDERS = [
  { name: "Cumin Powder (Jeera)", slug: "cumin-powder-exporter-india", tag: "Pure Milled" },
  { name: "Coriander Powder (Dhania)", slug: "coriander-powder-exporter-india" },
  { name: "Turmeric Powder (Haldi)", slug: "turmeric-powder-exporter-india", tag: "High Curcumin" },
  { name: "Red Chilli Powder", slug: "red-chilli-powder-exporter-india" },
  { name: "Dry Ginger Powder (Sonth)", slug: "ginger-powder-exporter-india" },
  { name: "Fenugreek Powder (Methi)", slug: "fenugreek-powder-exporter-india" },
];

const PSYLLIUM_AND_AGRO = [
  { name: "Cold Pressed Oils", path: "/cold-pressed-oils", desc: "Virgin wood-pressed edible oils", isSpecial: true, tag: "Wood Pressed" },
  { name: "Psyllium Husk", slug: "psyllium-husk-exporter-india", desc: "High swell 98%-99% purity", tag: "99% Purity" },
  { name: "Psyllium Seeds (Isabgol)", slug: "psyllium-seeds-exporter-india", desc: "Whole clean seeds" },
  { name: "Agro Commodities", slug: "agro-commodities-exporter-india", desc: "Peanuts, chickpeas & sesame" },
];

const PROCESSING_LINKS = [
  { label: "Spice Processing & Plant", path: "/spice-processing-manufacturing", desc: "Machine cleaning, Sortex, destoning, grinding & export packaging" },
  { label: "Quality, Testing & Certifications", path: "/quality-certifications", desc: "FSSAI, ISO 22000, HACCP, APEDA & NABL lab COA" },
  { label: "Pan-India Domestic Supply", path: "/domestic-supply-india", desc: "Commercial B2B supply for food processors & brands" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>("products");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Close menus on page route changes
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname, location.search]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 relative border-b border-[var(--brand-gold-pale)] bg-[rgba(253,251,247,0.97)] backdrop-blur-md transition-shadow">
      <div className="jm-container flex items-center justify-between gap-6 py-2 md:py-2.5">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="JM Masala Trading LLP"
        >
          <img
            src={logo}
            alt="JM Masala Trading LLP"
            className="h-12 w-auto md:h-14 lg:h-16 object-contain"
            loading="lazy"
          />
        </Link>

        {/* Desktop Navigation - Product in Main Focus */}
        <div className="hidden lg:flex items-center justify-end gap-6 xl:gap-8 flex-1">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1 xl:gap-2 text-sm font-medium">
              
              {/* 1. PRODUCTS - Main Hero Mega-Menu */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/products"
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold tracking-[0.16em] uppercase rounded-md transition-all ${
                    location.pathname.startsWith("/products") || activeDropdown === "products"
                      ? "text-[var(--brand-gold)] bg-[var(--brand-cream)]/70 shadow-sm"
                      : "text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]"
                  }`}
                >
                  <span className="font-extrabold text-[var(--brand-deep-green)]">Products</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      activeDropdown === "products" ? "rotate-180 text-[var(--brand-gold)]" : "text-gray-400"
                    }`}
                  />
                </Link>

                {/* Product Mega Menu Dropdown */}
                {activeDropdown === "products" && (
                  <div
                    className="absolute top-full -left-20 xl:-left-28 mt-1.5 w-[920px] xl:w-[1020px] rounded-2xl border border-[var(--brand-gold-pale)] bg-[var(--brand-warm-white)] p-6 shadow-[0_20px_45px_rgba(26,46,26,0.14)] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <div className="grid grid-cols-4 gap-5 xl:gap-6">
                      
                      {/* Col 1: Whole Seed Spices (8) */}
                      <div>
                        <div className="flex items-center justify-between border-b border-[var(--brand-gold-pale)] pb-2 mb-2.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-charcoal)]">
                            Whole Seeds (8)
                          </span>
                          <span className="text-[10px] text-[var(--brand-gold)] font-medium">Sortex Cleaned</span>
                        </div>
                        <ul className="space-y-0.5 text-[12.5px] xl:text-[13px]">
                          {WHOLE_SEED_SPICES.map((item) => (
                            <li key={item.slug}>
                              <Link
                                to={`/${item.slug}`}
                                className="flex items-center justify-between py-1 px-1.5 rounded text-[var(--brand-forest)] hover:text-[var(--brand-gold)] hover:bg-[var(--brand-cream)] transition-colors group"
                              >
                                <span className="group-hover:translate-x-0.5 transition-transform">
                                  {item.name}
                                </span>
                                {item.tag && (
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--brand-gold)]/15 text-[var(--brand-charcoal)] font-bold uppercase tracking-wider">
                                    {item.tag}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Col 2: Whole Peppers & Hot Spices (5 + Chilli Varieties) */}
                      <div>
                        <div className="flex items-center justify-between border-b border-[var(--brand-gold-pale)] pb-2 mb-2.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-charcoal)]">
                            Peppers &amp; Chillies (5)
                          </span>
                          <span className="text-[10px] text-[var(--brand-gold)] font-medium">Whole &amp; Cured</span>
                        </div>
                        <ul className="space-y-0.5 text-[12.5px] xl:text-[13px]">
                          {WHOLE_HOT_AND_AROMATICS.map((item) => (
                            <li key={item.slug}>
                              <Link
                                to={`/${item.slug}`}
                                className="flex items-center justify-between py-1 px-1.5 rounded text-[var(--brand-forest)] hover:text-[var(--brand-gold)] hover:bg-[var(--brand-cream)] transition-colors group"
                              >
                                <span className="group-hover:translate-x-0.5 transition-transform">
                                  {item.name}
                                </span>
                                {item.tag && (
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--brand-gold)]/15 text-[var(--brand-charcoal)] font-bold uppercase tracking-wider">
                                    {item.tag}
                                  </span>
                                )}
                              </Link>
                              {item.chilliTypes && (
                                <div className="flex items-center gap-1.5 pl-2.5 py-0.5">
                                  <span className="text-[10px] text-stone-400 font-medium">Types:</span>
                                  {item.chilliTypes.map((c) => (
                                    <Link
                                      key={c.slug}
                                      to={`/${c.slug}`}
                                      className="text-[10.5px] font-semibold text-[var(--brand-gold)] hover:underline px-1 py-0.2 rounded hover:bg-[var(--brand-cream)] transition-colors"
                                    >
                                      {c.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Col 3: Pure Spice Powders (6) */}
                      <div>
                        <div className="flex items-center justify-between border-b border-[var(--brand-gold-pale)] pb-2 mb-2.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-charcoal)]">
                            Spice Powders (6)
                          </span>
                          <span className="text-[10px] text-[var(--brand-gold)] font-medium">Cold Milled</span>
                        </div>
                        <ul className="space-y-0.5 text-[12.5px] xl:text-[13px]">
                          {SPICE_POWDERS.map((item) => (
                            <li key={item.slug}>
                              <Link
                                to={`/${item.slug}`}
                                className="flex items-center justify-between py-1 px-1.5 rounded text-[var(--brand-forest)] hover:text-[var(--brand-gold)] hover:bg-[var(--brand-cream)] transition-colors group"
                              >
                                <span className="group-hover:translate-x-0.5 transition-transform">
                                  {item.name}
                                </span>
                                {item.tag && (
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--brand-sage)]/15 text-[var(--brand-forest)] font-bold uppercase tracking-wider">
                                    {item.tag}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                          <li className="pt-2">
                            <Link
                              to="/products?category=powders"
                              className="text-[11px] font-semibold text-[var(--brand-gold)] hover:underline block pt-1"
                            >
                              Custom Mesh Grinding (40–100) →
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Col 4: Psyllium, Dehydrated & Oils (6) */}
                      <div>
                        <div className="flex items-center justify-between border-b border-[var(--brand-gold-pale)] pb-2 mb-2.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-charcoal)]">
                            Psyllium, Agro &amp; Oils
                          </span>
                          <span className="text-[10px] text-[var(--brand-gold)] font-medium">Export Lots</span>
                        </div>
                        <ul className="space-y-1 text-[12px] xl:text-[12.5px]">
                          {PSYLLIUM_AND_AGRO.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.path ?? `/${item.slug}`}
                                className={`block p-1.5 rounded transition-colors group ${
                                  item.isSpecial
                                    ? "bg-[var(--brand-cream)] border border-[var(--brand-gold-pale)]"
                                    : "hover:bg-[var(--brand-cream)]"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-semibold text-[var(--brand-charcoal)] group-hover:text-[var(--brand-gold)] text-[12px]">
                                    {item.name}
                                  </span>
                                  {item.tag && (
                                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-[var(--brand-gold)]/15 text-[var(--brand-charcoal)] font-bold uppercase tracking-wider">
                                      {item.tag}
                                    </span>
                                  )}
                                </div>
                                <div className="text-[10px] text-[var(--brand-forest)]/70 mt-0.5 leading-snug">
                                  {item.desc}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Bottom Quick Bar */}
                    <div className="mt-4 pt-3 border-t border-[var(--brand-gold-pale)] flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-[var(--brand-forest)]">
                        <span className="inline-flex items-center gap-1 font-semibold text-[var(--brand-deep-green)]">
                          <Sparkles className="h-3.5 w-3.5 text-[var(--brand-gold)]" /> APMC Unjha Mandi Sourced
                        </span>
                        <span className="text-gray-300">|</span>
                        <span>Sortex 99.5%</span>
                        <span className="text-gray-300">|</span>
                        <span>Mundra Port Global Dispatch</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Link
                          to="/products"
                          className="font-bold text-[var(--brand-gold)] hover:underline inline-flex items-center gap-1"
                        >
                          View All 22 Products Catalog <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <Link
                          to="/contact?intent=quote"
                          className="font-bold text-[var(--brand-deep-green)] hover:text-[var(--brand-gold)]"
                        >
                          Request Export Quote →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* 2. PROCESSING ▾ */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter("processing")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown((curr) => (curr === "processing" ? null : "processing"))
                  }
                  className="inline-flex items-center gap-1 px-3 py-2 text-[11px] font-bold tracking-[0.16em] uppercase transition-colors text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]"
                >
                  <span>Processing</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      activeDropdown === "processing" ? "rotate-180 text-[var(--brand-gold)]" : "text-gray-400"
                    }`}
                  />
                </button>

                {activeDropdown === "processing" && (
                  <div
                    className="absolute top-full left-0 mt-1 w-80 rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-warm-white)] p-2.5 shadow-[0_16px_36px_rgba(26,46,26,0.12)] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <ul className="space-y-1">
                      {PROCESSING_LINKS.map((sub) => (
                        <li key={sub.path}>
                          <Link
                            to={sub.path}
                            className="block rounded-lg px-3 py-2 transition-colors hover:bg-[var(--brand-cream)] group"
                          >
                            <div className="text-[13px] font-semibold text-[var(--brand-charcoal)] group-hover:text-[var(--brand-gold)]">
                              {sub.label}
                            </div>
                            <div className="text-[11px] text-[var(--brand-forest)]/70 mt-0.5 leading-snug">
                              {sub.desc}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>

              {/* 3. SOURCING */}
              <li>
                <NavLink
                  to="/sourcing-network"
                  className={({ isActive }) =>
                    [
                      "inline-flex items-center px-3 py-2 text-[11px] font-bold tracking-[0.16em] uppercase transition-colors",
                      isActive
                        ? "text-[var(--brand-gold)] font-bold"
                        : "text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]",
                    ].join(" ")
                  }
                >
                  Sourcing
                </NavLink>
              </li>

              {/* 4. PRIVATE LABEL */}
              <li>
                <NavLink
                  to="/private-label-spices"
                  className={({ isActive }) =>
                    [
                      "inline-flex items-center px-3 py-2 text-[11px] font-bold tracking-[0.16em] uppercase transition-colors",
                      isActive
                        ? "text-[var(--brand-gold)] font-bold"
                        : "text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]",
                    ].join(" ")
                  }
                >
                  Private Label
                </NavLink>
              </li>

              {/* 5. RETAIL */}
              <li>
                <NavLink
                  to="/spice-packaging"
                  className={({ isActive }) =>
                    [
                      "inline-flex items-center px-3 py-2 text-[11px] font-bold tracking-[0.16em] uppercase transition-colors",
                      isActive
                        ? "text-[var(--brand-gold)] font-bold"
                        : "text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]",
                    ].join(" ")
                  }
                >
                  Retail
                </NavLink>
              </li>

              {/* 6. EXPORT */}
              <li>
                <NavLink
                  to="/export-destinations"
                  className={({ isActive }) =>
                    [
                      "inline-flex items-center px-3 py-2 text-[11px] font-bold tracking-[0.16em] uppercase transition-colors",
                      isActive
                        ? "text-[var(--brand-gold)] font-bold"
                        : "text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]",
                    ].join(" ")
                  }
                >
                  Export
                </NavLink>
              </li>

              {/* 7. ABOUT */}
              <li>
                <NavLink
                  to="/about-jm-masala"
                  className={({ isActive }) =>
                    [
                      "inline-flex items-center px-3 py-2 text-[11px] font-bold tracking-[0.16em] uppercase transition-colors",
                      isActive
                        ? "text-[var(--brand-gold)] font-bold"
                        : "text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]",
                    ].join(" ")
                  }
                >
                  About
                </NavLink>
              </li>

              {/* 8. CONTACT */}
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    [
                      "inline-flex items-center px-3 py-2 text-[11px] font-bold tracking-[0.16em] uppercase transition-colors",
                      isActive
                        ? "text-[var(--brand-gold)] font-bold"
                        : "text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]",
                    ].join(" ")
                  }
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </nav>

          {/* High-Converting CTA Button */}
          <Link
            to="/contact"
            className="jm-btn jm-btn--primary text-[11px] font-bold tracking-[0.12em] uppercase py-2.5 px-5 shadow-sm hover:shadow-md transition-all shrink-0"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg border border-[var(--brand-gold-pale)] p-2 text-[var(--brand-deep-green)] lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer (Product-First) */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-[var(--brand-gold-pale)] bg-[var(--brand-warm-white)] px-5 py-6 pb-10 shadow-2xl lg:hidden">
          <nav aria-label="Mobile navigation">
            
            {/* Mobile Product Accordion */}
            <div className="border-b border-[var(--brand-gold-pale)] pb-3 mb-3">
              <button
                type="button"
                onClick={() =>
                  setMobileSection((curr) => (curr === "products" ? null : "products"))
                }
                className="flex w-full items-center justify-between py-2 text-[14px] font-bold uppercase tracking-wider text-[var(--brand-deep-green)]"
              >
                <span>Products Portfolio (22 Products)</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileSection === "products" ? "rotate-180 text-[var(--brand-gold)]" : "text-gray-400"
                  }`}
                />
              </button>

              {mobileSection === "products" && (
                <div className="mt-2 pl-3 space-y-4 border-l-2 border-[var(--brand-gold)]/30">
                  {/* Category 1: Whole Seeds */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                      Whole Seeds (8)
                    </div>
                    <ul className="mt-1 space-y-1 text-[13px] text-[var(--brand-forest)]">
                      {WHOLE_SEED_SPICES.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/${s.slug}`}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between py-1 hover:text-[var(--brand-gold)]"
                          >
                            <span>{s.name}</span>
                            {s.tag && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--brand-gold)]/15 text-[var(--brand-charcoal)] font-semibold">
                                {s.tag}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category 2: Peppers & Chillies */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                      Peppers &amp; Chillies (5)
                    </div>
                    <ul className="mt-1 space-y-1 text-[13px] text-[var(--brand-forest)]">
                      {WHOLE_HOT_AND_AROMATICS.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/${s.slug}`}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between py-1 hover:text-[var(--brand-gold)]"
                          >
                            <span>{s.name}</span>
                            {s.tag && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--brand-gold)]/15 text-[var(--brand-charcoal)] font-semibold">
                                {s.tag}
                              </span>
                            )}
                          </Link>
                          {s.chilliTypes && (
                            <div className="flex items-center gap-2 pl-2.5 py-0.5">
                              <span className="text-[10px] text-stone-400">Types:</span>
                              {s.chilliTypes.map((c) => (
                                <Link
                                  key={c.slug}
                                  to={`/${c.slug}`}
                                  onClick={() => setMenuOpen(false)}
                                  className="text-[11px] font-semibold text-[var(--brand-gold)] hover:underline"
                                >
                                  {c.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category 3: Spice Powders */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                      Spice Powders (6)
                    </div>
                    <ul className="mt-1 space-y-1 text-[13px] text-[var(--brand-forest)]">
                      {SPICE_POWDERS.map((p) => (
                        <li key={p.slug}>
                          <Link
                            to={`/${p.slug}`}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between py-1 hover:text-[var(--brand-gold)]"
                          >
                            <span>{p.name}</span>
                            {p.tag && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--brand-sage)]/15 text-[var(--brand-forest)] font-semibold">
                                {p.tag}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category 4: Psyllium, Agro & Oils */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-gold)]">
                      Psyllium, Agro &amp; Oils (4)
                    </div>
                    <ul className="mt-1 space-y-1 text-[13px] text-[var(--brand-forest)]">
                      {PSYLLIUM_AND_AGRO.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path ?? `/${item.slug}`}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between py-1 hover:text-[var(--brand-gold)]"
                          >
                            <span>{item.name}</span>
                            {item.tag && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--brand-gold)]/15 text-[var(--brand-charcoal)] font-semibold">
                                {item.tag}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/products"
                    onClick={() => setMenuOpen(false)}
                    className="inline-block text-[12px] font-bold text-[var(--brand-gold)] underline pt-1"
                  >
                    View All 22 Products Catalog →
                  </Link>
                </div>
              )}
            </div>

            {/* Other Mobile Links */}
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <NavLink
                  to="/spice-processing-manufacturing"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-[13px] font-bold tracking-[0.16em] uppercase text-[var(--brand-charcoal)]"
                >
                  Processing &amp; Plant
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sourcing-network"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-[13px] font-bold tracking-[0.16em] uppercase text-[var(--brand-charcoal)]"
                >
                  Sourcing Network
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/private-label-spices"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-[13px] font-bold tracking-[0.16em] uppercase text-[var(--brand-charcoal)]"
                >
                  Private Label
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/spice-packaging"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-[13px] font-bold tracking-[0.16em] uppercase text-[var(--brand-charcoal)]"
                >
                  Retail Packaging
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/export-destinations"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-[13px] font-bold tracking-[0.16em] uppercase text-[var(--brand-charcoal)]"
                >
                  Export Markets
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/quality-certifications"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-[13px] font-bold tracking-[0.16em] uppercase text-[var(--brand-charcoal)]"
                >
                  Quality &amp; Lab Testing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-jm-masala"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-[13px] font-bold tracking-[0.16em] uppercase text-[var(--brand-charcoal)]"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-[13px] font-bold tracking-[0.16em] uppercase text-[var(--brand-charcoal)]"
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="mt-6 pt-3">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="jm-btn jm-btn--primary w-full text-center text-[12px] font-bold uppercase tracking-wider py-3 block"
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
