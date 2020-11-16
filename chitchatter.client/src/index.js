import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase';
import { FirebaseContext } from './context/firebase';
import WebSocketProvider from './context/websocket';

ReactDOM.render(
  <>
    <WebSocketProvider>
      <FirebaseContext.Provider value={{ firebase }}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
    </WebSocketProvider>
  </>,
  document.getElementById('root')
);
