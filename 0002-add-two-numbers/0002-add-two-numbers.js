/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let carry = 0;
    let newNode = new ListNode(0);
    let curr = newNode;
    
    
    while(l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = sum >= 10 ? 1 : 0;
        
        
        curr.next = new ListNode(sum % 10);  
        curr = curr.next;
        
        l1 ? l1 = l1.next : null;
        l2 ? l2 = l2.next : null;
    };
    
    if(carry > 0){
        curr.next = new ListNode(1);
    }
    
    return newNode.next;
};