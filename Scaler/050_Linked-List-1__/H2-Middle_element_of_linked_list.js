/**
 * Middle element of linked list
 * 
 * Given a linked list of integers. Find and return the middle element of the linked list. Note: If there are N nodes in the linked list and N is even then return the (N/2+1)th element. 
Input Format
The only argument given head pointer of linked list.
Output Format
Return the middle element of the linked list.
Constraints
1 <= length of the linked list <= 100000
1 <= Node value <= 10^9 
For Example
Input 1:
    1->2->3->4->5
Output 1:
   3 

Input 2:
    A = 1->5->6->2->3->4
Output 2:
    2
 */

 // Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

function solve(A) {
    let slow = A;
    let fast = A;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}


// ------------------- Testing ---------------------

const A = [1, 2, 3, 4, 5, 6, 7, 8];

// Array to NodeList
function Node(data){
    this.data = data
    this.next = null
}
let head = new Node(A[A.length - 1]);

for(let i = A.length - 2; i >= 0; --i){
    const node = new Node(A[i]);
    node.next = head;
    head = node;
}

console.log(solve(head));