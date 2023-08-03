/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgSun': "url('/src/assets/images/sun.png')",
        'bgRain': "url('/src/assets/images/rain.png')",
        'bgMist': "url('/src/assets/images/mist.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'LightCyan': '#E0FFFF',
        'PowderBlue': '#B0E0E6',
        'Lavender': '#E6E6FA',
        'Thistle':	'#D8BFD8'
      },
    },
  },
  plugins: [],
}

