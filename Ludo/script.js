const board = document.getElementById("ludo-board");

for (let i = 0; i < 225; i++) {
  const cell = document.createElement("div");

  const row = Math.floor(i / 15);
  const col = i % 15;

  // Top-left red home
  if (row < 6 && col < 6) cell.classList.add("red");
  // Top-right green home
  else if (row < 6 && col > 8) cell.classList.add("green");
  // Bottom-left yellow home
  else if (row > 8 && col < 6) cell.classList.add("yellow");
  // Bottom-right blue home
  else if (row > 8 && col > 8) cell.classList.add("blue");

  // Vertical middle path
  else if (col === 6 && row >= 0 && row < 15) cell.classList.add("path");
  else if (col === 8 && row >= 0 && row < 15) cell.classList.add("path");

  // Horizontal middle path
  else if (row === 6 && col >= 0 && col < 15) cell.classList.add("path");
  else if (row === 8 && col >= 0 && col < 15) cell.classList.add("path");

  // Red token cells (top-left inside)
  if ((row === 1 || row === 3) && (col === 1 || col === 3)) {
    cell.classList.add("token-cell");
  }

  // Green token cells (top-right inside)
  if ((row === 1 || row === 3) && (col === 11 || col === 13)) {
    cell.classList.add("token-cell");
  }

  // Yellow token cells (bottom-left inside)
  if ((row === 11 || row === 13) && (col === 1 || col === 3)) {
    cell.classList.add("token-cell");
  }

  // Blue token cells (bottom-right inside)
  if ((row === 11 || row === 13) && (col === 11 || col === 13)) {
    cell.classList.add("token-cell");
  }

  board.appendChild(cell);
}
