import React from 'react';
import { Chat } from '../components';

const Message = (props) => (
  <div>
    <p>User: {props.sender}</p>
    <div>
      <p>Message: {props.message}</p>
    </div>
  </div>
);

export default Message;
