window.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("player");
  const board = document.getElementById("gameBoard");
  const cells = [];

  // ✅ Create 289 cells (17x17)
  for (let i = 0; i < 289; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
    cells.push(cell);
  }

  // 🎨 Random colors list
  const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "cyan"];
  
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // 🏠 Function to color a home area
  function colorHome(rowStart, colStart, size) {
    const homeColor = getRandomColor();
    for (let r = rowStart; r < rowStart + size; r++) {
      for (let c = colStart; c < colStart + size; c++) {
        let index = r * 17 + c;
        cells[index].style.backgroundColor = homeColor;
      }
    }
  }

  // 🏠 Color 4 homes (6x6 each)
  colorHome(0, 0, 6);      // Top-left
  colorHome(0, 11, 6);     // Top-right
  colorHome(11, 0, 6);     // Bottom-left
  colorHome(11, 11, 6);    // Bottom-right

  // 🎮 Player movement
  let playerPos = 0;
  document.addEventListener("keydown", movePlayer);

  function movePlayer(e) {
    const boardRect = board.getBoundingClientRect();
    const playerWidth = player.offsetWidth;

    if (e.key === "ArrowLeft") playerPos -= 20;
    if (e.key === "ArrowRight") playerPos += 20;

    if (playerPos < 0) playerPos = 0;
    if (playerPos > boardRect.width - playerWidth) {
      playerPos = boardRect.width - playerWidth;
    }

    player.style.left = `${playerPos}px`;
  }
});
