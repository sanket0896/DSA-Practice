/**
 * Simplify Directory Path
 * 
Given a string A representing an absolute path for a file (Unix-style). Return the string A after simplifying the absolute path. Note:
Absolute path always begin with '/' ( root directory ).
Path will not have whitespace characters.

Input Format
The only argument given is string A.
Output Format
Return a string denoting the simplified absolue path for a file (Unix-style).
For Example
Input 1:
    A = "/home/"
Output 1:
    "/home"

Input 2:
    A = "/a/./b/../../c/"
Output 2:
    "/c"
 */

function solve(A) {
    let arr = A.split('/')
    let stack = [];

    arr.forEach(el => {
        if(!el){
            return;
        }

        if(el === '..'){
            stack.length > 0 && stack.pop();
        }else if(el === '.'){

        }else{
            stack.push(el);
        }
    });

    let ans = '';

    while(stack.length){
        ans = '/' + stack.pop() + ans;
    }

    return ans.length > 0 ? ans : '/';
}

A = "/../.././"

console.log(solve(A));
