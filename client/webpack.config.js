const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

let generateHtml = new HtmlWebpackPlugin({ title: 'My App' });
let extractCSS = new ExtractTextPlugin({ filename: 'styles/[name].css', allChunks: true });

const config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module : {
    rules : [
      {
        test : /\.(js|jsx)?/,
        include : APP_DIR,
        use : 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader?modules', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    generateHtml,
    extractCSS
  ]
};

module.exports = config;