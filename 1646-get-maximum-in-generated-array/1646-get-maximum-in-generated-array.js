/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    
    if(n === 0) return 0;
    
    let memo = [0,1];
    
    
    // for loop
    // start from 2
    // return the max in memo
    
    for(let i = 2; i <= n; i++){
        //even
        if(i%2 === 0){
            memo.push(memo[i/2]);
        } else { //odd
            let num = (i-1)/2;
            memo.push(memo[num] + memo[num + 1])
        }
    };
    return Math.max(...memo);
};