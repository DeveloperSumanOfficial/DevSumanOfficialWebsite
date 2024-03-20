let board = [['', '', ''], ['', '', ''], ['', '', '']];
let currentPlayer = 'X';
let gameOver = false;

function placeMark(row, col) {
    if (!gameOver && board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById(`cell${row}${col}`).innerText = currentPlayer;
        if (checkWinner(currentPlayer)) {
            document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
            gameOver = true;
        } else if (checkDraw()) {
            document.getElementById('message').innerText = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner(player) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }
    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function newGame() {
    board = [['', '', ''], ['', '', ''], ['', '', '']];
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
