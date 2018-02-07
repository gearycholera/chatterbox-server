/* Import node's http module: */
var http = require('http');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var port = 3000;
var ip = '127.0.0.1';
var i = 0;
var addObjectId = function(obj) {
  obj['objectId'] = i;
  i++;
};


var testMessage = {
  username: 'jim',
  roomname: 'lobby',
  message: 'testing'
};

var storage = {
  results: [testMessage]
};

app.get('/', function (req, res) {
  console.log('req.body is: '+JSON.stringify(req.body));
  res.send('storage is'+JSON.stringify(storage));
});

app.post('/', function (req, res) {
  var username = req.body.username;
  var roomname = req.body.roomname;
  var message = req.body.message;
  
  for (item in req.body) {
    console.log('======'+item);
  }

  console.log('body --------'+JSON.stringify(req.body));
  console.log('username '+username);
  var testObj = {
    username: username,
    roomname: roomname,
    message: message
  };

  addObjectId(testObj);
  storage.results.push(testObj);
  console.log(storage);
  res.send('storage from post is' + JSON.stringify(storage));
});



var server = http.createServer(app);
console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);

