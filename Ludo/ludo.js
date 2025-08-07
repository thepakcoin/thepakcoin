// Players' order
const players = ["red", "green", "yellow", "blue"];
let currentPlayerIndex = 0;

// Get the dice element
const dice = document.getElementById("shared-dice");

// Roll dice on click
dice.addEventListener("click", function () {
    // Generate random number between 1 and 6
    const roll = Math.floor(Math.random() * 6) + 1;

    // Show number on dice
    dice.textContent = roll;

    // Optional: Animate roll (basic flash)
    dice.classList.add("flash");
    setTimeout(() => {
        dice.classList.remove("flash");
    }, 500);

    // Show current player's turn (optional — change color)
    const currentPlayer = players[currentPlayerIndex];
    dice.style.backgroundColor = getPlayerColor(currentPlayer);

    // Move to next player's turn
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
});

// Helper to get player color
function getPlayerColor(player) {
    switch (player) {
        case "red": return "#e74c3c";
        case "green": return "#2ecc71";
        case "yellow": return "#f1c40f";
        case "blue": return "#3498db";
        default: return "#ffffff";
    }
}
