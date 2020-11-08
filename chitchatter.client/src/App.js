import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChatRoom, SignIn, SignUp } from './pages';

export default function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <ChatRoom />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/chatroom">
          <ChatRoom />
        </Route>
      </Router>
    </>
  );
}
