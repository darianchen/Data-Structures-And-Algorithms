/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums){
    if(nums.length < 2) return nums[0];
    
    let memo = [nums[0], Math.max(nums[0], nums[1])];
    let length = nums.length;
    
    for(let i = 2; i < length; i++){
        let doRob = nums[i] + memo[memo.length - 2];
        let dontRob = memo[memo.length - 1]; 
        
        memo.push(Math.max(doRob, dontRob));
    }

    
    return memo.at(-1);
    
};



// var rob = function(nums) {
//     let answer;    
//     if(nums.length === 1){
//         answer = nums[0]
//     } else
    
//     if(nums.length === 2){
//         answer = Math.max(...nums);
//     } else{
        
//     //[2,4,1]; doRob = 3, dontRob = 4
//     //[2,4,3]; doRob = 5, dontRob = 4
    
//     //Determine the amount if you do rob house i
//     //then determine the amount if you dont rob house i
//     //compare the 2 and save the big money
    
//     // for(let i = 0; i < nums.length; i++){
    
    
//         let i = nums.length - 1;
//         let doRob = nums[i] + rob(nums.slice(0,i - 1));
//         let dontRob = rob(nums.slice(0, i));
        
//         if(doRob > dontRob){
//             answer = doRob;
//         } else{
//             answer = dontRob;
//         }
        
//     }
        
//         console.log(nums.length - 1, answer);
        
//         return answer;
    
//     // }
    
// };