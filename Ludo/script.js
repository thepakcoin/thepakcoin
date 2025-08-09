function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice-result").textContent = `You rolled: ${roll}`;
    
    let diceFaces = ["🎲","⚀","⚁","⚂","⚃","⚄","⚅"];
    document.getElementById("dice").textContent = diceFaces[roll];
}
