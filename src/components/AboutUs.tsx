import { Award, Globe, TrendingUp, Users } from 'lucide-react';
import MainHeaderImage from "../assets/mainpageimage.png";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              About JM Masala
            </span>

            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold text-amber-900 mb-6"
            >
              Leading Indian Spice Exporter from Unjha
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>JM Masala</strong> carries forward a proud family legacy in
              the spice trade, rooted in <strong>Unjha, Gujarat</strong> —
              Asia’s largest spice mandi and hub for
              <strong> cumin, coriander, fennel, fenugreek,</strong> and{' '}
              <strong>psyllium exports</strong>. For generations, our family has
              combined traditional expertise with modern export practices.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With direct farmer partnerships and proximity to{' '}
              <strong>Mundra & Kandla ports</strong>, we deliver the finest
              quality spices at competitive prices with fast, reliable global
              shipping. This makes us a trusted partner for{' '}
              <strong>spice importers and distributors worldwide</strong>.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
                <p className="text-gray-700">Years Export Experience</p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">25+</div>
                <p className="text-gray-700">Countries Served</p>
              </div>
            </div>

            <a
              href="/about"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold inline-block"
            >
              Discover Our Story
            </a>
          </div>

          {/* Right Content */}
          <div className="relative">
            <img
              src={MainHeaderImage}
              alt="Premium Indian spices exporter from Unjha - cumin, fennel, coriander"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              loading="lazy"
            />

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Certified Quality</div>
                  <p className="text-sm text-gray-600">APEDA | FSSAI | SGS</p>
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
                  <p className="text-sm text-gray-600">UAE | USA | Europe</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="text-center p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl">
            <div className="bg-amber-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">
              Farmer Partnerships
            </h3>
            <p className="text-gray-700">
              We work directly with Indian farmers to ensure authenticity,
              freshness, and fair trade practices in spice sourcing.
            </p>
          </article>

          <article className="text-center p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl">
            <div className="bg-amber-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">Global Reach</h3>
            <p className="text-gray-700">
              Delivering spices to more than 25 countries with efficient port
              logistics and international trade compliance.
            </p>
          </article>

          <article className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-3">
              Quality & Growth
            </h3>
            <p className="text-gray-700">
              Committed to delivering premium-quality spices that fuel business
              growth for our partners worldwide.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
