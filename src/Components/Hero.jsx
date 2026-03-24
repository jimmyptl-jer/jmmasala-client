import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative text-center text-brand-charcoal h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 transition-transform duration-300 ease-in-out bg-brand-cream">
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-brand-charcoal leading-tight mb-4">
          Premium Quality <span className="text-brand-gold">Spices</span>
          <br />
          Delivered Worldwide
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-brand-forest font-light mb-6">
          Elevate your taste with our finest handpicked spices and food
          products.
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-4 text-sm md:text-base text-brand-gold">
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="bg-brand-gold text-brand-deep-green px-6 py-3 rounded-lg font-medium text-lg transition duration-500 hover:bg-brand-gold-light hover:shadow-md w-full sm:w-auto"
          >
            Contact Us
          </button>
          <button
            type="button"
            onClick={() => navigate("/about")}
            className="border-2 border-brand-gold text-brand-gold px-6 py-3 rounded-lg font-medium text-lg transition duration-500 hover:bg-brand-gold hover:text-brand-deep-green w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-5 w-full text-center">
        <div className="flex flex-col items-center justify-center gap-4 text-sm md:text-base text-brand-gold">
          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/jmmasala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-brand-gold-light transition duration-300 text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/jm-masala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-brand-gold-light transition duration-300 text-2xl" />
            </a>
            <a
              href="https://wa.me/919106766041"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-brand-gold transition duration-300 text-2xl" />
            </a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-brand-charcoal">
            <span className="hover:text-brand-gold transition duration-300 cursor-pointer">
              <a href="mailto:info@jmmasala.com" className="font-semibold">
                info@jmmasala.com
              </a>
            </span>

            <span className="hover:text-brand-gold transition duration-300 cursor-pointer font-bold text-center">
              (+91) 910-676-6041 | (+1) 647-865-8471
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
