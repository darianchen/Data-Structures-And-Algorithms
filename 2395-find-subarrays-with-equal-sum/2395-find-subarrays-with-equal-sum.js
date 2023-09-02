/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let comp = {};
    
    for(let i = 1; i < nums.length; i++) {
        let currentSum = nums[i - 1] + nums[i];
        
        if(comp[currentSum] !== undefined && comp[currentSum] !== i - 1) {
            return true;
        } else {
            comp[currentSum] = i - 1;   
        }
    }
    
    return false;
};