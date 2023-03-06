import firebase from 'firebase/app';
import 'firebase/auth';
// import clearDomOnLogout from './clearDomOnLogout';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  // clearDomOnLogout();
  firebase.auth().signOut();
};

export { signIn, signOut };
