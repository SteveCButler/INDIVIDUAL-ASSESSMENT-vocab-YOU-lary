import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showVocab = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
     <h6 class="card-subtitle mb-2 text-muted">${item.langTech}</h6>
    <p class="card-text">${item.description}</p>
    <a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link">Delete</a>
  </div>
</div>`;

    renderToDom('#view', domString);
  });
};

export default showVocab;
