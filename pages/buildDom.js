import renderToDom from '../utils/renderToDom';

const buildDom = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
  <div id="filterButtonContainer" class="d-flex justify-content-center gap-5"></div>
  <div id="form-container"></div>
  <div id="view" class="d-flex flex-wrap gap-3 justify-content-center"></div>
  </div>
  `;

  renderToDom('#app', domString);
};

export default buildDom;
