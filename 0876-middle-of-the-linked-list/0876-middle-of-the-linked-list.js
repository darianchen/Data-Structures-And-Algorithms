/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let node = head;
    let arr = [];

    while(node) {
      arr.push(node);
      node = node.next;
    }
    
    return arr[Math.floor(arr.length/2)];
    
    
//     let node = head;
//     let length = 0;
    
//     while(node) {
//         node = node.next;
//         length++;
//     }
    
//     for(let i = 0; i < Math.floor(length/2); i++) {
//         head = head.next;
//     }
    
//     return head;
    
//     let fast = head;
//     let slow = head;
    
//     while(fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow;
};