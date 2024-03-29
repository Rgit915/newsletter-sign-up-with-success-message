/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        darkSlateGrey: 'hsl(234, 29%, 20%)',
        charcoalGrey: 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
        white: 'hsl(0, 0%, 100%)',
        redish: '#FF5475',
},
fontFamily: {
  'roboto': ['Roboto', 'sans-serif'],
},
fontSize: {
  '16px': '16px',
      },
      boxShadow: {
        'hsla-shadow': '0px 16px 32px 0px hsla(4, 100%, 67%, 0.5)'
      },
    },
  },
plugins: [],
}

