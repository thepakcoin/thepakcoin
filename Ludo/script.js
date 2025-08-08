let currentPlayer = 1;
let positions = {
  1: 0, // Player 1 (red)
  2: 0  // Player 2 (blue)
};

const rollBtn = document.getElementById("rollBtn");
const diceResult = document.getElementById("diceResult");
const turnDisplay = document.getElementById("turnDisplay");

rollBtn.addEventListener("click", () => {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceResult.innerText = `Dice: ${dice}`;

  moveToken(currentPlayer, dice);

  currentPlayer = currentPlayer === 1 ? 2 : 1;
  turnDisplay.innerText = `Turn: Player ${currentPlayer} (${currentPlayer === 1 ? "🔴" : "🔵"})`;
});

function moveToken(player, steps) {
  const token = document.getElementById(player === 1 ? "token1" : "token2");
  positions[player] += steps;
  if (positions[player] > 270) positions[player] = 270;

  token.style.left = `${10 + positions[player]}px`;
  token.style.top = `${10 + positions[player]}px`;
}

// PWA service worker register
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker Registered'));
}

const board = document.getElementById("board");

for (let row = 0; row < 15; row++) {
  for (let col = 0; col < 15; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
  }
}

