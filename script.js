let boardTemplate = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];
let GameMenu = document.getElementById("GameMenu");
let boardElement = document.getElementById("board");
let isXTurn = true;
let gameMode;
function StartGame(mode) {
    xRatio = document.getElementById("Xratio");
    oRatio = document.getElementById("Oratio");
    GameMenu.remove();
    boardElement.style.display = "grid";
    gameMode = mode;
    if (mode != "PvP") {
        if (oRatio.checked) {
            MakeRandomMove();
        }
    }
}
boardTemplate.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
        let currentCell = boardElement.children[rowIndex * 3 + colIndex];
        currentCell.addEventListener(
            "click",
            () => {
                cellClicked(currentCell, rowIndex, colIndex);
            },
            { once: true }
        );
    });
});
function cellClicked(currentCell, i, j) {
    if (isXTurn) {
        currentCell.classList.add("x");
        isXTurn = false;
        if (checkWin(i, j)) {
            EndGame("x");
            return;
        }
    } else {
        currentCell.classList.add("o");
        isXTurn = true;
        if (checkWin(i, j)) {
            EndGame("O");
            return;
        }
    }
    if (checkTie()) {
        EndGame("Tie");
        return;
    }
    if (gameMode == "easy") {
        MakeRandomMove();
    }
}
function checkWin(i, j) {
    let RowElement1 = boardElement.children[i * 3 + 0];
    let RowElement2 = boardElement.children[i * 3 + 1];
    let RowElement3 = boardElement.children[i * 3 + 2];
    if (
        RowElement1.className == RowElement2.className &&
        RowElement2.className == RowElement3.className
    ) {
        return true;
    }
    let ColumnElement1 = boardElement.children[0 * 3 + j];
    let ColumnElement2 = boardElement.children[1 * 3 + j];
    let ColumnElement3 = boardElement.children[2 * 3 + j];
    if (
        ColumnElement1.className == ColumnElement2.className &&
        ColumnElement2.className == ColumnElement3.className
    ) {
        return true;
    }
    let crossElement1 = boardElement.children[0 * 3 + 0];
    let crossElement2 = boardElement.children[1 * 3 + 1];
    let crossElement3 = boardElement.children[2 * 3 + 2];
    if (
        crossElement1.className == crossElement2.className &&
        crossElement2.className == crossElement3.className &&
        crossElement1.className != "cell"
    ) {
        return true;
    }
    let crossElement4 = boardElement.children[0 * 3 + 2];
    let crossElement6 = boardElement.children[2 * 3 + 0];
    if (
        crossElement4.className == crossElement2.className &&
        crossElement2.className == crossElement6.className &&
        crossElement4.className != "cell"
    ) {
        return true;
    }
    return false;
}
function checkTie() {
    for (i = 0; i < 9; i++) {
        let cell = boardElement.children[i];
        if (cell.className == "cell") {
            return false;
        }
    }
    return true;
}
function EndGame(winner) {
    boardElement.remove();
    const endGameText = document.createElement("h1");
    const button = document.createElement("button");
    button.className = "restartButton";
    button.textContent = "Restart Game";
    endGameText.className = "EndGameText";
    button.addEventListener("click", () => {
        location.reload();
    });
    if (winner != "Tie") {
        endGameText.textContent = "The winner is " + winner;
    } else {
        endGameText.textContent = winner;
    }
    document.body.appendChild(endGameText);
    document.body.appendChild(button);
}
function MakeRandomMove() {
    let i = Math.floor(Math.random() * 3);
    let j = Math.floor(Math.random() * 3);
    let x = i * 3 + j;
    while (boardElement.children[x].className != "cell") {
        i = Math.floor(Math.random() * 3);
        j = Math.floor(Math.random() * 3);
        x = i * 3 + j;
    }

    console.log(x);
    if (isXTurn && boardElement.children[x].className == "cell") {
        boardElement.children[x].classList.add("x");
        isXTurn = false;
        if (checkWin(i, j)) {
            EndGame("x");
            return;
        }
    } else if (!isXTurn && boardElement.children[x].className == "cell") {
        boardElement.children[x].classList.add("o");
        isXTurn = true;
        if (checkWin(i, j)) {
            EndGame("O");
            return;
        }
    }
    if (checkTie()) {
        EndGame("Tie");
    }
}
