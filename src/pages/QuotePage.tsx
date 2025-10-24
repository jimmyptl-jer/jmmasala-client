const QuotePage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8 border border-orange-100">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-orange-700 text-center mb-3">
          Get a Quote
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Tell us about your spice requirements — we’ll get back to you with a
          personalized quote.
        </p>

        {/* Quote Form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Product */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-semibold mb-2">Product / Spice Name</label>
            <input
              type="text"
              placeholder="Example: Cumin Seeds, Turmeric Powder..."
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Quantity */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Quantity Required</label>
            <input
              type="text"
              placeholder="e.g., 100 kg, 1 ton"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Country of Import</label>
            <input
              type="text"
              placeholder="e.g., Canada, UAE, UK"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-semibold mb-2">Additional Details</label>
            <textarea
              rows={4}
              placeholder="Any packaging preferences, delivery timeline, or special notes..."
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300"
            >
              Submit Quote Request
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="text-center mt-10 text-gray-600 text-sm">
          <p>
            Prefer direct contact? Email us at{" "}
            <a
              href="mailto:info@jmmasalaexports.com"
              className="text-orange-600 font-medium underline"
            >
              info@jmmasalaexports.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuotePage;
