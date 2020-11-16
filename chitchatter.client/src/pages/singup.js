import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form } from '../components';
import { WebSocketContext } from '../context/websocket';

export default function SignUp() {
  const history = useHistory();
  const [nickname, setNickname] = useState('dmnk1');
  const [emailAddress, setEmailAddress] = useState('user1@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';
  const { connection } = useContext(WebSocketContext);

  useEffect(() => {
    if (connection) {
      connection.on('SIGN_UP_SUCCESSFUL', () => {
        console.log('SIGN_UP_SUCCESSFUL');
        history.push('./chatroom');
      });

      connection.on('SIGN_UP_ERROR', (error) => {
        console.log('SIGN_UP_ERROR');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
    }
  }, []);

  const handleSignup = (event) => {
    event.preventDefault();
    async function signUp() {
      console.log('signUp sent');
      console.log(`nickname ${nickname}`);
      await connection.emit('SignUp', emailAddress, password, nickname);
    }
    signUp();
  };

  return (
    <>
      <Form>
        <Form.Base onSubmit={handleSignup} method="POST">
          <Form.Title>Chitchatter</Form.Title>
          <Form.SubTitle>Sign up</Form.SubTitle>
          {error && <Form.Error color="#ffffff">{error}</Form.Error>}
          <Form.Input placeholder="Nickname" value={nickname} onChange={({ target }) => setNickname(target.value)} />
          <Form.Input placeholder="Email address" value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)} />
          <Form.Input placeholder="Password" autoComplete="off" type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign up
          </Form.Submit>
          <Link to="./signin">Go to sign in</Link>
        </Form.Base>
      </Form>
    </>
  );
}
