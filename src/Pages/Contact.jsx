import React from "react";
import { MapPin, Mail, Phone, Rocket } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-16 px-6 md:px-16 py-16 bg-softBeige max-w-7xl mx-auto">
      {/* Left Side - Contact Info */}
      <div className="flex-1 min-w-[280px]">
        <h3 className="text-earthBrown italic text-lg font-semibold mb-1">Contact Info</h3>
        <h1 className="text-4xl font-heading font-bold mb-8 italic text-earthBrown leading-tight">
          Get In Touch
        </h1>

        <div className="space-y-10">
          {/* Address */}
          <div className="flex items-start gap-5">
            <MapPin size={32} className="text-limePrimary mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-darkSlate mb-1">Address</h2>
              <address className="text-lg not-italic text-darkSlate leading-relaxed">
                JM Masala Pvt. Ltd.<br />
                Span Mega Mall, Mahesana-Kheralu Bypass Highway <br />
                Visnagar, Gujarat, India.
              </address>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-5">
            <Mail size={32} className="text-limePrimary mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-darkSlate mb-1">Email</h2>
              <p className="text-lg text-darkSlate leading-relaxed">jmmasala@gmail.com</p>
              <p className="text-lg text-darkSlate leading-relaxed">info@jmmasala.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-5">
            <Phone size={32} className="text-limePrimary mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-darkSlate mb-1">Phone</h2>
              <p className="text-lg text-darkSlate leading-relaxed">+91 9106766041</p>
              <p className="text-lg text-darkSlate leading-relaxed">+91 9824510478</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Divider on medium+ screens */}
      <div className="hidden md:block border-l-2 border-dashed border-limeSecondary mx-12"></div>

      {/* Right Side - Contact Form */}
      <div className="flex-1 min-w-[320px] bg-white shadow-lg p-8 rounded-xl max-w-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-limePrimary/20 p-3 rounded-full">
            <Rocket size={32} className="text-limePrimary" />
          </div>
          <div>
            <h3 className="text-earthBrown italic text-md font-semibold mb-1">
              For Any Query Regarding Services
            </h3>
            <h1 className="text-2xl font-bold text-darkSlate leading-snug">
              Need Assistance? Drop us a Message.
            </h1>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5" noValidate>
          <label className="block">
            <span className="sr-only">Your Name</span>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-limeSecondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-limeSecondary text-lg text-darkSlate"
              required
            />
          </label>
          <label className="block">
            <span className="sr-only">Your Email Address</span>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-4 border border-limeSecondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-limeSecondary text-lg text-darkSlate"
              required
            />
          </label>
          <label className="block">
            <span className="sr-only">Subject</span>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border border-limeSecondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-limeSecondary text-lg text-darkSlate"
              required
            />
          </label>
          <label className="block">
            <span className="sr-only">Your Message</span>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 border border-limeSecondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-limeSecondary text-lg text-darkSlate resize-none"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full p-4 bg-darkSlate text-white rounded-lg hover:bg-darkSlate/90 text-lg font-semibold transition-colors cursor-pointer"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
