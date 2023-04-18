/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let late = 0;
    let absent = 0;
    
    for(str of s) {
        if(late === 3) return false;
        if(str === 'A') {
            late = 0;
            absent++;
        } else if(str ==='L') {
            late++;
        } else {
            late = 0;
        }
    }
    return absent < 2 && late < 3 ? true : false;
};