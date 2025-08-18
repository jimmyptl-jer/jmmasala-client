import { Award, Globe, TrendingUp, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              About JM Masala
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Generations in Spice Trading
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              JM Masala carries forward a proud family legacy in the spice trade,
              rooted in <strong>Unjha, Gujarat</strong> — Asia’s largest spice mandi.
              For generations, our family has been sourcing and trading cumin, coriander, fennel,
              fenugreek, and psyllium, combining traditional expertise with modern export practices.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With direct access to local farmers and proximity to <strong>Mundra & Kandla ports</strong>,
              we ensure the finest quality, competitive pricing, and fast global delivery —
              making us a trusted partner for spice importers worldwide.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
                <div className="text-gray-600">Years Export Experience</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">25+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>

            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold">
              Discover Our Story
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4198022/pexels-photo-4198022.jpeg"
              alt="Indian spices export"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Certified Quality</div>
                  <div className="text-sm text-gray-600">APEDA | FSSAI | SGS</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Globe className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Global Presence</div>
                  <div className="text-sm text-gray-600">UAE | USA | Europe</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl">
            <div className="bg-amber-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">Farmer Partnerships</h3>
            <p className="text-gray-600">
              Working directly with Indian farmers ensures authenticity, freshness, and fair trade.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl">
            <div className="bg-amber-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">Global Reach</h3>
            <p className="text-gray-600">
              Delivering spices to more than 25 countries with efficient port logistics.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-3">Quality & Growth</h3>
            <p className="text-gray-600">
              Committed to delivering superior spices that fuel growth for our partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
