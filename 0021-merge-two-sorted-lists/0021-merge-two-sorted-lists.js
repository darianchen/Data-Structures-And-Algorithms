/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    if(!list1 && !list2) {
        return null;
    }
    
    let dummy = new ListNode(0);
    let head = new ListNode(0);
    head = dummy;        
    
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            dummy.val = list1.val;
            list1 = list1.next;
        } else {
            dummy.val = list2.val;
            list2 = list2.next;
        }
        dummy.next = new ListNode(0);
        dummy = dummy.next;
    }
    
    if(list1) {
        dummy.val = list1.val;
        dummy.next = list1.next;
    } else if(list2) {
        dummy.val = list2.val;
        dummy.next = list2.next;
    }
    
    return head;
};