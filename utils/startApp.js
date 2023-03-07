import logoutButton from '../components/logoutButton';
import { getVocabulary } from '../api/vocabRequests';
import buildDom from '../pages/buildDom';
import showVocab from '../pages/showVocab';
import navBar from '../components/navBar';
import filterButtons from '../components/filterButtons';
import filterEvents from '../events/filterEvents';
import navEvents from '../events/navEvents';
import formEvents from '../events/formEvents';

const startApp = () => {
  buildDom();
  navBar();
  logoutButton();
  navEvents();
  formEvents();
  filterButtons();
  filterEvents();

  getVocabulary().then((data) => {
    showVocab(data);
  });
};

export default startApp;
