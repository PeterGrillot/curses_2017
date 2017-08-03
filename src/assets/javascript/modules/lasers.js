let isIncreasing = true;
const retinaResize = function(canvas, ctx, canvasWidth, canvasHeight) {
  if (window.devicePixelRatio > 1) {
	canvas.width = canvasWidth * window.devicePixelRatio;
	canvas.height = canvasHeight * window.devicePixelRatio;
	canvas.setAttribute("style", `width:${canvasWidth}px;height:${canvasHeight}px`);
	ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
}
const canvases = document.querySelectorAll('canvas');
for (let i = 0; i < canvases.length; i++) {
  let canvas = canvases[i];
  let ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  retinaResize(canvas, ctx, canvas.width, canvas.height);
  let counter = 0;
  setInterval(function() {
	let n = Math.floor(Math.random() * 10);
	if (n % 2 == 0) {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
	ctx.beginPath();
	ctx.moveTo(counter * n, 0);
	ctx.lineTo(canvas.width / 4, canvas.height / 3); // dont touch
	ctx.lineWidth = 1;
	ctx.closePath();
	ctx.strokeStyle = '#ff39a1';
	ctx.shadowColor = '#ff39a1';
	// set initial blur of 3px
	ctx.shadowBlur = 8;
	ctx.stroke();
	if (counter == 100) {
	  isIncreasing = false;
	} else if (counter == 0) {
	  isIncreasing = true;
	}
	counter = isIncreasing ? counter + 1 : counter - 1;
  }, 200);
}