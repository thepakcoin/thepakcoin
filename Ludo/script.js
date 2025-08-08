const board = document.getElementById("board");

for (let row = 0; row < 15; row++) {
  for (let col = 0; col < 15; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // 6x6 Top-Left: RED base
    if (row < 6 && col < 6) {
      cell.classList.add("red-base");
    }

    // 6x6 Top-Right: GREEN base
    else if (row < 6 && col > 8) {
      cell.classList.add("green-base");
    }

    // 6x6 Bottom-Left: YELLOW base
    else if (row > 8 && col < 6) {
      cell.classList.add("yellow-base");
    }

    // 6x6 Bottom-Right: BLUE base
    else if (row > 8 && col > 8) {
      cell.classList.add("blue-base");
    }

    board.appendChild(cell);
  }
}
