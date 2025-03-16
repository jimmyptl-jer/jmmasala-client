import React from "react";
import { useNavigate } from 'react-router-dom';
// import { Pepper, Leaf, Sprout, Star, Flower } from "lucide-react"; // Importing spice-related icons

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-start justify-center px-8 md:px-16 py-16 md:py-20 m-5 md:m-0 lg:m-0">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-orange-500">Welcome to JM Masala</h1>
      <p className="text-lg md:text-xl mb-6">
        <strong>JM Masala</strong> is a trusted <strong>import-export company</strong> based in <strong>Unjha, India</strong>, specializing in <strong>premium-quality spices</strong>. Known as the <strong>Spice Hub of India</strong>, we take pride in supplying <strong>authentic and high-grade spices</strong> to customers worldwide.
      </p>
      <p className="text-lg md:text-xl mb-6">
        With <strong>decades of expertise</strong>, we cater to <strong>wholesalers, retailers, and food industries</strong>, ensuring that our spices meet <strong>global quality standards</strong>. From sourcing the finest raw materials to <strong>hygienic processing and secure packaging</strong>, we deliver excellence in every shipment.
      </p>
      <p className="text-lg md:text-xl mb-6">
        We export to <strong>over 30+ countries</strong>, providing <strong>bulk quantities</strong> while maintaining purity, freshness, and rich aroma. Our commitment to <strong>quality, timely delivery, and customer satisfaction</strong> makes us a preferred choice in the global spice trade.
      </p>
      {/* 
      Spice Icons Section
      <div className="flex space-x-6 my-6">
        <div className="flex flex-col items-center">
          <Pepper size={36} className="text-orange-500" />
          <p className="text-sm text-gray-700 mt-1">Chili</p>
        </div>
        <div className="flex flex-col items-center">
          <Leaf size={36} className="text-yellow-600" />
          <p className="text-sm text-gray-700 mt-1">Turmeric</p>
        </div>
        <div className="flex flex-col items-center">
          <Sprout size={36} className="text-green-600" />
          <p className="text-sm text-gray-700 mt-1">Cumin</p>
        </div>
        <div className="flex flex-col items-center">
          <Star size={36} className="text-red-500" />
          <p className="text-sm text-gray-700 mt-1">Cardamom</p>
        </div>
        <div className="flex flex-col items-center">
          <Flower size={36} className="text-purple-700" />
          <p className="text-sm text-gray-700 mt-1">Cloves</p>
        </div>
      </div> */}

      {/* Banner Quote */}
      <div className="mb-6">
        <span className="bg-orange-500 text-white py-2 px-6 rounded-md text-lg font-semibold">
          "Bringing the authentic taste of Indian spices to the world."
        </span>
      </div>

      {/* Learn More Button */}
      <button
        type="button"
        onClick={() => navigate('/about')}
        className="border border-orange-500 text-orange-700 px-5 py-3 font-medium text-base cursor-pointer text-center transition duration-500 hover:bg-orange-700 hover:text-white"
      >
        Learn More
      </button>
    </div>
  );
};

export default AboutMe;
