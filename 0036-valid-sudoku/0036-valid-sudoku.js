/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    //check rows
    for(let row = 0; row < board.length; row++) {
        let rowSet = new Set();
        for(let col = 0; col < board[row].length; col++) {
            if (board[row][col] !== '.') {
                if(rowSet.has(board[row][col])) return false;
                else rowSet.add(board[row][col]);
            }
        }
    }
    
    //check columns
    for(let col = 0; col < board[0].length; col++) {
        let colSet = new Set();
        for(let row = 0; row < board.length; row++) {
            if (board[row][col] !== '.') {
                if(colSet.has(board[row][col])) return false;
                else colSet.add(board[row][col]);
            }
        }
    }
    
    
  //check sub-grids
    for(let i = 0; i < 9; i += 3) {
        for(let j = 0; j < 9; j += 3) {
            let subgridSet = new Set();
            for(let row = i; row < i + 3; row++) {
                for(let col = j; col < j + 3; col++) {
                    if (board[row][col] !== '.') {
                        if(subgridSet.has(board[row][col])) return false;
                        else subgridSet.add(board[row][col]);
                    }
                }
            }
        }
    }
    
    return true;
    
};