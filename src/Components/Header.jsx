import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiPhone, FiClock, FiMail } from "react-icons/fi";

const Header = () => {
  const path = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="header">
        {/* 📞 Contact Bar */}
        <div className="contact-bar">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <FiPhone className="icon" />
              <span>+91 9824510478 / +91 9106766041</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="icon" />
              <span>Mon - Sat 10:00 AM to 06:30 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="icon" />
              <span>jmmasala@gmail.com / info@jmmasla.com</span>
            </div>
          </div>
        </div>

        {/* 🏡 Navigation Bar */}
        <div className="navbar">
          <Link to="/" className="text-2xl font-bold text-orange-700 tracking-wide hover:underline">
            JM Masala
          </Link>

          {/* 📱 Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>

          {/* 📱 Mobile Menu */}
          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="flex justify-end p-4">
              <button onClick={closeMenu}>
                <FiX className="w-6 h-6 text-black" />
              </button>
            </div>
            <nav className="flex flex-col items-center pt-8 gap-6 text-lg">
              {["/", "/about", "/products", "/blog", "/gallery", "/contact"].map((route) => (
                <Link
                  key={route}
                  to={route}
                  className={`nav-link ${path === route ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  {route === "/" ? "Home" : route.replace("/", "").replace(/-/g, " ")}
                </Link>
              ))}
            </nav>
          </div>

          {/* 🖥️ Desktop Menu */}
          <nav className="hidden md:flex md:items-center md:ml-auto">
            <ul className="flex gap-6 text-lg">
              {["/", "/about", "/products", "/blog", "/gallery", "/contact"].map((route) => (
                <Link
                  key={route}
                  to={route}
                  className={`nav-link ${path === route ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  {route === "/" ? "Home" : route.replace("/", "").replace(/-/g, " ")}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Push Content Down to Prevent Overlap */}
      <div className="spacer"></div>
    </>
  );
};

export default Header;
