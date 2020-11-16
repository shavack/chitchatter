import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { WebSocketContext } from '../context/firebase';

export default function AuthenticationHelper() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authenticatedUser')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authenticatedUser) => {
      if (authenticatedUser) {
        localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser));
        setUser(authenticatedUser);
      } else {
        localStorage.removeItem('authenticatedUser');
        setUser(null);
      }
    });
    return () => listener();
  }, []);

  return { user };
}
