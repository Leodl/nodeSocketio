const express = require('express');
var app = require('express')();
const path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(path.join(__dirname,'../', 'web'),{maxAge:1000*60*60}));

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });
io.on('connection', function(socket){
 // if (io.sockets.connected[socket.id]) {
 //        io.sockets.connected[socket.id].emit('chat message', msg);
 //    }

  socket.on('chat message', function(msg){
  	 //io.to(socket.id).emit('chat message', msg);
     io.emit('chat message', msg);
  });

});

http.listen(8016, function(){
  console.log('running...');
});
    