window.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("player");
  const board = document.getElementById("gameBoard");
  const cells = []; // <-- yeh start me hona chahiye
  
  // ✅ Create 225 cells
  for (let i = 0; i < 289; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
    cells.push(cell);
    
  }

  // Fixed 4 colors
  const colors = ["red", "green", "blue", "yellow"];

  // shuffle helper
  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  // colorHome function (works inside DOMContentLoaded so 'cells' is available)
  function colorHome(rowStart, colStart, size, color) {
    for (let r = rowStart; r < rowStart + size; r++) {
      for (let c = colStart; c < colStart + size; c++) {
        const index = r * GRID + c;
        // safety check
        if (cells[index]) cells[index].style.backgroundColor = color;
      }
    }
  }

  // Assign 4 unique colors (shuffled)
  const homeColors = shuffle([...colors]);
  colorHome(0, 0, HOME_SIZE, homeColors[0]);                    // top-left
  colorHome(0, GRID - HOME_SIZE, HOME_SIZE, homeColors[1]);    // top-right (GRID-6 = 11)
  colorHome(GRID - HOME_SIZE, 0, HOME_SIZE, homeColors[2]);    // bottom-left
  colorHome(GRID - HOME_SIZE, GRID - HOME_SIZE, HOME_SIZE, homeColors[3]); // bottom-right

  // Player movement (left / right)
  let playerPos = 0;
  document.addEventListener("keydown", movePlayer);

  function movePlayer(e) {
    const boardRect = board.getBoundingClientRect();
    const playerWidth = player ? player.offsetWidth : 40; // fallback

    if (e.key === "ArrowLeft") playerPos -= 20;
    if (e.key === "ArrowRight") playerPos += 20;

    if (playerPos < 0) playerPos = 0;
    if (playerPos > boardRect.width - playerWidth) {
      playerPos = boardRect.width - playerWidth;
    }

    if (player) player.style.left = `${playerPos}px`;
  }
});
