import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  /* firebase config */
};

const firebase = Firebase.initializeApp(config);

export { firebase };
