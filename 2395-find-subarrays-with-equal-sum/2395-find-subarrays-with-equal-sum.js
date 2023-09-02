/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let hash = {};
    
    for(let i = 0; i < nums.length - 1; i++) {
        let currentSum = nums[i] + nums[i + 1]
        
        if(hash[currentSum] !== undefined && hash[currentSum] !== i) {
            return true;
        } else {
            hash[currentSum] = i;
        }
        
    }
    return false;
};