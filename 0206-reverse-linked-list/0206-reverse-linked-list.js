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
    
    //create while loop that goes on until ListNode.next === undefined
    
    let prevNode = null;
     
    while(head){
        //console.log(head.val);
        let temp = head.next; //oldNext
        //make head.next = prevNode
        head.next = prevNode;
        //2.next = 1;
    
        prevNode = head; //save 
        // prevNode = 2
        
        head = temp; //increment
        //head = 3
    
    }
    
    return prevNode;
    
};


