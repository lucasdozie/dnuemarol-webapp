const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      screens: {
        'tablet': '800px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1000px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1200px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        'general-pattern': "url('components/landingPage/images/genbg.png')",
        'blue-pattern': "url('components/landingPage/images/bg.png')",
        'blues-pattern': "url('components/landingPage/images/bg2.png')",
      },
      colors:{
        grayLight:"#3d3d3d"
      },
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans],
     },
    },
  },
  plugins: [],
}
