// Hangman Game

// Hangman is a simple game that revolves around guessing
// a randomly chosen word.
// The player gets to choose an alphabet every round.
// If the alphabet does not exist in the chosen word,
// the player will receive one strike.
// After receiving a certain number of strikes,
// the player loses the game.
// The player will win the game if he/she/it
// correctly guesses all the alphabets.

// Come requisiti aggiuntivi ti aggiungo:

// - fai in modo che la tastiera sia a video
//   e non che gli input arrivino da tastiera hardware
// - la tastiera può avere un diverso layout (qwerty, abcde, ecc)
// - usa servizi API come swapi.dev per recuperare le parole da indovinare

//////////////////////////////////////////////////////////
'use scrict';

// importing Hangman canvas
import * as canvas from './canvas.js';

const theWordEl = document.querySelector('.the-word');
const keyboardKeysArray = document.querySelectorAll('.btn');
const layoutChanger = document.querySelector('.change-layout');
const message = document.querySelector('.message');
const tryAgain = document.querySelector('.try-again');
let score = 6;

message.textContent = 'Recupero parola casuale...';

// HTTP request to swapi.dev
const getWordFromAPI = async function () {
  const response = await fetch('https://swapi.dev/api/planets');
  try {
    if (response.ok) {
      const data = await response.json();
      const randomWord =
        data.results[Math.floor(Math.random() * data.results.length)].name;
      message.textContent = 'Indovina la parola, una lettera alla volta...';
      return randomWord.toLowerCase();
    } else {
      throw new Error(`Ops, qualcosa è andato storto`);
    }
  } catch (error) {
    message.textContent = `${error.message}`;
  }
};
const randomWord = await getWordFromAPI();

// Game Logic
const tryAlphabet = (event) => {
  const input = event.target.textContent.toLowerCase();
  const inputIsIncluded = randomWord.includes(input);
  if (!playerArray.includes(input)) {
    if (inputIsIncluded) {
      for (let i = 0; i < randomWordArray.length; i++) {
        if (input === randomWordArray[i]) {
          theWordEl.childNodes[i].innerHTML = input;
          playerArray.push(input);
          console.log(randomWordArray, playerArray);
          if (areArraysEquals()) {
            document.querySelector('body').style.backgroundColor = 'green';
            message.textContent = 'HAI VINTO!!! 🥳🥳🥳';
            keyboardKeysArray.forEach((key) => {
              key.removeEventListener('click', tryAlphabet);
            });
            tryAgain.classList.remove('hidden');
          }
        }
      }
    } else strike();
  }
};

// Strike logic
const strike = function () {
  score--;
  if (score === 5) canvas.drawHead();
  if (score === 4) canvas.drawTorso();
  if (score === 3) canvas.drawLeftArm();
  if (score === 2) canvas.drawRightArm();
  if (score === 1) canvas.drawLeftLeg();
  if (score === 0) {
    canvas.drawRightLeg();
    document.querySelector('body').style.backgroundColor = 'red';
    message.style.color = 'white';
    message.textContent = `HAI PERSO!!! la parola segreta era: ${randomWord.toUpperCase()} 😔😔😔`;
    keyboardKeysArray.forEach((key) => {
      key.removeEventListener('click', tryAlphabet);
    });
    tryAgain.classList.remove('hidden');
  }
};

const randomWordArray = Array.from(randomWord);
const playerArray = [];

// Compare arrays
const areArraysEquals = function () {
  return (
    playerArray.length === randomWordArray.length &&
    playerArray.every((el) => randomWordArray.includes(el))
  );
};

// Adding a dash in "theWord" element for every alphabet of randomWord
randomWordArray.forEach((el) => {
  const span = document.createElement('span');
  if (el !== ' ' && el !== "'") {
    theWordEl.appendChild(span);
    span.innerHTML = '_';
  } else {
    theWordEl.appendChild(span);
    span.style.marginLeft = '2rem';
    playerArray.push(' ');
  }
});

// Event listener for keyboard buttons
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
