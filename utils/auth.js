import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  console.warn('auth');
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
};

export { signIn, signOut };
