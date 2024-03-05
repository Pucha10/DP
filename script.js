let boardTemplate = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];
let boardElement = document.getElementById("board");
let isXTurn = true;
boardTemplate.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
        let currentCell = boardElement.children[rowIndex * 3 + colIndex];
        currentCell.addEventListener(
            "click",
            () => {
                cellClicked(currentCell);
            },
            { once: true }
        );
    });
});
function cellClicked(currentCell) {
    console.log("Clicked");
    if (isXTurn) {
        currentCell.classList.add("x");
        isXTurn = false;
    } else {
        currentCell.classList.add("o");
        isXTurn = true;
    }
}
function checkWin(currentPlayer) {}
