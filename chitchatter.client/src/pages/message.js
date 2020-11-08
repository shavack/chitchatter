import React from 'react';
import { Chat } from '../components';

const Message = (props) =>
  props.isOrigin ? (
    <Chat.MessagePanel isOrigin={props.isOrigin}>
      <Chat.MessageItem>
        <Chat.MessageText>{props.message}</Chat.MessageText>
      </Chat.MessageItem>
      <Chat.MessageSender>{props.sender}</Chat.MessageSender>
    </Chat.MessagePanel>
  ) : (
    <Chat.MessagePanel isOrigin={props.isOrigin}>
      <Chat.MessageSender>{props.sender}</Chat.MessageSender>
      <Chat.MessageItem>
        <Chat.MessageText>{props.message}</Chat.MessageText>
      </Chat.MessageItem>
    </Chat.MessagePanel>
  );

export default Message;
