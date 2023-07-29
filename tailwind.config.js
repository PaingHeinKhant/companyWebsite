/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize : {
      "font-xs" : "14px",
      "font-sm" : "18px",
      "font-nav" : "20px",
      "font-title" : "22px",
      "font-hero" : "35px",
      "font-subtitle" : "48px",
      
      // for full hd screen
      "font-large": "50px",
      "font-large-sm":"23px",
      "font-large-xs" : "20px"

      
    },
    extend: {
      colors : {
        "bg-dark" : "#111215",
        "dark-text" : "#FFFFFF",
        "bg-light" : "#FFFFFF",
        "light-text" : "#111215",
        "para-text" : "#A4A7B1"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
