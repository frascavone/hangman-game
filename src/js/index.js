'use scrict';

import { getWordFromAPI } from './http';
import * as view from './view';
import * as canvas from './canvas';
import { areEquals } from './helpers';

const keyboardKeysArray = document.querySelectorAll('.btn');
const layoutChanger = document.querySelector('.change-layout');

// Setting starting score
let score = 6;

view.setMessage('Recupero parola casuale...');

const randomWord = await getWordFromAPI();

// Creating an empty array to fill with player correct alphabets
export const playerArray = [];

// Adding a dash in "theWord" element for every alphabet in randomWord
view.renderADashPerAlphabet(randomWord);

view.setMessage('Indovina la parola...una lettera alla volta');

// Strike logic /////////////////////////////////
const strike = function () {
  score--;
  view.shakeTheWordEl();
  view.showMessage('LETTERA ERRATA');
  switch (score) {
    case 5:
      canvas.drawHead();
      break;
    case 4:
      canvas.drawTorso();
      break;
    case 3:
      canvas.drawLeftArm();
      break;
    case 2:
      canvas.drawRightArm();
      break;
    case 1: {
      canvas.drawLeftLeg();
      view.setMessage('ATTENZIONE! UN ALTRO ERRORE ED AVRAI PERSO');
      break;
    }
    case 0: {
      view.showModal(
        `HAI PERSO!!! 😔😔😔 <br> la parola segreta era: <p style="color:brown">${randomWord.toUpperCase()}</p>`,
        'red'
      );
    }
  }
};

// Game Logic  ///////////////////////////////////
export const tryAlphabet = (event) => {
  const input = event.target.textContent.toLowerCase();
  if (randomWord.includes(input)) {
    // avoid double insertion
    if (!playerArray.includes(input)) {
      const randomWordArray = Array.from(randomWord);
      randomWordArray.forEach((alphabet, index) => {
        if (alphabet === input) {
          view.theWordEl.childNodes[index].innerHTML = input;
          playerArray.push(input);
          if (areEquals(playerArray, randomWordArray)) {
            view.showModal(
              `HAI VINTO!!! 🥳🥳🥳 <br> la parola era:<p style="color:brown">${randomWord.toUpperCase()}</p>`,
              'green'
            );
          }
        }
      });
    } else view.showMessage('LETTERA GIÀ INSERITA');
  } else strike();
};

// Event listeners //////////////////////////
keyboardKeysArray.forEach((key) => {
  key.addEventListener('click', tryAlphabet);
});

layoutChanger.addEventListener('click', () => {
  document.querySelector('.keyboard.abcde').classList.toggle('hidden');
  document.querySelector('.keyboard.qwerty').classList.toggle('hidden');
});

view.tryAgain.addEventListener('click', () => {
  window.location.reload();
});

export default { playerArray, tryAlphabet };
