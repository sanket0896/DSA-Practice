/**
 * Palindrome List
Problem Description
Given a singly linked list A, determine if its a palindrome. Return 1 or 0 denoting if its a palindrome or not, respectively.


Problem Constraints
1 <= |A| <= 105


Input Format
The first and the only argument of input contains a pointer to the head of the given linked list.


Output Format
Return 0, if the linked list is not a palindrome. Return 1, if the linked list is a palindrome. 


Example Input
Input 1:
A = [1, 2, 2, 1]
Input 2:
A = [1, 3, 2]


Example Output
Output 1:
 1 
Output 2:
 0 


Example Explanation
The first linked list is a palindrome as [1, 2, 2, 1] is equal to its reversed form. The second linked list is not a palindrom as [1, 3, 2] is not equal to [2, 3, 1]. 


 */

// Definition for singly-linked list.
   function Node(data){
     this.data = data
     this.next = null
   }


function solve(A) {
    let slow = A;
    let fast = A;
    let odd = false;
    let ans = 1;


    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;

        if(!fast.next){
            odd = true;
        }
    }

    slow = odd ? slow.next : slow;

    let stack = [];
    while (slow !== null) {
        stack.push(slow);
        slow = slow.next;
    }

    slow = A;

    while (stack.length) {
        if(slow.data !== stack.pop().data){
            ans = 0;
            break;
        }
        slow = slow.next;
    }

    return ans;
}


// ------------ Testing -------------
A = [2,1,1, 3, 2, 3, 1,1,2]


let top = new Node(A[A.length - 1]);
for(let i = A.length - 2; i >= 0; --i){
    let node = new Node(A[i]);
    node.next = top;
    top = node;
}

console.log(solve(top));
