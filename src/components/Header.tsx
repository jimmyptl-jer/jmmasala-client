import { useState } from "react";
import JMLogo from "../assets/JmMasala.png";
import { FiClock, FiMail, FiMenu, FiPhone, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location?.pathname || "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <>
      <header className="header">
        {/* Contact Bar */}
        <div className="contact-bar bg-amber-900 py-2 text-sm text-white">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 px-4">
            <div className="flex items-center gap-2">
              <FiPhone className="icon text-amber-400" aria-hidden="true" />
              <span>+91 91067 66041 / +91 98245 10478</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="icon text-amber-400" aria-hidden="true" />
              <span>Mon - Sat 9:00 AM to 7:00 PM (IST)</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="icon text-amber-400" aria-hidden="true" />
              <span>info@jmmasala.com</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="navbar relative flex items-center justify-between px-4 py-4 md:px-8 shadow-lg bg-white">
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
            <div >
              <img
                src={JMLogo} // The image will now be passed as a prop
                alt={`JM Masala profile`}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
            </div>
            <Link
              to="/"
              className="tracking-wide hover:text-amber-700 transition-colors"
            >
              <div>
                <div className="text-2xl font-bold text-amber-900">JM Masala</div>
                <div className="text-sm text-gray-600 font-normal">
                  Indian Spice Exporter
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex gap-6 text-lg text-gray-700">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
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
            <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
              Get Quote
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden fixed top-0 left-0 w-full h-full bg-white z-30 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
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
          <nav className="flex flex-col items-center pt-8 gap-6 text-lg text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${path === link.path
                  ? "text-amber-700 font-bold"
                  : "hover:text-amber-600"
                  } transition-colors duration-300`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors w-fit"
              onClick={closeMenu}
            >
              Get Quote
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
