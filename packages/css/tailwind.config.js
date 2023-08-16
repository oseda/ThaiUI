/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      colors: {
        primary: 'var(--th-primary)',
        secondary: 'var(--th-secondary)',
      },
    },
  },

  plugins: [],
}
