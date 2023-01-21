/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {  
    // > 1000
    // if another within 60 mins same name, diff city
    
    //["name, time(min), amount, city"]
    
    //return list of transaction possibly invalid
    
    
    
    
    //create an array for possibly valid transaction
    
    
    //loop and check for conditions
    
    
    //return that array  
    
    
    let invalid = new Set;
    
    transactions.sort((a, b) => {
        if(parseInt(a.split(",")[1]) < parseInt(b.split(",")[1])){
            return -1;
        }else if (a.split(",")[1] > b.split(",")[1]){
            return 1;
        }else{
            0;
        }
    });
    
    console.log(transactions)
    
    for(let i = 0; i < transactions.length; i++){
        
        const[n,t,a,c] = transactions[i].split(",");
        
        if(a > 1000){
            invalid.add(i);
        }
        
        let j = i + 1;
        // if transactions[j] is undefined, why? j is out of bounds?
        
        while(j < transactions.length && transactions[j].split(",")[1] - t <= 60){
                        
            const[n2, t2,a2,c2] = transactions[j].split(",");
            
            if(n === n2 && c !== c2){
                invalid.add(i);
                invalid.add(j);
            }    
            j++;
        }     
    }
    
    // return Array.from(new Set(invalid));
    
    //.add .has
    // push includes

    let result = [];
    
    for(let i = 0; i < transactions.length; i++){
        if(invalid.has(i)) result.push(transactions[i]);
    }
    
    return result
    

    
    //Set.size is length
    
    //ex 5 transactions 0,1,2,3,4
    //invalid = {0,1,3}
    
    //invalid.size = 3
    
    
};