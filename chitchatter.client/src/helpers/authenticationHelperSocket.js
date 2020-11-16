import { useState, useEffect, useContext } from 'react';
import { WebSocketContext } from '../context/websocket';

export default function AuthenticationHelperSocket() {
  const [_user, setUser] = useState(localStorage.getItem('user'));
  const { user } = useContext(WebSocketContext);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', user);
      setUser(user);
    }
  }, [user]);

  return { _user };
}
