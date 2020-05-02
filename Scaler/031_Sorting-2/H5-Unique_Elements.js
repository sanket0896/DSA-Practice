/**
 * Unique Elements
 * 
Problem Description
You are given an array A of N elements. You have to make all elements unique, to do so in one step you can increase any number by one. Find the minimum number of steps.  


Problem Constraints
1 <= N <= 104
1 <= A[i] <= 104


Input Format
The only argument given is an Array A, having N integers.


Output Format
Return the Minimum number of steps required to make all elements unique.


Example Input
Input 1:
 A = [1, 1, 3]
 


Example Output
Output 1:
 1
 


Example Explanation
Explanation 1:
 We can increase the value of 1st element by 1 in 1 step and will get all unique elements. i.e [2, 1, 3].
 */

function solve(A) {
    const al = A.length;

    let curr = 0;
    let ans = 0;

    A.sort(cmp);

    for(let i = 0; i < al; ++i){
        if(A[i] > curr){
            curr = A[i];
        }else{
            ++curr;
            ans += curr - A[i];
        }
    }

    return ans;

    function cmp(a, b){
        return a === b ? 0 : (a > b ? 1 : -1);
    }
}

A = [2, 1, 1, 3];

console.log(solve(A));
