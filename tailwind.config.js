/** @type {import('tailwindcss').Config} */

const FluidType = require('tailwindcss-fluid-type');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        tall: { raw: '(max-height: 650px)' },
      },
      colors: {
        light: '#f2fffa',
        dark: '#202123',
        primaryColor: '#009444',
        secondaryColor: '#c10000',
        heading: '#323333',
        paragraph: '#3b3530',
        paragraphLight: '#878787',
        white: '#ffffff',
        grey: '#cad4f9',
        darkBackdrop: '#0b0b0b',
      },
      autoFitGrid: {
        'grid-template-cols': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [
    FluidType({
      values: {
        '3xl': [4, 1.4],
      },
    }),
  ],
};
