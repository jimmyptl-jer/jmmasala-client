import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative text-center text-white h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 transition-transform duration-300 ease-in-out bg-white">
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight mb-4">
          Premium Quality <span className="text-orange-400">Spices</span>
          <br />
          Delivered Worldwide
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light mb-6">
          Elevate your taste with our finest handpicked spices and food products.
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center px-4 sm:px-6 md:px-8 gap-4 text-sm md:text-base text-orange-500">
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium text-lg transition duration-500 hover:bg-orange-400 hover:shadow-md w-full sm:w-auto"
          >
            Contact Us
          </button>
          <button
            type="button"
            onClick={() => navigate("/about")}
            className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium text-lg transition duration-500 hover:bg-orange-300 hover:text-white w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-5 w-full text-center">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 gap-4 text-sm md:text-base text-orange-500">
          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a href="https://www.instagram.com/jmmasala" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-orange-600 transition duration-300 text-2xl" />
            </a>
            <a href="https://www.linkedin.com/company/jm-masala" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-orange-600 transition duration-300 text-2xl" />
            </a>
            <a href="https://wa.me/919106766041" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-500 transition duration-300 text-2xl" />
            </a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-gray-800">
            <span className="hover:text-orange-500 transition duration-300 cursor-pointer">
              <a href="mailto:info@jmmasala.com" className="font-semibold">
                info@jmmasala.com
              </a>
            </span>

            <span className="hover:text-orange-500 transition duration-300 cursor-pointer font-bold text-center">
              (+91) 910-676-6041 | (+1) 647-865-8471
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
