import { useState } from "react";
import JMLogo from "../assets/JmMasala.png";
import { FiClock, FiMail, FiMenu, FiPhone, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location?.pathname || "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
    { path: "/get-quote", label: "Get Quote" },
  ];

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <ul
      className={`flex ${isMobile ? "flex-col items-center gap-6" : "gap-6"} text-lg text-gray-700`}
    >
      {navLinks.map((link) => (
        <li key={link.path}>
          <Link
            to={link.path}
            aria-current={path === link.path ? "page" : undefined}
            className={`nav-link ${path === link.path
              ? "text-amber-700 font-bold"
              : "hover:text-amber-600"
              } transition-colors duration-300`}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header>
      {/* Contact Bar */}
      <div className="bg-amber-900 py-2 text-sm text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 px-4">
          <div className="flex items-center gap-2">
            <FiPhone className="text-amber-400" />
            <span>+91 98245 10478 / +91 91067 66041</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="text-amber-400" />
            <span>Mon - Sat 9:00 AM to 7:00 PM (IST)</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-amber-400" />
            <span>info@jmmasalaexports.com</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="relative flex items-center justify-between px-4 py-4 md:px-8 shadow-lg bg-white">
        {/* Mobile Menu Button */}
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden z-20 text-amber-700 hover:text-amber-900 transition"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={JMLogo}
            alt="JM Masala logo"
            className="w-20 rounded-full object-cover mr-2"
          />
          <Link to="/" className="tracking-wide hover:text-amber-700 transition-colors">
            <div>
              <div className="text-2xl font-bold text-amber-900">JM Masala</div>
              <div className="text-sm text-gray-600 font-normal">
                Indian Spice Exporter
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav role="navigation" className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Link
            to="/get-quote"
            className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Get Quote
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-30 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex justify-end p-4">
          <button
            aria-label="Close menu"
            onClick={closeMenu}
            className="text-amber-700 hover:text-amber-900 transition"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <nav role="navigation" className="pt-8">
          <NavLinks isMobile />
          <Link
            to="/get-quote"
            className="mt-6 block text-center bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors mx-auto w-40"
          >
            Get Quote
          </Link>
        </nav>
      </div>


    </header>
  );
};

export default Header;
