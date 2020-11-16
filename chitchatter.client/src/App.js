import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChatRoom, SignIn, SignUp } from './pages';
import AuthenticationHelperSocket from './helpers/authenticationHelperSocket';

export default function App() {
  const { _user } = AuthenticationHelperSocket();

  return (
    <>
      <Router>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/chatroom">
          <ChatRoom user={_user} />
        </Route>
      </Router>
    </>
  );
}
