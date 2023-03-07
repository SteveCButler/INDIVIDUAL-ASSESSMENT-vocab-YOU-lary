import firebase from 'firebase/app';
import 'firebase/auth';
import splash from '../pages/splash';
import client from './client';
import startApp from './startApp';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      splash();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
