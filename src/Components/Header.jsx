import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiPhone, FiClock, FiMail } from "react-icons/fi";

const Header = () => {
  const path = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = ["/", "/about", "/products"];

  return (
    <>
      <header className="header">
        {/* Contact Bar */}
        <div className="contact-bar bg-gray-100 py-2 text-sm text-gray-700">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 px-4">
            <div className="flex items-center gap-2">
              <FiPhone className="icon text-limePrimary" aria-hidden="true" />
              <span>+91 9824510478 / +91 9106766041</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="icon text-limePrimary" aria-hidden="true" />
              <span>Mon - Sat 10:00 AM to 06:30 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="icon text-limePrimary" aria-hidden="true" />
              <span>jmmasala@gmail.com / info@jmmasala.com</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="navbar relative flex items-center justify-between px-4 py-4 md:px-8 shadow-md bg-white">
          {/* Mobile Menu Button */}
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden z-20 text-limePrimary hover:text-limeHover transition"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>

          {/* Centered Logo */}
          <Link
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-limePrimary tracking-wide hover:underline"
          >
            JM Masala
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex ml-auto">
            <ul className="flex gap-6 text-lg text-gray-700">
              {navLinks.map((route) => (
                <Link
                  key={route}
                  to={route}
                  className={`nav-link ${path === route ? "text-limePrimary font-bold" : "hover:text-limePrimary"
                    } transition-colors duration-300`}
                  onClick={closeMenu}
                >
                  {route === "/" ? "Home" : route.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                </Link>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden fixed top-0 left-0 w-full h-full bg-white z-30 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex justify-end p-4">
            <button aria-label="Close menu" onClick={closeMenu} className="text-limePrimary hover:text-limeHover transition">
              <FiX className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center pt-8 gap-6 text-lg text-gray-700">
            {navLinks.map((route) => (
              <Link
                key={route}
                to={route}
                className={`nav-link ${path === route ? "text-limePrimary font-bold" : "hover:text-limePrimary"
                  } transition-colors duration-300`}
                onClick={closeMenu}
              >
                {route === "/" ? "Home" : route.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Spacer */}
      <div className="spacer h-16 md:h-20"></div>
    </>
  );
};

export default Header;
