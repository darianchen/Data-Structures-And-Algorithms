/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // let ans = [[1]];
    // if(numRows === 1) return ans;
    
    let ans = [[1]];
    
    for(let i = 1; i < numRows; i++){
        let row = [1]
        for(let j = 1; j < i; j++){
            //addition
            row[j] = ans[i-1][j] + ans[i-1][j-1];
            
        }
        row.push(1);
        ans.push(row);
    }    
    
    return ans;
};