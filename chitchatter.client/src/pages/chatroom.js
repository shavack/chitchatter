import React, { useState, useEffect } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

export default function ChatRoom() {
  const [connection, setConnection] = useState(null);
  const [message, setMessage] = useState('message');
  const [user, setUser] = useState('user1');
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

          connection.on('ReceiveMessage', (message) => {
            console.log('ReceiveMessage', message);
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

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage(user, message);
  };

  const onMessageUpdate = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onMessageUpdate}></input>
        <button onClick={sendMessage}>SendMessage</button>
      </form>
    </>
  );
}