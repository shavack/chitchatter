import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';

export default function SignUp() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [nickname, setNickname] = useState('dmnk1');
  const [emailAddress, setEmailAddress] = useState('user1@gmail.com');
  const [password, setPassword] = useState('123456');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignup = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: nickname,
          })
          .then(() => {
            history.push('./chatroom');
          });
      })
      .catch(() => {
        setEmailAddress('');
        setPassword('');
      });
  };
  return (
    <>
      <Form>
        <Form.Base onSubmit={handleSignup} method="POST">
          <Form.Title>Chitchatter</Form.Title>
          <Form.SubTitle>Sign up</Form.SubTitle>
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
