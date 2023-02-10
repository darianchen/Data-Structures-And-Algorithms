/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let run = [nums[0]];
    let length = nums.length
    
    for(let i = 1; i < length; i++){
        run.push(nums[i] + run[i - 1]);
    }
    
    return run;  
};