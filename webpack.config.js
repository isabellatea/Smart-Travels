const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/  },

    { test: /\.(css)$/, use: ['style-loader', 'css-loader']}

    
    ],
  },

plugins: [ new HtmlWebpackPlugin({template: './client/src/index.html'})]
}


module.exports = config;