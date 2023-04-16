/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    
    while(left <= right) {
        let midIdx = Math.floor((left + right)/2);
        if(nums[midIdx] ===  target) {
            return midIdx;
        } else if(target  < nums[midIdx]) {
            right = midIdx - 1;
        } else {
            left = midIdx + 1;
        }
    }
    return -1;
};