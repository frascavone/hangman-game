export const canvas = document.querySelector('.hangman');
export const ctx = canvas.getContext('2d');
ctx.fillStyle = '#fff';
ctx.strokeStyle = '#fff';
ctx.lineWidth = 10;
ctx.fillRect(20, 280, 90, 20);
ctx.beginPath();
ctx.moveTo(45, 280);
ctx.lineTo(45, 0);
ctx.lineTo(200, 0);
ctx.lineTo(200, 40);
ctx.stroke();

export const drawHead = function () {
  ctx.beginPath();
  ctx.arc(200, 60, 20, 0, Math.PI * 2, true);
  ctx.stroke();
};

export const drawTorso = function () {
  ctx.moveTo(200, 80);
  ctx.lineTo(200, 180);
  ctx.stroke();
};
export const drawLeftArm = function () {
  ctx.moveTo(200, 80);
  ctx.lineTo(140, 120);
  ctx.stroke();
};
export const drawRightArm = function () {
  ctx.moveTo(200, 80);
  ctx.lineTo(260, 120);
  ctx.stroke();
};
export const drawLeftLeg = function () {
  ctx.moveTo(200, 175);
  ctx.lineTo(140, 220);
  ctx.stroke();
};
export const drawRightLeg = function () {
  ctx.moveTo(200, 175);
  ctx.lineTo(260, 220);
  ctx.stroke();
};
