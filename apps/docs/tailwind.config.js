const base = require('../../packages/css/tailwind.config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.astro'],
  theme: {
    ...base.theme,
    extend: {
      ...base.theme.extend,
    },
  },

  // TODO: implement @thaiui/tailwind
  plugins: [],
}
