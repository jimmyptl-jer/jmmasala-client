import React from "react";
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-start justify-center px-8 md:px-16 py-16 md:py-20 m-5 md:m-0 lg:m-0 bg-softBeige">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-limePrimary font-heading">
        Welcome to JM Masala
      </h1>
      <p className="text-lg md:text-xl mb-6 text-darkSlate font-body leading-relaxed">
        <strong className="text-limeSecondary">JM Masala</strong> is a trusted <strong className="text-limeSecondary">import-export company</strong> based in <strong className="text-limeSecondary">Unjha, India</strong>, specializing in <strong className="text-limeSecondary">premium-quality spices</strong>. Known as the <strong className="text-limeSecondary">Spice Hub of India</strong>, we take pride in supplying <strong className="text-limeSecondary">authentic and high-grade spices</strong> to customers worldwide.
      </p>
      <p className="text-lg md:text-xl mb-6 text-darkSlate font-body leading-relaxed">
        With <strong className="text-limeSecondary">decades of expertise</strong>, we cater to <strong className="text-limeSecondary">wholesalers, retailers, and food industries</strong>, ensuring that our spices meet <strong className="text-limeSecondary">global quality standards</strong>. From sourcing the finest raw materials to <strong className="text-limeSecondary">hygienic processing and secure packaging</strong>, we deliver excellence in every shipment.
      </p>
      <p className="text-lg md:text-xl mb-6 text-darkSlate font-body leading-relaxed">
        We export to <strong className="text-limeSecondary">over 30+ countries</strong>, providing <strong className="text-limeSecondary">bulk quantities</strong> while maintaining purity, freshness, and rich aroma. Our commitment to <strong className="text-limeSecondary">quality, timely delivery, and customer satisfaction</strong> makes us a preferred choice in the global spice trade.
      </p>

      {/* Banner Quote */}
      <div className="mb-6">
        <span className="bg-limePrimary text-softBeige py-2 px-6 rounded-md text-lg font-semibold font-heading">
          "Bringing the authentic taste of Indian spices to the world."
        </span>
      </div>

      {/* Learn More Button */}
      <button
        type="button"
        onClick={() => navigate('/about')}
        className="border border-limePrimary text-limePrimary px-5 py-3 font-medium text-base cursor-pointer text-center font-body transition duration-500 hover:bg-limeSecondary hover:text-softBeige"
      >
        Learn More
      </button>
    </div>
  );
};

export default AboutMe;
