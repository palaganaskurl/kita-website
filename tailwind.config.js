module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'menlo-regular': ['"Menlo Regular"', "sans-serif"],
      'menlo-bold': ['"Menlo Bold"', "sans-serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
