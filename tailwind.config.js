/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Habilitar tema oscuro
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
