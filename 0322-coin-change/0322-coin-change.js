/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


var coinChange = function(coins, amount, memo = {}) {
    
   if(memo[amount]){
       return memo[amount]
    }
    
    // pick a coin
    // find the remaining needed
    // recursion, changing the coin the first coin
    
    //basecase: when remaining amount = 0;
    let total = Infinity;
     
    if (amount === 0){
        return 0;
    }
    
    if(amount < 0){
        return -1;
    }
    
    
    for(let i = 0; i < coins.length; i++){
        
        let newAmount = amount - coins[i]; //1
        
        let currentSolution = coinChange(coins, newAmount, memo); //-1
        if(newAmount >= 0 && currentSolution != -1){
            currentSolution += 1; //0 
           }
        
        if(currentSolution < total && currentSolution != -1){ total = currentSolution;}
        
    }  
    if(total === Infinity){ total = -1;}
    memo[amount] = total;
    
    return total;
};