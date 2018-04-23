'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('../utils/paths')
const cozyUIPlugin = require(paths.appCozyUiStylus)

module.exports = {
  resolve: {
    extensions: ['.styl']
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        exclude: /(node_modules|cozy-ui\/react)/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: function () {
                return [ require('autoprefixer')({ browsers: ['last 2 versions'] }) ]
              }
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              use: [ cozyUIPlugin() ]
            }
          }
        ]
      }
    ]
  }
}
