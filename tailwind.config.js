/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Gorditas': ['Gorditas'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}