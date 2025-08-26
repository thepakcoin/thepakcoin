const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Ludo folder ko static serve karo
app.use(express.static('Ludo'));

io.on('connection', (socket) => {
  console.log('New player connected:', socket.id);

  // Dummy event: player join game
  socket.on('joinGame', (playerName) => {
    console.log(playerName + ' joined the game.');
    // Yahan aage game state aur multiplayer logic add kar sakte ho
  });

  // Dummy event: player moves
  socket.on('playerMove', (moveData) => {
    io.emit('updateGameState', moveData);
    // Yahan real game move logic add karo
  });

  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
