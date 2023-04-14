/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let sorted = false;
    
    while(!sorted) {
        sorted = true;
        for(let i = 0; i < nums.length - 1; i++) {
            if(nums[i] > nums[i + 1]) {
                sorted = false;
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
            }   
        }
    }
}
    
    
    
//     let hash = {};
    
//     for(const num of nums) {
//         hash[num] = hash[num] + 1 || 1;
//     }
    
//     let i = 0;
//     for(const key in hash) {
//         for(let j = 0; j < hash[key]; j++) {
//             nums[i] = key;
//             i++;
//         }
//     }
// };
