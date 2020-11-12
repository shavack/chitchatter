import React, { useState } from 'react';
import { Chat } from '../components';

export default function ChatInput(props) {
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (message) props.sendMessage(props.user, message);
  };

  const onMessageUpdate = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Chat>
      <Chat.BaseForm onSubmit={onSubmit}>
        <Chat.Label>Active users:</Chat.Label>
        {Object.keys(props.activeUsers).map(function (key) {
          return <Chat.Label key={key}>{props.activeUsers[key]}</Chat.Label>;
        })}
        <Chat.Label>Current user: {props.user}</Chat.Label>
        <Chat.Label>Message:</Chat.Label>
        <Chat.Input onChange={onMessageUpdate}></Chat.Input>
        <Chat.Submit>SendMessage</Chat.Submit>
      </Chat.BaseForm>
    </Chat>
  );
}
