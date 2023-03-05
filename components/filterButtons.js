import renderToDom from '../utils/renderToDom';

const filterButtons = () => {
  const domString = `
  <button type="button" class="btn btn-dark btn-sm">HTML</button>
  <button type="button" class="btn btn-dark btn-sm">CSS</button>
  <button type="button" class="btn btn-dark btn-sm">JavaScript</button>
  <button type="button" class="btn btn-dark btn-sm">REACT</button>
  `;

  renderToDom('#filterButtonContainer', domString);
};

export default filterButtons;
