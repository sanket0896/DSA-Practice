/**
 * Merge Two Sorted Lists
Problem Description
Merge two sorted linked lists A and B and return it as a new list. The new list should be made by splicing together the nodes of the first two lists, and should also be sorted. 


Problem Constraints
0 <= |A|, |B| <= 105


Input Format
The first argument of input contains a pointer to the head of linked list A. The second argument of input contains a pointer to the head of linked list B. 


Output Format
Return a pointer to the head of the merged linked list.


Example Input
Input 1:
A = [5, 8, 20]
B = [4, 11, 15]
Input 2:
A = [1, 2, 3]
B = []


Example Output
Output 1:
[4, 5, 8, 11, 15, 20]
Output 2:
[1, 2, 3]


Example Explanation
For the first example, merging A and B will result in [4, 5, 8, 11, 15, 20]. For the second example, we don't need to merge as B is empty. 
 */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

function solve(A, B) {
    let head = null;
    let curr = null;
    
    if(A === null){
        return B;
    }
    
    if(B === null){
        return A;
    }

    if(A.data <= B.data){
        head = A;
        curr = A;
        A = A.next;
    }else{
        head = B;
        curr = B;
        B = B.next;
    }

    while (A !== null && B !== null) {
        
        if(A.data <= B.data){
            curr.next = A;
            curr = A;
            A = A.next;
        }else{
            curr.next = B;
            curr = B;
            B = B.next;
        }
    }

    if(A !== null){
        curr.next = A;
    }else if(B !== null){
        curr.next = B;
    }

    return head;
}

// ------------------- Testing ---------------------

let A = [1, 6, 7, 8];
let B = [1, 2, 3, 5, 8];

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
A = head;

head = new Node(B[B.length - 1]);

for(let i = B.length - 2; i >= 0; --i){
    const node = new Node(B[i]);
    node.next = head;
    head = node;
}

B = head;

head = solve(A,B);

let ans = [];
while (head !== null) {
    ans.push(head.data);
    head = head.next;
}

console.log(ans);