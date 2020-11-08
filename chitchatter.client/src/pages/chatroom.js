import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import ChatInput from './chatinput';
import ChatWindow from './chatwindow';

export default function ChatRoom({ user }) {
  const [connection, setConnection] = useState(null);
  const [chat, setChat] = useState([]);
  const [activeUsers, setActiveUsers] = useState({});
  const latestChat = useRef(null);
  latestChat.current = chat;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder().withUrl('https://localhost:5001/hubs/chat').withAutomaticReconnect().build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log('Connected!');
          async function registerUser() {
            console.log('registerUser sent');
            await connection.send('RegisterUser', user.displayName);
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
        })
        .catch((e) => console.log('Connection failed: ', e));
    }
  }, [connection]);

  const sendMessage = async (user, message) => {
    const chatMessage = {
      sender: user,
      message: message,
    };

    if (connection.connectionStarted) {
      try {
        await connection.send('SendMessage', chatMessage);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('No connection to server yet.');
    }
  };

  return (
    <>
      <ChatInput sendMessage={sendMessage} user={user.displayName} activeUsers={activeUsers}></ChatInput>
      <ChatWindow chat={chat}></ChatWindow>
    </>
  );
}
