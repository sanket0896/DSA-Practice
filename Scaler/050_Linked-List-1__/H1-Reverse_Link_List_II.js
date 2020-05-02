/**
 * Reverse Link List II
Problem Description
Reverse a linked list A from position B to C. NOTE: Do it in-place and in one-pass. 


Problem Constraints
1 <= |A| <= 106 1 <= B <= C <= |A| 


Input Format
The first argument contains a pointer to the head of the given linked list, A. The second arugment contains an integer, B. The third argument contains an integer C. 


Output Format
Return a pointer to the head of the modified linked list.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = 2
C = 4
Input 2:
A = [1, 2, 3, 4, 5]
B = 1
C = 5


Example Output
Output 1:
[1, 4, 3, 2, 5]
Output 2:
[5, 4, 3, 2, 1]


Example Explanation
In the first example, we want to reverse the highlighted part of the given linked list : [1, [2, 3, 4], 5]. Thus, the output is [1, 4, 3, 2, 5]. In the second example, we want to reverse the highlighted part of the given linked list : [[1, 2, 3, 4, 5]]. Thus, the output is [5, 4, 3, 2, 1].
 */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

function solve(A, B, C) {
    let count = 0;

    let curr = A;
    let prev = null;

    while (curr !== null) {
        ++count;

        if(count === B){
            const {head:rHead, tail:rTail, next:rNext} = reverse(curr, count);

            if(prev === null){
                A = rHead;
            }else{
                prev.next = rHead;
            }

            if(rNext !== null){
                rTail.next = rNext;
            }
            break;
        }else{
            prev = curr;
            curr = curr.next;
        }
    }

    return A;

    function reverse(head, count){
        let curr = head;
        let prev = null;
        let next = null;
        const tail = head;

        while(count <= C){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            ++count;
        }

        head = prev;
        return{head, tail, next};        
    }
}

// ------------------- Testing ---------------------

const A = [1, 2, 3, 4, 5]
const B = 2
const C = 4

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

let newHead = solve(head, B, C);
let ans = [];
while (newHead !== null) {
    ans.push(newHead.data);
    newHead = newHead.next;
}

console.log(ans);