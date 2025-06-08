/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // if using flowbite-react plugin
  ],
  theme: {
    extend: {
      colors: {
        limePrimary: '#88B04B',    // Fresh olive lime green
        limeSecondary: '#A2C523',  // Bright lime green for highlights
        earthBrown: '#6B4C3B',     // Warm earthy brown accent
        softBeige: '#F6F1E7',      // Soft neutral background
        darkSlate: '#2D2D2D',      // Dark text color for readability
      },
      fontFamily: {
        heading: ['Rozha One', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.05em',
        widest: '0.15em',
      },
      lineHeight: {
        relaxed: '1.75',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // optional, only if you use flowbite-react
  ],
};
