import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "@/data/siteData";
import logo from "@/assets/JmMasala.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 relative border-b border-[var(--brand-gold-pale)] bg-[rgba(253,251,247,0.95)] backdrop-blur transition-shadow">
      <div className="jm-container flex items-center justify-between gap-4 py-1.5 lg:py-2.5">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="JM Masala home"
        >
          <img
            src={logo}
            alt="JM Masala logo"
            className="h-14 w-auto md:h-16 lg:h-20"
            loading="lazy"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-5 lg:flex">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-2 text-sm font-medium">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      [
                        "inline-flex items-center border-b-2 px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors",
                        isActive
                          ? "border-[var(--brand-gold)] text-[var(--brand-gold)]"
                          : "border-transparent text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)] hover:border-[var(--brand-gold)]",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

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

      {menuOpen && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-[var(--brand-gold-pale)] bg-[var(--brand-cream)] px-5 py-6 pb-8 shadow-[0_14px_30px_rgba(44,26,14,0.12)] lg:hidden">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-2 text-sm font-medium">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        "block py-2 text-[13px] font-semibold tracking-[0.18em] uppercase",
                        isActive
                          ? "text-[var(--brand-gold)]"
                          : "text-[var(--brand-charcoal)] hover:text-[var(--brand-gold)]",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
