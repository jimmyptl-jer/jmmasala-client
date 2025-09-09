import { Clock, Package, Shield, Truck, Users } from 'lucide-react';

const InfoSection = () => {
  const services = [
    {
      icon: <Package className="w-12 h-12" aria-hidden="true" />,
      title: "Spice Sourcing & Processing",
      description:
        "Direct procurement from trusted farmers in Unjha, Gujarat — Asia’s largest spice market yard. Advanced cleaning, grading, and sorting ensure premium export-ready cumin, fennel, fenugreek, and more.",
      features: [
        "Farmer Network",
        "99.5% Purity Cleaning",
        "Grading & Sorting",
        "Bulk Supply",
      ],
    },
    {
      icon: <Truck className="w-12 h-12" aria-hidden="true" />,
      title: "Packaging & Export",
      description:
        "Customized bulk and retail spice packaging solutions. Efficient logistics with Mundra & Kandla port proximity for seamless international exports.",
      features: [
        "Bulk & Retail Packaging",
        "Fumigation & SGS Checks",
        "Port Clearance",
        "On-time Dispatch",
      ],
    },
    {
      icon: <Shield className="w-12 h-12" aria-hidden="true" />,
      title: "Quality Assurance",
      description:
        "Certified quality checks at every stage. JM Masala ensures FSSAI & APEDA compliance, SGS/ISO quality control, and long shelf-life guarantees.",
      features: [
        "FSSAI & APEDA Certified",
        "SGS/ISO Quality Checks",
        "Moisture & Oil Content Testing",
        "Long Shelf Life Guarantee",
      ],
    },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" aria-hidden="true" />, value: "25+", label: "Countries Served Worldwide" },
    { icon: <Truck className="w-8 h-8" aria-hidden="true" />, value: "10,000 MT+", label: "Spices Exported Annually" },
    { icon: <Shield className="w-8 h-8" aria-hidden="true" />, value: "100%", label: "International Quality Compliance" },
    { icon: <Clock className="w-8 h-8" aria-hidden="true" />, value: "24/7", label: "Dedicated Client Support" },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700"
      aria-label="JM Masala Core Services - Indian Spice Export Company"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Services in <span className="text-amber-400">Spice Exports</span>
          </h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            JM Masala is a trusted <strong>Indian spice exporter from Unjha, Gujarat</strong>.
            We specialize in cumin, fennel, fenugreek, and psyllium seeds — delivering
            premium-quality spices with purity, trust, and global reach.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              aria-label={service.title}
            >
              <div className="text-amber-600 mb-6 group-hover:text-amber-500 transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-amber-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Stats Section */}
        <aside className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Why Choose JM Masala - Trusted Spice Exporter
            </h3>
            <p className="text-amber-100">Generations of trust, certified quality, and worldwide exports</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-amber-400 mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-amber-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </aside>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-amber-500 text-amber-900 px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors duration-300 font-semibold text-lg">
            Request a Quote for Indian Spice Exports
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
