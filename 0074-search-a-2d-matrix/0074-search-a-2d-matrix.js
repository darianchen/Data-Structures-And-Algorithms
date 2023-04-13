/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i][0] === target || matrix[i].at(-1) === target) {
            return true;
        } else if(matrix[i][0] < target && target < matrix[i].at(-1)) {
            for(let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] === target) return true;   
            }
        }
    }
    return false;
};