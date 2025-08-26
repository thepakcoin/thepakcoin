const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Static files serve karo — root folder + ludo folder dono
app.use(express.static(path.join(__dirname)));
app.use('/ludo', express.static(path.join(__dirname, 'ludo')));

io.on('connection', (socket) => {
  console.log('New player connected:', socket.id);

  socket.emit('welcome', { message: 'Welcome to the Ludo game!' });

  socket.on('dice-roll', (data) => {
    io.emit('dice-result', { playerId: socket.id, roll: data.roll });
  });

  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id);
    io.emit('player-left', { id: socket.id });
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
