/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hash = {};
    let length = 0;
    let extra = 0;
    
    for(const char of s) {
        hash[char] = hash[char] + 1 || 1;
    }
    
    for(const key in hash) {
        if(hash[key] % 2 === 0) {
            length += hash[key];
        }
        else {
            extra = 1;
            length += hash[key] - 1;
        }
    }
    
    return length + extra; 
};