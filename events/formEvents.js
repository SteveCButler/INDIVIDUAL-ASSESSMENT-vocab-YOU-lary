// import { createVocabulary, getVocabulary, updateVocabulary } from '../api/vocabRequests';
// import showVocab from '../pages/showVocab';
import { createVocabulary, updateVocabulary, getVocabulary } from '../api/vocabRequests';
import showVocab from '../pages/showVocab';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const d = new Date();
      const hour = d.getHours();
      const minutes = d.getMinutes();
      const submitTime = `${hour}:${minutes}`;
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        langTech: document.querySelector('#languageSelect').value,
        submitTime,
        uid: '',
      };
      createVocabulary(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        console.warn('patchPayload', patchPayload);
        updateVocabulary(patchPayload).then(() => {
          getVocabulary().then(showVocab);
        });
      });
    }
  });
};

export default formEvents;
