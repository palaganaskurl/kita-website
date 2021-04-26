module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'Menlo-Regular': ['"Menlo-Regular"'],
      'Menlo-Bold': ['"Menlo-Bold"']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
