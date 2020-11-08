import React, { useState } from 'react';

import { Chat } from '../components';
export default function ChatInput(props) {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('user1');

  const onSubmit = (e) => {
    e.preventDefault();
    props.sendMessage(user, message);
  };

  const onMessageUpdate = (e) => {
    setMessage(e.target.value);
  };

  const onUserUpdate = (e) => {
    setUser(e.target.value);
  };

  return (
    <Chat>
      <Chat.BaseForm onSubmit={onSubmit}>
        <Chat.Label>User:</Chat.Label>
        <Chat.Input onChange={onUserUpdate}></Chat.Input>
        <Chat.Label>Message:</Chat.Label>
        <Chat.Input onChange={onMessageUpdate}></Chat.Input>
        <Chat.Submit onClick={props.sendMessage}>SendMessage</Chat.Submit>
      </Chat.BaseForm>
    </Chat>
  );
}
