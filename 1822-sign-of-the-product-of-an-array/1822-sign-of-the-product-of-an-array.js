/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let num = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        num *= nums[i];
    }
    
    if(num > 0) return 1;
    else if(num < 0) return -1;
    else return 0;
};