import { Mail, MapPin, Phone, Globe, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Facebook, Linkedin } from 'lucide-react';

import JMLogo from "../assets/JmMasala.png";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* SEO Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "JM Masala",
          "alternateName": "JM Masala Indian Spice Exporter",
          "description": "Premium Indian spices exporter from Unjha, Gujarat. Specializing in cumin, fennel, fenugreek, turmeric, red chili, and psyllium export worldwide.",
          "url": "https://jmmasalaexports.com",
          "logo": "https://jmmasalaexports.com/assets/JmMasala.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "A-18, APMC Market Yard",
            "addressLocality": "Unjha",
            "addressRegion": "Gujarat",
            "postalCode": "384370",
            "addressCountry": "IN"
          },
          "telephone": "+91 91067 66041",
          "email": "info@jmmasalaexports.com",
          "foundingDate": "1999",
          "sameAs": [
            "https://www.facebook.com/jmmasala",
            "https://www.linkedin.com/company/jm-masala",
            "https://jmmasala.com"
          ]
        })}
      </script>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div >
                    <img
                      src={JMLogo} // The image will now be passed as a prop
                      alt={`JM Masala profile`}
                      className="w-20 W-20 rounded-full object-cover mr-4"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                      JM Masala
                    </h3>
                    <p className="text-gray-300 text-sm font-medium">
                      Premium Indian Spice Exporter Since 1999
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  India's trusted spice exporter from the heart of Gujarat's spice belt.
                  We deliver authentic, premium-quality cumin, fennel, fenugreek, turmeric,
                  and other spices to global markets with certified quality assurance.
                </p>

                {/* Social Media */}
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/jmmasala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Follow JM Masala on Facebook"
                  >
                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/jm-masala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Follow JM Masala on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://jmmasalaexports.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Visit JM Masala Website"
                  >
                    <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold text-orange-400 mb-6 relative">
                  Quick Links
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400"></div>
                </h4>
                <nav>
                  <ul className="space-y-3">
                    <li>
                      <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">
                        About JM Masala
                      </a>
                    </li>
                    <li>
                      <a href="#products" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">
                        Spice Products
                      </a>
                    </li>
                    <li>
                      <a href="#quality" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">
                        Quality Standards
                      </a>
                    </li>
                    <li>
                      <a href="#export" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">
                        Export Markets
                      </a>
                    </li>
                    <li>
                      <a href="#certifications" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">
                        Certifications
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-xl font-bold text-orange-400 mb-6 relative">
                  Contact Info
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400"></div>
                </h4>
                <address className="not-italic space-y-4">
                  <div className="flex items-start space-x-3 group">
                    <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="text-gray-300 text-sm leading-relaxed">
                      <strong>JM Masala Pvt. Ltd.</strong><br />
                      A-18, APMC Market Yard<br />
                      Unjha, Gujarat – 384370<br />
                      India
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <Phone className="w-5 h-5 text-orange-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <a
                      href="tel:+919106766041"
                      className="text-gray-300 text-sm hover:text-orange-400 transition-colors"
                    >
                      +91 98245 10478 / +91 91067 66041
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <a
                      href="mailto:info@jmmasalaexports.com"
                      className="text-gray-300 text-sm hover:text-orange-400 transition-colors"
                    >
                      info@jmmasalaexports.com
                    </a>
                  </div>
                </address>

                {/* Business Hours */}
                <div className="mt-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                  <h5 className="text-orange-400 font-semibold text-sm mb-2">Business Hours</h5>
                  <p className="text-gray-300 text-xs">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-center md:text-left">
                  <p className="text-gray-400 text-sm">
                    © {currentYear} JM Masala. All rights reserved.
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Premium Indian Spices Exporter | Unjha, Gujarat
                  </p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-xs">
                  <a href="#privacy" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Privacy Policy
                  </a>
                  <span className="text-gray-600">|</span>
                  <a href="#terms" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Terms of Service
                  </a>
                  <span className="text-gray-600">|</span>
                  <a href="#sitemap" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;