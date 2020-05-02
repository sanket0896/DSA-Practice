/**
 * Remove Duplicates from Sorted List
Problem Description
Given a sorted linked list, delete all duplicates such that each element appear only once.


Problem Constraints
0 <= length of linked list <= 1000000


Input Format
First argument is the head pointer of the linked list.


Output Format
Return the head pointer of the linked list after removing all duplicates.


Example Input
Input 1:
1->1->2
Input 2:
1->1->2->3->3
 


Example Output
Output 1:
1->2
Output 2:
1->2->3
 


Example Explanation
Explanation 1:
each element appear only once in 1->2.
 */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

function solve(A) {
    let uniq = A;
    let curr = A.next;

    while (curr !== null) {
        if(curr.data !== uniq.data){
            uniq.next = curr;
            uniq = curr;
        }
        curr = curr.next;
    }
    uniq.next = null;

    return A;
}

// ------------------- Testing ---------------------

let A = [1,1,1,1,1,2,3,3,4,4,];

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

head = solve(head);

let ans = [];
while (head !== null) {
    ans.push(head.data);
    head = head.next;
}

console.log(ans);