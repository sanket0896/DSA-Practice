/**
 * Remove Duplicates from Sorted List II
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. For example, Given 1->2->3->3->4->4->5, return 1->2->5. Given 1->1->1->2->3, return 2->3.
 */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

function solve(A) {
    let curr = A;
    let uniq = null;

    while (curr !== null) {
        if (curr.next && curr.data === curr.next.data) {
            while (curr.next !== null && curr.data === curr.next.data) {
                curr = curr.next;
            }
            if(!curr.next){
                if(!uniq){
                    A= null;
                }else{
                    uniq.next = null;
                }
            }
        }else{
            if(uniq === null){
                A = curr;
                uniq = curr;
            }else{
                uniq.next = curr;
                uniq = curr;
            }
        }
        
        curr = curr.next;
    }

    return A;
}

// ------------------- Testing ---------------------

let A = [1,2,3,3,4,4,5,6,6];

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