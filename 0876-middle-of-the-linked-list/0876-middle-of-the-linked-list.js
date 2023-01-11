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
    node = head; //this makes length start at 1
    length = 1;
    
    while(node.next){
        length += 1;
        node = node.next;
    }
    
    // we have length
//     if(length % 2 == 0){ //even
        
        
//     }
//     else{ //odd
//         newNode = head;
//         for(let  i = 0; i < length/2 + 1; i++){
//             newNode = newNode.next;
//         }
//         return newNode;
//     }
    
    newNode = head;

    for(let i = 0; i < Math.floor(length/2); i++){
        newNode = newNode.next;    
    }
    
    return newNode;
        
};