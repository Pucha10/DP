class Bot {
    checkWin(board, player) {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ];

        return winConditions.some(condition => 
            condition.every(index => board[index] === player)
        );
    }

    isBoardFull(board) {
        return board.every(cell => cell !== "");
    }

    evaluate(board) {
        if (this.checkWin(board, 'X')) return 10;
        if (this.checkWin(board, 'O')) return -10;
        return 0;
    }

    minimax(board, depth, isMaximizing) {
        const result = this.evaluate(board);

        if (result !== 0) {
            return result;
        }

        if (this.isBoardFull(board)) {
            return 0;
        }

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (board[i] === "") {
                    board[i] = 'X'; 
                    bestScore = Math.max(bestScore, this.minimax(board, depth + 1, false));
                    board[i] = "";
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (board[i] === "") {
                    board[i] = 'O'; 
                    bestScore = Math.min(bestScore, this.minimax(board, depth + 1, true));
                    board[i] = "";
                }
            }
            return bestScore;
        }
    }

    bestMove(board) {
        let bestMove = -1;
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                board[i] = 'X'; 
                let score = this.minimax(board, 0, false);
                board[i] = "";
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = i;
                }
            }
        }
        return bestMove;
    }
}
