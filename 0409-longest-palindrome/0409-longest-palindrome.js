/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    // loop through s and create a hash for the amount of letters
    // for every even amount add to the longest variable
    
    let hash = {};
    let longestPal = 0;
    let add = false;
    
    for(const char of s) {
        hash[char] = hash[char] + 1 || 1;
    }
    
    for(const key in hash) {
        if(hash[key] === 1 || hash[key] % 2 === 1) add = true;
        if(hash[key] > 1 && hash[key] % 2 === 0) longestPal += hash[key];
        else if(hash[key] > 1) {
            longestPal += hash[key] - 1;
        }
    }
    return add === true ? longestPal + 1 : longestPal;    
};