// Server se connect hone ka code
const socket = io('http://localhost:3000'); // Server ka address

let currentPlayer = 0; // 0 for Player 1, 1 for Player 2, etc.
let diceValue = 0;
const players = [
    { id: 1, name: 'Player 1', pawns: [] },
    { id: 2, name: 'Player 2', pawns: [] }
    // ...baaki players...
];

// Jab server se connection ho jaye
socket.on('connect', () => {
    console.log('Connected to server');
});

// Jab dice roll button click ho
document.getElementById('roll-dice-btn').addEventListener('click', () => {
    // Dice roll ka event server ko bhej rahe hain
    socket.emit('roll-dice');
});

// Jab server se dice roll ki value aaye
socket.on('dice-rolled', (data) => {
    diceValue = data.value;
    document.getElementById('dice-value').innerText = diceValue;
    // Ab pawn ko move karne ki logic likhen
    handlePawnMovement();
});

function handlePawnMovement() {
    // Yahan pawns ko move karne ka code hoga
    // Agar koi pawn start se bahar nikal sakta hai to usko move karein
    // Ya agar koi pawn 6 se bahar nikle to dusra roll milna chahiye
}

function checkWinningCondition() {
    // Jab koi player apne saare pawns ghar mein le aaye to game khatam
}

// Pawns par click karne ki logic
// Pawns ko click karne par unko move karne ka code yahan hoga
