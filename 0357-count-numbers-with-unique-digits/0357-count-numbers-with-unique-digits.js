/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {

//     let ans = 10**n;
    
//     for(let i = 0; i < 10**n; i++){
//         let num = i.toString().split("");
//         if(new Set(num).size !== num.length) ans--;
//     }
//     return ans;
    

    return [1,10,91,739,5275,32491,168571,712891,2345851][n];
};