window.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("player");
  const board = document.getElementById("gameBoard");
  const cells = [];

  // ✅ Create 289 cells (17x17)
  for (let i = 0; i < 289; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
    cells.push(cell);
  }

  // 🎨 Random colors list
  const colors = ["red", "green", "blue", "yellow"];
  
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

   // 🏠 Function to create homes (blue one with image)
  function colorHome(rowStart, colStart, size, homeType) {
    for (let r = rowStart; r < rowStart + size; r++) {
      for (let c = colStart; c < colStart + size; c++) {
        let index = r * 17 + c;

        if (homeType === "blue") {
          cells[index].style.backgroundImage = "url('IMG_20250807_222955.jpg')";
          cells[index].style.backgroundSize = "cover";
          cells[index].style.backgroundPosition = "center";
          cells[index].style.pointerEvents = "none";
        } else {
          cells[index].style.backgroundColor = homeType;
          cells[index].style.pointerEvents = "none";
        }
      }
    }
  }


  // 🏠 Color 4 homes (6x6 each)
  colorHome(0, 0, 6);      // Top-left
  colorHome(0, 11, 6);     // Top-right
  colorHome(11, 0, 6);     // Bottom-left
  colorHome(11, 11, 6);    // Bottom-right
  
   function colorPath(pathArray, color) {
    pathArray.forEach(index => {
      cells[index].style.backgroundColor = color;
    });
   }

  function colorLudoPath(cells, GRID) {
  const pathColor = "#ccc";
  const center = Math.floor(GRID / 2);

  // Upar se neeche vertical path
  for (let r = 0; r < GRID; r++) {
    if (r < 6 || r > 10) { // home ke andar na ho
      const index = r * GRID + center;
      cells[index].style.backgroundColor = pathColor;
    }
  }

  // Baaye se daaye horizontal path
  for (let c = 0; c < GRID; c++) {
    if (c < 6 || c > 10) { // home ke andar na ho
      const index = center * GRID + c;
      cells[index].style.backgroundColor = pathColor;
    }
  }

  // Upar ka vertical entry path
  for (let r = 0; r < 6; r++) {
    const index = r * GRID + center;
    cells[index].style.backgroundColor = pathColor;
  }

  // Neeche ka vertical entry path
  for (let r = GRID - 6; r < GRID; r++) {
    const index = r * GRID + center;
    cells[index].style.backgroundColor = pathColor;
  }

  // Left ka horizontal entry path
  for (let c = 0; c < 6; c++) {
    const index = center * GRID + c;
    cells[index].style.backgroundColor = pathColor;
  }

  // Right ka horizontal entry path
  for (let c = GRID - 6; c < GRID; c++) {
    const index = center * GRID + c;
    cells[index].style.backgroundColor = pathColor;
  }

  // Middle destination square (3x3)
  for (let r = center - 1; r <= center + 1; r++) {
    for (let c = center - 1; c <= center + 1; c++) {
      const index = r * GRID + c;
      cells[index].style.backgroundColor = "white";
    }
   }
  }
  colorLudoPath(cells, 17);

  // Har player ka path index list (17x17 grid)
const redPath = [
  141, 142, 143, 144, 145, 146,
  129, 112, 95, 78, 61, 44, 27, 10,
  11, 12, 13, 14, 15, 16,
  33, 50, 67, 84, 101, 118, 135, 152,
  151, 150, 149, 148, 147,
  130, 113, 96, 79, 62, 45, 28, 11, // entry to center
  12, 13, 14  // center
];

const greenPath = [
  17, 34, 51, 68, 85, 102,
  119, 136, 153, 170, 187, 204, 221, 238,
  237, 236, 235, 234, 233, 232,
  215, 198, 181, 164, 147, 130, 113, 96,
  95, 94, 93, 92, 91,
  108, 125, 142, 159, 176, 193, 210, 227,
  226, 225, 224 // center
];

const yellowPath = [
  5, 4, 3, 2, 1, 0,
  17, 34, 51, 68, 85, 102, 119, 136,
  137, 138, 139, 140, 141, 142,
  125, 108, 91, 74, 57, 40, 23, 6,
  7, 8, 9, 10, 11,
  28, 45, 62, 79, 96, 113, 130, 147,
  148, 149, 150 // center
];

const bluePath = [
  283, 266, 249, 232, 215, 198,
  181, 164, 147, 130, 113, 96, 79, 62,
  63, 64, 65, 66, 67, 68,
  85, 102, 119, 136, 153, 170, 187, 204,
  203, 202, 201, 200, 199,
  182, 165, 148, 131, 114, 97, 80, 63,
  64, 65, 66 // center
];

colorPath(redPath, "red");
colorPath(greenPath, "green");
colorPath(yellowPath, "gold");
colorPath(bluePath, "blue");

  // 🎮 Player movement
  let playerPos = 0;
  document.addEventListener("keydown", movePlayer);

  function movePlayer(e) {
    const boardRect = board.getBoundingClientRect();
    const playerWidth = player.offsetWidth;

    if (e.key === "ArrowLeft") playerPos -= 20;
    if (e.key === "ArrowRight") playerPos += 20;

    if (playerPos < 0) playerPos = 0;
    if (playerPos > boardRect.width - playerWidth) {
      playerPos = boardRect.width - playerWidth;
    }

    player.style.left = `${playerPos}px`;
  }
});
