/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let answer = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
    
    while(i >= 0 || j >= 0 || carry > 0) {
        let val1 = i >= 0 ? parseInt(num1[i]) : 0;
        let val2 = j >= 0 ? parseInt(num2[j]) : 0;
        let sum = val1 + val2 + carry;
        carry = sum >= 10 ? 1 : 0;
        
        answer = (sum % 10) + answer;
        
        i--;
        j--;
    }    
    return answer;
};