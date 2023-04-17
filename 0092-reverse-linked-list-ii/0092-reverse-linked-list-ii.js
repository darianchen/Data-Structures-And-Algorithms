/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    
    let dummy = head;
    let nodes = [];
    
    while(dummy) {
        let next = dummy.next;
        dummy.next= null;
        nodes.push(dummy);
        dummy = next;
    }
    
    let subArray = nodes.slice(left - 1, right).reverse();
    let leftArray = nodes.slice(0, left - 1) 
    let rightArray = nodes.slice(right);
    
    let resultArray = leftArray.concat(subArray).concat(rightArray);
    
    for(let i = 0; i < resultArray.length - 1; i++) {
        resultArray[i].next = resultArray[i + 1];
    }
    return resultArray[0];
};