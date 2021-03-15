module.exports = {
  purge: {
    enabled: true,
    content: ['frontend/javascript/*.js','./output/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gill Sans', 'sans-serif'],
      },
      colors: {
        primary: '#0B27A2',
        secondary: '#17E8C2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
