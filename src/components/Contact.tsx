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
        className="jm-section jm-section--cream relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[var(--color-accent)] opacity-[0.05] blur-2xl" />
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[var(--color-primary)] opacity-[0.05] blur-2xl" />
        </div>

        <div className="jm-container relative z-10">
          {/* Section Header */}
          <header className="mb-16 text-center">
            <p className="jm-section-label">Contact</p>
            <h2
              id="contact-heading"
              className="jm-section-heading mb-4 text-[var(--color-text-dark)]"
            >
              Contact JM Masala – Premium Spice Exporters
            </h2>
            <div className="jm-section-underline" />
            <p className="jm-section-subtext max-w-4xl">
              Connect with India's trusted spice exporters. Get premium quality cumin, fennel, fenugreek, turmeric,
              red chili, and psyllium for your business needs worldwide.
            </p>
          </header>

          {/* Grid: Contact Info + Form */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h3 className="mb-8 text-2xl font-bold text-[var(--color-text-dark)]">
                Get In Touch With Us
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <article
                    key={index}
                    className="rounded-2xl border border-[var(--color-bg-beige)] bg-white p-6 shadow-[0_4px_20px_rgba(92,46,14,0.08)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(92,46,14,0.16)]"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white shadow-md">
                      {info.icon}
                    </div>
                    <h4 className="mb-3 text-lg font-semibold text-[var(--color-text-dark)]">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p
                          key={i}
                          className="text-sm text-[var(--color-text-medium)]"
                          itemProp={info.schema}
                        >
                          {info.schema === 'telephone' ? (
                            <a
                              href={`tel:${detail}`}
                              className="transition-colors hover:text-[var(--color-secondary)]"
                            >
                              {detail}
                            </a>
                          ) : info.schema === 'email' ? (
                            <a
                              href={`mailto:${detail}`}
                              className="transition-colors hover:text-[var(--color-secondary)]"
                            >
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
              <div className="rounded-2xl bg-[var(--color-primary)] p-6 text-white">
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
            <div className="rounded-[12px] border border-[var(--color-bg-beige)] bg-white p-8 shadow-[0_4px_24px_rgba(92,46,14,0.08)]">
              <h3 className="mb-6 text-2xl font-bold text-[var(--color-text-dark)]">
                Request Quote &amp; Information
              </h3>

              {submitted && (
                <div
                  className="mb-6 flex items-center space-x-3 rounded-lg border border-green-200 bg-green-50 p-4"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-green-800">
                    Thank you! Your inquiry has been sent successfully. We&apos;ll respond
                    within 24 hours.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" itemScope itemType="https://schema.org/ContactForm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-[4px] border border-[var(--color-bg-beige)] px-4 py-3 text-[15px] text-[var(--color-text-dark)] placeholder:text-[#A0856A] transition-all duration-200 hover:border-[var(--color-secondary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-amber-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@company.com"
                      className="w-full rounded-[4px] border border-[var(--color-bg-beige)] px-4 py-3 text-[15px] text-[var(--color-text-dark)] placeholder:text-[#A0856A] transition-all duration-200 hover:border-[var(--color-secondary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-amber-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full rounded-[4px] border border-[var(--color-bg-beige)] px-4 py-3 text-[15px] text-[var(--color-text-dark)] placeholder:text-[#A0856A] transition-all duration-200 hover:border-[var(--color-secondary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-amber-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-[4px] border border-[var(--color-bg-beige)] px-4 py-3 text-[15px] text-[var(--color-text-dark)] placeholder:text-[#A0856A] transition-all duration-200 hover:border-[var(--color-secondary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-amber-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="product"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]"
                  >
                    Spice Product Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full rounded-[4px] border border-[var(--color-bg-beige)] px-4 py-3 text-[15px] text-[var(--color-text-dark)] transition-all duration-200 hover:border-[var(--color-secondary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-amber-200"
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
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]"
                  >
                    Your Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please describe your spice requirements, quantity needed, target market, and any specific quality certifications required..."
                    className="w-full resize-none rounded-[4px] border border-[var(--color-bg-beige)] px-4 py-3 text-[15px] text-[var(--color-text-dark)] placeholder:text-[#A0856A] transition-all duration-200 hover:border-[var(--color-secondary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-amber-200"
                  ></textarea>
                </div>

                <button type="submit" className="w-full jm-btn jm-btn--primary">
                  <Send className="mr-2 h-5 w-5" />
                  Send Inquiry &amp; Get Quote
                </button>
              </form>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-bg-beige)] bg-white p-8 shadow-[0_4px_24px_rgba(92,46,14,0.08)]">
              <h3 className="mb-4 text-2xl font-bold text-[var(--color-text-dark)]">
                Need Urgent Spice Quotation?
              </h3>
              <p className="mb-6 leading-relaxed text-[var(--color-text-medium)]">
                For immediate assistance with bulk orders, custom packaging, or urgent shipments,
                our spice export specialists are available for priority support.
              </p>
              <a
                href="tel:+919824510478"
                className="jm-btn jm-btn--secondary inline-block"
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