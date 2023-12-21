/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Barlow" , "sans-serif"]
      },
      lineHeight:{
        "fullheader" : "88px"
      }
    },
  },
  plugins: [],
  experimental: {
    unknownAtRules: 'ignore', 
  },
}