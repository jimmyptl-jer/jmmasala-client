import { Building, CheckCircle, Clock, Globe, Mail, MapPin, MessageSquare, Package, Phone, Send, Shield, Star, User } from 'lucide-react';
import React, { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  country: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  color: string;
}

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: [
        "A-18, APMC Market Yard",
        "Unjha, Mehsana District",
        "Gujarat – 384170, India"
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: [
        "+91 91067 66041",
        "+91 98245 10478"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: [
        "info@jmmasalaexports.com"
      ],
      color: "from-amber-600 to-yellow-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 6:00 PM",
        "Sunday: Closed",
        "IST (Indian Standard Time)"
      ],
      color: "from-orange-400 to-amber-500"
    }
  ];

  const products = [
    "Cumin Seeds",
    "Coriander Seeds",
    "Fennel Seeds",
    "Fenugreek Seeds",
    "Psyllium Seeds & Husk",
    "Custom Spice Blend",
    "Other (Please specify in message)"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          country: '',
          phone: '',
          product: '',
          quantity: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-6 py-3 rounded-full mb-6">
            <Globe className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-medium">Global Spice Exporters Since Generations</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Touch</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to source premium Indian spices? Connect with our export team for quotes,
            samples, and custom solutions tailored to your market needs.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.color} text-white mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section id="inquiry" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                <MessageSquare className="inline-block w-8 h-8 text-amber-500 mr-3" />
                Send Us Your Inquiry
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your inquiry has been submitted successfully. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline-block w-4 h-4 mr-1" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline-block w-4 h-4 mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Building className="inline-block w-4 h-4 mr-1" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Globe className="inline-block w-4 h-4 mr-1" />
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your country"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline-block w-4 h-4 mr-1" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Package className="inline-block w-4 h-4 mr-1" />
                        Product Interest *
                      </label>
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a product</option>
                        {products.map((product, index) => (
                          <option key={index} value={product}>{product}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Quantity (MT/Year)
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="e.g., 100 MT, 50 containers, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="inline-block w-4 h-4 mr-1" />
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Please tell us about your requirements, quality specifications, packaging needs, target markets, or any specific questions you have..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl'
                      }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Send Inquiry</span>
                      </div>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Location Map Placeholder */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  <MapPin className="inline-block w-6 h-6 text-amber-500 mr-2" />
                  Find Us in Unjha
                </h3>

                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 mb-6 text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Asia's Largest Spice Hub</h4>
                  <p className="text-gray-600">Located in the heart of Unjha's spice trading district</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Strategic Location</h5>
                      <p className="text-gray-600 text-sm">Just 4 hours from Mundra & Kandla ports</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">APMC Market Access</h5>
                      <p className="text-gray-600 text-sm">Direct access to Asia's largest spice mandi</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Transportation Hub</h5>
                      <p className="text-gray-600 text-sm">Excellent connectivity for efficient logistics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  <Star className="inline-block w-6 h-6 text-amber-500 mr-2" />
                  Why Partner With Us?
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">Competitive export pricing</span>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">Multiple quality grades available</span>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">All export certifications included</span>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">Fast shipping from Kandla/Mundra ports</span>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">Flexible packaging options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
          <p className="text-amber-100 text-lg mb-8">
            Our export team is ready to help with quotes, samples, and custom solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919106766041"
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: +91 91067 66041</span>
            </a>

            <a
              href="mailto:info@jmmasalaexports.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              <Shield className="inline-block w-8 h-8 text-amber-500 mr-3" />
              Certified & Trusted
            </h3>
            <p className="text-lg text-gray-600">
              Fully registered with India's leading export and food safety authorities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "IEC", desc: "Export License", icon: "📋" },
              { name: "APEDA", desc: "Agri Export Authority", icon: "🌾" },
              { name: "Spices Board", desc: "Spice Export License", icon: "🌶️" },
              { name: "FSSAI", desc: "Food Safety Standards", icon: "🛡️" },
              { name: "HACCP", desc: "Safety Management", icon: "⭐" },
              { name: "NABL Lab", desc: "Certified Testing", icon: "🔬" }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="text-3xl mb-2">{cert.icon}</div>
                <h4 className="font-bold text-gray-800 text-sm">{cert.name}</h4>
                <p className="text-xs text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
