let diceValue = 0;
let gotiOnBoard = false; // red goti initially ghar ke andar

function play() {
    diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerText = diceValue;

    if (diceValue === 6 && !gotiOnBoard) {
        moveRedGotiOut();
        gotiOnBoard = true;
    } else if (gotiOnBoard) {
        moveRedGotiForward(diceValue);
    }
}

// Move red goti from home to board position 505
function moveRedGotiOut() {
    const goti = document.getElementById("firstgit");
    const startBox = document.getElementById("505");

    // Remove from home
    const home = document.getElementById("rr1");
    if (goti && home && startBox) {
        home.innerHTML = "";
        startBox.appendChild(goti);
        goti.classList.remove("inhouse");
    }
}

// Move goti ahead by dice value
let currentPos = 505; // start box
function moveRedGotiForward(steps) {
    const goti = document.getElementById("firstgit");

    let nextPos = currentPos + steps;
    if (nextPos > 51) nextPos -= 52; // loop back on board

    const nextBox = document.getElementById(nextPos);
    if (nextBox) {
        const prevBox = document.getElementById(currentPos);
        if (prevBox.contains(goti)) {
            prevBox.removeChild(goti);
        }
        nextBox.appendChild(goti);
        currentPos = nextPos;
    }
}
