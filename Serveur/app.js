var express = require('express');
var app = express();
var http = require('http').Server(app);
// var io = require('socket.io')(http);
var port = 8080;

// app.use(function (req, res, next) {
// 	res.setHeader('Access-Control-Allow-Origin', "http://"+req.headers.host+':8080');
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     next();
// });

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// app.listen(port);
console.log("Listening on port " + port);

var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function (socket) {
	console.log('a user connected');

    // socket.emit('message', { message: 'welcome to the chat' });
    socket.on('position', function (data) {
        io.sockets.emit('move', data);
    });
});

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

// var io = require('socket.io').listen(app.listen(port));

// var server = app.listen(8080, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });

// var app = require('express').createServer();
// var io = require('socket.io')(app);

// app.listen(80);

// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });