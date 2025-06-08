import React from "react";
import { MapPin, Mail, Phone, Rocket } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-12 px-8 py-16 bg-gradient-to-r from-turmeric to-spiceRed text-white">
      {/* Left Side - Contact Info */}
      <div className="flex-1 space-y-8">
        <h3 className="text-turmeric italic text-lg">Contact Info</h3>
        <h1 className="text-4xl font-heading tracking-wide">Get In Touch</h1>

        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-6">
            <MapPin size={32} className="text-cardamom" />
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <p className="text-lg leading-relaxed">
                JM Masala Pvt. Ltd.<br />
                Span Mega Mall, Mahesana-Kheralu Bypass Highway <br />
                Visnagar, Gujarat, India.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-6">
            <Mail size={32} className="text-cardamom" />
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-lg">jmmasala@gmail.com</p>
              <p className="text-lg">info@jmmasala.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-6">
            <Phone size={32} className="text-cardamom" />
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p className="text-lg">+91 9106766041</p>
              <p className="text-lg">+91 9824510478</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex-1 bg-white shadow-xl p-8 rounded-xl max-w-lg text-black">
        <div className="flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-full">
            <Rocket size={32} className="text-spiceRed" />
          </div>
          <div>
            <h3 className="text-spiceRed italic text-md">For Any Query Regarding Services</h3>
            <h1 className="text-2xl font-heading text-gray-900">Need Assistance? Drop us a Message.</h1>
          </div>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-spiceRed text-lg"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-spiceRed text-lg"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-spiceRed text-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-spiceRed text-lg"
          ></textarea>
          <button className="w-full p-3 bg-spiceRed text-white rounded-lg hover:bg-red-800 transition-all duration-300 text-lg">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
