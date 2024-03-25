let puzzle = [];
const puzzleContainer = document.getElementById("puzzle-container");

function initializePuzzle() {
    puzzle = Array(4).fill(null).map(() => Array(4).fill(null));
    let count = 1;
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(i === 3 && j === 3) {
                puzzle[i][j] = null;
            } else {
                puzzle[i][j] = count++;
            }
        }
    }
}

function renderPuzzle() {
    puzzleContainer.innerHTML = "";
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            const puzzlePiece = document.createElement("div");
            puzzlePiece.classList.add("puzzle-piece");
            puzzlePiece.innerText = puzzle[i][j] || "";
            puzzlePiece.dataset.row = i;
            puzzlePiece.dataset.col = j;
            puzzlePiece.addEventListener("click", handleMove);
            puzzleContainer.appendChild(puzzlePiece);
        }
    }
}

function shuffle() {
    initializePuzzle();
    for(let i = 0; i < 1000; i++) {
        const randomRow = Math.floor(Math.random() * 4);
        const randomCol = Math.floor(Math.random() * 4);
        movePiece(randomRow, randomCol);
    }
    renderPuzzle();
}

function handleMove(event) {
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    if(isMoveValid(row, col)) {
        movePiece(row, col);
        renderPuzzle();
        checkWin();
    }
}

function isMoveValid(row, col) {
    const emptyRow = findEmptySpace().row;
    const emptyCol = findEmptySpace().col;
    return (row === emptyRow && Math.abs(col - emptyCol) === 1) || 
           (col === emptyCol && Math.abs(row - emptyRow) === 1);
}

function movePiece(row, col) {
    const emptyRow = findEmptySpace().row;
    const emptyCol = findEmptySpace().col;
    puzzle[emptyRow][emptyCol] = puzzle[row][col];
    puzzle[row][col] = null;
}

function findEmptySpace() {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(puzzle[i][j] === null) {
                return { row: i, col: j };
            }
        }
    }
}

function checkWin() {
    let count = 1;
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(puzzle[i][j] !== null && puzzle[i][j] !== count++) {
                return;
            }
        }
    }
    alert("You win!");
}

initializePuzzle();
renderPuzzle();