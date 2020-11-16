import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form } from '../components';
import { WebSocketContext } from '../context/websocket';

export default function SignIn() {
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState('user1@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';
  const connection = useContext(WebSocketContext);

  useEffect(() => {
    if (connection) {
      connection.on('SIGN_IN_SUCCESSFUL', () => {
        console.log('SIGN_IN_SUCCESSFUL received');
        history.push('./chatroom');
      });

      connection.on('SIGN_IN_ERROR', (error) => {
        console.log('SIGN_IN_ERROR');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
    }
  }, [connection]);

  const handleSignIn = (event) => {
    event.preventDefault();

    async function signIn() {
      await connection.emit('SignIn', emailAddress, password);
    }
    signIn();
  };

  return (
    <>
      <Form>
        <Form.Base onSubmit={handleSignIn} method="POST">
          <Form.Title>Chitchatter</Form.Title>
          <Form.SubTitle>Sign in</Form.SubTitle>
          {error && <Form.Error color="#ffffff">{error}</Form.Error>}
          <Form.Input placeholder="Email address" value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)} />
          <Form.Input placeholder="Password" autoComplete="off" type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign in
          </Form.Submit>
          <Link to="./signup">Go to sign up</Link>
        </Form.Base>
      </Form>
    </>
  );
}
