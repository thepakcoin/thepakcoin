const currentDice = {
  red: 1,
  green: 1,
  blue: 1,
  yellow: 1,
};

function rollDice(color) {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  currentDice[color] = diceValue;

  const dice = document.getElementById(`dice-${color}`);
  dice.textContent = `🎲 ${diceValue}`;
  console.log(`${color.toUpperCase()} rolled: ${diceValue}`);
}

// Simple board draw (you can improve or replace with image)
window.onload = function () {
  const canvas = document.getElementById("ludo-board");
  const ctx = canvas.getContext("2d");

  // Draw Ludo-like squares
  const size = 600;
  const box = size / 15;

  ctx.strokeStyle = "#000";
  for (let x = 0; x < size; x += box) {
    for (let y = 0; y < size; y += box) {
      ctx.strokeRect(x, y, box, box);
    }
  }

  // Draw center
  ctx.fillStyle = "#ccc";
  ctx.fillRect(box * 6, box * 6, box * 3, box * 3);
};
