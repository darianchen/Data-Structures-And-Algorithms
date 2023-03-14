/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    
    function dfs(node, curSum){
        if(!node) return 0;
    
        curSum = curSum * 10 + node.val;
    
        if(!node.left && !node.right) return curSum;
        
       return dfs(node.left, curSum) + dfs(node.right, curSum)   
    }
      return dfs(root, 0);
};