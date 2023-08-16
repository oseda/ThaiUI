const config = require('../../postcss.config')

module.exports = {
  ...config,
  plugins: {
    ...config.plugins,
    cssnano: {
      preset: 'default',
    },
  },
}
