/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'class' or 'global'
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
