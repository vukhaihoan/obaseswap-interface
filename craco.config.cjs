/* eslint-disable @typescript-eslint/no-var-requires */
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
module.exports = {
  babel: {
    plugins: ['@vanilla-extract/babel-plugin'],
  },
  webpack: {
    plugins: [new VanillaExtractPlugin()],
  },
}
