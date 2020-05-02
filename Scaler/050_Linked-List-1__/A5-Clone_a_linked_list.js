/**
 * Clone a linked list
 * 
Given a doubly linked list of integers with one pointer of each node pointing to the next node (just like in a single link list) while the second pointer, however, can point to any node in the list and not just the previous node. You have to create a copy of this list and return the head pointer of the duplicated list. 
Input Format
The only argument given is head pointer of the doubly linked list.
Output Format
Return the head pointer of the duplicated list. 
Constraints
1 <= length of the list <= 100000
1 <= Value of node <= 10^5
For Example
Input 1:
     1 -> 2 -> 3 -> 4 -> 5
     random pointer of each node 
     1 -> 5 2 -> 4 3 -> 3 4 -> 2 5 -> 1


Output 1:
    1 -> 2 -> 3 -> 4 -> 5
    random pointer of each node 
    1 -> 5 2 -> 4 3 -> 3 4 -> 2 5 -> 1
 */

 function NodeEl(val) {
     this.data = val;
     this.next = null;
     this.random = null;
 }

function solve(A) {
    let p1 = A;
    let p2 = null;

    while(p1 !== null){
        const tmp = new NodeEl(p1.data);
        tmp.next = p1.next;
        p1.next = tmp;
        p1 = tmp.next;
    }

    p1 = A;
    p2 = A.next;

    while (p1 !== null) {
        p2.random = p1.random ? p1.random.next : null;
        p1 = p1.next.next;
        p2 = p1 !== null ? p2.next.next : null;
    }

    p1 = A;
    p2 = A.next;
    A = p2;

    while (p1 !== null) {
        p1.next = p2 ? p2.next : null;
        p1 = p1.next;
        p2.next = p1 ? p1.next : null;
        p2 = p2.next;
    }

    return A;
}

// ------------------- Testing ---------------------

const A = [1, 2, 3, 4, 1]

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