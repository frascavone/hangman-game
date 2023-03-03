export const theWordEl = document.querySelector('.the-word');
export const message = document.querySelector('.message');
export const modal = document.querySelector('.modal');
export const modalMessage = document.querySelector('.modal-message');
export const tryAgain = document.querySelector('.try-again');

import { playerArray } from './index';

export const setMessage = (text) => {
  message.textContent = text;
};

export const showMessage = (text) => {
  message.style.visibility = 'visible';
  message.textContent = text;
  setTimeout(() => {
    message.style.visibility = 'hidden';
  }, 1500);
};

export const renderADashPerAlphabet = (string) => {
  for (const alphabet of string) {
    const span = document.createElement('span');
    if (alphabet !== ' ' && alphabet !== "'") {
      theWordEl.appendChild(span);
      span.innerHTML = '_';
    } else {
      theWordEl.appendChild(span);
      span.style.marginRight = '2rem';
      playerArray.push(' ');
    }
  }
};

export const shakeTheWordEl = function () {
  theWordEl.classList.remove('wrong');
  theWordEl.offsetWidth;
  theWordEl.classList.add('wrong');
};

export const showModal = function (text, color) {
  modal.style.backgroundColor = color;
  modal.style.display = 'block';
  modalMessage.innerHTML = text;
  tryAgain.classList.remove('hidden');
};

export const closeModal = function () {
  modal.style.display = 'none';
  tryAgain.classList.add('hidden');
};
