/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        cormorant: '"Cormorant Garamond", serif'
      },
      colors: {
        primary:"#23BE0A"
      }
    },
  },
  plugins: [require("daisyui")],
}

