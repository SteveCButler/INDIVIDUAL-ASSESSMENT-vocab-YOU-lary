import createCardForm from '../components/createCardForm';
import clearDom from '../utils/clearDom';
import filterButtons from '../components/filterButtons';
import { getVocabulary } from '../api/vocabRequests';
import showVocab from '../pages/showVocab';

const navEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('createEntry')) {
      clearDom();
      createCardForm();
    }
    if (e.target.id.includes('home')) {
      clearDom();
      filterButtons();
      getVocabulary().then((data) => {
        showVocab(data);
      });
    }
  });
};

export default navEvents;
