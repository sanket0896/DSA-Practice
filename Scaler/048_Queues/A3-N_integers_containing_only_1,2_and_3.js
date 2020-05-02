/**
 * N integers containing only 1,2 and 3
Given an integer A. Find and Return first positive A integers in ascending order containing only digits 1,2 and 3. NOTE: all the A integers will fit in 32 bit integer. 
Input Format
The only argument given is integer A.
Output Format
Find and Return first positive A integers in ascending order containing only digits 1,2 and 3.
Constraints
1 <= A <= 29500
For Example
Input 1:
    A = 3
Output 1:
    [1, 2, 3]

Input 2:
    A = 7
Output 2:
    [1, 2, 3, 11, 12, 13, 21]
 */

function solve(A){
    let base = 0;
    let i = 0;
    let ans = [];

    while(i < A && i < 3){
        ans.push(i+1);
        ++i;
    }

    while(i < A){
        ans.push(ans[base]*10 + (i % 3 + 1));
        ++i;
        if(i % 3 === 0){
            ++base;
        }
    }

    return ans;
}

A = 34;
console.log(solve(A));
