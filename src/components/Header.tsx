import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS, PRODUCTS } from "@/data/siteData";
import logo from "@/assets/JmMasala.png";

const OIL_PRODUCTS = [
  { name: "Sesame Oil", botanical: "Sesamum indicum", desc: "Ayurvedic & premium cooking" },
  { name: "Mustard Oil", botanical: "Brassica nigra", desc: "Traditional pungent cooking oil" },
  { name: "Groundnut Oil", botanical: "Arachis hypogaea", desc: "High-smoke point kitchen staple" },
  { name: "Black Seed Oil", botanical: "Nigella sativa", desc: "Kalonji premium wellness oil" },
  { name: "Cumin Oil", botanical: "Cuminum cyminum", desc: "Rare & aromatic digestive oil" },
  { name: "Fennel Oil", botanical: "Foeniculum vulgare", desc: "Saunf sweet aromatherapy oil" },
  { name: "Flaxseed Oil", botanical: "Linum usitatissimum", desc: "Omega-3 rich heart health oil" }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [oilsOpen, setOilsOpen] = useState(false);

  // Mobile accordions
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileOilsOpen, setMobileOilsOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--brand-gold-pale)] bg-[rgba(253,251,247,0.95)] backdrop-blur transition-shadow">
      <div className="jm-container flex items-center justify-between gap-4 py-2 lg:py-3">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="JM Masala home"
        >
          <img
            src={logo}
            alt="JM Masala logo"
            className="h-10 w-auto md:h-12"
            loading="lazy"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden flex-1 items-center justify-end gap-5 lg:flex">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1 text-sm font-medium">
              {NAV_LINKS.map((item) => {
                if (item.label === "Products") {
                  return (
                    <li
                      key={item.path}
                      className="relative"
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          [
                            "inline-flex items-center gap-1 border-b-2 px-2.5 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all",
                            isActive || productsOpen
                              ? "border-[var(--brand-gold)] text-[var(--brand-gold)]"
                              : "border-transparent text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]",
                          ].join(" ")
                        }
                      >
                        {item.label}
                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
                      </NavLink>

                      {/* MEGA DROP DOWN FOR SPICES */}
                      {productsOpen && (
                        <div className="absolute left-1/2 top-full w-[640px] -translate-x-[20%] rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-warm-white)] p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="mb-4 flex items-center justify-between border-b border-[var(--brand-gold-pale)] pb-3">
                            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--brand-gold)]">Premium Export Spices</span>
                            <Link to="/products" className="text-[10px] font-bold tracking-[0.1em] text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)] underline">View Catalog &rarr;</Link>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            {PRODUCTS.map((prod) => (
                              <Link
                                key={prod.slug}
                                to={`/${prod.slug}`}
                                className="group flex flex-col rounded-lg p-2.5 hover:bg-[var(--brand-cream)] transition-all"
                              >
                                <span className="text-xs font-semibold text-[var(--brand-charcoal)] group-hover:text-[var(--brand-gold)] transition-colors">
                                  {prod.name}
                                </span>
                                <span className="text-[10px] italic text-[var(--brand-sage)] mt-0.5">
                                  {prod.botanicalName}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                if (item.label === "Cold Pressed Oils") {
                  return (
                    <li
                      key={item.path}
                      className="relative"
                      onMouseEnter={() => setOilsOpen(true)}
                      onMouseLeave={() => setOilsOpen(false)}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          [
                            "inline-flex items-center gap-1 border-b-2 px-2.5 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all",
                            isActive || oilsOpen
                              ? "border-[var(--brand-gold)] text-[var(--brand-gold)]"
                              : "border-transparent text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]",
                          ].join(" ")
                        }
                      >
                        {item.label}
                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${oilsOpen ? "rotate-180" : ""}`} />
                      </NavLink>

                      {/* DROPDOWN FOR OILS */}
                      {oilsOpen && (
                        <div className="absolute left-0 top-full w-[360px] rounded-xl border border-[var(--brand-gold-pale)] bg-[var(--brand-warm-white)] p-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="mb-3 flex items-center justify-between border-b border-[var(--brand-gold-pale)] pb-2.5">
                            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--brand-gold)]">Single-Origin Oils</span>
                            <Link to="/cold-pressed-oils" className="text-[10px] font-bold tracking-[0.1em] text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)] underline">View All &rarr;</Link>
                          </div>
                          <div className="flex flex-col gap-1">
                            {OIL_PRODUCTS.map((oil) => (
                              <Link
                                key={oil.name}
                                to="/cold-pressed-oils"
                                className="group flex flex-col rounded-lg p-2.5 hover:bg-[var(--brand-cream)] transition-all"
                              >
                                <div className="flex items-baseline justify-between">
                                  <span className="text-xs font-semibold text-[var(--brand-charcoal)] group-hover:text-[var(--brand-gold)] transition-colors">
                                    {oil.name}
                                  </span>
                                  <span className="text-[9px] italic text-[var(--brand-sage)]">{oil.botanical}</span>
                                </div>
                                <span className="text-[10px] text-gray-500 mt-0.5 group-hover:text-gray-700">
                                  {oil.desc}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        [
                          "inline-flex items-center border-b-2 px-2.5 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all",
                          isActive
                            ? "border-[var(--brand-gold)] text-[var(--brand-gold)]"
                            : "border-transparent text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]",
                        ].join(" ")
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          className="rounded-md border border-[var(--brand-gold-pale)] p-2 text-[var(--brand-deep-green)] lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-5 py-6 pb-8 shadow-[0_14px_30px_rgba(44,26,14,0.12)] lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-3 text-sm font-medium">
              {NAV_LINKS.map((item) => {
                if (item.label === "Products") {
                  return (
                    <li key={item.path} className="border-b border-[rgba(201,168,76,0.15)] pb-2">
                      <button
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="flex w-full items-center justify-between py-2 text-[12px] font-bold tracking-[0.18em] uppercase text-[var(--brand-charcoal)]"
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {mobileProductsOpen && (
                        <ul className="mt-2 pl-4 border-l border-[var(--brand-gold)] space-y-2.5 animate-in slide-in-from-top-1 duration-150">
                          <li>
                            <Link
                              to="/products"
                              onClick={() => setMenuOpen(false)}
                              className="block py-1 text-[11px] font-semibold text-[var(--brand-gold)]"
                            >
                              ALL PRODUCTS &rarr;
                            </Link>
                          </li>
                          {PRODUCTS.map((prod) => (
                            <li key={prod.slug}>
                              <Link
                                to={`/${prod.slug}`}
                                onClick={() => setMenuOpen(false)}
                                className="block py-0.5 text-xs text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]"
                              >
                                {prod.name} <span className="text-[10px] text-gray-400 italic">({prod.botanicalName})</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                if (item.label === "Cold Pressed Oils") {
                  return (
                    <li key={item.path} className="border-b border-[rgba(201,168,76,0.15)] pb-2">
                      <button
                        onClick={() => setMobileOilsOpen(!mobileOilsOpen)}
                        className="flex w-full items-center justify-between py-2 text-[12px] font-bold tracking-[0.18em] uppercase text-[var(--brand-charcoal)]"
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileOilsOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {mobileOilsOpen && (
                        <ul className="mt-2 pl-4 border-l border-[var(--brand-gold)] space-y-2.5 animate-in slide-in-from-top-1 duration-150">
                          <li>
                            <Link
                              to="/cold-pressed-oils"
                              onClick={() => setMenuOpen(false)}
                              className="block py-1 text-[11px] font-semibold text-[var(--brand-gold)]"
                            >
                              ALL COLD PRESSED OILS &rarr;
                            </Link>
                          </li>
                          {OIL_PRODUCTS.map((oil) => (
                            <li key={oil.name}>
                              <Link
                                to="/cold-pressed-oils"
                                onClick={() => setMenuOpen(false)}
                                className="block py-0.5 text-xs text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]"
                              >
                                {oil.name} <span className="text-[10px] text-gray-400 italic">({oil.botanical})</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.path} className="border-b border-[rgba(201,168,76,0.15)] pb-2">
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        [
                          "block py-2 text-[12px] font-bold tracking-[0.18em] uppercase",
                          isActive
                            ? "text-[var(--brand-gold)]"
                            : "text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]",
                        ].join(" ")
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
