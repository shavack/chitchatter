import React, { useState, useEffect, useRef, useContext } from 'react';
//import { HubConnectionBuilder } from '@microsoft/signalr';
import ChatInput from './chatinput';
import ChatWindow from './chatwindow';
import { WebSocketContext } from '../context/websocket';

export default function ChatRoom({ user }) {
  const { connection } = useContext(WebSocketContext);
  const [chat, setChat] = useState([]);
  const [activeUsers, setActiveUsers] = useState({});
  const latestChat = useRef(null);
  latestChat.current = chat;

  useEffect(() => {
    if (connection) {
      console.log('Connected!');
      async function registerUser() {
        console.log('registerUser sent');
        await connection.emit('RegisterUser', user);
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
  }, []);

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
      <ChatInput sendMessage={sendMessage} user={user} activeUsers={activeUsers}></ChatInput>
      <ChatWindow chat={chat} user={user}></ChatWindow>
    </>
  );
}
