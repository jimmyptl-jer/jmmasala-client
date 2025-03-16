import React from "react";
import { PackageCheck, Warehouse, Scale, FileBadge } from "lucide-react";

const BestServices = () => {
  const services = [
    {
      icon: <PackageCheck size={40} className="text-white" />,
      description: "Branding, packaging & coding as per customer's requirement.",
    },
    {
      icon: <Warehouse size={40} className="text-white" />,
      description:
        "10,000 square feet of in-house manufacturing and warehousing facility equipped with Fork lifts and other facilities.",
    },
    {
      icon: <Scale size={40} className="text-white" />,
      description:
        "Shrink Wrapping Machinery and Manual Electronic Weighing Machine.",
    },
    {
      icon: <FileBadge size={40} className="text-white" />,
      description:
        "All required permissions & licences as per government guidelines.",
    },
  ];

  return (
    <div className="text-center py-12 px-6">
      {/* Title Section */}
      <h3 className="text-orange-700 italic text-lg">Best Solutions</h3>
      <h1 className="text-3xl font-bold mb-10 text-red-900 italic">
        We Provide Best Services
      </h1>

      {/* Service Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center max-w-xs">
            {/* Icon Wrapper */}
            <div className="w-20 h-20 bg-[#1E3A4F] flex items-center justify-center rounded-full border-4 border-orange-500">
              {service.icon}
            </div>
            {/* Dashed Divider (Hidden on Mobile) */}
            {index < services.length - 1 && (
              <div className="hidden md:block h-16 border-l-2 border-dashed border-gray-400 mx-auto"></div>
            )}
            {/* Description */}
            <p className="text-center mt-4 text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestServices;
