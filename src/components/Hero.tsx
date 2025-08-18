import { ArrowRight, Globe, Package, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg"
          alt="Indian spices export"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-amber-900 bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="inline-block bg-amber-500 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🌿 From Unjha – Asia’s Largest Spice Hub
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Indian Spices
            <span className="text-amber-400 block">From Our Farms to Your Markets</span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Carrying forward a family legacy in spice trading, JM Masala delivers
            high-quality Cumin, Fennel, Coriander, Fenugreek, and Psyllium
            worldwide. Trusted by importers for purity, consistency, and
            hassle-free logistics from India’s spice capital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-amber-500 text-amber-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 transition-all duration-300 flex items-center group">
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-900 transition-all duration-300">
              View Our Products
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 p-3 rounded-lg">
                <Globe className="w-6 h-6 text-amber-900" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-gray-300">Countries Exported</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 p-3 rounded-lg">
                <Package className="w-6 h-6 text-amber-900" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10,000 MT+</div>
                <div className="text-gray-300">Spices Supplied</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-amber-900" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-gray-300">Quality Assurance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
