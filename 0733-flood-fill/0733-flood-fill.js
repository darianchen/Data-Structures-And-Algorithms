/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    helper(image, sr, sc, color, image[sr][sc]);
    return image
};

const helper = (image, row, col, nextColor, originalColor) => {
        
    if(!(row >= 0 && row <= image.length - 1) || 
       !(col >= 0 && col <= image[0].length - 1)){
        return
    }
    
    if(image[row][col] !== originalColor){
       return
    }
    
    if(image[row][col] === nextColor){
        return
    }
    
    //change the color
    //then recursion
    
    image[row][col] = nextColor;
    
    helper(image, row - 1, col, nextColor, originalColor); //up
    helper(image, row + 1, col, nextColor, originalColor); //down
    helper(image, row, col - 1, nextColor, originalColor); //left
    helper(image, row, col + 1, nextColor, originalColor); //right
    
}
    
    //basecase if out of bounds or not number you clicked on ex) 1
    // check if number already changed
    
    