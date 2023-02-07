/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let comp = new Map();
    const length = nums.length;
    
    for(let i = 0; i < length; i++){
        
        if(comp[nums[i]] !== undefined){
            return [comp[nums[i]], i];
        }
        
        comp[target - nums[i]] = i;
        
    }
    
    
};