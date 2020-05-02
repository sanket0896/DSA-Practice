/**
 * Reorder List
Problem Description
Given a singly linked list A
 A: A0 → A1 → … → An-1 → An 
reorder it to:
 A0 → An → A1 → An-1 → A2 → An-2 → … 
You must do this in-place without altering the nodes' values. 


Problem Constraints
1 <= |A| <= 106


Input Format
The first and the only argument of input contains a pointer to the head of the linked list A.


Output Format
Return a pointer to the head of the modified linked list.


Example Input
Input 1:
 A = [1, 2, 3, 4, 5] 
Input 2:
 A = [1, 2, 3, 4] 


Example Output
Output 1:
 [1, 5, 2, 4, 3] 
Output 2:
 [1, 4, 2, 3] 


Example Explanation
In the first example, the array will be arranged to [A0, An, A1, An-1, A2]. In the second example, the array will be arranged to [A0, An, A1, An-1].
 */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

function solve(A) {

    if(A.next === null){
        return A;
    }

    let h1 = A;
    let mid = getMid(h1);
    let h2 = mid.next;
    mid.next = null;
    
    h2 = reverse(h2);

    while (h1 || h2) {
        let tmp = null;

        if(h1){
            tmp = h1.next;
            h1.next = h2;
            h1 = tmp;
        }

        if(h2){
            tmp = h2.next;
            h2.next = h1;
            h2 = tmp;
        }
    }

    return A;
    
    function getMid(head){
        let slow = head;
        let fast = head.next;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    function reverse(head) {
        let prev = null;
        let curr = head;
        let next = null;

        while (curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
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