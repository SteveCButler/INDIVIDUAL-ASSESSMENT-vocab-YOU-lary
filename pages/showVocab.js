import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import filterButtons from '../components/filterButtons';

const showVocab = (array) => {
  clearDom();
  filterButtons();
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
     <h6 class="card-subtitle mb-2 text-muted">${item.langTech}</h6>
    <p class="card-text">${item.definition}</p>
   <button class="btn"><i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit"></i></button>
            <button class="btn"><i id="delete-book-btn--${item.firebaseKey}" class="fas fa-trash-alt"></i></button>
  </div>
</div>`;

    renderToDom('#view', domString);
  });
};

export default showVocab;
