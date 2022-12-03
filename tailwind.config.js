/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        action: '#00A859',
        primary: '#137760',
        secondary: '#01579C',
      },
    },
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      // serif: ['Poppins', 'sans-serif'],
      // mono: ['Poppins', 'sans-serif'],
      // display: ['Poppins', 'sans-serif'],
      // body: ['Poppins', 'sans-serif'],
      // pop: ['Poppins', 'sans-serif'],
      // default: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
