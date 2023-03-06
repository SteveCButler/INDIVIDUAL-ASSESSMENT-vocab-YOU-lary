import { signOut } from '../utils/auth';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-secondary">SIGNOUT</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', () => {
    console.warn('signout button clicked');
    signOut();
  });
};

export default logoutButton;
