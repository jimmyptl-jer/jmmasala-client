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
        // Core Brand
        'brand-deep-green': '#1A2E1A',
        'brand-forest': '#2D4A2D',
        'brand-sage': '#4A6741',
        'brand-moss': '#6B8C5E',

        // Gold System
        'brand-gold': '#C9A84C',
        'brand-gold-light': '#E2C97E',
        'brand-gold-pale': '#F5E9C8',

        // Neutral Base
        'brand-cream': '#FAF6EE',
        'brand-warm-white': '#FDFBF7',
        'brand-charcoal': '#2A2A2A',

        // Materials
        'wood-dark': '#5C3D1E',
        'wood-mid': '#7A5230',
        'wood-light': '#A0713F',

        // Product Colors
        cumin: {
          bg: '#1E1208',
          dark: '#2D1F0E',
          accent: '#C17F3A',
          light: '#E2AD6E',
          label: '#F5E6D0',
        },
        coriander: {
          bg: '#111A0C',
          dark: '#1A2E12',
          accent: '#6FA832',
          light: '#A8D46A',
          label: '#E8F4D0',
        },
        turmeric: {
          bg: '#1E1400',
          dark: '#2E1E00',
          accent: '#E89B00',
          light: '#F5C84A',
          label: '#FFF3C4',
        },
        chilli: {
          bg: '#1A0404',
          dark: '#2E0A0A',
          accent: '#CC2222',
          light: '#E87070',
          label: '#FDE8E8',
        },
        pepper: {
          bg: '#101010',
          dark: '#1E1E1E',
          mid: '#888888',
          accent: '#C9A84C',
          label: '#EBEBEB',
        },
        cardamom: {
          bg: '#060E12',
          dark: '#0E1E26',
          accent: '#2A7A8C',
          light: '#6AB8C8',
          label: '#D0EDF4',
        },
        psyllium: {
          bg: '#141008',
          dark: '#1E1A0E',
          accent: '#8A7840',
          light: '#C4AE6E',
          label: '#F0E9D0',
        },
        oil: {
          bg: '#0F1A0F',
          dark: '#1A2E1A',
          accent: '#C9A84C',
          light: '#E2C97E',
          label: '#FAF6EE',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        editorial: ['Cormorant Garamond', 'serif'],
        body: ['Didact Gothic', 'sans-serif'],
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
