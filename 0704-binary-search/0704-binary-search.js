/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let midIdx = Math.floor(nums.length/2)
    let left = nums.slice(0, midIdx);
    let right = nums.slice(midIdx + 1);
    
    if (nums.length === 0){
        return -1;
    }
    
    if(nums[midIdx] === target){
        return midIdx;
    } else if (nums[midIdx] > target){
        return search(left, target);
    } else {
        let result = search(right, target);
        return result === -1 ? -1 : midIdx + 1 + result;
    }
};