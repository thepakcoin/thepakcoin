const board = document.getElementById("board");
const boardSize = 15;
const pathCells = [];
const tokenStart = { row: 1, col: 1 }; // example

// Create grid
for (let row = 0; row < boardSize; row++) {
  for (let col = 0; col < boardSize; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Base Areas
    if (row < 6 && col < 6) cell.classList.add("base-red");
    if (row < 6 && col > 8) cell.classList.add("base-green");
    if (row > 8 && col < 6) cell.classList.add("base-yellow");
    if (row > 8 && col > 8) cell.classList.add("base-blue");

    // Path (example cells)
    if (row === 6 || row === 8 || col === 6 || col === 8) {
      cell.style.background = "#ddd";
      pathCells.push(cell);
    }

    cell.dataset.row = row;
    cell.dataset.col = col;
    board.appendChild(cell);
  }
}

// Add token in base
function addToken(color, row, col) {
  const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
  if (!cell) return;

  const token = document.createElement("div");
  token.classList.add("token", color);

  // Movement on click
  token.onclick = () => {
    moveToken(token);
  };

  cell.appendChild(token);
}

// Example tokens
addToken("red", 1, 1);
addToken("green", 1, 13);
addToken("yellow", 13, 1);
addToken("blue", 13, 13);

// Move token (basic forward demo)
let moveIndex = 0;
function moveToken(token) {
  if (moveIndex >= pathCells.length) return;

  const cell = pathCells[moveIndex];
  cell.appendChild(token);
  moveIndex++;
}
