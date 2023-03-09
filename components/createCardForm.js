import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const createCardForm = (uid, obj = {}) => {
  clearDom();
  document.querySelector('#filterButtonContainer').innerHTML = '';
  const domString = ` 
     <form id="${obj.firebaseKey ? `updateVocabItem--${obj.firebaseKey}` : 'submit-card-form'}" class="mb-4">
      <div class="form-group">
        <!-- <label for="title">Title</label> -->
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <!-- <label for="definition">Definition</label> -->
        <input type="text" class="form-control" id="definition" placeholder="Definition" value="${obj.definition || ''}" required>
      </div>
      <div class="form-group p-5">
        <select class="form-select" id="languageSelect" aria-label="Language select">
          <option selected>${obj.langTech || 'Select Language'}</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Javascript">Javascript</option>
          <option value="React">React</option>
        </select required>
        
      </div>
      
      <button type="submit" class="btn btn-secondary mt-3">Submit Vocab</button>
    </form>
  `;

  renderToDom('#form-container', domString);
};

export default createCardForm;
