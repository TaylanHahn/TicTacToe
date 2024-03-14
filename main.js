
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function cellClicked(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    // for(let of) funciona como um incremento no JS
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            alert(`JOGADOR ${board[a]} VENCEU!`);
            resetBoard();
            return;
        }
    }

    if (!board.includes('')) {
        alert('EMPATE');
        resetBoard();
    }

    function resetBoard() {
        currentPlayer = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        for (let i = 0; i < 9; i++) {
            document.getElementById('board').children[i].innerText = '';
        }
    }
}
