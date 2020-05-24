/**
 * Redundant Braces
 * 
Given a string A denoting an expression. It contains the following operators '+', '-', '*', '/'. Chech whether A has redundant braces or not. Return 1 if A has redundant braces, else return 0. Note: A will be always a valid expression. 
Input Format
The only argument given is string A.
Output Format
Return 1 if string has redundant braces, else return 0.
For Example
Input 1:
    A = "((a + b))"
Output 1:
    1
    Explanation 1:
        ((a + b)) has redundant braces so answer will be 1.

Input 2:
    A = "(a + (a + b))"
Output 2:
    0
    Explanation 2:
        (a + (a + b)) doesn't have have any redundant braces so answer will be 0.
 */

function solve(A) {
    const al = A.length;

    let stack = [];
    let ans = 0;
    const pushSym = ['(', '+', '-', '*', '/'];
    
    for(let i = 0; i < al; ++i){
        if(pushSym.indexOf(A[i]) !== -1){
            stack.push(A[i]);
        }
        else if(A[i] === ')'){
            let sym = stack.pop();
            if(sym === '('){
                ans = 1;
                break;
            }else{
                while(stack.length > 0){
                    if(sym === '('){
                        break;
                    }
                    sym = stack.pop();
                }
            }
        }
    }

    return ans;
}

A = "(a+b*3+((4/3-1)))";

console.log(solve(A));
