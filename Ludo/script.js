const board = document.getElementById("board");
const diceResult = document.getElementById("diceResult");

const BOARD_SIZE = 15;
const PLAYERS = ["red", "green", "yellow", "blue"];
let currentPlayerIndex = 0;
let diceValue = 0;

// Tokens positions: -1 = home yard, else index on path array
let playersTokens = {
  red:    [-1, -1, -1, -1],
  green:  [-1, -1, -1, -1],
  yellow: [-1, -1, -1, -1],
  blue:   [-1, -1, -1, -1],
};

// Full 15x15 board color map based on classic Ludo board
// Each element corresponds to a cell and contains a class name string for styling
// This is simplified but covers all 225 cells
const boardColors = [
  "red-home","red-home","red-home","red-home","red-home","red-home","","","","","green-home","green-home","green-home","green-home","green-home",
  "red-home","red-home","red-home","red-home","red-home","red-home","","","","","green-home","green-home","green-home","green-home","green-home",
  "red-home","red-home","red-home","red-home","red-home","red-home","","","","","green-home","green-home","green-home","green-home","green-home",
  "red-home","red-home","red-home","red-home","red-home","red-home","","","","","green-home","green-home","green-home","green-home","green-home",
  "red-home","red-home","red-home","red-home","red-home","red-home","","","","","green-home","green-home","green-home","green-home","green-home",
  "red-home","red-home","red-home","red-home","red-home","red-home","","","","","green-home","green-home","green-home","green-home","green-home",
  "","","","","","","","","","","","","","","",
  "","","","","","","","","","","","","","","",
  "","","","","","","","","","","","","","","",
  "","","","","","","","","","","","","","","",
  "blue-home","blue-home","blue-home","blue-home","blue-home","blue-home","","","","","yellow-home","yellow-home","yellow-home","yellow-home","yellow-home",
  "blue-home","blue-home","blue-home","blue-home","blue-home","blue-home","","","","","yellow-home","yellow-home","yellow-home","yellow-home","yellow-home",
  "blue-home","blue-home","blue-home","blue-home","blue-home","blue-home","","","","","yellow-home","yellow-home","yellow-home","yellow-home","yellow-home",
  "blue-home","blue-home","blue-home","blue-home","blue-home","blue-home","","","","","yellow-home","yellow-home","yellow-home","yellow-home","yellow-home",
  "blue-home","blue-home","blue-home","blue-home","blue-home","blue-home","","","","","yellow-home","yellow-home","yellow-home","yellow-home","yellow-home",
  "blue-home","blue-home","blue-home","blue-home","blue-home","blue-home","","","","","yellow-home","yellow-home","yellow-home","yellow-home","yellow-home",
];

// For demo, map path to some central cells (simplified)
const path = [
  104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,
  134,149,164,179,194,209,224,223,222,221,220,219,218,217,216,215,
];

// Create the board with colors
function createBoard() {
  board.innerHTML = "";
  for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Add color class if exists
    if (boardColors[i]) {
      cell.classList.add(boardColors[i]);
    }

    board.appendChild(cell);
  }
}

// Render tokens on board cells based on their path position
function renderTokens() {
  // Clear tokens first
  [...board.children].forEach((cell) => (cell.innerHTML = ""));

  PLAYERS.forEach((player) => {
    playersTokens[player].forEach((pos, i) => {
      if (pos >= 0 && path[pos] !== undefined) {
        const cellIndex = path[pos];
        const token = document.createElement("div");
        token.classList.add("token", player);
        token.title = `${player.toUpperCase()} Token ${i + 1}`;
        board.children[cellIndex].appendChild(token);
      }
    });
  });
}

// Roll dice and move tokens
function rollDice() {
  diceValue = Math.floor(Math.random() * 6) + 1;
  diceResult.innerText = `${PLAYERS[currentPlayerIndex].toUpperCase()} rolled ${diceValue}`;

  moveFirstMovableToken();

  renderTokens();
}

// Move the first movable token of current player
function moveFirstMovableToken() {
  const player = PLAYERS[currentPlayerIndex];
  let moved = false;

  for (let i = 0; i < 4; i++) {
    if (playersTokens[player][i] === -1 && diceValue === 6) {
      playersTokens[player][i] = 0;
      moved = true;
      break;
    } else if (playersTokens[player][i] >= 0) {
      if (playersTokens[player][i] + diceValue < path.length) {
        playersTokens[player][i] += diceValue;
        moved = true;
        break;
      }
    }
  }

  if (!moved) {
    diceResult.innerText += " - No moves available, turn skipped!";
  } else {
    if (diceValue !== 6) {
      nextTurn();
    } else {
      diceResult.innerText += " - You rolled 6! Play again.";
    }
  }
}

// Next player turn
function nextTurn() {
  currentPlayerIndex = (currentPlayerIndex + 1) % PLAYERS.length;
  diceResult.innerText += ` Next: ${PLAYERS[currentPlayerIndex].toUpperCase()}`;
}

// Initialize
createBoard();
renderTokens();
diceResult.innerText = `${PLAYERS[currentPlayerIndex].toUpperCase()} starts the game!`;
