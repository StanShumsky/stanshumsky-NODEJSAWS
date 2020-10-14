const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('../../webpack.config.base');

module.exports = merge(baseConfig, {
  context: path.resolve(__dirname),
});
