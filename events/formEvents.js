// import { createVocabulary, getVocabulary, updateVocabulary } from '../api/vocabRequests';
// import showVocab from '../pages/showVocab';
import { createVocabulary, updateVocabulary, getVocabulary } from '../api/vocabRequests';
import { showVocab } from '../pages/showVocab';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // EVENT FOR ADDING VOCAB ITEM
    if (e.target.id.includes('submit-card-form')) {
      const submitTime = new Date().toLocaleString();
      const [dateValue, timeValue] = submitTime.split(',');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        langTech: document.querySelector('#languageSelect').value,
        date: `${dateValue}`,
        time: `${timeValue}`,
        uid: `${uid}`,
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
      console.warn('submit');
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
