import logoutButton from '../components/logoutButton';
import { getVocabulary } from '../api/vocabRequests';
import buildDom from '../pages/buildDom';
import showVocab from '../pages/showVocab';
import navBar from '../components/navBar';
import filterButtons from '../components/filterButtons';
import filterEvents from '../events/filterEvents';
import navEvents from '../events/navEvents';

const startApp = () => {
  buildDom();
  navBar();
  navEvents();
  filterButtons();
  filterEvents();
  logoutButton();

  getVocabulary().then((data) => {
    showVocab(data);
  });
};

export default startApp;
