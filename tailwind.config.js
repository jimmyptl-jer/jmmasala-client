/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Rozha One", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.05em",
        widest: "0.15em",
      },
      lineHeight: {
        relaxed: "1.75",
      },
      colors: {
        spiceRed: "#A52A2A", // Chili Powder
        turmeric: "#FFD700", // Turmeric
        cardamom: "#D4A017", // Cardamom Gold
        pepperBlack: "#2F2F2F", // Black Pepper
      },
    },
  },
  plugins: [flowbite],
};
