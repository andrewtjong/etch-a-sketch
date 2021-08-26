// Select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Setup canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const { width, height } = canvas;

// create random x and y starting points on the canvas.

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function

// write a handler for the keys
function handleKey(e) {
  e.preventDefault();
  console.log('HANDLEKEY')
}

// clear / shake function

// listen for arrow keys
window.addEventListener('keydown', handleKey)