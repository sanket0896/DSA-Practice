/**
 * Intersection of Linked Lists
Write a program to find the node at which the intersection of two singly linked lists begins. For example, the following two linked lists:
A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
B:     b1 → b2 → b3
begin to intersect at node c1.
 Notes:
If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
 */

function solve(A, B) {
    let aCount = 0;
    let bCount = 0;

    let p1 = A;
    while (p1 !== null) {
        ++aCount;
        p1 = p1.next;
    }

    p1 = B;
    while (p1 !== null) {
        ++bCount;
        p1 = p1.next;
    }

    p1 = aCount > bCount ? A : B;
    p2 = aCount > bCount ? B : A;

    let abs = Math.abs(aCount - bCount)
    while (--abs > 0) {
        p1 = p1.next;
    }

    while (p1 && p2 && p1 !== p2) {
        
        p1 = p1.next;
        p2 = p2.next;
    }

    if(!p1 || !p2){
        return null;
    }else{
        return p1;
    }
}

// ------------------- Testing ---------------------

let A = [1,3, 6,4,5];
let B = [8, 9, 1, -1];

// Array to NodeList
function Node(data){
    this.data = data
    this.next = null
}
let head = new Node(A[A.length - 1]);
A[A.length-1] = head;

for(let i = A.length - 2; i >= 0; --i){
    const node = new Node(A[i]);
    node.next = head;
    head = node;
    A[i] = node;
}

let x = 2;
if(B[B.length - 1] !== -1){
    head = new Node(B[B.length - 1]);
    B[B.length-1] = head;
}else{
    x = 3;
    head = new Node(B[B.length - 2]);
    head.next = A[B.length - 1];
    B[B.length-2] = head;
}

for(let i = B.length - x; i >= 0; --i){
    const node = new Node(B[i]);
    node.next = head;
    head = node;
    B[i] = node;
}

console.log(solve(A[0], B[0]).data);