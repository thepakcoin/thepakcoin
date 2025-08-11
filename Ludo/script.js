const board = document.getElementById('board');

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

// 👇 YAHAN DICE KA CODE SHURU HOTA HAI
const dice = document.getElementById('dice');

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.textContent = randomNumber;
}

dice.addEventListener('click', rollDice);
