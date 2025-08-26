// server.js

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 3000;

// Static files (Ludo folder ke andar html, css, js waghera)
app.use(express.static("Ludo"));

// Serve index.html (agar root pe koi jaaye)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Players list
let players = {};
let turnOrder = [];
let currentTurn = 0;

// Socket.io logic
io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Add new player
    if (turnOrder.length < 4) {
        players[socket.id] = {
            id: socket.id,
            color: getColorByIndex(turnOrder.length)
        };
        turnOrder.push(socket.id);

        // Notify this player
        socket.emit("playerData", players[socket.id]);

        // Notify others
        io.emit("playersUpdate", players);
        io.emit("turnUpdate", turnOrder[currentTurn]);
    } else {
        socket.emit("roomFull");
    }

    // Dice roll
    socket.on("rollDice", () => {
        if (socket.id === turnOrder[currentTurn]) {
            const diceValue = Math.floor(Math.random() * 6) + 1;
            io.emit("diceRolled", {
                playerId: socket.id,
                value: diceValue
            });
        }
    });

    // End Turn
    socket.on("endTurn", () => {
        if (socket.id === turnOrder[currentTurn]) {
            currentTurn = (currentTurn + 1) % turnOrder.length;
            io.emit("turnUpdate", turnOrder[currentTurn]);
        }
    });

    // Disconnect
    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);

        // Remove player
        delete players[socket.id];
        turnOrder = turnOrder.filter(id => id !== socket.id);

        // Reset turn if needed
        if (currentTurn >= turnOrder.length) {
            currentTurn = 0;
        }

        io.emit("playersUpdate", players);
        io.emit("turnUpdate", turnOrder[currentTurn] || null);
    });
});

// Utility: assign colors to players
function getColorByIndex(index) {
    const colors = ["red", "blue", "green", "yellow"];
    return colors[index] || "gray";
}

// Start server
http.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
