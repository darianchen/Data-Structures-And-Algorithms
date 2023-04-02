/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    const ht = {};
    
    for(const num of nums) {
        ht[num] = ht[num] + 1 || 1;
    };
    
    for(const key in ht) {
        if(ht[key] === 1) return key;
    };
        
    return ht;
    
  // let result = 0;
  // for (let num of nums) {
  //   result ^= num; // XOR operation
  // }
  // return result;
}
