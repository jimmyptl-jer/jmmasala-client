import { ArrowRight, Globe, Package, Shield, ArrowDown } from "lucide-react";
import {
  GiChiliPepper,
  GiHerbsBundle,
  GiGrain,
  GiPowderBag,
  GiBeanstalk,
  GiPeas,
} from "react-icons/gi";

const Hero = () => {
  return (
    <header
      role="banner"
      id="home"
      className="relative min-h-screen flex items-center bg-parchment-100"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with light overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/8d/Unjha_Market_Yard%2C_Gujarat.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      </div>

      {/* Content Split */}
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="max-w-2xl">
          <div className="inline-block bg-amber-600 text-amber-50 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
            🌿 From Unjha – Asia's Largest Spice Hub
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-snug sm:leading-normal"
          >
            Premium Indian Spices
            <span className="text-amber-600 block">
              From Our Farms to Your Markets
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
            Carrying forward a family legacy in spice trading, <strong>JM Masala</strong> is a trusted{" "}
            <strong>Indian spice exporter</strong> from Unjha – Asia’s largest spice hub.
            We deliver premium <strong>Cumin, Fennel, Chili, Turmeric, Fenugreek</strong>, and <strong>Psyllium</strong> worldwide,
            ensuring purity, consistency, and hassle-free logistics for global importers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#quote"
              className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center group hover:bg-amber-700 transition-all duration-300 focus:ring-2 focus:ring-amber-300 focus:outline-none"
              role="button"
              aria-label="Request a quote for premium Indian spices"
            >
              Request a Quote for Spices
              <ArrowRight
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </a>
            <a
              href="#products"
              className="border-2 border-amber-600 text-amber-900 px-8 py-4 rounded-lg font-semibold text-lg text-center hover:bg-amber-600 hover:text-white transition-all duration-300 focus:ring-2 focus:ring-amber-300 focus:outline-none"
              role="button"
              aria-label="Browse our spice product catalog"
            >
              Explore Our Spice Catalog
            </a>
          </div>

          {/* Stats */}
          <section
            aria-label="Key business metrics"
            className="pt-8 border-t border-gray-200"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 list-none">
              <li className="flex items-center space-x-3">
                <div className="bg-amber-600 p-3 rounded-lg flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-text-primary">
                    25+
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    Countries Exported
                  </div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-amber-600 p-3 rounded-lg flex-shrink-0">
                  <Package className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-text-primary">
                    10,000 MT+
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    Spices Supplied
                  </div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-amber-600 p-3 rounded-lg flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-text-primary">
                    100%
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    Quality Assurance
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>

        {/* RIGHT SIDE - Spice Icons Grid */}
        <div>
          <h2 className="sr-only">Spices We Export</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-amber-700 justify-center">
            <div className="flex flex-col items-center" aria-label="Cumin Seeds">
              <GiGrain className="text-5xl" aria-hidden="true" />
              <span className="text-sm text-gray-600 mt-2">Cumin</span>
            </div>
            <div className="flex flex-col items-center" aria-label="Fennel Seeds">
              <GiHerbsBundle className="text-5xl" aria-hidden="true" />
              <span className="text-sm text-gray-600 mt-2">Fennel</span>
            </div>
            <div className="flex flex-col items-center" aria-label="Chili Peppers">
              <GiChiliPepper className="text-5xl" aria-hidden="true" />
              <span className="text-sm text-gray-600 mt-2">Chili</span>
            </div>
            <div className="flex flex-col items-center" aria-label="Turmeric Powder">
              <GiPowderBag className="text-5xl" aria-hidden="true" />
              <span className="text-sm text-gray-600 mt-2">Turmeric</span>
            </div>
            <div className="flex flex-col items-center" aria-label="Fenugreek Seeds">
              <GiBeanstalk className="text-5xl" aria-hidden="true" />
              <span className="text-sm text-gray-600 mt-2">Fenugreek</span>
            </div>
            <div className="flex flex-col items-center" aria-label="Psyllium Seeds">
              <GiPeas className="text-5xl" aria-hidden="true" />
              <span className="text-sm text-gray-600 mt-2">Psyllium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown
          className="w-6 h-6 text-amber-700 opacity-70 hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
        <span className="sr-only">Scroll down for more content</span>
      </div>
    </header>
  );
};

export default Hero;
