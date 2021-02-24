// import Drink from './Drink.js';
// import { getMousePosition } from './utilities.js';

// const drink = new Drink();
// console.log(drink);

const canvas = document.getElementById('cup');
const ctx = canvas.getContext('2d');
canvas.height = '600';
canvas.width = '400';

ctx.scale(20, 20);

const matrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

let lastTime = 0;

function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;
  // console.log(deltaTime);
  draw();
  requestAnimationFrame(update);
}

function draw() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        ctx.fillStyle = 'red';
        ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

const player = {
  pos: { x: 5, y: 5 },
  matrix: matrix,
};
update();

// canvas.addEventListener('mousemove', function (e) {
//   const pos = getMousePosition(e, this);
//   console.log(pos);
// });
