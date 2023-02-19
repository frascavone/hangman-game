'use scrict';
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

const theWordEl = document.querySelector('#the-word');
const message = document.querySelector('.message');
const keyboardKeysArray = document.querySelectorAll('.btn');

message.textContent = 'Recupero parola casuale...';

let score = 10;

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
theWordEl.textContent = randomWord.replace(/[a-z]/g, '_');

const strike = function () {
  document.getElementById('score').textContent = score -= 2;
};

const tryAlphabet = (event) => {
  const input = event.target.textContent.toLowerCase();
  const inputIsIncluded = randomWord.includes(input);
  console.log(randomWord, input);

  if (inputIsIncluded) {
    console.log('LETTERA INCLUSA');

    // theWordEl.textContent = randomWord.replace(input, '_');
  } else strike();
};

keyboardKeysArray.forEach((key) => {
  key.addEventListener('click', tryAlphabet);
});
