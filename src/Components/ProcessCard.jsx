import React from "react";
import { FiShoppingCart, FiSettings, FiPackage } from "react-icons/fi";

const ProcessCards = () => {
  const cards = [
    {
      title: "Purchasing",
      description: "At APMC Market yard Unjha",
      icon: <FiShoppingCart className="text-limePrimary w-12 h-12 mb-4" />,
    },
    {
      title: "Processing",
      description: "With High tech machineries",
      icon: <FiSettings className="text-limePrimary w-12 h-12 mb-4" />,
    },
    {
      title: "Packaging",
      description: "Standard packets with varied quantity",
      icon: <FiPackage className="text-limePrimary w-12 h-12 mb-4" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map(({ title, description, icon }) => (
        <div
          key={title}
          className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
        >
          {icon}
          <h3 className="text-xl font-semibold text-limePrimary mb-2">{title}</h3>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProcessCards;
