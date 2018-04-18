'use strict'

const { environment } = require('./webpack.vars')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        include: /(sprites|icons)/,
        loader: 'svg-sprite-loader',
        options: {
          name: '[name]_[hash]'
        }
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        exclude: /(sprites|icons)/,
        loader: `file-loader`,
        options: {
          outputPath: '/img/',
          name: `[name]${environment === 'production' ? '.[hash]' : ''}.[ext]`
        }
      }
    ]
  },
  plugins: [
    // In the extract mode loader should be configured with plugin, otherwise an error is thrown
    new SpriteLoaderPlugin()
  ]
}
