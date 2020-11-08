import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('user1@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push('./chatroom');
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
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
