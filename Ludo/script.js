const board = document.querySelector('.ludo-board');

// Create 15x15 = 225 cells
for (let i = 0; i < 225; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  board.appendChild(cell);
}
