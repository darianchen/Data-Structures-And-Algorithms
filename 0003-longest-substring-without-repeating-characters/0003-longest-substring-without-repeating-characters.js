/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let longest = "";
    let current = "";

    for(let i = 0; i < s.length; i++){
      if(!current.includes(s[i])){
      } else{ //if included
        current = current.slice(current.indexOf(s[i]) + 1);
      }
    current += s[i];
      if(current.length > longest.length){
        longest = current;
      }

    }
    console.log(longest)
    return longest.length
 
};