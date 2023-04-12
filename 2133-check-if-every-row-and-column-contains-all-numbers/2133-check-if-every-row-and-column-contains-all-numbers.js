/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    
    // Make a hash with every number and a value of 1
    // Iterate through all rows and cols and subtract 1
    // If value is 0 or key doesn't exist return false
    
    const size = matrix.length;
    
    // Rows
    for(let row = 0; row < size; row++) {
        let hash = createHash(size);
        for(let col = 0; col < size; col++) {
            let number = matrix[row][col]
            if(hash[number] === 0 || hash[number] === undefined) {
                return false;
            } else{
                hash[number]--;
            }
        }
    }
    
    // Cols
        for(let col = 0; col < size; col++) {
        let hash = createHash(size);
        for(let row = 0; row < size; row++) {
            let number = matrix[row][col]
            if(hash[number] === 0 || hash[number] === undefined) {
                return false;
            } else{
                hash[number]--;
            }
        }
    }
    return true;
};

function createHash(num) {
    let hash = {};
    for(let i = 1; i <= num; i++) {
        hash[i] = 1;
    }
    return hash;
}