/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let midIdx = Math.floor(nums.length/2);
    let left = nums.slice(0, midIdx);
    let right = nums.slice(midIdx + 1);

    if(nums.length === 0) return -1;

    if(nums[midIdx] === target) {
      return midIdx;
    } else if(target < nums[midIdx]) {
      return search(left, target);
    } else {
      let result = search(right, target);
      return result === -1 ? -1 : midIdx + 1 + result;
    }
    
//     let left = 0;
//     let right = nums.length - 1;
    
    
//     while(left <= right) {
//         let midIdx = Math.floor((left + right)/2);
//         if(nums[midIdx] ===  target) {
//             return midIdx;
//         } else if(target  < nums[midIdx]) {
//             right = midIdx - 1;
//         } else {
//             left = midIdx + 1;
//         }
//     }
//     return -1;
};