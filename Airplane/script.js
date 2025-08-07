window.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("player");
  const board = document.getElementById("gameBoard");
  const cells = []; // <-- yeh start me hona chahiye
  
  // ✅ Create 225 cells
  for (let i = 0; i < 225; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
    cells.push(cell);
  }

// 🔹 Corners ke index
const positions = {
  "top-left": [0, 1, 15, 16],
  "top-right": [13, 14, 28, 29],
  "bottom-left": [195, 196, 210, 211],
  "bottom-right": [208, 209, 223, 224]
};

// 🔹 Players list
const players = ["red", "blue", "green", "yellow"];

// 🔹 Random shuffle
const shuffledPositions = Object.keys(positions)
  .sort(() => Math.random() - 0.5);

// 🔹 Assign each player to a random corner
players.forEach((player, index) => {
  const posName = shuffledPositions[index];
  positions[posName].forEach(i => {
    cells[i].classList.add(player + "-home");
  });
});
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
