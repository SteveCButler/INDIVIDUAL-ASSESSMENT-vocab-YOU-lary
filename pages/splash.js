import loginButton from '../components/loginButton';
import renderToDom from '../utils/renderToDom';

const splash = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  const domString = `
    <h1 class="display-3">Welcome to Vocab-YOU-lary!</h1>
    <div id="login-button"><div>
    `;
  renderToDom('#login-form-container', domString);
  loginButton();
};

export default splash;
