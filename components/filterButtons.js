import renderToDom from '../utils/renderToDom';

const filterButtons = () => {
  const domString = `
  <button type="button" id="allCards" class="btn btn-dark btn-sm">ALL</button>
  <button type="button" id="htmlFilter" class="btn btn-dark btn-sm">HTML</button>
  <button type="button" id="cssFilter" class="btn btn-dark btn-sm">CSS</button>
  <button type="button" id="javascriptFilter" class="btn btn-dark btn-sm">JavaScript</button>
  <button type="button" id="reactFilter" class="btn btn-dark btn-sm">REACT</button>
  `;

  renderToDom('#filterButtonContainer', domString);
};

export default filterButtons;
