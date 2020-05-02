/**
 * K reverse linked list
 * 
Problem Description
Given a singly linked list A and an integer B, reverse the nodes of the list B at a time and return modified linked list.


Problem Constraints
1 <= |A| <= 103 K always divides A     


Input Format
The first argument of input contains a pointer to the head of the linked list. The second arugment of input contains the integer, B.     


Output Format
Return a pointer to the head of the modified linked list.


Example Input
Input 1:
 A = [1, 2, 3, 4, 5, 6]
 B = 2
Input 2:
 A = [1, 2, 3, 4, 5, 6]
 B = 3
    


Example Output
Output 1:
 [2, 1, 4, 3, 6, 5]
Output 2:
 [3, 2, 1, 6, 5, 4]
   


Example Explanation
Explanation 1:
 For the first example, the list can be reversed in groups of 2.
    [[1, 2], [3, 4], [5, 6]]
 After reversing the K-linked list
    [[2, 1], [4, 3], [6, 5]]
Explanation 2:
 For the second example, the list can be reversed in groups of 3.
    [[1, 2, 3], [4, 5, 6]]
 After reversing the K-linked list
    [[3, 2, 1], [6, 5, 4]]
 */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

function solve(A, B) {
    let k = B;
    let start = A;
    let end = A;
    --k;

    while(k > 0 && end !== null){
        end = end.next;
        --k;
    }
    
    let prev = null;
    while(end !== null){        
        end = end.next;
        let rHead = reverse(null, start, B);
        start.next = end;
        
        if(prev === null){
            A = rHead;
        }else{
            prev.next = rHead;
        }
        prev = start;

        k = B-1; // end has already moved 1 place
        // move end k places
        start = end;
        while(k > 0 && end !== null){
            end = end.next;
            --k;
        }
    }

    return A;
    
    function reverse(prev, curr, count) {

        let next = curr.next;
        curr.next = prev;
        --count;

        if(count === 0 || next === null){
            return curr;
        }

        return reverse(curr, next, count)
    }
}

// --------------------- Testing -----------------------------

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const B = 3;

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