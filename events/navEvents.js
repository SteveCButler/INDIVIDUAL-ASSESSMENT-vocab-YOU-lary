import createCardForm from '../components/createCardForm';
import clearDom from '../utils/clearDom';
import filterButtons from '../components/filterButtons';
import { getVocabulary } from '../api/vocabRequests';
import showVocab from '../pages/showVocab';
import { signOut } from '../utils/auth';
import clearDomOnLogout from '../utils/clearDomOnLogout';

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

    if (e.target.id.includes('google-auth')) {
      clearDomOnLogout();
      signOut();
    }
  });
};

export default navEvents;
