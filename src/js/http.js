// HTTP request to swapi.dev

import { showMessage } from './view';

export const getWordFromAPI = async function () {
  try {
    const response = await fetch('https://random-word-api.herokuapp.com/word?lang=it');
    if (response.ok) {
      const data = await response.json();
      return data.results[0];
    } else {
      throw new Error(`Ops, qualcosa è andato storto`);
    }
  } catch (error) {
    showMessage(`${error.message}`);
  }
};
