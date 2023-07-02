/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let col = new Set();
    let posDiag = new Set(); // r+c
    let negDiag = new Set(); // r-c
    
    let res = [];
    let board = Array(n).fill().map(() => Array(n).fill('.'));
    
    function backtrack(r) {
        if (r === n) {
            let copy = [];
            board.forEach((row) => {
                copy.push(row.join(''))
            });
            res.push(copy);
            return;
        }

        for(let c = 0; c < n; c++) {
            if(col.has(c) || posDiag.has(r + c) || negDiag.has(r -c)) {
                continue;
            }
            
            col.add(c);
            posDiag.add(r + c);
            negDiag.add(r - c);
            board[r][c] = "Q";
            
            backtrack(r + 1);
            
            col.delete(c);
            posDiag.delete(r + c);
            negDiag.delete(r - c);
            board[r][c] = ".";
        }
    };  
    backtrack(0);
    return res;
};
