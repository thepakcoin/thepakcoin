const boardEl = document.getElementById('board');
const N = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cells')) || 15;

// helper to create cell
function makeCell(r, c) {
  const d = document.createElement('div');
  d.className = 'cell';
  d.dataset.r = r;
  d.dataset.c = c;
  return d;
}

// Build empty grid
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    boardEl.appendChild(makeCell(r, c));
  }
}

// Lookup cell by coordinates
function cellAt(r, c) {
  return boardEl.querySelector(`.cell[data-r='${r}'][data-c='${c}']`);
}

// Apply Ludo layout for 15x15
if (N === 15) {
  // Homes
  for (let r = 0; r <= 5; r++) for (let c = 0; c <= 5; c++) cellAt(r, c).classList.add('home-red');
  for (let r = 0; r <= 5; r++) for (let c = 9; c <= 14; c++) cellAt(r, c).classList.add('home-yellow');
  for (let r = 9; r <= 14; r++) for (let c = 0; c <= 5; c++) cellAt(r, c).classList.add('home-green');
  for (let r = 9; r <= 14; r++) for (let c = 9; c <= 14; c++) cellAt(r, c).classList.add('home-blue');

  // Paths
  for (let c = 1; c <= 13; c++) cellAt(6, c).classList.add('path');
  for (let r = 1; r <= 13; r++) cellAt(r, 6).classList.add('path');
  for (let c = 1; c <= 13; c++) cellAt(8, c).classList.add('path');
  for (let r = 1; r <= 13; r++) cellAt(r, 8).classList.add('path');

  // Safe lanes
  for (let r = 1; r <= 6; r++) cellAt(r, 7).classList.add('path', 'safe');
  for (let c = 8; c <= 13; c++) cellAt(7, c).classList.add('path', 'safe');
  for (let r = 8; r <= 13; r++) cellAt(r, 7).classList.add('path', 'safe');
  for (let c = 1; c <= 6; c++) cellAt(7, c).classList.add('path', 'safe');

  // Sample tokens
  function placeToken(r, c, color, label) {
    const t = document.createElement('div');
    t.className = `token ${color}`;
    t.textContent = label || '';
    cellAt(r, c).appendChild(t);
  }
  placeToken(2, 2, 'red', '1');
  placeToken(3, 3, 'red', '2');
  placeToken(2, 12, 'yellow', '1');
  placeToken(3, 11, 'yellow', '2');
  placeToken(12, 2, 'green', '1');
  placeToken(11, 3, 'green', '2');
  placeToken(12, 12, 'blue', '1');
  placeToken(11, 11, 'blue', '2');
}
