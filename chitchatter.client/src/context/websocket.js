import React, { createContext, useState } from 'react';
import io from 'socket.io-client';
const WS_BASE = 'http://localhost:5001/';

const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children }) => {
  let connection;
  const [user, setUser] = useState();

  if (!connection) {
    connection = io.connect(WS_BASE);

    connection.on('SIGN_IN_SUCCESSFUL', (displayName) => {
      console.log(`user ${displayName}`);
      setUser(displayName);
    });

    connection.on('SIGN_UP_SUCCESSFUL', (displayName) => {
      console.log(`user ${displayName}`);
      setUser(displayName);
    });
  }

  const websocket = {
    connection: connection,
    user: user,
  };

  return <WebSocketContext.Provider value={websocket}>{children}</WebSocketContext.Provider>;
};
