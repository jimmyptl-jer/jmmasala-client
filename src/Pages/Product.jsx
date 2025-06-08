import React from "react";

import jeeraImg from "../assets/cumin.png";
import souffImg from "../assets/souff.png";
import raiImg from "../assets/rai.png";
// import suvaImg from "../assets/suva.png"; // Dill Seeds
import dhanaImg from "../assets/dhana.png";
import methiImg from "../assets/methi.png";
import tillImg from "../assets/till.jpg";

const spices = [
  {
    name: "Cumin Seeds",
    local: "Jeera",
    img: jeeraImg,
    description:
      "Cumin seeds, known as Jeera, offer a warm, earthy flavor with a slightly nutty aroma. Widely used in Indian, Middle Eastern, and Latin American cuisines, they enhance curries, soups, and rice dishes, aiding digestion and adding a rich depth to meals.",
  },
  {
    name: "Fennel Seeds",
    local: "Souff",
    img: souffImg,
    description:
      "Fennel seeds, or Souff, are aromatic and slightly sweet with a licorice-like flavor. They are popular in Indian and Mediterranean cooking, often used to freshen breath, improve digestion, and add a fragrant touch to spice blends and desserts.",
  },
  {
    name: "Mustard Seeds",
    local: "Rai",
    img: raiImg,
    description:
      "Mustard seeds, known locally as Rai, provide a pungent, spicy kick when tempered in hot oil. They are a staple in pickling and Indian tadkas (tempering), delivering a sharp flavor and crunch that elevate vegetable dishes, dals, and condiments.",
  },
  // {
  //   name: "Dill Seeds",
  //   local: "Suva",
  //   img: suvaImg,
  //   description:
  //     "Dill seeds, called Suva, impart a fresh, grassy aroma with subtle citrus notes. Used in pickling and seasoning, they help improve digestion and add a bright flavor to soups, stews, and breads.",
  // },
  {
    name: "Coriander Seeds",
    local: "Dhana",
    img: dhanaImg,
    description:
      "Coriander seeds or Dhana have a warm, citrusy flavor with mild sweetness. Ground or whole, they are essential in spice mixes, curries, and baked goods, contributing a subtle lemony fragrance and a slight nuttiness to dishes.",
  },
  {
    name: "Fenugreek Seeds",
    local: "Methi",
    img: methiImg,
    description:
      "Fenugreek seeds (Methi) have a distinct, slightly bitter and nutty flavor. Used extensively in Indian and Middle Eastern cuisine, they add depth to curries and pickles while offering health benefits like regulating blood sugar and enhancing digestion.",
  },
  {
    name: "Sesame Seeds",
    local: "Till",
    img: tillImg,
    description:
      "Sesame seeds, or Till, are tiny, oil-rich seeds with a mild, nutty flavor. Used in baking, cooking, and garnishing, they add a crunchy texture and a rich aroma to breads, salads, and sweets across many cultures.",
  },
];

const Products = () => {
  return (
    <section className="mt-16 bg-softBeige p-8 rounded-lg max-w-7xl mx-auto">
      <h2 className="text-3xl font-heading text-limePrimary mb-6 text-center">
        Our Premium Spices
      </h2>

      <section className="max-w-4xl mx-auto mb-12 text-center px-4">
        <p className="text-lg text-earthBrown font-body leading-relaxed">
          Discover the authentic flavors of nature with our carefully sourced premium spices. Each seed is handpicked to bring freshness, aroma, and vibrant taste to your kitchen. Whether you’re crafting traditional recipes or experimenting with new flavors, our spices add the perfect touch of heritage and quality.
        </p>
      </section>

      <div role="list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {spices.map(({ name, local, img, description }) => (
          <div
            role="listitem"
            key={name}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 hover:scale-105 border-2 border-transparent hover:border-limeSecondary animate-fadeIn"
          >
            <img
              src={img}
              alt={`Image of ${name} (${local})`}
              className="w-24 h-24 object-contain mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-earthBrown mb-2">{name}</h3>
            <p className="text-limeSecondary italic mb-4">{local}</p>
            <p className="text-center text-earthBrown font-body text-sm leading-relaxed px-2">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
