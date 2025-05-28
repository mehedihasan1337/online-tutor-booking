/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily:{
        Oswald:["Oswald", "serif"],
        Roboto:["Roboto", "serif"],
        Ancizar:["Ancizar Sans", "sans-serif"]
        
      }
    },
  },
  plugins: [
    require('daisyui'),
  ]  ,
}

