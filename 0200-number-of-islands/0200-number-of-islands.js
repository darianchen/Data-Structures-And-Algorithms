/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    count = 0;
    const helper = (i,j) => {
        if(!(i >= 0 && i <= grid.length - 1) || 
           !(j >= 0 && j <= grid[0].length - 1)){
            return
        } // check for out of bounds

        if(grid[i][j] === "0"){
           return
        }
        
        grid[i][j] = "0";
        helper(i - 1, j); //up
        helper(i + 1, j); //down
        helper(i, j - 1); //left
        helper(i, j + 1); //right   
    }
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === "1"){
                helper(i,j);
                console.log('I found land')
                count++;
            }
        }
    }
    return count;
};
