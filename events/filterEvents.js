import { filterByLangTech, getVocabulary } from '../api/vocabRequests';
import { showVocab, noVocab } from '../pages/showVocab';

const filterEvents = (uid) => {
  document.querySelector('#filterButtonContainer').addEventListener('click', (e) => {
    if (e.target.id.includes('htmlFilter')) {
      filterByLangTech('HTML', uid).then((data) => {
        const isEmpty =
          Object.keys(data).length === 0 ? noVocab() : showVocab(data);
        return isEmpty;
      });
    }

    if (e.target.id.includes('cssFilter')) {
      filterByLangTech('CSS', uid).then((data) => {
        const isEmpty =
          Object.keys(data).length === 0 ? noVocab() : showVocab(data);
        return isEmpty;
      });
    }

    if (e.target.id.includes('javascriptFilter')) {
      filterByLangTech('Javascript', uid).then((data) => {
        const isEmpty =
          Object.keys(data).length === 0 ? noVocab() : showVocab(data);
        return isEmpty;
      });
    }

    if (e.target.id.includes('reactFilter')) {
      filterByLangTech('React', uid).then((data) => {
        const isEmpty = Object.keys(data).length === 0 ? noVocab() : showVocab(data);
        return isEmpty;
      });
    }
    if (e.target.id.includes('allCards')) {
      getVocabulary(uid).then((data) => {
        showVocab(data);
      });
    }
  });
};

export default filterEvents;
