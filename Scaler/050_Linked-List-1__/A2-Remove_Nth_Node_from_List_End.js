/**
 * Remove Nth Node from List End
 * 
Problem Description
Given a linked list A, remove the B-th node from the end of list and return its head. For example, Given linked list: 1->2->3->4->5, and B = 2. After removing the second node from the end, the linked list becomes 1->2->3->5. NOTE: If B is greater than the size of the list, remove the first node of the list. NOTE: Try doing it using constant additional space. 


Problem Constraints
1 <= |A| <= 106


Input Format
The first argument of input contains a pointer to the head of the linked list. The second argument of input contains the integer B. 


Output Format
Return the head of the linked list after deleting the B-th element from the end.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = 2
Input 2:
A = [1]
B = 1


Example Output
Output 1:
[1, 2, 3, 5]
Output 2:
 [] 


Example Explanation
In the first example, 4 is the second last element. In the second example, 1 is the first and the last element. 
 */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

function solve(A, B) {
    let start = null;
    let end = A;
    --B;

    while(B > 0 && end.next !== null){
        end = end.next;
        --B;
    }

    if(B > 0){
        A = A.next;
    }
    
    if(B === 0){
        if(end.next === null){
            A = A.next;
        }else{
            start = A;
            end = end.next;

            while (end.next !== null) {
                start = start.next;
                end = end.next;
            }

            start.next = start.next.next;
        }
    }
    return A;
}

// --------------------- Testing -----------------------------

const A = [1, 2, 3, 4, 5];
const B = 2;

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

let newHead = solve(head,B);
let ans = [];
while (newHead !== null) {
    ans.push(newHead.data);
    newHead = newHead.next;
}

console.log(ans);