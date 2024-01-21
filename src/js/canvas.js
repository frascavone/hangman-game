export const canvas = document.querySelector(".hangman");
export const ctx = canvas.getContext("2d");
ctx.fillStyle = "#fff";
ctx.strokeStyle = "#fff";
ctx.lineWidth = 5;
ctx.fillRect(10, 180, 60, 10);
ctx.beginPath();
ctx.moveTo(30, 180);
ctx.lineTo(30, 0);
ctx.lineTo(140, 0);
ctx.lineTo(140, 40);
ctx.stroke();

export const drawHead = function () {
	ctx.beginPath();
	ctx.arc(140, 50, 10, 0, Math.PI * 2, true);
	ctx.stroke();
};

export const drawTorso = function () {
	ctx.moveTo(140, 60);
	ctx.lineTo(140, 130);
	ctx.stroke();
};
export const drawLeftArm = function () {
	ctx.moveTo(140, 60);
	ctx.lineTo(100, 100);
	ctx.stroke();
};
export const drawRightArm = function () {
	ctx.moveTo(140, 60);
	ctx.lineTo(180, 100);
	ctx.stroke();
};
export const drawLeftLeg = function () {
	ctx.moveTo(140, 130);
	ctx.lineTo(100, 180);
	ctx.stroke();
};
