import logoutButton from '../components/logoutButton';
import { getVocabulary } from '../api/vocabRequests';
import buildDom from '../pages/buildDom';
import showVocab from '../pages/showVocab';
import navBar from '../components/navBar';
import filterButtons from '../components/filterButtons';
import filterEvents from '../events/filterEvents';
import navEvents from '../events/navEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  buildDom();
  navBar();
  logoutButton();
  navEvents(user.uid);
  formEvents(user.uid);
  filterButtons();
  filterEvents(user.uid);

  getVocabulary(user.uid).then((data) => {
    showVocab(data);
  });
};

export default startApp;
