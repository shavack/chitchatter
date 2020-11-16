import { firebase } from './lib/firebase.mjs';
import express from 'express';
import { default as _http } from 'http';
import { Server as _io } from 'socket.io';

const app = express();
const http = _http.createServer(app);
const io = new _io(http, { cors: '*:*' });
var connections = {};

io.on('connection', (socket) => {
  console.log(`CONNECTION ESTABLISHED WITH ${socket.id}`);
  socket.on('SendMessage', (msg) => {
    io.emit('ReceiveMessage', msg);
  });

  socket.on('RegisterUser', (user) => {
    console.log(`register user received for ${user}`);
    const chatMessage = {
      sender: 'Server',
      message: `${user} has joined the chat.`,
    };

    io.emit('ReceiveMessage', chatMessage);
    connections[socket.id] = user;

    io.emit('ChangeUserStatus', connections);
  });

  socket.on('SuccessfulSignIn', (msg) => {
    io.emit('ReceiveMessage', msg);
  });

  socket.on('SignIn', (emailAddress, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        console.log('SIGN_IN_SUCCESSFUL');
        io.to(socket.id).emit('SIGN_IN_SUCCESSFUL', result.user.displayName);
      })
      .catch((error) => {
        console.log(error);
        io.to(socket.id).emit('SIGN_IN_ERROR');
      });
  });

  socket.on('SignUp', (emailAddress, password, nickname) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: nickname,
          })
          .then(() => {
            io.to(socket.id).emit('SIGN_UP_SUCCESSFUL', nickname);
          });
      })
      .catch((error) => {
        console.log(error);
        io.to(socket.id).emit('SIGN_UP_ERROR');
      });
  });

  socket.on('disconnect', () => {
    delete connections[socket.id];
    console.log(`DISCONNECTED ${socket.id}`);
  });
});

http.listen(5001, () => {
  console.log('listening on *:5001');
});
