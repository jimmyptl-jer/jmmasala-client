import { Menu, Search, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { NAV_LINKS, PRODUCTS } from "@/data/siteData";
import logo from "@/assets/JmMasala.png";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const productLookup = useMemo(
    () =>
      PRODUCTS.map((product) => ({
        slug: product.slug,
        token: `${product.name} ${product.botanicalName}`.toLowerCase(),
      })),
    [],
  );

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      navigate("/products");
      return;
    }

    const matched = productLookup.find((product) =>
      product.token.includes(term),
    );
    if (matched) {
      navigate(`/${matched.slug}`);
      setMenuOpen(false);
      return;
    }

    navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[var(--color-bg-beige)] bg-white/95 backdrop-blur transition-shadow "
      }`}
    >
      <div className="jm-container flex items-center justify-between gap-4 py-3 lg:py-4">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="JM Masala home"
        >
          <img
            src={logo}
            alt="JM Masala logo"
            className="h-10 w-auto md:h-12"
            loading="lazy"
          />
          <span className="hidden sm:block">
            <span className="block text-[12px] font-semibold tracking-[0.2em] text-[var(--color-text-dark)]">
              JM MASALA
            </span>
            <span className="block text-[11px] tracking-[0.18em] text-[rgba(44,26,14,0.8)] uppercase">
              Premium Indian Spices
            </span>
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
          <form onSubmit={onSearchSubmit} className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-medium)]" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search products"
              className="w-full rounded-full border border-[var(--color-bg-beige)] bg-white py-2 pl-9 pr-3 text-sm text-[var(--color-text-dark)] placeholder:text-[#A0856A] outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-amber-200"
              aria-label="Search products"
            />
          </form>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-2 text-sm font-medium">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      [
                        "inline-flex items-center border-b-2 px-3 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors",
                        isActive
                          ? "border-[var(--color-secondary)] text-[var(--color-secondary)]"
                          : "border-transparent text-[var(--color-text-dark)] hover:text-[var(--color-secondary)] hover:border-[var(--color-accent)]",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            to="/contact?intent=quote"
            className="jm-btn jm-btn--primary text-[13px] px-6 py-3"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-[var(--color-bg-beige)] p-2 text-[var(--color-primary)] lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 border-t border-[var(--color-bg-beige)] bg-[var(--color-bg-cream)] px-5 py-6 lg:hidden">
          <form onSubmit={onSearchSubmit} className="relative mb-5">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-medium)]" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search products"
              className="w-full rounded-md border border-[var(--color-bg-beige)] bg-white py-2 pl-9 pr-3 text-sm text-[var(--color-text-dark)] placeholder:text-[#A0856A] outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-amber-200"
              aria-label="Search products"
            />
          </form>

          <nav aria-label="Mobile navigation">
            <ul className="space-y-3 text-sm font-medium">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        "block py-2 text-[13px] font-semibold tracking-[0.18em] uppercase",
                        isActive
                          ? "text-[var(--color-secondary)]"
                          : "text-[var(--color-text-dark)] hover:text-[var(--color-secondary)]",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            to="/contact?intent=quote"
            className="mt-6 inline-flex w-full items-center justify-center jm-btn jm-btn--primary"
            onClick={() => setMenuOpen(false)}
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
