import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  // apiKey: 'api-key', // web-only?
  authDomain: 'relias-app-playground.firebaseapp.com',
  databaseURL: 'https://relias-app-playground.firebaseio.com',
  projectId: 'relias-app-playground',
  storageBucket: 'relias-app-playground.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:662642988014:android:61d130e1225dd0045e34ff',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
