import loginButton from '../components/loginButton';
import renderToDom from '../utils/renderToDom';

const splash = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
  <div id="view"><h1>STEVE</h1></div>
  </div>
  `;
  document.querySelector('#app').innerHTML = domString;
  renderToDom('#view', domString);
  // document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = `
    <h1 class="display-3">Welcome to Vocab-YOU-lary!</h1>
    `;

  loginButton();
};

export default splash;
