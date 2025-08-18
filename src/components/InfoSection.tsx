import { Clock, Package, Shield, Truck, Users } from 'lucide-react';

const InfoSection = () => {
  const services = [
    {
      icon: <Package className="w-12 h-12" />,
      title: "Spice Sourcing & Processing",
      description: "Direct procurement from trusted farmers in Unjha, followed by advanced cleaning, grading, and sorting.",
      features: ["Farmer Network", "99.5% Purity Cleaning", "Grading & Sorting", "Bulk Supply"]
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Packaging & Export",
      description: "Customized packaging and export-ready solutions with efficient port handling near Mundra & Kandla.",
      features: ["Bulk & Retail Packaging", "Fumigation & SGS Checks", "Port Clearance", "On-time Dispatch"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Quality Assurance",
      description: "Certified quality control at every stage, ensuring compliance with international food standards.",
      features: ["FSSAI & APEDA Certified", "SGS/ISO Quality Checks", "Moisture & Oil Content Testing", "Long Shelf Life Guarantee"]
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "25+", label: "Countries Served" },
    { icon: <Truck className="w-8 h-8" />, value: "10,000 MT+", label: "Spices Exported" },
    { icon: <Shield className="w-8 h-8" />, value: "100%", label: "Quality Compliance" },
    { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Client Support" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            At JM Masala, we specialize in sourcing, processing, and exporting premium-quality Indian spices.
            With generations of expertise and modern infrastructure, we deliver purity and trust worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-amber-600 mb-6 group-hover:text-amber-500 transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Why Choose JM Masala</h3>
            <p className="text-amber-100">A legacy of trust, quality, and global reach</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-amber-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-amber-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-amber-500 text-amber-900 px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors duration-300 font-semibold text-lg">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
