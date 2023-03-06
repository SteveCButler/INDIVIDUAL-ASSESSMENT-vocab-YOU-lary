import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocabulary = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const filterByLangTech = (language) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="langTech"&equalTo="${language}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getVocabulary,
  filterByLangTech
};