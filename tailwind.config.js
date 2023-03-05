/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif']
      },
      backgroundImage: {
        'Bg': "url('../public/Img/Bg.jpg')",
        'Pattern2': "url(../public/Img/Pattern2.jpg)"
      
  },


    },
  },
  plugins: [],
}
