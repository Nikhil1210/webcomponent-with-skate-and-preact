const merge = require('webpack-merge');
const base = require('./development');
const BabiliPlugin = require('babili-webpack-plugin');

/**
 * Production Webpack Configuration
 *
 * Differences from the base config:
 *
 * - Minifies the output
 */
module.exports = merge(base, {
  output: {
    filename: 'user-component.bundle.min.js'
  },
  plugins: [
    new BabiliPlugin()
  ]
});
