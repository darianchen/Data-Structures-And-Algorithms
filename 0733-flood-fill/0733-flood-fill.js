/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    fill(image, sr, sc, color, image[sr][sc]);
    return image;
};

function fill(image, sr, sc, newColor, originalColor) {
    if(sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[0].length - 1) return;
    
    if(image[sr][sc] !== originalColor) return;
    
    if(image[sr][sc] === newColor) return;
    
    image[sr][sc] = newColor;
    fill(image, sr - 1, sc, newColor, originalColor);
    fill(image, sr + 1, sc, newColor, originalColor);
    fill(image, sr, sc - 1, newColor, originalColor);
    fill(image, sr, sc + 1, newColor, originalColor);
}


    
    