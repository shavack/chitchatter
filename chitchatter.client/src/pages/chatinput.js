import React, { useState } from 'react';
import { Chat } from '../components';

export default function ChatInput(props) {
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.sendMessage(props.user, message);
  };

  const onMessageUpdate = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Chat>
      <Chat.BaseForm onSubmit={onSubmit}>
        <Chat.Label>User:</Chat.Label>
        <Chat.Label>{props.user}</Chat.Label>
        <Chat.Label>Message:</Chat.Label>
        <Chat.Input onChange={onMessageUpdate}></Chat.Input>
        <Chat.Submit onClick={props.sendMessage}>SendMessage</Chat.Submit>
      </Chat.BaseForm>
    </Chat>
  );
}
