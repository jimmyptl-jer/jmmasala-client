import { Menu, Search, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { NAV_LINKS, PRODUCTS } from "@/data/siteData";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

    const matched = productLookup.find((product) => product.token.includes(term));
    if (matched) {
      navigate(`/${matched.slug}`);
      setMenuOpen(false);
      return;
    }

    navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-700 font-serif text-lg font-bold text-white">
            JM
          </span>
          <span>
            <span className="block font-serif text-xl font-bold text-stone-900">JM Masala</span>
            <span className="block text-xs tracking-wide text-stone-500">
              Export Grade Indian Spices
            </span>
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
          <form onSubmit={onSearchSubmit} className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search products"
              className="w-full rounded-full border border-stone-300 py-2 pl-9 pr-3 text-sm outline-none ring-amber-400 focus:ring-2"
              aria-label="Search products"
            />
          </form>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-4 text-sm font-medium">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "text-amber-700" : "text-stone-700 hover:text-amber-700"
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
            className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-stone-300 p-2 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-stone-200 bg-white px-4 py-4 lg:hidden">
          <form onSubmit={onSearchSubmit} className="relative mb-4">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search products"
              className="w-full rounded-md border border-stone-300 py-2 pl-9 pr-3 text-sm outline-none ring-amber-400 focus:ring-2"
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
                      isActive ? "text-amber-700" : "text-stone-700 hover:text-amber-700"
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
            className="mt-4 inline-block rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
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
