'use scrict';

import * as canvas from './canvas.js';
import { getWordFromAPI } from './http.js';

const theWordEl = document.querySelector('.the-word');
const keyboardKeysArray = document.querySelectorAll('.btn');
const layoutChanger = document.querySelector('.change-layout');
export const message = document.querySelector('.message');
const modal = document.querySelector('.modal');
const modalMessage = document.querySelector('.modal-message');
const tryAgain = document.querySelector('.try-again');

let score = 6;

message.textContent = 'Recupero parola casuale...';

export const showMessage = function (text) {
  message.style.visibility = 'visible';
  message.textContent = text;
  setTimeout(() => {
    message.style.visibility = 'hidden';
  }, 1500);
};

// HTTP request to swapi.dev
const randomWord = await getWordFromAPI();

// Creating an array from randomWord string
const randomWordArray = Array.from(randomWord);

// Adding a dash in "theWord" element for every alphabet of randomWord
randomWordArray.forEach((el) => {
  const span = document.createElement('span');
  if (el !== ' ' && el !== "'") {
    theWordEl.appendChild(span);
    span.innerHTML = '_';
  } else {
    theWordEl.appendChild(span);
    span.style.marginRight = '2rem';
    playerArray.push(' ');
  }
});

// Creating an empty array to fill with player correct alphabets
const playerArray = [];

// Comparing arrays
const arraysAreEquals = function () {
  return (
    playerArray.length === randomWordArray.length &&
    playerArray.every((el) => randomWordArray.includes(el))
  );
};

// Game Logic  ///////////////////////////////////
const tryAlphabet = (event) => {
  const input = event.target.textContent.toLowerCase();
  const inputIsIncluded = randomWord.includes(input);

  // avoid double insertion
  if (!playerArray.includes(input)) {
    if (inputIsIncluded) {
      // loop the randomWordArray and check for input match
      for (let i = 0; i < randomWordArray.length; i++) {
        if (input === randomWordArray[i]) {
          // insert input into theWordEl and playerArray
          theWordEl.childNodes[i].innerHTML = input;
          playerArray.push(input);
          if (arraysAreEquals()) {
            showModal(
              `HAI VINTO!!! 🥳🥳🥳 <br> la parola era:<br>${randomWord.toUpperCase()}`,
              'green'
            );
          }
        }
      }
    } else strike();
  } else showMessage('LETTERA GIÀ INSERITA');
};

const shakeTheWordEl = function () {
  theWordEl.classList.remove('wrong');
  theWordEl.offsetWidth;
  theWordEl.classList.add('wrong');
};

const showModal = function (text, color) {
  modal.style.backgroundColor = color;
  modal.style.display = 'block';
  modalMessage.innerHTML = text;
  tryAgain.classList.remove('hidden');
};

// Strike logic /////////////////////////////////
const strike = function () {
  score--;
  shakeTheWordEl();
  showMessage('LETTERA ERRATA');
  if (score === 5) canvas.drawHead();
  if (score === 4) canvas.drawTorso();
  if (score === 3) canvas.drawLeftArm();
  if (score === 2) canvas.drawRightArm();
  if (score === 1) {
    showMessage('ATTENZIONE! UN ALTRO ERRORE ED AVRAI PERSO');
    canvas.drawLeftLeg();
  }
  if (score === 0) {
    showModal(
      `HAI PERSO!!! 😔😔😔 <br> la parola segreta era: <br> ${randomWord.toUpperCase()} <br>`,
      'red'
    );
  }
};

// Event listeners //////////////////////////
keyboardKeysArray.forEach((key) => {
  key.addEventListener('click', tryAlphabet);
});

layoutChanger.addEventListener('click', () => {
  document.querySelector('.keyboard.abcde').classList.toggle('hidden');
  document.querySelector('.keyboard.qwerty').classList.toggle('hidden');
});

tryAgain.addEventListener('click', () => {
  window.location.reload();
});
