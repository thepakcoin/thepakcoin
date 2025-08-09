const board = document.getElementById("board");
const diceResult = document.getElementById("diceResult");

const BOARD_SIZE = 15; // 15x15 grid
const PLAYERS = ["red", "green", "yellow", "blue"];
let currentPlayerIndex = 0;
let diceValue = 0;

// Each player has 4 tokens and starting "yard" positions off the board
let playersTokens = {
  red:  [ -1, -1, -1, -1 ],    // -1 means token is in yard, not on board
  green:[ -1, -1, -1, -1 ],
  yellow:[ -1, -1, -1, -1 ],
  blue: [ -1, -1, -1, -1 ]
};

// Path for tokens for each player (index on board cells)
// Simplified example path - you will want full Ludo path array
const path = [
  /* 0-51 path positions, example */
  52,53,54,55,56,57,58,59,60,61,62,63,
  // ... (complete path of 52 squares in a circle)
];

// Create board cells
function createBoard() {
  board.innerHTML = "";
  for(let i=0; i < BOARD_SIZE * BOARD_SIZE; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
  }
}

createBoard();

// Roll dice logic
function rollDice() {
  diceValue = Math.floor(Math.random() * 6) + 1;
  diceResult.innerText = `${PLAYERS[currentPlayerIndex].toUpperCase()} rolled ${diceValue}`;

  // For demo, automatically move first token of current player if possible
  moveToken(currentPlayerIndex, 0);
}

// Move token logic (very simplified)
function moveToken(playerIndex, tokenIndex) {
  const player = PLAYERS[playerIndex];
  let pos = playersTokens[player][tokenIndex];

  // If token in yard, only move out if dice is 6
  if(pos === -1 && diceValue === 6) {
    playersTokens[player][tokenIndex] = 0; // Start path at 0
    updateBoard();
    nextTurn();
    return;
  }

  if(pos >= 0) {
    playersTokens[player][tokenIndex] += diceValue;
    if(playersTokens[player][tokenIndex] > 51) {
      playersTokens[player][tokenIndex] = 51; // Cap at final square for now
    }
    updateBoard();
    nextTurn();
  }
}

// Update board display with tokens
function updateBoard() {
  const cells = board.children;
  for(let i=0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    cells[i].style.backgroundColor = "white";
  }

  // Mark tokens
  PLAYERS.forEach((player, pIndex) => {
    playersTokens[player].forEach(pos => {
      if(pos >= 0) {
        // For demo, place token in some cell (you'll map path pos to board cell)
        const cellIndex = path[pos] || 0;
        const token = document.createElement("div");
        token.classList.add("home", player);
        token.style.backgroundColor = player;
        board.children[cellIndex].appendChild(token);
      }
    });
  });
}

// Next player's turn
function nextTurn() {
  currentPlayerIndex = (currentPlayerIndex + 1) % PLAYERS.length;
}

updateBoard();
