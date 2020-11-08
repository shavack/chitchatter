import React from 'react';

import { Container, BaseForm, Submit, Input, SubTitle, Panel } from './styles/shared';

export default function Chat({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Chat.Panel = function ChatPanel({ children, ...restProps }) {
  return <Panel {...restProps}>{children}</Panel>;
};

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
