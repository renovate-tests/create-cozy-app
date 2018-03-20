const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const configs = [
  {
    resolve: {
      extensions: ['.styl']
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: {
            fallback: 'style-loader',
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
                  ident: 'postcss',
                  sourceMap: true,
                  plugins: function () {
                    return [ require('autoprefixer')({ browsers: ['last 2 versions'] }) ]
                  }
                }
              }
            ]
          }
        },
        {
          test: /\.styl$/,
          exclude: /(node_modules|cozy-ui\/react)/,
          loader: {
            fallback: 'style-loader',
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
              'stylus-loader'
            ]
          }
        }
      ]
    }
  },
  {
    __mergeStrategy: {
      smart: true,
      strategy: {
        'module.loaders': 'replace'
      }
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          exclude: /(node_modules|cozy-ui\/react)/,
          loader: {
            fallback: 'style-loader',
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
              'stylus-loader'
            ]
          }
        }
      ]
    }
  }
]

module.exports = configs
