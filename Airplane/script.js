const player = document.getElementById("player");
let playerPos = window.innerWidth / 2;

document.addEventListener("keydown", movePlayer);

function movePlayer(e) {
  if (e.key === "ArrowLeft") {
    playerPos -= 20;
  }
  if (e.key === "ArrowRight") {
    playerPos += 20;
  }

  // Board ke andar limit
  if (playerPos < 0) playerPos = 0;
  if (playerPos > window.innerWidth - 40) playerPos = window.innerWidth - 40;

  player.style.left = `${playerPos}px`;
}
