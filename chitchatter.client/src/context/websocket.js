import React, { createContext } from 'react';
import io from 'socket.io-client';
const WS_BASE = 'http://localhost:5001/';

const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children }) => {
  let connection;

  if (!connection) {
    connection = io.connect(WS_BASE);
  }

  return <WebSocketContext.Provider value={connection}>{children}</WebSocketContext.Provider>;
};
