import React from "react";
import { ShieldCheck, Award, Link, Package } from "lucide-react";

const StunningThings = () => {
  const features = [
    {
      icon: <ShieldCheck size={30} />,
      title: "QUALITY ASSURANCE",
      description:
        "Our products guarantee top-notch quality, ultimate freshness, a longer shelf life, and safe food-grade packaging.",
    },
    {
      icon: <Award size={30} />,
      title: "COMPETITIVE PRICE",
      description:
        "Our aim is to offer our customers top-quality products at competitive industry prices, fostering strong connections and satisfaction.",
    },
    {
      icon: <Link size={30} />,
      title: "STRONG SUPPLY CHAIN",
      description:
        "As manufacturer, we prioritize quality in materials, production, trust, financial stability, on-time delivery, and bulk orders.",
    },
    {
      icon: <Package size={30} />,
      title: "PACKAGING & LABELING",
      description:
        "We prioritize food-grade packaging for safety, freshness, and extended shelf life during product transit.",
    },
  ];

  return (
    <div className="text-center py-10 px-5">
      <h3 className="text-orange-700 italic text-lg">For Your Comfort</h3>
      <h1 className="text-3xl font-bold mb-8 text-red-900">Stunning Things</h1>

      {/* Grid Layout for Responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#1E3A4F] text-white p-6 rounded-xl shadow-lg max-w-sm mx-auto"
          >
            <div className="bg-orange-500 p-4 rounded-full mb-4">{feature.icon}</div>
            <h2 className="font-bold text-lg mb-3">{feature.title}</h2>
            <p className="text-center text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StunningThings;
