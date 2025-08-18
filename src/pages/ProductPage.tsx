import { Award, Beaker, CheckCircle, Globe, Package, Star } from 'lucide-react';
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  botanicalName: string;
  description: string;
  icon: string;
  specifications: {
    purity: string;
    moisture: string;
    color: string;
    specialFeature: string;
  };
  grades: string[];
  applications: string[];
}

interface QualityGrade {
  region: string;
  purity: string;
  moisture: string;
  admixture: string;
  color: string;
}

const JMMasalaProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number>(0);
  const [selectedGrade, setSelectedGrade] = useState<string>('Europe');

  const products: Product[] = [
    {
      id: 0,
      name: "Cumin Seeds",
      botanicalName: "Cuminum cyminum",
      description: "One of Unjha's flagship exports and cornerstone of Indian spice heritage. Premium cumin seeds sourced directly from trusted farmers and the Unjha APMC market.",
      icon: "🌰",
      specifications: {
        purity: "98-99.5%",
        moisture: "Max 8-10%",
        color: "Brown to Dark Brown",
        specialFeature: "Oil Content: 2.5-4.5%"
      },
      grades: ["Europe Quality", "Singapore Quality", "USA Quality", "Gulf Quality"],
      applications: ["Spice Blends", "Culinary", "Medicine", "Aromatherapy"]
    },
    {
      id: 1,
      name: "Coriander Seeds",
      botanicalName: "Coriandrum sativum",
      description: "Premium-grade coriander in multiple varieties including Indian (Eagle, Parrot, Badami), Russian, and European. Known for strong citrusy aroma and rich oil content.",
      icon: "🌾",
      specifications: {
        purity: "Min 98%",
        moisture: "8-10%",
        color: "Green to Golden Yellow",
        specialFeature: "Splits Level: < 2%"
      },
      grades: ["Indian Eagle", "Indian Parrot", "Badami", "Russian", "European"],
      applications: ["Spice Blends", "International Exports", "Culinary", "Food Processing"]
    },
    {
      id: 2,
      name: "Fennel Seeds",
      botanicalName: "Foeniculum vulgare",
      description: "Export-quality fennel seeds with sweet, licorice-like flavor. Carefully sorted and cleaned with modern machinery for uniform size and premium purity.",
      icon: "🌿",
      specifications: {
        purity: "Min 99%",
        moisture: "Max 8%",
        color: "Greenish-brown to Light Brown",
        specialFeature: "Broken Seeds: Max 1%"
      },
      grades: ["European Grade", "Singapore Grade", "Small Seeds", "Bold Seeds"],
      applications: ["Culinary", "Medicinal", "Confectionery", "Tea Blends"]
    },
    {
      id: 3,
      name: "Fenugreek Seeds",
      botanicalName: "Trigonella foenum-graecum",
      description: "Export-grade fenugreek known for bold size, golden-yellow color, and strong natural aroma. Rich in flavor and medicinal properties.",
      icon: "🌱",
      specifications: {
        purity: "99%",
        moisture: "Standard",
        color: "Yellowish to Golden Brown",
        specialFeature: "Shape: Cuboid, Size: Semi Bold/Bold"
      },
      grades: ["Semi Bold", "Bold", "Premium Grade"],
      applications: ["Culinary", "Health Supplements", "Ayurvedic", "Spice Blends"]
    },
    {
      id: 4,
      name: "Psyllium Seeds & Husk",
      botanicalName: "Plantago ovata",
      description: "Premium psyllium from Gujarat's leading hub with high soluble fiber content and excellent swelling properties. Used across pharmaceutical and nutraceutical industries.",
      icon: "🌾",
      specifications: {
        purity: "Min 99%",
        moisture: "Max 10-12%",
        color: "Light Brown to Off-White",
        specialFeature: "Swell Volume: Min 25-40 ml/g"
      },
      grades: ["Seeds", "Husk", "Pharmaceutical Grade"],
      applications: ["Pharmaceutical", "Nutraceutical", "Food Industry", "Health Products"]
    }
  ];

  const qualityGrades: QualityGrade[] = [
    {
      region: "Europe",
      purity: "98%, 99%, 99.5%",
      moisture: "Max 8%",
      admixture: "Max 1.75%",
      color: "Brown"
    },
    {
      region: "Singapore",
      purity: "98%, 99%",
      moisture: "Max 8-10%",
      admixture: "Max 2%",
      color: "Grayish Brown"
    },
    {
      region: "USA",
      purity: "99.50%",
      moisture: "Max 8%",
      admixture: "Max 1.5%",
      color: "Dark Brown"
    },
    {
      region: "Gulf",
      purity: "98%",
      moisture: "Max 9-10%",
      admixture: "Max 2-3%",
      color: "Brown"
    }
  ];

  const processingStandards = [
    { icon: <Beaker className="w-6 h-6" />, title: "Sortex/Machine Cleaned", desc: "Advanced cleaning technology" },
    { icon: <Award className="w-6 h-6" />, title: "ETO/Steam Sterilization", desc: "Available on request" },
    { icon: <Package className="w-6 h-6" />, title: "Flexible Packaging", desc: "25kg/50kg PP bags + custom retail" },
    { icon: <Globe className="w-6 h-6" />, title: "NABL Certified Testing", desc: "International compliance assured" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Premium Spice Products</h1>
            <p className="text-amber-100 text-lg">Export-grade Indian spices meeting international standards</p>
          </div>
        </div>
      </div>

      {/* Product Navigation */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedProduct === index
                    ? 'bg-amber-500 text-white shadow-lg transform scale-105'
                    : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                }`}
              >
                <span className="text-lg">{product.icon}</span>
                <span>{product.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Product Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-200 overflow-hidden">
          {/* Product Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-6xl">{products[selectedProduct].icon}</div>
                <div>
                  <h2 className="text-3xl font-bold">{products[selectedProduct].name}</h2>
                  <p className="text-amber-100 italic text-lg">{products[selectedProduct].botanicalName}</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <span className="ml-2 font-semibold">Premium Grade</span>
              </div>
            </div>
          </div>

          {/* Product Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Description & Specifications */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Product Description</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {products[selectedProduct].description}
                  </p>
                </div>

                {/* Specifications Table */}
                <div className="bg-amber-50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Beaker className="w-5 h-5 mr-2 text-amber-600" />
                    Technical Specifications
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(products[selectedProduct].specifications).map(([key, value]) => (
                      <div key={key} className="bg-white rounded-lg p-4 border border-amber-200">
                        <div className="text-sm text-gray-500 uppercase tracking-wide">{key}</div>
                        <div className="text-lg font-semibold text-amber-600">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {products[selectedProduct].applications.map((app, index) => (
                      <span
                        key={index}
                        className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grades & Quality */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Available Grades</h4>
                  <div className="space-y-2">
                    {products[selectedProduct].grades.map((grade, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-amber-600" />
                        <span className="text-gray-700">{grade}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-amber-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Quality Assurance</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Sortex Machine Cleaned</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">NABL Lab Tested</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">International Standards</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Fumigation Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Standards by Region */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200 p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            International Quality Standards
          </h3>

          {/* Region Selector */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {qualityGrades.map((grade) => (
              <button
                key={grade.region}
                onClick={() => setSelectedGrade(grade.region)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedGrade === grade.region
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                }`}
              >
                {grade.region} Quality
              </button>
            ))}
          </div>

          {/* Quality Specifications Table */}
          <div className="overflow-x-auto">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 min-w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-200">
                    <div className="text-2xl font-bold text-amber-600 mb-1">
                      {qualityGrades.find(g => g.region === selectedGrade)?.purity}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">Purity</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-200">
                    <div className="text-2xl font-bold text-amber-600 mb-1">
                      {qualityGrades.find(g => g.region === selectedGrade)?.moisture}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">Moisture</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-200">
                    <div className="text-2xl font-bold text-amber-600 mb-1">
                      {qualityGrades.find(g => g.region === selectedGrade)?.admixture}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">Admixture</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-200">
                    <div className="text-lg font-bold text-amber-600 mb-1">
                      {qualityGrades.find(g => g.region === selectedGrade)?.color}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">Color</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Processing Standards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processingStandards.map((standard, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-amber-500 mb-4 flex justify-center">
                {standard.icon}
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{standard.title}</h4>
              <p className="text-gray-600 text-sm">{standard.desc}</p>
            </div>
          ))}
        </div>

        {/* Packaging Options */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl text-white p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Packaging Options</h3>
            <p className="text-amber-100 text-lg">Flexible packaging solutions for diverse global requirements</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <Package className="w-12 h-12 mx-auto mb-4 text-amber-200" />
              <h4 className="font-bold text-xl mb-2">25 KG Bags</h4>
              <p className="text-amber-100">PP bags with inner liner for bulk export</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <Package className="w-12 h-12 mx-auto mb-4 text-amber-200" />
              <h4 className="font-bold text-xl mb-2">50 KG Bags</h4>
              <p className="text-amber-100">Large volume packaging for industrial use</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <Package className="w-12 h-12 mx-auto mb-4 text-amber-200" />
              <h4 className="font-bold text-xl mb-2">Custom Retail</h4>
              <p className="text-amber-100">Private label packs available on request</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Source Premium Spices?</h3>
            <p className="text-gray-600 text-lg mb-6">
              Contact us for detailed specifications, pricing, and custom requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Request Quote
              </button>
              <button className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all duration-300">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JMMasalaProducts;
