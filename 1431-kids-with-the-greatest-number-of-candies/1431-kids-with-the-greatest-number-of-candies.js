/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let result = [];
    
    for(candy of candies) {
        let newAmount = candy + extraCandies;
        if(newAmount >= max) result.push(true);
        else result.push(false);
    }
    return result;
};