var path = require('path');

module.exports = {
  DEV_PORT: 3000,
  APP_PORT: 3030,
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'node_modules', 'alex')
        ],
        loaders: ['babel']
    }, {
      test: /\.json$/,
      loaders: ['json']
    }]
  }
}