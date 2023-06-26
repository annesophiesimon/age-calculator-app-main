// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      'poppins-r': ['Poppins-regular', 'sans-serif'],
      'poppins-i': ['Poppins-italic'],
      'poppins-b': ['Poppins-bold'],
      'poppins-bi': ['Poppins-bolditalic'],
      'poppins-eb': ['Poppins-extrabold'],
      'poppins-ebi': ['Poppins-extrabolditalic']



    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {}
  },
  plugins: []
};