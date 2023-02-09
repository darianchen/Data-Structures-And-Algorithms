/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if(s.length !== t.length) return false;
    
    let hash = {};
    
      for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] !== undefined) {
            hash[s[i]]++;
        } else {
            hash[s[i]] = 1;
        }
    }
    
    console.log(hash)
    
    for(let j = 0; j < t.length; j++){
        if(!hash[t[j]] || hash[t[j]] === undefined){
            return false;
        } else{
            hash[t[j]]--;
        }
    }
    
    return true;
    
};
