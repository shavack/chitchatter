import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import ChatInput from './chatinput';
import ChatWindow from './chatwindow';
import { io } from 'socket.io-client';

export default function ChatRoom({ user }) {
  const [connection, setConnection] = useState(null);
  const [chat, setChat] = useState([]);
  const [activeUsers, setActiveUsers] = useState({});
  const latestChat = useRef(null);
  latestChat.current = chat;

  useEffect(() => {
    //const newConnection = new HubConnectionBuilder().withUrl('https://localhost:5001/hubs/chat').withAutomaticReconnect().build();
    //setConnection(newConnection);
    const socket = io.connect('http://localhost:5001/');

    setConnection(socket);
    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    if (connection) {
      console.log('Connected!');
      async function registerUser() {
        console.log('registerUser sent');
        await connection.emit('RegisterUser', user.displayName);
      }
      registerUser();

      connection.on('ReceiveMessage', (message) => {
        const updatedChat = [...latestChat.current];
        updatedChat.push(message);
        console.log('ReceiveMessage');

        setChat(updatedChat);
      });

      connection.on('ChangeUserStatus', (connections) => {
        console.log('ChangeUserStatus');
        setActiveUsers(connections);
        console.log(connections);
      });
    }
  }, [connection]);

  const sendMessage = async (user, message) => {
    const chatMessage = {
      sender: user,
      message: message,
    };

    if (chatMessage.message) {
      try {
        console.log(chatMessage);
        await connection.emit('SendMessage', chatMessage);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.trace();
    }
  };

  return (
    <>
      <ChatInput sendMessage={sendMessage} user={user.displayName} activeUsers={activeUsers}></ChatInput>
      <ChatWindow chat={chat} user={user}></ChatWindow>
    </>
  );
}
