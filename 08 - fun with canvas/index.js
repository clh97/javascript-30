const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = "7";
ctx.globalCompositeOperation = "multiply";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let color = "#f1f1f1";

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.strokeStyle = "#" + color;
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
  color = Math.floor(Math.random() * 16777215).toString(16);
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
});

canvas.addEventListener("mouseout", (e) => {
  isDrawing = false;
});
