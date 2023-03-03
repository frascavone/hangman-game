// HTTP request to swapi.dev

import { showMessage } from './view';

export const getWordFromAPI = async function () {
  try {
    const response = await fetch('https://swapi.dev/api/planets');
    if (response.ok) {
      const data = await response.json();
      const randomWord =
        data.results[Math.floor(Math.random() * data.results.length)].name;
      return randomWord.toLowerCase();
    } else {
      throw new Error(`Ops, qualcosa è andato storto`);
    }
  } catch (error) {
    showMessage(`${error.message}`);
  }
};
