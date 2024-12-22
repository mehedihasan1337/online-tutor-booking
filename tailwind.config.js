/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Oswald:["Oswald", "serif"],
        Roboto:["Roboto", "serif"],
        
      }
    },
  },
  plugins: [
    require('daisyui'),
  ]  ,
}

