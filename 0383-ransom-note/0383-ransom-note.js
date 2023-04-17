/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    // create hash for ransomNote
    // loop through magazine and see if letter exists, then subtract
    // loop through hash and check for 0's
    
    let hash = {};
    
    for(const char of ransomNote) {
        hash[char] = hash[char] + 1 || 1;
    }
    
    for(const char of magazine) {
        if(hash[char]) hash[char]--;
    }
        
    for(const key in hash) {
        if(hash[key]) return false;
    }
    return true;
};