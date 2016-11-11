var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var bodyParser = require('body-parser');
var express = require('express');
var alex = require('alex');
var path = require('path');
var app = express();
var production = app.get('env') === 'production';
var index = path.resolve('./index.html');

app.use(bodyParser.json());
app.post('/api/correct', function (req, res) {
  var query = req.body.query;
  var messages = [];
  if (query && typeof query === 'string' && query.length < 10000) {
    messages = alex(query).messages;
  }
  res.send(messages);
});

if (production) {
  app.use('/static', express.static('build'));
  app.get('/', function (req, res) {
    res.sendFile(index);
  });
} else {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    },
    proxy: {
      '/api/correct': {
        target: 'http://localhost:' + config.APP_PORT,
        secure: false
      }
    }
  }).listen(config.DEV_PORT, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:', config.DEV_PORT);
  });
}

app.listen(config.APP_PORT, function () {
  console.log('Example app listening on port', config.APP_PORT)
});