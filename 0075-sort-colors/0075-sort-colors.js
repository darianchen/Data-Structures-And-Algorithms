/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let hash = {};
    
    for(const num of nums) {
        hash[num] = hash[num] + 1 || 1;
    }
    
    let i = 0;
    for(const key in hash) {
        for(let j = 0; j < hash[key]; j++) {
            nums[i] = key;
            i++;
        }
    }
};
