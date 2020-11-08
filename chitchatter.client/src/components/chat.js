import React from 'react';

import { Container, BaseForm, Submit, Input, SubTitle, MessageItem, MessagePanel, MessageSender, MessageText } from './styles/shared';

export default function Chat({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Chat.BaseForm = function ChatBaseForm({ children, ...restProps }) {
  return <BaseForm {...restProps}>{children}</BaseForm>;
};

Chat.Label = function ChatLabel({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Chat.Input = function ChatInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Chat.Submit = function ChatSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Chat.MessagePanel = function ChatMessagePanel({ children, ...restProps }) {
  return <MessagePanel {...restProps}>{children}</MessagePanel>;
};

Chat.MessageItem = function ChatMessageItem({ children, ...restProps }) {
  return <MessageItem {...restProps}>{children}</MessageItem>;
};

Chat.MessageSender = function ChatMessageSender({ children, ...restProps }) {
  return <MessageSender {...restProps}>{children}</MessageSender>;
};

Chat.MessageText = function ChatMessageText({ children, ...restProps }) {
  return <MessageText {...restProps}>{children}</MessageText>;
};
