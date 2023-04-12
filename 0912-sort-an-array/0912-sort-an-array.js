/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    if(nums.length <= 1) {
        return nums;
    }
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);
    
    const sortedLeft = sortArray(left);
    const sortedRight = sortArray(right);
    
    return merge(sortedLeft, sortedRight);

// Bubble Sort O n^2
//     let sorted = false;
    
//     while(!sorted) {
//         sorted = true;
        
//         for(let i = 0; i < nums.length - 1; i++) {
//             if(nums[i] > nums[i + 1]) {
//                 let temp = nums[i];
//                 nums[i] = nums[i + 1];
//                 nums[i + 1] = temp;
//                 sorted = false;
//             }
//         }
        
//     }
//     return nums;
};

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
};