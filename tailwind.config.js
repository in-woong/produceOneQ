/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      main: '#E11299',
      subOne: '#FFEAEA',
      subTwo: '#F5C6EC',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {},
    extend: {
      colors: {
        brand: '#FF0000',
      },
    },
  },
  plugins: [],
};
