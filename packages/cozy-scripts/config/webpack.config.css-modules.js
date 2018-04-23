'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('../utils/paths')
const cozyUIPlugin = require(paths.appCozyUiStylus)

module.exports = {
  __mergeStrategy: {
    smart: true,
    strategy: {
      // loaders !== rules
      'module.loaders': 'replace'
    }
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
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]--[hash:base64:5]'
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
