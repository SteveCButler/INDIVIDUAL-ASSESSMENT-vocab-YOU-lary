import { getVocabulary, deleteVocabulary, getVocabItem } from '../api/vocabRequests';
import { showVocab } from '../pages/showVocab';
import createCardForm from '../components/createCardForm';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocabulary(firebaseKey).then(() => {
          getVocabulary(uid).then(showVocab);
        });
      }
    }

    if (e.target.id.includes('edit')) {
      // document.querySelector('#view').innerHTML = '';
      const [, firebaseKey] = e.target.id.split('--');
      getVocabItem(firebaseKey).then((obj) => {
        createCardForm(uid, obj);
      });
    }
  });
};

export default domEvents;
