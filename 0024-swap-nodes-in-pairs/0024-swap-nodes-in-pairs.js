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
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let newHead = head.next;
    let prev = null;
    
    while (head && head.next) {
        let next = head.next;
        head.next = next.next;
        next.next = head;
        
        if (prev) {
            prev.next = next;
        }
        prev = head;
        head = head.next;
    }
    
    return newHead;
};
