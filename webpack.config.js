const webpack = require('webpack'),
  path = require('path'),
  autoprefixer = require('autoprefixer'),
  FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ImageminPlugin = require('imagemin-webpack-plugin').default;
module.exports = {
  context: __dirname + '/src',
  entry: './js/app.js',
  output: {
    path: __dirname + '/public',
    filename: './js/bundle.js'
  },
  module: {
    rules: [ {
       test: /\.(sass|scss)$/,
       use: ExtractTextPlugin.extract({
         fallback: "style-loader",
         use: [{
           loader: "css-loader",
           options: {
             url: false,
             sourceMap: false,
             modules: true,
             importLoaders: true,
             localIdentName: '[local]'
           }
         }, {
           loader: "postcss-loader",
           options: {
             plugins: function() {
               return [
                 require("autoprefixer")({
                   browsers: ['last 7 versions', 'safari 5',
                     'ie 11', 'opera 12.1', 'ios 6',
                     'android 4'
                   ]
                 })
               ];
             }
           }
         }, {
           loader: "sass-loader"
         }]
       })
     },
     {
     test: /\.js$/,
     use: [
       {
         loader: 'babel-loader',
         query: {
             presets: ["babel-preset-es2015"].map(require.resolve)
         }
       }
     ]
   },
      {
       test: /\.(eot|woff|woff2|ttf)$/,
       use: [{
         loader: 'url-loader',
         options: {
           limit: 8192,
           name: 'fonts/fonts/[name].[ext]'
         }
       }]
     },
     {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }, {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            quality: 65
          },
          pngquant: {
            quality: "10-20",
            speed: 4
          },
          svgo: {
            plugins: [{
              removeViewBox: false
            }, {
              removeEmptyAttrs: false
            }]
          },
          gifsicle: {
            optimizationLevel: 7,
            interlaced: false
          },
          optipng: {
            optimizationLevel: 7,
            interlaced: false
          }
        }
      }]
    }
    ]
  },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
      new HtmlWebpackPlugin({
        filename: './index.html' ,
        template: './html/index.html'
      }),
       new HtmlWebpackPlugin({
        filename: './education.html' ,
        template: './html/education.html'
      }),
       new HtmlWebpackPlugin({
        filename: './history.html' ,
        template: './html/history.html'
      }),
        new HtmlWebpackPlugin({
        filename: './contact.html' ,
        template: './html/contact.html'
      }),
         new HtmlWebpackPlugin({
        filename: './news.html' ,
        template: './html/news.html'
      }),
         new HtmlWebpackPlugin({
        filename: './news-single.html' ,
        template: './html/news-single.html'
      }), 
         new HtmlWebpackPlugin({
        filename: './university.html' ,
        template: './html/university.html'
      }),

      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [autoprefixer()]
        }
      }),
      new ExtractTextPlugin({
        filename: 'css/style.min.css',
        allChunks: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        minimize: true
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.min\.css$/,
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        }
      }),
      new CopyWebpackPlugin([{
        from: 'img/',
        to: 'img/'
      }]),
      new CopyWebpackPlugin([{
        from: 'video/',
        to: 'video/'
      }]),
      new CopyWebpackPlugin([{
        from: 'fonts/',
        to: 'fonts/'
      }]),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i
      })
    ]
  }
