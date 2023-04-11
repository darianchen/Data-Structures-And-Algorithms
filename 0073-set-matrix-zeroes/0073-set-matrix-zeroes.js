/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let newZeros = new Set();
    
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] === 0) newZeros.add(`${row},${col}`)
        }
    }
    let zeroArr = Array.from(newZeros);
    
    for(let i = 0; i < zeroArr.length; i++) {
        let row = parseInt(zeroArr[i].split(',')[0]);
        let col = parseInt(zeroArr[i].split(',')[1])
        for(let pointer = 0; pointer < matrix[row].length; pointer++) {
            matrix[row][pointer] = 0;
        }
        
        for(let pointer = 0; pointer < matrix.length; pointer++) {
            matrix[pointer][col] = 0;
        }
    }    
    
    
//     for(let row = 0; row < matrix.length; row++) {
//         for(let col = 0; col < matrix[row].length; col++) {
            
//             if(!newZeros.has(`${row}${col}`) && matrix[row][col] === 0 ) {
//                 for(let i = 0; i < matrix[row].length; i++) {
//                     if(matrix[row][i] !== 0) {
//                         newZeros.add(`${row}${i}`);
//                         matrix[row][i] = 0;  
//                     } 
//                 }
//                 for(let j = 0; j < matrix.length; j++) {
//                     if(matrix[j][col] !== 0) {
//                         newZeros.add(`${j}${col}`);
//                         matrix[j][col] = 0;
//                     } 
//                 }
//             }   
//         }
//     }   
};