var express = require('express');
var app = express();
var storage = {
  results: []
};

app.get('/', function (req, res) {
  console.log('ay');
  res.send('hello world');
});