/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end){
        let midIdx = Math.floor((start + end)/2); 
        if (nums[midIdx] === target){
            return midIdx;
        } else if(nums[midIdx] > target){
            end = midIdx - 1;
        } else {
            start = midIdx + 1;
        }    
    }
    return -1;
};