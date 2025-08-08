const board = document.getElementById("ludoBoard");

// Generate 15x15 board cells
for (let row = 0; row < 15; row++) {
  for (let col = 0; col < 15; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Example coloring logic (basic structure)
    if ((row < 6 && col < 6) || (row > 8 && col > 8) ||
        (row < 6 && col > 8) || (row > 8 && col < 6)) {
      cell.classList.add("base"); // base area
    } else if (row === 7 && col === 7) {
      cell.classList.add("home"); // center home
    } else {
      cell.classList.add("path"); // path cells
    }

    board.appendChild(cell);
  }
}

document.getElementById("menuBtn").addEventListener("click", () => {
  alert("Menu button clicked - future features here!");
});

// Calculate overlay position and size dynamically
const baseCells = document.querySelectorAll('.base');
if (baseCells.length > 0) {
  const boardRect = board.getBoundingClientRect();

  let minTop = Infinity, minLeft = Infinity;
  let maxBottom = -Infinity, maxRight = -Infinity;

  baseCells.forEach(cell => {
    const rect = cell.getBoundingClientRect();

    // Calculate relative to board's top-left
    const top = rect.top - boardRect.top;
    const left = rect.left - boardRect.left;
    const bottom = top + rect.height;
    const right = left + rect.width;

    if (top < minTop) minTop = top;
    if (left < minLeft) minLeft = left;
    if (bottom > maxBottom) maxBottom = bottom;
    if (right > maxRight) maxRight = right;
  });

  const overlay = document.createElement('div');
  overlay.id = 'baseOverlay';

  overlay.style.position = 'absolute';
  overlay.style.top = minTop + 'px';
  overlay.style.left = minLeft + 'px';
  overlay.style.width = (maxRight - minLeft) + 'px';
  overlay.style.height = (maxBottom - minTop) + 'px';
  overlay.style.backgroundImage = "url('IMG_20250807_222955.jpg')";
  overlay.style.backgroundRepeat = 'no-repeat';
  overlay.style.backgroundSize = 'cover';
  overlay.style.backgroundPosition = 'center center';
  overlay.style.pointerEvents = 'none';
  overlay.style.zIndex = '5';

  board.appendChild(overlay);
}

// Transparent background for .base cells
document.querySelectorAll('.base').forEach(cell => {
  cell.style.background = 'transparent';
  cell.style.border = 'none';
});

