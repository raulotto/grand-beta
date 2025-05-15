const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
        prata: ['Prata', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  safelist: [
    'slider-home',
    'slider-spa',
    'slider-eventos',
    'slider-habitaciones'
  ],
  
}
