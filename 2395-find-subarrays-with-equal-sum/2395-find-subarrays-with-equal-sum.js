/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let seen = new Set();
    
    for(let i = 0; i < nums.length - 1; i++) {
        if(seen.has(nums[i] + nums[i + 1])) {
            return true;
        } else {
            seen.add(nums[i] + nums[i + 1])
        }
    }
    return false;
};