/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    if(nums.length === 0){ return -1; }
        
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right){
        let midIdx = Math.floor((left + right)/2);
        if(nums[midIdx] > nums[right]){
            left = midIdx + 1;
        } 
        else{
            right = midIdx;    
        }   
    }
    //finds the pivot
    
    
    let start = left;
    left = 0;
    right = nums.length - 1;
    
    if(nums[start] <= target && target <= nums[right]){
        left = start;
    } else{
        right = start;
    }
    
    
    while(left <= right){
        let midIdx = Math.floor((left + right) / 2);
        if(nums[midIdx] === target){
            return midIdx;
        } else if(nums[midIdx] > target){
            right = midIdx - 1;       
        } else{
            left = midIdx + 1;
        }
    }
    
    return -1;
};