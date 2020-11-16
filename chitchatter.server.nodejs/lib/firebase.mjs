import firebase from '@firebase/app';
import '@firebase/auth';

const config = {
  apiKey: 'AIzaSyDimW-CARzXxWp1oz8M8STKCVyWlQBOWcU',
  authDomain: 'chitchatter-77616.firebaseapp.com',
  databaseURL: 'https://chitchatter-77616.firebaseio.com',
  projectId: 'chitchatter-77616',
  storageBucket: 'chitchatter-77616.appspot.com',
  messagingSenderId: '893908376256',
  appId: '1:893908376256:web:545d580b07bcb76a4d2b25',
};

const database = firebase.default.initializeApp(config);

export { database as firebase };
