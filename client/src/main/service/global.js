const Store = require('electron-store');
const socketClient = require('socket.io-client');
const path = require('path');

if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\');
}

global.store = new Store({
  name: 'hello.config',
  encryptionKey: 'hello',
});

// global.socket = socketClient('http://106.13.233.32:3000', {
//   reconnection: true,
// });
global.socket = socketClient('http://localhost:3000', {
  reconnection: true,
});

global.isAllowLogin = false;
