// Select the elements on the page - canvas, shake button

const canvas = document.querySelector("#etch-a-sketch");

const ctx = canvas.getContext("2d");
const shakebutton = document.querySelector(".shake");

// Setup canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const { width, height } = canvas;

// create random x and y starting points on the canvas.

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values depending on what the user did
  x -= 10;
  y -= 10;
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// clear / shake function

// listen for arrow keys
window.addEventListener("keydown", handleKey);
