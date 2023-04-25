const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Initial snake position and direction
let snake = [{x: 10, y: 10}, {x: 9, y: 10}, {x: 8, y: 10}];
let direction = 'right';

// Initial food position
let food = {x: Math.floor(Math.random() * 40), y: Math.floor(Math.random() * 40)};

// Game loop
function gameLoop() {
  // Move snake
  let head = {x: snake[0].x, y: snake[0].y};
  if (direction === 'up') head.y--;
  else if (direction === 'down') head.y++;
  else if (direction === 'left') head.x--;
  else if (direction === 'right') head.x++;
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    // Snake ate food, create new food
    food = {x: Math.floor(Math.random() * 40), y: Math.floor(Math.random() * 40)};
  } else {
    // Remove tail segment
    snake.pop();
  }
  // Check for game over
  if (head.x < 0 || head.x >= 40 || head.y < 0 || head.y >= 40 || snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
    clearInterval(intervalId);
    alert('Game over!');
  }
  // Draw game
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'green';
  snake.forEach(segment => ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10));
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * 10, food.y * 10, 10, 10);
}

// Start game loop
let intervalId = setInterval(gameLoop, 100);

// Handle keyboard input
document.addEventListener('keydown', event => {
  if (event.code === 'ArrowUp' && direction !== 'down') {
    direction = 'up';
  } else if (event.code === 'ArrowDown' && direction !== 'up') {
    direction = 'down';
  } else if (event.code === 'ArrowLeft' && direction !== 'right') {
    direction = 'left';
  } else if (event.code === 'ArrowRight' && direction !== 'left') {
    direction = 'right';
  }
});
