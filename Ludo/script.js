const board = document.getElementById('board');

// Paths ko update kiya gaya hai taake woh sirf main path ko represent karein (51 cells)
const paths = {
  red: [
    { row: 6, col: 1 }, { row: 6, col: 2 }, { row: 6, col: 3 }, { row: 6, col: 4 }, { row: 6, col: 5 },
    { row: 6, col: 6 }, { row: 5, col: 6 }, { row: 4, col: 6 }, { row: 3, col: 6 }, { row: 2, col: 6 },
    { row: 1, col: 6 }, { row: 0, col: 6 }, { row: 0, col: 7 }, { row: 0, col: 8 }, { row: 1, col: 8 },
    { row: 2, col: 8 }, { row: 3, col: 8 }, { row: 4, col: 8 }, { row: 5, col: 8 }, { row: 6, col: 8 },
    { row: 6, col: 9 }, { row: 6, col: 10 }, { row: 6, col: 11 }, { row: 6, col: 12 }, { row: 6, col: 13 },
    { row: 6, col: 14 }, { row: 7, col: 14 }, { row: 8, col: 14 }, { row: 8, col: 13 }, { row: 8, col: 12 },
    { row: 8, col: 11 }, { row: 8, col: 10 }, { row: 8, col: 9 }, { row: 8, col: 8 }, { row: 9, col: 8 },
    { row: 10, col: 8 }, { row: 11, col: 8 }, { row: 12, col: 8 }, { row: 13, col: 8 }, { row: 14, col: 8 },
    { row: 14, col: 7 }, { row: 14, col: 6 }, { row: 13, col: 6 }, { row: 12, col: 6 }, { row: 11, col: 6 },
    { row: 10, col: 6 }, { row: 9, col: 6 }, { row: 8, col: 6 }, { row: 8, col: 5 }, { row: 8, col: 4 },
    { row: 8, col: 3 }, { row: 8, col: 2 }, { row: 8, col: 1 }, { row: 8, col: 0 }, { row: 7, col: 0 }
  ],
  green: [
    { row: 1, col: 8 }, { row: 2, col: 8 }, { row: 3, col: 8 }, { row: 4, col: 8 }, { row: 5, col: 8 },
    { row: 6, col: 8 }, { row: 6, col: 9 }, { row: 6, col: 10 }, { row: 6, col: 11 }, { row: 6, col: 12 },
    { row: 6, col: 13 }, { row: 6, col: 14 }, { row: 7, col: 14 }, { row: 8, col: 14 }, { row: 8, col: 13 },
    { row: 8, col: 12 }, { row: 8, col: 11 }, { row: 8, col: 10 }, { row: 8, col: 9 }, { row: 8, col: 8 },
    { row: 9, col: 8 }, { row: 10, col: 8 }, { row: 11, col: 8 }, { row: 12, col: 8 }, { row: 13, col: 8 },
    { row: 14, col: 8 }, { row: 14, col: 7 }, { row: 14, col: 6 }, { row: 13, col: 6 }, { row: 12, col: 6 },
    { row: 11, col: 6 }, { row: 10, col: 6 }, { row: 9, col: 6 }, { row: 8, col: 6 }, { row: 8, col: 5 },
    { row: 8, col: 4 }, { row: 8, col: 3 }, { row: 8, col: 2 }, { row: 8, col: 1 }, { row: 8, col: 0 },
    { row: 7, col: 0 }, { row: 6, col: 0 }, { row: 6, col: 1 }, { row: 6, col: 2 }, { row: 6, col: 3 },
    { row: 6, col: 4 }, { row: 6, col: 5 }, { row: 6, col: 6 }
  ],
  yellow: [
    { row: 8, col: 13 }, { row: 8, col: 12 }, { row: 8, col: 11 }, { row: 8, col: 10 }, { row: 8, col: 9 },
    { row: 8, col: 8 }, { row: 9, col: 8 }, { row: 10, col: 8 }, { row: 11, col: 8 }, { row: 12, col: 8 },
    { row: 13, col: 8 }, { row: 14, col: 8 }, { row: 14, col: 7 }, { row: 14, col: 6 }, { row: 13, col: 6 },
    { row: 12, col: 6 }, { row: 11, col: 6 }, { row: 10, col: 6 }, { row: 9, col: 6 }, { row: 8, col: 6 },
    { row: 8, col: 5 }, { row: 8, col: 4 }, { row: 8, col: 3 }, { row: 8, col: 2 }, { row: 8, col: 1 },
    { row: 8, col: 0 }, { row: 7, col: 0 }, { row: 6, col: 0 }, { row: 6, col: 1 }, { row: 6, col: 2 },
    { row: 6, col: 3 }, { row: 6, col: 4 }, { row: 6, col: 5 }, { row: 6, col: 6 }, { row: 5, col: 6 },
    { row: 4, col: 6 }, { row: 3, col: 6 }, { row: 2, col: 6 }, { row: 1, col: 6 }, { row: 0, col: 6 },
    { row: 0, col: 7 }, { row: 0, col: 8 }, { row: 1, col: 8 }, { row: 2, col: 8 }, { row: 3, col: 8 },
    { row: 4, col: 8 }, { row: 5, col: 8 }
  ],
  blue: [
    { row: 13, col: 6 }, { row: 12, col: 6 }, { row: 11, col: 6 }, { row: 10, col: 6 }, { row: 9, col: 6 },
    { row: 8, col: 6 }, { row: 8, col: 5 }, { row: 8, col: 4 }, { row: 8, col: 3 }, { row: 8, col: 2 },
    { row: 8, col: 1 }, { row: 8, col: 0 }, { row: 7, col: 0 }, { row: 6, col: 0 }, { row: 6, col: 1 },
    { row: 6, col: 2 }, { row: 6, col: 3 }, { row: 6, col: 4 }, { row: 6, col: 5 }, { row: 6, col: 6 },
    { row: 5, col: 6 }, { row: 4, col: 6 }, { row: 3, col: 6 }, { row: 2, col: 6 }, { row: 1, col: 6 },
    { row: 0, col: 6 }, { row: 0, col: 7 }, { row: 0, col: 8 }, { row: 1, col: 8 }, { row: 2, col: 8 },
    { row: 3, col: 8 }, { row: 4, col: 8 }, { row: 5, col: 8 }, { row: 6, col: 8 }, { row: 6, col: 9 },
    { row: 6, col: 10 }, { row: 6, col: 11 }, { row: 6, col: 12 }, { row: 6, col: 13 }, { row: 6, col: 14 },
    { row: 7, col: 14 }
  ]
};

// Home path alag se define kiya gaya hai
const homePaths = {
  red: [
    { row: 7, col: 1 }, { row: 7, col: 2 }, { row: 7, col: 3 }, { row: 7, col: 4 }, { row: 7, col: 5 }, { row: 7, col: 6 }
  ],
  green: [
    { row: 1, col: 7 }, { row: 2, col: 7 }, { row: 3, col: 7 }, { row: 4, col: 7 }, { row: 5, col: 7 }, { row: 6, col: 7 }
  ],
  yellow: [
    { row: 7, col: 13 }, { row: 7, col: 12 }, { row: 7, col: 11 }, { row: 7, col: 10 }, { row: 7, col: 9 }, { row: 7, col: 8 }
  ],
  blue: [
    { row: 13, col: 7 }, { row: 12, col: 7 }, { row: 11, col: 7 }, { row: 10, col: 7 }, { row: 9, col: 7 }, { row: 8, col: 7 }
  ]
};

let positions = {
  red: [-1, -1, -1, -1],
  green: [-1, -1, -1, -1],
  yellow: [-1, -1, -1, -1],
  blue: [-1, -1, -1, -1]
};

let players = ['red', 'green', 'yellow', 'blue'];
let currentPlayerIndex = 0;
let currentPlayer = players[currentPlayerIndex];

const entryPoints = [
  { row: 6, col: 1, color: 'red' },
  { row: 1, col: 8, color: 'green' },
  { row: 13, col: 6, color: 'yellow' },
  { row: 8, col: 13, color: 'blue' }
];

const extraSafeSpots = [
  { row: 8, col: 2 },
  { row: 2, col: 6 },
  { row: 6, col: 12 },
  { row: 12, col: 8 },
];

for (let row = 0; row < 15; row++) {
  for (let col = 0; col < 15; col++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    if (row < 6 && col < 6) cell.classList.add('red');
    else if (row < 6 && col > 8) cell.classList.add('green');
    else if (row > 8 && col < 6) cell.classList.add('yellow');
    else if (row > 8 && col > 8) cell.classList.add('blue');

    if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
      cell.classList.add('star');
      if (row === 7 && col === 7) {
        cell.textContent = '★';
      }
    }

    const isEntry = entryPoints.some(
      (ep) => ep.row === row && ep.col === col
    );
    if (isEntry) {
      const epColor = entryPoints.find(
        (ep) => ep.row === row && ep.col === col
      ).color;
      cell.classList.add('entry-point', epColor);
      cell.classList.add('safe-spot');
    }

    const isExtraSafe = extraSafeSpots.some(
      (spot) => spot.row === row && spot.col === col
    );
    if (isExtraSafe) {
      cell.classList.add('safe-spot');
    }

    board.appendChild(cell);
  }
}

// Ye function token ko uski nayi position par move karta hai
function updateTokenPosition(token, newCoords) {
  const boardWidth = board.getBoundingClientRect().width;
  const cellSize = boardWidth / 15;
  token.style.left = `${newCoords.col * cellSize + (cellSize - token.offsetWidth) / 2}px`;
  token.style.top = `${newCoords.row * cellSize + (cellSize - token.offsetHeight) / 2}px`;
}

// Naya moveToken function jo home entry ko handle karta hai
function moveToken(player, tokenIndex, steps) {
    let mainPath = paths[player];
    let homePath = homePaths[player];
    let currentPos = positions[player][tokenIndex];
    let tokenId = `${player}-token-${tokenIndex + 1}`;
    let token = document.getElementById(tokenId);

    const mainPathLength = mainPath.length;

    // Pehle check karein ke token ghar ke andar hai ya baahar
    if (currentPos === -1) {
        // Token ghar ke andar hai
        if (steps === 6) {
            positions[player][tokenIndex] = 0; // First position on main path
            let newCoords = mainPath[0];
            updateTokenPosition(token, newCoords);
            console.log(`${player} token ${tokenIndex + 1} ghar se baahar nikla`);
        } else {
            console.log(`${player} token ${tokenIndex + 1} sirf 6 par hi nikal sakta hai`);
        }
        return;
    }

    // Token pehle se hi board par hai
    let newPos = currentPos + steps;

    // Check for home entry
    if (newPos >= mainPathLength) {
        let remainingSteps = newPos - mainPathLength;

        if (remainingSteps < homePath.length) {
            // Token home path mein move kar raha hai
            let newCoords = homePath[remainingSteps];
            positions[player][tokenIndex] = mainPathLength + remainingSteps;
            updateTokenPosition(token, newCoords);
        } else if (remainingSteps === homePath.length) {
            // Token home pahunch gaya hai
            console.log(`${player} token ${tokenIndex + 1} has reached home!`);
            positions[player][tokenIndex] = 999; // A final position marker
            token.style.display = 'none';
        } else {
            // Overshot the home path
            console.log(`${player} token ${tokenIndex + 1} can't move. Overshot home.`);
        }
    } else {
        // Token main path par move kar raha hai
        let newCoords = mainPath[newPos];
        positions[player][tokenIndex] = newPos;
        updateTokenPosition(token, newCoords);
    }
}

window.addEventListener('load', function () {
  const boardWidth = board.getBoundingClientRect().width;
  const totalCells = 15;
  const cellSize = boardWidth / totalCells;

  const tokens = {
    'red-token-1': { row: 2.5, col: 2.5 },
    'red-token-2': { row: 2.5, col: 2.5 },
    'red-token-3': { row: 2.5, col: 2.5 },
    'red-token-4': { row: 2.5, col: 2.5 },

    'green-token-1': { row: 2.5, col: 11.5 },
    'green-token-2': { row: 2.5, col: 11.5 },
    'green-token-3': { row: 2.5, col: 11.5 },
    'green-token-4': { row: 2.5, col: 11.5 },

    'yellow-token-1': { row: 11.5, col: 2.5 },
    'yellow-token-2': { row: 11.5, col: 2.5 },
    'yellow-token-3': { row: 11.5, col: 2.5 },
    'yellow-token-4': { row: 11.5, col: 2.5 },

    'blue-token-1': { row: 11.5, col: 11.5 },
    'blue-token-2': { row: 11.5, col: 11.5 },
    'blue-token-3': { row: 11.5, col: 11.5 },
    'blue-token-4': { row: 11.5, col: 11.5 }
  };

  for (const id in tokens) {
    const token = document.getElementById(id);
    const pos = tokens[id];

    if (!token) {
      console.error(`Token not found: ${id}`);
      continue;
    }

    const left = pos.col * cellSize + (cellSize - token.offsetWidth) / 2;
    const top = pos.row * cellSize + (cellSize - token.offsetHeight) / 2;

    token.style.left = `${left}px`;
    token.style.top = `${top}px`;
  }
});

const dice = document.getElementById('dice');
dice.addEventListener('click', () => {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  dice.textContent = diceRoll;

  // Ab hum sirf pehle token ko move kar rahe hain for testing
  moveToken(currentPlayer, 0, diceRoll);

  if (diceRoll !== 6) {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    currentPlayer = players[currentPlayerIndex];
  }
});
