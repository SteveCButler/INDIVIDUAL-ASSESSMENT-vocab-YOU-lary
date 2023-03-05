import logoutButton from '../components/logoutButton';
import getVocabulary from '../components/vocabRequests';
import buildDom from '../pages/buildDom';
import showVocab from '../pages/showVocab';
import navBar from '../components/navBar';
import filterButtons from '../components/filterButtons';

const startApp = () => {
  buildDom();
  navBar();
  filterButtons();
  logoutButton();

  getVocabulary().then((data) => {
    showVocab(data);
  });
};

export default startApp;
