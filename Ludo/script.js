const board = document.getElementById("board");
const diceResult = document.getElementById("diceResult");

const BOARD_SIZE = 15;
const PLAYERS = ["red", "green", "yellow", "blue"];
let currentPlayerIndex = 0;
let diceValue = 0;

// Each player’s tokens - position on path; -1 means in home yard
let playersTokens = {
  red:    [-1, -1, -1, -1],
  green:  [-1, -1, -1, -1],
  yellow: [-1, -1, -1, -1],
  blue:   [-1, -1, -1, -1],
};

// Ludo path: 52 main squares, starting points for each player
// Indexes correspond to board cells (0 to 224), mapping below:

// 15x15 = 225 cells; we will highlight colors for home zones, safe zones & path

// Define home squares for each player (6x6 areas)
const homes = {
  red:    [0,1,2,15,16,17,30,31,32,45,46,47,60,61,62,75,76,77,90,91,92,105,106,107],
  green:  [12,13,14,27,28,29,42,43,44,57,58,59,72,73,74,87,88,89,102,103,104,117,118,119],
  yellow: [210,211,212,195,196,197,180,181,182,165,166,167,150,151,152,135,136,137,120,121,122,105,106,107],
  blue:   [198,199,200,183,184,185,168,169,170,153,154,155,138,139,140,123,124,125,108,109,110,93,94,95]
};

// Safe zones (stars) on board - cell indices (some example)
const safeZones = [1, 8, 13, 20, 27, 34, 41, 48, 55, 62, 69, 76];

// Starting points of each player on main path (indexes)
const startPoints = {
  red:  0,
  green: 13,
  yellow: 26,
  blue:  39,
};

// Full path cells in order (52 steps) - cell indices on the board grid (simplified example)
const path = [
  2,3,4,5,6,7,8,9,10,11,12,25,38,51,64,77,90,103,116,129,142,155,168,181,194,207,220,221,222,223,224,
  211,198,185,172,159,146,133,120,107,94,81,68,55
];

// Create board cells with color coding
function createBoard() {
  board.innerHTML = "";
  for(let i=0; i < BOARD_SIZE * BOARD_SIZE; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Color home zones
    if(homes.red.includes(i)) cell.classList.add("red-home");
    if(homes.green.includes(i)) cell.classList.add("green-home");
    if(homes.yellow.includes(i)) cell.classList.add("yellow-home");
    if(homes.blue.includes(i)) cell.classList.add("blue-home");

    // Color safe zones
    if(safeZones.includes(i)) cell.classList.add("safe");

    board.appendChild(cell);
  }
}

// Render tokens on the board
function renderTokens() {
  // Clear all tokens first
  [...board.children].forEach(cell => cell.innerHTML = "");

  PLAYERS.forEach(player => {
    playersTokens[player].forEach((pos, index) => {
      if(pos >= 0 && path[pos] !== undefined) {
        const cellIndex = path[pos];
        const token = document.createElement("div");
        token.classList.add("token", player);
        token.title = `${player.toUpperCase()} Token ${index + 1}`;
        board.children[cellIndex].appendChild(token);
      }
    });
  });
}

// Dice roll and token movement logic
function rollDice() {
  diceValue = Math.floor(Math.random() * 6) + 1;
  diceResult.innerText = `${PLAYERS[currentPlayerIndex].toUpperCase()} rolled ${diceValue}`;

  moveFirstMovableToken();

  renderTokens();
}

// Move the first token that can move
function moveFirstMovableToken() {
  const player = PLAYERS[currentPlayerIndex];
  let moved = false;

  for(let i=0; i < 4; i++) {
    if(playersTokens[player][i] === -1 && diceValue === 6) {
      // Move token out of yard to start
      playersTokens[player][i] = 0;
      moved = true;
      break;
    } else if(playersTokens[player][i] >= 0) {
      // Move token forward
      if(playersTokens[player][i] + diceValue <= path.length - 1) {
        playersTokens[player][i] += diceValue;
        moved = true;
        break;
      }
    }
  }

  if(!moved) {
    diceResult.innerText += " - No moves available, turn skipped!";
  } else {
    // Change turn only if dice is not 6
    if(diceValue !== 6) {
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

// Initialize game
createBoard();
renderTokens();
diceResult.innerText = `${PLAYERS[currentPlayerIndex].toUpperCase()} starts the game!`;
