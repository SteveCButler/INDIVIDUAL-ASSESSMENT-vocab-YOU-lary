// import { createVocabulary, getVocabulary, updateVocabulary } from '../api/vocabRequests';
// import showVocab from '../pages/showVocab';
import { createVocabulary, updateVocabulary, getVocabulary } from '../api/vocabRequests';
import { showVocab } from '../pages/showVocab';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // EVENT FOR ADDING VOCAB ITEM
    if (e.target.id.includes('submit-card-form')) {
      const submitTime = Date.now();
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        langTech: document.querySelector('#languageSelect').value,
        uid: `${uid}`,
        submitTime,
      };
      createVocabulary(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocabulary(patchPayload).then(() => {
          getVocabulary(uid).then(showVocab);
        });
      });
    }

    // EVENT FOR UPDATING VOCAB ITEM
    if (e.target.id.includes('updateVocabItem')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        langTech: document.querySelector('#languageSelect').value,
        firebaseKey,
      };
      updateVocabulary(payload).then(() => {
        getVocabulary(uid).then(showVocab);
      });
    }
  });
};

export default formEvents;
