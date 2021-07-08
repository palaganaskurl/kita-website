module.exports = {
  purge: {
    enabled: true,
    content: [
      './*.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'kita-blue': '#0E698B',
        'kita-dark-blue': '#040533'
      }
    },
    fontFamily: {
      'menlo-regular': ['"Menlo Regular"', "sans-serif"],
      'menlo-bold': ['"Menlo Bold"', "sans-serif"],
      'helvetica': ['"Helvetica"']
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
