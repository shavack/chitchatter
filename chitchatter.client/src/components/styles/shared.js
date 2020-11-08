import styled from 'styled-components/macro';

export const Container = styled.div``;
export const Panel = styled.div``;
export const Input = styled.input``;
export const Submit = styled.button``;
export const BaseForm = styled.form``;
export const Title = styled.h1``;
export const SubTitle = styled.h2``;
export const MessagePanel = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
  justify-content: ${(props) => (props.isOrigin ? 'flex-end' : 'flex-start')};
`;
export const MessageSender = styled.p``;
export const MessageItem = styled.div`
  background: #a3bcb6;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
`;
export const MessageText = styled.p``;
