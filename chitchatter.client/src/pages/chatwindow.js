import React from 'react';
import Message from './message';
import { Chat } from '../components';

export default function ChatWindow(props) {
  const chat = props.chat.map((m) => <Message key={Date.now() * Math.random()} sender={m.sender} message={m.message} />);

  return <Chat>{chat}</Chat>;
}
