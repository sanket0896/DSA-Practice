/**
 * Length of longest palindromic list
Given a linked list of integers. Find and return the length of the longest palindrome list that exists in that linked list. Note: A palindrome list is a list that reads the same backward and forward. Expected memory complexity : O(1) 
Input Format
The only argument given is head pointer of the linked list.
Output Format
Return the length of the longest palindrome list.
Constraints
1 <= length of the linked list <= 2000
1 <= Node value <= 100 
For Example
Input 1:
    2 -> 3 -> 3 -> 3
Output 1:
   3 

Input 2:
    A = 2 -> 1 -> 2 -> 1 ->  2 -> 2 -> 1 -> 3 -> 2 -> 2
Output 2:
    5
 */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

function solve(A) {
    let left = null;
    let curr = A;
    let right = null;

    let ans = 0;

    while (curr !== null) {
        right = curr.next;
        let cnt = 0;
        let p1 = left;
        let p2 = right;
        while(p1 && p2 && p1.data === p2.data){
            ++cnt;
            p1 = p1.next;
            p2 = p2.next;
        }
        ans = Math.max(ans, cnt*2+1);

        curr.next = left;
        left = curr;

        cnt = 0;
        p1 = left;
        p2 = right;
        while(p1 && p2 && p1.data === p2.data){
            ++cnt;
            p1 = p1.next;
            p2 = p2.next;
        }
        ans = Math.max(ans, cnt*2);

        curr = right;
    }

    return ans;
}

// ------------------- Testing ---------------------

let A = [3,2,1,1,1,1,2,3,3,4,4,];

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