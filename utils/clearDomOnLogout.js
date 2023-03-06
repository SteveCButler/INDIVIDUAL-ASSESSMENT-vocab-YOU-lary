const clearDomOnLogout = () => {
  document.querySelector('#navigation').innerHTML = '';
  document.querySelector('#filterButtonContainer').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDomOnLogout;
