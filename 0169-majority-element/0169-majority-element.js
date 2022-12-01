/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
 
//     let hash = {};
    
//     for(let i = 0; i < nums.length; i++){
//         if(hash[nums[i]]){ //if exist
//             hash[nums[i]]++;
//         }else{ //if not exist
//             hash[nums[i]] = 1;
//         }
//     }
    
//     //return Object.keys(hash).find(key => hash[key] === Math.max(...Object.values(hash)))
    
    return nums.sort()[Math.floor(nums.length/2)]
    
};