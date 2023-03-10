import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import filterButtons from '../components/filterButtons';
import logo from '../assets/vocabularry.png';

const noVocab = () => {
  clearDom();
  filterButtons();
  const domString = `
    <img id="noVocabImage" src=${logo} />
  `;
  renderToDom('#view', domString);
};

const showVocab = (array) => {
  clearDom();
  filterButtons();
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 20rem;">
    <div class="card-header text-center fw-bold card-title">${item.title}</div>
    <div class="card-body ">
      <!-- <h5 class="card-title">${item.title}</h5> -->
      <p class="card-text-color">${item.definition}</p>
      </div>
      <div class="mb-3">
      <button class="btn card-btn"><i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit"></i></button>
      <button class="btn card-btn"><i id="delete-book-btn--${item.firebaseKey}" class="fas fa-trash-alt"></i></button>
      
     <!-- <h6 class="card-subtitle mb-2 text-muted">${item.langTech}</h6> -->
      </div>
      <div class="card-footer text-center text-muted">${item.langTech}</div>
    </div>`;

    renderToDom('#view', domString);
  });
};

export { noVocab, showVocab };
