const board = document.getElementById('board');

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
let isAnimating = false;
let currentDiceRoll = 0;

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

function updateTokenPosition(token, newCoords) {
  const boardWidth = board.getBoundingClientRect().width;
  const cellSize = boardWidth / 15;
  token.style.left = `${newCoords.col * cellSize + (cellSize - token.offsetWidth) / 2}px`;
  token.style.top = `${newCoords.row * cellSize + (cellSize - token.offsetHeight) / 2}px`;
}

function moveToken(player, tokenIndex, steps, callback) {
  let mainPath = paths[player];
  let homePath = homePaths[player];
  let currentPos = positions[player][tokenIndex];
  let tokenId = `${player}-token-${tokenIndex + 1}`;
  let token = document.getElementById(tokenId);

  const mainPathLength = mainPath.length;

  if (currentPos === -1 && steps === 6) {
    positions[player][tokenIndex] = 0;
    let newCoords = mainPath[0];
    updateTokenPosition(token, newCoords);
    if (callback) callback();
    return;
  }

  let targetPos = currentPos + steps;
  let step = currentPos;

  const interval = setInterval(() => {
    if (step < targetPos) {
      step++;
      positions[player][tokenIndex] = step;
      let newCoords;

      if (step < mainPathLength) {
        newCoords = mainPath[step];
      } else if (step >= mainPathLength && step < mainPathLength + homePath.length) {
        let homePathIndex = step - mainPathLength;
        newCoords = homePath[homePathIndex];
      } else {
        clearInterval(interval);
        positions[player][tokenIndex] = 999;
        token.style.display = 'none';
        if (callback) callback();
        return;
      }
      updateTokenPosition(token, newCoords);
    } else {
      clearInterval(interval);
      positions[player][tokenIndex] = targetPos;
      if (targetPos >= mainPathLength + homePath.length) {
        positions[player][tokenIndex] = 999;
        token.style.display = 'none';
      }
      if (callback) callback();
    }
  }, 300);
}

function nextPlayer() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  currentPlayer = players[currentPlayerIndex];
}

function removeTokenClickListeners() {
  const allTokens = document.querySelectorAll('.token');
  allTokens.forEach(token => {
    token.classList.remove('highlight-token');
    const old_element = document.getElementById(token.id);
    if (old_element) {
        const new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
    }
  });
}

window.addEventListener('load', function () {
  const boardWidth = board.getBoundingClientRect().width;
  const totalCells = 15;
  const cellSize = boardWidth / totalCells;

  const tokens = {
    'red-token-1': { row: 1.5, col: 1.5 },
    'red-token-2': { row: 1.5, col: 3.5 },
    'red-token-3': { row: 3.5, col: 1.5 },
    'red-token-4': { row: 3.5, col: 3.5 },

    'green-token-1': { row: 1.5, col: 10.5 },
    'green-token-2': { row: 1.5, col: 12.5 },
    'green-token-3': { row: 3.5, col: 10.5 },
    'green-token-4': { row: 3.5, col: 12.5 },

    'yellow-token-1': { row: 10.5, col: 1.5 },
    'yellow-token-2': { row: 10.5, col: 3.5 },
    'yellow-token-3': { row: 12.5, col: 1.5 },
    'yellow-token-4': { row: 12.5, col: 3.5 },

    'blue-token-1': { row: 10.5, col: 10.5 },
    'blue-token-2': { row: 10.5, col: 12.5 },
    'blue-token-3': { row: 12.5, col: 10.5 },
    'blue-token-4': { row: 12.5, col: 12.5 }
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
  if (isAnimating) {
    return;
  }

  currentDiceRoll = Math.floor(Math.random() * 6) + 1;
  dice.textContent = currentDiceRoll;

  const currentPositions = positions[currentPlayer];
  const tokensOnBoard = currentPositions.filter(pos => pos !== -1 && pos !== 999);
  const tokensAtHome = currentPositions.filter(pos => pos === -1);
  const tokenOnBoardIndex = currentPositions.findIndex(pos => pos !== -1 && pos !== 999);

  if (currentDiceRoll === 6) {
    if (tokensAtHome.length > 0) {
      const homeTokens = document.querySelectorAll(`.token.${currentPlayer}`);
      homeTokens.forEach(token => {
        const tokenIndex = parseInt(token.dataset.index);
        if (positions[currentPlayer][tokenIndex] === -1) {
          token.classList.add('highlight-token');
          const moveOnSix = (event) => {
            isAnimating = true;
            moveToken(currentPlayer, tokenIndex, currentDiceRoll, () => {
              isAnimating = false;
              removeTokenClickListeners();
            });
            event.target.removeEventListener('click', moveOnSix);
          };
          token.addEventListener('click', moveOnSix);
        }
      });
    } else if (tokensOnBoard.length > 0) {
      isAnimating = true;
      moveToken(currentPlayer, tokenOnBoardIndex, currentDiceRoll, () => {
        isAnimating = false;
      });
    } else {
      isAnimating = false;
    }
  } else {
    if (tokensOnBoard.length > 0) {
      isAnimating = true;
      moveToken(currentPlayer, tokenOnBoardIndex, currentDiceRoll, () => {
        nextPlayer();
        isAnimating = false;
      });
    } else {
      nextPlayer();
      isAnimating = false;
    }
  }
});
