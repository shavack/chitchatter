import React from 'react';
import { Container, Input, Title, Submit, SubTitle, BaseForm, Error } from './styles/shared';

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <BaseForm {...restProps}>{children}</BaseForm>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.SubTitle = function FormSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Error = function FormSubmit({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};
