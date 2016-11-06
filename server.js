var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var bodyParser = require('body-parser');
var express = require('express');
var alex = require('alex');

var app = express();
app.use(bodyParser.json());

app.post('/api/correct', function (req, res) {
  var query = req.body.query;
  var messages = [];
  if (query && typeof query === 'string' && query.length < 10000) {
    messages = alex(query).messages;
  }
  res.send(messages);
});

app.listen(3030, function () {
  console.log('Example app listening on port 3030!')
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  proxy: {
    '/api/correct': {
      target: 'http://localhost:3030',
      secure: false
    }
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});