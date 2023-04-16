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
var reverseList = function(head) {
    
    let dummy = head;
    let prevNode = null;
    
    while(dummy) {
        let temp = dummy.next;
        dummy.next = prevNode;
        prevNode = dummy;
        dummy = temp;
    }
    return prevNode;
};