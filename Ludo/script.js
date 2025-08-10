const CELLS = 15;
const board = document.getElementById('board');

// Define movement paths for each player (rough shape, adjust as per your board)
const paths = {
  red: [
    {r:6,c:1}, {r:6,c:2}, {r:6,c:3}, {r:6,c:4}, {r:6,c:5}, {r:5,c:5}, {r:4,c:5}, {r:3,c:5}, {r:2,c:5}, {r:1,c:5},
    {r:1,c:6}, {r:1,c:7}, {r:1,c:8}, {r:2,c:8}, {r:3,c:8}, {r:4,c:8}, {r:5,c:8}, {r:6,c:8},
    {r:7,c:8}, {r:8,c:8}, {r:8,c:9}, {r:8,c:10}, {r:8,c:11}, {r:8,c:12}, {r:8,c:13}, {r:9,c:13}, {r:10,c:13}, {r:11,c:13},
    {r:12,c:13}, {r:13,c:13}, {r:13,c:12}, {r:13,c:11}, {r:13,c:10}, {r:13,c:9}, {r:13,c:8}, {r:12,c:8}, {r:11,c:8},
    {r:10,c:8}, {r:9,c:8}, {r:8,c:7}, {r:8,c:6}, {r:8,c:5}, {r:8,c:4}, {r:8,c:3}, {r:8,c:2}, {r:8,c:1}, {r:7,c:1},
    {r:6,c:1} // loop completes
  ],
  yellow: [
    {r:1,c:8}, {r:2,c:8}, {r:3,c:8}, {r:4,c:8}, {r:5,c:8}, {r:5,c:9}, {r:5,c:10}, {r:5,c:11}, {r:5,c:12}, {r:5,c:13},
    {r:6,c:13}, {r:7,c:13}, {r:8,c:13}, {r:8,c:12}, {r:8,c:11}, {r:8,c:10}, {r:8,c:9}, {r:8,c:8},
    {r:9,c:8}, {r:10,c:8}, {r:11,c:8}, {r:12,c:8}, {r:13,c:8}, {r:13,c:7}, {r:13,c:6}, {r:12,c:6}, {r:11,c:6},
    {r:10,c:6}, {r:9,c:6}, {r:8,c:6}, {r:7,c:6}, {r:6,c:6}, {r:6,c:5}, {r:6,c:4}, {r:6,c:3}, {r:6,c:2}, {r:6,c:1},
    {r:5,c:1}, {r:5,c:2}, {r:5,c:3}, {r:5,c:4}, {r:5,c:5}, {r:5,c:6}, {r:5,c:7}, {r:5,c:8}, {r:4,c:8}, {r:3,c:8},
    {r:2,c:8}, {r:1,c:8} // loop complete
  ],
  green: [
    {r:8,c:13}, {r:8,c:12}, {r:8,c:11}, {r:8,c:10}, {r:8,c:9}, {r:9,c:9}, {r:10,c:9}, {r:11,c:9}, {r:12,c:9}, {r:13,c:9},
    {r:13,c:8}, {r:13,c:7}, {r:13,c:6}, {r:12,c:6}, {r:11,c:6}, {r:10,c:6}, {r:9,c:6}, {r:8,c:6},
    {r:7,c:6}, {r:6,c:6}, {r:6,c:5}, {r:6,c:4}, {r:6,c:3}, {r:6,c:2}, {r:6,c:1}, {r:7,c:1}, {r:8,c:1},
    {r:8,c:2}, {r:8,c:3}, {r:8,c:4}, {r:8,c:5}, {r:8,c:6}, {r:9,c:6}, {r:10,c:6}, {r:11,c:6}, {r:12,c:6},
    {r:13,c:6}, {r:13,c:7}, {r:13,c:8}, {r:12,c:8}, {r:11,c:8}, {r:10,c:8}, {r:9,c:8}, {r:8,c:8}, {r:7,c:8},
    {r:6,c:8}, {r:6,c:9}, {r:6,c:10}, {r:6,c:11}, {r:6,c:12}, {r:6,c:13}, {r:6,c:14} // loop complete
  ],
  blue: [
    {r:13,c:6}, {r:12,c:6}, {r:11,c:6}, {r:10,c:6}, {r:9,c:6}, {r:8,c:6}, {r:7,c:6}, {r:6,c:6}, {r:6,c:7}, {r:6,c:8},
    {r:6,c:9}, {r:6,c:10}, {r:6,c:11}, {r:6,c:12}, {r:6,c:13}, {r:6,c:14}, {r:7,c:14}, {r:8,c:14}, {r:9,c:14}, {r:10,c:14},
    {r:11,c:14}, {r:12,c:14}, {r:13,c:14}, {r:13,c:13}, {r:13,c:12}, {r:13,c:11}, {r:13,c:10}, {r:13,c:9}, {r:13,c:8},
    {r:12,c:8}, {r:11,c:8}, {r:10,c:8}, {r:9,c:8}, {r:8,c:8}, {r:7,c:8}, {r:6,c:8}, {r:6,c:7}, {r:6,c:6}, {r:5,c:6},
    {r:4,c:6}, {r:3,c:6}, {r:2,c:6}, {r:1,c:6}, {r:0,c:6}, {r:0,c:5}, {r:1,c:5}, {r:2,c:5}, {r:3,c:5}, {r:4,c:5},
    {r:5,c:5}, {r:6,c:5}, {r:7,c:5}, {r:8,c:5} // loop complete
  ],
};

function inCorner(r, c, corner, size = 6) {
  if (corner === 'tl') return r < size && c < size;
  if (corner === 'tr') return r < size && c >= CELLS - size;
  if (corner === 'br') return r >= CELLS - size && c >= CELLS - size;
  if (corner === 'bl') return r >= CELLS - size && c < size;
  return false;
}

function inCenter(r, c) {
  const start = Math.floor((CELLS - 3) / 2);
  return r >= start && r < start + 3 && c >= start && c < start + 3;
}

function isTokenSpot(r, c, corner) {
  if (corner === 'tl') return ( (r===1 && c===1) || (r===1 && c===4) || (r===4 && c===1) || (r===4 && c===4) );
  if (corner === 'tr') return ( (r===1 && c===CELLS-2) || (r===1 && c===CELLS-5) || (r===4 && c===CELLS-2) || (r===4 && c===CELLS-5) );
  if (corner === 'br') return ( (r===CELLS-2 && c===CELLS-2) || (r===CELLS-2 && c===CELLS-5) || (r===CELLS-5 && c===CELLS-2) || (r===CELLS-5 && c===CELLS-5) );
  if (corner === 'bl') return ( (r===CELLS-2 && c===1) || (r===CELLS-2 && c===4) || (r===CELLS-5 && c===1) || (r===CELLS-5 && c===4) );
  return false;
}

function isEntryPoint(r, c) {
  if (r === 6 && c === 1) return 'red';        // Red entry point
  if (r === 1 && c === 8) return 'yellow';    // Yellow entry point
  if (r === 8 && c === 13) return 'green';    // Green entry point
  if (r === 13 && c === 6) return 'blue';     // Blue entry point
  return false;
}

function createToken(color) {
  const token = document.createElement('img');
  token.src = 'blockchain_8404561.png'; // aap apna image yahan set kar sakte hain
  token.alt = color + ' token';
  token.classList.add('token-img');
  return token;
}

// Create board cells and add colors and tokens
for (let r = 0; r < CELLS; r++) {
  for (let c = 0; c < CELLS; c++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    if (inCorner(r, c, 'tl')) cell.classList.add('c-red');
    else if (inCorner(r, c, 'tr')) cell.classList.add('c-yellow');
    else if (inCorner(r, c, 'br')) cell.classList.add('c-green');
    else if (inCorner(r, c, 'bl')) cell.classList.add('c-blue');
    else if (inCenter(r, c)) cell.classList.add('center');

    if (isTokenSpot(r, c, 'tl') || isTokenSpot(r, c, 'tr') || isTokenSpot(r, c, 'br') || isTokenSpot(r, c, 'bl')) {
      const spot = document.createElement('div');
      spot.classList.add('token-spot');

      if (inCorner(r, c, 'tl') || inCorner(r, c, 'tr') || inCorner(r, c, 'bl') || inCorner(r, c, 'br')) {
        cell.classList.add('home-base');
      }
      if (isTokenSpot(r, c, 'tl')) {
        const token = createToken('red');
        spot.appendChild(token);
      } else if (isTokenSpot(r, c, 'tr')) {
        const token = createToken('yellow');
        spot.appendChild(token);
      } else if (isTokenSpot(r, c, 'br')) {
        const token = createToken('green');
        spot.appendChild(token);
      } else if (isTokenSpot(r, c, 'bl')) {
        const token = createToken('blue');
        spot.appendChild(token);
      }

      cell.appendChild(spot);
    }

    const entryColor = isEntryPoint(r, c);
    if (entryColor) {
      cell.classList.add('entry-' + entryColor);
    }
    board.appendChild(cell);
  }
}

const dice = document.getElementById('dice');

const dotsConfig = {
  1: ['center'],
  2: ['tl', 'br'],
  3: ['tl', 'center', 'br'],
  4: ['tl', 'tr', 'bl', 'br'],
  5: ['tl', 'tr', 'center', 'bl', 'br'],
  6: ['tl', 'tr', 'ml', 'mr', 'bl', 'br']
};

function clearDots() {
  while(dice.firstChild) {
    dice.removeChild(dice.firstChild);
  }
}

function showDiceNumber(num) {
  clearDots();
  const positions = dotsConfig[num];
  positions.forEach(pos => {
    const dot = document.createElement('div');
    dot.classList.add('dot', pos);
    dice.appendChild(dot);
  });
}

// Player tokens position: -1 means home (board par nahi)
let playerTokens = {
  red: -1,
  yellow: -1,
  green: -1,
  blue: -1
};

let currentPlayer = 'red';

function tryEnterToken(player, diceNumber) {
  if(diceNumber === 6 && playerTokens[player] === -1) {
    playerTokens[player] = 0;  // token enters the board at position 0 of path
    const entry = paths[player][0];
    const cells = board.children;
    const index = entry.r * CELLS + entry.c;
    const cell = cells[index];

    // Clear home tokens of that player first (remove old token spots from home)
    // For simplicity, here just removing from entry point if any
    const oldSpots = cell.querySelectorAll('.token-spot');
    oldSpots.forEach(spot => cell.removeChild(spot));

    const spot = document.createElement('div');
    spot.classList.add('token-spot');
    const token = createToken(player);
    spot.appendChild(token);
    cell.appendChild(spot);

    console.log(player + " token entered on board");
    return true;
  }
  return false;
}

function updateTokenPositionOnBoard(player, oldPos, newPos) {
  const cells = board.children;

  // Remove token from old cell
  if(oldPos >= 0) {
    const oldCellCoords = paths[player][oldPos];
    const oldIndex = oldCellCoords.r * CELLS + oldCellCoords.c;
    const oldCell = cells[oldIndex];
    const oldSpot = oldCell.querySelector('.token-spot');
    if(oldSpot) oldCell.removeChild(oldSpot);
  }

  // Add token to new cell
  if(newPos >= 0) {
    const newCellCoords = paths[player][newPos];
    const newIndex = newCellCoords.r * CELLS + newCellCoords.c;
    const newCell = cells[newIndex];
    const spot = document.createElement('div');
    spot.classList.add('token-spot');
    const token = createToken(player);
    spot.appendChild(token);
    newCell.appendChild(spot);
  }
}

function moveToken(player, steps) {
  if(playerTokens[player] === -1) {
    console.log(player + " token is still at home");
    return false;
  }
  const path = paths[player];
  let currentPos = playerTokens[player];
  let newPos = currentPos + steps;

  if(newPos >= path.length) {
    console.log(player + " cannot move beyond path end");
    return false;
  }

  updateTokenPositionOnBoard(player, currentPos, newPos);
  playerTokens[player] = newPos;
  return true;
}

function rollDice() {
  const number = Math.floor(Math.random() * 6) + 1;
  showDiceNumber(number);
  console.log("Dice rolled: ", number);

  if(tryEnterToken(currentPlayer, number)) {
    console.log(currentPlayer + " gets another turn");
  } else {
    const moved = moveToken(currentPlayer, number);
    if(!moved) {
      console.log(currentPlayer + " can't move token");
    }

    // Switch turn
    if(currentPlayer === 'red') currentPlayer = 'yellow';
    else if(currentPlayer === 'yellow') currentPlayer = 'green';
    else if(currentPlayer === 'green') currentPlayer = 'blue';
    else currentPlayer = 'red';

    console.log("Turn changed to: ", currentPlayer);
  }
}

showDiceNumber(1);
dice.addEventListener('click', rollDice);
dice.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    rollDice();
  }
});
