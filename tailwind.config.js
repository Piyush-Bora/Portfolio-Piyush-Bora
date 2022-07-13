/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/*.html',
    './node_modules/tw-elements/dist/js/**/*.js',
    './docs/**/*.{html,js}'
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    height:{
      18: '72px',
    },

    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'averta':['Averta', 'sans-serif']
      },
    },
  },

  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
