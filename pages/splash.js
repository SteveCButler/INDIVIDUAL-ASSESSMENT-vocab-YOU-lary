import loginButton from '../components/loginButton';
import renderToDom from '../utils/renderToDom';
import logo from '../assets/vocabularry.png';

const splash = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  const domString = `
  <div id="splash">
    <h1 class="splashText">Welcome to </h1> 
   <img id="splashLogo" src=${logo}>
    <div id="login-button"><div>
    </div>
    `;
  renderToDom('#login-form-container', domString);
  loginButton();
};

export default splash;
