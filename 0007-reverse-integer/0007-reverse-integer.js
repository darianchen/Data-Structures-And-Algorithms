/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    
    let reverse = 0;
    
    
    while(x !== 0){
        let num = x % 10;
        reverse = reverse * 10 + num;
        x = (x - num) / 10;        
    
    }
    
    if(reverse < -Math.pow(2, 31) || reverse > Math.pow(2, 31) - 1) return 0;
    
    if(x < 0) return reverse * -1;
    return reverse;
    
};