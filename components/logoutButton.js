const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-secondary">SIGNOUT</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
};

export default logoutButton;
