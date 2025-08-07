// Get dice result div
const diceResult = document.getElementById("diceResult");

// Function to roll dice for a specific player
function rollDice(playerColor) {
  const dice = Math.floor(Math.random() * 6) + 1;

  // Show dice result
  diceResult.textContent = `🎲 ${playerColor.toUpperCase()} rolled: ${dice}`;

  // You can log in console too
  console.log(`Player ${playerColor.toUpperCase()} rolled: ${dice}`);

  // TODO: Move goti based on dice value (to be added)
}
