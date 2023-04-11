/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = Infinity;
    let left = 0;
    let right = 0;
    let sum = 0;
    
    for(right; right < nums.length; right++) {
        sum += nums[right];
        
        while(sum >= target) {
            result = Math.min(result, right - left + 1);
            sum -= nums[left];
            left++
        }
    } 
    
    return result === Infinity ? 0 : result; 
}