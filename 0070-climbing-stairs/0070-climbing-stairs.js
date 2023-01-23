/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let ways = 0;
  let memo = [0,1,2];
    
    
  //start from top
    //every step n-1
    
    for(let i = 3; i <= n; i++){
        memo[i] = memo[i - 2] + memo[i - 1];
    }
  return memo[n];  
};


//memo[1] = 1;
//memo[2] = 2;
//memo[3] = 3;
//memo[4] = 5;
//memo[5] = memo[4] + something, memo[3] + something

// 5 1's
// 2 2 1
// 2 1 1 1
// 