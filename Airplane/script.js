window.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("player");
  const board = document.getElementById("gameBoard");

  // ✅ Create 225 cells
  for (let i = 0; i < 225; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
    cells.push(cell);
  }

  // 🔹 Blue Home = 2×2 square in top-right corner
  // Top row indexes: 0-14, next row: 15-29
  cells[13].classList.add("blue-home");
  cells[14].classList.add("blue-home");
  cells[28].classList.add("blue-home");
  cells[29].classList.add("blue-home");

  // Player movement code (optional)
  let playerPos = 0

  

  document.addEventListener("keydown", movePlayer);

  function movePlayer(e) {
    const boardRect = board.getBoundingClientRect();
    const playerWidth = player.offsetWidth;

    if (e.key === "ArrowLeft") {
      playerPos -= 20;
    }
    if (e.key === "ArrowRight") {
      playerPos += 20;
    }

    if (playerPos < 0) playerPos = 0;
    if (playerPos > boardRect.width - playerWidth) {
      playerPos = boardRect.width - playerWidth;
    }

    player.style.left = `${playerPos}px`;
  }
});
