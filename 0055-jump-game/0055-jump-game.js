/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const target = nums.length

    let canReach = [true];
    let i = 0
    while (canReach.length < target && i < target && canReach[i] === true){
        let currentNum = nums[i] //2
        
            
        for(currentNum; currentNum > 0; currentNum --){
            canReach[i + currentNum] = true
        }
        i++
    }

    return canReach[target-1] === true
    
};