/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let hash = {};
    let result = [];
    
    for(const str of strs) {
        let sortedStr = str.split('').sort().join('');
        if(!hash[sortedStr]) {
            hash[sortedStr] = [str];
        } else {
            hash[sortedStr].push(str);   
        }
    }
        
    for(const key in hash) {
        result.push(hash[key]);
    }
    
    return result;
};