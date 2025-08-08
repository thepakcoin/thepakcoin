function rollDice(player) {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  const dice = document.getElementById(`dice-${player}`);
  dice.innerText = `🎲 ${diceValue}`;
  console.log(`${player} rolled ${diceValue}`);
}
