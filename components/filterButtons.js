import renderToDom from '../utils/renderToDom';
import sortSelect from './sortSelect';

const filterButtons = () => {
  const domString = `
  <button type="button" id="allCards" class=" btn-sm">ALL</button>
  <button type="button" id="htmlFilter" class=" btn-sm">HTML</button>
  <button type="button" id="cssFilter" class=" btn-sm">CSS</button>
  <button type="button" id="javascriptFilter" class=" btn-sm">JavaScript</button>
  <button type="button" id="reactFilter" class=" btn-sm">REACT</button>
  <div id="sortSelect"></div>
  `;

  renderToDom('#filterButtonContainer', domString);
  sortSelect();
};

export default filterButtons;
