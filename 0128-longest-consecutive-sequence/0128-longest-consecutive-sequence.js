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
    
    const numSet = new Set(nums);
    let longestSequence = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentSequence = 1;
            let currentNum = num;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentSequence += 1;
            }

            longestSequence = Math.max(longestSequence, currentSequence);
        }
    }

    return longestSequence;
};