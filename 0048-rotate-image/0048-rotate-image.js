/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    transpose(matrix);
    
    for(let row of matrix){
        row = row.reverse();
    }
    
};


var transpose = function(array){
    for(let i = 0; i < array.length; i++){   
        for(let j = 0; j < i; j++){
            let temp = array[i][j];
            array[i][j] = array[j][i];
            array[j][i] = temp;
        }
    }
}