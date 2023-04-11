/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    if(s.length === 0) return true;
    
    if(s[0] !== s[s.length - 1]) return false;
    
    return isPalindrome(s.slice(1, s.length - 1));
};
