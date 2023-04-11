/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    
    while(left < right) {
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * currentHeight);
        
        if(height[left] < height[right]) left++;
        else right--;     
    }
    
    return maxArea;
};


//int array, length n = height

//n lines, two endpoints

/**
   let area = 0;

    for(let i = 0; i < height.length; i++){
        for(let j = i + 1; j < height.length; j++){
            let minHeight = Math.min(height[i], height[j]);
            let width = j - i;
            if(minHeight * width > area){
                area = minHeight * width;
            }
        }
    }
    return area;
**/