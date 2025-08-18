import { CheckCircle, Package, Shield, Ship, Sprout } from 'lucide-react';

const ProcessCards = () => {
  const processes = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Sourcing from Farmers",
      description: "Direct procurement from trusted farmers in Unjha and across India to ensure authentic and fresh spices.",
      step: "01"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Cleaning & Grading",
      description: "Advanced cleaning, grading, and sorting processes to achieve purity levels up to 99.5%.",
      step: "02"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Testing",
      description: "Batch-wise testing in NABL-certified labs to meet international food safety standards.",
      step: "03"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Packaging",
      description: "Flexible bulk (25/50 kg PP bags) and retail packaging with private labeling options.",
      step: "04"
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Shipping & Logistics",
      description: "Fast & efficient shipping through Mundra and Kandla ports with full export documentation.",
      step: "05"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Delivery & Support",
      description: "On-time delivery with complete customer support and long-term trade partnerships.",
      step: "06"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Our Export Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At JM Masala, we follow a transparent and systematic approach –
            from sourcing the best spices in India to ensuring timely delivery
            to global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border-t-4 border-amber-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-amber-600 text-white p-4 rounded-xl group-hover:bg-amber-500 transition-colors duration-300">
                  {process.icon}
                </div>
                <div className="text-4xl font-bold text-gray-200 group-hover:text-amber-200 transition-colors duration-300">
                  {process.step}
                </div>
              </div>

              <h3 className="text-xl font-bold text-amber-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                {process.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {process.description}
              </p>

              <div className="mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-600 to-amber-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold text-lg">
            Start Your Order Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessCards;
