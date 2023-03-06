import { filterByLangTech, getVocabulary } from '../api/vocabRequests';
import showVocab from '../pages/showVocab';

const filterEvents = () => {
  document.querySelector('#filterButtonContainer').addEventListener('click', (e) => {
    if (e.target.id.includes('htmlFilter')) {
      filterByLangTech('HTML').then(showVocab);
    }

    if (e.target.id.includes('cssFilter')) {
      filterByLangTech('CSS').then(showVocab);
    }

    if (e.target.id.includes('javascriptFilter')) {
      filterByLangTech('Javascript').then(showVocab);
    }

    if (e.target.id.includes('reactFilter')) {
      filterByLangTech('React').then(showVocab);
    }
    if (e.target.id.includes('allCards')) {
      getVocabulary().then((data) => {
        showVocab(data);
      });
    }
  });
};

export default filterEvents;
