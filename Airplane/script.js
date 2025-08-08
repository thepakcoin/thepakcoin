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
