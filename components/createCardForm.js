import renderToDom from '../utils/renderToDom';
// import clearDom from '../utils/clearDom';

const createCardForm = (obj = {}) => {
  document.querySelector('#filterButtonContainer').innerHTML = '';
  const domString = ` 
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'
}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''
}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <input type="text" class="form-control" id="description" placeholder="Definition" value="${obj.definition || ''
}" required>
      </div>
      <div class="form-group p-5">
        <select class="form-select" aria-label="Language select">
          <option selected>Select Language</option>
          <option value="${obj.langTech || 'HTML'}">HTML</option>
          <option value="${obj.langTech || 'CSS'}">CSS</option>
          <option value="${obj.langTech || 'Javascript'}">Javascript</option>
          <option value="${obj.langTech || 'React'}">React</option>
        </select required>
        
      </div>
      
      <button type="submit" class="btn btn-primary mt-3">Submit Vocab</button>
    </form>
  `;

  renderToDom('#form-container', domString);
};

export default createCardForm;
