import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      fontSize: {
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      spacing: {
        section: "4rem",
        card: "2rem",
      },
      screens: {
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.05)",   // lighter shadows
        card: "0 6px 20px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
      colors: {
        white: "#FFFFFF", // clean background
        parchment: {
          50: "#FAFAF9",  // almost white (background section blocks)
          100: "#F5F3EF", // creamy parchment
        },
        amber: {
          500: "#D97706", // spice amber
        },
        green: {
          400: "#4ADE80", // cilantro green
        },
        curry: {
          700: "#A16207", // richer curry accent
        },
        cardamom: {
          600: "#374151", // softer cardamom gray
        },
        text: {
          primary: "#1F2937",   // near-black for headings
          secondary: "#4B5563", // gray for body text
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
