/**
 * Swap List Nodes in pairs
Problem Description
Given a linked list A, swap every two adjacent nodes and return its head. NOTE: Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed. 


Problem Constraints
1 <= |A| <= 106


Input Format
The first and the only argument of input contains a pointer to the head of the given linked list.


Output Format
Return a pointer to the head of the modified linked list.


Example Input
Input 1:
A = [1, 2, 3, 4]
Input 2:
A = [7, 2, 1]


Example Output
Output 1:
[2, 1, 4, 3]
Output 2:
[2, 7, 1]


Example Explanation
In the first example [[1, 2], [3, 4]] are the adjacent nodes. Swapping them will result in [2, 1, 4, 3]. In the second example, 3rd element i.e. 1 does not have an adjacent node, so it won't be swapped. 
 */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

function solve(A) {

    let start = A;
    let end = A.next;
    let prev = null;

    while(end !== null){
        const {head: rHead, tail: rTail, next: rNext} = reverse(start,2);

        if(prev === null){
            A = rHead;
        }else{
            prev.next = rHead;
        }
        
        prev = rTail;
        prev.next = rNext;

        start = rNext;        
        end = !!start ? start.next : null;
    }

    return A;

    
    function reverse(head, count) {
        let prev = null;
        let curr = head;
        let next = head;
        const tail = head;

        while(count > 0){
            --count;
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        head = prev;

        return {head, tail, next};
    }
}

// --------------------- Testing -----------------------------

const A = [1, 2, 3, 4, 5]

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

let newHead = solve(head);
let ans = [];
while (newHead !== null) {
    ans.push(newHead.data);
    newHead = newHead.next;
}

console.log(ans);