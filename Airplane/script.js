const board = document.getElementById("ludoBoard");

// Generate 15x15 board cells
for (let row = 0; row < 15; row++) {
  for (let col = 0; col < 15; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Example coloring logic (basic structure)
    if ((row < 6 && col < 6) || (row > 8 && col > 8) ||
        (row < 6 && col > 8) || (row > 8 && col < 6)) {
      cell.classList.add("base"); // base area
    } else if (row === 7 && col === 7) {
      cell.classList.add("home"); // center home
    } else {
      cell.classList.add("path"); // path cells
    }

    board.appendChild(cell);
  }
}

document.getElementById("menuBtn").addEventListener("click", () => {
  alert("Menu button clicked - future features here!");
});


const board = document.getElementById("ludoBoard");
const BOARD_SIZE = 15;

const players = ["red", "green", "yellow", "blue"];
const TOKENS_PER_PLAYER = 5;

const cells = [];
for (let row = 0; row < BOARD_SIZE; row++) {
  for (let col = 0; col < BOARD_SIZE; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Assign base areas for each player corners (6x6)
    if (row < 6 && col < 6) cell.classList.add("base", "red");
    else if (row < 6 && col > 8) cell.classList.add("base", "green");
    else if (row > 8 && col < 6) cell.classList.add("base", "yellow");
    else if (row > 8 && col > 8) cell.classList.add("base", "blue");
    else if (row === 7 && col === 7) cell.classList.add("home");
    else cell.classList.add("path");

    cell.id = `cell-${row}-${col}`;
    board.appendChild(cell);
    cells.push(cell);
  }
}

// Define simplified path for each player (array of cell ids) —
// For real Ludo, path is complex but here simplified straight path
const playerPaths = {
  red: [
    "cell-6-0", "cell-6-1", "cell-6-2", "cell-6-3", "cell-6-4", "cell-6-5",
    "cell-7-5", "cell-8-5", "cell-9-5", "cell-10-5", "cell-11-5", "cell-12-5",
    "cell-13-5", "cell-14-5"
  ],
  green: [
    "cell-0-8", "cell-1-8", "cell-2-8", "cell-3-8", "cell-4-8", "cell-5-8",
    "cell-5-7", "cell-5-6", "cell-5-5", "cell-5-4", "cell-5-3", "cell-5-2",
    "cell-5-1", "cell-5-0"
  ],
  yellow: [
    "cell-8-0", "cell-8-1", "cell-8-2", "cell-8-3", "cell-8-4", "cell-8-5",
    "cell-7-5", "cell-6-5", "cell-5-5", "cell-4-5", "cell-3-5", "cell-2-5",
    "cell-1-5", "cell-0-5"
  ],
  blue: [
    "cell-14-8", "cell-13-8", "cell-12-8", "cell-11-8", "cell-10-8", "cell-9-8",
    "cell-9-7", "cell-9-6", "cell-9-5", "cell-9-4", "cell-9-3", "cell-9-2",
    "cell-9-1", "cell-9-0"
  ],
};

// Player base cells (each player's corner 6x6 square cells)
const playerBases = {
  red: [],
  green: [],
  yellow: [],
  blue: []
};
for(let row=0; row<6; row++){
  for(let col=0; col<6; col++){
    playerBases.red.push(`cell-${row}-${col}`);
    playerBases.green.push(`cell-${row}-${14-col}`);
    playerBases.yellow.push(`cell-${14-row}-${col}`);
    playerBases.blue.push(`cell-${14-row}-${14-col}`);
  }
}

// Tokens data structure
const tokens = [];
players.forEach(player => {
  for(let i=0; i<TOKENS_PER_PLAYER; i++){
    const tokenElem = document.createElement("div");
    tokenElem.classList.add("token", player);
    tokenElem.id = `${player}-token-${i}`;
    tokenElem.innerText = i+1;
    tokens.push({
      player: player,
      element: tokenElem,
      positionIndex: -1, // -1 means token in base
      baseCellId: playerBases[player][i]
    });

    // Append tokens to their base cells initially
    document.getElementById(playerBases[player][i]).appendChild(tokenElem);
  }
});

// Turn and UI elements
let currentPlayerIndex = 0;
const rollDiceBtn = document.getElementById("rollDiceBtn");
const diceResult = document.getElementById("diceResult");
const currentPlayerLabel = document.getElementById("currentPlayer");

rollDiceBtn.addEventListener("click", () => {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceResult.textContent = `Dice: ${dice}`;

  const currentPlayer = players[currentPlayerIndex];
  currentPlayerLabel.textContent = `Current Player: ${capitalize(currentPlayer)}`;

  // Filter tokens for current player
  const playerTokens = tokens.filter(t => t.player === currentPlayer);

  // Simple logic: move first possible token (either out if dice=6 or move forward)
  let moved = false;
  for(let token of playerTokens){
    if(token.positionIndex === -1 && dice === 6){
      moveOutOfBase(token);
      moved = true;
      break;
    } else if(token.positionIndex >= 0){
      moveToken(token, dice);
      moved = true;
      break;
    }
  }

  if(!moved){
    alert(`${capitalize(currentPlayer)} player cannot move any token.`);
  }

  // Next player turn
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
});

function moveOutOfBase(token){
  // Remove token from base cell
  const baseCell = document.getElementById(token.baseCellId);
  if(baseCell.contains(token.element)){
    baseCell.removeChild(token.element);
  }
  // Append token to path start cell
  const startCell = document.getElementById(playerPaths[token.player][0]);
  startCell.appendChild(token.element);
  token.positionIndex = 0;
}

function moveToken(token, steps){
  const path = playerPaths[token.player];
  let newPos = token.positionIndex + steps;
  if(newPos >= path.length){
    newPos = path.length -1; // stop at last cell
  }

  // Remove token from old cell
  const oldCell = document.getElementById(path[token.positionIndex]);
  if(oldCell.contains(token.element)){
    oldCell.removeChild(token.element);
  }

  // Append token to new cell
  const newCell = document.getElementById(path[newPos]);
  newCell.appendChild(token.element);

  token.positionIndex = newPos;
}

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
    }
