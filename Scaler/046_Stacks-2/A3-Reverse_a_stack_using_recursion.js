/**
 * Reverse a stack using recursion
Given a stack of integers A. You are required to reverse the stack using recursion. You are not allowed to use loop constructs like while, for..etc, Return A after reversing it using recursion. NOTE: It is mandatory to reverse A using recursion. 
Input Format
The only argument given is the integer array A.
Output Format
Return the reversal of A using stack.
Constraints
1 <= length of the array <= 2000
1 <= A[i] <= 10^8 
For Example
Input 1:
    A = [1, 5, 3, 2, 4]
Output 1:
    [4, 2, 3, 5, 1]

Input 2:
    A = [5, 17, 100, 11]
Output 2:
    [11, 100, 17, 5]
 */

function solve(A) {
    let ans = [];
    recur();
    return ans;
    
    function recur(){
        if(A.length === 0){
            return;
        }
        ans.push(A.pop());
        recur();
    }
}