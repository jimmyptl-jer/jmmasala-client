import React from "react";
import {
  Users,
  Package,
  Globe,
  Star,
  Factory,
  Handshake,
  Award,
  FlaskConical,
  ClipboardCheck,
} from "lucide-react";

const InfoSection = () => {
  return (
    <div className="bg-white py-12 px-6">
      {/* Stats Section */}
      <div className="flex flex-wrap justify-center text-center gap-10 mb-12">
        {[
          { title: "Happy Customers", value: "1,000+", icon: <Users size={50} className="text-[#063C46]" /> },
          { title: "Products Available", value: "50+", icon: <Package size={50} className="text-[#063C46]" /> },
          { title: "Countries to Export", value: "30+", icon: <Globe size={50} className="text-[#063C46]" /> },
          { title: "Customer Rating", value: "5+", icon: <Star size={50} className="text-[#063C46]" /> },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center w-40">
            {item.icon}
            <div className="text-3xl font-extrabold text-gray-800 mt-2">{item.value}</div>
            <p className="text-gray-600 text-lg font-medium mt-1">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Highlight Banner */}
      <div className="text-center mb-12 px-4">
        <span className="bg-[#A43312] text-white py-3 px-8 rounded-md text-xl font-semibold uppercase">
          Special Taste & The Best Quality
        </span>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center gap-8">
        {[
          { title: "Modern Manufacturing", icon: <Factory size={50} className="text-[#A43312]" /> },
          { title: "Commitment to Innovation", icon: <Handshake size={50} className="text-[#A43312]" /> },
          { title: "Consistent Quality", icon: <Award size={50} className="text-[#A43312]" /> },
          { title: "State-of-the-Art Laboratory", icon: <FlaskConical size={50} className="text-[#A43312]" /> },
          { title: "Highest Quality Standards", icon: <ClipboardCheck size={50} className="text-[#A43312]" /> },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {item.icon}
            <p className="text-lg font-semibold mt-3 text-gray-800">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
