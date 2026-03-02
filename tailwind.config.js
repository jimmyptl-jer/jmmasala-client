import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        accent: ["Cormorant Garamond", "serif"],
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
        soft: "0 2px 12px rgba(92, 46, 14, 0.06)",
        card: "0 4px 24px rgba(92, 46, 14, 0.10)",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
      colors: {
        white: "#FFFFFF",
        brand: {
          primary: "#5C2E0E",
          secondary: "#8B3A0F",
          accent: "#C8960C",
          cream: "#F5EDD6",
          beige: "#EDE0C4",
          textDark: "#2C1A0E",
          textMedium: "#5C3D1E",
          footer: "#2C1A0E",
        },
        success: {
          DEFAULT: "#2E7D32",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
