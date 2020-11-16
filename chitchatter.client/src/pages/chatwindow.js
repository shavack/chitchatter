import React from 'react';
import Message from './message';
import { Chat } from '../components';

export default function ChatWindow(props) {
  const chat = props.chat.map((m) => <Message key={Date.now() * Math.random()} sender={m.sender} message={m.message} isOrigin={m.sender === props.user} />);

  return <Chat>{chat}</Chat>;
}
