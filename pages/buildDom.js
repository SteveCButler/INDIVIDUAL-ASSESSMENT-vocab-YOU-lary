import renderToDom from '../utils/renderToDom';

const buildDom = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
  <div id="form-container"></div>
  <div id="view"><h1>STEVE</h1></div>
  </div>
  `;

  renderToDom('#app', domString);
};

export default buildDom;
