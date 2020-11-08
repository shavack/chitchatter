import React from 'react';
import { Chat } from '../components';

const Message = (props) => (
  <Chat.MessagePanel>
    <Chat.MessageSender>User: {props.sender}</Chat.MessageSender>
    <Chat.MessageItem>
      <Chat.MessageText>Message: {props.message}</Chat.MessageText>
    </Chat.MessageItem>
  </Chat.MessagePanel>
);

export default Message;
