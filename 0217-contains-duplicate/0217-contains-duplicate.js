/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let hash = {};
    
    for(const num of nums) {
        hash[num] = hash[num] + 1 || 1;
    }
    
    for(const key in hash) {
        if(hash[key] >= 2) return true;
    }
    return false;
};