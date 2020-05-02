/**
 * Longest Balanced Substring
Problem Description
Given a string A made up of multiple brackets of type "<>" , "[]" , "()" and "{}" find the length of the longest substring which forms a balanced string . Conditions for a string to be balanced :
Blank string is balanced ( However blank string will not be provided as a test case ).
If B is balanced : (B) , [B] , {B} and <B> are also balanced.
If B1 and B2 are balanced then B1B2 i.e the string formed by concatenating B1 and B2 is also balanced.


Problem Constraints
0 <= |A| <= 106


Input Format
First and only argument is an string A.


Output Format
Return an single integer denoting the lenght of the longest balanced substring.


Example Input
Input 1:
 A = "<<<<>"
Input 2:
 A = "[()]"
Input 3:
 A = "[(])"


Example Output
Output 1:
 2
Output 2:
 4
Output 3:
 0


Example Explanation
Explanation 1:
 Substring [4:5] i.e "<>" is the longest balanced substring of length 2.
Explanation 2:
 Substring [1:4] i.e "[()]" is the longest balanced substring of length 4.
Explanation 3:
 None of the substring is balanced so answer is 0.
 */

function solve(A) {
    let len = A.length;
    let stack1 = []; // < >
    let stack2 = []; // [ ]
    let stack3 = []; // ( )
    let stack4 = []; // { }
    let balanced = new Array(len).fill(0); // index (num) -> isbalanced (bool)
    let max = 0;

    for(let i = 1; i < len; ++i){
        switch (A[i]) {
            case '<':
                stack1.push(i);
                break;
            case '[':
                stack2.push(i);                
                break;
            case '(':
                stack3.push(i);
                break;
            case '{':
                stack4.push(i);
                break;
            case '>':
                if(stack1.length > 0){
                    let matchIdx = stack1.pop();
                    if(matchIdx+1 === i){
                        balanced[i] = 2 + (balanced[matchIdx-1] || 0);
                    }else if(balanced[i-1] === (i - matchIdx - 1)){
                        balanced[i] = 2 + (balanced[i-1] || 0) + (balanced[matchIdx-1] || 0);
                    }
                    max = balanced[i] > max ? balanced[i] : max;
                }
                break;
            case ']':
                if(stack2.length > 0){
                    let matchIdx = stack2.pop();
                    if(matchIdx+1 === i){
                        balanced[i] = 2 + (balanced[matchIdx-1] || 0);
                    }else if(balanced[i-1] === (i - matchIdx - 1)){
                        balanced[i] = 2 + (balanced[i-1] || 0) + (balanced[matchIdx-1] || 0);
                    }
                    max = balanced[i] > max ? balanced[i] : max;
                }
                break;
            case ')':
                if(stack3.length > 0){
                    let matchIdx = stack3.pop();
                    if(matchIdx+1 === i){
                        balanced[i] = 2 + (balanced[matchIdx-1] || 0);
                    }else if(balanced[i-1] === (i - matchIdx - 1)){
                        balanced[i] = 2 + (balanced[i-1] || 0) + (balanced[matchIdx-1] || 0);
                    }
                    max = balanced[i] > max ? balanced[i] : max;
                }
                break;
            case '}':
                if(stack4.length > 0){
                    let matchIdx = stack4.pop();
                    if(matchIdx+1 === i){
                        balanced[i] = 2 + (balanced[matchIdx-1] || 0);
                    }else if(balanced[i-1] === (i - matchIdx - 1)){
                        balanced[i] = 2 + (balanced[i-1] || 0) + (balanced[matchIdx-1] || 0);
                    }
                    max = balanced[i] > max ? balanced[i] : max;
                }
                break;
        
            default:
                break;
        }
    }
    return max;
}

let A = "[]"
console.log(solve(A));
