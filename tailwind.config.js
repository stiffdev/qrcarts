/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Habilitar tema oscuro
  theme: {
    container: {
      center: true, // Centra el contenedor
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '100%',
      },
    },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/hero.webp')",
        'action': "url('/action.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
