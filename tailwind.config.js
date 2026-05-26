module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-primary': '#378ADD',
        'ocean-dark': '#042C53',
        'ocean-light': '#E6F1FB',
        'ocean-gold': '#EF9F27',
        'ocean-gold-dark': '#BA7517',
      },
      backgroundColor: {
        'ocean-bg': '#f0f8ff',
      },
      borderRadius: {
        'card': '12px',
      },
      borderWidth: {
        'thin': '0.5px',
      },
    },
  },
  plugins: [],
}
