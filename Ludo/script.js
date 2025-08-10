const CELLS = 15;
const board = document.getElementById('board');

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
  token.src = 'blockchain_8404561.png';
  token.alt = color + ' token';
  token.classList.add('token-img');
  return token;
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

    if (isTokenSpot(r, c, 'tl') || isTokenSpot(r, c, 'tr') || isTokenSpot(r, c, 'br') || isTokenSpot(r, c, 'bl')) {
      const spot = document.createElement('div');
      spot.classList.add('token-spot');

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
