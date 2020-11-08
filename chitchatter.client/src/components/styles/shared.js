import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
`;
export const Input = styled.input`
  background: #a3bcb6;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  max-width: 200px;
  max-heigth: 50px;
  width: 75%;
`;
export const Submit = styled.button`
  background: #39603d;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 16px;
  border: 0;
  color: #daded4;
  width: 75%;
`;
export const BaseForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;
export const Title = styled.h1`
  font-size: 50px;
  margin-top: 0;
  margin-bottom: 10px;
`;
export const SubTitle = styled(Title)`
  font-size: 25px;
`;
export const MessagePanel = styled.div`
  display: flex;
  padding: 0 5%;
  margin-top: 3px;
  justify-content: ${(props) => (props.isOrigin ? 'flex-end' : 'flex-start')};
`;
export const MessageSender = styled.p`
  display: flex;
  align-items: center;
  color: #828422;
`;
export const MessageItem = styled.div`
  background: #a3bcb6;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
`;
export const MessageText = styled.p`
  width: 100%;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
`;

export const Error = styled(SubTitle)`
  color: #ff0000;
`;
