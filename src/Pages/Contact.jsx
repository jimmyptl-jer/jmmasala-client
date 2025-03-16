import React from "react";
import { MapPin, Mail, Phone, Rocket } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-12 px-8 py-16 bg-[#FAEBDC]">
      {/* Left Side - Contact Info */}
      <div className="flex-1">
        <h3 className="text-red-700 italic text-lg font-semibold">Contact Info</h3>
        <h1 className="text-4xl font-heading font-bold mb-6 italic">Get In Touch</h1>

        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin size={30} className="text-red-600" />
            <div>
              <h2 className="text-lg font-semibold">Address</h2>
              <p className="text-lg">
                JM Masala Pvt. Ltd.<br />
                Span Mega Mall, Mahesana-Kheralu Bypass Highway <br />
                Visnagar, Gujarat, India.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail size={30} className="text-red-600" />
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-lg">jmmasala@gmail.com</p>
              <p className="text-lg">info@jmmasala.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone size={30} className="text-red-600" />
            <div>
              <h2 className="text-lg font-semibold">Phone</h2>
              <p className="text-lg">+91 9106766041</p>
              <p className="text-lg">+91 9824510478</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex-1 bg-white shadow-lg p-6 rounded-xl max-w-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-100 p-3 rounded-full">
            <Rocket size={30} className="text-red-600" />
          </div>
          <div>
            <h3 className="text-red-700 italic text-md font-semibold">For Any Query Regarding Services</h3>
            <h1 className="text-xl font-bold">Need Assistance? Drop us a Message.</h1>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-lg"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-lg"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-lg"
          ></textarea>
          <button className="w-full p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 text-lg font-semibold">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
