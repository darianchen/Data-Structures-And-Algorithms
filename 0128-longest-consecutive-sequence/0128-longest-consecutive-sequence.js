/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    // Create a set to store numbers
    // Iterate through numbers
    // check if it's the start of a sequence
    // if it is then loop through set add find longest sequence
    // update longest sequence variable
    
    let numSet = new Set(nums);
    let longestSequence = 0;
    
    for(const num of nums) {
        if(!numSet.has(num - 1)){
            let currentSequence = 0;
            let currentNum = num;
            
            while(numSet.has(currentNum)){
                currentSequence++;
                currentNum++;
            }
        longestSequence = Math.max(longestSequence, currentSequence);
        }
    }
    
    return longestSequence;
};