import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const BestServices = () => {
  const services = [
    {
      category: "Import Solutions",
      title: "Premium Import Package",
      price: "Starting at $2,500",
      description: "Complete import management from supplier sourcing to final delivery",
      features: [
        "Supplier verification & sourcing",
        "Quality control & inspection",
        "Customs clearance & documentation",
        "Logistics & transportation",
        "24/7 tracking & support",
        "Risk management & insurance"
      ],
      popular: false,
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg"
    },
    {
      category: "Export Solutions",
      title: "Global Export Excellence",
      price: "Starting at $3,200",
      description: "Comprehensive export services to expand your market reach worldwide",
      features: [
        "Market research & analysis",
        "Export documentation & compliance",
        "International logistics coordination",
        "Trade finance assistance",
        "Dedicated account management",
        "Post-delivery support"
      ],
      popular: true,
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg"
    },
    {
      category: "Consulting Services",
      title: "Strategic Trade Consulting",
      price: "Custom Pricing",
      description: "Expert consultation to optimize your international trade operations",
      features: [
        "Trade strategy development",
        "Regulatory compliance guidance",
        "Risk assessment & mitigation",
        "Market entry strategies",
        "Supply chain optimization",
        "Ongoing strategic support"
      ],
      popular: false,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Premium Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions designed to meet your specific import-export needs,
            from startups to enterprise-level operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
                service.popular ? 'ring-2 ring-amber-400 transform scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <div className="bg-white/90 backdrop-blur-sm text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.category}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-3xl font-bold text-amber-600">
                    {service.price}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="bg-green-100 text-green-600 p-1 rounded-full flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group/btn ${
                  service.popular
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every business is unique. Let us create a tailored import-export solution
            that perfectly matches your specific requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
              Request Custom Quote
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 font-semibold">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestServices;
