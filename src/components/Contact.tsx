import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" aria-hidden="true" />,
      title: "Phone",
      details: ["+91 98245 10478", "+91 91067 66041"],
      schema: "telephone"
    },
    {
      icon: <Mail className="w-6 h-6" aria-hidden="true" />,
      title: "Email",
      details: ["info@jmmasalexports.com", "support@jmmasalexports.com"],
      schema: "email"
    },
    {
      icon: <MapPin className="w-6 h-6" aria-hidden="true" />,
      title: "Office Address",
      details: ["JM Masala Pvt. Ltd.", "Unjha, Gujarat, India"],
      schema: "address"
    },
    {
      icon: <Clock className="w-6 h-6" aria-hidden="true" />,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
      schema: "openingHours"
    }
  ];

  return (
    <>
      {/* SEO Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "JM Masala Pvt. Ltd.",
          "description": "Premium spice exporter and importer specializing in cumin, fennel, fenugreek, turmeric, red chili, and psyllium",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Unjha",
            "addressRegion": "Gujarat",
            "addressCountry": "India"
          },
          "telephone": ["+91 98245 10478", "+91 91067 66041"],
          "email": ["info@jmmasalexports.com", "support@jmmasalexports.com"],
          "openingHours": "Mo-Sa 09:00-19:00",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 98245 10478",
            "contactType": "customer service"
          }
        })}
      </script>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <header className="text-center mb-16">
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Contact <span className="text-orange-600">JM Masala</span> - Premium Spice Exporters
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Connect with India's trusted spice exporters. Get premium quality cumin, fennel, fenugreek, turmeric,
              red chili, and psyllium for your business needs worldwide.
            </p>
          </header>

          {/* Grid: Contact Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch With Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <article key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white mb-4 shadow-md">
                      {info.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm" itemProp={info.schema}>
                          {info.schema === 'telephone' ? (
                            <a href={`tel:${detail}`} className="hover:text-orange-600 transition-colors">
                              {detail}
                            </a>
                          ) : info.schema === 'email' ? (
                            <a href={`mailto:${detail}`} className="hover:text-orange-600 transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3">Why Choose JM Masala?</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ 25+ years of spice export experience</li>
                  <li>✓ Premium quality assurance & certification</li>
                  <li>✓ Global shipping to 50+ countries</li>
                  <li>✓ Competitive wholesale pricing</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Quote & Information</h3>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3" role="status" aria-live="polite">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">Thank you! Your inquiry has been sent successfully. We'll respond within 24 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" itemScope itemType="https://schema.org/ContactForm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@company.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">Company Name</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-900 mb-2">Spice Product Interest</label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400 text-amber-950"
                  >
                    <option value="">Select spice product</option>
                    <option value="cumin">Cumin Seeds (Jeera)</option>
                    <option value="fennel">Fennel Seeds (Saunf)</option>
                    <option value="fenugreek">Fenugreek Seeds (Methi)</option>
                    <option value="turmeric">Turmeric Powder (Haldi)</option>
                    <option value="redChili">Red Chili Powder</option>
                    <option value="psyllium">Psyllium Husk (Isabgol)</option>
                    <option value="bulk-order">Bulk Mixed Order</option>
                    <option value="other">Other Spice Products</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">Your Requirements *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please describe your spice requirements, quantity needed, target market, and any specific quality certifications required..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 px-6 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 font-semibold flex items-center justify-center group shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Inquiry & Get Quote
                </button>
              </form>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Urgent Spice Quotation?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For immediate assistance with bulk orders, custom packaging, or urgent shipments,
                our spice export specialists are available for priority support.
              </p>
              <a
                href="tel:+919824510478"
                className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Call Now: +91 98245 10478
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;