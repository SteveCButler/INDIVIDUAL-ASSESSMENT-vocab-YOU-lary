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

    if (e.target.id.includes('sortDropdown')) {
      const sortItem = document.getElementById('sortDropdown');
      getVocabulary(uid).then((data) => {
        if (sortItem.value === '1') {
          const alpha = data.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
          showVocab(alpha);
        } else if (sortItem.value === '2') {
          const newest = data.sort((a, b) => b.submitTime - a.submitTime);
          showVocab(newest);
        } else if (sortItem.value === '3') {
          const newest = data.sort((a, b) => a.submitTime - b.submitTime);
          showVocab(newest);
        }
      });
    }
  });
};

export default filterEvents;
