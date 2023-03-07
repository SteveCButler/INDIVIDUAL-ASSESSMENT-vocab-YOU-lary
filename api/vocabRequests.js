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

const createVocabulary = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateVocabulary = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getVocabulary,
  filterByLangTech,
  createVocabulary,
  updateVocabulary,
};
