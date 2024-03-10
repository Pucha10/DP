
class Bot {
	constructor(sign) {
		this.sign = sign;
        if (sign=="x")
        {
            this.playerSign='O'
        }
        else
        {
            this.playerSign='X';
        }
	}
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

minimax(board, depth, isMaximizingPlayer, computerSign) {
    const scores = {
        [computerSign]: 10,
        [this.playerSign]: -10,
        'Tie': 0
    };

    const result = this.evaluate(board);

    if (result !== 0) {
        return scores[result];
    }

    if (this.isBoardFull(board)) {
        return scores['Tie'];
    }

    if (isMaximizingPlayer) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                board[i] = computerSign;
                bestScore = Math.max(bestScore, this.minimax(board, depth + 1, false, this.sign));
                board[i] = "";
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                board[i] = this.playerSign;
                bestScore = Math.min(bestScore, this.minimax(board, depth + 1, true, this.sign));
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
            console.log(score); //tu jest Nan czemu?
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
