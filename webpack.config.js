var path = require('path');
var webpack = require('webpack');
var config = require('./config');

module.exports = Object.assign({}, config, {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:' + config.DEV_PORT,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/app'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});