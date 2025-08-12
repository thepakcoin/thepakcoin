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
    { row: 8, col: 3 }, { row: 8, col: 2 }, { row: 8, col: 1 }, { row: 8, col: 0 }, { row: 7, col: 0 },
    { row: 6, col: 0 }, { row: 6, col: 1 } // back to start (loop)
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
    { row: 6, col: 4 }, { row: 6, col: 5 }, { row: 6, col: 6 }, { row: 5, col: 6 }, { row: 4, col: 6 },
    { row: 3, col: 6 }, { row: 2, col: 6 }, { row: 1, col: 6 }, { row: 0, col: 6 }, { row: 0, col: 7 },
    { row: 0, col: 8 }, { row: 1, col: 8 }
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
    { row: 4, col: 8 }, { row: 5, col: 8 }, { row: 6, col: 8 }, { row: 6, col: 9 }, { row: 6, col: 10 },
    { row: 6, col: 11 }, { row: 6, col: 12 }, { row: 6, col: 13 }
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
    { row: 7, col: 14 }, { row: 8, col: 14 }, { row: 8, col: 13 }, { row: 8, col: 12 }, { row: 8, col: 11 },
    { row: 8, col: 10 }, { row: 8, col: 9 }, { row: 8, col: 8 }
  ]
  };

    let positions = {
  red: [0, 0, 0, 0],
  green: [0, 0, 0, 0],
  yellow: [0, 0, 0, 0],
  blue: [0, 0, 0, 0]
};

let players = ['red', 'green', 'yellow', 'blue'];
let currentPlayerIndex = 0;
let currentPlayer = players[currentPlayerIndex];


    // Define entry points for each player
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

    // Color home quadrants
    if (row < 6 && col < 6) cell.classList.add('red');
    else if (row < 6 && col > 8) cell.classList.add('green');
    else if (row > 8 && col < 6) cell.classList.add('yellow');
    else if (row > 8 && col > 8) cell.classList.add('blue');

    // Center star
    if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
      cell.classList.add('star');
      if (row === 7 && col === 7) {
        cell.textContent = '★';
      }
    }

           
     // Mark entry points
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

function moveToken(player, tokenIndex, steps) {
  let path = paths[player];
  let currentPos = positions[player][tokenIndex];
  let tokenId = `${player}-token-${tokenIndex + 1}`;
  let token = document.getElementById(tokenId);

  const boardWidth = board.getBoundingClientRect().width;
  const cellSize = boardWidth / 15;

  // Move to entry point
  if (currentPos === 0 && steps === 6) {
    positions[player][tokenIndex] = 0;
    let { row, col } = path[0];

    token.style.left = `${col * cellSize + (cellSize - token.offsetWidth) / 2}px`;
    token.style.top = `${row * cellSize + (cellSize - token.offsetHeight) / 2}px`;

    setTimeout(() => {
      let targetPos = 0 + (steps - 1);
      if (targetPos >= path.length) targetPos = path.length - 1;

      let step = 0;
      const interval = setInterval(() => {
        if (step < targetPos) {
          step++;
          positions[player][tokenIndex] = step;
          let { row, col } = path[step];
          token.style.left = `${col * cellSize + (cellSize - token.offsetWidth) / 2}px`;
          token.style.top = `${row * cellSize + (cellSize - token.offsetHeight) / 2}px`;
        } else {
          clearInterval(interval);
        }
      }, 300);
    }, 2000);
  }

  // Already out or rolled 6 again
  else if (currentPos !== 0 || steps === 6) {
    let targetPos = currentPos + steps;
    if (targetPos >= path.length) targetPos = path.length - 1;

    let step = currentPos;
    const interval = setInterval(() => {
      if (step < targetPos) {
        step++;
        positions[player][tokenIndex] = step;
        let { row, col } = path[step];
        token.style.left = `${col * cellSize + (cellSize - token.offsetWidth) / 2}px`;
        token.style.top = `${row * cellSize + (cellSize - token.offsetHeight) / 2}px`;
      } else {
        clearInterval(interval);
      }
    }, 300);
  } else {
    console.log(`${player} token ${tokenIndex + 1} can't move without a 6`);
  }
}



window.addEventListener('load', function () {
  const boardWidth = board.getBoundingClientRect().width;
  const totalCells = 15;
  const cellSize = boardWidth / totalCells;

  const tokens = {
  // 🔴 Red Tokens (All on center of red base)
  'red-token-1': { row: 2.5, col: 2.5 },
  'red-token-2': { row: 2.5, col: 2.5 },
  'red-token-3': { row: 2.5, col: 2.5 },
  'red-token-4': { row: 2.5, col: 2.5 },

  // 🟢 Green Tokens (All on center of green base)
  'green-token-1': { row: 2.5, col: 11.5 },
  'green-token-2': { row: 2.5, col: 11.5 },
  'green-token-3': { row: 2.5, col: 11.5 },
  'green-token-4': { row: 2.5, col: 11.5 },

  // 🟡 Yellow Tokens (All on center of yellow base)
  'yellow-token-1': { row: 11.5, col: 2.5 },
  'yellow-token-2': { row: 11.5, col: 2.5 },
  'yellow-token-3': { row: 11.5, col: 2.5 },
  'yellow-token-4': { row: 11.5, col: 2.5 },

  // 🔵 Blue Tokens (All on center of blue base)
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


dice.addEventListener('click', () => {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  dice.textContent = diceRoll;

  // For demo, hum hamesha token 1 move karenge
  moveToken(currentPlayer, 0, diceRoll);

  if (diceRoll !== 6) {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    currentPlayer = players[currentPlayerIndex];
  }
});
