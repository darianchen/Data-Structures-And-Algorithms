/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = [];
    let bool = true;
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]
        strs.forEach( (word)=> {
            let letter = word[i];
            if( (!letter) || (letter !== char) ){ bool = false; }
        });
        if(!bool){
            return prefix.join('');
        } else {

            prefix.push(char);
        }
    }
    return prefix.join('')
};