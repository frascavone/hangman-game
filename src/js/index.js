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

// Creating an empty array to fill with player correct alphabets
export const playerArray = [];

const randomWord = await getWordFromAPI();

// Adding a dash in "theWord" element for every alphabet in randomWord
view.renderADashPerAlphabet(randomWord);

view.setMessage('Indovina la parola...una lettera alla volta');

// Strike logic /////////////////////////////////
const strike = function () {
  score--;
  view.shakeTheWordEl();
  view.showMessage('LETTERA ERRATA');
  if (score === 5) canvas.drawHead();
  if (score === 4) canvas.drawTorso();
  if (score === 3) canvas.drawLeftArm();
  if (score === 2) canvas.drawRightArm();
  if (score === 1) {
    view.setMessage('ATTENZIONE! UN ALTRO ERRORE ED AVRAI PERSO');
    canvas.drawLeftLeg();
  }
  if (score === 0) {
    view.showModal(
      `HAI PERSO!!! 😔😔😔 <br> la parola segreta era: <p style="color:brown">${randomWord.toUpperCase()}</p>`,
      'red'
    );
  }
};

// Game Logic  ///////////////////////////////////
export const tryAlphabet = (event) => {
  const input = event.target.textContent.toLowerCase();
  if (randomWord.includes(input)) {
    // avoid double insertion
    if (!playerArray.includes(input)) {
      [...randomWord].forEach((alphabet, index) => {
        if (alphabet === input) {
          // insert input into theWordEl and playerArray
          view.theWordEl.childNodes[index].innerHTML = input;
          playerArray.push(input);
          // check for playerArray and randomWord equality
          if (areEquals(playerArray, randomWord)) {
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
