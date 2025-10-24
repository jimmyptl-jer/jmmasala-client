import {
  Award,
  CheckCircle,
  Factory,
  Globe,
  Heart,
  Leaf,
  MapPin,
  Shield,
  Star,
  Target,
  TrendingUp,
  Truck,
  Users
} from 'lucide-react';
import { useEffect, useState } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({
    story: false,
    timeline: false,
    values: false,
    certifications: false,
    mission: false
  });
  const [activeTab, setActiveTab] = useState('heritage');

  const stats = [
    { number: '10+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { number: '25+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '500+', label: 'Trusted Farmers', icon: <Users className="w-6 h-6" /> },
    { number: '99.5%', label: 'Purity Guarantee', icon: <Star className="w-6 h-6" /> }
  ];

  const timeline = [
    {
      year: '1980s',
      title: 'Family Legacy Begins',
      description: 'Our grandparents started the family tradition in spice trading in Unjha, establishing deep roots in Asia\'s largest spice mandi.',
      icon: <Heart className="w-6 h-6" />
    },
    {
      year: '2000s',
      title: 'Modern Infrastructure',
      description: 'Invested in modern sortex cleaning technology and established quality control processes to meet international standards.',
      icon: <Factory className="w-6 h-6" />
    },
    {
      year: '2010',
      title: 'Export Excellence',
      description: 'JM Masala officially launched as an export company, combining traditional knowledge with modern export practices.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      year: '2015',
      title: 'Global Certifications',
      description: 'Achieved NABL certification, HACCP compliance, and registered with all major Indian export authorities.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      year: '2020',
      title: 'Sustainable Partnerships',
      description: 'Expanded farmer network and implemented sustainable sourcing practices across Gujarat and neighboring states.',
      icon: <Leaf className="w-6 h-6" />
    },
    {
      year: 'Today',
      title: 'Trusted Global Partner',
      description: 'Serving 25+ countries with premium quality spices, maintaining the highest standards of purity and compliance.',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'Every batch undergoes rigorous testing and quality control to ensure international standards.',
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      color: 'from-amber-50 to-amber-100'
    },
    {
      title: 'Farmer Partnership',
      description: 'Direct relationships with farmers ensure fair prices, quality sourcing, and sustainable practices.',
      icon: <Users className="w-8 h-8 text-amber-600" />,
      color: 'from-amber-50 to-amber-100'
    },
    {
      title: 'Global Reliability',
      description: 'Strategic location and efficient logistics ensure timely delivery to markets worldwide.',
      icon: <Globe className="w-8 h-8 text-green-600" />,
      color: 'from-green-50 to-green-100'
    },
    {
      title: 'Innovation & Tradition',
      description: 'Combining generations of spice knowledge with modern processing and export technologies.',
      icon: <Target className="w-8 h-8 text-purple-600" />,
      color: 'from-purple-50 to-purple-100'
    }
  ];

  const certifications = [
    { name: 'IEC (Importer Exporter Code)', authority: 'DGFT', description: 'Mandatory license for all exports' },
    { name: 'APEDA Registration', authority: 'Ministry of Commerce', description: 'Agricultural & processed food exports' },
    { name: 'Spices Board of India (RCMC)', authority: 'Government of India', description: 'Export license specific to Indian spices' },
    { name: 'FSSAI Certification', authority: 'Food Safety Authority', description: 'Food safety and standards compliance' },
    { name: 'HACCP / ISO 22000', authority: 'International Standards', description: 'Food safety management system' },
    { name: 'GST & MSME Registration', authority: 'Government of India', description: 'Registered Indian business entity' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <img
          src="https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg"
          alt="Spice Market Heritage"
          className="w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-white max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                About <span className="text-amber-400">JM Masala</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-amber-200 font-semibold">
                A Legacy of Excellence in Indian Spice Export
              </p>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
                From the heart of Asia's largest spice hub to global markets,
                JM Masala carries forward generations of expertise in sourcing and exporting premium Indian spices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-amber-500 to-amber-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Tabs Section */}
      <section id="story" className={`py-20 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-amber-600">Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the journey that made JM Masala a trusted name in global spice export
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'heritage', label: 'Heritage & Legacy' },
              { id: 'location', label: 'Strategic Location' },
              { id: 'expertise', label: 'Market Expertise' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-50 shadow-md'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {activeTab === 'heritage' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-amber-800 mb-6">Family Legacy Since Generations</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    JM Masala carries forward a proud family legacy in the spice trade, rooted in Unjha, Gujarat —
                    Asia's largest spice mandi, renowned globally for cumin, fennel, coriander, and psyllium.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    For generations, since the time of our grandparents, our family has been engaged in sourcing and trading spices.
                    Today, JM Masala combines this deep traditional knowledge with modern export practices to deliver
                    authentic Indian spices to global markets.
                  </p>
                  <div className="flex items-center gap-4 text-amber-700">
                    <Heart className="w-6 h-6" />
                    <span className="font-semibold">Tradition meets Innovation</span>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg"
                    alt="Traditional Spice Trading"
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            )}

            {activeTab === 'location' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg"
                    alt="Gujarat Spice Hub"
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-amber-800 mb-6">Strategic Location Advantage</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Located in Unjha, Gujarat — Asia's largest spice hub and trading center. Our proximity to the
                    world's most important spice markets gives us unparalleled access to the finest quality raw materials.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6 text-amber-600" />
                      <div>
                        <p className="font-semibold text-gray-800">4 Hours from Major Ports</p>
                        <p className="text-gray-600">Mundra & Kandla ports for global shipping</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Truck className="w-6 h-6 text-amber-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Reduced Logistics Costs</p>
                        <p className="text-gray-600">Fast turnaround and cost-effective shipping</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'expertise' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-amber-800 mb-6">Market Expertise & Insight</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    With over a decade in the spices market, we've built strong expertise, market insight,
                    and a reputation for delivering premium quality spices globally.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Globe className="w-6 h-6 text-amber-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Global Market Knowledge</p>
                        <p className="text-gray-600">Deep understanding of international requirements</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <TrendingUp className="w-6 h-6 text-amber-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Market Trends Analysis</p>
                        <p className="text-gray-600">Staying ahead of global spice market trends</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg"
                    alt="Global Spice Trade"
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className={`py-20 bg-white transition-all duration-1000 ${isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-amber-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global excellence - the JM Masala story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 to-amber-600"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-amber-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className={`py-20 bg-gradient-to-b from-amber-50 to-white transition-all duration-1000 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="text-amber-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our commitment to excellence in every aspect of our business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-gradient-to-br ${value.color} border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 bg-gray-900 text-white transition-all duration-1000 ${isVisible.certifications ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Certifications & <span className="text-amber-400">Compliance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fully registered and certified with all major Indian and international authorities
              to ensure quality, safety, and compliance in every shipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-2">{cert.name}</h3>
                    <p className="text-amber-400 text-sm font-medium mb-2">{cert.authority}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className={`py-20 bg-white transition-all duration-1000 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To bridge the gap between India's finest spice farmers and global markets,
                delivering authentic flavors while supporting sustainable farming communities
                and maintaining the highest standards of quality and purity.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the most trusted and preferred partner for premium Indian spices globally,
                known for uncompromising quality, ethical sourcing, and exceptional service
                that honors our heritage while embraces innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Experience the JM Masala difference - where tradition meets quality,
            and every spice tells a story of excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/JMMasalaProducts.pdf';
                link.download = 'JM-Masala-Catalog.pdf';
                link.click();
              }}
            >
              Get Product Catalog
            </button>

            <button
              className="border-2 border-white hover:bg-white hover:text-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              onClick={() => (window.location.href = '/get-quote')}
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
