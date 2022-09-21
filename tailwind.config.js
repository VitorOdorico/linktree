/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    ".pages/**/*.{js,ts,jsx,tsx}*",
    "./components/**/*.{js,ts,jsx,tsx}*",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gold-color': '#FFD700',
        'black-color': '#000000',
        'white-color': '#fff',
        'backGround-color': '##191919',
      },
      textColor: {
        'white-color': '#fff',
        'gold-color': '#FFD700',
        'black-color': '#000000',
      },
    },
  },
  plugins: [],
}
