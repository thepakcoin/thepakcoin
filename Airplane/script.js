window.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("player");
  const board = document.getElementById("gameBoard");
  const cells = []; // <-- yeh start me hona chahiye
  
  // ✅ Create 225 cells
  for (let i = 0; i < 225; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
    cells.push(cell);
  }

// create 15x15 = 225 cells
  for (let r = 0; r < 15; r++) {
    for (let c = 0; c < 15; c++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.r = r;
      cell.dataset.c = c;
      board.appendChild(cell);
      cells.push(cell);
    }
  }

  // helper: index from row,col
  function idx(r, c) {
    return r * 15 + c;
  }

  // helper: mark rectangle inclusive
  function markRect(r1, c1, r2, c2, klass) {
    for (let r = r1; r <= r2; r++) {
      for (let c = c1; c <= c2; c++) {
        cells[idx(r, c)].classList.add(klass);
      }
    }
  }

  // 1) Homes (6x6 style corners like many Ludo boards)
  markRect(0, 0, 5, 5, "green-home");       // top-left
  markRect(0, 9, 5, 14, "yellow-home");     // top-right
  markRect(9, 0, 14, 5, "red-home");        // bottom-left
  markRect(9, 9, 14, 14, "blue-home");      // bottom-right

  // 2) Center 3x3 (safe area)
  markRect(6, 6, 8, 8, "center");

  // 3) Main cross path (horizontal + vertical center lines)
  for (let c = 0; c < 15; c++) cells[idx(7, c)].classList.add("path");
  for (let r = 0; r < 15; r++) cells[idx(r, 7)].classList.add("path");

  // 4) Approach lanes (colored lanes from corner toward center)
  // Green approach (from top-left towards center)
  markRect(6, 0, 6, 5, "green-path");   // horizontal just below top-left home (row 6, cols 0..5)
  markRect(0, 6, 5, 6, "green-path");   // vertical right of top-left home (col 6, rows 0..5)

  // Yellow approach (top-right)
  markRect(6, 9, 6, 14, "yellow-path"); // horizontal just below top-right home
  markRect(0, 8, 5, 8, "yellow-path");  // vertical left of top-right home

  // Red approach (bottom-left)
  markRect(8, 0, 8, 5, "red-path");     // horizontal just above bottom-left home (row 8, cols 0..5)
  markRect(9, 6, 14, 6, "red-path");    // vertical right of bottom-left home

  // Blue approach (bottom-right)
  markRect(8, 9, 8, 14, "blue-path");   // horizontal just above bottom-right home
  markRect(9, 8, 14, 8, "blue-path");   // vertical left of bottom-right home

  // 5) mark home-entry cells (the 6-step final approach to center) — approximate:
  // these are the 6 cells that lead each color into the center cross (visual effect)
  const greenEntry = [[6,5],[6,6]]; // show two as entry near center
  const yellowEntry = [[6,8],[6,9]];
  const redEntry = [[8,6],[9,6]];
  const blueEntry = [[8,8],[9,8]];

  greenEntry.forEach(([r,c]) => cells[idx(r,c)].classList.add("green-entry"));
  yellowEntry.forEach(([r,c]) => cells[idx(r,c)].classList.add("yellow-entry"));
  redEntry.forEach(([r,c]) => cells[idx(r,c)].classList.add("red-entry"));
  blueEntry.forEach(([r,c]) => cells[idx(r,c)].classList.add("blue-entry"));

  // 6) Safe/star cells (visual marks). Common Ludo stars are near middle of each side:
  cells[idx(4,7)].classList.add("star");
  cells[idx(7,4)].classList.add("star");
  cells[idx(10,7)].classList.add("star");
  cells[idx(7,10)].classList.add("star");

  // 7) Add small index number for debug (optional) - comment out if you don't want numbers
  // cells.forEach((c, i) => c.innerText = i);

  console.log("Board generated: cells=", cells.length);
});


// 🔹 Players list
const players = ["red", "blue", "green", "yellow"];

// 🔹 Random shuffle
const shuffledPositions = Object.keys(positions)
  .sort(() => Math.random() - 0.5);

// 🔹 Assign each player to a random corner
players.forEach((player, index) => {
  const posName = shuffledPositions[index];
  positions[posName].forEach(i => {
    cells[i].classList.add(player + "-home");
  });
});
  // Player movement code (optional)
  let playerPos = 0

  document.addEventListener("keydown", movePlayer);

  function movePlayer(e) {
    const boardRect = board.getBoundingClientRect();
    const playerWidth = player.offsetWidth;

    if (e.key === "ArrowLeft") {
      playerPos -= 20;
    }
    if (e.key === "ArrowRight") {
      playerPos += 20;
    }

    if (playerPos < 0) playerPos = 0;
    if (playerPos > boardRect.width - playerWidth) {
      playerPos = boardRect.width - playerWidth;
    }

    player.style.left = `${playerPos}px`;
  }
});
