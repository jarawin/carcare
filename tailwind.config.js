/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'class' or 'global'
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin'),
  ],
};
