/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    //find sum
    //loop through nums and find if left === right
    // if yes return i
    // if loop finishes return -1
    
    let sum = 0;
    
    for(num of nums){
        sum += num;
    }
    
    let leftSum = 0;
    let length = nums.length
    
    for(let i = 0; i < length; i++){
        if((sum - nums[i])/2 === leftSum) return i
        leftSum += nums[i];
    }
    
    return -1;
};