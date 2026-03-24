import { Award, Globe, Package, Shield, TrendingUp, Users } from 'lucide-react';

const FeatureCard = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/JMMasalaProducts.pdf';
    link.download = 'JMMasalaProducts.pdf';
    link.click();
  }

  const features = [
    {
      icon: <Shield className="w-10 h-10" aria-hidden="true" />,
      title: "Unmatched Purity",
      description: "All spices undergo advanced cleaning, grading, and sorting to achieve up to 99.5% purity.",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <Package className="w-10 h-10" aria-hidden="true" />,
      title: "Modern Processing",
      description: "Equipped with latest machinery for hygienic processing, packaging, and bulk handling.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Award className="w-10 h-10" aria-hidden="true" />,
      title: "Certified Quality",
      description: "FSSAI, APEDA, and ISO certified with SGS inspections ensuring international standards.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Globe className="w-10 h-10" aria-hidden="true" />,
      title: "Global Network",
      description: "Supplying premium spices to <strong>25+ countries</strong> across Asia, Europe, Middle East, and USA.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <TrendingUp className="w-10 h-10" aria-hidden="true" />,
      title: "Competitive Pricing",
      description: "Direct sourcing from farmers of Unjha ensures the best quality at the most reasonable rates.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Users className="w-10 h-10" aria-hidden="true" />,
      title: "Legacy of Trust",
      description: "A family heritage in spices, building long-term relationships based on honesty & reliability.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section
      className="py-20 bg-gray-50"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            What Makes JM Masala Unique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With generations of expertise and a modern approach to spice processing,
            we deliver <strong>purity, authenticity, and trust</strong> to our global buyers.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                aria-hidden="true"
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-amber-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                <span dangerouslySetInnerHTML={{ __html: feature.description }} />
              </p>

              {/* Hover underline */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Partner With JM Masala Today</h3>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Trusted by buyers worldwide for authentic Indian spices. Let us
            deliver quality and consistency to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 text-amber-900 px-8 py-3 rounded-lg hover:bg-amber-400 transition-colors duration-300 font-semibold" onClick={() => window.location.href = '/get-quote'}>
              Request a Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-amber-700 transition-colors duration-300 font-semibold" onClick={handleDownload}>
              Download Product Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
