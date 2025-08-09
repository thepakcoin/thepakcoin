const CELLS = 15;
const board = document.getElementById('board');
const tokenColors = ['#d64545', '#f1c40f', '#2ecc71', '#3498db']; 
const playersTokens = ['player1', 'player2', 'player3', 'player4'];
let tokenIndex = 0; 

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

for (let r = 0; r < CELLS; r++) {
  for (let c = 0; c < CELLS; c++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    if (inCorner(r, c, 'tl')) cell.classList.add('c-red');
    else if (inCorner(r, c, 'tr')) cell.classList.add('c-yellow');
    else if (inCorner(r, c, 'br')) cell.classList.add('c-green');
    else if (inCorner(r, c, 'bl')) cell.classList.add('c-blue');
    else if (inCenter(r, c)) cell.classList.add('center');

    // Token spots insert
    if (isTokenSpot(r, c, 'tl') || isTokenSpot(r, c, 'tr') || isTokenSpot(r, c, 'br') || isTokenSpot(r, c, 'bl')) {
      const spot = document.createElement('div');
      spot.classList.add('token-spot');
      
      // Set token image and color dynamically
      spot.style.backgroundImage = 'url("blockchain_8404561.png")'; // Token image
      spot.style.backgroundColor = tokenColors[tokenIndex]; // Set color for current player's token
      spot.setAttribute('data-player', playersTokens[tokenIndex]); // Assign token to the player
         
      cell.appendChild(spot);

      // Rotate through players
      tokenIndex = (tokenIndex + 1) % 4; 
    }

    // Add the cell to the board
    board.appendChild(cell);
  }
}
