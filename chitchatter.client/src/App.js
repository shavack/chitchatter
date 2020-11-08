import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChatRoom, SignIn, SignUp } from './pages';
import AuthenticationHelper from './helpers/authenticationHelper';

export default function App() {
  const { user } = AuthenticationHelper();

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
          <ChatRoom user={user} />
        </Route>
      </Router>
    </>
  );
}
