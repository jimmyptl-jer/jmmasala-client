import { Mail, MapPin, Phone } from 'lucide-react';
const Footer = () => {
  return (
    <>
    {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">🌶️</span>
                <span className="text-2xl font-bold text-amber-400">JM Masala</span>
              </div>
              <p className="text-gray-300 mb-4">
                Premium Indian spices exporter from Unjha, Gujarat.
                Delivering authentic flavors to global markets with guaranteed quality and purity.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">M</span>
                </div>
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">L</span>
                </div>
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">W</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Our Products</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Quality Standards</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Export Markets</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Certifications</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    Near APMC Market Yard<br />
                    Unjha, Gujarat – 384170, India
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+91 91067 66041</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">jmmasala@outlook.in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 JM Masala. All rights reserved. | Premium Indian Spices Exporter
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
