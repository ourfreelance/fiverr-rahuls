/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./themes/rahuls/layouts/**/*.html",
    "./themes/rahuls/layouts/**/*.html",
    "./themes/rahuls/layouts/**/*.js",
    "./themes/rahuls/static/**/*.js",

  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: '#888888'
        },
        primary: {
          DEFAULT: '#005D65',
          green: '#004A51',
          gray: '#F4F4F4',
          dark: '#222831'
        },
        light: {
          DEFAULT: '#FAFAFA',
          gray: '#F2F2F2'
        }
      },
      screens: {
        'xl': '1274px',
        '2xl': '1640px'
      }
    },
    fontFamily: {
      lexend: 'Lexend, sans-serif',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
