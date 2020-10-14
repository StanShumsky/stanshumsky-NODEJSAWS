const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('../../webpack.config.base');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
  context: path.resolve(__dirname),
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './openapi.yml', to: './openapi.yml' }],
    }),
  ],
});
