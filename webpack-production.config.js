var path = require('path');
var webpack = require('webpack');
var config = require('./config');

module.exports = Object.assign({}, config, {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/app'
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
});