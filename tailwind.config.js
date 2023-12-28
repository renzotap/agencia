/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1700':'1700px',
      }
    },
    boxShadow: {
      navbar: "0px 10px 8px 0px rgba(80,80,80,0.03), 0 2px 3px -1px rgba(3,3,4,0.05)",
      "2xl": "0 0px 40px 0px rgba(0, 0, 0, 0.1)",
  },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1090px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1720px",
      // => @media (min-width: 1536px) { ... }

      "4xl": "1856px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),

    // function({addUtilities}){
    //   const extendUnderline = {
    //     '.underline':{
    //       'textDecoration': 'underline',
    //       'text-decoration-color': 'indigo-600',
    //     }
    //   }
    //   addUtilities(extendUnderline)
    // }


  ], 
}

