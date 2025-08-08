const board = document.getElementById("board");

for (let row = 0; row < 15; row++) {
  for (let col = 0; col < 15; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // RED base (top-left)
    if (row < 6 && col < 6) {
      cell.classList.add("red-base");

      // Add token-spots at specific positions
      if ((row === 1 && col === 1) || (row === 3 && col === 3)) {
        const token = document.createElement("div");
        token.classList.add("token-spot");
        cell.appendChild(token);
      }
    }

    // GREEN base (top-right)
    else if (row < 6 && col > 8) {
      cell.classList.add("green-base");

      if ((row === 1 && col === 13) || (row === 3 && col === 11)) {
        const token = document.createElement("div");
        token.classList.add("token-spot");
        cell.appendChild(token);
      }
    }

    // YELLOW base (bottom-left)
    else if (row > 8 && col < 6) {
      cell.classList.add("yellow-base");

      if ((row === 11 && col === 1) || (row === 13 && col === 3)) {
        const token = document.createElement("div");
        token.classList.add("token-spot");
        cell.appendChild(token);
      }
    }

    // BLUE base (bottom-right)
    else if (row > 8 && col > 8) {
      cell.classList.add("blue-base");

      if ((row === 11 && col === 13) || (row === 13 && col === 11)) {
        const token = document.createElement("div");
        token.classList.add("token-spot");
        cell.appendChild(token);
      }
    }

    board.appendChild(cell);
  }
}
