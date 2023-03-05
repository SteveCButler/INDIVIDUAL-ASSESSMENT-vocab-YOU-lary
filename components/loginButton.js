import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString =
    '<button id="google-auth" class="btn btn-secondary">LOGIN</button>';
  // document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#view').innerHTML += domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
