var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, { cors: '*:*' });
var connections = {};

io.on('connection', (socket) => {
  socket.on('SendMessage', (msg) => {
    io.emit('ReceiveMessage', msg);
  });

  socket.on('RegisterUser', (user) => {
    console.log('register user received');
    const chatMessage = {
      sender: 'Server',
      message: `${user} has joined the chat.`,
    };

    io.emit('ReceiveMessage', chatMessage);
    connections[socket.id] = user;

    io.emit('ChangeUserStatus', connections);
  });
});

http.listen(5001, () => {
  console.log('listening on *:5001');
});
