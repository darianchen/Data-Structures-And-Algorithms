/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let area = 0; 
   let left = 0;
   let right = height.length - 1; 
    

    //step 1 find minHeight
    //step 2 find width
    //step 3 area
        
    //if height[left] < height[right], increment left, vice versa
        
    
    while(left != right){
        let minHeight = Math.min(height[left], height[right]);
        let width = right - left;
        area = Math.max(area, (minHeight * width)); //better
        
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }  
    };
    
    return area;
    
    

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